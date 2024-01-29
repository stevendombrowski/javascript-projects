const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let validator = function(n){
  return n === "a"
}
// TODO 2: write a validator 
// that ensures input is a vowel
let vowelValidator = function(n){
  return n === "a" || n === "e" || n === "i" || n === "o" || n === "u"
}
// Be sure to test your code!
console.log(getValidInput('Enter a vowel: ', validator))
console.log(getValidInput('Enter a vowel: ', vowelValidator))