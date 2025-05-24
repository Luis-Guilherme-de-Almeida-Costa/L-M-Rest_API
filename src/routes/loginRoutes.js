// eslint-disable-next-line
import { Router } from 'express';
import loginController from '../controllers/loginController';

// Rotas principais
const router = new Router();
router.post('/enter/', loginController.store);

// Rotas para contatos
export default router;
