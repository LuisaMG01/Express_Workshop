"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokedexes_1 = __importDefault(require("../database/pokedexes"));
class Pokedex {
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
        return pokedexes_1.default;
    }
}
exports.default = Pokedex;
