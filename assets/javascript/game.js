$(document).ready(function() {

// Total wins -- set to 0 to start
var wins = 0;

// Total losses -- set to 0 to start
var losses = 0;

// Declare counter
var counter;

// Declare goal number to be reached
var targetNumber;

// Crystals
var amethyst = $("#crystal1");
var morganite = $("#crystal2");
var opal = $("#crystal3");
var sapphire = $("#crystal4");
crystalsArray = [amethyst, morganite, opal, sapphire];

	// Start and Restart
	var newGame = function() {

		// Set user's current total and random numbers
		var randomCrystalNumber = 0;
		counter = 0;
		$("#score").html(counter);

		// Random number for goal between 19-120
		targetNumber = Math.floor(Math.random() * 101) + 19;
		$("#number-to-guess").html(targetNumber);

		// Assign random value to each crystal
		for (var i = 0; i < crystalsArray.length; i++) {
			randomCrystalNumber = Math.floor(Math.random() * 11) + 1;
			crystalsArray[i].data("crystalNumber", randomCrystalNumber);
			console.log(randomCrystalNumber);
		}
	};

	$(".crystal").click(function() {
		var crystalValue = ($(this).data("crystalNumber"));
		console.log(crystalValue)
		crystalValue = parseInt(crystalValue);
		counter += crystalValue;
		$("#score").html(counter);

		// Wins -- if score = targetNumber, then restart
		if (counter === targetNumber) {
			wins++;
			alert("You won!");
			newGame();
		};

		// Lose -- if score > targetNumber, then restart
		if (counter > targetNumber) {
			losses++;
			alert("You lost..");
			newGame();
		};

		$("#wins").html("<h2>Wins: " + wins + "</h2>");
		$("#losses").html("<h2>Losses: " + losses + "</h2>");
	});


$("#wins").html("<h2>Wins: " + wins + "</h2>");
$("#losses").html("<h2>Losses: " + losses + "</h2>");

newGame();

});