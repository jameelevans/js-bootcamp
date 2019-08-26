let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

//Challenge area

//Guess from a number from 1 to 5. Return true if correct, return false if not correct
let makeGuess = function(guessedNum) {
    return guessedNum == randomNum
}

console.log(makeGuess(1))