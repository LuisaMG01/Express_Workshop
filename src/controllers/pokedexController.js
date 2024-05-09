"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pokedex_1 = __importDefault(require("../models/Pokedex"));
class PokedexController {
    static index(req, res) {
        res.json({ message: 'Hello, world!' });
    }
    static getRandomPokedex(req, res) {
        try {
            const pokedexes = Pokedex_1.default.getPokedexes();
            const randomPokedex = pokedexes[Math.floor(Math.random() * pokedexes.length)];
            const pokedex = new Pokedex_1.default(randomPokedex.id, randomPokedex.name, randomPokedex.height, randomPokedex.ability, randomPokedex.image, randomPokedex.philosophicalPhrase);
            res.json({
                id: pokedex.getId(),
                name: pokedex.getName(),
                height: pokedex.getHeight(),
                ability: pokedex.getHeight(),
                //containerId: process.env.HOSTNAME
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error while fetching the random Pokedex' });
        }
    }
}
exports.default = PokedexController;
