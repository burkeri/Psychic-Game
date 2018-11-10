// Variables

var letters = ["a", "b", "c", "d", "e",
                "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o",
                "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y",
                "z"];

let randomLetter = Math.floor(Math.random() * 25);
var guessedLetters = "";
var numWins = 0;
var numLosses = 0;
var numGuesses = 10;

var guessed = document.getElementById("guessed");
var numberGuesses = document.getElementById("number-guesses");
var numberWins = document.getElementById("number-wins");
var numberLosses = document.getElementById("number-losses");
var display = document.getElementById("display");


// Functions

function initialiseGame () {
    randomLetter =  Math.floor(Math.random() * 25);
    letters[randomLetter];
    guessedLetters = "";
    numGuesses = 10;
    numberGuesses.textContent = numGuesses;
    console.log(letters[randomLetter]);
}

function matchKey () {

    var userGuess = event.key.toLocaleLowerCase();

    if (userGuess === letters[randomLetter]) {
        document.getElementById("display").style.color = "#17C800";
        display.textContent = userGuess;
        numWins++;
        numberWins.textContent = numWins;
        initialiseGame();
    } 
    else if (numGuesses === 1) {
        initialiseGame();
        numLosses++;
        numberLosses.textContent = numLosses;
    }
    else {
        console.log("Boo!");
        guessedLetters += userGuess;
        guessed.textContent = guessedLetters;
        numGuesses--;
        numberGuesses.textContent = numGuesses;

    }
}

// Game Mechanics

numberWins.textContent = numWins;
numberLosses.textContent = numLosses;
initialiseGame();

document.onkeyup = function () {
    matchKey();
}



