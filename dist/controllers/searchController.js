"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);

class SearchController {
    async index(req, res) {
        const termo = req.body.searchData
        try {
            const livros = await _pessoas2.default.findAll({
                where: {
                    titulo: {
                        [Op.like]: `%${termo}%`
                    }
                }
            });
            
            if(!pessoa) {
                return res.status(400).json({
                    errors: "E-mail não encontrado!"
                })
            }

            res.json({
                id_pessoa: pessoa.id_pessoa,
                nome: pessoa.nome, 
                cpf: pessoa.cpf,
                email: pessoa.email 
            }); 
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            })
        }
    }
}

exports. default = new SearchController();