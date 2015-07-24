/* 
pokemonRed.js
Javascript code for the Pokemon FireRed Progress Quest
Made on 20-07-2015
by GeOdin */
// change pokemonRed in pokemonFireRed
// movie of start of game: https://www.youtube.com/watch?v=yUS1IcC5CBY
// make sure to block the start button / ask for refreshing the game when it's pressed --> done // or remove start button when game is started!
// remove name + (gender) when start button is pressed
// in var tekst, Pokemon can be POK&eacute;MON, probably
// perhaps ask gender, name and starter at beginning, so that game does no longer gets interrupted
// shorten time of setInterval for testing purposes?
// show active pokemon and their levels
// show map where you currently are --> town map http://bulbapedia.bulbagarden.net/wiki/File:Viridian_City_FRLG.png (in folder townMap in folder images, currently not yet used)
// use infowindows instead of alerts and/or prompts?
// use male / female screenshots depending on playerGender
// make Pokemonnames, stats and moves all uppercase?
// shorten part about getting potion from room
// include documentation for all files
// create a variable for which pokemon are already caught
// set up some sort of in-game PC-system
// kans om een shiny tegen te komen?
// show images of pokemon on top of battle image and flip pokemon image of opponent ? --> https://css-tricks.com/snippets/css/flip-an-image/
// reset amount of damage from attacks after battle (delete effects of growl, for example)
// create object for player
// show active pokemon title (without pokemon) after start game
// show player title (without text) after start game
// show story title after start game (instead of Pokemon Red)
// document.getElementById("imageStory") --> HallofFame.png picture keeps popping up after restarting the game
// add PAUSE button (which turns into a CONTINUE-button) to pause/ continue the game --> save value of counter and restart change() function with continue button
// adding badges to #player?
// show mainpage and pokemon red buttons before game is started (and after game is finished)?

