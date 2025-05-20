import Sequelize, { Model } from 'sequelize';

export default class Autor extends Model {
  static init(sequelize) {
    super.init(
      {
        id_autor: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        pagamento: {
          type: Sequelize.STRING(15),
          allowNull: true
        },
        id_pessoa: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'autor',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, { foreignKey: 'id_pessoa' });

    this.hasMany(models.LivrosEnviados, { foreignKey: 'id_autor' });
  }
}