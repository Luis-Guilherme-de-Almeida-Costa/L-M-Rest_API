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
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id_funcionario' }]
          },
          {
            name: 'matricula',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'matricula' }]
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