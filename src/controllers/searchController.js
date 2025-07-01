import Livros from "../models/livros";
import { Op } from "sequelize"
class SearchController {
    async index(req, res) {
        const termo = req.body.search
        try {
            const livro = await Livros.findAll({
                where: {
                    titulo: {
                        [Op.like]: `%${termo}%`
                    }
                },
                attributes: ['id_livro', 'titulo', 'visualizacao', 'descricao', 'categoria', 'situacao', 'autor']
            });

            if(!livro) {
                return res.status(400).json({
                    errors: "Livro não encontrado!"
                })
            }

            const livrosConvertidos = livro.map(livros => {
                const blob = livros.descricao;
                return {
                    ...livros.toJSON(),
                    descricao: blob ? blob.toString('utf8') : ''
                };
            });

            res.json({
                livros: livrosConvertidos   
            }); 
        } catch (error) {
            return res.status(400).json({
                errors: "livro nao encontrado"
            })
        }
    }
}

export default new SearchController();