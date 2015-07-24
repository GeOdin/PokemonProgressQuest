// stat calculator --> http://pycosites.com/pkmn/stat.html
// moves for FireRed --> http://serebii.net/pokedex-rs/

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
	["009", "BLASTOISE", 36, "WATER", "", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"]
];

var pokemonStats = [ //make the variables here the same as for the function createPokemon() //add exp needed for level up?
	["pokemonNumber", "pokemonName", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolveName", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["001", "BULBASAUR", 1, "GRASS", "POISON", 16, "IVYSAUR", 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["001", "BULBASAUR", 2, "GRASS", "POISON", 16, "IVYSAUR", 14, 7, 7, 8, 8, 7, "Tackle", "", "", ""],
	["001", "BULBASAUR", 3, "GRASS", "POISON", 16, "IVYSAUR", 16, 8, 8, 9, 9, 8, "Tackle", "", "", ""],
	["001", "BULBASAUR", 4, "GRASS", "POISON", 16, "IVYSAUR", 18, 11, 11, 12, 12, 9, "Tackle", "Growl", "", ""],
	["001", "BULBASAUR", 5, "GRASS", "POISON", 16, "IVYSAUR", 21, 12, 12, 14, 14, 12, "Tackle", "Growl", "", ""],
	["004", "CHARMANDER", 1, "FIRE", "", 16, "CHARMELEON", 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 2, "FIRE", "", 16, "CHARMELEON", 14, 7, 7, 8, 7, 8, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 3, "FIRE", "", 16, "CHARMELEON", 16, 9, 8, 9, 8, 9, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 4, "FIRE", "", 16, "CHARMELEON", 18, 11, 9, 12, 11, 12, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 5, "FIRE", "", 16, "CHARMELEON", 20, 12, 11, 13, 12, 14, "Scratch", "Growl", "", ""],
	["001", "SQUIRTLE", 1, "WATER", "", 16, "WARTORTLE", 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["001", "SQUIRTLE", 2, "WATER", "", 16, "WARTORTLE", 14, 7, 8, 7, 8, 7, "Tackle", "", "", ""],
	["001", "SQUIRTLE", 3, "WATER", "", 16, "WARTORTLE", 16, 8, 9, 8, 9, 8, "Tackle", "", "", ""],
	["001", "SQUIRTLE", 4, "WATER", "", 16, "WARTORTLE", 18, 11, 12, 11, 12, 9, "Tackle", "Tail Whip", "", ""],
	["001", "SQUIRTLE", 5, "WATER", "", 16, "WARTORTLE", 20, 12, 14, 12, 13, 11, "Tackle", "Tail Whip", "", ""]
];

//Create pokemon function
// also add current exp for next level? (and exp needed for next level in pokemonStats?
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

// Get Pokemon HP corresponding to certain pokemon and level //currently not working
/* function getHP(pokemonName, pokemonLevel){
	for (i=0; i<pokemonStats.length; i++) {
		if (pokemonStats[i][1] == pokemonName) {
			for (j=0; j<pokemonStats[1]+1; j++){
				if (pokemonStats[i][2] == pokemonLevel) {
					HP = pokemonStats[i][3];
				}
			}
		}
	};
	return HP;
}; */