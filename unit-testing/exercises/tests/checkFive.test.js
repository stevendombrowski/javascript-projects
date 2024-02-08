const checkFive = require('../checkFive.js')

describe("checkFive", function(){
    test("returns correct response for 'num' being less than 5", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.")
    })
    test("returns correct response for 'num' being greater than 5", function(){
        let output = checkFive(6);
        expect(output).toEqual("6 is greater than 5.")
    })
    test("returns correct response for 'num' being equal than 5", function(){
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.")
    })
})