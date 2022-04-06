const Human = require("./Human");



exports.colorMutations = [
    {colors: ['blue', 'gray'], mutation: 'gray'},
    {colors: ['blue', 'green'], mutation: 'gray'},
    {colors: ['blue', 'brown'], mutation: 'green'},
    {colors: ['blue', 'blue'], mutation: 'blue'},

    {colors: ['green', 'gray'], mutation: 'green'},

    {colors: ['green', 'brown'], mutation: 'green'},
    {colors: ['green', 'green'], mutation: 'green'},

    {colors: ['gray', 'brown'], mutation: 'green'},
    {colors: ['gray', 'gray'], mutation: 'gray'},

    {colors: ['brown', 'brown'], mutation: 'brown'},
];



const randomNumberGenerator = exports.randomNumberGenerator = (maxNumber) => {
    return Math.floor(Math.random() * (maxNumber));
}

const getRandomFemaleName = exports.getRandomFemaleName = () => {
    const femaleNames = ['Olivia', 'Emma', 'Ava', 'Charlotte', 'Sophia', 'Amelia', 'Isabella', 'Mia', 'Evelyn', 'Harper', 'Camila', 'Gianna', 'Abigail', 'Luna', 'Ella', 'Elizabeth', 'Sofia', 'Emily', 'Mila', 'Scarlett'];
    return femaleNames[randomNumberGenerator(20)];
}

const getRandomMaleName = exports.getRandomMaleName = () => {
    const maleNames = ['Liam', 'Noah', 'Oliver', 'Elijah', 'William', 'James', 'Benjamin', 'Lucas', 'Henry', 'Alexander', 'Mason', 'Michael', 'Ethan', 'Daniel', 'Jacob', 'Logan', 'Jackson', 'Sebastian', 'Mateo', 'Jack'];
    return maleNames[randomNumberGenerator(20)];
}

const getRandomEyeColor = exports.getRandomEyeColor = () => {
    const eyeColors = ['blue', 'brown', 'green', 'gray'];
    return eyeColors[randomNumberGenerator(4)];
}
const getNewHuman = exports.getNewHuman = (motherEyeColor, fatherEyeColor) => {
    const eyeColor = Human.eyeColorInheritance(motherEyeColor, fatherEyeColor);
    const genders = [Man, Woman];
    return new genders[randomNumberGenerator(2)](eyeColor);
}


