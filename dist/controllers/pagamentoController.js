"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);
var _assinante = require('../models/assinante'); var _assinante2 = _interopRequireDefault(_assinante);

class Pagamento {
    async index(req, res) {
        const { email } = req.body

        try {
            const response = await _pessoas2.default.findOne({
                    where: { email }
            });
    
            const userAlreadyExists = await _assinante2.default.findOne({
                where: { id_pessoa: response.id_pessoa }
            });
    
            if(!userAlreadyExists) {
                return res.json({
                    errors: "Não é um assinante!"
                });
            };

            return res.json({
                message: "Já é um assinante"
            })
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            });
        }
    }


    async store(req, res) {
        try {
            const { email } = req.body
            const response = await _pessoas2.default.findOne({
                where: { email }
            });            
            
            const userAlreadyExists = await _assinante2.default.findOne({
                where: { id_pessoa: response.id_pessoa }
            });

            if(userAlreadyExists) {
                return res.status(400).json({
                    errors: "Já é um assinante!"
                });
            };

            const user = await _assinante2.default.create({
                id_pessoa: response.id_pessoa,
                pagamento: 'A'
            });

            res.json({
                message: user.id_assinante
            });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }
    }
}

exports. default = new Pagamento();