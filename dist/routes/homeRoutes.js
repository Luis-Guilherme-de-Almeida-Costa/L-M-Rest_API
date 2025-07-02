"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line
var _express = require('express');
var _homeController = require('../controllers/homeController'); var _homeController2 = _interopRequireDefault(_homeController);
var _searchController = require('../controllers/searchController'); var _searchController2 = _interopRequireDefault(_searchController);
var _livrosController = require('../controllers/livrosController'); var _livrosController2 = _interopRequireDefault(_livrosController);
var _leituraController = require('../controllers/leituraController'); var _leituraController2 = _interopRequireDefault(_leituraController);
var _favoritoController = require('../controllers/favoritoController'); var _favoritoController2 = _interopRequireDefault(_favoritoController);
var _pdfController = require('../controllers/pdfController'); var _pdfController2 = _interopRequireDefault(_pdfController);
// Rotas principais
const router = new (0, _express.Router)();
router.get('/', _homeController2.default.index);
router.get('/acao', _homeController2.default.acao);
router.get('/livros/:id/capa', _livrosController2.default.index);
router.get('/leitura/pdf/:id', _pdfController2.default.index);
router.post('/search', _searchController2.default.index);
router.post('/leitura', _leituraController2.default.index);
router.post('/leitura/favorites/', _leituraController2.default.store)
router.post('/leitura/favorites/index', _favoritoController2.default.index)


// Rotas para contatos
exports. default = router;
