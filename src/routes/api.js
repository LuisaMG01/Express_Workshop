const express = require('express');

const PokedexApiController = require('../controllers/api/pokedexApiController');

const router = express.Router();

router.get('/random', PokedexApiController.getRandomPokedex);

module.exports = router;