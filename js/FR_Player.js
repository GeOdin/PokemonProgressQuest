// Player stats
// This includes the functions: 
//// createPlayer(playername, playerGender, playerMoney, starterPokemon, activePokemon1, activePokemon2, activePokemon3, activePokemon4, activePokemon5, activePokemon6)
//// getPlayerName(player);
//// setPlayerName(player, playerName);

//Create player function
function createPlayer(playerName, playerGender, playerMoney, starterPokemon, activePokemon1, activePokemon2, activePokemon3, activePokemon4, activePokemon5, activePokemon6) { //add badges?
	this.Name = playerName; //0 - ""
	this.gender = playerGender; //1 - ""
	this.money = playerMoney; //2 - 0
	this.starterPokemon = starterPokemon; //3 - ""
	this.activePokemon1 = activePokemon1; //4 - object
	this.activePokemon2 = activePokemon2; //5 - object
	this.activePokemon3 = activePokemon3; //6 - object
	this.activePokemon4 = activePokemon4; //7 - object
	this.activePokemon5 = activePokemon5; //8 - object
	this.activePokemon6 = activePokemon6; //9 - object
	//this.bag = bag; //10 - object
};

function getPlayerName(player){
	var playerName;
	playerName = player.Name;
	return playerName;
};

function setPlayerName(player, playerName){
	player.Name = playerName;
};

function savePlayerName(playerName){
	// Use a coockie to save data about the player without using a server
	//// http://stackoverflow.com/questions/16264253/sharing-a-variable-between-multiple-html-pages
	//// Tutorial about coockies:
	////// https://en.wikipedia.org/wiki/HTTP_cookie
		// var playerName = getPlayerName(playerObject);
	document.coockie = "playerName:"+playerName; // set the coockie
};

function getPlayerName() {
    var start = document.cookie.indexOf("playerName:"); //Get the location of the cookie value
    var stop = document.cookie.indexOf(";"); //Get the end of the cookie value
    return document.cookie.substring(start+11, stop); //Return the value of the cookie (+5 because 'snum:' is 5 chars long)
};

function savePlayerMoney(playerMoney){
	// Use a coockie to save data about the player without using a server
	//// http://stackoverflow.com/questions/16264253/sharing-a-variable-between-multiple-html-pages
	//// Tutorial about coockies:
	////// https://en.wikipedia.org/wiki/HTTP_cookie
		// var playerName = getPlayerName(playerObject);
	document.coockie = "playerMoney:"+playerMoney; // set the coockie
};

function getPlayerMoney() {
    var start = document.cookie.indexOf("playerMoney:"); //Get the location of the cookie value
    var stop = document.cookie.indexOf(";"); //Get the end of the cookie value
    return document.cookie.substring(start+12, stop); //Return the value of the cookie (+5 because 'snum:' is 5 chars long)
};