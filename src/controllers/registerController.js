import Pessoas from "../models/pessoas";

class Register {
    async store(req, res) {
        try {
            const pessoa = await Pessoas.create({
                nome: "Luis",
                email: "olaluis12@gmail.com",
                situacao: "A",
                cpf: "12345678901",
                senha: "123123"
            });
            res.json(pessoa);
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            });
        }

    }
}

export default new Register();