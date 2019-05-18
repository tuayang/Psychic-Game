// event listener for user guesses
    document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
    guessesSoFar.push(userGuess);
        if (userGuess == computerGuess) {
            wins++;
            alert("You guessed corrrectly. Good Job!");
            guessesLeft = 10; //reseting the guesses back to 10 so that the user can play again
            guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
        }
        else if (guessesLeft == 0){
            losses++;
            alert("You didn't guessed wrong. Try again.");
            guessesLeft = 10;
            guessesSoFar.length = 0;
        }
        else if (userGuess !== computerGuess){
            guessesLeft--; //decrementing the guesses left
        }  

// User input diplayed on HTML
    var game =  
    "<h4>Guess what letter I'm thinking of:</h4>" +
    "<p>Total Wins: " + wins + "</p>" +
    "<p>Total Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your Guesses so far: " + guessesSoFar + "</p>"
    ;
// Placing the html into the game ID
    document.querySelector('#game').innerHTML = game;
    }

// variables for wins, losses, guesses remaining, and current guesses
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFar = []; 

// array of letters from a to z
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 