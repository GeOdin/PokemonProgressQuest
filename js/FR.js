/* 
pokemonRed.js
Javascript code for the Pokemon FireRed Progress Quest
Made on 20-07-2015
by GeOdin */

// This includes the functions:
//// startGame();
////// change();

// Story used from Pokemon FireRed
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
	var confirmStartGame;// still necessary?
	var elem = document.getElementById("pokemonRed"); //create variables for other document.getElementById elements
	var elemStoryImage = document.getElementById("imageStory"); //create variables for other document.getElementById elements
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
	
	
	// Start game
/*	if (confirm("Are you ready to play? \nIt takes 5 seconds to start the game. ") == true) {
		confirmStartGame = true;
	} else {
		return;
	}*/
	var gamePokemonFireRed = window.setInterval(change, 1); //5000 for 5 seconds in final version / 3000 for 3 seconds; //1 for quick testing purposes; //1000 for slow testing purposes;
	gamePokemonFireRed;

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
			"Let's begin with your name. <br/> What is it? ",
			"Right... <br/> So your name is " + playerName + ".", //16
			
			// Introduction rival
			"This is my grandson.",
			"He's been your rival since you both <br/> were babies. ", //18
			"...Erm, what was his name now? ",
			"That's right! I remember now! <br/> His name is " + rivalName + "! ",//20
			
			playerName + "!",
			"Your very own POKeMON legend is <br/> about to unfold! ",
			"A world of dreams and adventures <br/> with POKeMON awaits! Let's go! ",
			
			/////////////////
			// PALLET TOWN // //http://bulbapedia.bulbagarden.net/wiki/File:Pallet_Town_FRLG.png (not yet used, in folder PalletTown in folder images)
			///////////////// //prof oaks lab --> http://bulbapedia.bulbagarden.net/wiki/File:Professor_Oak_Lab_inside_FRLG.png (not yet used, in folder PalletTown in folder images)
			// Own House
			"You walk to your PC. ", 
			"You withdraw the POTION from your PC. ", //25
			"You walk down to your mom. ", 
			"", 
			"It said so on TV. ",
			"Oh yes. PROF. OAK, next door, was <br/> looking for you. ",
			
			// Walk to PROF. OAK's and getting your first Pokemon
			"You walk out of your house. ", //30
			"", 
			"You walk into " + rivalName + ". ", 
			rivalName + ": What, it's only " + playerName + "? <br/> Gramps isn't around. ",
			"",
			"You try to walk out of PALLET TOWN. ",//35
			"OAK: Hey! Wait! <br/> Don't go out! ",
			"",
			"OAK: It's unsafe! <br/> Wild POK&eacute;MON live in tall grass! ",
			"You need your own POK&eacute;MON for <br/> your protection. ",
			"I know! <br/> Here, come with me! ",//40
			"You walk with PROF. OAK to his lab. ",
			rivalName + ": Gramps! <br/> I'm fed up with waiting! ",
			"OAK: " + rivalName + "? <br/> Let me think... ",
			"Oh, that's right, I told you to <br/> come! Just wait! ",
			"Here, " + playerName + ".",//45
			"There are three POK&eacute;MON here. ",
			"Haha! ",
			"The POK&eacute;MON are held inside <br/> these POK&eacute; BALLS. ",
			"When I was young, I was a serious <br/> POK&eacute;MON TRAINER. ",
			"But now, in my old age, I have <br/> only these three left. ",//50
			"You can have one. <br/> Go on, choose! ",
			rivalName + ": Hey! Gramps! No fair! <br/> What about me? ",
			"OAK: Be patient, " + rivalName + ". <br/> You can have one, too! ",
			"", 
			playerName + " received the " + starterPokemon + " <br/> from PROF. OAK! ", //55
			rivalName + ": I'll take this one, then! ",
			rivalName + " received the " + starterPokemonRival + " <br/> from PROF. OAK! ", 
			
 			// Your first battle
			"OAK: If a wild POK&eacute;MON appears, <br/> your POK&eacute;MON can battle it. ",
			"With it at your side, you should be <br/> able to reach the next town. ",
			"", //60
			rivalName + ": Wait, " + playerName + "! <br/> Let's check out our POK&Eacute;MON!",
			"Come on, I'll take you on! ",
			"RIVAL " + rivalName + " <br/> would like to battle! ",
			"RIVAL " + rivalName + " sent <br/> out " + starterPokemonRival + "!", 
			"Go! " + starterPokemon + "! ", //65
			"OAK: Oh, for Pete's sake... <br/> So pushy, as always. ",
			playerName + ". ",
			"You've never had a POK&eacute;MON battle <br/> before, have you? ",
			"A POK&eacute;MON battle is when TRAINERS <br/> pit their POK&eacute;MON against each ",
			"other. ", //70
			"The TRAINER that makes the other <br/> TRAINER's POK&eacute;MON faint by lowering ",
			"their HP to '0', wins. ",
			"But rather than talking about it, <br/> you'll learn more from experience. ",
			"Try battling and see for yourself. ",
			"", //75
			"OAK: Inflicting damage on the foe <br/> is the key to any battle. ",
			"",
			""
			
			
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
/*			document.getElementById("imageStory").style.display = "none";*/
			playerName = "";
			rivalName = "";
			starterPokemon = "";
			starterPokemonRival = "";
