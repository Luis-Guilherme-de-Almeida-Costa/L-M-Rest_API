"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

class Register {
    async update(req, res) {
        const { senha, email } = req.body;

        try {
            const pessoa = await _pessoas2.default.findOne({
                where: { email }
            });

            if(!pessoa) {
                return res.status(400).json({
                    errors: "E-mail não encontrado!"
                })
            }

            const senha_hash = await _bcryptjs2.default.hash(senha, 8)

            const novaSenha = await pessoa.update({
                senha_hash
            })
            
            res.json({
                message: "Atualização de senha feita com sucesso!",
            });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }

    }
}

exports. default = new Register();