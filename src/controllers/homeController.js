import Livros from "../models/livros";

class Home {
    async index(req, res) {
        try {
            const livros = await Livros.findAll({
                attributes: ['id_livro', 'titulo', 'categoria', 'visualizacao', 'autor', 'situacao']
            });            
            return res.json({
                livros
            });

        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }

    }
}

export default new Home();
