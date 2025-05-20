import Sequelize, { Model } from 'sequelize';

export default class LivrosFavoritos extends Model {
  static init(sequelize) {
    super.init(
      {
        id_livro_favorito: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        id_pessoa: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        id_livro: {
          type: Sequelize.INTEGER,
          allowNull: false,
        }
      },
      {
        sequelize,
        tableName: 'livros_favoritos',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, { foreignKey: 'id_pessoa' });
    this.belongsTo(models.Livros, { foreignKey: 'id_livro' });
  }
}