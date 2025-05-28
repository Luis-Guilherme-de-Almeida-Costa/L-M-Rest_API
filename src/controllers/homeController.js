import Pessoas from "../models/pessoas";

class HomeController {
    async index(req, res) {

        try {
            const pessoa = await Pessoas.findAll();
            res.json(pessoa); 
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            });
        }
    }
}

export default new HomeController();