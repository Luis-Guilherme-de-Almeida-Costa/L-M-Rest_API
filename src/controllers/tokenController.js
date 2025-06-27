import jwt from 'jsonwebtoken';

import Pessoas from '../models/pessoas';

class Token {
  async index(req, res) {
    const { email } = req.body;

    if(!email) {
      return res.status(401).json({
        errors: ['Seu email está vazio.']
      })
    }

    try {
      const pessoa = await Pessoas.findOne({
        where: { email }
      });

      const token = jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
      return res.json({ token });
      
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message) 
      });
    }

  }
}

export default new Token();
