// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// eslint-disable-next-line import/extensions
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();
// eslint-disable-next-line import/extensions
import homeRoutes from './routes/homeRoutes';
import pessoaRoutes from './routes/pessoaRoutes'
import tokenRoutes from './routes/tokenRoutes';
import './database/index';

const whiteList = ['http://192.168.1.13:80', 'http://localhost:3002', 'http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/auth/', pessoaRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
