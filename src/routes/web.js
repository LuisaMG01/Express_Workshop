const express = require("express");
const PokedexController = require("../controllers/pokedexController");

const router = express.Router();

router.get("/", PokedexController.index);
module.exports = router;
