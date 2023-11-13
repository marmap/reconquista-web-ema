import express from 'express';
import noticia from '../models/noticia.js';
import { mostrarNoticias, mostrarNoticia, crearNoticias, subirNoticia, eliminarNoticia } from '..agregarNoticia.js';

const router = express.Router()
router.get('/', mostrarNoticias)
router.get('/:id', mostrarNoticia)
router.post('/crearNoticia', crearNoticias)
router.put('/:id', subirNoticia)
router.delete('/:id', eliminarNoticia)

export default router;
