const Human = require("./Human");
const {randomNumberGenerator, getRandomFemaleName, getRandomMaleName, getRandomEyeColor, colorMutations} = require("./helpers");


module.exports = class World {
   static time = 0;
   people = [];

   constructor(...args) {
      this.people.push(...args);
   }

   lifeCycle = setInterval(() => this.timePasses(), 1000);

   timePasses () {
      let adultIndividuals = [];

      World.time++;
      for (let man of this.people ) {
         man.age++
         if (Human.isAdult(man)) {
            adultIndividuals.push(man);
         }
      }

      if(adultIndividuals.length >= 2) {
         while(adultIndividuals.length > 1) {
            this.populate(adultIndividuals.shift(), adultIndividuals.shift())
         }
      }

      this.death()

      if (World.time % 10 === 0) {
         console.log(this.people)
         this.getData()
      }
   }


   death () {
      for (let i = this.people.length - 1; i >= 0; i--) {
         if (this.people[i].age >= 50) {
            this.people.splice(i, 1);
         }
      }
   }

   populate (individual1, individual2) {
      return individual1.gender !== individual2.gender ? this.people.push(getNewHuman(individual1.eyeColor, individual2.eyeColor)) : null;
   }

   getData () {
      let males = 0,
          females = 0,
          middleAge = 0;
      let result = [];

      for(let man of this.people) {
         if(man.gender === 'male') {
            males++
         }
         if(man.gender === 'female') {
            females++
         }
         middleAge += man.age;
      }

      result.push(males);
      result.push(females);
      result.push(middleAge / this.people.length);

      console.log(World.time);
      console.log(result);
   }
}






