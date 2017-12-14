
//scores
  var wins = 0;
  var losses = 0;
  console.log(wins);
  console.log(losses);

//guesses left
  var guessesLeft = 9;
    while(guessesLeft < 8){
      guessesLeft--;
      console.log(guessesLeft);
    }



//computer letter
  var letters = ["f", "u", "c", "k"];

  var lettertoGuess = null;



// "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"

//user guesses
  var userGuesses = [];

  console.log(userGuesses);

  document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuesses.push(userGuess);
    var guessLetters = document.getElementById("guessLetters");
    guessLetters.textContent = userGuesses;

    console.log(userGuesses);

  }



//guess right - shows 1 win



//guess wrong - minus 1 guess

// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
//GUESSES LEFT:
    var updateGuessesLeft = function() {
      // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
      // (i.e. guessesLeft will get displayed in HTML)
      document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    };

//COMPUTER GUESSES
    var updateLetterToGuesses = function() {

    letterToGuess = letters[Math.floor(Math.random() *  letters.length)];
    console.log(updateLetterToGuess);

    };


    var updateGuessesSoFar = function() {

      document.querySelector("#guessLetters").innerHTML = guessLetters;

    };



//guess wrong after 9 - shows 1 loss
