"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _livros = require('../models/livros'); var _livros2 = _interopRequireDefault(_livros);

class Livros {
    async index(req, res) {
        try {
            const livros = await _livros2.default.findByPk(req.params.id, {
                atributes: ['capa_img']
            });   

            if (!livros || !livros.capa_img) return res.status(404).send('Capa não encontrada');
            res.set('Content-Type', 'image/jpeg');
            res.set('Cross-Origin-Resource-Policy', 'cross-origin');
            return res.send(livros.capa_img);
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }

    }
}

exports. default = new Livros();
