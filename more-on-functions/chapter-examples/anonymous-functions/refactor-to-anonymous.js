function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

let anonymousReverse = function(str){
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}
console.log(reverse("LaunchCode"));
console.log(anonymousReverse("LaunchCode"));





