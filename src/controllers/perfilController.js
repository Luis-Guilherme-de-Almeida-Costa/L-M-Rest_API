import Pessoas from "../models/pessoas";

class PerfilController {
    async index(req, res) {
        try {
            const pessoa = await Pessoas.findOne({
                where: { email: req.body.email }
            });
            
            res.json({
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

export default new PerfilController();