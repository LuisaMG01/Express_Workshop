const express = require("express");
const PokedexController = require("../controllers/pokedexController");

const router = express.Router();

router.get("/", PokedexController.getRandomPokemon);
module.exports = router;
