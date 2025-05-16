const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('livros_enviados', {
    id_livro_enviado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    situacao: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    categoria: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    autor: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    livro_file: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    capa_img: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    id_autor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'autor',
        key: 'id_autor'
      }
    }
  }, {
    sequelize,
    tableName: 'livros_enviados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_livro_enviado" },
        ]
      },
      {
        name: "id_autor",
        using: "BTREE",
        fields: [
          { name: "id_autor" },
        ]
      },
    ]
  });
};
