"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);
var _autor = require('../models/autor'); var _autor2 = _interopRequireDefault(_autor);

class PagamentoAutor {

    async index(req, res) {
        const { email } = req.body

        try {
            const response = await _pessoas2.default.findOne({
                    where: { email }
            });
    
            const userAlreadyExists = await _autor2.default.findOne({
                where: { id_pessoa: response.id_pessoa }
            });
    
            if(!userAlreadyExists) {
                return res.json({
                    errors: "Não é um autor!"
                });
            };

            return res.json({
                message: "Já é um autor"
            })
        } catch (error) {
            return res.status(400).json({
                errors: error
            });
        }
    }

    async store(req, res) {
        try {
            const { email } = req.body
            const response = await _pessoas2.default.findOne({
                where: { email }
            });            
            
            const userAlreadyExists = await _autor2.default.findOne({
                where: { id_pessoa: response.id_pessoa }
            });

            if(userAlreadyExists) {
                return res.status(400).json({
                    errors: "Já é um autor!"
                });
            };

            const user = await _autor2.default.create({
                id_pessoa: response.id_pessoa,
                pagamento: 'A'
            });

            res.json({
                message: user.id_autor
            });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }
    }
}

exports. default = new PagamentoAutor();