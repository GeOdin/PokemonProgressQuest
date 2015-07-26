//Pokemon Battle

// This includes the functions:
// pokemonbattle();
// pokemonBattleStart(player, opponent);
//// pokemonBattle(player, opponent);

// make the pokemon an object of the object trainer (player/ opponent)
// make the firstPokemon and secondPokemon objects
// create a different version for pokemonBattleStart(player, opponent) and pokemonBattle(player, opponent) for first battle (since introduction is different)
	// pokemonBattleStartFirst(player, opponent);
	// pokemonBattleFirst(player, opponent)

// Function to do the battle
function pokemonBattleStart(player, opponent) {
	// Reset variables if necessary

	// Set variables
	var counterTwo = 0;
	var firstPokemon;
	var secondPokemon;
	var battleStat = “busy”;

	// show battle screen (different depending on where you are?
	// text opponent wants to battle you
	// text opponent sents out certain pokemon
	// put image of opponent pokemon on top of battleimage
	// text I choose you, pokemon (1st active pokemon)
	// put image of pokemon (1st active pokemon) on battlescreen

	// Possibly make the lower part also a function to check which pokemon is the first pokemon and which one the second
	if (player.pokemon1.speed > opponent.pokemon1.speed){
		firstPokemon = player.pokemon1;
		firstPokemon.owner = “PLAYER”;
		secondPokemon = opponent.pokemon1;
		secondPokemon.owner = “OPPONENT”;
	} else if (player.pokemon1.speed < opponent.pokemon1.speed) {
		firstPokemon = opponent.pokemon1;
		firstPokemon.owner = “OPPONENT”;
		secondPokemon = player.pokemon1;
		secondPokemon.owner = “PLAYER”;
	} else {
		var randNumb = Math.random();
		if (randNumb <= 0.5) {
			firstPokemon = player.pokemon1;
			firstPokemon.owner = “PLAYER”;
			secondPokemon = opponent.pokemon1;
			secondPokemon.owner = “OPPONENT”;
		} else {
			firstPokemon = opponent.pokemon1;
			firstPokemon.owner = “OPPONENT”;
			secondPokemon = player.pokemon1;
			secondPokemon.owner = “PLAYER”;
		}
	};

	setInterval (pokemonBattle(player, opponent), 3000); //3000 for 3 seconds

	function pokemonBattle(player, opponent) {
		// Set variables
		var move; //move should become an object

		while (battleStat == “busy”) {
			// Move of firstPokemon
			document.getElementById(“imageStory”).src = “images/pokemonIcons/” + firstPokemon.Name + “.gif”;
			getMove(firstPokemon);
			useMove(firstPokemon);
			document.getElementById(“pokemonRed”).innerHTML = firstPokemon “ used ” + move.Name;
			counterTwo++;

			// Effect of move
			if (move.effect == “super effective”) {
				document.getElementById(“pokemonRed”).innerHTML = “It was ” + move.effect + “!”;
				counterTwo++;
			} else if (move.effect == “not very effective”) {
				document.getElementById(“pokemonRed”).innerHTML = “It was ” + move.effect + “.”;
				counterTwo++;
			}

			// Make a function for the part below that checks whether a pokemon is fainted
			// Check if secondPokemon is fainted
			if (secondPokemon.currentHP <= 0) {
				document.getElementById(“pokemonRed”).innerHTML = secondPokemon + “has fainted.”;
				switchPokemon(opponent); //not opponent but trainer!
				//rename new pokemon to secondPokemon with secondPokemon.owner
				counterTwo++;
				if (secondPokemon.currentHP > 0) {
					document.getElementById(“imageStory”).src = “images/pokemonIcons/” + secondPokemon.Name + “.gif”;
					document.getElementById(“pokemonRed”).innerHTML = secondPokemon.Name + “ enters the battle. “;
				} else if (secondPokemon.currentHP <= 0) {
					if (secondPokemon.owner == “PLAYER”) {
						battleStat = “lost”;
						// add information/ function for when battle is lost → battleLost();
							// teleport to last visited healing place (pokecenter/mom)
							// break;
					} else if (secondPokemon.owner == “OPPONENT”){
						battleStat = “won”;
						// add information/ function for when battle is won → battleWon();
							// get money if player is beaten (not from wild pokemon)
							// text got money
							// delete status effects
							// break;
					}
				}
			// Check if firstPokemon is fainted
			} else if (firstPokemon.currentHP <= 0) {
				document.getElementById(“pokemonRed”).innerHTML = firstPokemon + “has fainted.”;
				switchPokemon(player); //not player but trainer!
				//rename new pokemon to secondPokemon with secondPokemon.owner
				counterTwo++;
				if (firstPokemon.currentHP > 0) {
					document.getElementById(“imageStory”).src = “images/pokemonIcons/” + firstPokemon.Name + “.gif”;
					document.getElementById(“pokemonRed”).innerHTML = firstPokemon.Name + “ enters the battle. “;
				} else if (firstPokemon.currentHP <= 0) {
					if (firstPokemon.owner == “PLAYER”) {
						battleStat = “lost”;
						// add information/ function for when battle is lost → battleLost();
							// teleport to last visited healing place (pokecenter/mom)
							// break;
					} else if (firstPokemon.owner == “OPPONENT”){
						battleStat = “won”;
						// add information/ function for when battle is won → battleWon();
					}
				}
			}
		};
	};
};

