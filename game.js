// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// VARIABLES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// array for computer to choose from
var letters = ["a", "b", "c", "d", "e",
                "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o",
                "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y",
                "z"];

// unicode for non-letter characters
var codes = [8, 9, 13, 16, 17, 18, 19, 20,
                27, 33, 34, 5, 36, 7, 38, 39, 
                40, 45, 46, 48, 49, 50, 51, 52,
                53, 54, 55, 56, 57];

// global variables
let randomLetter = Math.floor(Math.random() * 25);
var guessedLetters = "";
var numWins = 0;
var numLosses = 0;
var numGuesses = 10;

// html reference variables
var guessed = document.getElementById("guessed");
var numberGuesses = document.getElementById("number-guesses");
var numberWins = document.getElementById("number-wins");
var numberLosses = document.getElementById("number-losses");
var display = document.getElementById("display");
var question = document.getElementById("question");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// start or reset the game
function initialiseGame () {

    // hide the answer and show ?
    display.style.display = "none";
    question.style.display = "inline";
    // generate new random letter
    randomLetter =  Math.floor(Math.random() * 25);
    letters[randomLetter];
    // set the guessed letter string to empty
    guessedLetters = "";
    guessed.textContent = guessedLetters;
    // reset number of guesses to 10 and display
    numGuesses = 10;
    numberGuesses.textContent = numGuesses;

    // TESTER - DELETE ON DEPLOY
    console.log(letters[randomLetter]);
}

// check if user input matches
function matchKey () {

    // creates input variable and coverts to lower case
    var userGuess = event.key.toLocaleLowerCase();

    // if the guessed letter is correct...
    if (userGuess === letters[randomLetter]) {
        // show the the answer and hide the ?       
        display.textContent = userGuess;
        display.style.display = "inline";
        question.style.display = "none";
        // increase the number of wins by 1 and display new score
        numWins++;
        numberWins.textContent = numWins;
        // restart the game
        setTimeout(initialiseGame, 1500);
       
    } 
    // if the user runs out of guesses...
    else if (numGuesses === 1) {
        // restart the game
        initialiseGame();
        // increase the number of losses by 1 and display new score
        numLosses++;
        numberLosses.textContent = numLosses;
    }
    else if (userGuess.length > 1) {
        return false;
    }
    // if the user chooses the wrong letter...
    else {
        // TESTER - DELETE ON DEPLOY
        console.log("Boo!");
        // add the input to the guessedLetters string
        guessedLetters += userGuess;
        // display the string on the page
        guessed.textContent = guessedLetters;
        // decrease the number of guesses by 1 and display
        numGuesses--;
        numberGuesses.textContent = numGuesses;

    }

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GAME MECHANICS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// displays inital wins score of 0
numberWins.textContent = numWins;

// displays initial losses score of 0
numberLosses.textContent = numLosses;

// starts the game
initialiseGame();

// records user input and runs appropriate function
document.onkeyup = function () {
    // nonLetter();
    matchKey();
}



