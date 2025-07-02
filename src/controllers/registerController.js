import Pessoas from "../models/pessoas";

class Register {
    async store(req, res) {
        const { nome, email, cpf, senha } = req.body
        try {
            const pessoaExiste = await Pessoas.findOne({
                where: { email }
            }); 

            if (pessoaExiste) {
                return res.status(400).json({
                    errors: "Email já utilizado!"
                })
            }

            const cpfExiste = await Pessoas.findOne({
                where: { cpf }
            }); 

            if(cpfExiste) {
                return res.status(400).json({
                    errors: "CPF já utilizado!"
                })
            }

            const pessoa = await Pessoas.create({
                nome,
                email,
                cpf,
                senha
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