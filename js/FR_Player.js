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