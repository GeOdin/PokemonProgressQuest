/* FR_firstPokemonBattle.js
 * This JavaScript file contains the code for the first Pokemon Battle against the rival, since it differs from the rest
 * created by Geodin
 * on 30-07-2015
 * 
 * This file contains the function:
 * firstPokemonBattle(player, rival)
 */

function firstPokemonBattle(player, rival) {
	window.setInterval(actualFirstPokemonBattle(player, rival), 1); //3000 for 3

	function actualFirstPokemonBattle (player, rival) {
		var damage;
		// Set the screenshot to first battle		
		document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		// Put the different (attacking) Pokemon on top (z-index >=1) of the battle screenshot of #imageStory?

		while (rival.activePokemon1.currentHP > 0){
			if (rival.activePokemon1.currentHP > 0) {
				// Move 1
				// Either let the rival do his move...
				if (player.activePokemon1.speed >= rival.activePokemon1.speed) {
					damage = calculateDamage(rival.activePokemon1, rival.activePokemon1.move1, player.activePokemon1);
					player.activePokemon1.currentHP -= damage;
					document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
					document.getElementById("pokemonRed").innerHTML = rival.activePokemon1.Name + " used " + rival.activePokemon1.move1.Name + ".";
					if (player.activePokemon1.currentHP <=0) {
						if (player.activePokemon1.currentHP < 0) {
							player.activePokemon1.currentHP = 0;
						};
					document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
					document.getElementById("pokemonRed").innerHTML = player.activePokemon1.Name + " fainted.";
					document.getElementById("pokemonRed").innerHTML = rival.Name + ": " + rival.activePokemon1.Name + ", come back!";
					document.getElementById("pokemonRed").innerHTML = rival.Name + ": Yeah! <br/> Am I great or what? ";
					document.getElementById("pokemonRed").innerHTML = "OAK: Hm... <br/> How dissappointing... ";
					document.getElementById("pokemonRed").innerHTML = "If you win, you earn prize money, <br/> and your POK&eacute;MON grow. ";
					document.getElementById("pokemonRed").innerHTML = "But if you lose, " + player.Name + ", you end <br/> up paying prize money... ";
					document.getElementById("pokemonRed").innerHTML = "However, since you had no warning <br/> this time, I'll pay for you. ";
					document.getElementById("pokemonRed").innerHTML = "But things won't be this way once <br/> you step outside these doors. ";
					document.getElementById("pokemonRed").innerHTML = "That's why you must strengthen your <br/> POK&eacute;MON by battling wild POK&eacute;MON. ";
					return;
					};
					// ... or let the player do his move
				} else if (player.activePokemon1.speed < rival.activePokemon1.speed) {
					if (player.activePokemon1.currentHP > 5) {
						// picture of attacking pokemon?
						damage = calculateDamage(player.activePokemon1, player.activePokemon1.move1, rival.activePokemon1);
						rival.activePokemon1.currentHP -= damage;
						// diminish pp for this move?
						document.getElementById("pokemonRed").innerHTML = player.activePokemon1.Name + " used " + player.activePokemon1.move1.Name + ".";
						if (rival.activePokemon1.currentHP <= 0) {
							if (rival.activePokemon1.currentHP < 0) {
								rival.activePokemon1.currentHP = 0;
							};
							// Add exp?
							// Add story?
							// Get money from rival
							player.money += 80;
							document.getElementById("playerMoneyAmount").innerHTML = player.money;
							return;
						};
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
						damage = calculateDamage(player.activePokemon1, player.activePokemon1.move1, rival.activePokemon1);
						rival.activePokemon1.currentHP -= damage;
						// diminish pp for this move?
						document.getElementById("pokemonRed").innerHTML = player.activePokemon1.Name + " used " + player.activePokemon1.move1.Name + ".";
						if (rival.activePokemon1.currentHP <= 0) {
							if (rival.activePokemon1.currentHP < 0) {
								rival.activePokemon1.currentHP = 0;
							};
							// Add exp?
							// Add story?
							// Get money from rival
							player.money += 80;
							document.getElementById("playerMoneyAmount").innerHTML = player.money;
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
					damage = calculateDamage(rival.activePokemon1, rival.activePokemon1.move1, player.activePokemon1);
					player.activePokemon1.currentHP -= damage;
					document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
					document.getElementById("pokemonRed").innerHTML = rival.activePokemon1.Name + " used " + rival.activePokemon1.move1.Name + ".";
					if (player.activePokemon1.currentHP <=0) {
						if (player.activePokemon1.currentHP < 0) {
							player.activePokemon1.currentHP = 0;
						};
					document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
					document.getElementById("pokemonRed").innerHTML = player.activePokemon1.Name + " fainted.";
					document.getElementById("pokemonRed").innerHTML = rival.Name + ": " + rival.activePokemon1.Name + ", come back!";
					document.getElementById("pokemonRed").innerHTML = rival.Name + ": Yeah! <br/> Am I great or what? ";
					document.getElementById("pokemonRed").innerHTML = "OAK: Hm... <br/> How dissappointing... ";
					document.getElementById("pokemonRed").innerHTML = "If you win, you earn prize money, <br/> and your POK&eacute;MON grow. ";
					document.getElementById("pokemonRed").innerHTML = "But if you lose, " + player.Name + ", you end <br/> up paying prize money... ";
					document.getElementById("pokemonRed").innerHTML = "However, since you had no warning <br/> this time, I'll pay for you. ";
					document.getElementById("pokemonRed").innerHTML = "But things won't be this way once <br/> you step outside these doors. ";
					document.getElementById("pokemonRed").innerHTML = "That's why you must strengthen your <br/> POK&eacute;MON by battling wild POK&eacute;MON. ";
					return;
					};
				};
			/*			//pause current setInterval --> http://stackoverflow.com/questions/8432127/stop-setinterval-function-for-an-amount-of-time
				pokemonBattleStartFirst(player, rival); //this is not functional; check whether all objects are proper objects
				//continue with current setInterval*/
			} else {
				return;
			};
		};
	};
};

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
	var weakness = 1; // needs to be adjusted for move.type against defendingPokemon.type1 and defendingPokemon.type2 [array?]
	var randNumb = Math.floor(Math.random() * (100 - 85 + 1)) + 85; // http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
	var damage = 0;

	STAB = getSTAB(attackingPokemon, move);
	weakness = getWeakness(move, defendingPokemon);

	if (move.category == "Physical") {
		// include an if-statement with the accuracy of the move, if the move hits -> calculate damage, otherwise -> damage stays 0, nothing happens
		damage = Math.round(((((2 * attackingPokemon.level / 5 + 2) * attackingPokemon.attack * move.power / defendingPokemon.defense) / 50) + 2) * STAB * weakness * randNumb / 100);
		// Also add possible effect
		// effect = "";
	} else if (move.category == "Special") {
		// include an if-statement with the accuracy of the move, if the move hits -> calculate damage, otherwise -> damage stays 0, nothing happens
		damage = Math.round(((((2 * attackingPokemon.level / 5 + 2) * attackingPokemon.spattack * move.power / defendingPokemon.spdefense) / 50) + 2) * STAB * weakness * randNumb / 100);
		// Also add possible effect
		// effect = "";
	} else if (move.category == "Status") {
		// include an if-statement with the accuracy of the move, if the move hits -> calculate damage, otherwise -> damage stays 0, nothing happens
		damage = 0;
		// Also add possible effect
		// add move.effectStat (eg ATTACK for Growl)
		// add pokemon.minAttack (eg player.activePokemon1.minAttack = 40;)
		// add pokemon.currentAttack (eg player.activePokemon1.currentAttack = 46;)
		// add pokemon.maxAttack (eg player.activePokemon1.maxAttack = 52;)
		// effect = "";
	};
	return damage; //move with move.damage and move.effect
};