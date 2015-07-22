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
// show map where you currently are
// use infowindows instead of alerts and/or prompts?
// use male / female screenshots depending on playerGender
// make Pokemonnames, stats and moves all uppercase?
// shorten part about getting potion from room
// include documentation for all files
// create a variable for which pokemon are already caught
// set up some sort of in-game PC-system

function startGame() { 

	// Variables 
	var elem = document.getElementById("pokemonRed");
	var counter = 0;
	var playerGender;
	var showPlayerStats;
	var playerName = "";
	var rivalName = "";
	var starterPokemon = "";
	var starterPokemonRival = "";
	var startInfo;
	var pokemonOne;
	var pokemonOneRival;
	
	
	// Start game
	confirm("Are you ready to play? \nIt takes 5 seconds to start the game. "); // game also starts if not confirmed
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
			"...is inhabited far and wide by creatures called POKeMON. ",
			"For some people, POKeMON are pets. <br/> Others use them for battling. ",
			"As for myself... ",
			"I study POKeMON as a profession. ",

			// Introduction player
			"But first, tell me a little about <br/> yourself. ",
			"",
			"Right... <br/> So your name is " + playerName + ".", 
			
			// Introduction rival
			"This is my grandson.",
			"He's been your rival since you both <br/> were babies. ",
			"That's right! I remember now! <br/> His name is " + rivalName + "! ",
			
			playerName + "!",
			"Your very own POKeMON legend is <br/> about to unfold! ",
			"A world of dreams and adventures <br/> with POKeMON awaits! Let's go! ",
			
			/////////////////
			// PALLET TOWN //
			/////////////////
			// Own House
			"You walk to your PC. ", 
			playerName + " booted up the PC. ",
			"What would you like to do? ",
			"ITEM STORAGE ",
			"WITHDRAW ITEM ",
			"Take out items from the PC. ",
			"POTION is selected. ", 
			"POTION x 1",
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
			rivalName + ": What, it's only " + playerName + "? <br/> Gramps isn't around. ",
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
			"Go! " + starterPokemon + " ! ", //72
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
			
		];		

		elem.innerHTML = text[counter];

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
			
			// Get the rival's name
			rivalName = prompt("...Erm, what was his name now? ", "RIVAL's NAME");
			while (rivalName.length < 1) {
				rivalName = prompt("RIVAL's NAME? ", ""); // alert("...Er, was it " + rivalName + "? "); //insert Yes/no option?
			}
			
			// Show the player's name, gender and rival's name
			showPlayerStats = playerName + " (" + playerGender + ") vs. " + rivalName;
			document.getElementById("player").style.display = "block";
			document.getElementById("player").innerHTML = showPlayerStats;
			
			// Get the starter Pokemon
			while(!(starterPokemon == "BULBASAUR" | starterPokemon == "CHARMANDER" | starterPokemon == "SQUIRTLE")) {
				starterPokemon = prompt("Which Pokemon do you want as a starter? ", "Bulbasaur / Charmander / Squirtle");
				starterPokemon = starterPokemon.toUpperCase();
			}
			
 			for (i=0; i<pokemon.length; i++) {
				if (pokemon[i][1] == starterPokemon) {
					pokemonOne = new createPokemon(
						pokemon[i][0], 
						pokemon[i][1],
						5,
						pokemon[i][3],
						pokemon[i][4],
						pokemon[i][5],
						pokemon[i][6],
						pokemon[i][7], //adjust hp for level 5 //getHP() function?
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
			
			activePokemon[1][0] = 5;
			activePokemon[1][1] = starterPokemon;
			if (starterPokemon == "BULBASAUR") {
				starterPokemonRival = "CHARMANDER";
			} else if (starterPokemon == "CHARMANDER") {
				starterPokemonRival = "SQUIRTLE";
			} else if (starterPokemon == "SQUIRTLE") {
				starterPokemonRival = "BULBASAUR";
			} else {
				starterPokemonRival = "BULBASAUR";
			}
			
 			for (i=0; i<pokemon.length; i++) {
				if (pokemon[i][1] == starterPokemonRival) {
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
				playerName, 
				playerGender, 
				rivalName, 
				activePokemon[1][0], 
				activePokemon[1][1],
				starterPokemonRival,
			]
			return ; //is this necessary?
		} else if(counter == 5){
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			document.getElementById("imageStory").style.display = "block";
		} else if(counter == 17) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
		} else if(counter == 20) {
			document.getElementById("imageStory").src = "images/FireRed_" + playerGender + ".png";
			// picture of boy from http://www.marriland.com/forums/pokemon-1st-2nd-3rd-generation/pokemon-firered-leafgreen/514280-girl-or-boy
			// picture of girl from http://bulbapedia.bulbagarden.net/wiki/Leaf_%28game%29
		} else if(counter == 23) {
			document.getElementById("imageStory").src = "images/OwnRoom.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 33) {
			document.getElementById("imageStory").src = "images/Mom.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 34) {
			if (playerGender == "boy"){
				document.getElementById("pokemonRed").innerHTML = "MOM: ...Right. <br/> All " + playerGender + "s leave home someday. "
			} else {
				document.getElementById("pokemonRed").innerHTML = "MOM: ...Right. <br/> All " + playerGender + "s dream of travelling. "
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
			starterPokemon = activePokemon[1][1];
			if (starterPokemon == "BULBASAUR") {
				document.getElementById("pokemonRed").innerHTML = "I see! "+ starterPokemon + " is your choice. <br/> It's very easy to raise. ";
			} else if (starterPokemon == "CHARMANDER") {
				document.getElementById("pokemonRed").innerHTML = "Ah! " + starterPokemon + " is your choice. <br/> You should raise it patiently. ";
			} else {
				document.getElementById("pokemonRed").innerHTML = "Hm! " + starterPokemon + " is your choice. <br/> It's one worth raising. ";
			}
		} else if(counter == 62) {
			document.getElementById("activePokemon").style.display = "block";
			document.getElementById("activePokemon1Level").innerHTML = activePokemon[1][0];
			document.getElementById("activePokemon1Name").innerHTML = activePokemon[1][1];
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
			//damage calculation for battle --> http://www.psypokes.com/dex/damage.php
		} else if(counter >= text.length + 1) {
			// End the game
			document.getElementById("imageStory").src = "images/FireRed_" + playerGender + ".png";
			elem.innerHTML = "Congratulations, you have won the game. <br/> Welcome to the HALL OF FAME! "; 
		}
	}
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