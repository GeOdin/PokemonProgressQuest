// stat calculator --> http://pycosites.com/pkmn/stat.html
// moves for FireRed --> http://serebii.net/pokedex-rs/
// This has the functions
//// createPokemon(pokemonNumber, pokemonName, pokemonLevel, pokemonType1, pokemonType2, pokemonEvolveLevel, pokemonEvolvePokemon, currentHP, maxHP, attack, defense, spattack, spdefense, speed, pokemonMove1, pokemonMove2, pokemonMove3, pokemonMove4);
//// createPokemonMoves(pokemonObject);
//// setPokemonMove(pokemonMoveName, pokemonMoveType, pokemonMoveCategory, pokemonMovePP, pokemonMovePower, pokemonMoveAccuracy, pokemonMoveEffect)

//Pokemon background information per pokemon
var pokemon = [
	//level 1 and accompanying stats and moves by default, or level of evolvement
	["pokemonNumber", "pokemonName", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"], //0
	["001", "BULBASAUR", 1, "GRASS", "POISON", 16, "IVYSAUR", 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""], //1
	["002", "IVYSAUR", 16, "GRASS", "POISON", 32, "VENUSAUR", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["003", "VENUSAUR", 32, "GRASS", "POISON", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["004", "CHARMANDER", 1, "FIRE", "", 16, "CHARMELEON", 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "", ""],
	["005", "CHARMELEON", 16, "FIRE", "", 36, "CHARIZARD", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["006", "CHARIZARD", 36, "FIRE", "FLYING", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["007", "SQUIRTLE", 1, "WATER", "", 16, "WARTORTLE", 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["008", "WARTORTLE", 16, "WATER", "", 36, "BLASTOISE", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["009", "BLASTOISE", 36, "WATER", "", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"]
];

// Pokemon background information per pokemon per level
var pokemonStats = [ //make the variables here the same as for the function createPokemon() //add exp needed for level up?
	["pokemonNumber", "pokemonName", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolveName", "currentHP", "maxHP", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["001", "BULBASAUR", 1, "GRASS", "POISON", 16, "IVYSAUR", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["001", "BULBASAUR", 2, "GRASS", "POISON", 16, "IVYSAUR", 14, 14, 7, 7, 8, 8, 7, "Tackle", "", "", ""],
	["001", "BULBASAUR", 3, "GRASS", "POISON", 16, "IVYSAUR", 16, 16, 8, 8, 9, 9, 8, "Tackle", "", "", ""],
	["001", "BULBASAUR", 4, "GRASS", "POISON", 16, "IVYSAUR", 18, 18, 11, 11, 12, 12, 9, "Tackle", "Growl", "", ""],
	["001", "BULBASAUR", 5, "GRASS", "POISON", 16, "IVYSAUR", 21, 21, 12, 12, 14, 14, 12, "Tackle", "Growl", "", ""],
	["004", "CHARMANDER", 1, "FIRE", "", 16, "CHARMELEON", 12, 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 2, "FIRE", "", 16, "CHARMELEON", 14, 14, 7, 7, 8, 7, 8, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 3, "FIRE", "", 16, "CHARMELEON", 16, 16, 9, 8, 9, 8, 9, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 4, "FIRE", "", 16, "CHARMELEON", 18, 18, 11, 9, 12, 11, 12, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 5, "FIRE", "", 16, "CHARMELEON", 20, 20, 12, 11, 13, 12, 14, "Scratch", "Growl", "Tackle", "Tail Whip"],
	["001", "SQUIRTLE", 1, "WATER", "", 16, "WARTORTLE", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["001", "SQUIRTLE", 2, "WATER", "", 16, "WARTORTLE", 14, 14, 7, 8, 7, 8, 7, "Tackle", "", "", ""],
	["001", "SQUIRTLE", 3, "WATER", "", 16, "WARTORTLE", 16, 16, 8, 9, 8, 9, 8, "Tackle", "", "", ""],
	["001", "SQUIRTLE", 4, "WATER", "", 16, "WARTORTLE", 18, 18, 11, 12, 11, 12, 9, "Tackle", "Tail Whip", "", ""],
	["001", "SQUIRTLE", 5, "WATER", "", 16, "WARTORTLE", 20, 20, 12, 14, 12, 13, 11, "Tackle", "Tail Whip", "", ""]
];

// Pokemon moves background information
var pokemonMoves = [
	//add "Effect" for moves with type "Status" ? add PP-max for when PP UP items are introduced?
	["Name", "Type", "category", "pp", "power", "accuracy", "effect"], 
	["Growl", "Normal", "Status", 40, 0, 100, ""], //http://bulbapedia.bulbagarden.net/wiki/Growl_%28move%29
	["Scratch", "Normal", "Physical", 35, 40, 100, ""], //http://bulbapedia.bulbagarden.net/wiki/Scratch_%28move%29
	["Tackle", "Normal", "Physical", 35, 50, 100, ""], //http://bulbapedia.bulbagarden.net/wiki/Tackle_%28move%29
	["Tail Whip", "Normal", "Status", 30, 0, 100, ""], //http://bulbapedia.bulbagarden.net/wiki/Tail_Whip_%28move%29
	["", "", "", 0, 0, 0, ""] // for when pokemon don't have all 4 moves yet
];

//Create pokemon function
// also add current exp for next level? (and exp needed for next level in pokemonStats?
// have current hp and maxHP as a stat of the pokemon; hp == maxHP at the start of the creation
function createPokemon(pokemonNumber, pokemonName, pokemonLevel, pokemonType1, pokemonType2, pokemonEvolveLevel, pokemonEvolvePokemon, currentHP, maxHP, attack, defense, spattack, spdefense, speed, pokemonMove1, pokemonMove2, pokemonMove3, pokemonMove4) {
	this.number = pokemonNumber; //0 - 0
	this.Name = pokemonName; //1 - ""
	this.level = pokemonLevel; //2 - 0
	this.type1 = pokemonType1; //3 - ""
	this.type2 = pokemonType2; //4 - ""
	this.evolveLevel = pokemonEvolveLevel; //5 - 0
	this.evolvePokemon = pokemonEvolvePokemon; //6 - ""
	this.currentHP = currentHP; //7 - 0
	this.maxHP = maxHP; //8 - 0
	this.attack = attack; //9 - 0
	this.defense = defense; //10 - 0
	this.spattack = spattack; //11 - 0
	this.spdefense = spdefense; //12 - 0
	this.speed = speed; //13 - 0
	this.moveOne = pokemonMove1; //14 - ""
	this.moveTwo = pokemonMove2; //15 - ""
	this.moveThree = pokemonMove3; //16 - ""
	this.moveFour = pokemonMove4; //17 - ""
};

function setPokemonMove(pokemonMoveName, pokemonMoveType, pokemonMoveCategory, pokemonMovePP, pokemonMovePower, pokemonMoveAccuracy, pokemonMoveEffect) {
	// Create the move
	this.Name = pokemonMoveName; // pokemonMoves[i][0]
	this.Type = pokemonMoveType; // pokemonMoves[i][1]
	this.category = pokemonMoveCategory; // pokemonMoves[i][2]
	this.pp = pokemonMovePP; // pokemonMoves[i][3]
	this.power = pokemonMovePower; // pokemonMoves[i][4]
	this.accuracy = pokemonMoveAccuracy; // pokemonMoves[i][5]
	this.effect = pokemonMoveEffect; // pokemonMoves[i][6]
};

function createPokemonMoves(pokemonObject) {
	var moveOneName;
	var moveTwoName;
	var moveThreeName;
	var moveFourName;
	for (i = 0; i < pokemonStats.length; i++) {
		if (pokemonStats[i][1] == pokemonObject.Name) {
			if (pokemonStats[i][2] == pokemonObject.level) {
				// Get the moveName for the moves
				moveOneName = pokemonStats[i][14];
				moveTwoName = pokemonStats[i][15];
				moveThreeName = pokemonStats[i][16];
				moveFourName = pokemonStats[i][17];
			};
		};
	};
	for (i=0; i<pokemonMoves.length; i++) {
		if (pokemonMoves[i][0] == moveOneName) {
			// Create the moves
			moveOne = new setPokemonMove(
				pokemonMoves[i][0],
				pokemonMoves[i][1],
				pokemonMoves[i][2],
				pokemonMoves[i][3],
				pokemonMoves[i][4],
				pokemonMoves[i][5],
				pokemonMoves[i][6]
			);
			pokemonObject.move1 = moveOne;
		} else if (pokemonMoves[i][0] == moveTwoName) {
			moveTwo = new setPokemonMove(
				pokemonMoves[i][0],
				pokemonMoves[i][1],
				pokemonMoves[i][2],
				pokemonMoves[i][3],
				pokemonMoves[i][4],
				pokemonMoves[i][5],
				pokemonMoves[i][6]
			);
			pokemonObject.move2 = moveTwo;
		} else if (pokemonMoves[i][0] == moveThreeName) {
			moveThree = new setPokemonMove(
				pokemonMoves[i][0],
				pokemonMoves[i][1],
				pokemonMoves[i][2],
				pokemonMoves[i][3],
				pokemonMoves[i][4],
				pokemonMoves[i][5],
				pokemonMoves[i][6]
			);
			pokemonObject.move3 = moveThree;
		} else if (pokemonMoves[i][0] == moveFourName) {
			moveFour = new setPokemonMove(
				pokemonMoves[i][0],
				pokemonMoves[i][1],
				pokemonMoves[i][2],
				pokemonMoves[i][3],
				pokemonMoves[i][4],
				pokemonMoves[i][5],
				pokemonMoves[i][6]
			); 
			pokemonObject.move4 = moveFour;
		};
	};
/*	if (moveOneName == "") {
		moveOne = new setPokemonMove(
			"", 
			"", 
			"", 
			0, 
			0, 
			100, 
			""
		);
	};
	if (moveTwoName == "") {
		moveTwo = new setPokemonMove(
			"", 
			"", 
			"", 
			0, 
			0, 
			100, 
			""
		);
	};
	if (moveThreeName == "") {
		moveThree = new setPokemonMove(
			"", 
			"", 
			"", 
			0, 
			0, 
			100, 
			""
		);
	};
	if (moveFourName == "") {
		moveFour = new setPokemonMove(
			"", 
			"", 
			"", 
			0, 
			0, 
			100, 
			""
		);
	};*/
};