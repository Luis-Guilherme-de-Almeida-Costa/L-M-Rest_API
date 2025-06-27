import Pessoas from "../models/pessoas";

class PerfilController {
    async index(req, res) {
        try {
            const pessoa = await Pessoas.findOne({
                where: { email: req.body.email }
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

    async update(req, res) {
        try {
            const pessoa = await Pessoas.findByPk(req.body.id_pessoa);

            if(!pessoa) {
                return res.status(400).json({
                    errors: "Usuário não encontrado!"
                })
            }

            const novaPessoa = await pessoa.update({
                nome: req.body.nome,
                cpf: req.body.cpf,
                email: req.body.email
            });
            
            res.json({
                message: "Seus dados foram atualizados!",
                id_pessoa: pessoa.id_pessoa
            })
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            })
        }
    }
}

export default new PerfilController();