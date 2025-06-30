"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _livros = require('../models/livros'); var _livros2 = _interopRequireDefault(_livros);
var _sequelize = require('sequelize');
class SearchController {
    async index(req, res) {
        const termo = req.body.searchData
        try {
            const livro = await _livros2.default.findAll({
                where: {
                    titulo: {
                        [_sequelize.Op.like]: `%${termo}%`
                    }
                },
                attributes: ['id_livro', 'titulo', 'visualizacao', 'categoria', 'situacao', 'autor']
            });

            if(!livro) {
                return res.status(400).json({
                    errors: "Livro não encontrado!"
                })
            }

            res.json({
                livro   
            }); 
        } catch (error) {
            return res.status(400).json({
                errors: "livro nao encontrado"
            })
        }
    }
}

exports. default = new SearchController();