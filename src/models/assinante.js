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
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'assinante',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id_assinante' }]
          },
          {
            name: 'id_pessoa',
            using: 'BTREE',
            fields: [{ name: 'id_pessoa' }]
          }
        ]
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, {
      foreignKey: 'id_pessoa',
      as: 'pessoa'
    });
  }
}