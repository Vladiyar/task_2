const {randomNumberGenerator, getRandomFemaleName, getRandomMaleName, getRandomEyeColor, getNewHuman, colorMutations} = require("./helpers");

 class Human {
    gender;
    static eyeColor;
    age;
    name;
    // weight;
    // height;

    static isAdult (man) {
        return man.age >= 18;
    }

    static eyeColorInheritance(motherEyeColor, fatherEyeColor) {
        let inheritedColor = randomNumberGenerator(10)
        if (motherEyeColor === fatherEyeColor) {
            return motherEyeColor;
        }
        if (inheritedColor <= 3) {
            return motherEyeColor;
        }
        if (inheritedColor > 6) {
            return fatherEyeColor;
        }

        const colorValueObj = colorMutations.filter((colorMutation) => colorMutation.colors.includes(motherEyeColor) && colorMutation.colors.includes(fatherEyeColor));
        return colorValueObj[0].mutation;
    }
}
module.exports = Human;
// exports.eyeColorInheritance = Human.eyeColorInheritance;
