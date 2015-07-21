/* 
pokemonRed.js
Javascript code for the Pokemon FireRed Progress Quest
Made on 20-07-2015
by GeOdin */
//change pokemonRed in pokemonFireRed
// movie of start of game: https://www.youtube.com/watch?v=yUS1IcC5CBY
// make sure to block the start button / ask for refreshing the game when it's pressed
// in var tekst, Pokemon can be POK&eacute;MON, probably
// perhaps ask gender, name and starter at beginning, so that game does no longer gets interrupted
// shorten time of setInterval for testing purposes?
// show active pokemon and their levels
// show map where you currently are

function startGame() { 
	// Variables
	var playerGender;
	var showPlayerStats;
	var playerName = "";
	// var rivalName = "";
	// var starterPokemon = "";
/* 	var gameWon = "false";
	var progress = 0; */
	
	confirm("Are you ready to play? \nIt takes 5 seconds to start the game. ");
	var counter = 0;
	var elem = document.getElementById("pokemonRed");
	window.setInterval(change, 1000); //5000 for 5 seconds in final version;
	
	function change() {
		// Variables
		var text = [
			// Short introduction
			"In the world which you are about to <br/> enter, you will embark on a grand <br/> adventure with you as the hero. <br/> <br/> Speak to people and check things <br/> wherever you go, be it towns, roads, <br/> or caves. Gather information and <br/> hints from every source. ", 
			"New paths will open to you by helping <br/> people in need, overcoming challenges, <br/> and solving mysteries. <br/> <br/> At times, you will be challenged by <br/> others and attacked by wild creatures. <br/> Be brave and keep pushing on. ",
			"Through your adventure, we hope <br/> that you will interact with all sorts <br/> of people and achieve personal growth. <br/> That is our biggest objective. <br/> <br/> Let your adventure begin! ",
			
			//Show picture of Professor Oak from http://bulbapedia.bulbagarden.net/wiki/Professor_Oak_%28anime%29
			"Hello, there! <br/> Glad to meet you! ",
			"Welcome to the world of POKeMON! ",
			"My name is OAK. ",
			"People affectionately refer to me <br/> as the POKeMON PROFESSOR. ",
			"This world...",
			"...is inhabited far and wide by creatures called POKeMON. ",
			"For some people, POKeMON are pets. <br/> Others use them for battling. ",
			"As for myself... ",
			"I study POKeMON as a profession. ",
			"But first, tell me a little about <br/> yourself. ",
			
			"", 
			
			"Right... <br/>So your name is " + playerName + ".", 
			
			"You walk towards your PC. ", 
			"You booted up the PC. ",
			"What would you like to do? ",
			"ITEM STORAGE ",
			"Take out items from the PC. ",
			"POTION x 1" 
		];		
		
		elem.innerHTML = text[counter];
			counter++;
			if(counter == 4){
				document.getElementById("imageStory").src = "images/Professor_Oak_XY.png";
				document.getElementById("imageStory").style.display = "block";
			}
			if(counter == 13){
				// Get the player's gender
				// currently, you can cancel this and the picture of oak stays
				while(!(playerGender == "boy" | playerGender == "girl")) { // while(playerGender === "boy" | playerGender === "b" | playerGender === "male" | playerGender === "m" | playerGender === "girl" | playerGender === "g" | playerGender === "female" | playerGender === "f") {} // get this to work!
					playerGender = prompt("Now tell me. Are you a boy? \nOr are you a girl? ", "Boy / girl");
					playerGender = playerGender.toLowerCase();
				}
				showPlayerStats = playerGender;
				document.getElementById("imageStory").src = "images/FireRed_" + playerGender + ".png";
				// picture of boy from http://www.marriland.com/forums/pokemon-1st-2nd-3rd-generation/pokemon-firered-leafgreen/514280-girl-or-boy
				// picture of girl from http://bulbapedia.bulbagarden.net/wiki/Leaf_%28game%29
				document.getElementById("player").innerHTML = showPlayerStats;
				return playerGender;
			}
			if(counter == 14){
				// Get the player's name
				while (playerName.length < 1) { //typeof playerName == "undefined" | 
					playerName = prompt("Let's begin with your name. \nWhat is it? ", "YOUR NAME?");
					// return playerName;
				}
				//window.playerName = playerName;
				showPlayerStats = playerName + " (" + playerGender + ")"; //showPlayerStats instead of playerGender
				document.getElementById("player").innerHTML = showPlayerStats;
				return playerName;
			}
			if(counter >= text.length + 1) {
				// End the game
				elem.innerHTML = "Congratulations, you have won the game. <br/> Welcome to the HALL OF FAME! "; 
			}
	} 
	
/*  // Get the player's name
	playerName = prompt("Let's begin with your name. \nWhat is it? ", "Player's Name");
	while (playerName.length < 1) {
		playerName = prompt("YOUR NAME? ", "");
	}
	showPlayerStats = playerName + " (" + playerGender + ")";
	document.getElementById("player").innerHTML = showPlayerStats;
	document.getElementById("pokemonRed").innerHTML = "Hello " + playerName + " and welcome to the Pok&eacute;mon Red Progress Quest! ";
	alert("Right... \nSo your name is " + playerName + ". "); //insert Yes/no option?
	
	document.getElementById("imageStory").src = "images/FireRed_Gary.png";// http://bulbapedia.bulbagarden.net/wiki/Blue_%28game%29
	alert("This is my grandson.");// change picture to gary
	alert("He's been your rival since you both \nwere babies. ");
	
 	// Get the rival's name
	rivalName = prompt("...Erm, what was his name now? ", "RIVAL's NAME");
	while (rivalName.length < 1) {
		rivalName = prompt("RIVAL's NAME? ", "");
	}
	showPlayerStats = playerName + " (" + playerGender + ") vs. " + rivalName;
	document.getElementById("player").innerHTML = showPlayerStats;
	alert("...Er, was it " + rivalName + "? "); //insert Yes/no option?
	alert("That's right! I remember now! \nHis name is " + rivalName + "! ");
	
	
	document.getElementById("imageStory").src = "images/FireRed_" + playerGender + ".png";
	// picture of boy from http://www.marriland.com/forums/pokemon-1st-2nd-3rd-generation/pokemon-firered-leafgreen/514280-girl-or-boy
	// picture of girl from http://bulbapedia.bulbagarden.net/wiki/Leaf_%28game%29
	alert(playerName + "!"); // change picture to player
	alert("Your very own POKeMON legend is \nabout to unfold! ");
	alert("A world of dreams and adventures \nwith POKeMON awaits! Let's go! ");  */

/* 	var text = [
		"In the world which you are about to <br/> enter, you will embark on a grand <br/> adventure with you as the hero. <br/> <br/> Speak to people and check things <br/> wherever you go, be it towns, roads, <br/> or caves. Gather information and <br/> hints from every source. ", 
		"New paths will open to you by helping <br/> people in need, overcoming challenges, <br/> and solving mysteries. <br/> <br/> At times, you will be challenged by <br/> others and attacked by wild creatures. <br/> Be brave and keep pushing on. ",
		"Through your adventure, we hope <br/> that you will interact with all sorts <br/> of people and achieve personal growth. <br/> That is our biggest objective. <br/> <br/> Let your adventure begin! ",
		"You walk towards your PC. ", 
		"You booted up the PC. ",
		"What would you like to do? ",
		"ITEM STORAGE ",
		"Take out items from the PC. ",
		"POTION x 1"
	];
	var counter = 0;
	var elem = document.getElementById("pokemonRed");
	window.setInterval(change, 5000); //5 seconds
	function change() {
		elem.innerHTML = text[counter];
			counter++;
			if(counter >= text.length + 1) {
				// End the game
				elem.innerHTML = "Congratulations, you have won the game. <br/> Welcome to the HALL OF FAME! "; 
			}
	}  */
}

