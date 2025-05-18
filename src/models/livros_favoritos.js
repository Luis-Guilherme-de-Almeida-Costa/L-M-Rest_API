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
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "id_livro_favorito" },
            ]
          },
          {
            name: "id_pessoa",
            using: "BTREE",
            fields: [
              { name: "id_pessoa" },
            ]
          },
          {
            name: "id_livro",
            using: "BTREE",
            fields: [
              { name: "id_livro" },
            ]
          },
        ]
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pessoas, { foreignKey: 'id_pessoa', as: 'pessoa' });
    this.belongsTo(models.Livros, { foreignKey: 'id_livro', as: 'livro' });
  }
}