/* FR_Cheat.js
 * This JavaScript file contains special cheat features
 * Made on 2015-08-26
 * by GeOdin
 */

/* This JavaScript file contains the following variables/ functions:
 * Functions:
 * * checkCheat(player, rival);
 */

// This function checks whether the cheat code is used and sets all pokemon to caught and level 100 if it's true
function checkCheat(player, rival) {
/*	if (player.Name == "cheat") {
		if (rival.Name == "code") {
			for (i=0; i<151; i++) {
				// getPokemonName
				var pokemonNumber = i + 1;
				var pokemonLevel = 1; // change to 100 // will this work if level 1 is set for all pokemon in var pokemonStats (FR_PKMN.js)?
				if (pokemonNumber < 10) {
					pokemonNumber = "00" + pokemonNumber;
				} else if (pokemonNumber < 100) {
					pokemonNumber = "0" + pokemonNumber;
				};
				pokemonNumber = String(pokemonNumber);
				var pokemonName = getPokemonName(pokemonNumber);
				var pokemon = new createPokemonWithNameLevel(pokemonName, pokemonLevel);
				// set pokemon as caught
				if (player.pokemonCaught[pokemon.Name] == 0) {
					player.pokemonCaught[pokemon.Name] = 1;
				};
				// Add pokemon to the pokedex counter
				setPokemonCaught(player);
			};
			// add specific pokemon as activePokemon
			for (i=0; 0<5; i++) {
				var activePokemonNumber = i + 1;
				var activePokemonCall = "activePokemon" + activePokemonNumber;
				if (activePokemonNumber == 1) {
					// Create Pokemon
 						// C: Cloyster (/ Cubone/ Chansey/ Charizard)

					// Set Pokemon as activePokemon
					player[activePokemonCall] = "";
				} else if (activePokemonNumber == 2) {
					// Create Pokemon
						// H: Hitmonlee (/ Horsea/ Haunter/ Hitmonchan/ Hypno)

					// Set Pokemon as activePokemon
					player[activePokemonCall] = "";
				} else if (activePokemonNumber == 3) {
					// Create Pokemon
						// E: Electabuzz (/ Exeggutor/ Electrode)

					// Set Pokemon as activePokemon
					player[activePokemonCall] = "";
				} else if (activePokemonNumber == 4) {
					// Create Pokemon
						// A: Arcanine (/ Articuno)

					// Set Pokemon as activePokemon
					player[activePokemonCall] = "";
				} else if (activePokemonNumber == 5) {
					// Create Pokemon
						// T: Tangela (/ Tauros)

					// Set Pokemon as activePokemon
					player[activePokemonCall] = "";
				};
				setActivePokemonText(player);
			};					
		};
	};*/
};