"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrosFavoritos extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_livro_favorito: {
          autoIncrement: true,
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        id_pessoa: {
          type: _sequelize2.default.INTEGER,
          allowNull: false,
        },
        id_livro: {
          type: _sequelize2.default.INTEGER,
          allowNull: false,
        }
      },
      {
        sequelize,
        tableName: 'livros_favoritos',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, { foreignKey: 'id_pessoa' });
    this.belongsTo(models.Livros, { foreignKey: 'id_livro' });
  }
} exports.default = LivrosFavoritos;