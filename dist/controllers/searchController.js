"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _livros = require('../models/livros'); var _livros2 = _interopRequireDefault(_livros);
var _sequelize = require('sequelize');
class SearchController {
    async index(req, res) {
        const termo = req.body.search
        try {
            const livro = await _livros2.default.findAll({
                where: {
                    titulo: {
                        [_sequelize.Op.like]: `%${termo}%`
                    }
                },
                attributes: ['id_livro', 'titulo', 'visualizacao', 'descricao', 'categoria', 'situacao', 'autor']
            });

            if(!livro) {
                return res.status(400).json({
                    errors: "Livro não encontrado!"
                })
            }

            const livrosConvertidos = livro.map(livros => {
                const blob = livros.descricao;
                return {
                    ...livros.toJSON(),
                    descricao: blob ? blob.toString('utf8') : ''
                };
            });

            res.json({
                livros: livrosConvertidos   
            }); 
        } catch (error) {
            return res.status(400).json({
                errors: "livro nao encontrado"
            })
        }
    }
}

exports. default = new SearchController();