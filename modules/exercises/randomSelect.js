function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randomValue = Math.floor(Math.random()*arr.length);
  return arr[randomValue];
}



//TODO: Export the randomFromArray function.
module.exports = randomFromArray;