const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strThree = " "
strThree = str.slice(4, 10) + str.slice(0,3);
console.log(strThree)

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let newStr = ' '
let num = input.question('Enter number of relocated letters here: ')
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (num <= str.length){
    let newStr = str.slice(num) + str.slice(0, num);
    console.log(newStr)
}
else if (num > str.length){
    let newStr = str.slice(3) + str.slice(0,3)
    console.log(`${newStr} : ${num} is too long! It has defaulted to moving 3 characters at a time.`)
}