/* 	// Get the starter Pokemon
	while(!(starterPokemon == "bulbasaur" | starterPokemon == "charmander" | starterPokemon == "squirtle")) { // while(playerGender === "boy" | playerGender === "b" | playerGender === "male" | playerGender === "m" | playerGender === "girl" | playerGender === "g" | playerGender === "female" | playerGender === "f") {} // get this to work!
		var starterPokemon = prompt("Which Pokemon do you want as a starter? ", "Bulbasaur / Charmander / Squirtle");
		starterPokemon = starterPokemon.toLowerCase();
	}
	document.getElementById("player").innerHTML = playerName + " - " + playerGender + " - " + starterPokemon; */
	
/* 	// Get the player's gender
	while(!(playerGender == "boy" | playerGender == "girl")) { // while(playerGender === "boy" | playerGender === "b" | playerGender === "male" | playerGender === "m" | playerGender === "girl" | playerGender === "g" | playerGender === "female" | playerGender === "f") {} // get this to work!
		var playerGender = prompt("Are you a boy or a girl? ", "Boy / girl");
		playerGender = playerGender.toLowerCase();
	}
	document.getElementById("player").innerHTML = playerName + " - " + playerGender; */
	
/* 	for (i = 0; i < 1000; i++) {
		//document.getElementById("pokemonRed").innerHTML = playerName;
		
		if (i == 0) {
			confirm("Are you ready to play? ");
		} else if (i == 1) {
				while (playerName == "") {
					playerName = prompt("Please enter your name. ", "Player Name");
				}
				document.getElementById("pokemonRed").innerHTML = "Hello " + playerName + " and welcome to the Pok&eacute;mon Red Progress Quest! ";
		} else if (i == 2) {
				var playerGender = "";
				while(!(playerGender == "boy" | playerGender == "girl")) { // while(playerGender === "boy" | playerGender === "b" | playerGender === "male" | playerGender === "m" | playerGender === "girl" | playerGender === "g" | playerGender === "female" | playerGender === "f") {} // get this to work!
					var playerGender = prompt("Are you a boy or a girl? ", "Boy / girl");
					playerGender = playerGender.toLowerCase();
		} else {
			document.getElementById("pokemonRed").innerHTML = "Congratulations, you have won the game! "; 
		}
		progress = progress + 1;
	} */
	
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
	
