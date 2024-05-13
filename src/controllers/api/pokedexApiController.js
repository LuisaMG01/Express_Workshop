const Pokedex = require('../../models/Pokedex');
const os = require("os")

class PokedexApiController {
    static getRandomPokedex(req, res) {
        try {
            const pokedexes = Pokedex.getPokedexes();
            const randomPokedex = pokedexes[Math.floor(Math.random() * pokedexes.length)];

            res.json({
                id: randomPokedex.getId(),
                name: randomPokedex.getName(),
                height: randomPokedex.getHeight(),
                ability: randomPokedex.getAbility(),
                containerId: os.hostname()
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error while fetching the random Pokedex' });
        }
    }
}

module.exports = PokedexApiController;