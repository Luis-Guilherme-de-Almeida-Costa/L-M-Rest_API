"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);

class Register {
    async store(req, res) {
        try {
            const pessoa = await _pessoas2.default.create({
                nome: req.body.nome,
                email: req.body.email,
                situacao: "A",
                cpf: req.body.cpf,
                senha: req.body.senha
            });

            res.json({
                message: "Registro feito com sucesso!",
            });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }

    }
}

exports. default = new Register();