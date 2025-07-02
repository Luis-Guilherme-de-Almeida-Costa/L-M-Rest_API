"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _livros = require('../models/livros'); var _livros2 = _interopRequireDefault(_livros);
var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);
var _livros_favoritos = require('../models/livros_favoritos'); var _livros_favoritos2 = _interopRequireDefault(_livros_favoritos);

class Leitura {
    async index(req, res) {
        const termo = req.body.id
        try {
            const livro = await _livros2.default.findAll({
                where: {
                    id_livro: termo
                },
                attributes: ['id_livro', 'titulo', 'visualizacao', 'descricao', 'categoria', 'situacao', 'autor']
            });

            if(livro === 0) {
                return res.status(400).json({
                    errors: "Livro não encontrado!"
                })
            }

            const livrosConvertidos = livro.map(livros => {
                const blob = livros.descricao;
                return {
                    ...livros.toJSON(),
                    descricao: blob ? blob.toString('utf8') : '',
                    categoria: livros.categoria ? livros.categoria.split(',').map(cat => cat.trim()): []
                };
            });

            res.json({
                livros: livrosConvertidos   
            }); 
        } catch (error) {
            return res.status(400).json({
                errors: "Livro não encontrado"
            })
        }
    }

    async store(req, res) {
        const { id, email } = req.body

         if (!id || !email) {
            return res.status(400).json({
                errors: ["ID do livro e e-mail são obrigatórios."]
            });
        }   
        
        try {
            const pessoa = await _pessoas2.default.findOne({
                where: { email }
            });

            if (!pessoa) {
                return res.status(404).json({
                    errors: ["Pessoa não encontrada."]
                });
            }

            const response = await _livros_favoritos2.default.findOne({
                where: {
                    id_livro: id,
                    id_pessoa: pessoa.id_pessoa
                }
            })

            if(response) {
                const deleted = await _livros_favoritos2.default.destroy({
                    where: {
                        id_livro: id,
                        id_pessoa: pessoa.id_pessoa
                    }
                })

                return res.json({
                    errors: "Livro removido com sucesso dos favoritos!"
                })
            }

            const favorite = await _livros_favoritos2.default.create({
                id_livro: id,
                id_pessoa: pessoa.id_pessoa
            })

            return res.json({
                   message: "Livro favoritado com sucesso!"
            }); 
        } catch (error) {
            return res.status(400).json({
                errors: _optionalChain([error, 'access', _ => _.errors, 'optionalAccess', _2 => _2.map, 'call', _3 => _3(err => err.message)]) || [error.message || "Erro interno."]
            })
        }
    }
}

exports. default = new Leitura();