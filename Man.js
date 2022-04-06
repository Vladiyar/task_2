const {randomNumberGenerator, getRandomFemaleName, getRandomMaleName, getRandomEyeColor, getNewHuman, colorMutations} = require("./helpers");
const Human = require("./Human");

module.exports = class Man extends Human {
    gender = 'male';
    eyeColor;
    name = getRandomMaleName();
    age = 0;

    constructor(specificEyeColor) {
        super();
        specificEyeColor === undefined ? this.eyeColor = getRandomEyeColor() : this.eyeColor = specificEyeColor;
    }

}