/* 	function countdown(remaining) {
		if(remaining <= 0)
			var textIntro2 = "New paths will open to you by helping <br/> people in need, overcoming challenges, <br/> and solving mysteries. <br/> <br/> At times, you will be challenged by <br/> others and attacked by wild creatures. <br/> Be brave and keep pushing on. ";
			document.getElementById("pokemonRed").innerHTML = textIntro2;
		document.getElementById("countdown").innerHTML = remaining;
		setTimeout(function(){ countdown(remaining - 1); }, 10000); // 10 seconds
	};  */
	
/* 	var startTime = Performance.now();
	startString = startTime.toString();
	document.getElementById("pokemonRed").innerHTML = startTime; */
/* 	var t0 = performance.now();
	document.getElementById("pokemonRed").innerHTML = "Hello";
	var t1 = performance.now();
	document.getElementById("pokemonRed").innerHTML = "Hello"; */

	// Show intro
	
//	setTimeout(function( document.getElementById("pokemonRed").innerHTML = textIntro2; ){, 10000);}
	
	// Get Player Name
	//var playerName = "";

	// Get Player Gender

		//document.getElementById("pokemonRed").innerHTML = playerGender;
/* 		if (playerGender == "boy") { // (playerGender == "boy" | playerGender == "b" | playerGender == "male" | playerGender == "m")
			playerGender = "boy";
			// return playerGender;
		} else if (playerGender == "girl") { // (playerGender == "girl" | playerGender == "g" | playerGender == "female" | playerGender == "f")
			playerGender = "girl";
			// return playerGender;
		} else {
			playerGender = "";
		} */


// use story from Pokemon Red
// get stats from Pokemon from text file
//http://www.javascriptkit.com/javatutors/time3.shtml
// use infowindows instead of alerts and/or prompts?