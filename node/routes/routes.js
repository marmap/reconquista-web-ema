import express from 'express';
const router = express.Router();
import { mostrarNoticias, mostrarNoticia, crearNoticias, subirNoticia, eliminarNoticia } from '/node/controllers/agregarNoticia.js';


router.get('/', mostrarNoticias)
router.get('/:id', mostrarNoticia)
router.post('/crearNoticia', crearNoticias)
router.put('/:id', subirNoticia)
router.delete('/:id', eliminarNoticia)

export default router;
