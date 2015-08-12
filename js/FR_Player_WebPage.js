/* FR_Player_WebPage.js
 * Javascript file to get information about the player when clicked on the player on the main game screem
 * created on 2015-08-11
 * by GeOdin
 *
 * It contains the function:
 * createPlayerWebPage();
 */

function createPlayerPage2(){
	playerName = "Madeleine";
	playerMoney = "3000";
	playerGender = "girl";
	//document.getElementById("imageStory").src="images/wildPokemon/ARCANINE.png";
	// create player page
	var playerWindow = window.open("", "MsgWindow", "width=200, height=300");
	playerWindow.document.write("
		Hello! :)
	");
};

/*

    playerWindow.document.write("
    	<html>
	    	<head>
				<link type='text/css' rel='stylesheet' href='stylesheetPokemonFireRedPlayer.css'/>
				<script type='text/javascript'>
					function close_window() {
		    			close();
		    		}
				</script>
	    		<title>
	    			Player: "+playerName+"
	    		</title>
    		</head>
    		<body>
				<a href='#' onclick='close_window()' style='text-decoration: none; color: #D0D0D0;'>
					<div id='wholePage'>
						<h2>
							Player: "+playerName+"
						</h2>
						<img src='images/FireRed_"+playerGender+".png' /> <br/>
						<div id='playerMoney'>
						Money: <img src='images/pokedollar.png' /> <!-- image from http://www.reddit.com/r/pokemon/comments/2tup93/how_do_you_pronounce_the_pokemon_currency_symbol/ --> 
							<p id='playerMoneyAmount2'>"+playerMoney+"
							</p> <br/>
						</div>
						Items: <br/>
						Heal Items: Potion "+"amount of potions"+" <br/>
					</div>
				</a>
    		</body>
    	</html>
    ");

*/

/*
// Set variables
var playerWebPage; // make it an object
//var playerWebPage.money = getPlayerWebPageMoney(playerWebPage);
//var playerWebPage.Name = getPlayerWebPageName(playerWebPage);
//var playerMoney = 3000;
//var playerName = "Madeleine";

// Function to get the player stats for the playerStats.html page
function getPlayerWebPage(){
	// create playerWebPage object
	playerWebPage = new createPlayerWebPage();

	// create the properties
	playerWebPage.Name = "Madeleine";
	playerWebPage.money = 3000;

	// show the properties
	document.getElementById("player2").innerHTML = playerWebPage.Name;
	document.getElementById("playerMoneyAmount2").innerHTML = playerWebPage.money;
};

// Function to create a playerWebPage object
function createPlayerWebPage(){
};

// Function to set the playerWebPage playerName
function setPlayerWebPageName(playerWebPage, playerWebPageName){
	playerWebPage.Name = playerWebPageName;
};

// Function to get the playerWebPage playerName
function getPlayerWebPageName(playerWebPage){
	return playerWebPage.Name;
};

// Function to set the playerWebPage playerMoney
function setPlayerWebPageMoney(playerWebPage, playerWebPageMoney){
	playerWebPage.money = playerWebPageMoney;
};

// Function to get the playerWebPage playerMoney
function getPlayerWebPageMoney(playerWebPageMoney){
	return playerWebPage.money;
};*/