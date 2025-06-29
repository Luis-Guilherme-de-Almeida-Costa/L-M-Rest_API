"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Assinante extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_assinante: {
          autoIncrement: true,
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        id_pessoa: {
          type: _sequelize2.default.INTEGER,
          allowNull: false
        },
        pagamento: {
          type: _sequelize2.default.STRING(15),
          defaultValue: 'A',
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'assinante',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, { foreignKey: 'id_pessoa' });
  }
} exports.default = Assinante;