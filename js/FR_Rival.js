// Rival stats
// This includes the function:
//// createRival(rivalName, starterPokemonRival, activePokemon1, activePokemon2, activePokemon3, activePokemon4, activePokemon5, activePokemon6)

//Create player function //this is redundant, use createPlayer instead for creating a rival
function createRival(rivalName, starterPokemonRival, activePokemon1, activePokemon2, activePokemon3, activePokemon4, activePokemon5, activePokemon6) { //include active pokemon?
	this.Name = rivalName; //0 - ""
	this.starterPokemon = starterPokemonRival; //1 - ""
	this.activePokemon1 = activePokemon1; //2 - object
	this.activePokemon2 = activePokemon2; //3 - object
	this.activePokemon3 = activePokemon3; //4 - object
	this.activePokemon4 = activePokemon4; //5 - object
	this.activePokemon5 = activePokemon5; //6 - object
	this.activePokemon6 = activePokemon6; //7 - object
};

/* // Old function below
//Create player function //this is redundant, use createPlayer instead for creating a rival
function createRival(rivalName, starterPokemonRival, activePokemon1Level, activePokemon1Name, activePokemon2Level, activePokemon2Name, activePokemon3Level, activePokemon3Name, activePokemon4Level, activePokemon4Name, activePokemon5Level, activePokemon5Name, activePokemon6Level, activePokemon6Name) { //include active pokemon?
	this.Name = rivalName; //0 - ""
	this.starter = starterPokemonRival; //1 - ""
	this.activePokemon1Level = activePokemon1Level; //2 - 0
	this.activePokemon1Name = activePokemon1Name; //3 - ""
	this.activePokemon2Level = activePokemon2Level; //4 - 0
	this.activePokemon2Name = activePokemon2Name; //5 - ""
	this.activePokemon3Level = activePokemon3Level; //6 - 0
	this.activePokemon3Name = activePokemon3Name; //7 - ""
	this.activePokemon4Level = activePokemon4Level; //8 - 0
	this.activePokemon4Name = activePokemon4Name; //9 - ""
	this.activePokemon5Level = activePokemon5Level; //10 - 0
	this.activePokemon5Name = activePokemon5Name; //11 - ""
	this.activePokemon6Level = activePokemon6Level; //12 - 0
	this.activePokemon6Name = activePokemon6Name; //13 - ""
};*/