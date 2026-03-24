class Poshu {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
}

const doggy = new Poshu("Persian", "Dog", "Bark");
doggy.name;
doggy.sound;
doggy.species