const express = require("express");
const PokedexImageController = require("../controllers/imageController");

const router = express.Router();

router.get(
  "/random-pokemon",
  PokedexImageController.getRandomPokemonImageAndPhilosophicalPhrase
);

module.exports = router;
