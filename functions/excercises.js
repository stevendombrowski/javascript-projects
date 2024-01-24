function makeLine(size){
    let line = ''
    for (let i = 0; i <= size - 1; i++){
        line += '#'
    }
    console.log(line)
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

// makeSquare(10)


function makeRectangle(width, height){
    let rectangle = '';
    for (let i = 0; i < height; i++){
        rectangle += (makeLine(width) + "\n")
    }

        
    return rectangle.slice(0, -1);
}

// makeRectangle(5,6)

function makeDownwardStairs(height){
    let downwardStairs = '';
    for(let i = 0; i < height; i+= 1){
        downwardStairs = makeLine((i+1) + "\n")
    }
    return downwardStairs
}
// makeDownwardStairs(5)

function makeSpaceLine(numSpaces, numChars){
    
}