"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Autor extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_autor: {
          autoIncrement: true,
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        pagamento: {
          type: _sequelize2.default.STRING(15),
          allowNull: true
        },
        id_pessoa: {
          type: _sequelize2.default.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'autor',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, { foreignKey: 'id_pessoa' });

    this.hasMany(models.LivrosEnviados, { foreignKey: 'id_autor' });
  }
} exports.default = Autor;