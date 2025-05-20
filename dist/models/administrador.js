"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Administrador extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_administrador: {
          autoIncrement: true,
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        matricula: {
          type: _sequelize2.default.STRING(10),
          allowNull: false,
          unique: 'matricula'
        },
        id_pessoa: {
          type: _sequelize2.default.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'administrador',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, { foreignKey: 'id_pessoa' });
  }
} exports.default = Administrador;