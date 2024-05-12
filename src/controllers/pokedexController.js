const Pokedex = require('../models/Pokedex');

class PokedexController {
    static index(req, res) {
        res.json({ message: 'Hello, world!' });
    }
}

module.exports = PokedexController;
