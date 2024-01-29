let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halvedNum = function (arr){
    return arr/2;
}
let halved = nums.map(halvedNum);

console.log(halved);

let differentHalvedNum = nums.map(function (n){
    return n/2
})
console.log(differentHalvedNum)