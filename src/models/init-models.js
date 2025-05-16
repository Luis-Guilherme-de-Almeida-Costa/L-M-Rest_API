var DataTypes = require("sequelize").DataTypes;
var _administrador = require("./administrador");
var _assinante = require("./assinante");
var _autor = require("./autor");
var _funcionario = require("./funcionario");
var _livros = require("./livros");
var _livros_enviados = require("./livros_enviados");
var _livros_favoritos = require("./livros_favoritos");
var _pessoas = require("./pessoas");

function initModels(sequelize) {
  var administrador = _administrador(sequelize, DataTypes);
  var assinante = _assinante(sequelize, DataTypes);
  var autor = _autor(sequelize, DataTypes);
  var funcionario = _funcionario(sequelize, DataTypes);
  var livros = _livros(sequelize, DataTypes);
  var livros_enviados = _livros_enviados(sequelize, DataTypes);
  var livros_favoritos = _livros_favoritos(sequelize, DataTypes);
  var pessoas = _pessoas(sequelize, DataTypes);

  livros_enviados.belongsTo(autor, { as: "id_autor_autor", foreignKey: "id_autor"});
  autor.hasMany(livros_enviados, { as: "livros_enviados", foreignKey: "id_autor"});
  livros_favoritos.belongsTo(livros, { as: "id_livro_livro", foreignKey: "id_livro"});
  livros.hasMany(livros_favoritos, { as: "livros_favoritos", foreignKey: "id_livro"});
  administrador.belongsTo(pessoas, { as: "id_pessoa_pessoa", foreignKey: "id_pessoa"});
  pessoas.hasMany(administrador, { as: "administradors", foreignKey: "id_pessoa"});
  assinante.belongsTo(pessoas, { as: "id_pessoa_pessoa", foreignKey: "id_pessoa"});
  pessoas.hasMany(assinante, { as: "assinantes", foreignKey: "id_pessoa"});
  autor.belongsTo(pessoas, { as: "id_pessoa_pessoa", foreignKey: "id_pessoa"});
  pessoas.hasMany(autor, { as: "autors", foreignKey: "id_pessoa"});
  funcionario.belongsTo(pessoas, { as: "id_pessoa_pessoa", foreignKey: "id_pessoa"});
  pessoas.hasMany(funcionario, { as: "funcionarios", foreignKey: "id_pessoa"});
  livros_favoritos.belongsTo(pessoas, { as: "id_pessoa_pessoa", foreignKey: "id_pessoa"});
  pessoas.hasMany(livros_favoritos, { as: "livros_favoritos", foreignKey: "id_pessoa"});

  return {
    administrador,
    assinante,
    autor,
    funcionario,
    livros,
    livros_enviados,
    livros_favoritos,
    pessoas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
