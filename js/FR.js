/* 
pokemonRed.js
Javascript code for the Pokemon FireRed Progress Quest
Made on 20-07-2015
by GeOdin */

/* This includes the functions:
 * startGame();
 * * change();
 */

/////////////
// General //
/////////////

/* change pokemonRed in pokemonFireRed
 * make Pokemonnames, stats and moves all uppercase?
 * include documentation for all files
 * document.getElementById("imageStory") --> HallofFame.png picture keeps popping up after restarting the game
 * add disclaimer?
 * add credits/ read through at the start?
 * sprites for Pokemon Firered: http://www.spriters-resource.com/game_boy_advance/pokemonfireredleafgreen/sheet/3713/
 * add EV-training
 * also add --- as current HP for lvl 100 Pokemon
 * make a bag html page pop-up (like for the pokedex) for #playerStats that shows the bag and items in the bag (among other stuff?)
 * make location an object of player, like lastHealingLocation is also an object of player
 * make a pokedex object for object player?
 * arrange player.bag in the same way as in pokemon FireRed?
 * * KEY ITEMS POCKET
 * * POK&eacute BALLS POCKET
 * add quest log?
 * add achievements?
 * improve the quaity of some screenshots
 * add cheat code that with player.Name = "cheat" and rival.Name = "code" you start with all pokemon level 99
 * * C: Cubone/ Chansey/ Charizard/ Cloyster
 * * H: Horsea/ Haunter/ Hitmonchan/ Hitmonlee/ Hypno
 * * E: Exeggutor/ Electabuzz/ Electrode
 * * A: Arcanine/ Articuno
 * * T: Tangela/ Tauros
 * * set all pokemonCaught to 1
 * set '} else if (counter == ...) {' set ... to a variavle (counter2 for example), so that for each change, you don't have to rewrite all the else if statements
 */

/////////////
// Battles //
/////////////

/* reset amount of damage from attacks after battle (delete effects of growl, for example)
 * add possibility that moves crit
 * add function to arrange the level up
 * add flee option to/before wildPokemonBattle function when wildPokemon.level >= player.activePokemon1.level -2 // -1 ?
 * add also flee option to/before wildPokemonBattle when the player.activePokemon1.currentHP < ((2/3) * player.activePokemon1.maxHP) // or something like that?
 * add function to check whether pokemon levels up in battle(check exp?)
 * make the use of the potion in FR_FirstPokemonBattle.js a function healPokemonWithItem(healItem) from FR_Items.js (potion object is already created as player.bag.potion);
 * make a function for when all pokemon are fainted --> lastHealingLocation
 * function to determine the best move for the player Pokemon
 function getPlayerPokemonMove (player, opponentPokemon) {
 	var bestMove = {};
	bestMove.Name = "";
	bestMove.damage = 0:
	for (i=0; i<4; i++) {
		var pokemonMoveCall = "move" + (i+1);
		var tempDamage = calculateDamageWildPokemon(player.activePokemon1, player.activePokemon1[pokemonMoveCall], opponentPokemon);
		if (tempDamage >= bestDamage) {
			bestMove.Name = player.activePokemon1[pokemonMoveCall].Name;
			bestMove.damage = tempDamage;
		};
	};
	return bestMove;
 };
 */

////////////////////
// Map/ Locations //
////////////////////

/* show map where you currently are --> town map http://bulbapedia.bulbagarden.net/wiki/File:Viridian_City_FRLG.png (in folder townMap in folder images, currently not yet used)
 * add var lastVisitedHealingLocation to FR.js, so that player can either return there by choice (pokemon low on health) or by teleport (when all pokemon are fainted/currentHP 0)
 * give locationObject an image property to show after battle (instead of only having the battle background with no pokemon after the battle ends)
 */

/////////////
// Pokemon //
/////////////

/* give the pokemon a locatedIn property ("activePokemon1..6" / "PC")
 * give every pokemon that the player gets a unique number? --> pokemonID
 * Heal all Pokemon that go into the PC
 * add location of pokemon to pokedex (activePokemon / pc?)
 * implement a function that Pokemon can learn a new move upon levelling, but don't do it by default
 * refactor function createPokemon (FR_PKMN.js) to have pokemon.moveOne as pokemon.move1..4
 * add all pokemonMoves (FR_PKMN.js)
 * add all pokemon (FR_PKMN.js)
 * add all pokemonStats (FR_PKMN.js)
 */

//////////////////
// Wild Pokemon //
//////////////////

/* chance to encounter a shiny?
 * test wildPokemonBattle --> set wildPokemon as #activePokemon1 in html code
 * use counter also as input for battle functions to properly show them, also get counter back as output or a variable for the difference
 * sometimes player and opponent pokemon are not shown in wildPokemonBattle(...)
 * is the damage still working for wildPokemonBattle(...)?
 * only try to catch pokemon if (currentHP <= ((1/5)*maxHP || catchRate == 255)
 * * catching a KAKUNA/ METAPOD seems to take a lot of pokeballs (due to high catchRate)
 */

/////////////
// Pokedex //
/////////////

/* below comment is resolved */
/*
 * Not properly shown in the Pokedex:
 * * CATERPIE (not all the time, perhaps not for certain levels?)
 * * ZUBAT
 * * NIDORAN_MALE
 */

///////////
// Story //
///////////

/* Story used from Pokemon FireRed
 * movie of start of game: https://www.youtube.com/watch?v=yUS1IcC5CBY
 * in #pokemonRed text, Pokemon can be POK&eacute;MON
 * use male / female screenshots depending on playerGender
 * add PAUSE button (which turns into a CONTINUE-button) to pause/ continue the game --> save value of counter and restart change() function with continue button
 * * add var progress that gets the same value as counter to store the counter value and use that for the pause/ continue button?
 * use an if statement to check whether or not to run the main setInterval // http://javascript.info/tutorial/settimeout-setinterval
 * other kind of setInterval // http://www.thecodeship.com/web-development/alternative-to-javascript-evil-setinterval/
 * * problem is that Javascript does not support multi-threading
 * * multi-treading with web workers:
 * * * http://www.htmlgoodies.com/html5/tutorials/introducing-html-5-web-workers-bringing-multi-threading-to-javascript.html#fbid=r2YYsyj7_ud
 * * * https://msdn.microsoft.com/en-us/hh549259.aspx
 * * * http://www.infoq.com/articles/js_multithread
 * http://javascript.info/tutorial/settimeout-setinterval
 * add battle against rival on route 22
 */

///////////////////
// Final Version //
///////////////////

