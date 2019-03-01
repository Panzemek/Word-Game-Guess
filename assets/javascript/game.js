var wordsArray = ["animals", "zoophobia", "bacteria", "beards", "beating", "bed", "bees", "birds", "blood", "blushing", "body", "bridges", "bullets", "burial", "cancer", "cats", "childbirth", "children", "church", "ecclesiophobia", "clouds"]
var word = "";
var guessingArray = [];
var guessesLeft = 6;
var wrongGuesses = [];
var wins = 0;
var losses = 0;

var winsText = document.getElementById("wins-text");
var guessingArrayText = document.getElementById("guessingArray-text");
var wrongGuessesText = document.getElementById("wrongGuesses-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var gameContentBox = document.getElementById("gameContent");
gameContentBox.style.display = "none";

document.getElementById("playButton").addEventListener("click", guessingGame);

function guessingGame() {
    var guessingText = "";
    reset();

    gameContentBox.style.display = "block";

    function buildSlotsVisible(x) {
        var displayText = "";
        for (i = 0; i < x.length; i++) {
            displayText += x[i] + " ";
        }
        return displayText;
    }

    function displayStats() {
        winsText.textContent = "Wins: " + wins;
        guessingArrayText.textContent = guessingText;
        wrongGuessesText.textContent = "Wrong guesses: " + wrongGuesses;
        guessesRemainingText.textContent = "Guesses remaining: " + guessesLeft;
    }

    displayStats();

    function reset() {
        word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        guessingArray = [];
        guessesLeft = 6;
        wrongGuesses = [];

        for (i = 0; i < word.length; i++) {
            guessingArray.push("_ ");
        };

        guessingText = buildSlotsVisible(guessingArray);

    }

    document.onkeyup = function (event) {
        var userGuess = event.key;
        userGuess = userGuess.toLowerCase();

        if (guessesLeft > 0) {
            if (wrongGuesses.indexOf(userGuess) === -1 && word.indexOf(userGuess) === -1) {
                guessesLeft--;
                wrongGuesses += userGuess + " ";
                displayStats();
            } else {
                for (i = 0; i < word.length; i++) {
                    if (word[i] === userGuess) {
                        guessingArray[i] = userGuess + " ";
                    }
                }
                displayStats();
            }

            if (guessingArray.indexOf("_ ") === -1) {
                displayStats();
                wins++;
                alert("You Win!");
                reset();
            }
        }

        if (guessesLeft === 0) {
            console.log("Wrong guesses remaining: " + guessesLeft);
            displayStats();
            losses++;
            alert("You Lose!");
            reset();
        }

        guessingText = buildSlotsVisible(guessingArray);

        displayStats();
    }
}


