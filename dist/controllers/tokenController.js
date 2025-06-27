"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);

class Token {
  async index(req, res) {
    const { email } = req.body;

    if(!email) {
      return res.status(401).json({
        errors: ['Seu email está vazio.']
      })
    }

    try {
      const pessoa = await _pessoas2.default.findOne({
        where: { email }
      });

      const token = _jsonwebtoken2.default.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
      return res.json({ token });
      
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message) 
      });
    }

  }
}

exports. default = new Token();
