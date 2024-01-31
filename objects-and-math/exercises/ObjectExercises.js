let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
}

let dogOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
}

let bugOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
}

let crew = [superChimpOne, superChimpTwo, dogOne, bugOne, salamander]
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
let crewReports = function (astronaut) {
   console.log(
      `${astronaut.name} is a ${astronaut.species}. They are ${astronaut.age} years old and ${astronaut.mass} kilograms. Their ID is ${astronaut.astronautID}`
   )
}
crewReports(bugOne)
// Start an animal race!

let fitnessTest = function (arr){
   let race = [];
   let moves;
   let steps;
   for(let i = 0; i < arr.length; i++){
      steps = 0;
      moves = 0;
      while (steps < 20){
         steps += arr[i].move();
         moves++
         
      }
      race.push(`${arr[i].name} took ${moves} turns to take 20 steps.`)
      
   }
   return race
}

console.log(fitnessTest(crew))