function startGame() { 

	// Variables 
	var elem = document.getElementById("pokemonRed"); //create variables for other document.getElementById elements
	var elemStoryImage = document.getElementById("imageStory"); //create variables for other document.getElementById elements
	var counter = 0;
	var player;
	var playerGender;
	var showPlayerStats;
	var playerName = "";
	// var imgPlayer = "";
	var rivalName = "";
	var starterPokemon = "";
	var starterPokemonRival = "";
	var startInfo;
	var pokemonOne;
	var pokemonOneRival;
	
	
	// Start game
	confirm("Are you ready to play? \nIt takes 5 seconds to start the game. "); // game also starts if not confirmed
	document.getElementById("gameName").style.display = "none";
	document.getElementById("buttonStart").style.display = "none";
	window.setInterval(change, 1000); //5000 for 5 seconds in final version / 3000 for 3 seconds;
	
	function change() {
	
		// Variables
		var text = [// set to other file, and add the variables that are mentioned in here as var x; above var text ?
			// Get playerName, playerGender, rivalName and starterPokemon
			"",
		
			// Short introduction about Pokemon
			"In the world which you are about to <br/> enter, you will embark on a grand <br/> adventure with you as the hero. <br/> <br/> Speak to people and check things <br/> wherever you go, be it towns, roads, <br/> or caves. Gather information and <br/> hints from every source. ", 
			"New paths will open to you by helping <br/> people in need, overcoming challenges, <br/> and solving mysteries. <br/> <br/> At times, you will be challenged by <br/> others and attacked by wild creatures. <br/> Be brave and keep pushing on. ",
			"Through your adventure, we hope <br/> that you will interact with all sorts <br/> of people and achieve personal growth. <br/> That is our biggest objective. <br/> <br/> Let your adventure begin! ",
			
			// Introduction Professor Oak
			"Hello, there! <br/> Glad to meet you! ",
			"Welcome to the world of POKeMON! ",
			"My name is OAK. ",
			"People affectionately refer to me <br/> as the POKeMON PROFESSOR. ",
			"This world...",
			"...is inhabited far and wide by creatures called POKeMON. ",//10
			"For some people, POKeMON are pets. <br/> Others use them for battling. ",
			"As for myself... ",
			"I study POKeMON as a profession. ",

			// Introduction player
			"But first, tell me a little about <br/> yourself. ",
			"",
			"Right... <br/> So your name is " + playerName + ".", //16
			
			// Introduction rival
			"This is my grandson.",
			"He's been your rival since you both <br/> were babies. ",
			"That's right! I remember now! <br/> His name is " + rivalName + "! ",
			
			playerName + "!",//20
			"Your very own POKeMON legend is <br/> about to unfold! ",
			"A world of dreams and adventures <br/> with POKeMON awaits! Let's go! ",
			
			/////////////////
			// PALLET TOWN // //http://bulbapedia.bulbagarden.net/wiki/File:Pallet_Town_FRLG.png (not yet used, in folder PalletTown in folder images)
			///////////////// //prof oaks lab --> http://bulbapedia.bulbagarden.net/wiki/File:Professor_Oak_Lab_inside_FRLG.png (not yet used, in folder PalletTown in folder images)
			// Own House
			"You walk to your PC. ", 
			playerName + " booted up the PC. ",
			"What would you like to do? ",
			"ITEM STORAGE ",
			"WITHDRAW ITEM ",
			"Take out items from the PC. ",
			"POTION is selected. ", 
			"POTION x 1",//30
			"A spray-type wound medicine. <br/> It restores the HP of one POK&eacute;MON by 20 points. ",
			"Withdrew 1 POTION(s). ",
			"You walk down to your mom. ",
			"", 
			"It said so on TV. ",
			"Oh yes. PROF. OAK, next door, was <br/> looking for you. ",
			
			// Walk to PROF. OAK's and getting your first Pokemon
			"You walk out of your house. ",
			"PALLET TOWN", 
			"You walk into " + rivalName + ". ", 
			rivalName + ": What, it's only " + playerName + "? <br/> Gramps isn't around. ",//40
			"PALLET TOWN",
			"You try to walk out of PALLET TOWN. ",
			"OAK: Hey! Wait! <br/> Don't go out! ",
			"",
			"OAK: It's unsafe! <br/> Wild POK&eacute;MON live in tall grass! ",
			"You need your own POK&eacute;MON for <br/> your protection. ",
			"I know! <br/> Here, come with me! ",
			"You walk with PROF. OAK to his lab. ",
			rivalName + ": Gramps! <br/> I'm fed up with waiting! ",
			"OAK: " + rivalName + "? <br/> Let met think... ",
			"Oh, that's right, I told you to <br/> come! Just wait! ",
			"Here, " + playerName + ".",
			"There are three POK&eacute;MON here. ",
			"Haha! ",
			"The POK&eacute;MON are held inside <br/> these POK&eacute; BALLS. ",
			"When I was young, I was a serious <br/> POK&eacute;MON TRAINER. ",
			"But now, in my old age, I have <br/> only these three left. ",
			"You can have one. <br/> Go on, choose! ",
			rivalName + ": Hey! Gramps! No fair! <br/> What about me? ",
			"OAK: Be patient, " + rivalName + ". <br/> You can have one, too! ",//counter 60
			"", //61
			playerName + " received the " + starterPokemon + " <br/> from PROF. OAK! ", //62
			rivalName + ": I'll take this one, then! ", //63
			rivalName + " received the " + starterPokemonRival + " <br/> from PROF. OAK! ", //64
			
 			// Your first battle
			"OAK: If a wild POK&eacute;MON appears, <br/> your POK&eacute;MON can battle it. ", //65
			"With it at your side, you should be <br/> able to reach the next town. ", //66
			"", //67
			rivalName + ": Wait, " + playerName + "! <br/> Let's check out our POK&Eacute;MON!", //68
			"Come on, I'll take you on! ", //69
			"RIVAL " + rivalName + " <br/> would like to battle! ", //70
			"RIVAL " + rivalName + " sent <br/> out " + starterPokemonRival + "!", //71
			"Go! " + starterPokemon + "! ", //72
			"OAK: Oh, for Pete's sake... <br/> So pushy, as always. ", //73
			playerName + ". ", //74
			"You've never had a POK&eacute;MON battle <br/> before, have you? ", //75
			"A POK&eacute;MON battle is when TRAINERS <br/> pit their POK&eacute;MON against each ", //76
			"other. ", //77
			"The TRAINER that makes the other <br/> TRAINER's POK&eacute;MON faint by lowering ", //78
			"their HP to '0', wins. ", //79
			"But rather than talking about it, <br/> you'll learn more from experience. ", //80
			"Try battling and see for yourself. ", //81
			"", //82 
			
			
			/////////////
			// Route 1 // // route 1 http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_1_FRLG.png (not yet used, in folder images)
			/////////////
			
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
		];		

		elem.innerHTML = text[counter];
		
		if (counter == 0) {
			// Reset the variables
			document.getElementById("imageStory").style.display = "none";
			playerName = "";
			rivalName = "";
			starterPokemon = "";
			starterPokemonRival = "";
			document.getElementById("activePokemon").style.display = "none";
			document.getElementById("player").style.display = "none";
			document.getElementById("imgPlayer").style.display = "none";
			document.getElementById("imageStory").style.display = "none";
			document.getElementById("pokemonRed").style.display = "none";
		}

		counter++;

		if(counter == 1){
			// Get the player's name
			while (playerName.length < 1) { //typeof playerName == "undefined" | 
				playerName = prompt("Let's begin with your name. \nWhat is it? ", "YOUR NAME?");//insert Yes/no option?
			}
			
			// Get the player's gender
			// currently, you can cancel this and the picture of oak stays
			while(!(playerGender == "boy" | playerGender == "girl")) { // while(playerGender === "boy" | playerGender === "b" | playerGender === "male" | playerGender === "m" | playerGender === "girl" | playerGender === "g" | playerGender === "female" | playerGender === "f") {} // get this to work!
				playerGender = prompt("Now tell me. Are you a boy? \nOr are you a girl? ", "Boy / girl");
				playerGender = playerGender.toLowerCase();
			}
			
 			// Create a player object
			player = new createPlayer (
				playerName,
				playerGender,
				5000, //is this the correct starting amount?
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				""
			); 
			
			// Get the rival's name
			rivalName = prompt("...Erm, what was his name now? ", "RIVAL's NAME");
			while (rivalName.length < 1) {
				rivalName = prompt("RIVAL's NAME? ", ""); // alert("...Er, was it " + rivalName + "? "); //insert Yes/no option?
			}
			
 			// Create a rival object
			rival = new createRival (
				rivalName,
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				""
			); 
			
			// Show the player's name, gender and rival's name
			showPlayerStats = player.name + " (" + player.gender + ") vs. " + rival.name;
			document.getElementById("player").style.display = "block";
			document.getElementById("player").innerHTML = showPlayerStats;
			
			// Get the starter Pokemon
			while(!(starterPokemon == "BULBASAUR" | starterPokemon == "CHARMANDER" | starterPokemon == "SQUIRTLE")) {
				starterPokemon = prompt("Which Pokemon do you want as a starter? ", "Bulbasaur / Charmander / Squirtle");
				starterPokemon = starterPokemon.toUpperCase();
			}
			player.starterPokemon = starterPokemon;
			starterPokemonLevel = 5;
			
 			for (i=0; i<pokemon.length; i++) {
				if (pokemon[i][1] == player.starterPokemon) {
					pokemonOne = new createPokemon(// bulbasaur / squirtle / charmander instead of pokemonOne
						pokemon[i][0], 
						pokemon[i][1],
						starterPokemonLevel,
						pokemon[i][3],
						pokemon[i][4],
						pokemon[i][5],
						pokemon[i][6],
						pokemon[i][7], //getHP(player.starterPokemon, starterPokemonLevel), //adjust hp for level 5 //getHP() function? --> getHP(player.starterPokemon); variable pokemonStats uit pokemonRed_Pokemon.js?
						pokemon[i][8], //adjust attack for level 5
						pokemon[i][9], //adjust defense defense for level 5
						pokemon[i][10], //adjust spattack for level 5
						pokemon[i][11], //adjust spdefense for level 5
						pokemon[i][12], //adjust speed for level 5
						pokemon[i][13],
						pokemon[i][14], //adjust for level (bulbasaur/squirtle have 2nd move on level 5 instead of on level 1)
						pokemon[i][15],
						pokemon[i][16]
					);
				}
			}
			//document.getElementById("player").innerHTML = pokemonOne.hp; --> to check whether getHP() function is working
			
			player.activePokemon1Level = 5;
			player.activePokemon1Name = player.starterPokemon;
			if (player.starterPokemon == "BULBASAUR") {
				starterPokemonRival = "CHARMANDER";
				rival.starterPokemonRival = "CHARMANDER";
			} else if (player.starterPokemon == "CHARMANDER") {
				starterPokemonRival = "SQUIRTLE";
				rival.starterPokemonRival = "SQUIRTLE";
			} else if (player.starterPokemon == "SQUIRTLE") {
				starterPokemonRival = "BULBASAUR";
				rival.starterPokemonRival = "BULBASAUR";
			} else {
				rival.starterPokemonRival = "BULBASAUR";
			}
			rival.activePokemon1Level = 5;
			rival.activePokemon1Name = rival.starterPokemonRival;
			
 			for (i=0; i<pokemon.length; i++) {
				if (pokemon[i][1] == rival.starterPokemonRival) {
					pokemonOneRival = new createPokemon(
						pokemon[i][0], 
						pokemon[i][1],
						5,
						pokemon[i][3],
						pokemon[i][4],
						pokemon[i][5],
						pokemon[i][6],
						pokemon[i][7], //adjust hp for level 5
						pokemon[i][8], //adjust attack for level 5
						pokemon[i][9], //adjust defense defense for level 5
						pokemon[i][10], //adjust spattack for level 5
						pokemon[i][11], //adjust spdefense for level 5
						pokemon[i][12], //adjust speed for level 5
						pokemon[i][13],
						pokemon[i][14], //adjust for level (bulbasaur/squirtle have 2nd move on level 5 instead of on level 1)
						pokemon[i][15],
						pokemon[i][16]
					);
				}
			}
			
			startInfo = new Array();
			startInfo = [
				player.name, 
				player.gender, 
				rival.name, 
				player.starterPokemon,
				player.activePokemon1Level, 
				player.activePokemon1Name,
				rival.starterPokemonRival,
			]
			document.getElementById("pokemonRed").style.display = "block";
			//return ; //is this necessary?
		} else if(counter == 5){
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			document.getElementById("imageStory").style.display = "block";
		} else if(counter == 16) {
			imgPlayer = "images/FireRed_" + player.gender + ".png";
			document.getElementById("imgPlayer").src = imgPlayer;
			// picture of boy from http://www.marriland.com/forums/pokemon-1st-2nd-3rd-generation/pokemon-firered-leafgreen/514280-girl-or-boy
			// picture of girl from http://bulbapedia.bulbagarden.net/wiki/Leaf_%28game%29
			document.getElementById("imgPlayer").style.display = "block";
		} else if(counter == 17) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
		} else if(counter == 20) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
		} else if(counter == 23) {
			document.getElementById("imageStory").src = "images/OwnRoom.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 33) {
			document.getElementById("imageStory").src = "images/Mom.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 34) {
			if (playerGender == "boy"){
				document.getElementById("pokemonRed").innerHTML = "MOM: ...Right. <br/> All " + player.gender + "s leave home someday. "
			} else {
				document.getElementById("pokemonRed").innerHTML = "MOM: ...Right. <br/> All " + player.gender + "s dream of travelling. "
			}
		} else if(counter == 38) {
			document.getElementById("imageStory").src = "images/PalletTown.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 39) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
		} else if(counter == 41) {
			document.getElementById("imageStory").src = "images/PalletTown.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 42) {
			document.getElementById("imageStory").src = "images/PalletTown_2.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 43) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
		} else if(counter == 44) {
			document.getElementById("imageStory").src = "images/PalletTown_3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 45) {
			document.getElementById("imageStory").src = "images/PalletTown_4.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 48) {
			document.getElementById("imageStory").src = "images/PalletTown_5.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 49) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 61) {
			starterPokemon = player.activePokemon1Name;
			if (starterPokemon == "BULBASAUR") {
				document.getElementById("pokemonRed").innerHTML = "I see! "+ player.starterPokemon + " is your choice. <br/> It's very easy to raise. ";
			} else if (starterPokemon == "CHARMANDER") {
				document.getElementById("pokemonRed").innerHTML = "Ah! " + player.starterPokemon + " is your choice. <br/> You should raise it patiently. ";
			} else {
				document.getElementById("pokemonRed").innerHTML = "Hm! " + player.starterPokemon + " is your choice. <br/> It's one worth raising. ";
			}
		} else if(counter == 62) {
			document.getElementById("activePokemon").style.display = "inline";
			document.getElementById("imgActivePokemon1").src = "images/pokemonIcons/" + player.activePokemon1Name + ".gif";
			document.getElementById("activePokemon1").innerHTML = "Lvl. " + player.activePokemon1Level + " " + player.activePokemon1Name;
			return starterPokemon;
		} else if(counter == 63) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
		} else if(counter == 65) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
		} else if(counter == 67) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab2.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 68) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
		} else if(counter == 70) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 73) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
		} else if(counter == 82) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter >= text.length + 1) {
			// End the game
			elemStoryImage.src = "images/HallOfFame.png"; //screenshot from https://www.youtube.com/watch?v=Uq9LTpj91Rw
			elem.innerHTML = "Congratulations, you have won the game. <br/> Welcome to the HALL OF FAME! ";
			//counter = 0;
			document.getElementById("gameName").style.display = "block";
			document.getElementById("buttonStart").style.display = "block";
			return;
		}
	}
	counter = 0;
}


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


// use story from Pokemon Red
// get stats from Pokemon from text file?
// http://www.javascriptkit.com/javatutors/time3.shtml