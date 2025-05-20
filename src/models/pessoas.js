import Sequelize, { Model } from 'sequelize';

export default class Pessoas extends Model {
  static init(sequelize) {
    super.init(
      {
        id_pessoa: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING(55),
          allowNull: true
        },
        email: {
          type: Sequelize.STRING(65),
          allowNull: true,
          unique: "email"
        },
        cpf: {
          type: Sequelize.STRING(15),
          allowNull: true,
          unique: "cpf"
        },
        situacao: {
          type: Sequelize.CHAR(2),
          allowNull: true
        },
        senha: {
          type: Sequelize.STRING(255),
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
}