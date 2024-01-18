let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split('e')) //split string when there is an e
console.log(str.split(' ')) //split string when there is a space
console.log(str.split('')) //split string for each character
console.log(str.split()) //When blank there is no defined split of the string so it is the same as the original string
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join()) //When blank there is no defined object to join into the array
console.log(arr.join('a')) //seems to add an 'a' after each pre-existing array object, also joins all objects in the array into one string
console.log(arr.join(' ')) //seems to join the array objects into one string but adds a space inbetween each pre-existing object into the array
console.log(arr.join('')) //joins all array objects into one string and adds nothing else only joins them all together
//3) Do split or join change the original string/array?

//No they do not change the original array.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join(', '))



