"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Livros extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_livro: {
          autoIncrement: true,
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        titulo: {
          type: _sequelize2.default.STRING(40),
          allowNull: true
        },
        visualizacao: {
          type: _sequelize2.default.INTEGER,
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
        situacao: {
          type: _sequelize2.default.STRING(15),
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'livros',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.LivrosFavoritos, { foreignKey: 'id_livro' });
  }
} exports.default = Livros;