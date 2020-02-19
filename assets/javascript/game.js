var randomNumbers = Math.floor(Math.random() * 90) + 30;

var wins = 0;
var losses = 0;
var totalScore = [];
// // Randomly chooses a choice from the options array.
var randomNumber = [];
var guessedNumber = 0;

resetGame();

// * The player will be shown a random number at the start of the game.
//   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
function resetGame() {
    $("#wins-text").text(wins);
    $("#losses-text").text(losses);
    $("#score-number").empty(guessedNumber);
    randomNumber = Math.floor(Math.random() * 90) + 30;
    $("#random-number").text(randomNumber);
    console.log("Number to guess: " + randomNumber);
} 

    // * There will be four crystals displayed as buttons on the page.
    // * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//   * Your game will hide this amount until the player clicks a crystal.
//   * When they do click one, update the player's score counter.  
// We begin by expanding our array to include four options.
var numberOption = Math.floor(Math.random() * 10) + 5;
var numberOptions = [numberOption , numberOption, numberOption, numberOption];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "assets/images/amethyst.jpg");
//   imageCrystal.attr("src", "assets/images/druze.jpg", numberOptions[1]);
//   imageCrystal.attr("src", "assets/images/fluorite.jpg", numberOptions[2]);
//   imageCrystal.attr("src", "assets/images/rock-crystal.jpg", numberOptions[3]);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#images").append(imageCrystal);
}  
   // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    guessedNumber += crystalValue;
    $("#score-number").text(guessedNumber);


    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + guessedNumber);

      // * The player wins if their total score matches the random number from the beginning of the game.

    if (guessedNumber === randomNumber){
        wins++;
        $('#wins').text(wins);
        alert("You win!");
        resetGame(); 
   
    // * The player loses if their score goes above the random number.
    }else if (guessedNumber > randomNumber){
        losses ++;
        $('#losses').text(losses);
        alert("You lose!!");
        resetGame();
    }
  // * The player wins if their total score matches the random number from the beginning of the game.
// * The game restarts whenever the player wins or loses.
        if(guessedNumber === randomNumber || losses > 0){
            resetGame();
        }
    });


