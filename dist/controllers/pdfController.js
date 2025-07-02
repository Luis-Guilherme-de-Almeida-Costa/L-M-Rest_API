"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _livros = require('../models/livros'); var _livros2 = _interopRequireDefault(_livros);

class Pdf {
    async index(req, res) {
        try {
            const livro = await _livros2.default.findByPk(req.params.id);   

            if (!livro || !livro.livro_file) return res.status(404).send('PDF não encontrado');
            res.setHeader('Content-Type', 'application/pdf');
            res.set('Cross-Origin-Resource-Policy', 'cross-origin');
            return res.send(livro.livro_file);
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }   
    }
}

exports. default = new Pdf();