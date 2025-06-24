"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);

class PerfilController {
    async index(req, res) {
        try {
            const pessoa = await _pessoas2.default.findOne({
                where: { email: req.body.email }
            });
            
            res.json({
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

exports. default = new PerfilController();