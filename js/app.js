/* app.js
 * JavaScript file to handle the Pokemon Progress Quest browser game
 * Made on 2016-02-24
 * by GeOdin
 * Last modified on 2016-02-27
 *
 *=========================================================
 * This file includes the following functions: *
 *=========================================================
 * main()
 * game()
 * eventIteration(pokemonNumb, pokemonName)
 *
 *=========================================================
 * To do
 *=========================================================
 * Make badge appear after fight against gym leader and winning (after each 10-13 pokemon caught)
 * Add player info
 * Let Pokemon level up if pokemon is not caught
 * Add Hall of Fame to last image
 */

////////////
// main() //
////////////

// Function to start the game
var main = function() {
	// Set the variables
	var interval;
	var playTime = 0;
	var game;
	var counter = 0;
	var gameWon = false;
	//var player = new Object();
	var playerName = "";
	var playerGender = "";
	//player.pokemonCaught = pokemonCaught;
	var randPKMNnumb;
	var activePokemon = [
		["pokemonNumber", "pokemonName", "level"],
		[1, "", 1],
		[2, "", 1],
		[3, "", 1],
		[4, "", 1],
		[5, "", 1],
		[6, "", 1]
	];

	// Set the time between intervals
	while (isNaN(interval) == true){
		interval = 1000 * prompt("How much time should be between different events? \n\n1 = 1 second. \nIt also takes that long before the game starts.", 3);
	}
	// Set the playTime
	while (playTime < 1) {
		playTime = 60 * 1000 * prompt("How many minutes do you want to play? ", 10);
	}

	// Set the player's name
	while (playerName.length < 1){
		playerName = prompt("What is your name? ", "Chariza");
	}
	document.getElementById("playerTitle").innerHTML = "<h3>" + playerName + "</h3> <br/>";

	// Set the player's gender
	while (playerGender != "girl" && playerGender != "boy") {
		playerGender = prompt("What is your gender? ", "girl");
		playerGender = playerGender.toLowerCase();
	}
	document.getElementById("playerImage").innerHTML = "<img src=images/player/" + playerGender + ".png /> <br/> <br/>";

	// Set the player text
	document.getElementById("playerText").innerHTML = "";

	gameSetup = window.setInterval(game, interval);
	gameSetup;

	function game() {

		if (counter < playTime) {
			if (gameWon != true) {
				eventIteration(randPKMNnumb);
			} else {
				// Event title
				document.getElementById("eventTitle").innerHTML = "<h2> Hall of Fame </h2>";
				// Show image of Pokemon
				document.getElementById("eventImage").innerHTML = "<img src=images/pokemonIconsTransparent/" + activePokemon[1][1] + ".png />";
				// Show story
				document.getElementById("eventText").innerHTML = "CONGRATULATIONS!";
				return;
			}
		} else if (counter > playTime) {
			// Event title
			document.getElementById("eventTitle").innerHTML = "<h2> Time's up! </h2>";
			// Show image of first Pokemon
			document.getElementById("eventImage").innerHTML = "<img src=images/pokemonIconsTransparent/" + activePokemon[1][1] + ".png />";
			// Show story
			document.getElementById("eventText").innerHTML = "Better luck next time!";
			return;
		}
		counter += interval;

		function eventIteration(pokemonNumb) {
			// Set variables
			pokemonNumb = 0;
			var pokemonName;
			// Get random Pokemon
			while (pokemonNumb == 0 && gameWon == false) {
				pokemonNumb = Math.ceil(Math.random() * (pokemon.length - 1)); // Random number between 1-pokemon.length
				pokemonName = pokemon[pokemonNumb][1];
				if (pokemonCaught[pokemonName] != 0) {
					pokemonNumb = 0;
				}
				if (pokemonCaught.total() == pokemon.length - 1) {
					gameWon = true;
					break;
				}
			}
			var randNumb = Math.random();
			var catchChance = pokemon[pokemonNumb][2];

			// Show event
			// Event title
			document.getElementById("eventTitle").innerHTML = "<h2> Battling </h2>";
			// Show image of Pokemon
			document.getElementById("eventImage").innerHTML = "<img src=images/pokemonIconsTransparent/" + pokemonName + ".png />";
			// Show story
			document.getElementById("eventText").innerHTML = pokemonName;

			// Catch Pokemon
			if (randNumb <= catchChance) {
				// Set variables
				var pokemonLevel;
				// Catch Pokemon if it has not been caught already
				if (pokemonCaught[pokemonName] == 0) {
					pokemonCaught[pokemonName] = 1;
					document.getElementById("pokemonCaught").innerHTML = "<h3> Pok&eacute;dex: " + pokemonCaught.total() + "/" + (pokemon.length - 1) + "<br/><progress id='health' value=" + pokemonCaught.total() + " max=" + (pokemon.length - 1) + " style='height:1vh;width:60%;background:green;'> </progress>";
					var pokedexEntryNew = "<p>" + pokemonName + "</p>";
					$("#pokedexEntries").prepend(pokedexEntryNew);
					if (pokemonCaught.total() == 13) {
						$("#badge1").show();
					} else if (pokemonCaught.total() == 25) {
						$("#badge2").show();
					} else if (pokemonCaught.total() == 38) {
						$("#badge3").show();
					} else if (pokemonCaught.total() == 50) {
						$("#badge4").show();
					} else if (pokemonCaught.total() == 63) {
						$("#badge5").show();
					} else if (pokemonCaught.total() == 75) {
						$("#badge6").show();
					} else if (pokemonCaught.total() == 88) {
						$("#badge7").show();
					} else if (pokemonCaught.total() == 100) {
						$("#badge8").show();
					}
					for (i=1; i<7; i++) {
						var activePokemonDivCall = "activePokemon" + i;
						if (activePokemon[i][1] == "") {
							pokemonLevel = 1;
							activePokemon[i][1] = pokemonName;
							activePokemon[i][2] = pokemonLevel;
							document.getElementById(activePokemonDivCall).innerHTML = pokemonName + " <br/> Lvl: " + pokemonLevel + " <br/> <img src='images/pokemonIconsTransparent/" + pokemonName + ".png' /> <br/> EXP: <br/> <progress id='health' value=" + pokemonLevel + " max='100' style='height:1vh;width:60%;'></progress>";
							break;
						}
					}
				// Level Pokemon if the Pokemon is already caught
				} else {
					pokemonName = activePokemon[1][1];
					pokemonLevel = 2;
					document.getElementById("activePokemon1").innerHTML = pokemonName + " <br/> Lvl: " + pokemonLevel + " <br/> <img src='images/pokemonIconsTransparent/" + pokemonName + ".png' /> <br/> EXP: <br/> <progress id='health' value=" + pokemonLevel + " max='100' style='height:1vh;width:60%;'></progress>";
				}
			}
		}
		return gameWon;
	}
}

$(document).ready(main);