/* make text for playerGender and starterPokemon all of the choices for faster testing (see comment after choosing this)
 * * playerGender = prompt("Now tell me. Are you a boy? \nOr are you a girl? ", "Boy, girl");
 * * starterPokemon = prompt("Which Pokemon do you want as a starter? ", "Bulbasaur/ Charmander/ Squirtle");
 * add option to nickname your starter (var starterNickname?) (Sean)
 * * do this by making starterPokemon an Object
 * * player.starterPokemon = {};
 * * player.starterPokemon.Name == ...;
 * * player.starterPokemon.Nickname == ...;
 * * if (player["activePokemon"+(i+1)] == player.starterPokemon.Name) {
	* // set name as player.starterPokemon.Nickname
   * };
 * ask for a favorite pokemon at the start, to make sure the game keeps that Pokemon in the activePokemon, and you hava a 100% chance to obtain that Pokemon
 * use of coockies: (not implemented (yet?))
 * * This site uses cookies. By continuing to use this site, you are agreeing to our use of cookies. (http://pokemon-online.eu/download)
 * Use Pokedex entries from pokemon universe?
 * if there's a pc -> all pokemon can be healed and the function switchPokemonPC(player) can be used
 * * create a new function useHealingLocation(...) for this?
 * * or make it part of the function getHealingLocation(...)?
 * arrays: http://stackoverflow.com/questions/6254050/how-to-add-an-object-into-an-array
 * * http://stackoverflow.com/questions/251402/create-an-empty-object-in-javascript-with-or-new-object
 * add feature where you get to trade your pokemon and get them back (e.g., Kadabra --> Alakazam)
 * Pokedex
 * * picture of Pokedex on default
 * * If you click on it, you see the amount of captured Pokemon and their entries on the same place (same div)
 * * if you click on it again, you see the default picture of the pokedex
 * Player
 * * Name and picture of player by default, including money
 * * if you click on it, you see the bag
 * * * <h2> Bag </h2>
 * * * <h3>KEY ITEMS POCKET</h3>
 * * * OAK'S PARCEL <br/>
 * * * <h3> HEAL ITEMS POCKET </h3>
 * * * Potions: #potionsAmount <br/>
 * * * <h3> POKé BALLS POCKET </h3>
 * * * POKé BALLS: #pokeballAmount <br/>
 */

