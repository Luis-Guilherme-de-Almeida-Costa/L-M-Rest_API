import Sequelize, { Model } from 'sequelize';

export default class Livros extends Model {
  static init(sequelize) {
    super.init(
      {
        id_livro: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        titulo: {
          type: Sequelize.STRING(40),
          allowNull: true
        },
        visualizacao: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        categoria: {
          type: Sequelize.STRING(30),
          allowNull: true
        },
        autor: {
          type: Sequelize.STRING(55),
          allowNull: true
        },
        livro_file: {
          type: Sequelize.BLOB,
          allowNull: true
        },
        capa_img: {
          type: Sequelize.BLOB,
          allowNull: true
        },
        situacao: {
          type: Sequelize.STRING(15),
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'livros',
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
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
    this.hasMany(models.LivrosFavoritos, {
      foreignKey: 'id_livro',
      as: 'favoritos'
    });
  }
}