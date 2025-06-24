// eslint-disable-next-line
import { Router } from 'express';
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import pagamentoController from '../controllers/pagamentoController';

// Rotas principais
const router = new Router();
router.post('/register/', registerController.store);
router.post('/login/', loginController.index);
router.post('/payment/', pagamentoController.store);

// Rotas para contatos
export default router;
