/*
 *FR_SwitchPokemon.js
 * Javascript file concerned with the switching out of pokemon during battle, outside of battle and with the pokemon in the pc
 * created on 2015-08-12
 * by GeOdin
 *
 * This file contains the following functions:
 * checkDoubleTypes(player);
 */

////////////////////////////
// Check for double types //
////////////////////////////

// Function to check whether the activePokemon of the player have different Pokemon with the same type
// filter "" as type?
function checkDoubleTypes(player){

	var doubleTypes = [""];
	for (i=0; i<6; i++) {
		var pokemon1Call = "activePokemon" + (i+1);
		// check current pokemon types
		var pokemon1Type1 = player[pokemon1Call].type1;
		var pokemon1Type2 = player[pokemon1Call].type2;
		// compare to other Pokemon types
		for (j=0; j<6; j++) {
			if (i != j) {
				var pokemon2Call;
				var pokemon2Type1 = player[pokemon2Call].type1;
				var pokemon2Type2 = player[pokemon2Call].type1;
				if (pokemon1Type1 == pokemon2Type1) {
					if (pokemon1Type1 != "") {
						doubleTypes.push(pokemon1Type1);
					};
				} else if (pokemon1Type1 == pokemon2Type2) {
					if (pokemon1Type1 != "") {
						doubleTypes.push(pokemon1Type1);
					};
				};
				if (pokemon1Type2 == pokemon2Type1) {
					if (pokemon1Type1 != "") {
						doubleTypes.push(pokemon1Type1);
					};
				} else if (pokemon1Type2 == pokemon2Type2) {
					if (pokemon1Type1 != "") {
						doubleTypes.push(pokemon1Type1);
					};
				};
			};
		};
	};
	for (i=0; i<6; i++) {
		var pokemonCall = "activePokemon" + (i+1);
		for (j=0; j<doubleTypes.length; j++) {
			if (player[pokemonCall].type1 == doubleTypes[j]) {
				// mark the pokemon as one with doubleTypes
			} else if (player[pokemonCall].type2 == doubleTypes[j]) {
				// mark the pokemon as one with doubleTypes
			};
		};
	};
	// make it random which marked pokemon with doubleTypes is switched out
	//// starter excluded
	// remove "" from array?
	// check pokemon that have types from doubleTypes
	// make sure that starterPokemon is not switched
	// count amount of times the types are double? -> so many pokemon can be switched
	// return the doubleTypes?
};

/////////////////////////
// Check missing types //
/////////////////////////



//////////////////////////////////////
// Switch Pokemon Outside of Battle //
//////////////////////////////////////

/*
 * If player caught another Pokemon in battle which is set as an active Pokemon? (to level weaker Pokemon)
 *
 * function switchPokemonInsideBattle(player);
 *
 */

/////////////////////////////////////
// Switch Pokemon Inside of Battle //
/////////////////////////////////////

/*
 * switch weak Pokemon to best suited (type dependent)
 * otherwise, switch Pokemon to highest level?
 *
 * function switchPokemonOutsideBattle(player);
 *
 */

////////////////////////
 // Switch Pokemon PC //
////////////////////////

/*
 * If player has better pokemon in pc
 * Missing type?
 * Higher level of same type?
 *
 * function switchPokemonPC(player);
 */

///////////////////
// Priority List //
///////////////////

/* 
 * 1 Favorite pokemon ( 1 of 151)
 * 2 Starter (if favorite != starterPokemon)
 * Further priority per type?
 * Make 6 groups of types (e.g., combine ground and rock) and try to arrange them within activePokemon1..6
 */

////////////////////////
// Check Missing Type //
////////////////////////

/*
var typesIncluded = [""];
for (i=0; i<6; i++) {
	var pokemonCall = "activePokemon" + (i+1);
	for (j=0; j=typesIncluded.length; j++) {
		// if type does not exist yet in array
		// typesIncluded.push(player[pokemonCall].type1);
	};
};

 */