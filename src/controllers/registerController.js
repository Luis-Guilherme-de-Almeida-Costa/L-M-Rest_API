import Pessoas from "../models/pessoas";

class Register {
    async index(req, res) {
        try {
            const data = await Pessoas.findAll();
            return res.json(data);
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message);
            });
        }
    }

    async store(req, res) {
        try {
            const pessoa = await Pessoas.create({
                nome: req.body.nome,
                email: req.body.email,
                cpf: req.body.cpf,
                senha: req.body.senha
            }); 

            
        } catch (error) {
            
        }

    }
}

export default new Register();