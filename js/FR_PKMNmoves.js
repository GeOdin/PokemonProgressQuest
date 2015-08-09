// Something is wrong in this script

//Pokémon moves information from http://bulbapedia.bulbagarden.net/wiki/Main_Page
// This includes the functions:
//// getPokemonMoveType(pokemonMoveName);
//// getPokemonMoveCategory(pokemonMoveName);
//// getPokemonMovePP(pokemonMoveName);
//// getPokemonMovePower(pokemonMoveName);
//// getPokemonMoveAccuracy(pokemonMoveName);
//// getPokemonMoveEffect(pokemonMoveName);
//// createPokemonMove(pokemonMoveName);
//// calculateDamage(attackingPokemon, move, defendingPokemon);
//// getMove(pokemon);
//// useMove(pokemon);

/*var pokemonMoveName = "";
var pokemonMoveType = "";
var pokemonMoveCategory = "";
var pokemonMovePP = 0;
var pokemonMovePower = 0;
var pokemonMoveAccuracy = 100;
var pokemonMoveEffect= "";*/

function getPokemonMoveType (pokemonMoveName) {
	var pokemonMoveType;
	// Find specific move in pokemonMoves with pokemonMoveName
	for (i=0; i<pokemonMoves.length; i++) {
		if (pokemonMoves[i][0] == pokemonMoveName) {
			pokemonMoveType = pokemonMoves[i][1];
		}
	}
	return pokemonMoveType;
};

function getPokemonMoveCategory (pokemonMoveName) {
	var pokemonMoveCategory;
	// Find specific move in pokemonMoves with pokemonMoveName
	for (i=0; i<pokemonMoves.length; i++) {
		if (pokemonMoves[i][0] == pokemonMoveName) {
			pokemonMoveCategory = pokemonMoves[i][2];
		}
	}
	return pokemonMoveCategory;
};

function getPokemonMovePP (pokemonMoveName) {
	var pokemonMovePP;
	// Find specific move in pokemonMoves with pokemonMoveName
	for (i=0; i<pokemonMoves.length; i++) {
		if (pokemonMoves[i][0] == pokemonMoveName) {
			pokemonMovePP = pokemonMoves[i][3];
		}
	}
	return pokemonMovePP;
};

function getPokemonMovePower (pokemonMoveName) {
	var pokemonMovePower;
	// Find specific move in pokemonMoves with pokemonMoveName
	for (i=0; i<pokemonMoves.length; i++) {
		if (pokemonMoves[i][0] == pokemonMoveName) {
			pokemonMovePower = pokemonMoves[i][4];
		}
	}
	return pokemonMovePower;
};

function getPokemonMoveAccuracy (pokemonMoveName) {
	var pokemonMoveAccuracy;
	// Find specific move in pokemonMoves with pokemonMoveName
	for (i=0; i<pokemonMoves.length; i++) {
		if (pokemonMoves[i][0] == pokemonMoveName) {
			pokemonMoveAccuracy = pokemonMoves[i][5];
		}
	}
	return pokemonMoveAccuracy;
};

function getPokemonMoveEffect (pokemonMoveName) {
	var pokemonMoveEffect;
	// Find specific move in pokemonMoves with pokemonMoveName
	for (i=0; i<pokemonMoves.length; i++) {
		if (pokemonMoves[i][0] == pokemonMoveName) {
			pokemonMoveEffect = pokemonMoves[i][6];
		}
	}
	return pokemonMoveEffect;
};

/* //Other old function
function createPokemonMove(pokemonMove) { 
	// find specific move in pokemonMoves with pokemonMoveName
	for (i=0; i<pokemonMoves.length; i++) {
		if (pokemonMoves[i][0] == pokemonMove) {
			// create the move
			this.Name = pokemonMoves[i][0];
			this.Type = pokemonMoves[i][1];
			this.category = pokemonMoves[i][2];
			this.pp = pokemonMoves[i][3];
			this.power = pokemonMoves[i][4];
			this.accuracy = pokemonMoves[i][5];
			this.effect = pokemonMoves[i][6];
			}
		}
	}
};*/

/*// Old createPokemonMove(...) function
function createPokemonMove(pokemonMove) {
	// find specific move in pokemonMoves with pokemonMoveName
	var move;
	for (i=0; i<pokemonMoves.length; i++) {
		if (pokemonMoves[i][0] == pokemonMove[0]) {

			// create the move
			move = {
				Name: pokemonMoves[i][0],
				type: pokemonMoves[i][1],
				category: pokemonMoves[i][2],
				pp: pokemonMoves[i][3],
				power: pokemonMoves[i][4],
				accuracy: pokemonMoves[i][5],
				effect:  pokemonMoves[i][6]
			};
		};
	};

	// return the move
	return move;
};*/

