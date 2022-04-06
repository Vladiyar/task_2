const World = require("./World");
const Man = require("./Man");
const Woman = require("./Woman");
const Human = require("./Human");

const {randomNumberGenerator, getRandomFemaleName, getRandomMaleName, getRandomEyeColor, getNewHuman, colorMutations} = require("./helpers");

const w = new World(new Woman, new Man())