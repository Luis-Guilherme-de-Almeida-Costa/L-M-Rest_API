"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Pessoas extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_pessoa: {
          autoIncrement: true,
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: _sequelize2.default.STRING(55),
          allowNull: false,
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
            msg: "Email já existe"
          },
          validate: {
            isEmail: {
              msg: "E-mail inválido."
            }
          }
        },
        cpf: {
          type: _sequelize2.default.STRING(15),
          allowNull: false,
          unique: "cpf"
        },
        situacao: {
          type: _sequelize2.default.CHAR(2),
          defaultValue: 'A',
          allowNull: false,
        },
        senha: {
          type: _sequelize2.default.VIRTUAL(255), // deve ser alterado para virtual
          allowNull: false,
          defaultValue: '',
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