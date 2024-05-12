const express = require('express');
const PokedexController = require('../controllers/pokedexController');
const PokedexApiController = require('../controllers/api/pokedexApiController');

const router = express.Router();

router.get('/', PokedexController.index);
router.get('/random', PokedexApiController.getRandomPokedex);

module.exports = router;
