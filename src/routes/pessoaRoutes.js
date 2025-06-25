// eslint-disable-next-line
import { Router } from 'express';
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import perfilController from '../controllers/perfilController';

// Rotas principais
const router = new Router();
router.post('/register/', registerController.store);
router.post('/login/', loginController.index);
router.post('/profile/', perfilController.index);
router.put('/profile/', perfilController.update);

// Rotas para contatos
export default router;