function startGame() { 

	// Variables 
	var confirmStartGame;// still necessary?
	// var elem = document.getElementById("pokemonRed"); //create variables for other document.getElementById elements
	// var elemStoryImage = document.getElementById("imageStory"); //create variables for other document.getElementById elements
	var counter = 0;
	var playerName = "";
	var playerGender;
	var starterPokemon = "";
	var pokemonOne;
	var player;
	var rivalName = "";
	var starterPokemonRival = "";
	var pokemonOneRival;
	var rival;
	var showPlayerStats;
	var pokemonMovetype = "";
	var pokemonMoveCategory = "";
	var pokemonMovePP = 0;
	var pokemonMovePower = 0;
	var pokemonMoveAccuracy = 100;
	var pokemonMoveEffect = "";
	var moveOne;
	var moveTwo;
	var moveThree;
	var moveFour;
	var locationName;
	var location;
	var lastHealingLocation;
	var wildPokemon;
	var interval;
	var cheatCode = false;

	while (isNaN(interval) == true){
		interval = 1000 * prompt("How much time should be between different events? \n\n1 = 1 second. \nIt also takes that long before the game starts.", 3);
	};

	var gamePokemonFireRed = window.setInterval(change, interval); //3000 for 3 seconds; //1 for quick testing purposes; //500 for slow testing purposes;
	gamePokemonFireRed;	
	// Start game
/*	if (confirm("Are you ready to play? \nIt takes 5 seconds to start the game. ") == true) {
		confirmStartGame = true;
	} else {
		return;
	}*/

	function change() {

		// Walkthrough
			///////////////////
			// Viridian City // // viridian city http://bulbapedia.bulbagarden.net/wiki/File:Viridian_City_FRLG.png (not yet used, in folder viridianCity in folder images)
			///////////////////

			/////////////////
			// Pallet Town // //http://bulbapedia.bulbagarden.net/wiki/File:Pallet_Town_FRLG.png (not yet used, in folder PalletTown in folder images)
			///////////////// //prof oaks lab --> http://bulbapedia.bulbagarden.net/wiki/File:Professor_Oak_Lab_inside_FRLG.png (not yet used, in folder PalletTown in folder images)
			
			///////////////////
			// Viridian City //
			///////////////////
			
			//////////////
			// Route 22 // //http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_22_FRLG.png (not yet used, in folder images)
			//////////////
			
			/////////////
			// Route 2 // //http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_2_FRLG.png (not yet used, in folder images)
			///////////// //viridian forest --> http://bulbapedia.bulbagarden.net/wiki/File:Viridian_Forest_FRLG.png (not yet used, in folder images)
			
			//from bulbapedia: http://bulbapedia.bulbagarden.net/wiki/Appendix:FireRed_and_LeafGreen_walkthrough
			//// Pewter City, Pewter Gym, Route 3, Mt. Moon, Route 4
			//// Cerulean City, Cerulean Gym, Routes 24 and 25, Route 5
			//// Route 6, Vermilion City, S.S. Anne, Vermilion Gym
			//// Route 11, Route 2, Pewter City, Cerulean City, Routes 9 and 10 (north)
			//// Rock Tunnel, Route 10 (south), Lavender Town, Route 8, Route 7
			//// Celadon City, Celadon Gym, Rocket Hideout
			//// Saffron City, Silph Co., Saffron Gym
			//// Routes 16, 17, and 18, Fuchsia City, Fuchsia Gym, Safari Zone
			//// Routes 12, 13, 14, and 15, Routes 19 and 20, Seafoam Islands
			//// Cinnabar Island, Cinnabar Gym
			//// One Island, Two Island, Three Island
			//// Route 21, Power Plant, Viridian Gym
			//// Routes 22 and 23, Victory Road
			//// Indigo Plateau
		
		if (counter == 0) {
			// Reset the variables
			playerName = "";
			rivalName = "";
			starterPokemon = "";
			starterPokemonRival = "";

			// Get the player's name
			while (playerName.length < 1) { //typeof playerName == "undefined" | 
				playerName = prompt("Let's begin with your name. \nWhat is it? ", "YOUR NAME?");//insert Yes/no option?
			};
			
			// Get the player's gender
			// currently, you can cancel this and the picture of oak stays
			while(!(playerGender == "boy" | playerGender == "girl")) { // while(playerGender === "boy" | playerGender === "b" | playerGender === "male" | playerGender === "m" | playerGender === "girl" | playerGender === "g" | playerGender === "female" | playerGender === "f") {} // get this to work!
				playerGender = prompt("Now tell me. Are you a boy? \nOr are you a girl? ", "Girl"); // final version: make it playerGender = prompt("Now tell me. Are you a boy? \nOr are you a girl? ", "Boy / girl");
				playerGender = playerGender.toLowerCase();
			};
			
			// Get the starter Pokemon
			while(!(starterPokemon == "BULBASAUR" | starterPokemon == "CHARMANDER" | starterPokemon == "SQUIRTLE")) {
				starterPokemon = prompt("Which Pokemon do you want as a starter? ", "Charmander"); // fina; version: make it starterPokemon = prompt("Which Pokemon do you want as a starter? ", "Bulbasaur / Charmander / Squirtle");
				starterPokemon = starterPokemon.toUpperCase();
			};
			//player.starterPokemon = starterPokemon;
			var starterPokemonLevel = 5;

			// Create the starterPokemon Object
 			for (i=0; i<pokemonStats.length; i++) {
				if (pokemonStats[i][1] == starterPokemon) {
					if (pokemonStats[i][2] == starterPokemonLevel) {
						// Create the starterPokemon Object
						pokemonOne = new createPokemon(// bulbasaur / squirtle / charmander instead of pokemonOne
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
							pokemonStats[i][17],
							pokemonStats[i][18],
							pokemonStats[i][19],
							pokemonStats[i][20],
							pokemonStats[i][21],
							pokemonStats[i][22]
						);
					}
				}
			};

 			// Create a player object
			player = new createPlayer (
				playerName,
				playerGender,
				3000, //is this the correct starting amount?
				starterPokemon, // name of the starterPokemon
				pokemonOne, // active pokemon 1
				"", // active pokemon 2
				"", // active pokemon 3
				"", // active pokemon 4
				"", // active pokemon 5
				"" // active pokemon 6
			); 
			// Set pcPokemon
			for (i=0; i<151; i++) {
				var pcPokemonNumber = i + 1;
				var pcPokemonCall = "pc" + pcPokemonNumber;
				player[pcPokemonCall] = "";
			};
			// Save the player's name and money as coockies
/*			savePlayerName(player.Name);
			savePlayerMoney(player.money);*/

			// Get the rival's name
			rivalName = prompt("What is the name of your rival? ", "Gary"); // change Gary into RIVAL'S NAME in final version?
			while (rivalName.length < 1) {
				rivalName = prompt("RIVAL's NAME? ", ""); // alert("...Er, was it " + rivalName + "? "); //insert Yes/no option?
			};
			
			// Get the rivalStarterPokemon
			////player.activePokemon1Name = player.starterPokemon;
			if (starterPokemon == "BULBASAUR") {
				starterPokemonRival = "CHARMANDER";
			} else if (starterPokemon == "CHARMANDER") {
				starterPokemonRival = "SQUIRTLE";
			} else if (starterPokemon == "SQUIRTLE") {
				starterPokemonRival = "BULBASAUR";
			} else {
				starterPokemonRival = "BULBASAUR";
			}
			//document.getElementById("player").innerHTML = starterPokemonRival;
			// var starterPokemonRivalLevel = 5;
			//// rival.activePokemon1Level = 5;
			////rival.activePokemon1Name = rival.starterPokemonRival;
			
			// Create the pokemonOneRival object
 			for (i=0; i<pokemonStats.length; i++) {
				if (pokemonStats[i][1] == starterPokemonRival) {
					if (pokemonStats[i][2] == starterPokemonLevel) {
						pokemonOneRival = new createPokemon(// bulbasaur / squirtle / charmander instead of pokemonOne
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
							pokemonStats[i][17],
							pokemonStats[i][18],
							pokemonStats[i][19],
							pokemonStats[i][20],
							pokemonStats[i][21],
							pokemonStats[i][22]
					);}
				}
			}
			
 			// Create a rival object
			rival = new createRival (
				rivalName,
				starterPokemonRival, //starterPokemonRival
				pokemonOneRival, // active pokemon 1
				"", // active pokemon 2
				"", // active pokemon 3
				"", // active pokemon 4
				"", // active pokemon 5
				"" // active pokemon 6
			); 

			// Update the starterPokemon object with move objects
			createPokemonMoves(player.activePokemon1);
			// Update the sterterPokemonRival object with move objects
			createPokemonMoves(rival.activePokemon1);

			player.pokemonCaught = pokemonCaught;
			// Check whether the cheat code is inserted
			// Return cheatcode = true if this is the case
			checkCheat(player, rival);

			// Show the short introduction
			window.alert("In the world which you are about to \nenter, you will embark on a grand \nadventure with you as the hero. \n\nSpeak to people and check things \nwherever you go, be it towns, roads, \nor caves. Gather information and \nhints from every source. ");
			window.alert("New paths will open to you by helping \npeople in need, overcoming challenges, \nand solving mysteries. \n\nAt times, you will be challenged by \nothers and attacked by wild creatures. \nBe brave and keep pushing on. ");
			window.alert("Through your adventure, we hope \nthat you will interact with all sorts \nof people and achieve personal growth. \nThat is our biggest objective. \n\nLet your adventure begin! ");
			document.getElementById("pokemonRed").innerHTML = "";

			// Show the story text
			document.getElementById("pokemonRed").style.display = "block";
		} else if (counter == 1) {
			// Create the Introduction location
			locationName = "Introduction";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";

			// Show the image of the story
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			document.getElementById("imageStory").style.display = "block";

			// Start introduction Professor Oak
            document.getElementById("pokemonRed").innerHTML = "Hello, there! <br/> Glad to meet you! ";
        } else if (counter == 2) {
        	document.getElementById("pokemonRed").innerHTML = "Welcome to the world of POKeMON! ";
    	} else if (counter == 3) {
    		document.getElementById("pokemonRed").innerHTML = "My name is OAK. ";
    	} else if (counter == 4) {
    		document.getElementById("pokemonRed").innerHTML = "People affectionately refer to me <br/> as the POKeMON PROFESSOR. ";
    	} else if (counter == 5) {
    		document.getElementById("pokemonRed").innerHTML = "This world...";
		} else if (counter == 6) {
			document.getElementById("pokemonRed").innerHTML = "...is inhabited far and wide by creatures called POKeMON. ";
		} else if (counter == 7) {
			document.getElementById("pokemonRed").innerHTML = "For some people, POKeMON are pets. <br/> Others use them for battling. ";
		} else if (counter == 8) {
			document.getElementById("pokemonRed").innerHTML = "As for myself... ";
		} else if (counter == 9) {
			document.getElementById("pokemonRed").innerHTML = "I study POKeMON as a profession. ";
		} else if (counter == 10) {
			// Introduction player
			document.getElementById("pokemonRed").innerHTML = "But first, tell me a little about <br/> yourself. ";
		} else if (counter == 11) {
			document.getElementById("pokemonRed").innerHTML = "Let's begin with your name. <br/> What is it? ";
		} else if (counter == 12) {
 			// Show the player's name and gender
			showPlayerStats = player.Name;
			document.getElementById("player").innerHTML = "<h3>" + showPlayerStats + "</h3>";
			document.getElementById("player").style.display = "block";
			imgPlayer = "images/FireRed_" + player.gender + ".png";
			document.getElementById("imgPlayer").src = imgPlayer;
			document.getElementById("playerMoneyAmount").innerHTML = player.money;
			document.getElementById("playerMoney").style.display = "block";
/* 			if (player.gender == "boy") { //flip image if player.gender == boy
				// https://css-tricks.com/snippets/css/flip-an-image/
				// http://monkeyraptor.johanpaul.net/2013/07/how-to-mirror-image-using-css3.html
				document.getElementById("imgPlayer").style.-moz-transform = "scale(-1,1)";
				document.getElementById("imgPlayer").style.-o-transform = "scale(-1,1)";
				document.getElementById("imgPlayer").style.-webkit-transform = "scale(-1,1)";
				document.getElementById("imgPlayer").style.-transform = "scale(-1,1)";
			}; */
			// picture of boy from http://www.marriland.com/forums/pokemon-1st-2nd-3rd-generation/pokemon-firered-leafgreen/514280-girl-or-boy
			// picture of girl from http://bulbapedia.bulbagarden.net/wiki/Leaf_%28game%29
			document.getElementById("imgPlayer").style.display = "block";
			document.getElementById("pokemonRed").innerHTML = "Right... <br/> So your name is " + player.Name + ".";
		} else if (counter == 13) {
			// Introduction rival
			document.getElementById("imageStory").src = "images/Gary.png"; // picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
			document.getElementById("pokemonRed").innerHTML = "This is my grandson.";
		} else if (counter == 14) {
			document.getElementById("pokemonRed").innerHTML = "He's been your rival since you both <br/> were babies. ";
		} else if (counter == 15) {
			document.getElementById("pokemonRed").innerHTML = "...Erm, what was his name now? ";
		} else if (counter == 16) {
 			// Show the player's name, gender and rival's name
			showPlayerStats = "<h3>" + player.Name + " vs. " + rival.Name + "</h3>";
			document.getElementById("player").innerHTML = showPlayerStats;
			document.getElementById("pokemonRed").innerHTML = "That's right! I remember now! <br/> His name is " + rival.Name + "! ";
		} else if (counter == 17) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			document.getElementById("pokemonRed").innerHTML = player.Name + "!";
		} else if (counter == 18) {
			document.getElementById("pokemonRed").innerHTML = "Your very own POKeMON legend is <br/> about to unfold! ";
		} else if (counter == 19) {
			document.getElementById("pokemonRed").innerHTML = "A world of dreams and adventures <br/> with POKeMON awaits! Let's go! ";
		} else if (counter == 20) {
			/////////////////
			// PALLET TOWN // //http://bulbapedia.bulbagarden.net/wiki/File:Pallet_Town_FRLG.png (not yet used, in folder PalletTown in folder images)
			///////////////// //prof oaks lab --> http://bulbapedia.bulbagarden.net/wiki/File:Professor_Oak_Lab_inside_FRLG.png (not yet used, in folder PalletTown in folder images)
			// Create the Pallet Town location
			locationName = "Pallet Town";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>"; // <h3> Pallet Town </h3> does not work
			document.getElementById("locationName").style.display = "block";

			// Own House
			document.getElementById("imageStory").src = "images/OwnRoom.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You walk to your PC. ";
		} else if (counter == 21) {
			// Create the bag
			player.bag = new createBag();
			// Create a HEAL type in the bag
			player.bag.HEAL = new createHEALtype();
			// Create a potion object in the HEAL part of the bag
			player.bag.HEAL.potion = new createItem("Potion");
			player.bag.HEAL.potion.amount = 1;
			// Create a POKEBALL type in the bag
			player.bag.POKEBALL = new createPOKEBALLtype();
			// Create a pokeball object in the POKEBALL part of the bag
			player.bag.POKEBALL.pokeball = new createItem("Pokeball");
			document.getElementById("pokemonRed").innerHTML = "You withdraw the POTION from your PC. ";
		} else if (counter == 22) {
			document.getElementById("imageStory").src = "images/Mom.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You walk down to your mom. ";
		} else if (counter == 23) {
			if (playerGender == "boy"){
				document.getElementById("pokemonRed").innerHTML = "MOM: ...Right. <br/> All " + player.gender + "s leave home someday. ";
			} else {
				document.getElementById("pokemonRed").innerHTML = "MOM: ...Right. <br/> All " + player.gender + "s dream of travelling. ";
			};
			player.lastHealingLocation = new getHealingLocation("MOM");
		} else if (counter == 24) {
			document.getElementById("pokemonRed").innerHTML = "It said so on TV. ";
		} else if (counter == 25) {			
			document.getElementById("pokemonRed").innerHTML = "Oh yes. PROF. OAK, next door, was <br/> looking for you. ";
		} else if (counter == 26) {
			// Walk to PROF. OAK's and getting your first Pokemon
			document.getElementById("pokemonRed").innerHTML = "You walk out of your house. ";
		} else if (counter == 27) {
			document.getElementById("imageStory").src = "images/PalletTown.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "Pallet Town";
		} else if (counter == 28) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
			document.getElementById("pokemonRed").innerHTML = "You walk into " + rival.Name + ". ";
		} else if (counter == 29) {			
			document.getElementById("pokemonRed").innerHTML = rival.Name + ": What, it's only " + player.Name + "? <br/> Gramps isn't around. ";
		} else if (counter == 30) {
			document.getElementById("imageStory").src = "images/PalletTown.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "";
		} else if (counter == 31) {
			document.getElementById("imageStory").src = "images/PalletTown_2.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You try to walk out of PALLET TOWN. ";
		} else if (counter == 32) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			document.getElementById("pokemonRed").innerHTML = "OAK: Hey! Wait! <br/> Don't go out! ";
		} else if (counter == 33) {
			document.getElementById("imageStory").src = "images/PalletTown_3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "";
		} else if (counter == 34) {
			document.getElementById("imageStory").src = "images/PalletTown_4.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "OAK: It's unsafe! <br/> Wild POK&eacute;MON live in tall grass! ";
		} else if (counter == 35) {
			document.getElementById("pokemonRed").innerHTML = "You need your own POK&eacute;MON for <br/> your protection. ";
		} else if (counter == 36) {
			document.getElementById("pokemonRed").innerHTML = "I know! <br/> Here, come with me! ";
		} else if (counter == 37) {
			document.getElementById("imageStory").src = "images/PalletTown_5.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You walk with PROF. OAK to his lab. ";
		} else if (counter == 38) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = rival.Name + ": Gramps! <br/> I'm fed up with waiting! ";
		} else if (counter == 39) {
			document.getElementById("pokemonRed").innerHTML = "OAK: " + rival.Name + "? <br/> Let me think... ";
		} else if (counter == 40) {
			document.getElementById("pokemonRed").innerHTML = "Oh, that's right, I told you to <br/> come! Just wait! ";
		} else if (counter == 41) {
			document.getElementById("pokemonRed").innerHTML = "Here, " + player.Name + ".";
		} else if (counter == 42) {
			document.getElementById("pokemonRed").innerHTML = "There are three POK&eacute;MON here. ";
		} else if (counter == 43) {
			document.getElementById("pokemonRed").innerHTML = "Haha! ";
		} else if (counter == 44) {
			document.getElementById("pokemonRed").innerHTML = "The POK&eacute;MON are held inside <br/> these POK&eacute; BALLS. ";
		} else if (counter == 45) {
			document.getElementById("pokemonRed").innerHTML = "When I was young, I was a serious <br/> POK&eacute;MON TRAINER. ";
		} else if (counter == 46) {
			document.getElementById("pokemonRed").innerHTML = "But now, in my old age, I have <br/> only these three left. ";
		} else if (counter == 47) {
			document.getElementById("pokemonRed").innerHTML = "You can have one. <br/> Go on, choose! ";
		} else if (counter == 48) {
			document.getElementById("pokemonRed").innerHTML = rival.Name + ": Hey! Gramps! No fair! <br/> What about me? ";
		} else if (counter == 49) {
			document.getElementById("pokemonRed").innerHTML = "OAK: Be patient, " + rival.Name + ". <br/> You can have one, too! ";
		} else if (counter == 50) {
			// Show starter pokemon
			// starterPokemon = player.activePokemon1.Name;
			if (starterPokemon == "BULBASAUR") {
				document.getElementById("pokemonRed").innerHTML = "I see! "+ player.starterPokemon + " is your choice. <br/> It's very easy to raise. ";
			} else if (starterPokemon == "CHARMANDER") {
				document.getElementById("pokemonRed").innerHTML = "Ah! " + player.starterPokemon + " is your choice. <br/> You should raise it patiently. ";
			} else {
				document.getElementById("pokemonRed").innerHTML = "Hm! " + player.starterPokemon + " is your choice. <br/> It's one worth raising. ";
			}
			document.getElementById("imageStory").src = "images/wildPokemon/" + player.starterPokemon + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			setActivePokemonText(player);
			if (player.pokemonCaught[starterPokemon] == 0) {
				player.pokemonCaught[starterPokemon] = 1;
			};
			setPokemonCaught(player);
		} else if (counter == 51) {
			document.getElementById("pokemonRed").innerHTML = player.Name + " received the " + starterPokemon + " <br/> from PROF. OAK! ";
		} else if (counter == 52) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
			document.getElementById("pokemonRed").innerHTML = rival.Name + ": I'll take this one, then! ";
		} else if (counter == 53) {
			document.getElementById("imageStory").src = "images/wildPokemon/" + rival.starterPokemon + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = rival.Name + " received the " + starterPokemonRival + " <br/> from PROF. OAK! "; 
		} else if (counter == 54) {
			// Your first battle
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			document.getElementById("pokemonRed").innerHTML = "OAK: If a wild POK&eacute;MON appears, <br/> your POK&eacute;MON can battle it. ";
		} else if (counter == 55) {
			document.getElementById("pokemonRed").innerHTML = "With it at your side, you should be <br/> able to reach the next town. ";//55
		} else if (counter == 56) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab2.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "";
		} else if (counter == 57) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
			document.getElementById("pokemonRed").innerHTML = rival.Name + ": Wait, " + player.Name + "! <br/> Let's check out our POK&Eacute;MON!";
		} else if (counter == 58) {
			document.getElementById("pokemonRed").innerHTML = "Come on, I'll take you on! ";
		} else if (counter == 59) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "RIVAL " + rival.Name + " <br/> would like to battle! ";
		} else if (counter == 60) {
			document.getElementById("pokemonRed").innerHTML = "RIVAL " + rival.Name + " sent <br/> out " + starterPokemonRival + "!";
		} else if (counter == 61) {
			document.getElementById("pokemonRed").innerHTML = "Go! " + starterPokemon + "! ";
		} else if (counter == 62) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			document.getElementById("pokemonRed").innerHTML = "OAK: Oh, for Pete's sake... <br/> So pushy, as always. ";
		} else if (counter == 63) {
			document.getElementById("pokemonRed").innerHTML = player.Name + ". ";
		} else if (counter == 64) {
			document.getElementById("pokemonRed").innerHTML = "You've never had a POK&eacute;MON battle <br/> before, have you? ";
		} else if (counter == 65) {
			document.getElementById("pokemonRed").innerHTML = "A POK&eacute;MON battle is when TRAINERS <br/> pit their POK&eacute;MON against each ";
		} else if (counter == 66) {
			document.getElementById("pokemonRed").innerHTML = "other. ";
		} else if (counter == 67) {
			document.getElementById("pokemonRed").innerHTML = "The TRAINER that makes the other <br/> TRAINER's POK&eacute;MON faint by lowering ";
		} else if (counter == 68) {
			document.getElementById("pokemonRed").innerHTML = "their HP to '0', wins. ";
		} else if (counter == 69) {
			document.getElementById("pokemonRed").innerHTML = "But rather than talking about it, <br/> you'll learn more from experience. ";
		} else if (counter == 70) {
			document.getElementById("pokemonRed").innerHTML = "Try battling and see for yourself. ";
		} else if (counter == 71) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			// Player has 1st move
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
					setActivePokemonText(player);
				};
			// Rival has first move
			} else if (player.activePokemon1.speed < rival.activePokemon1.speed) {
				document.getElementById("pokemonRed").innerHTML = rival.activePokemon1.Name + " used " + rival.activePokemon1.move1.Name + ".";
				if (rival.activePokemon1.Name == "BULBASAUR") {
					player.activePokemon1.currentHP -= 4;
				} else if (rival.activePokemon1.Name == "CHARMANDER") {
					player.activePokemon1.currentHP -= 4;
				} else if (rival.activePokemon1.Name == "SQUIRTLE") {
					player.activePokemon1.currentHP -= 5;
				};
				setActivePokemonText(player);
			};
