"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);

class Login {
    async index(req, res) {
        const { email = '', senha = ''} = req.body;

        if(!email || !senha) {
            return res.status(401).json({
              errors: ['Ou seu email, ou sua senha está vazia.']
            })
        }
        
        try {
            const pessoa = await _pessoas2.default.findOne({
                where: { email }
            });            
            
            if (!pessoa) {
                return res.status(400).json({
                    errors: "Email inexistente!"
                })
            }

            const pessoaValida = await pessoa.isValidPassword(senha);

            if(!pessoaValida) {
                return res.status(400).json({
                    errors: "Senha inválida!"
                })
            }    
            
            const { id_pessoa } = pessoa;

            return res.json({
                message: "Autênticação feita com sucesso!",
                email: email,
                user: pessoa.nome,
            });

        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            })
        }

    }
}

exports. default = new Login();
