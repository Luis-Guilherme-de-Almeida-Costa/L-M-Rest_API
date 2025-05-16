const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('livros_favoritos', {
    id_livro_favorito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pessoas',
        key: 'id_pessoa'
      }
    },
    id_livro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'livros',
        key: 'id_livro'
      }
    }
  }, {
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
  });
};
