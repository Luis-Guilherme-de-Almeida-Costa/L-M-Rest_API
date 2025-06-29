import Livros from "../models/livros";

class Home {
    async index(req, res) {
        try {
            const livros = await Livro.findAll({
                attributes: ['id_livro', 'titulo', 'categoria', 'visualizacao', 'autor', 'situacao']
            });            
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

export default new Home();
