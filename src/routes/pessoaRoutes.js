// eslint-disable-next-line
import { Router } from 'express';
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';

// Rotas principais
const router = new Router();
router.post('/register/', registerController.store);
router.post('/login/', loginController.index);

// Rotas para contatos
export default router;
