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
var weaknessResistance = [ // update this
	["WEAKNESS", "FIRE", "GRASS", "WATER"],
	["FIRE", 1, 2, 0.5],
	["GRASS", 0.5, 1, 2],
	["WATER", 2, 0.5, 1]
];
// Get the weakness of the pokemon for a move.Type
function getWeakness(move, defendingPokemon) {
	var weakness1 = 1;
	var weakness2 = 1;
	for (i=0; i<weaknessResistance.length; i++) {
		for (j=0; j<weaknessResistance.length; i++) {
			if (weaknessResistance[i][0] == move.Type) {
				// Get the first weakness
				if (weaknessResistance[0][j] == defendingPokemon.Type1) {
					weakness1 = weaknessResistance[i][j];
				};
				// Get the second weakness
				if (weaknessResistance[0][j] == defendingPokemon.Type2) {
					weakness2 = weaknessResistance[i][j];
				};
			};
		};
	};
	// Calculate total weakness
	totalWeakness = weakness1 * weakness2 // is this correct according to the Pokemon Games?
	return totalWeakness;
};

// Get the STAB of a pokemon for a move -- STAB = Special Type Ability Bonus?
function getSTAB(attackingPokemon, move) {
	var STAB = 1;
	if (move.Type == attackingPokemon.Type1) {
		STAB = 1.5;
	} else if (move.Type == attackingPokemon.Type2) {
		STAB = 1.5;
	};
	return STAB;
};