import Sequelize, { Model } from 'sequelize';

export default class Funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        id_funcionario: {
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
        tableName: 'funcionario',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, { foreignKey: 'id_pessoa' });
  }
}