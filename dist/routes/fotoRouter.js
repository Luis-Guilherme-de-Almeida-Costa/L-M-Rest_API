"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _middleware = require('../middlewares/middleware'); var _middleware2 = _interopRequireDefault(_middleware);

var _fotoController = require('../controllers/fotoController'); var _fotoController2 = _interopRequireDefault(_fotoController);
const router = new (0, _express.Router)();

router.post('/', _fotoController2.default.store);

exports. default = router;