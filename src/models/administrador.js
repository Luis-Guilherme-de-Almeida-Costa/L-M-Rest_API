import Sequelize, { Model } from 'sequelize';

export default class Administrador extends Model {
  static init(sequelize) {
    super.init(
      {
        id_administrador: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        matricula: {
          type: Sequelize.STRING(10),
          allowNull: false,
          unique: 'matricula'
        },
        id_pessoa: {
          type: Sequelize.INTEGER,
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
}