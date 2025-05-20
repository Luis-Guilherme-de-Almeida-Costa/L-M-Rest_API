"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _pessoas = require('../models/pessoas'); var _pessoas2 = _interopRequireDefault(_pessoas);
var _livros = require('../models/livros'); var _livros2 = _interopRequireDefault(_livros);
var _livros_favoritos = require('../models/livros_favoritos'); var _livros_favoritos2 = _interopRequireDefault(_livros_favoritos);
var _livros_enviados = require('../models/livros_enviados'); var _livros_enviados2 = _interopRequireDefault(_livros_enviados);
var _funcionario = require('../models/funcionario'); var _funcionario2 = _interopRequireDefault(_funcionario);
var _autor = require('../models/autor'); var _autor2 = _interopRequireDefault(_autor);
var _assinante = require('../models/assinante'); var _assinante2 = _interopRequireDefault(_assinante);
var _administrador = require('../models/administrador'); var _administrador2 = _interopRequireDefault(_administrador);

const models = [_pessoas2.default, _livros2.default, _livros_favoritos2.default, _livros_enviados2.default, _funcionario2.default, _autor2.default, _assinante2.default, _administrador2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));