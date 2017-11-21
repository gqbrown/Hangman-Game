// Hangman Game

var word ="madonna"

// Use Key event for the Letters the players will type 
// Use onkeyup event listening
// Create variable for currentKeyPressed

// Create a loop that looks through an array
// Compare the currentKeyPressed and see if it equals the letter at that index
//If it matches- display it.
// If it doesn't match add it to letters guessed.

// Press any key to get started 

// Log your wins. Number of times users get the word right.
//Create a variable for wins,
//Set the variable to 0.
var wins = 0;
// If aa player wins, Incrase by 11.
var playerWins =function () {
	wins++;
	// body...
} 

// Number of guesses remaining for the user
// Create a variable for the user.
// Set the variable 12(optional)
// If the player misses a letter decrease by 1.


// Display letters users guesses
// get Element by ID
// append to the element

var lettersGuessed = function(userKeyPressed) {
	$("#letters-guessed").append("<span>" + userKeyPressed + "</span>");

}


// Create a variable for the word
// Display a dash , for each latter in the word.
// use .lenth to chech the length of the word.
// Create a for loop that puts as many dashes as there are letters.
$(document).ready(function(){
	for (var i = 0; i < word.length; i++) {
		console.log("The loop ran") 
	$( "#word-one" ).append( "<span> _ </span>" );
	// Append a new ____ space evert time the loop runs.

}


})
