import { Request, Response } from 'express';
import Pokedex from '../models/Pokedex';

class PokedexController {

    public static index(req: Request, res: Response): void {
        res.json({ message: 'Hello, world!' });
    }

    public static getRandomPokedex(req: Request, res: Response): void {
        try {
            const pokedexes = Pokedex.getPokedexes();
            const randomPokedex = pokedexes[Math.floor(Math.random() * pokedexes.length)];
            const pokedex = new Pokedex(
                randomPokedex.id,
                randomPokedex.name,
                randomPokedex.height,
                randomPokedex.ability,
                randomPokedex.image,
                randomPokedex.philosophicalPhrase,
            );

            res.json({
                id: pokedex.getId(),
                name: pokedex.getName(),
                height: pokedex.getHeight(),
                ability: pokedex.getHeight(),
                //containerId: process.env.HOSTNAME
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error while fetching the random Pokedex' });
        }
    }


}

export default PokedexController;
