// eslint-disable-next-line
import { Router } from 'express';
import homeController from '../controllers/homeController';

// Rotas principais
const router = new Router();
router.get('/', homeController.index);

// Rotas para contatos
export default router;
