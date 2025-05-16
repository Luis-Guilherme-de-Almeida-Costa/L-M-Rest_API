const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('livros', {
    id_livro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    visualizacao: {
      type: DataTypes.INTEGER,
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
    situacao: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
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
  });
};
