// eslint-disable-next-line
import { Router } from 'express';
import homeController from '../controllers/homeController';
import searchController from '../controllers/searchController';
import livrosController from '../controllers/livrosController';
// Rotas principais
const router = new Router();
router.get('/', homeController.index);
router.get('/acao', homeController.acao);
router.post('/search', searchController.index);
router.get('/livros/:id/capa', livrosController.index);


// Rotas para contatos
export default router;
