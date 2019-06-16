


$(document).ready(function() {


// var garnet;
// var amethyst;
// var pearl;
// var diamond;
var wins = 0;
var losses = 0;

var currentScore = 0;

// Player's current score is written to the screen
$("#totalScore").html(currentScore);
// Wins is written to the screen
$("#wins").html(wins);
// Losses is written to the screen
$("#losses").html(losses);


// When the game is started, several things need to happen:
//    1. A random number is generated as the Target Score (between 19 - 120)

var targetScore = Math.floor(Math.random() * 101) + 19;
console.log("This is the target score: ");
console.log(targetScore);

    // 2. This random number is shown to the player

$("#computerNumber").html(targetScore);

    // 3. Random Value is chosen for each gem and assigned to that button (between 1 - 12)

    function gemValueGenerator(id) {
        // Here we generate a random number for each Gem
        var gemValue = Math.floor(Math.random() * 12) + 1;
        $(id).attr("value", gemValue);

    };

        // a. Garnet
        gemValueGenerator("#garnet");
        // b. Amethyst
        gemValueGenerator("#amethyst");
        // c. Pearl
        gemValueGenerator("#pearl");
        // d. Diamond
        gemValueGenerator("#diamond");








    // When the user clicks on a gem, several things happen:
    $(".gembutton").click(function(){

        var gemValue = $(this).val()

        // 1. That gem's value is added to the Current Score

        console.log("This is the Gem Value: ");
        console.log(gemValue); 
        // Here, we are forcing both gemValue and currentScore to be integers, since they were behaving like strings before.
        gemValue = parseFloat(gemValue);
        currentScore = parseFloat(currentScore);
        // This just adds the two together.
        currentScore += gemValue;

        // 2. The Current Score is updated
        $("#totalScore").html(currentScore);
        console.log(currentScore);
    });


    
    // If the user's score goes above the Target Score, the user loses.
        // Game is reset (via Function!)
        // Losses is increased by 1
    // If the user's score matches the Target Score, the user wins!!
        // Game is reset (via Function!)
        // Wins is increased by 1

// WHILE the player's score is less than the target score, let them keep picking new buttons
// While the game is being played, we have a GAmeOutcome variable
// Game has been won, game has been lost, game is still going
// set those equal to like, 0, 1 or 2
// ActiveGame=0,
// Won=1
// Loss=2
// While this variable is equal to Active (or also 0), do the loop.
//      User choose a button
//      Update Score
//      Test it! Is the game still active? Is it won? Is it lost? 
// Set numbers equal to a meaningful name, like True, or False or something
// then you just use that meaningful name as the conditional for your logic







    // RESET!! (This should all be wrapped in a Function)
    function reset() {
        // New random Target Score is generated and assigned
        var targetScore = Math.floor(Math.random() * 101) + 19;
        console.log("This is the target score: ");
        console.log(targetScore);


        // New random Gem values are generated and assigned
        // a. Garnet
        gemValueGenerator("#garnet");
        // b. Amethyst
        gemValueGenerator("#amethyst");
        // c. Pearl
        gemValueGenerator("#pearl");
        // d. Diamond
        gemValueGenerator("#diamond");
        

        // User's Current Score is reset back to 0
        currentScore = 0;

        // Target Score on the screen is written to the screen
        $("#computerNumber").html(targetScore);

        // Player's current score is written to the screen
        $("#totalScore").html(currentScore);

        // Wins is written to the screen
        $("#wins").html(wins);

        // Losses is written to the screen
        $("#losses").html(losses);


    };





    // If all buttons are even, and the target is odd, you can never win!!!

    // EViL!! Make a version so you can NEVER win!! If target number is odd, make all gem values Even!





              // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".

    //   letterBtn.addClass("letter-button letter letter-button-color");

      // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"

    //   letterBtn.attr("data-letter", letters[i]);





});