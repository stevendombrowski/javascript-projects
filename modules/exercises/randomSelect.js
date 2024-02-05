function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randomValue = Math.floor(Math.random()*arr.length);
  return arr[randomValue];
}

console.log(randomFromArray([45, 25, 20, 21, 12]))

//TODO: Export the randomFromArray function.
module.import = randomFromArray;