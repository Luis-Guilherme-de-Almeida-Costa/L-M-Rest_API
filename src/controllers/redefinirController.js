import Pessoas from "../models/pessoas";
import bcryptjs from "bcryptjs";

class Register {
    async update(req, res) {
        const { senha, email } = req.body;

        try {
            const pessoa = await Pessoas.findOne({
                where: { email }
            });

            if(!pessoa) {
                return res.status(400).json({
                    errors: "E-mail não encontrado!"
                })
            }

            const senha_hash = await bcryptjs.hash(senha, 8)

            const novaSenha = await pessoa.update({
                senha_hash
            })
            
            res.json({
                message: "Atualização de senha feita com sucesso!",
            });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }

    }
}

export default new Register();