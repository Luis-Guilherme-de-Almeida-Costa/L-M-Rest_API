import Sequelize, { Model } from 'sequelize';

export default class Assinante extends Model {
  static init(sequelize) {
    super.init(
      {
        id_assinante: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        id_pessoa: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        pagamento: {
          type: Sequelize.STRING(15),
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
}