// eslint-disable-next-line
import { Router } from 'express';
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import perfilController from '../controllers/perfilController';
import redefinirController from '../controllers/redefinirController';

// Rotas principais
const router = new Router();
router.post('/register/', registerController.store);
router.post('/login/', loginController.index);
router.put('/login/update', redefinirController.update);
router.post('/profile/', perfilController.index);
router.put('/profile/update', perfilController.update);

// Rotas para contatos
export default router;
