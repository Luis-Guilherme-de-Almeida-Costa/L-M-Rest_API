"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _livros = require('../models/livros'); var _livros2 = _interopRequireDefault(_livros);
var _livros_favoritos = require('../models/livros_favoritos'); var _livros_favoritos2 = _interopRequireDefault(_livros_favoritos);
var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);

class Favorito {
    async index(req, res) {
        const { email, id } = req.body
        try {
            const pessoa = await _pessoas2.default.findOne({
                where: { email }
            });

            if (!pessoa) {
                return res.status(404).json({
                    errors: ["Pessoa não encontrada."]
                });
            } 

            const favoritos = await _livros_favoritos2.default.findAll({
                where: {
                    id_pessoa: pessoa.id_pessoa
                },

                attributes: ['id_livro']
            })

            //const livros = await Livros.findAll({
            //    where: {
//
            //    },
            //    attributes: ['id_livro', 'titulo', 'categoria', 'visualizacao', 'autor', 'situacao']
            //});      

            return res.json({
                favoritos
            });

        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }

    }
}

exports. default = new Favorito();
