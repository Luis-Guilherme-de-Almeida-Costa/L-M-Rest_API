"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);

class Register {
    async store(req, res) {
        const { nome, email, cpf, senha } = req.body
        try {
            const pessoaExiste = await _pessoas2.default.findOne({
                where: { email }
            }); 

            if (pessoaExiste) {
                return res.status(400).json({
                    errors: "Email já utilizado!"
                })
            }

            const cpfExiste = await _pessoas2.default.findOne({
                where: { cpf }
            }); 

            if(cpfExiste) {
                return res.status(400).json({
                    errors: "CPF já utilizado!"
                })
            }

            const pessoa = await _pessoas2.default.create({
                nome,
                email,
                cpf,
                senha
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