import Pessoas from "../models/pessoas";

class HomeController {
    async index(req, res) {
        const pessoa = await Pessoas.findAll();

        res.json(pessoa); 
    }
}

export default new Pessoa();