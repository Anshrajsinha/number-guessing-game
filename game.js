var mysteryNumber = Math.floor(Math.random()*100)   //45
var playerGuess = 0
var guessesRemaining = 10
var guessesMade = 0
var gameStats = ""
var gameWon = false
var input = document.querySelector('input')
var output = document.getElementById('output')
var button = document.querySelector('button')
button.style.cursor = 'pointer'
button.addEventListener('click', clickHandler)
window.addEventListener('keydown', keydownHandler)
function keydownHandler(event) {
    if (event.keyCode === 13) {
        validateInput()
    }    
}
function clickHandler() {
    validateInput()
} 
function validateInput() {
    playerGuess = parseInt(input.value)
    if (isNaN(playerGuess)) {
        output.innerHTML = "Please enter a number"
    } else {
        playGame()
    }
}
function playGame() {
    guessesMade += 1
    guessesRemaining -= 1
    gameStats = " Guess : " + guessesMade + " Guess Remaining : " + guessesRemaining
    playerGuess = parseInt(input.value)
    if (playerGuess>99) {
        output.innerHTML = "The number is between 0 and 99"
    } else if (playerGuess>mysteryNumber) {
        output.innerHTML='Too High.' + gameStats
        if (guessesRemaining<0) {
            endGame()
        }
    } else if (playerGuess<mysteryNumber) {
        output.innerHTML='Too Low.' + gameStats
        if (guessesRemaining<0) {
            endGame()
        }
    } else if (playerGuess==mysteryNumber) {
        gameWon = true
        endGame() 
    }
    console.log(input.value)
}
function endGame() {
    if (gameWon) {
        output.innerHTML='You got it. The number is ' + mysteryNumber + '<br>' + 'It only took you ' + 
        guessesMade + ' guesses'
    } else {
        output.innerHTML = 'No more guesses.' + '<br>' + "The number was " + mysteryNumber
    }
    button.removeEventListener('click', clickHandler)
    button.disabled = true
    window.removeEventListener('keydown', keydownHandler)
    input.disabled = true
}













/* document.write(isNaN(gameStats))
console.log(input.value)
console.log(output.innerHTML)
 */