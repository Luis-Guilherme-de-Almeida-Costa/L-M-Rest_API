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
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "id_livro_favorito" },
            ]
          },
          {
            name: "id_pessoa",
            using: "BTREE",
            fields: [
              { name: "id_pessoa" },
            ]
          },
          {
            name: "id_livro",
            using: "BTREE",
            fields: [
              { name: "id_livro" },
            ]
          },
        ]
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, { foreignKey: 'id_pessoa', as: 'pessoa' });
    this.belongsTo(models.Livros, { foreignKey: 'id_livro', as: 'livro' });
  }
} exports.default = LivrosFavoritos;