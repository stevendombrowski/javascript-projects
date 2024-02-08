const whoWon = require('../RPS.js')

describe("whoWon", function(){
    test("returns correct response for a tie", function(){
        let result = whoWon('rock', 'rock');
        expect(result).toEqual('TIE!')
    })
    test("return correct response for player 1 winning", function(){
        let result = whoWon('rock', 'scissors');
        expect(result).toEqual('Player 1 wins!')
    })
    test("retuns correct response for player 2 winning with paper", function(){
        let result = whoWon('rock', 'paper');
        expect(result).toEqual('Player 2 wins!')
    })
    test("retuns correct response for player 2 winning with scissors", function(){
        let result = whoWon('paper', 'scissors');
        expect(result).toEqual('Player 2 wins!')
    })
    test("retuns correct response for player 2 winning with rock", function(){
        let result = whoWon('scissors', 'rock ' || 'rock');
        expect(result).toEqual('Player 2 wins!')
    })
    
})