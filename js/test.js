// test.js
// to try out functions and variables
// currently working on:
//// function: testCreatePokemon(pokemonName, pokemonLevel);

// Creates a pokemon object, including moves as objects
function testCreatePokemon(pokemonName, pokemonLevel){

	for (i=0; i<pokemonStats.length; i++) {
		if (pokemonStats[i][1] == pokemonName) {
			if (pokemonStats[i][2] == pokemonLevel) {
				// Create the starterPokemon Object
				pokemonObject = new createPokemon(// bulbasaur / squirtle / charmander instead of pokemonOne
					pokemonStats[i][0], 
					pokemonStats[i][1],
					pokemonStats[i][2],
					pokemonStats[i][3],
					pokemonStats[i][4],
					pokemonStats[i][5],
					pokemonStats[i][6],
					pokemonStats[i][7],
					pokemonStats[i][8],
					pokemonStats[i][9],
					pokemonStats[i][10],
					pokemonStats[i][11],
					pokemonStats[i][12],
					pokemonStats[i][13],
					pokemonStats[i][14],
					pokemonStats[i][15],
					pokemonStats[i][16],
					pokemonStats[i][17]
				);
			}
		}
	};
	createPokemonMoves(pokemonObject);
	return pokemonObject;
};