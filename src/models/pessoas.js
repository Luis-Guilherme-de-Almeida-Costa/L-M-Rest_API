import Sequelize, { Model } from 'sequelize';
import bcryptjs from "bcryptjs";

export default class Pessoas extends Model {
  static init(sequelize) {
    super.init(
      {
        id_pessoa: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING(55),
          allowNull: false,
          validate: {
            len: {
              args: [3, 55],
              msg: "Campo nome deve ter entre 3 e 55 caracteres!",
            }
          }
        },
        email: {
          type: Sequelize.STRING(65),
          allowNull: false,
          unique: {
            msg: "Email já existe"
          },
          validate: {
            isEmail: {
              msg: "E-mail inválido."
            }
          }
        },
        cpf: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: "cpf"
        },
        situacao: {
          type: Sequelize.CHAR(2),
          allowNull: false,
        },
        senha: {
          type: Sequelize.STRING(255), // deve ser alterado para virtual
          allowNull: false,
          validate: {
            len: {
              args: [8, 255],
              msg: "A senha deve ter entre 8 e 255 caracteres!"
            }
          }
        }
      },
      {
        sequelize,
        tableName: 'pessoas',
        timestamps: false,
      }
    );  

    this.addHook('beforeSave', async pessoa => {
      if(pessoa.senha) {
        pessoa.password_hash = await bcryptjs.hash(pessoa.senha, 8)
      }
    })

    return this;
  }

  static associate(models) {
    this.hasMany(models.LivrosFavoritos, { foreignKey: 'id_pessoa' });
  }

  isValidPassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}