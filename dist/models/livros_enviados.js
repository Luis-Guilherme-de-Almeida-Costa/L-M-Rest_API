"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrosEnviados extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_livro_enviado: {
          autoIncrement: true,
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        situacao: {
          type: _sequelize2.default.STRING(15),
          allowNull: false
        },
        titulo: {
          type: _sequelize2.default.STRING(40),
          allowNull: true
        },
        categoria: {
          type: _sequelize2.default.STRING(30),
          allowNull: true
        },
        autor: {
          type: _sequelize2.default.STRING(55),
          allowNull: true
        },
        livro_file: {
          type: _sequelize2.default.BLOB,
          allowNull: true
        },
        capa_img: {
          type: _sequelize2.default.BLOB,
          allowNull: true
        },
        id_autor: {
          type: _sequelize2.default.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'livros_enviados',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Autor, { foreignKey: 'id_autor' });
  }
} exports.default = LivrosEnviados;