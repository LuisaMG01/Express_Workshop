import pokedexData from "../database/pokedexes";

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

    private id: number;
    private name: string;
    private height: number;
    private ability: string;
    private image: string;
    private philosophicalPhrase: string;

    constructor(id: number, name: string, height: number, ability: string, image: string, philosophicalPhrase: string) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.ability = ability;
        this.image = image;
        this.philosophicalPhrase = philosophicalPhrase;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getAbility(): string {
        return this.ability;
    }

    public setAbility(ability: string): void {
        this.ability = ability;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public getPhilosophicalPhrase(): string {
        return this.philosophicalPhrase;
    }

    public setPhilosophicalPhrase(philosophicalPhrase: string): void {
        this.philosophicalPhrase = philosophicalPhrase;
    }

    public static getPokedexes(): any[] {
        return pokedexData;
    }
}

export default Pokedex;
