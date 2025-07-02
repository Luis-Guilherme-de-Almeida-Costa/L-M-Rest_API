// eslint-disable-next-line
import { Router } from 'express';
import homeController from '../controllers/homeController';
import searchController from '../controllers/searchController';
import livrosController from '../controllers/livrosController';
import leituraController from '../controllers/leituraController';
import favoritoController from '../controllers/favoritoController';
import pdfController from '../controllers/pdfController';
// Rotas principais
const router = new Router();
router.get('/', homeController.index);
router.get('/acao', homeController.acao);
router.get('/livros/:id/capa', livrosController.index);
router.get('/leitura/pdf/:id', pdfController.index);
router.post('/search', searchController.index);
router.post('/leitura', leituraController.index);
router.post('/leitura/favorites/', leituraController.store)
router.post('/leitura/favorites/index', favoritoController.index)


// Rotas para contatos
export default router;
