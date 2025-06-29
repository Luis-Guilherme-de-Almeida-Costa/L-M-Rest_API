import Livros from "../models/pessoas";

class SearchController {
    async index(req, res) {
        const termo = req.body.searchData
        try {
            const livros = await Livros.findAll({
                where: {
                    titulo: {
                        [Op.like]: `%${termo}%`
                    }
                }
            });
            
            if(!pessoa) {
                return res.status(400).json({
                    errors: "E-mail não encontrado!"
                })
            }

            res.json({
                id_pessoa: pessoa.id_pessoa,
                nome: pessoa.nome, 
                cpf: pessoa.cpf,
                email: pessoa.email 
            }); 
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            })
        }
    }
}

export default new SearchController();