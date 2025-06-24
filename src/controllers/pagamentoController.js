import Pessoas from "../models/pessoas";
import Assinante from "../models/assinante";

class Pagamento {
    async store(req, res) {
        try {
            
            const response = await Pessoas.findOne({
                where: { email: req.body.email }
            });            
            
            const userAlreadyExists = await Assinante.findOne({
                where: { id_pessoa: response.id_pessoa }
            })

            if(userAlreadyExists) {
                return res.status(400).json({
                    errors: "Já é um assinante!"
                });
            }

            const user = await Assinante.create({
                id_pessoa: response.id_pessoa,
                pagamento: 'A'
            });

            res.json({
                message: "Inscrição feita com sucesso!"
            })
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }
    }
}

export default new Pagamento();