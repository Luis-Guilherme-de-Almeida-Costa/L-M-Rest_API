import Sequelize, { Model } from 'sequelize';
import bcryptjs from "bcryptjs";

export default class Pessoas extends Model {
  static init(sequelize) {
    super.init(
      {
        id_pessoa: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING(55),
          allowNull: false,
          unique: {
            msg: "Nome de perfil já foi utilizado."
          },
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
            msg: "Email já existe."
          },
          validate: {
            isEmail: {
              msg: "E-mail inválido."
            },
            len: {
              args: [11, 65],
              msg: "O e-mail deve possuir pelo menos 11 caracteres!"
            }
          }
        },
        cpf: {
          type: Sequelize.STRING(15),
          unique: "cpf",
          validate: {
            len: {
              args: [11, 11],
              msg: "O cpf deve possuir 11 caracteres!"
            }
          }
        },
        situacao: {
          type: Sequelize.CHAR(2),
          defaultValue: 'A',
          allowNull: false,
        },

        senha_hash: {
          type: Sequelize.STRING(255),
          defaultValue: '',
        },

        senha: {
          type: Sequelize.VIRTUAL(255), // deve ser alterado para virtual
          validate: {
            len: {
              args: [8, 255],
              msg: "A senha deve possuir entre 8 e 255 caracteres!"
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
        pessoa.senha_hash = await bcryptjs.hash(pessoa.senha, 8)
      }
    })

    return this;
  }
  
  isValidPassword(senha) {
    return bcryptjs.compare(senha, this.senha_hash);    
  }

  static associate(models) {
    this.hasMany(models.LivrosFavoritos, { foreignKey: 'id_pessoa' });
  }
}