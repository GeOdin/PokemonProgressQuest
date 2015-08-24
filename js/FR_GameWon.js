/* FR_GameWon.js
 * Javascript file for when the game is won.
 * Created on 10-08-2015
 * by GeOdin
 *
 * This file contains the function:
 * gameWon(player);
 */

 function gameWon(player, location) {
	// End the game
	// Create the Route 1 location
	locationName = "Hall of Fame";
	for (i=0; i<locations.length; i++) {
		if (locations[i][0] == locationName) {
			location = new createLocation(
				locations[i][0], 
				locations[i][1], 
				locations[i][2], 
				locations[i][3], 
				locations[i][4], 
				locations[i][5], 
				locations[i][6], 
				locations[i][7], 
				locations[i][8], 
				locations[i][9],
				locations[i][10],
				locations[i][11],
				locations[i][12]
			);
		};
	};
	document.getElementById("locationName").innerHTML = "<h2>" + location.Name + "</h2>";
	document.getElementById("imageStory").src = "images/HallOfFameBackground.png"; //screenshot from https://www.youtube.com/watch?v=Uq9LTpj91Rw
	for (i=0; i<6; i++) {
		var activePokemonNumber = i + 1;
		var activePokemonCall = "activePokemon" + activePokemonNumber;
		if (player[activePokemonCall] != "") {
			document.getElementById("pokemonOnTop" + activePokemonNumber).src = "images/pokemonIconsTransparent/" + player[activePokemonCall].Name + ".png";
			document.getElementById("pokemonOnTop" + activePokemonNumber).style.display = "inline";
		};
	};
	// add confetti on top of Hll of Fame image (z-index: 8;)
	document.getElementById("pokemonRed").innerHTML = "CONGRATULATIONS! <br/> Welcome to the HALL OF FAME! ";
	document.getElementById("badgesTitle").style.display = "block";
	document.getElementById("badge1").style.display = "block"; // image from http://bulbapedia.bulbagarden.net/wiki/Badge
	document.getElementById("badge2").style.display = "block"; // image from http://bulbapedia.bulbagarden.net/wiki/Badge
	document.getElementById("badge3").style.display = "block"; // image from http://bulbapedia.bulbagarden.net/wiki/Badge
	document.getElementById("badge4").style.display = "block"; // image from http://bulbapedia.bulbagarden.net/wiki/Badge
	document.getElementById("badge5").style.display = "block"; // image from http://bulbapedia.bulbagarden.net/wiki/Badge
	document.getElementById("badge6").style.display = "block"; // image from http://bulbapedia.bulbagarden.net/wiki/Badge
	document.getElementById("badge7").style.display = "block"; // image from http://bulbapedia.bulbagarden.net/wiki/Badge
	document.getElementById("badge8").style.display = "block"; // image from http://bulbapedia.bulbagarden.net/wiki/Badge
/*			document.getElementById("buttonStart").style.display = "block";*/
};