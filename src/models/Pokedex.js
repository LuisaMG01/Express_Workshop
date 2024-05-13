const pokedexData = require("../database/pokedexes");

class Pokedex {
    /*
     * Represents a Pokemon entry in the Pokedex.
     * 
     * Attributes:
     * - id: Unique identifier of the entry.
     * - name: Name of the Pokemon.
     * - height: Height of the Pokemon in meters.
     * - ability: Special ability of the Pokemon.
     * - image: Path to the image representing the Pokemon.
     * - philosophicalPhrase: Philosophical phrase associated with the Pokemon.
    */

    constructor(id, name, height, ability, image, philosophicalPhrase) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.ability = ability;
        this.image = image;
        this.philosophicalPhrase = philosophicalPhrase;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }

    getAbility() {
        return this.ability;
    }

    setAbility(ability) {
        this.ability = ability;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

    getPhilosophicalPhrase() {
        return this.philosophicalPhrase;
    }

    setPhilosophicalPhrase(philosophicalPhrase) {
        this.philosophicalPhrase = philosophicalPhrase;
    }

    static getPokedexes() {
        const pokedexes = [];
        pokedexData.forEach(pokemon => {
            const pokedex = new Pokedex(
                pokemon.id,
                pokemon.name,
                pokemon.height,
                pokemon.ability,
                pokemon.image,
                pokemon.philosophicalPhrase
            );
            pokedexes.push(pokedex);
        });
        return pokedexes;
    }
}

module.exports = Pokedex;
