/* FR_firstPokemonBattle.js
 * This JavaScript file contains the code for the first Pokemon Battle against the rival, since it differs from the rest
 * created by Geodin
 * on 30-07-2015
 * 
 * This file contains the function:
 * firstPokemonBattle(player, rival)
 */

function firstPokemonBattle(player, rival) {
	//var counterPokemonBattleOne = 0;
/*	var player = player;
	var rival = rival;*/
	window.setInterval(actualFirstPokemonBattle(player, rival), 3000);

	function actualFirstPokemonBattle (player, rival) {
		// Set the screenshot to first battle		
		document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.

		while (rival.activePokemon1.currentHP > 0){
			if (rival.activePokemon1.currentHP > 0) {
				// Move 1
				// Either let the rival do his move...
				if (player.activePokemon1.speed >= rival.activePokemon1.speed) {				
					if (rival.activePokemon1.Name == "BULBASAUR") {
						player.activePokemon1.currentHP -= 4;
					} else if (rival.activePokemon1.Name == "CHARMANDER") {
						player.activePokemon1.currentHP -= 4;
					} else if (rival.activePokemon1.Name == "SQUIRTLE") {
						player.activePokemon1.currentHP -= 5;
					};
					document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
					document.getElementById("pokemonRed").innerHTML = rival.activePokemon1.Name + " used " + rival.activePokemon1.move1.Name + ".";
					// ... or let the player do his move
				} else if (player.activePokemon1.speed < rival.activePokemon1.speed) {
					if (player.activePokemon1.currentHP > 5) {
						// picture of attacking pokemon?
						if (player.activePokemon1.Name == "BULBASAUR") {
							rival.activePokemon1.currentHP -= 5;
						} else if (player.activePokemon1.Name == "CHARMANDER") {
							rival.activePokemon1.currentHP -= 3;
						} else if (player.activePokemon1.Name == "SQUIRTLE") {
							rival.activePokemon1.currentHP -=5;
						};
						document.getElementById("pokemonRed").innerHTML = player.activePokemon1.Name + " used " + player.activePokemon1.move1.Name + ".";
						// diminish pp for this move?
						if (rival.activePokemon1.currentHP <= 0) {
							if (rival.activePokemon1.currentHP < 0) {
								rival.activePokemon1.currentHP = 0;
							};
							return;
						};
						// diminish pp for this move?
					} else if (player.activePokemon1.currentHP > 0) {
						document.getElementById("pokemonRed").innerHTML = player.Name + " used POTION. "; //delete 1 potion from inventory
						player.activePokemon1.currentHP += 20;
						if (player.activePokemon1.currentHP > player.activePokemon1.maxHP) {
							player.activePokemon1.currentHP = player.activePokemon1.maxHP;
						};
						document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
					};
				} else {
					return;
				};
			};
			//counterPokemonBattleOne++;
			if (rival.activePokemon1.currentHP > 0) {
				// Move 2
				// Either let the player do his move...
				if (player.activePokemon1.speed >= rival.activePokemon1.speed) {
					if (player.activePokemon1.currentHP > 5) {
						// picture of attacking pokemon?
						if (player.activePokemon1.Name == "BULBASAUR") {
							rival.activePokemon1.currentHP -= 5;
						} else if (player.activePokemon1.Name == "CHARMANDER") {
							rival.activePokemon1.currentHP -= 3;
						} else if (player.activePokemon1.Name == "SQUIRTLE") {
							rival.activePokemon1.currentHP -=5;
						};
						document.getElementById("pokemonRed").innerHTML = player.activePokemon1.Name + " used " + player.activePokemon1.move1.Name + ".";
						// diminish pp for this move?
						if (rival.activePokemon1.currentHP <= 0) {
							if (rival.activePokemon1.currentHP < 0) {
								rival.activePokemon1.currentHP = 0;
							};
							return;
						};
					} else if (player.activePokemon1.currentHP > 0) {
						document.getElementById("pokemonRed").innerHTML = player.Name + "used POTION. "; //delete 1 potion from inventory
						player.activePokemon1.currentHP += 20;
						if (player.activePokemon1.currentHP > player.activePokemon1.maxHP) {
							player.activePokemon1.currentHP = player.activePokemon1.maxHP;
						};
						document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
					};
				// ... or let the rival do his move.
				} else if (player.activePokemon1.speed < rival.activePokemon1.speed) {
					document.getElementById("pokemonRed").innerHTML = rival.activePokemon1.Name + " used " + rival.activePokemon1.move1.Name + ".";
					if (rival.activePokemon1.Name == "BULBASAUR") {
						player.activePokemon1.currentHP -= 4;
					} else if (rival.activePokemon1.Name == "CHARMANDER") {
						player.activePokemon1.currentHP -= 4;
					} else if (rival.activePokemon1.Name == "SQUIRTLE") {
						player.activePokemon1.currentHP -= 5;
					};
					document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
					document.getElementById("pokemonRed").innerHTML = rival.activePokemon1.Name + " used " + rival.activePokemon1.move1.Name + ".";
				};
			/*			//pause current setInterval --> http://stackoverflow.com/questions/8432127/stop-setinterval-function-for-an-amount-of-time
				pokemonBattleStartFirst(player, rival); //this is not functional; check whether all objects are proper objects
				//continue with current setInterval*/
			} else {
				return;
			};
			//counterPokemonBattleOne++;
		};
	};
};