class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    };

    speciesSound() {
        console.log(this.species, "makes this sound", this.sound);
    };

};

let cat = new Animal("cat", "meaw");

let dog = new Animal("dog", "woof");

Animal.prototype.jump = function() {
    console.log("i am jumping");
};

console.log(cat);
cat.jump();
cat.speciesSound();

