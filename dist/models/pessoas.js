"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Pessoas extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_pessoa: {
          autoIncrement: true,
          type: _sequelize2.default.INTEGER,
          primaryKey: true
        },
        nome: {
          type: _sequelize2.default.STRING(55),
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
          type: _sequelize2.default.STRING(65),
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
          type: _sequelize2.default.STRING(15),
          unique: {
            msg: "O cpf já foi registrado!"
          },
          validate: {
            len: {
              args: [11, 11],
              msg: "O cpf deve possuir 11 caracteres!"
            }
          }
        },
        situacao: {
          type: _sequelize2.default.CHAR(2),
          defaultValue: 'A',
          allowNull: false,
        },

        senha_hash: {
          type: _sequelize2.default.STRING(255),
          defaultValue: '',
        },

        senha: {
          type: _sequelize2.default.VIRTUAL(255), // deve ser alterado para virtual
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
        pessoa.senha_hash = await _bcryptjs2.default.hash(pessoa.senha, 8)
      }
    })

    return this;
  }
  
  isValidPassword(senha) {
    return _bcryptjs2.default.compare(senha, this.senha_hash);    
  }

  static associate(models) {
    this.hasMany(models.LivrosFavoritos, { foreignKey: 'id_pessoa' });
  }
} exports.default = Pessoas;