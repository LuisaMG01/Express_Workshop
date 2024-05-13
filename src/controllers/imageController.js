const path = require("path");
const Pokedex = require("../models/Pokedex");

class PokedexImageController {
  static getRandomPokemonImageAndPhilosophicalPhrase(req, res) {
    try {
      const pokedexes = Pokedex.getPokedexes();
      const randomPokedex =
        pokedexes[Math.floor(Math.random() * pokedexes.length)];
      const imageUrl = randomPokedex.image;
      const philosophy = randomPokedex.philosophicalPhrase;
      const containerId = process.env.HOSTNAME;

      res.render(path.join(__dirname, "../views/pokenea.ejs"), {
        imageUrl,
        philosophy,
        containerId,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error:
          "Error while fetching the random Pokémon image and philosophical phrase",
      });
    }
  }
}

module.exports = PokedexImageController;
