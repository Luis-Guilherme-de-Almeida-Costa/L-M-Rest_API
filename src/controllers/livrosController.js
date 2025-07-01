import Livro from "../models/livros";

class Livros {
    async index(req, res) {
        try {
            const livros = await Livro.findByPk(req.params.id, {
                attributes: ['capa_img']
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

export default new Livros();
