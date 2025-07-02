import Livros from "../models/livros";
import Pessoas from "../models/pessoas";
import LivrosFavoritos from "../models/livros_favoritos";

class Leitura {
    async index(req, res) {
        const termo = req.body.id
        try {
            const livro = await Livros.findAll({
                where: {
                    id_livro: termo
                },
                attributes: ['id_livro', 'titulo', 'visualizacao', 'descricao', 'categoria', 'situacao', 'autor']
            });

            if(livro === 0) {
                return res.status(400).json({
                    errors: "Livro não encontrado!"
                })
            }

            const livrosConvertidos = livro.map(livros => {
                const blob = livros.descricao;
                return {
                    ...livros.toJSON(),
                    descricao: blob ? blob.toString('utf8') : '',
                    categoria: livros.categoria ? livros.categoria.split(',').map(cat => cat.trim()): []
                };
            });

            res.json({
                livros: livrosConvertidos   
            }); 
        } catch (error) {
            return res.status(400).json({
                errors: "Livro não encontrado"
            })
        }
    }

    async store(req, res) {
        const { id, email } = req.body

         if (!id || !email) {
            return res.status(400).json({
                errors: ["ID do livro e e-mail são obrigatórios."]
            });
        }   
        
        try {
            const pessoa = await Pessoas.findOne({
                where: { email }
            });

            if (!pessoa) {
                return res.status(404).json({
                    errors: ["Pessoa não encontrada."]
                });
            }

            const response = await LivrosFavoritos.findOne({
                where: {
                    id_livro: id,
                    id_pessoa: pessoa.id_pessoa
                }
            })

            if(response) {
                const deleted = await LivrosFavoritos.destroy({
                    where: {
                        id_livro: id,
                        id_pessoa: pessoa.id_pessoa
                    }
                })

                return res.json({
                    errors: "Livro removido com sucesso dos favoritos!"
                })
            }

            const favorite = await LivrosFavoritos.create({
                id_livro: id,
                id_pessoa: pessoa.id_pessoa
            })

            return res.json({
                   message: "Livro favoritado com sucesso!"
            }); 
        } catch (error) {
            return res.status(400).json({
                errors: error.errors?.map(err => err.message) || [error.message || "Erro interno."]
            })
        }
    }
}

export default new Leitura();