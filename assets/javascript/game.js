


$(document).ready(function() {


var garnet;
var amethyst;
var pearl;
var diamond;
var wins = 0;
var losses = 0;
var currentScore = 0;
$("#totalScore").html(currentScore);

// When the game is started, several things need to happen:
//    1. A random number is generated as the Target Score (between 19 - 120)

var targetScore = Math.floor(Math.random() * 101) + 19;
console.log(targetScore);

    // 2. This random number is shown to the player

$("#computerNumber").html(targetScore);

    // 3. Random Value is chosen for each gem and assigned to that button (between 1 - 12)

    function gemValueGenerator(id) {
        var gemValue = Math.floor(Math.random() * 12) + 1;
        $(id).attr("data-number", gemValue);

    };

        // a. Garnet
        gemValueGenerator("#garnet");
        // b. Amethyst
        gemValueGenerator("#amethyst");
        // c. Pearl
        gemValueGenerator("#pearl");
        // d. Diamond
        gemValueGenerator("#diamond");
    // 4. The number of Games Won is set

    // 5. The number of Games Lost is set

    // When the user clicks on a gem, several things happen:
    $(".gembutton").click(function(){
        // 1. That gem's value is added to the Current Score
        gemValue + currentScore;
        // 2. The Current Score is updated
        $("#totalScore").html(currentScore);
    });


    
    // If the user's score goes above the Target Score, the user loses.
        // Game is reset (via Function!)
        // Losses is increased by 1
    // If the user's score matches the Target Score, the user wins!!
        // Game is reset (via Function!)
        // Wins is increased by 1


    // RESET!! (This should all be wrapped in a Function)
    function reset() {
        // New random Target Score is generated and assigned
        // New random Gem values are generated and assigned
        // Target Score on the screen is updated on the screen
        // User's Current Score is reset back to 0
        // User's Current Score is updated on the screen
    };









              // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".

    //   letterBtn.addClass("letter-button letter letter-button-color");

      // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"

    //   letterBtn.attr("data-letter", letters[i]);





});