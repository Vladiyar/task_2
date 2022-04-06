const colorMutations = [
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



const randomNumberGenerator = (maxNumber) => {
   return Math.floor(Math.random() * (maxNumber));
}

const getRandomFemaleName = () => {
   const femaleNames = ['Olivia', 'Emma', 'Ava', 'Charlotte', 'Sophia', 'Amelia', 'Isabella', 'Mia', 'Evelyn', 'Harper', 'Camila', 'Gianna', 'Abigail', 'Luna', 'Ella', 'Elizabeth', 'Sofia', 'Emily', 'Mila', 'Scarlett'];
   return femaleNames[randomNumberGenerator(20)];
}

const getRandomMaleName = () => {
   const maleNames = ['Liam', 'Noah', 'Oliver', 'Elijah', 'William', 'James', 'Benjamin', 'Lucas', 'Henry', 'Alexander', 'Mason', 'Michael', 'Ethan', 'Daniel', 'Jacob', 'Logan', 'Jackson', 'Sebastian', 'Mateo', 'Jack'];
   return maleNames[randomNumberGenerator(20)];
}

const getRandomEyeColor = () => {
   const eyeColors = ['blue', 'brown', 'green', 'gray'];
   return eyeColors[randomNumberGenerator(4)];
}
const getNewHuman = (motherEyeColor, fatherEyeColor) => {
   const eyeColor = Human.eyeColorInheritance(motherEyeColor, fatherEyeColor);
   const genders = [Man, Woman];
   return new genders[randomNumberGenerator(2)](eyeColor);
}





class World {
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

class Man extends Human {
   gender = 'male';
   eyeColor;
   name = getRandomMaleName();
   age = 0;

   constructor(specificEyeColor) {
      super();
      specificEyeColor === undefined ? this.eyeColor = getRandomEyeColor() : this.eyeColor = specificEyeColor;
   }

}

class Woman extends Human {
   gender = 'female';
   eyeColor;
   name = getRandomFemaleName();
   age = 0;

   constructor(specificEyeColor) {
      super();
      specificEyeColor === undefined ? this.eyeColor = getRandomEyeColor() : this.eyeColor = specificEyeColor;
   }
}




const w = new World(new Woman, new Man())



