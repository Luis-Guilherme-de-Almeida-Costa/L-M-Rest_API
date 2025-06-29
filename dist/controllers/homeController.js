"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _livros = require('../models/livros'); var _livros2 = _interopRequireDefault(_livros);

class Home {
    async index(req, res) {
        try {
            const pessoa = await _livros2.default.findAll();            
            return res.json({
                pessoa
            });

        } catch (error) {
            return res.status(400).json({
                errors: error
            })
        }

    }
}

exports. default = new Home();
