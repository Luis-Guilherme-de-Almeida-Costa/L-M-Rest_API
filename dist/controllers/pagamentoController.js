"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);
var _assinante = require('../models/assinante'); var _assinante2 = _interopRequireDefault(_assinante);

class Pagamento {
    async store(req, res) {
        try {
            
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }
    }
}

exports. default = new Pagamento();