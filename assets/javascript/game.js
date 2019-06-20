


$(document).ready(function() {


var wins = 0;
var losses = 0;



// ==========================================
// This is the Setup Area
// ==========================================

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
console.log("This is the target score: " + targetScore);

// ==========================================



    // 2. This random number is shown to the player
$("#computerNumber").html(targetScore);

    // 3. Random Value is chosen for each gem and assigned 
    //to that button (between 1 - 12)
    function gemValueGenerator(selector) {
        // Here we generate a random number for each Gem
        var gemValue = Math.floor(Math.random() * 12) + 1;
        // This takes the gemValue variable, targets the "value" property, \
        //and writes that variable onto it.
        $(selector).attr("value", gemValue);
        

    };
        // a. Garnet
        gemValueGenerator("#garnet");
        // b. Amethyst
        gemValueGenerator("#amethyst");
        // c. Pearl
        gemValueGenerator("#pearl");
        // d. Diamond
        gemValueGenerator("#diamond");




// =========================================
    // EDGE CASE CHECKING!
// =========================================
    // There is a VERY remote chance that the game becomes
    // un-winnable: If targetScore is Even and EVERY gem 
    // is Odd (or vice-versa)

   
// This checks whether whatever-number-we-insert-here is an Even number
// AKA, when we divide by 2, do we have a remainder of 0? AKA is it a whole number?
    function isEven(number) {

        return number % 2 === 0;
        
    }

// This function checks the values of all 4 gems, and of targetScore. 
// If all gems are Even, AND targetScore is Odd (is NOT Even)...
function userCanWin(gem1,gem2,gem3,gem4,targetScore) {
    if (isEven(gem1) 
        && isEven(gem2) 
        && isEven(gem3) 
        && !isEven(targetScore) 
        && isEven(gem4)) {
        // then we take the value of gem4 and subtract 1 to make it Odd.
            return gem4 - 1;        
    }
    // If the edge case is not true, we don't need to do anything. Return 
    // gem4 as normal, and move along as planned.
    return gem4;
};

// =========================================
// This is a slightly more efficient version that's less verbose. It creates
// an array of all the gem values, and then takes the last gem in the array and
// subtracts 1, to make it Odd. This is more flexible, as it allows a flexible amount
// of gems to be created for the page, and this failsafe code will still catch it.


// function userCanWin(gems, targetScore) {
//     var last = gems.length-1;
//     if (gems.every(isEven) && !isEven(targetScore)) {
//         return gems[last] - 1;
//     }

//     return gems[last];
// }

// However, I feel like the non-Array version, while less efficient, is a bit easier to
// read and understand. For this reason, since both of these do the same thing, I'm going
// to comment out the Array version of this. I want to make sure I'm understanding all the
// code I write, and not just blindly trusting Black Magic That I Googled to do my bidding.
// ===================================================


// This takes the HTML Element with ID of #diamond, and we're running the .attr method
// and accessing the "value" attribute of that element. Then we're taking that, 
// and we're inserting the results of the userCanWin function (which is being run 
// on all four gems AND targetScore) into that attribute.
$("#diamond").attr(
    "value", 
    userCanWin([
        $('#garnet').val(), 
        $('#amethyst').val(),
        $('#pearl').val(),
        $('#diamond').val()],
        targetScore
    )
    );


// =========================================
// End of Edge-Case Checking Code
// =========================================




    // When the user clicks on a gem, several things happen:
    $(".gembutton").click(function(){

        // The following conversation takes place:

        // "Hey, .gembutton I just clicked on!"
        // "What's up?"
        // "You know that value that just got written onto you 
            // by that gemValueGenerator function over there?"
        // "You mean the function that you can't talk to?"
        // "Yeah, that guy. Can you tell me what that value is?"
        // "Why not just ask him yourself?"
        // "Because Scope is a bitch and he says I can't."
        // "Oh, yeah. Here you go."
        var gemValue = $(this).val()
        // "Thanks!"


        // This prints out the gem's value.
        console.log("The " + this.id + " gem is worth: " + gemValue);

        // Here, we are forcing both gemValue and currentScore to 
        // be integers, since they were behaving like strings before.
            // Why? NO IDEA! This just fixes it anyway with brute force. 
            // NUKE IT FROM ORBIT.
        gemValue = parseFloat(gemValue);
        currentScore = parseFloat(currentScore);

        // This just adds the two together.
        currentScore += gemValue;

        // 2. The Current Score is updated on the webpage
        $("#totalScore").html(currentScore);
        console.log("The user's Current Score is now: " + currentScore);


        //After all this is done, the game needs to check whether
        // the game has been won.

        // If the user's score matches the Target Score, the user wins!!
        if (currentScore === targetScore) {
            console.log("YOU WIN!!!");
            $("#winlose").html("WIN!!!");
            // Wins is increased by 1 
            wins++;
            // Game is reset (via Function!)
            reset();
        }       
        // If the user's score goes above the Target Score, the user loses.
        else if (currentScore > targetScore) {
            console.log("YOU LOST");
            $("#winlose").html("LOSE...");
            // Losses is increased by 1
            losses++;
            // Game is reset (via Function!)
            reset();
}
    });


    // RESET!! (This should all be wrapped in a Function)
    function reset() {

        console.log("The game is being RESET");

        // User's Current Score is reset back to 0
        currentScore = 0;

        // Player's current score is written to the screen
        $("#totalScore").html(currentScore);

        // Wins is written to the screen
        $("#wins").html(wins);

        // Losses is written to the screen
        $("#losses").html(losses);

        // New random Target Score is generated and assigned
        targetScore = Math.floor(Math.random() * 101) + 19;
        console.log("This is the target score: " + targetScore);

        // Target Score on the screen is written to the screen
        $("#computerNumber").html(targetScore);

        // New random Gem values are generated and assigned
        gemValueGenerator("#garnet");
        gemValueGenerator("#amethyst");
        gemValueGenerator("#pearl");
        gemValueGenerator("#diamond");
        
    };




// LEFTOVER BRAINSTORMING NOTES
// ============================
// While-Loop?

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

// var gameStatus = 0;
// var playerWon = 1;
// var playerLost = 2;


    // If all buttons are even, and the target is odd, you can never win!!!

    // EViL!! Make a version so you can NEVER win!! If target number is odd, make all gem values Even!

});