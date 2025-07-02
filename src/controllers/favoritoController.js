import Livros from "../models/livros";
import LivrosFavoritos from "../models/livros_favoritos";
import Pessoas from "../models/pessoas";

class Favorito {
    async index(req, res) {
        const { email } = req.body
        try {
            const pessoa = await Pessoas.findOne({
                where: { email }
            });

            if (!pessoa) {
                return res.status(404).json({
                    errors: ["Pessoa não encontrada."]
                });
            } 

            const favoritos = await LivrosFavoritos.findAll({
                where: {
                    id_pessoa: pessoa.id_pessoa
                },

                attributes: ['id_livro']
            })      

            return res.json({
                favoritos
            });

        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }

    }
}

export default new Favorito();
