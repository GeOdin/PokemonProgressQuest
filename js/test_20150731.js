// test_20150731
// currently working on:
//// function getWeakness(move, defendingPokemon);
//// function getSTAB(attackingPokemon, move); // Could also be implemented in the calculateDamage(...) function

// Get the totalWeakness for a move.Type of a pokemon -- add var weaknessResistance and functin getWeakness(...) and getSTAB(...) to FR_PokemonMoves if it works?
//// calculateDamage(...) {
////	var weakness = 1;
//// 	var STAB = 1;
//// 	weakness = getWeakness (move, defendingPokemon);
//// 	STAB = getSTAB(attackingPokemon, move);
////};
// Background information about weaknesses and resistances that pokemon with certain types have for moves with certain types;
// The type of the defending Pokemon is given in the columns - weaknessResistance[0][j];
// The type of the used move is given in the row weaknessResistance[i][0];

// Get the STAB of a pokemon for a move -- STAB = Special Type Ability Bonus?
function getSTAB(attackingPokemon, move) {
	var STAB = 1;
	if (move.Type == attackingPokemon.type1) {
		STAB = 1.5;
	} else if (move.Type == attackingPokemon.type2) {
		STAB = 1.5;
	};
	return STAB;
};

// Array with weaknesses and resistances. The type of the defending pokemon are the columns, the type of the move of the attacking pokemon are the rows.
// Pokemon Type Chart from http://pokemondb.net/type
var weaknessResistance = [ // update this
	["WEAKNESS", "FIRE", "GRASS", "NORMAL", "WATER"],
	["FIRE", 0,5, 2, 1, 0.5],
	["GRASS", 0.5, 0.5, 1, 2],
	["NORMAL", 1, 1, 1, 1],
	["WATER", 2, 0.5, 1, 0.5]
];
// Get the weakness of the pokemon for a move.Type
function getWeakness(move, defendingPokemon) {
	var weakness1 = 1;
	var weakness2 = 1;
	var totalWeakness;
	for (i=0; i<weaknessResistance.length; i++) {
		for (j=0; j<weaknessResistance.length; j++) {
			if (weaknessResistance[i][0] == move.Type) {
				// Get the first weakness
				if (weaknessResistance[0][j] == defendingPokemon.type1) {
					weakness1 = weaknessResistance[i][j];
				};
				// Get the second weakness
				if (weaknessResistance[0][j] == defendingPokemon.type2) {
					weakness2 = weaknessResistance[i][j];
				};
			};
		};
	};
	// Calculate total weakness
	totalWeakness = weakness1 * weakness2 // is this correct according to the Pokemon Games?
	return totalWeakness;
};

function calculateDamageTest(attackingPokemon, move, defendingPokemon) { //http://www.serebii.net/games/damage.shtml //when power of move > 0
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
	var weakness = 1; // needs to be adjusted for move.type against defendingPokemon.type1 and defendingPokemon.type2 [array?]
	var randNumb = Math.floor(Math.random() * (100 - 85 + 1)) + 85; // http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
	var damage = 0;

	STAB = getSTAB(attackingPokemon, move);
	weakness = getWeakness(move, defendingPokemon);

	if (move.category == "Physical") {
		damage = Math.round(((((2 * attackingPokemon.level / 5 + 2) * attackingPokemon.attack * move.power / defendingPokemon.defense) / 50) + 2) * STAB * weakness * randNumb / 100);
		// Also add possible effect
		// effect = "";
	} else if (move.category == "Special") {
		damage = Math.round(((((2 * attackingPokemon.level / 5 + 2) * attackingPokemon.spattack * move.power / defendingPokemon.spdefense) / 50) + 2) * STAB * weakness * randNumb / 100);
		// Also add possible effect
		// effect = "";
	} else if (move.category == "Status") {
		damage = 0;
		// Also add possible effect
		// effect = "";
	};
	
	return damage; //move with move.damage and move.effect
};