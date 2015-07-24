//Pokemon Battle

function pokemonbattle() {

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
};


function firstPokemonBattleStart(pokemonPlayer, pokemonOpponent) {
	var counterTwo = 0;
	window.setInterval(firstPokemonBattle, 1000); //set to 3000 / 5000 for 3/5 seconds for final version
	function firstPokemonBattle(pokemonPlayer, pokemonOpponent) {
/* 		// Reset variables
		if (counterTwo == 0) {
			//reset variables if needed
		}; */
		
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
};