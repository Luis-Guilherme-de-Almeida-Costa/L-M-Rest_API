import Pessoas from "../models/pessoas";
import Assinante from "../models/assinante";

class Pagamento {
    async index(req, res) {
        const { email } = req.body

        try {
            const response = await Pessoas.findOne({
                    where: { email }
            });
    
            const userAlreadyExists = await Assinante.findOne({
                where: { id_pessoa: response.id_pessoa }
            });
    
            if(!userAlreadyExists) {
                return res.json({
                    errors: "Não é um assinante!"
                });
            };

            return res.json({
                message: "Já é um assinante"
            })
        } catch (error) {
            return res.status(400).json({
                errors: error
            });
        }
    }


    async store(req, res) {
        try {
            const { email } = req.body
            const response = await Pessoas.findOne({
                where: { email }
            });            
            
            const userAlreadyExists = await Assinante.findOne({
                where: { id_pessoa: response.id_pessoa }
            });

            if(userAlreadyExists) {
                return res.status(400).json({
                    errors: "Já é um assinante!"
                });
            };

            const user = await Assinante.create({
                id_pessoa: response.id_pessoa,
                pagamento: 'A'
            });

            res.json({
                message: user.id_assinante
            });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }
    }
}

export default new Pagamento();