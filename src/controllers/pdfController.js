import Livros from "../models/livros";

class Pdf {
    async index(req, res) {
        try {
            const livro = await Livros.findByPk(req.params.id);   

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

export default new Pdf();