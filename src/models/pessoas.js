import Sequelize, { Model } from 'sequelize';

export default class Pessoas extends Model {
      static init(sequelize) {
        super.init(
          {
            id_pessoa: {
              autoIncrement: true,
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true
            },
            nome: {
              type: DataTypes.STRING(55),
              allowNull: true
            },
            email: {
              type: DataTypes.STRING(65),
              allowNull: true,
              unique: "email"
            },
            cpf: {
              type: DataTypes.STRING(15),
              allowNull: true,
              unique: "cpf"
            },
            situacao: {
              type: DataTypes.CHAR(2),
              allowNull: true
            },
            senha: {
              type: DataTypes.STRING(255),
              allowNull: true
            }
          },
        {
          sequelize,
          tableName: 'pessoas',
          timestamps: false,
          indexes: [
            {
              name: "PRIMARY",
              unique: true,
              using: "BTREE",
              fields: [
                { name: "id_pessoa" },
              ]
            },
            {
              name: "email",
              unique: true,
              using: "BTREE",
              fields: [
                { name: "email" },
              ]
            },
            {
              name: "cpf",
              unique: true,
              using: "BTREE",
              fields: [
                { name: "cpf" },
              ]
            },
          ]
        }
      );

      return this;
  }
};