function calculateDamage(attackingPokemon, move, defendingPokemon) { //http://www.serebii.net/games/damage.shtml //when power of move > 0
/* Seems long and confusing? Compared to the other formula's, this one is easy as pie. Let me explain all the variables first. 
Damage is, well, damage, the output number. 
Level is your pokemon's current level. 
AttackStat is your pokemon's Attack/Special Attack stat, whichever one is being used at the moment. 
DefenseStat is your opponents Defense/SpecialDefense stat, depending on the attack your pokemon is using. 
AttackPower is the power of the specific move you're using. For example, if you were to have been using Thunderbolt, you would have a 95 for this variable seeing as in the status screen, there's a 95 clearly marked in the move description when you select it. 
STAB is the same type attack bonus. If you're using a move that coordinates with your own type, you get a 1.5 bonus here. Otherwise, this variable is equal to 1. 
Weakness/Resistance depends on if your move was super-effective or otherwise. This variable could be 0.25, 0.5, 1, 2, or 4 depending on how effective your attack was. 
RandomNumber is simply a Random Number between 85 and 100. */
	// Set variables
	var STAB = 1; // needs to be adjusted for move.type and attackingPokemon.type, if it's the same, this = 1.5;
	var weaknessResistance = 1; // needs to be adjusted for move.type against defendingPokemon.type1 and defendingPokemon.type2 [array?]
	var randNumb = Math.floor(Math.random() * (100 - 85 + 1)) + 85; // http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
	var damage = 0;

	if (move.category == "Physical") {
		move.damage = ((((2 * attackingPokemon.level / 5 + 2) * attackingPokemon.attack * move.power / defendingPokemon.defense) / 50) + 2) * STAB * weaknessResistance * randNumb / 100;
		move.effect = "";
	} else if (move.category == "Special") {
		move.damage = ((((2 * attackingPokemon.level / 5 + 2) * attackingPokemon.spattack * move.power / defendingPokemon.spdefense) / 50) + 2) * STAB * weaknessResistance * randNumb / 100;
		move.effect = "";
	} else if (move.category == "Status") {
		move.damage = 0;
		move.effect = ""; //add move.effect
	};
	
	return damage; //move with move.damage and move.effect
};

/*// Function to get the move of a pokemon
function getMove(pokemon) {
	// Set variables
	var moveName = “”; //or make it an object?
	var randNumb1To4;
	var move;

	// Get the name of the move
	while (moveName == “”) {
		randNumb1To4 = 4 * Math.random();
		if (randNumb1To4 <= 1) {
			moveName = pokemon.move1;
		} else if (randNumb1To4 <= 2) {
			moveName = pokemon.move2;
		} else if (randNumb1To4 <= 3) {
			moveName = pokemon.move3;
		} else if (randNumb1To4 <= 4) {
			moveName = pokemon.move4;
		}
	};

	// Get the move
	for (i=0; i<moveStats.length; i++) {
		if (moveStats[i][0] == moveName) {
			move = {
				// Old --> move = moveStats[i];
				this.Name = moveStats[i][0];
				this.Type = moveStats[i][1];
				this.category = moveStats[i][2];
				this.pp = moveStats[i][3];
				this.power = moveStats[i][4];
				this.accuracy = moveStats[i][5];
				this.effect = moveStats[i][6];
			}
		}
	};

	// Return the move
	return move;
};*/

/*// Function that lets a pokemon use it’s move
function useMove(attackingPokemon, move, defendingPokemon) {
	// Set variables
	//var damage = 0;
	move.recoilDamage = 0;

	// Get the category of the attack (status/ physical/ special?)
	if (move[2] == “Status”) { // move.category if move is made an object

	} else if (move[2] == “Physical”) { // move.category if move is made an object
		calculateDamage(attackingPokemon, move, defendingPokemon);
		move.damage = damage;
		// get weakness from firstPokemon.weakness = [“FIRE”, “GRASS”] // array
		// create move.effect = “”; when move is created
		move.effect = “”; // “super effective”, “not very effective”
	} else if (move[2] == “Special”) { // move.category if move is made an object
		calculateDamage(attackingPokemon, move, defendingPokemon);
		move.damage = damage;
		// get weakness from firstPokemon.weakness = [“FIRE”, “GRASS”] // array
		// create move.effect = “”; when move is created
		move.effect = “”; // “super effective”, “not very effective”
	};

	// Check whether pokemon faints
	if (move.damage >= defendingPokemon.hp) {
		defendingPokemon.hp = 0;
	}
	// Also check whether attacking pokemon faints (for example due to recoil damage)
	if (move.recoilDamage >= attackingPokemon.hp) {
		attackingPokemon.hp = 0;
	};

	// Return the move
	return move;
};*/