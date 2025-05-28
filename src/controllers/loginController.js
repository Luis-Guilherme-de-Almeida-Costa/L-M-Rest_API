import Pessoas from "../models/pessoas";

class Login {
    async index(req, res) {
        const { email = '', senha = ''} = req.body;

        try {
            Pessoas.findAll({
                where: {
                    email: { email },
                    senha_hash: {  }
                }
            });
        } catch (error) {
            
        }

    }
}

export default new Login();
