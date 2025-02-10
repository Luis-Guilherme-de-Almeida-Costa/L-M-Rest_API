// eslint-disable-next-line
import { Router } from 'express';

import loginRequired from '../middlewares/middleware';
import alunoController from '../controllers/alunoController';

// Rotas principais
const router = new Router();
router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.put('/:id', alunoController.update);
router.get('/:id', alunoController.show);
router.post('/:id', alunoController.delete);

// Rotas para contatos
export default router;
