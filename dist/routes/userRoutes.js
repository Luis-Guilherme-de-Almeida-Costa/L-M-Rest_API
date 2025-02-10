"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line
var _express = require('express');
var _userController = require('../controllers/userController'); var _userController2 = _interopRequireDefault(_userController);
var _middleware = require('../middlewares/middleware'); var _middleware2 = _interopRequireDefault(_middleware);


// Rotas principais
const router = new (0, _express.Router)();
router.get('/', _userController2.default.index);
router.post('/', _userController2.default.store);
router.get('/:id', _userController2.default.show);
router.put('/', _userController2.default.update);
router.delete('/:id', _userController2.default.delete);
// Rotas para contatos
exports. default = router;