/*			document.getElementById("activePokemon").style.display = "none";
			document.getElementById("player").style.display = "none";
			document.getElementById("imgPlayer").style.display = "none";
			document.getElementById("imageStory").style.display = "none";
			document.getElementById("pokemonRed").style.display = "block";
			document.getElementById("activePokemon1Td").style.display = "none";
			document.getElementById("pokedexInfo").style.display = "none";
			document.getElementById("pokedexInfo").innerHTML = "";*/
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
			
			// Get the starter Pokemon
			while(!(starterPokemon == "BULBASAUR" | starterPokemon == "CHARMANDER" | starterPokemon == "SQUIRTLE")) {
				starterPokemon = prompt("Which Pokemon do you want as a starter? ", "Bulbasaur / Charmander / Squirtle");
				starterPokemon = starterPokemon.toUpperCase();
			}
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
							pokemonStats[i][17]
						);
					}
				}
			};
			
 			// Create a player object
			player = new createPlayer (
				playerName,
				playerGender,
				5000, //is this the correct starting amount?
				starterPokemon, // name of the starterPokemon
				pokemonOne, // active pokemon 1
				"", // active pokemon 2
				"", // active pokemon 3
				"", // active pokemon 4
				"", // active pokemon 5
				"" // active pokemon 6
			); 

			// Get the rival's name
			rivalName = prompt("...Erm, what was his name now? ", "RIVAL's NAME");
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
							pokemonStats[i][17]
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

			document.getElementById("pokemonRed").style.display = "block";
		} else if(counter == 5){
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			document.getElementById("imageStory").style.display = "block";
		} else if(counter == 16) {
 			// Show the player's name and gender
			showPlayerStats = player.Name;
			document.getElementById("player").innerHTML = "<h3>" + showPlayerStats + "</h3>";
			document.getElementById("player").style.display = "block";
			imgPlayer = "images/FireRed_" + player.gender + ".png";
			document.getElementById("imgPlayer").src = imgPlayer;
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
		} else if(counter == 17) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
		} else if(counter == 20) {
 			// Show the player's name, gender and rival's name
			showPlayerStats = "<h3>" + player.Name + " vs. " + rival.Name + "</h3>";
			document.getElementById("player").innerHTML = showPlayerStats;
		} else if(counter == 21) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
		} else if(counter == 24) {
			document.getElementById("imageStory").src = "images/OwnRoom.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 26) {
			document.getElementById("imageStory").src = "images/Mom.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 27) {
			if (playerGender == "boy"){
				document.getElementById("pokemonRed").innerHTML = "MOM: ...Right. <br/> All " + player.gender + "s leave home someday. ";
			} else {
				document.getElementById("pokemonRed").innerHTML = "MOM: ...Right. <br/> All " + player.gender + "s dream of travelling. ";
			}
		} else if(counter == 31) {
				document.getElementById("locationName").innerHTML = "<h2> Pallet Town </h2>"; // <p> <h3> Pallet Town </h3> </p> does not work 
				document.getElementById("locationName").style.display = "block";
			document.getElementById("imageStory").src = "images/PalletTown.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 32) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
		} else if(counter == 34) {
			document.getElementById("imageStory").src = "images/PalletTown.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 35) {
			document.getElementById("imageStory").src = "images/PalletTown_2.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 36) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
		} else if(counter == 37) {
			document.getElementById("imageStory").src = "images/PalletTown_3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 38) {
			document.getElementById("imageStory").src = "images/PalletTown_4.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 41) {
			document.getElementById("imageStory").src = "images/PalletTown_5.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 42) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 54) {
			// Show starter pokemon
			// starterPokemon = player.activePokemon1.Name;
			if (starterPokemon == "BULBASAUR") {
				document.getElementById("pokemonRed").innerHTML = "I see! "+ player.starterPokemon + " is your choice. <br/> It's very easy to raise. ";
			} else if (starterPokemon == "CHARMANDER") {
				document.getElementById("pokemonRed").innerHTML = "Ah! " + player.starterPokemon + " is your choice. <br/> You should raise it patiently. ";
			} else {
				document.getElementById("pokemonRed").innerHTML = "Hm! " + player.starterPokemon + " is your choice. <br/> It's one worth raising. ";
			}
/*			document.getElementById("imgActivePokemon1").src = "images/pokemonIcons/" + pokemonOne.Name + ".gif"; // player.starterPokemon works (is a String);*/
			document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;// + "<br>" + rival.activePokemon1.move2.category + " <br/> " + player.activePokemon1.move1.Name + player.activePokemon1.move2.Type + player.activePokemon1.move3.category + player.activePokemon1.move4.Name; // does not work if pokemon has "" for a movename//works // player.activePokemon1.moveOne.Name works // http://www.w3schools.com/js/tryit.asp?filename=tryjs_objects_method;
			document.getElementById("activePokemon").style.display = "block";
			if (pokemonCaught[player.activePokemon1.Name] == 0) {
				pokemonCaught[player.activePokemon1.Name] = 1;
			};
			document.getElementById("pokemonCaught").innerHTML = "<h3> Pok&eacute;dex: " + pokemonCaught.total() + "/151";
			document.getElementById("pokemonCaught").style.display = "block";
			document.getElementById("pokedex" + pokemonOne.Name).style.display = "block";
		} else if(counter == 56) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
		} else if(counter == 58) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
		} else if(counter == 60) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab2.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 61) {
			document.getElementById("imageStory").src = "images/Gary.png";// picture of Gary from http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
		} else if(counter == 63) {
			document.getElementById("imageStory").src = "images/PalletTown_ProfOakLab3.png"; // screenshot from Pokemon FireRed game from GAME FREAK inc.
		} else if(counter == 66) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
		} else if(counter == 75) {
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
					document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
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
				document.getElementById("activePokemon1").innerHTML = player.activePokemon1.Name + "<br/> <img src=images/pokemonIcons/" + player.activePokemon1.Name + ".gif /> <br/>Lvl. " + player.activePokemon1.level + " <br/> HP: " + player.activePokemon1.currentHP + "/" + player.activePokemon1.maxHP;
			};
