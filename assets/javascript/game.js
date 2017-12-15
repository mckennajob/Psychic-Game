
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

  document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuesses.push(userGuess);
    var guessLetters = document.getElementById("guessLetters");
    guessLetters.textContent = userGuesses;


    if(userGuess === letterToGuess) {
      wins++;
      document.querySelector("#winCount").innerHTML = wins;
      console.log('wins', wins);
    }
    else {
      updateGuessesLeft();
    }

    console.log(userGuesses);

  }



//guess right - shows 1 win



//guess wrong - minus 1 guess

// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
//GUESSES LEFT:
    var updateGuessesLeft = function() {
      guessesLeft--;
      document.querySelector("#guessCount").innerHTML = guessesLeft;

      if(guessesLeft <= 1){
        losses++;
        document.querySelector("#lossCount").innerHTML = losses;
      } else if (guessesLeft === 0) {
        // end game
      }

    };

//COMPUTER GUESSES
    var updateLetterToGuesses = function() {

    letterToGuess = letters[Math.floor(Math.random() *  letters.length)];
    console.log(letterToGuess);

    };
    updateLetterToGuesses();


    var updateGuessesSoFar = function() {

      document.querySelector("#guessLetters").innerHTML = guessLetters;

    };



//guess wrong after 9 - shows 1 loss
