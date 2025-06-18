"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);

class HomeController {
    async index(req, res) {
        try {
            const pessoa = await _pessoas2.default.findAll();
            res.json({message: pessoa}); 
        } catch (error) {
            return res.status(400).json({
                errors: error.errors
            });
        }
    }
}

exports. default = new HomeController();