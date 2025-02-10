// eslint-disable-next-line
import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/middleware';


// Rotas principais
const router = new Router();
router.get('/', userController.index);
router.post('/', userController.store);
router.get('/:id', userController.show);
router.put('/', userController.update);
router.delete('/:id', userController.delete);
// Rotas para contatos
export default router;
