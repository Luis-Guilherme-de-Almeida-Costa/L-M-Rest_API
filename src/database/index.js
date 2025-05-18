import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pessoas from '../models/pessoas';
import Livros from '../models/livros';
import LivrosFavoritos from '../models/livros_favoritos';
import LivrosEnviados from '../models/livros_enviados';
import Funcionario from '../models/funcionario';
import Autor from '../models/autor';
import Assinante from '../models/assinante';
import Administrador from '../models/administrador';

const models = [Pessoas, Livros, LivrosFavoritos, LivrosEnviados, Funcionario, Autor, Assinante, Administrador];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));