/*			//pause current setInterval --> http://stackoverflow.com/questions/8432127/stop-setinterval-function-for-an-amount-of-time
			pokemonBattleStartFirst(player, rival); //this is not functional; check whether all objects are proper objects
			//continue with current setInterval*/
		} else if (counter == 76) {
			document.getElementById("imageStory").src = "images/Professor_Oak_XY.png"; // picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
		} else if (counter == 77) {
			// 1st battle
			firstPokemonBattle(player, rival); // first battle works, except that the usage of moves is not properly displayed; you also don't see the diminishing of HP, except for the end
			// perhaps I do need to use clearInterval to clear the current interval? or also use a var textFirstBattle that the function can scroll through --- http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_clearinterval
			// add opponent pokemon with currentHP/maxHP somewhere
		} else if (counter == 78) {
			document.getElementById("pokemonRed").innerHTML = rival.activePokemon1.Name + " fainted! ";
		} else if(counter >= text.length + 1) {
			// End the game
			document.getElementById("locationName").innerHTML = "<h2> Hall of Fame </h2>";
			elemStoryImage.src = "images/HallOfFame.png"; //screenshot from https://www.youtube.com/watch?v=Uq9LTpj91Rw
			elem.innerHTML = "CONGRATULATIONS! <br/> Welcome to the HALL OF FAME! ";
			//counter = 0;
/*			document.getElementById("buttonStart").style.display = "block";*/
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


// get stats from Pokemon from text file?
// http://www.javascriptkit.com/javatutors/time3.shtml