// Function for the first battle
function pokemonBattleStartFirst(player, opponent) {
	// Reset variables if necessary

	// Set variables
	var counterTwo = 0;
	var firstPokemon;
	var secondPokemon;
	var battleStat = “busy”;

	// show battle screen (different depending on where you are?
	// text opponent wants to battle you
	// text opponent sents out certain pokemon
	// put image of opponent pokemon on top of battleimage
	// text I choose you, pokemon (1st active pokemon)
	// put image of pokemon (1st active pokemon) on battlescreen

	// Possibly make the lower part also a function to check which pokemon is the first pokemon and which one the second
	if (player.pokemon1.speed > opponent.pokemon1.speed){
		firstPokemon = player.pokemon1;
		firstPokemon.owner = “PLAYER”;
		secondPokemon = opponent.pokemon1;
		secondPokemon.owner = “OPPONENT”;
	} else if (player.pokemon1.speed < opponent.pokemon1.speed) {
		firstPokemon = opponent.pokemon1;
		firstPokemon.owner = “OPPONENT”;
		secondPokemon = player.pokemon1;
		secondPokemon.owner = “PLAYER”;
	} else {
		var randNumb = Math.random();
		if (randNumb <= 0.5) {
			firstPokemon = player.pokemon1;
			firstPokemon.owner = “PLAYER”;
			secondPokemon = opponent.pokemon1;
			secondPokemon.owner = “OPPONENT”;
		} else {
			firstPokemon = opponent.pokemon1;
			firstPokemon.owner = “OPPONENT”;
			secondPokemon = player.pokemon1;
			secondPokemon.owner = “PLAYER”;
		}
	};

	setInterval (pokemonBattleFirst(player, opponent), 3000); //3000 for 3 seconds

	function pokemonBattleFirst(player, opponent) {
		// Set variables
		var move; //move should become an object

		while (battleStat == “busy”) {
			// Move of firstPokemon
			document.getElementById(“imageStory”).src = “images/pokemonIcons/” + firstPokemon.Name + “.gif”;
			getMove(firstPokemon);
			setPokemonMove(move);
			useMove(firstPokemon);
			document.getElementById(“pokemonRed”).innerHTML = firstPokemon “ used ” + move.Name;
			counterTwo++;

			// Effect of move
			if (move.effect == “super effective”) {
				document.getElementById(“pokemonRed”).innerHTML = “It was ” + move.effect + “!”;
				counterTwo++;
			} else if (move.effect == “not very effective”) {
				document.getElementById(“pokemonRed”).innerHTML = “It was ” + move.effect + “.”;
				counterTwo++;
			}

			// Make a function for the part below that checks whether a pokemon is fainted
			// Check if secondPokemon is fainted
			if (secondPokemon.currentHP <= 0) {
				document.getElementById(“pokemonRed”).innerHTML = secondPokemon + “has fainted.”;
				switchPokemon(opponent); //not opponent but trainer!
				//rename new pokemon to secondPokemon with secondPokemon.owner
				counterTwo++;
				if (secondPokemon.currentHP > 0) {
					document.getElementById(“imageStory”).src = “images/pokemonIcons/” + secondPokemon.Name + “.gif”;
					document.getElementById(“pokemonRed”).innerHTML = secondPokemon.Name + “ enters the battle. “;
				} else if (secondPokemon.currentHP <= 0) {
					if (secondPokemon.owner == “PLAYER”) {
						battleStat = “lost”;
						// add information/ function for when battle is lost → battleLost();
							// teleport to last visited healing place (pokecenter/mom)
							// break;
					} else if (secondPokemon.owner == “OPPONENT”){
						battleStat = “won”;
						// add information/ function for when battle is won → battleWon();
							// get money if player is beaten (not from wild pokemon)
							// text got money
							// delete status effects
							// break;
					}
				}
			// Check if firstPokemon is fainted
			} else if (firstPokemon.currentHP <= 0) {
				document.getElementById(“pokemonRed”).innerHTML = firstPokemon + “has fainted.”;
				switchPokemon(player); //not player but trainer!
				//rename new pokemon to secondPokemon with secondPokemon.owner
				counterTwo++;
				if (firstPokemon.currentHP > 0) {
					document.getElementById(“imageStory”).src = “images/pokemonIcons/” + firstPokemon.Name + “.gif”;
					document.getElementById(“pokemonRed”).innerHTML = firstPokemon.Name + “ enters the battle. “;
				} else if (firstPokemon.currentHP <= 0) {
					if (firstPokemon.owner == “PLAYER”) {
						battleStat = “lost”;
						// add information/ function for when battle is lost → battleLost();
							// teleport to last visited healing place (pokecenter/mom)
							// break;
					} else if (firstPokemon.owner == “OPPONENT”){
						battleStat = “won”;
						// add information/ function for when battle is won → battleWon();
					}
				}
			}

			// Move of secondPokemon
			document.getElementById(“imageStory”).src = “images/pokemonIcons/” + secondPokemon.Name + “.gif”;
			getMove(secondPokemon);
			setPokemonMove(move);
			useMove(secondPokemon);
			document.getElementById(“pokemonRed”).innerHTML = secondPokemon “ used ” + move.Name;
			counterTwo++;

			// Effect of move
			if (move.effect == “super effective”) {
				document.getElementById(“pokemonRed”).innerHTML = “It was ” + move.effect + “!”;
				counterTwo++;
			} else if (move.effect == “not very effective”) {
				document.getElementById(“pokemonRed”).innerHTML = “It was ” + move.effect + “.”;
				counterTwo++;
			}

			// Make a function for the part below that checks whether a pokemon is fainted
			// Check if firstPokemon is fainted
			if (firstPokemon.currentHP <= 0) {
				document.getElementById(“pokemonRed”).innerHTML = firstPokemon + “has fainted.”;
				switchPokemon(player); //not player but trainer!
				//rename new pokemon to secondPokemon with secondPokemon.owner
				counterTwo++;
				if (firstPokemon.currentHP > 0) {
					document.getElementById(“imageStory”).src = “images/pokemonIcons/” + firstPokemon.Name + “.gif”;
					document.getElementById(“pokemonRed”).innerHTML = firstPokemon.Name + “ enters the battle. “;
				} else if (firstPokemon.currentHP <= 0) {
					if (firstPokemon.owner == “PLAYER”) {
						battleStat = “lost”;
						// add information/ function for when battle is lost → battleLost();
							// teleport to last visited healing place (pokecenter/mom)
							// break;
					} else if (firstPokemon.owner == “OPPONENT”){
						battleStat = “won”;
						// add information/ function for when battle is won → battleWon();
							// get money if player is beaten (not from wild pokemon)
							// text got money
							// delete status effects
							// break;
					}
				}
			// Check if secondPokemon is fainted
			} else if (secondPokemon.currentHP <= 0) {
				document.getElementById(“pokemonRed”).innerHTML = secondPokemon + “has fainted.”;
				switchPokemon(opponent); //not opponent but trainer!
				//rename new pokemon to secondPokemon with secondPokemon.owner
				counterTwo++;
				if (secondPokemon.currentHP > 0) {
					document.getElementById(“imageStory”).src = “images/pokemonIcons/” + secondPokemon.Name + “.gif”;
					document.getElementById(“pokemonRed”).innerHTML = secondPokemon.Name + “ enters the battle. “;
				} else if (secondPokemon.currentHP <= 0) {
					if (secondPokemon.owner == “PLAYER”) {
						battleStat = “lost”;
						// add information/ function for when battle is lost → battleLost();
							// teleport to last visited healing place (pokecenter/mom)
							// break;
					} else if (secondPokemon.owner == “OPPONENT”){
						battleStat = “won”;
						// add information/ function for when battle is won → battleWon();
					}
				}
			}
		};
	};
};


