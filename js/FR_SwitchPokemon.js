/*
 *FR_SwitchPokemon.js
 * Javascript file concerned with the switching out of pokemon during battle, outside of battle and with the pokemon in the pc
 * created on 2015-08-12
 * by GeOdin
 *
 * This file contains the following functions:
 * checkDoubleTypes(player);
 * checkMissingTypes(player);
 */

////////////////////////////
// Check for double types //
////////////////////////////

// Function to check whether the activePokemon of the player have different Pokemon with the same type
function checkDoubleTypes(player){
	var doubleTypes = [];
	for (i=0; i<6; i++) {
		var pokemon1Call = "activePokemon" + (i+1);
		// check current pokemon types
		if (player[pokemon1Call] != "") {
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
	};
/*	for (i=0; i<6; i++) {
		var pokemonCall = "activePokemon" + (i+1);
		for (j=0; j<doubleTypes.length; j++) {
			if (player[pokemonCall].type1 == doubleTypes[j]) {
				// mark the pokemon as one with doubleTypes
			} else if (player[pokemonCall].type2 == doubleTypes[j]) {
				// mark the pokemon as one with doubleTypes
			};
		};
	};*/
	// make it random which marked pokemon with doubleTypes is switched out
	//// starter excluded
	// check pokemon that have types from doubleTypes
	// make sure that starterPokemon is not switched
	// count amount of times the types are double? -> so many pokemon can be switched
	return doubleTypes;
};

/////////////////////////
// Check missing types //
/////////////////////////

function checkMissingTypes(player) {
	var missingTypes = ["BUG", "DARK", "DRAGON", "ELECTRIC", "FIGHTING", "FIRE", "FLYING", "GRASS", "GHOST", "GROUND", "ICE", "NORMAL", "POISON", "PSYCHIC", "ROCK", "STEEL", "WATER"];
	// if 1 of pokemontypes is in missingTypes -> delete it
	for (i=0; i<6; i++) {
		var pokemonCall = "activePokemon" + (i+1);
		if (player[pokemonCall] != "") {
			for (j=0; j<missingTypes.length; j++) {
				if (player[pokemonCall].type1 == missingTypes[j]) {
					// Remove type from missingTypes
					delete missingTypes[j];
				};
				if (player[pokemonCall].type2 == missingTypes[j]) {
					// Remove type from missingTypes
					delete missingTypes[j];
				};
			};
		};
	};
	// Delete undefined elements of array
	for (i=0; i<missingTypes.length; i++){
		if (typeof missingTypes[i] == "undefined") {
	    	missingTypes.splice(i,1);
	    };
	// Return the missingTypes
	return missingTypes;
};

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

/////////////////////////////////
// Switch Pokemon After Battle //
/////////////////////////////////

/*
 * If player caught another Pokemon in battle which is set as an active Pokemon? (to level weaker Pokemon)
 *
 * function switchPokemonInsideBattle(player);
 *
 */

////////////////////////
 // Switch Pokemon PC //
////////////////////////

/*
 * If player has better pokemon in pc
 * Higher level of same type?
 */

// Function to optimalize switching Pokemon when there's a PC
function switchPokemonPC(player){
	// Set variables
	num = 0;
	// Check which types are missing
	var missingTypesActive = checkMissingTypes(player); // returns array with missing types
	// Missing types that are represented in the pc
	var missingTypesPC = {};

	// Check which types are double
	var doubleTypes = checkDoubleTypes(player);

	// Check whether there are pokemon in the PC that comply with one of the missing types
	var pcPokemonCall = "pc" + (num + 1);
	while (player.hasOwnProperty(pcPokemonCall) == true) {
		for (i=0; i<missingTypes.length; i++) {
			if (player[pcPokemonCall].type1 == missingTypesActive[i]) {
				// Check whether type already exists in object missingTypesPC
				if (missingTypesPC.hasOwnProperty(missingTypesActive[i])) {
					// Add pokemon to the missingTypes property
				} else {
					// create missingTypes property
						// missingTypesPC[missingTypesActive[i]] = {};
				};
			};
			if (player[pcPokemonCall].type2 == missingTypesActive[i]) {
				//
			};
		};
	};
	// change the activePokemon to pc
	// change the pc to activePokemon
		// make it random which pokemon is choosen from the pc?
			// include priority list?
};

///////////////////
// Priority List //
///////////////////

/* 
 * 1 Favorite pokemon ( 1 of 151)
 * 2 Starter (if favorite != starterPokemon)
 * Further priority per type?
 * Make 6 groups of types (e.g., combine ground and rock) and try to arrange them within activePokemon1..6
 */

/* FIRE Pokemon:
 * CHARMANDER (starter)
 * CHARMELEON (starter)
 * CHARIZARD (starter)
 */

/* GRASS Pokemon:
 * BULBASAUR (starter)
 * IVYSAUR (starter)
 * VENUSAUR (starter)
 */

/* WATER Pokemon:
 * SQUIRTLE (starter)
 * WARTORTLE (starter)
 * BLASTOISE (starter)
 */