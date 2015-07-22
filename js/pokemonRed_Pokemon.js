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
	["Level", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"],
	["1", "12", "6", "6", "6", "6", "6"],
	["2", "14", "7", "7", "8", "8", "7"],
	["3", "16", "8", "8", "9", "9", "8"],
	["4", "18", "11", "11", "12", "12", "9"],
	["5", "21", "12", "12", "14", "14", "12"]
];
var bulbasaurMoves = new Array();
bulbasaurMoves = [
	["Level", "Move 1", "Move 2", "Move 3", "Move 4"],
	["1", "Tackle", "", "", ""],
	["2", "Tackle", "", "", ""],
	["3", "Tackle", "", "", ""],
	["4", "Tackle", "Growl", "", ""],
	["5", "Tackle", "Growl", "", ""]
];

// Charmander
var charmanderStats = new Array(); //stat calculator --> http://pycosites.com/pkmn/stat.html --> 31IV, +Nature
charmanderStats = [
	["Level", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"],
	["1", "12", "6", "6", "6", "6", "6"],
	["2", "14", "7", "7", "8", "7", "8"],
	["3", "16", "9", "8", "9", "8", "9"],
	["4", "18", "11", "9", "12", "11", "12"],
	["5", "20", "12", "11", "13", "12", "14"]
];
var charmanderMoves = new Array();
charmanderMoves = [
	["Level", "Move 1", "Move 2", "Move 3", "Move 4"],
	["1", "Scratch", "Growl", "", ""],
	["2", "Scratch", "Growl", "", ""],
	["3", "Scratch", "Growl", "", ""],
	["4", "Scratch", "Growl", "", ""],
	["5", "Scratch", "Growl", "", ""]
];

// Squirtle
var squirtleStats = new Array(); //stat calculator --> http://pycosites.com/pkmn/stat.html --> 31IV, +Nature
squirtleStats = [
	["Level", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"],
	["1", "12", "6", "6", "6", "6", "6"],
	["2", "14", "7", "8", "7", "8", "7"],
	["3", "16", "8", "9", "8", "9", "8"],
	["4", "18", "11", "12", "11", "12", "9"],
	["5", "20", "12", "14", "12", "13", "11"]
];
var squirtleMoves = new Array(); // moves for FireRed --> http://serebii.net/pokedex-rs/
squirtleMoves = [
	["Level", "Move 1", "Move 2", "Move 3", "Move 4"],
	["1", "Tackle", "", "", ""],
	["2", "Tackle", "", "", ""],
	["3", "Tackle", "", "", ""],
	["4", "Tackle", "Tail Whip", "", ""],
	["5", "Tackle", "Tail Whip", "", ""]
];

// Pokemon
var pokemon = new Array();
pokemon = [
	["pokemonNumber", "pokemonName", "pokemonStats", "pokemonMoves"], //0
	["001", "BULBASAUR", bulbasaurStats, bulbasaurMoves], //1
	["002", "IVYSAUR"],
	["003", "VENUSAUR"],
	["004", "CHARMANDER", charmanderStats, charmanderMoves],
	["005", "CHARMELEON"],
	["006", "CHARIZARD"],
	["007", "SQUIRTLE", squirtleStats, squirtleMoves],
	["008", "WARTORTLE"],
	["009", "BLASTOISE"]
];