import Pessoas from "../models/pessoas";

class Register {
    async store(req, res) {
        try {
            const pessoa = await Pessoas.create({
                nome: req.body.nome,
                email: req.body.email,
                situacao: "A",
                cpf: req.body.cpf,
                senha: req.body.senha
            });

            res.json({
                message: "Registro feito com sucesso!",
            });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }

    }
}

export default new Register();