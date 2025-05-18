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
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id_administrador' }]
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