/*function firstPokemonBattleStart(pokemonPlayer, pokemonOpponent) { // Old version, because the newest version is not yet checked
	var counterTwo = 0;
	window.setInterval(firstPokemonBattle, 1000); //set to 3000 / 5000 for 3/5 seconds for final version
	function firstPokemonBattle(pokemonPlayer, pokemonOpponent) {
		// Reset variables
		//if (counterTwo == 0) {
			//reset variables if needed
		//}
		
		// Set variables
		if (pokemonPlayer.speed >= pokemonOpponent.speed) {
			firstPokemon = pokemonPlayer;
			secondPokemon = pokemonOpponent;
		} else if (pokemonPlayer.speed < pokemonOpponent.speed) {
			firstPokemon = pokemonOpponent;
			secondPokemon = pokemonPlayer;
		} else {
			firstPokemon = pokemonPlayer;
			secondPokemon = pokemonOpponent;
		};
		
		var battle = "busy"; //make this won/ lost depending on battle; lost does not cause player to return to nearest healing place
		
		counterTwo++;
		// firstPokemon moves
		document.getElementById("imageStory").src = "images/pokemonIcons/" + firstPokemon.name + ".gif";
		var move = "";
		var randNumb1to4;
		var randNumb;
		randNumb1to4 = 4 * Math.random();
		if (randomNumber1to4 <= 1) {
			//randNumb = 
		}
		while (move == "") {
			// get move
			// if move == ""; pick random number again
			// firstPokemon uses move --> calculateDamage()
		}
		document.getElementById("pokemonRed").innerHTML = firstPokemon.name + " used " + move + "."; //also put in the move that was used //firstPokemon.move1 / firstPokemon.move2 /firstPokemon.move3 / firstPokemon.move4
		
		counterTwo++;
		// secondPokemon moves
		document.getElementById("imageStory").src = "images/pokemonIcons/" + secondPokemon.name + ".gif";
			// secondPokemon uses move --> calculateDamage()
		document.getElementById("pokemonRed").innerHTML = secondPokemon.name + " used " + "."; //also put in the move that was used
		
	};
	counterTwo = 0;
};*/



