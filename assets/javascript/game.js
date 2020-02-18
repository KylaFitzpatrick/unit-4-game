var randomNumbers = Math.floor(Math.random() * 90) + 30;


var wins = 0;
var loses = 0;
var totalScore = [];
// // Randomly chooses a choice from the options array.
var randomNumber = [];
var guessedNumber = [];

display();
resetGame();

window.addEventListener('load', display, false);

function display(){
var randomNumberText = document.getElementById("random-number-text");
console.log(answerText);
var winsText = document.getElementById("wins-text");
console.log(winsText);
var guessesText = document.getElementById("losses-text");
console.log(guessesText);
var scoreText = document.getElementById("score-number");
console.log(lettersText);
randomNumberText.innerHTML = randomNumber;
console.log(answerText);
winsText.innerHTML = wins;
console.log(winsText);
lossesText.innerHTML = losses;
console.log(lossesText);
scoreText.innerHTML = guess;
console.log(lettersText);
}
// * The player will be shown a random number at the start of the game.
function resetGame() {
    guessedNumber = [];
    randomNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
    console.log("Number to guess: " + randomNumber);
} 

// * There will be four crystals displayed as buttons on the page.


//   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

 

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var guessedNumber = parseInt(event.keyCode); 
    var guess = guessedNumber;
    
     // alert("Please enter a number.");
    var numbers = /^[30-90]+$/;
        if(guess.match(numbers))
        {
        guess
        }else{
            alert("Please enter a number");
        }
    // * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//   * Your game will hide this amount until the player clicks a crystal.
//   * When they do click one, update the player's score counter.    
    

  // * The player wins if their total score matches the random number from the beginning of the game.

            if (guess === randomNumber){ 
            wins++;
            }
    
  // * The player loses if their score goes above the random number.
      if(guess > randomNumber){
          losses ++;
      }
// * The game restarts whenever the player wins or loses.
        if(guess === randomNumber || lettersLeft === 0){
            resetGame();
        }
            display();
        };

