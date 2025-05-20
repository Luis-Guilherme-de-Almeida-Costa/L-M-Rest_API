import Sequelize, { Model } from 'sequelize';

export default class LivrosEnviados extends Model {
  static init(sequelize) {
    super.init(
      {
        id_livro_enviado: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        situacao: {
          type: Sequelize.STRING(15),
          allowNull: false
        },
        titulo: {
          type: Sequelize.STRING(40),
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
        id_autor: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'livros_enviados',
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Autor, { foreignKey: 'id_autor' });
  }
}