/*function pokemonbattle() {
//// show battle screen (different depending on where you are?
//// text opponent wants to battle you
//// text opponent sents out certain pokemon
//// put image of opponent pokemon on top of battleimage
//// text I choose you, pokemon (1st active pokemon)
//// put image of pokemon (1st active pokemon) on battlescreen
//// while (battle not won) {
//// 	if (active pokemon = fainted) { // for player
//// 		if (active pokemon 2 != fainted) {
//// 		change active pokemon (active pokemon 1 becomes active pokemon 6, 2 --> 1, 3 --> 2, ...)	
//// 		} else if (active pokemon 2 == fainted) { //or if there are no more pokemon
//// 			teleport to nearest Pokecenter you've been
//// 			break
//// 		}
//// 	}
//// 	if (opponent pokemon = fainted) {
//// 		if (opponent has other pokemon) {
//// 			switch pokemon to other pokemon
//// 		} else if (opponent has no more non fainted pokemon) {
//// 			battle == won
//// 			get money if player is beaten (not from wild pokemon)
//// 			text got money
//// 			delete status effects
//// 			break
//// 		}
//// 	}
//// 	if (active pokemon exists) {
//// 		for (i=0; i<2; i++) { // 2 pokemon fighting each other --> i=2
//// 			pokemon attack each other switching turns 
//// 			fight/ switch/ bag/ run (switch/case)
//// 		}
//// 	}
//// }
};*/