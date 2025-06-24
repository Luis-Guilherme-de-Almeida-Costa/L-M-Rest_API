// eslint-disable-next-line
import { Router } from 'express';
import pagamentoController from '../controllers/pagamentoController';

// Rotas principais
const router = new Router();


router.post('/index/', pagamentoController.store);


// Rotas para contatos
export default router;
