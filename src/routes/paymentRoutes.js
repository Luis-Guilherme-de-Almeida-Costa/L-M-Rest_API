// eslint-disable-next-line
import { Router } from 'express';
import pagamentoController from '../controllers/pagamentoController';
import pagamentoAutorController from '../controllers/pagamentoAutorController';

// Rotas principais
const router = new Router();

router.post('/index/', pagamentoController.store);
router.post('/index/show/', pagamentoController.index);
router.post('/autor/', pagamentoAutorController.store);
router.post('/autor/show/', pagamentoAutorController.index);


// Rotas para contatos
export default router;
