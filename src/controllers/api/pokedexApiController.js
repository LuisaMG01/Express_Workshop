const Pokedex = require('../../models/Pokedex');

class PokedexApiController {
    static getRandomPokedex(req, res) {
        try {
            const pokedexes = Pokedex.getPokedexes();
            const randomPokedex = pokedexes[Math.floor(Math.random() * pokedexes.length)];
            const pokedex = new Pokedex(
                randomPokedex.id,
                randomPokedex.name,
                randomPokedex.height,
                randomPokedex.ability,
                randomPokedex.image,
                randomPokedex.philosophicalPhrase
            );

            res.json({
                id: pokedex.getId(),
                name: pokedex.getName(),
                height: pokedex.getHeight(),
                ability: pokedex.getAbility(),
                // containerId: process.env.HOSTNAME
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error while fetching the random Pokedex' });
        }
    }
}

module.exports = PokedexApiController;