"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line
var _express = require('express');
var _registerController = require('../controllers/registerController'); var _registerController2 = _interopRequireDefault(_registerController);
var _loginController = require('../controllers/loginController'); var _loginController2 = _interopRequireDefault(_loginController);

// Rotas principais
const router = new (0, _express.Router)();
router.post('/register/', _registerController2.default.store);
router.post('/login/', _loginController2.default.index);

// Rotas para contatos
exports. default = router;
