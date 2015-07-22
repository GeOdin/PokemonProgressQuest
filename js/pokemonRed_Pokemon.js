// stat calculator --> http://pycosites.com/pkmn/stat.html
// moves for FireRed --> http://serebii.net/pokedex-rs/

var activePokemon = [
	["LEVEL", "POK&eacute;MON"],
	["", ""],
	["", ""],
	["", ""],
	["", ""],
	["", ""],
	["", ""]
];

// Bulbasaur
var bulbasaurStats = new Array(); //stat calculator --> http://pycosites.com/pkmn/stat.html --> 31IV, +Nature
bulbasaurStats = [
	["level", "hp", "attack", "defense", "spattack", "spdefense", "speed"],
	[1, 12, 6, 6, 6, 6, 6],
	[2, 14, 7, 7, 8, 8, 7],
	[3, 16, 8, 8, 9, 9, 8],
	[4, 18, 11, 11, 12, 12, 9],
	[5, 21, 12, 12, 14, 14, 12]
];
var bulbasaurMoves = new Array();
bulbasaurMoves = [
	["level", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	[1, "Tackle", "", "", ""],
	[2, "Tackle", "", "", ""],
	[3, "Tackle", "", "", ""],
	[4, "Tackle", "Growl", "", ""],
	[5, "Tackle", "Growl", "", ""]
];

// Charmander
var charmanderStats = new Array(); //stat calculator --> http://pycosites.com/pkmn/stat.html --> 31IV, +Nature
charmanderStats = [
	["level", "hp", "attack", "defense", "spattack", "spdefense", "speed"],
	[1, 12, 6, 6, 6, 6, 6],
	[2, 14, 7, 7, 8, 7, 8],
	[3, 16, 9, 8, 9, 8, 9],
	[4, 18, 11, 9, 12, 11, 12],
	[5, 20, 12, 11, 13, 12, 14]
];
var charmanderMoves = new Array();
charmanderMoves = [
	["level", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	[1, "Scratch", "Growl", "", ""],
	[2, "Scratch", "Growl", "", ""],
	[3, "Scratch", "Growl", "", ""],
	[4, "Scratch", "Growl", "", ""],
	[5, "Scratch", "Growl", "", ""]
];

// Squirtle
var squirtleStats = new Array(); //stat calculator --> http://pycosites.com/pkmn/stat.html --> 31IV, +Nature
squirtleStats = [
	["level", "hp", "attack", "defense", "spattack", "spdefense", "speed"],
	[1, 12, 6, 6, 6, 6, 6],
	[2, 14, 7, 8, 7, 8, 7],
	[3, 16, 8, 9, 8, 9, 8],
	[4, 18, 11, 12, 11, 12, 9],
	[5, 20, 12, 14, 12, 13, 11]
];
var squirtleMoves = new Array(); // moves for FireRed --> http://serebii.net/pokedex-rs/
squirtleMoves = [
	["level", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	[1, "Tackle", "", "", ""],
	[2, "Tackle", "", "", ""],
	[3, "Tackle", "", "", ""],
	[4, "Tackle", "Tail Whip", "", ""],
	[5, "Tackle", "Tail Whip", "", ""]
];

//Pokemon background information
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
	["009", "BLASTOISE", 36, "WATER", "", 0, "BLASTOISE", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"]
];

//Create pokemon function
function createPokemon(pokemonNumber, pokemonName, pokemonLevel, pokemonType1, pokemonType2, pokemonEvolveLevel, pokemonEvolvePokemon, hp, attack, defense, spattack, spdefense, speed, pokemonMove1, pokemonMove2, pokemonMove3, pokemonMove4) {
	this.number = pokemonNumber; //0 - 0
	this.name = pokemonName; //1 - ""
	this.level = pokemonLevel; //2 - 0
	this.type1 = pokemonType1; //3 - ""
	this.type2 = pokemonType2; //4 - ""
	this.evolveLevel = pokemonEvolveLevel; //5 - 0
	this.evolvePokemon = pokemonEvolvePokemon; //6 - ""
	this.hp = hp; //7 - 0
	this.attack = attack; //8 - 0
	this.defense = defense; //9 - 0
	this.spattack = spattack; //10 - 0
	this.spdefense = spdefense; //11 - 0
	this.speed = speed; //12 - 0
	this.pokemonMove1 = pokemonMove1; //13 - ""
	this.pokemonMove2 = pokemonMove2; //14 - ""
	this.pokemonMove3 = pokemonMove3; //15 - ""
	this.pokemonMove4 = pokemonMove4; //16 - ""
};