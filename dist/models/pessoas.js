"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Pessoas extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_pessoa: {
          autoIncrement: true,
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: _sequelize2.default.STRING(55),
          allowNull: true
        },
        email: {
          type: _sequelize2.default.STRING(65),
          allowNull: true,
          unique: "email"
        },
        cpf: {
          type: _sequelize2.default.STRING(15),
          allowNull: true,
          unique: "cpf"
        },
        situacao: {
          type: _sequelize2.default.CHAR(2),
          allowNull: true
        },
        senha: {
          type: _sequelize2.default.STRING(255),
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'pessoas',
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.LivrosFavoritos, { foreignKey: 'id_pessoa' });
  }
} exports.default = Pessoas;