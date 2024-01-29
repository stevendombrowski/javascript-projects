function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}


function reverseCondensed(str){
   lettersArray = str.split('').reverse().join('')
   return lettersArray
}

console.log(reverse('hello'))
console.log(reverseCondensed('hello'))