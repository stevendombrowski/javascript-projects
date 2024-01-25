const input = require('readline-sync');

do {symbol = input.question('Please enter your  1 character symbol here!: ')}
while(symbol.length > 1);

function makeLine(size){
    let line = ''
    for (let i = 0; i < size; i++){
        line += symbol
    }
    return line;
}

// makeLine(5)

function makeSquare(size){
    let square = ''
    
    for (i = 0; i < size; i++){ 
        square += "\n" + makeLine(size)
        
    }
}
function makeSquare(size){
    let square = '' 
    square = makeRectangle(size, size)
    return square
}

// console.log(makeSquare(10))


function makeRectangle(width, height){
    let rectangle = '';
    for (let i = 0; i < height; i++){
        rectangle += (makeLine(width) + "\n")
    }

        
    return rectangle.trim();
}

console.log(makeRectangle(5,6))

function makeDownwardStairs(height){
    let downwardStairs = '';
    for(let i = 0; i < height; i+= 1){
        downwardStairs += makeLine(i+1) + "\n"
    }
    return downwardStairs
}
// console.log(makeDownwardStairs(5))

function makeSpaceLine(numSpaces, numChars){
    let spaces = ''
    let chars = ''
    for (let i = 0; i < numSpaces; i++){
        spaces += " "
    }
    chars = makeLine(numChars);
    let spaceLine = spaces + chars + spaces;
    return spaceLine
}
// console.log(makeSpaceLine(2, 5))

function makeIsocelesTriangle(height){
    let triangle = ''
    for (let i = 0; i < height; i++){
        triangle +=makeSpaceLine(height - i - 1, 2 * i + 1) + "\n"
        
    }
    return triangle
}
// console.log(makeIsocelesTriangle(5))

function makeDiamond(height){
    let diamond = '';
    let reversedDiamond = '';
    diamond += makeIsocelesTriangle(height)
    reversedDiamond = diamond.split('').reverse().join('')
    let fullDiamond = diamond.trimEnd() + reversedDiamond;
    return fullDiamond;
    
}
console.log(makeDiamond(5))