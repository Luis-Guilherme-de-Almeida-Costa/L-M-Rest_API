const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('funcionario', {
    id_funcionario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    matricula: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: "matricula"
    },
    id_pessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pessoas',
        key: 'id_pessoa'
      }
    }
  }, {
    sequelize,
    tableName: 'funcionario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_funcionario" },
        ]
      },
      {
        name: "matricula",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "matricula" },
        ]
      },
      {
        name: "id_pessoa",
        using: "BTREE",
        fields: [
          { name: "id_pessoa" },
        ]
      },
    ]
  });
};
