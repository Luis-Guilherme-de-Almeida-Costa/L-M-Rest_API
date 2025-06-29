import Livro from "../models/livros";

class Livros {
    async index(req, res) {
        try {
            const livros = await Livro.findAll({
                attributes: ['id_livro', 'titulo', 'categoria', 'visualizacao', 'autor', 'situacao']
            });            
            return res.json({
                id_livro: livros.id_livro, 
            });

        } catch (error) {
            return res.status(400).json({
                errors: error
            })
        }

    }
}

export default new Livros();
