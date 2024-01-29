let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
let mapArray = function (arr) {
    for (let i = 0; i < arr.length; i++){
        return arr[i][0]
    }
}
// and pass it to .map()
let firstInitials = names.map(mapArray);

console.log(firstInitials);

let differentMapArray = names.map(function (arr){
    for (let i = 0; i < arr.length; i++){
        return arr[i][0]
    }
});
console.log(differentMapArray)
