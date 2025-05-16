import Sequelize, { Model } from 'sequelize';

export default class Administrador extends Model {
  return sequelize.define('administrador', {
    id_administrador: {
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
    tableName: 'administrador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_administrador" },
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
