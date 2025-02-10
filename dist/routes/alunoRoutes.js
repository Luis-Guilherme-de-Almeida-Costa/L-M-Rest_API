"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line
var _express = require('express');

var _middleware = require('../middlewares/middleware'); var _middleware2 = _interopRequireDefault(_middleware);
var _alunoController = require('../controllers/alunoController'); var _alunoController2 = _interopRequireDefault(_alunoController);

// Rotas principais
const router = new (0, _express.Router)();
router.get('/', _alunoController2.default.index);
router.post('/', _alunoController2.default.store);
router.put('/:id', _alunoController2.default.update);
router.get('/:id', _alunoController2.default.show);
router.post('/:id', _alunoController2.default.delete);

// Rotas para contatos
exports. default = router;
