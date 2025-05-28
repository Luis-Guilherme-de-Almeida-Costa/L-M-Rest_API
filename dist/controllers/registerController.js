"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);

class Register {
    async index(req, res) {
        try {
            const data = await _pessoas2.default.findAll();
            return res.json(data);
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            });
        }
    }

    async store(req, res) {
        try {
            /*
            const pessoa = await Pessoas.create({
                nome: req.body.nome,
                email: req.body.email,
                cpf: req.body.cpf,
                senha: req.body.senha
            });
            */
           
            

            
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            });
        }

    }
}

exports. default = new Register();