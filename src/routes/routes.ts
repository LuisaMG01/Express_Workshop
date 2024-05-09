import express, { Router } from 'express';
import PokedexController from '../controllers/pokedexController';

const router: Router = express.Router();

router.get('/', PokedexController.index);
router.get('/random', PokedexController.getRandomPokedex);


export default router;
