const Pokedex = require("../models/Pokedex");
const os = require("os")

class PokedexController {
  static getRandomPokemon(req, res) {
    try {
      const pokedexes = Pokedex.getPokedexes();

      const randomPokedex = pokedexes[Math.floor(Math.random() * pokedexes.length)];

      const imageUrl = randomPokedex.getImage();
      const philosophy = randomPokedex.getPhilosophicalPhrase();
      const containerId = os.hostname()

      const viewData = {
        imageUrl,
        philosophy,
        containerId,
      };

      res.render("layouts/app", { viewData: viewData });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        error:
          "Error while fetching the random Pokémon image and philosophical phrase",
      });
    }
  }
}

module.exports = PokedexController;
