// Player stats
// This includes the functions: 
//// createPlayer(playername, playerGender, playerMoney, starterPokemon, activePokemon1, activePokemon2, activePokemon3, activePokemon4, activePokemon5, activePokemon6)


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
	// return player;
};

/*// Old function below
//Create player function
function createPlayer(playerName, playerGender, playerMoney, starterPokemon, activePokemon1Level, activePokemon1Name, activePokemon2Level, activePokemon2Name, activePokemon3Level, activePokemon3Name, activePokemon4Level, activePokemon4Name, activePokemon5Level, activePokemon5Name, activePokemon6Level, activePokemon6Name) { //include active pokemon?
	this.name = playerName; //0 - ""
	this.gender = playerGender; //1 - ""
	this.money = playerMoney; //2 - 0
	this.starter = starterPokemon; //3 - ""
	this.activePokemon1Level = activePokemon1Level; //4 - 0
	this.activePokemon1Name = activePokemon1Name; //5 - ""
	this.activePokemon2Level = activePokemon2Level; //6 - 0
	this.activePokemon2Name = activePokemon2Name; //7 - ""
	this.activePokemon3Level = activePokemon3Level; //8 - 0
	this.activePokemon3Name = activePokemon3Name; //9 - ""
	this.activePokemon4Level = activePokemon4Level; //10 - 0
	this.activePokemon4Name = activePokemon4Name; //11 - ""
	this.activePokemon5Level = activePokemon5Level; //12 - 0
	this.activePokemon5Name = activePokemon5Name; //13 - ""
	this.activePokemon6Level = activePokemon6Level; //14 - 0
	this.activePokemon6Name = activePokemon6Name; //15 - ""
};*/