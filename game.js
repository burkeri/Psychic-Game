// VARIABLES

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


// FUNCTIONS

// start or reset the game
function initialiseGame () {

    // generate new random letter
    randomLetter =  Math.floor(Math.random() * 25);
    letters[randomLetter];
    // set the guessed letter string to empty
    guessedLetters = "";
    // reset number of guesses to 10 and display it in the dom
    numGuesses = 10;
    numberGuesses.textContent = numGuesses;

    // tester - DELETE ON DEPLOY
    console.log(letters[randomLetter]);
}

// check if user input matches
function matchKey () {

    // creates input variable and coverts to lower case
    var userGuess = event.key.toLocaleLowerCase();

    // if the guessed letter is correct...
    if (userGuess === letters[randomLetter]) {
        //display the letter and make it green
        display.classList.add("correct");
        display.innerHTML = userGuess;
        // increase the number of wins by 1 and display new score
        numWins++;
        numberWins.textContent = numWins;
        // restart the game
        initialiseGame();
    } 
    // if the user runs out of guesses...
    else if (numGuesses === 1) {
        // restart the game
        initialiseGame();
        // increase the number of losses by 1 and displat new score
        numLosses++;
        numberLosses.textContent = numLosses;
    }
    // if the user chooses the wrong letter...
    else {
        // tester - DELETE ON DEPLOY
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

// GAME MECHANICS

// displays inital wins score of 0
numberWins.textContent = numWins;

// displays initial losses score of 0
numberLosses.textContent = numLosses;

// starts the game
initialiseGame();

// records user input and runs appropriate function
document.onkeyup = function () {
    matchKey();
}