/*			//pause current setInterval --> http://stackoverflow.com/questions/8432127/stop-setinterval-function-for-an-amount-of-time
			pokemonBattleStartFirst(player, rival); //this is not functional; check whether all objects are proper objects
			//continue with current setInterval*/
		} else if (counter == 72) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			document.getElementById("pokemonRed").innerHTML = "OAK: Inflicting damage on the foe <br/> is the key to any battle. ";
		} else if (counter == 73) {
			// 1st battle
			firstPokemonBattle(player, rival, counter);
			//counterExtra = firstPokemonBattle(player, rival, counter); // first battle works, except that the usage of moves is not properly displayed; you also don't see the diminishing of HP, except for the end
			// perhaps I do need to use clearInterval to clear the current interval? or also use a var textFirstBattle that the function can scroll through --- http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_clearinterval
			// add opponent pokemon with currentHP/maxHP somewhere
		} else if (counter == 74) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab4.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = rival.Name + ": Okay! I'll make my <br/> POK&eacute;MON battle to toughen it up!";
		} else if (counter == 75) {
			document.getElementById("pokemonRed").innerHTML = player.Name + "! Gramps! <br/> Smell you later! ";
		} else if (counter == 76) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab5.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = rival.Name + " walks away. ";
		} else if (counter == 77) {
			document.getElementById("imageStory").src = "images/PalletTown_6.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You walk out of the door... ";
		} else if (counter == 78) {
			document.getElementById("imageStory").src = "images/Mom.png";
			player.activePokemon1.currentHP = player.activePokemon1.maxHP;
			setActivePokemonText(player);
			document.getElementById("pokemonRed").innerHTML = "... to your mom to heal your POK&eacute;MON ...";
		} else if (counter == 79) {
			/////////////
			// Route 1 // // route 1 http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_1_FRLG.png (not yet used, in folder images)
			/////////////

			// Create the Route 1 location
			locationName = "Route 1";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Route1.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.	
			document.getElementById("pokemonRed").innerHTML = "... and into ROUTE 1. ";
		} else if (counter == 80) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 81) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 82) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 83) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 84) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 85) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 3-5 battles here
			var randNumb0To2 = 2 * Math.round(2 * Math.random());
			counter += randNumb0To2;
		} else if (counter == 86) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 87) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 88) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 89) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 90) {
			///////////////////
			// Viridian City // // viridian city http://bulbapedia.bulbagarden.net/wiki/File:Viridian_City_FRLG.png (not yet used, in folder viridianCity in folder images)
			///////////////////

			// Create the Viridian City location
			locationName = "Viridian City";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Viridian City1.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 91) {
			document.getElementById("imageStory").src = "images/Viridian City PokeCenter.png";
			player.lastHealingLocation = new getHealingLocation("Viridian City PokeCenter");
			document.getElementById("pokemonRed").innerHTML = "You enter the PokeCenter. ";
		} else if (counter == 92) {
			document.getElementById("imageStory").src = "images/Viridian City PokeCenter Inside.png";
			healAllPokemon(player);
			document.getElementById("pokemonRed").innerHTML = "We've restored your POK&eacute;MON to <br/>full health. ";
		} else if (counter == 93) {
			document.getElementById("imageStory").src = "images/Viridian City PokeMart.png";
			document.getElementById("pokemonRed").innerHTML = "You enter the POK&eacute;MON MART. ";
		} else if (counter == 94) {
			document.getElementById("imageStory").src = "images/Viridian City PokeMart Inside.png";
			document.getElementById("pokemonRed").innerHTML = "Hey! <br/>You came from Pallet Town? ";
		} else if (counter == 95) {
			document.getElementById("imageStory").src = "images/Viridian City PokeMart Inside2.png";
			document.getElementById("pokemonRed").innerHTML = "You know PROF. OAK, right? ";
		} else if (counter == 96) {
			document.getElementById("pokemonRed").innerHTML = "His order came in. <br/> Can I get you to take it to him? ";
		} else if (counter == 97) {
			document.getElementById("pokemonRed").innerHTML = player.Name + " received OAK'S PARCEL <br/>from the POK&eacute;MON MART clerk. ";
		} else if (counter == 98) {
			document.getElementById("pokemonRed").innerHTML = player.Name + " put the OAK'S PARCEL <br/> in the KEY ITEMS POCKET. ";
		} else if (counter == 99) {
			document.getElementById("imageStory").src = "images/Viridian City PokeMart Inside3.png";
			document.getElementById("pokemonRed").innerHTML = "You leave the POK&eacute;MON MART. ";
		} else if (counter == 100) {
			document.getElementById("imageStory").src = "images/Viridian City2.png";
			document.getElementById("pokemonRed").innerHTML = "You leave Viridian City. ";
		} else if (counter == 101) {
			// Create the Route 1 location
			locationName = "Route 1";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Route1_2.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = locationName;
		} else if (counter == 102) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 103) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 1-2 battles here
			var randNumb0Or2 = 2 * Math.round(Math.random());
			counter += randNumb0Or2;
		} else if (counter == 104) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 105) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 106) {
			// Create the Pallet Town location
			locationName = "Pallet Town";
			location = getLocation(locationName);
			player.lastHealingLocation = new getHealingLocation("MOM");
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>"; // <h3> Pallet Town </h3> does not work
			document.getElementById("imageStory").src = "images/PalletTown_7.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 107) {
			document.getElementById("imageStory").src = "images/PalletTown_8.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You enter PROF. OAK'S Lab. ";
		} else if (counter == 108) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab6.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "OAK: Oh, " + player.Name + "! <br/> How is my old POK&eacute;MON? ";
		} else if (counter == 109) {
			document.getElementById("pokemonRed").innerHTML = "Well, it seems to be growing more </br>attached to you. ";
		} else if (counter == 110) {
			document.getElementById("pokemonRed").innerHTML = "You must be talented as a POK&eacute;MON </br>TRAINER. ";
		} else if (counter == 111) {
			document.getElementById("pokemonRed").innerHTML = "What's that? </br>You have something for me? ";
		} else if (counter == 112) {
			document.getElementById("pokemonRed").innerHTML = player.Name + " delivered OAK'S PARCEL. ";
		} else if (counter == 113) {
			document.getElementById("pokemonRed").innerHTML = "Ah! </br>It's the custom POK&eacute; BALL! ";
		} else if (counter == 114) {
			document.getElementById("pokemonRed").innerHTML = "I had it on order. </br>Thank you! ";
		} else if (counter == 115) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab7.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = rival.Name + ": Gramps! ";
		} else if (counter == 116) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab8.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = rival.Name + ": I almost forgot! <br/>What did you call me for? ";
		} else if (counter == 117) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab9.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "OAK: Oh, right! <br/>I have a request for you two. ";
		} else if (counter == 118) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab10.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "On the desk there is my invention, <br/>the POK&eacute;DEX! ";
		} else if (counter == 119) {
			document.getElementById("pokemonRed").innerHTML = "It automatically records data on <br/> POK&eacute;MON you've seen or caught. ";
		} else if (counter == 120) {
			document.getElementById("pokemonRed").innerHTML = "It's a high-tech encyclopedia! ";
		} else if (counter == 121) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab11.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "OAK: " + player.Name + " and " + rival.Name + ". <br/> Take these with you. ";
		} else if (counter == 122) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab12.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = player.Name + " received the POK&eacute;DEX <br/>from PROF. OAK. ";
			document.getElementById("pokemonCaught").style.display = "block";
