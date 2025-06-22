import Pessoas from "../models/pessoas";
import Assinante from "../models/assinante";

class Pagamento {
    async store(req, res) {
        try {
            
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message) 
            });
        }
    }
}

export default new Pagamento();