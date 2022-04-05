// const growStages = ['child', 'teenager', 'adult', 'elderly'];

// function isLegalAge(age) {
//    return age >= 18;
// }

// lifeCycle = setInterval(console.log('potato'), 1000);

function randomNumberGenerator(maxNumber) {
   return Math.floor(Math.random() * (maxNumber));
}

function getRandomFemaleName() {
   const femaleNames = ['Olivia', 'Emma', 'Ava', 'Charlotte', 'Sophia', 'Amelia', 'Isabella', 'Mia', 'Evelyn', 'Harper', 'Camila', 'Gianna', 'Abigail', 'Luna', 'Ella', 'Elizabeth', 'Sofia', 'Emily', 'Mila', 'Scarlett'];
   return femaleNames[randomNumberGenerator(20)];
}

function getRandomMaleName() {
   const maleNames = ['Liam', 'Noah', 'Oliver', 'Elijah', 'William', 'James', 'Benjamin', 'Lucas', 'Henry', 'Alexander', 'Mason', 'Michael', 'Ethan', 'Daniel', 'Jacob', 'Logan', 'Jackson', 'Sebastian', 'Mateo', 'Jack'];
   return maleNames[randomNumberGenerator(20)];
}

function getRandomEyeColor() {
   const eyeColors = ['blue', 'brown', 'green', 'gray'];
   return eyeColors[randomNumberGenerator(4)];
}

function getNewHuman(motherEyeColor, fatherEyeColor) {
   const human = new Human();
   const eyeColor = human.eyeColorInheritance(motherEyeColor, fatherEyeColor);
   const genders = [new Man(eyeColor), new Woman(eyeColor)];
   return genders[randomNumberGenerator(2)]
}

class World {
   time = 0;
   people = [];

   constructor(...args) {
      this.people.push(...args);
   }


   populate (individual1, individual2) {
      return individual1.gender === individual2.gender ? null : this.people.push(getNewHuman(individual1.eyeColor, individual2.eyeColor));
   }

   getData () {
      return this.time;
      //TODO: amount of males and females, their eye colors, middle age
   }

}

class Human {
   gender;
   eyeColor;
   age;
   name;
   // weight;
   // height;

   eyeColorInheritance(motherEyeColor, fatherEyeColor) {
      let inheritedColor = randomNumberGenerator(10)
      console.log(inheritedColor);
      if (motherEyeColor === fatherEyeColor) {
         console.log('seme as both');
         return motherEyeColor;
      }
      else if (inheritedColor <= 3) {
         console.log('mother');
         return motherEyeColor;
      }
      else if (inheritedColor > 6) {
         console.log('father');
         return fatherEyeColor;
      }
      //TODO: create inherited of two colors
      // 'blue', 'brown', 'green', 'gray'
      else if (inheritedColor > 3 && inheritedColor < 6) {
         console.log('between');
         if (motherEyeColor === 'gray' && fatherEyeColor === 'green') {return 'green'}
         if (motherEyeColor === 'green' && fatherEyeColor === 'gray') {return 'green'}
         if (motherEyeColor === 'brown' && fatherEyeColor === 'green') {return 'brown'}
         if (motherEyeColor === 'green' && fatherEyeColor === 'brown') {return 'brown'}
         if (motherEyeColor === 'gray' && fatherEyeColor === 'green') {return 'green'}
         if (motherEyeColor === 'gray' && fatherEyeColor === 'green') {return 'green'}
         if (motherEyeColor === 'gray' && fatherEyeColor === 'blue') {return 'gray'}
         if (motherEyeColor === 'blue' && fatherEyeColor === 'gray') {return 'gray'}
         if (motherEyeColor === 'brown' && fatherEyeColor === 'blue') {return 'green'}
         if (motherEyeColor === 'blue' && fatherEyeColor === 'brown') {return 'green'}
         return 'potato';
      }
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
w.populate(w.people[0], w.people[1])
console.log(w)
