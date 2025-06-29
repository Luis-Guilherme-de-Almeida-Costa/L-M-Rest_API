import Pessoas from "../models/pessoas";
import Autor from "../models/autor";

class PagamentoAutor {

    async index(req, res) {
        const { email } = req.body

        try {
            const response = await Pessoas.findOne({
                    where: { email }
            });
    
            const userAlreadyExists = await Autor.findOne({
                where: { id_pessoa: response.id_pessoa }
            });
    
            if(!userAlreadyExists) {
                return res.json({
                    errors: "Não é um autor!"
                });
            };

            return res.json({
                message: "Já é um autor"
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
            
            const userAlreadyExists = await Autor.findOne({
                where: { id_pessoa: response.id_pessoa }
            });

            if(userAlreadyExists) {
                return res.status(400).json({
                    errors: "Já é um autor!"
                });
            };

            const user = await Autor.create({
                id_pessoa: response.id_pessoa,
                pagamento: 'A'
            });

            res.json({
                message: user.id_autor
            });
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }
    }
}

export default new PagamentoAutor();