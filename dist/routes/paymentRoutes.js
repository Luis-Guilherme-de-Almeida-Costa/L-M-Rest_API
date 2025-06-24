"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line
var _express = require('express');
var _pagamentoController = require('../controllers/pagamentoController'); var _pagamentoController2 = _interopRequireDefault(_pagamentoController);

// Rotas principais
const router = new (0, _express.Router)();


router.post('/index/', _pagamentoController2.default.store);


// Rotas para contatos
exports. default = router;