/*			for (i=0; i<151; i++) {
				// Get pokemonName
				var pokemonNumber = i + 1;
				pokemonNumber = String(pokemonNumber);
				if (pokemonNumber < 10) {
					pokemonNumber = "00" + pokemonNumber;
				} else if (pokemonNumber < 100) {
					pokemonNumber = "0" + pokemonNumber;
				};
				var pokemonName = getPokemonName(pokemonNumber);

				// Show pokemon in pokedex if it's caught
				if (player.pokemonCaught[pokemonName] == 1) {
					var pokedexPokemonName = "pokedex" + pokemonName;
					document.getElementById(pokedexPokemonName).style.display = "block";
				};
			};*/
			document.getElementById("pokedex" + pokemonOne.Name).style.display = "block";
		} else if (counter == 123) {
			document.getElementById("pokemonRed").innerHTML = "OAK: You can't get detailed data <br/>on POK&eacute;MON by just seeing them. ";
		} else if (counter == 124) {
			document.getElementById("pokemonRed").innerHTML = "You must must catch them to obtain <br/>complete data. ";
		} else if (counter == 125) {
			document.getElementById("pokemonRed").innerHTML = "So here are some tools for <br/> catching wild POK&eacute;MON. ";
		} else if (counter == 126) {
			player.bag.POKEBALL.pokeball.amount = 5;
			document.getElementById("pokemonRed").innerHTML = player.Name + " received five POK&eacute; BALLS. ";
		} else if (counter == 127) {
			document.getElementById("pokemonRed").innerHTML = player.Name + " put the POK&eacute; BALLS <br/> in the POK&eacute; BALLS POCKET. ";
		} else if (counter == 128) {
			document.getElementById("pokemonRed").innerHTML = "When a wild POK&eacute;MON appears, <br/> it's a fair game. ";
		} else if (counter == 129) {
			document.getElementById("pokemonRed").innerHTML = "Just throw a POK&eacute BALL at it and <br/>try to catch it! ";
		} else if (counter == 130) {
			document.getElementById("pokemonRed").innerHTML = "This won't always work, however. ";
		} else if (counter == 131) {
			document.getElementById("pokemonRed").innerHTML = "A healthy POK&eacute;MON can escape. <br/>You have to be lucky! ";
		} else if (counter == 132) {
			document.getElementById("pokemonRed").innerHTML = "To make a complete guide on all <br/>the POK&eacute;MON in the world...";
		} else if (counter == 133) {
			document.getElementById("pokemonRed").innerHTML = "That was my dream!";
		} else if (counter == 134) {
			document.getElementById("pokemonRed").innerHTML = "But I'm too old. <br/>I can't get the job done. ";
		} else if (counter == 135) {
			document.getElementById("pokemonRed").innerHTML = "So I want you two to fullfil my <br/>dream for me. ";
		} else if (counter == 136) {
			document.getElementById("pokemonRed").innerHTML = "Get moving, you two. ";
		} else if (counter == 137) {
			document.getElementById("pokemonRed").innerHTML = "This is a great undertaking in <br/>POK&eacute;MON history! ";
		} else if (counter == 138) {
			document.getElementById("pokemonRed").innerHTML = rival.Name + ": All right, Gramps! <br/>Leave it all to me! ";
		} else if (counter == 139) {
			document.getElementById("pokemonRed").innerHTML = player.Name + ", I hate to say it, but you <br/> won't be necessary for this. ";
		} else if (counter == 140) {
			document.getElementById("pokemonRed").innerHTML = "I know! I'll borrow a TOWN MAP <br/>from my sis! ";
		} else if (counter == 141) {
			document.getElementById("pokemonRed").innerHTML = "I'll tell her not to lend you one, <br/>" + player.Name + "! Hahaha! ";
		} else if (counter == 142) {
			document.getElementById("pokemonRed").innerHTML = "Don't bother coming around to my place <br/>after this! ";
		} else if (counter == 143) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab13.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = rival.Name + " leaves PROF. OAK'S LAB. ";
		} else if (counter == 144) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab2.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You also leave PROF. OAK'S LAB... ";
		} else if (counter == 145) {
			document.getElementById("imageStory").src = "images/PalletTown_6.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 146) {
			document.getElementById("imageStory").src = "images/PalletTown_9.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "... to go to " + rival.Name + "'s sister. ";
		} else if (counter == 147) {
			document.getElementById("imageStory").src = "images/PalletTown_10.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "It's a big map of the KANTO region. <br/>Now this would be useful! ";
		} else if (counter == 148) {
			document.getElementById("imageStory").src = "images/PalletTown_11.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "Grandpa asked you to run an <br/>errand? ";
		} else if (counter == 149) {
			document.getElementById("imageStory").src = "images/PalletTown_12.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "Gee, that's lazy of him. <br/>Here, let me help you. ";
		} else if (counter == 150) {
			document.getElementById("imageStory").src = "images/PalletTown_13.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = rival.Name + "'s sister grabs the map. ";
		} else if (counter == 151) {
			document.getElementById("imageStory").src = "images/PalletTown_14.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = player.Name + "received a TOWN MAP <br/>from DAISY. ";
		} else if (counter == 152) {
			document.getElementById("pokemonRed").innerHTML = player.Name + "put the TOWN MAP <br/>in the KEY ITEMS POCKET. ";
		} else if (counter == 153) {
			document.getElementById("imageStory").src = "images/PalletTown_15.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You walk away. ";
		} else if (counter == 154) {
			document.getElementById("imageStory").src = "images/PalletTown_16.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 155) {
			// Create the Route 1 location
			locationName = "Route 1";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Route1.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = locationName;
		} else if (counter == 156) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 157) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 158) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 159) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 160) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 161) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 3-5 battles here
			var randNumb0To2 = 2 * Math.round(2 * Math.random());
			counter += randNumb0To2;
		} else if (counter == 162) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 163) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 164) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 165) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 166) {
			///////////////////
			// Viridian City // // viridian city http://bulbapedia.bulbagarden.net/wiki/File:Viridian_City_FRLG.png (not yet used, in folder viridianCity in folder images)
			///////////////////

			// Create the Viridian City location
			locationName = "Viridian City";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Viridian City1.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 167) {
			document.getElementById("imageStory").src = "images/Viridian City PokeCenter.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			player.lastHealingLocation = new getHealingLocation("Viridian City PokeCenter");
			document.getElementById("pokemonRed").innerHTML = "You enter the PokeCenter. ";
		} else if (counter == 168) {
			document.getElementById("imageStory").src = "images/Viridian City PokeCenter Inside.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			healAllPokemon(player);
			document.getElementById("pokemonRed").innerHTML = "We've restored your POK&eacute;MON to <br/>full health. ";
		} else if (counter == 169) {
			document.getElementById("imageStory").src = "images/Viridian City PokeMart.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You enter the POK&eacute;MON MART. ";
		} else if (counter == 170) {
			document.getElementById("imageStory").src = "images/Viridian City PokeMart Inside2.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "Hi there! <br/>May I help you? ";
		} else if (counter == 171) {
			player.bag.POKEBALL.pokeball.amount += 10; // 10 * 200 = 2000 money
			player.bag.HEAL.potion.amount += 2; // 2 * 300 = 600 money
			// Create a potion object in the HEAL part of the bag
			player.bag.HEAL.antidote = new createItem("Antidote");
			player.bag.HEAL.antidote.amount = 4; // 4 * 100 = 400 money
			player.money -= 3000;
			document.getElementById("playerMoneyAmount").innerHTML = player.money;
			document.getElementById("pokemonRed").innerHTML = "You buy 10 Pok&eacuteballs, 2 Potions, and 4 Antidotes. "; // pokeball 200, potion 300, antidote 100
		} else if (counter == 172) {
			document.getElementById("pokemonRed").innerHTML = "Please come again! ";
		} else if (counter == 173) {
			document.getElementById("imageStory").src = "images/Viridian City PokeMart Inside3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "You leave the POK&eacute; MART. ";
		} else if (counter == 174) {
			document.getElementById("imageStory").src = "images/Viridian City1.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 175) {
			//////////////
			// Route 22 // http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_22_FRLG.png
			//////////////

			// Create the Route 22 location
			locationName = "Route 22";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Route 22/Route 22_1.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 176) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 177) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 178) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 179) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 180) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 181) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 3-5 battles here
			var randNumb0To2 = 2 * Math.round(2 * Math.random());
			counter += randNumb0To2;
		} else if (counter == 182) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 183) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 184) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 185) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		// include battle with rival;
		// trainers are part of location
		// make them objects // special one for rival? // since he give more comments usually?
		// back to Viridian City
		} else if (counter == 186) {
			player.pokemonLevel = 5;
			levelAllPokemon(player); // currently not yet working - only levels first pokemon that is not player.pokemonLevel to player.pokemonLevel; does not show text #"pokemonRed"
		} else if (counter == 187) {
			document.getElementById("imageStory").src = "images/Viridian City3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
			document.getElementById("pokemonRed").innerHTML = "Then this guy tells you how to catch a POK&eacute;MON. ";
			// He gives you a teachy tv
		} else if (counter == 188) {
			/////////////
			// Route 2 // http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_2_FRLG.png
			/////////////

			// Create the Route 2 location
			locationName = "Route 2";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Route 2/FRLG_Route_2.png"; // image from http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_2_FRLG.png
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 189) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 190) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 1-2 battles here
			var randNumb0Or2 = 2 * Math.round(Math.random());
			counter += randNumb0Or2;
		} else if (counter == 191) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 192) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 193) {
			/////////////////////
			// Viridian Forest // http://bulbapedia.bulbagarden.net/wiki/File:Viridian_Forest_FRLG.png
			/////////////////////

			// Create the Viridian Forest location
			locationName = "Viridian Forest";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Viridian Forest/Viridian_Forest_FRLG.png"; // image from http://bulbapedia.bulbagarden.net/wiki/File:Viridian_Forest_FRLG.png
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 194) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 195) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 196) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 197) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 198) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 199) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 3-5 battles here
			var randNumb0To2 = 2 * Math.round(2 * Math.random());
			counter += randNumb0To2;
		} else if (counter == 200) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 201) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 202) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 203) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 204) {
			/////////////
			// Route 2 // http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_2_FRLG.png
			/////////////

			// Create the Route 2 location
			locationName = "Route 2";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Route 2/FRLG_Route_2.png"; // image from http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_2_FRLG.png
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 205) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 206) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 1-2 battles here
			var randNumb0Or2 = 2 * Math.round(Math.random());
			counter += randNumb0Or2;
		} else if (counter == 207) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 208) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 209) {
			/////////////
			// Route 3 // http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_3_FRLG.png
			/////////////

			// Create the Route 3 location
			locationName = "Route 3";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Route 3/Route 3.png"; // image from http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_3_FRLG.png
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 210) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 211) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 212) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 213) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 214) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 215) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 3-5 battles here
			var randNumb0To2 = 2 * Math.round(2 * Math.random());
			counter += randNumb0To2;
		} else if (counter == 216) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 217) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 218) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 219) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 220) {
			////////////////////
			// Route 4 - West // http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_4_FRLG.png
			////////////////////

			// Create the Route 4 - West location
			locationName = "Route 4 - West";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Route 4/Route 4.png"; // image from http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_4_FRLG.png
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 221) {
			document.getElementById("pokemonRed").innerHTML = "You meet a weird guy and buy a Magikarp from him. ";
			document.getElementById("playerMoneyAmount").innerHTML = (player.money -= 500);
		} else if (counter == 222) {
			// Create the MAGIKARP object
			for (i=0; i<pokemonStats.length; i++) {
				if (pokemonStats[i][1] == "MAGIKARP") {
					if (pokemonStats[i][2] == 5) {
						wildPokemon = new createPokemon(
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
							pokemonStats[i][17],
							pokemonStats[i][18],
							pokemonStats[i][19],
							pokemonStats[i][20],
							pokemonStats[i][21],
							pokemonStats[i][22]
						);
					};
				};
			};
			for (i=0; i<6; i++) {
				var activePokemonNumber = i + 1;
				var activePokemonCall = "activePokemon" + activePokemonNumber;
				if (player[activePokemonCall] == "") {
					if (player.pokemonCaught[wildPokemon.Name] == 0) {
						player[activePokemonCall] = wildPokemon;
						player.pokemonCaught[wildPokemon.Name] = 1;
						setActivePokemonText(player);
						document.getElementById("pokemonRed").innerHTML = "Gotcha! <br/>" + wildPokemon.Name + " was caught! ";
					};
				};
			};
			if (player.pokemonCaught[wildPokemon.Name] == 0) {
				// sent pokemon to the pc if the player already has 6 activePokemon (add PC as location)
				for (i=0; i<6; i++) {
					var pcPokemonNumber = i + 1;
					var pcPokemonCall = "pc" + pcPokemonNumber;
					if (player[pcPokemonCall] == "") {
						if (player.pokemonCaught[wildPokemon.Name] == 0) {
							player[pcPokemonCall] = wildPokemon;
							// Heal Caught Pokemon if it goed to the PC
							player[pcPokemonCall].currentHP = player[pcPokemonCall].maxHP;
							player.pokemonCaught[wildPokemon.Name] = 1;
							document.getElementById("pokemonRed").innerHTML = "Gotcha! <br/>" + wildPokemon.Name + " was caught! ";
							document.getElementById("pokemonRed".innerHTML) = wildPokemon.Name + " was sent to the PC. ";
						};
					};
				};
			};
		} else if (counter == 223) {
			document.getElementById("pokemonRed").innerHTML = wildPokemon.Name + "'s data was <br/>added to the Pok&eacute;DEX. ";
		} else if (counter == 224) {
			setPokemonCaught(player);
			document.getElementById("pokedex" + wildPokemon.Name).style.display = "block";
		} else if (counter == 225) {
			///////////////////
			// Mt. Moon - 1F // http://bulbapedia.bulbagarden.net/wiki/File:Mt_Moon_1F_FRLG.png
			///////////////////

			// Create the Mt. Moon - 1F location
			locationName = "Mt. Moon - 1F";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Mt. Moon/1F.png"; // image from http://bulbapedia.bulbagarden.net/wiki/File:Mt_Moon_1F_FRLG.png
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 226) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 227) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 1-2 battles here
			var randNumb0Or2 = 2 * Math.round(Math.random());
			counter += randNumb0Or2;
		} else if (counter == 228) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 229) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 230) {
			////////////////////
			// Mt. Moon - B1F // http://bulbapedia.bulbagarden.net/wiki/File:Mt_Moon_B1F_FRLG.png
			////////////////////

			// Create the Mt. Moon - B1F location
			locationName = "Mt. Moon - B1F";
			location = getLocation(locationName);
			document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
			document.getElementById("imageStory").src = "images/Mt. Moon/B1F.png"; // image from http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_2_FRLG.png
			document.getElementById("pokemonRed").innerHTML = location.Name;
		} else if (counter == 231) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 232) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);

			// Either 1-2 battles here
			var randNumb0Or2 = 2 * Math.round(Math.random());
			counter += randNumb0Or2;
		} else if (counter == 233) {
			wildPokemon = new createWildPokemon(location);
			document.getElementById("imageStory").src = "images/wildPokemon/" + wildPokemon.Name + ".png"; // image from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Main_Page
			document.getElementById("pokemonRed").innerHTML = "Wild " + wildPokemon.Name + " level " + wildPokemon.level + " appeared!";
		} else if (counter == 234) {
			// add flee option to wildPokemonBattle function id wildPokemon.level >= player.activePokemon1.level
			wildPokemonBattle(player, wildPokemon, location);
		} else if (counter == 235) {
// B2F - 1-2 battles
// B1F - 1-2 battles
// 1F - 1-2 battles
// B1F - 1-2 battle
// B2F - 1-2 battle
// B1F - 1-2 battles
// 1F - 1-2 battles
// B1F - 1-2 battles
// B2F - 1-2 battle
// choose a random fossil
// B2F - 1-2 battle
// Route 4 - East
// Cerulian City

		} else if (counter > 250) {
			gameWon(player, location);
			return;
		};
		counter++;
	};
};

	/*  	while (gameWon == "false") {
		for (i = 0; i < 1000; i++) {
			if (i == 0) {
				var textIntro = "In the world which you are about to <br/> enter, you will embark on a grand <br/> adventure with you as the hero. <br/> <br/> Speak to people and check things <br/> wherever you go, be it towns, roads, <br/> or caves. Gather information and hints from every source. ";
				document.getElementById("pokemonRed").innerHTML = textIntro;	
			} else if (i == 1) {
				var textIntro2 = "New paths will open to you by helping <br/> people in need, overcoming challenges, <br/> and solving mysteries. <br/> <br/> At times, you will be challenged by <br/> others and attacked by wild creatures. <br/> Be brave and keep pushing on. ";
				document.getElementById("pokemonRed").innerHTML = textIntro2;
			} else {
				gameWon = true;
				return gameWon;
			}
		};
		
	}; */

/*	progress = 0; create progress counter? */
	
/* 	var startTime = Performance.now();
	startString = startTime.toString();
	document.getElementById("pokemonRed").innerHTML = startTime; */
/* 	var t0 = performance.now();
	document.getElementById("pokemonRed").innerHTML = "Hello";
	var t1 = performance.now();
	document.getElementById("pokemonRed").innerHTML = "Hello"; */


// get stats from Pokemon from text file?
// http://www.javascriptkit.com/javatutors/time3.shtml