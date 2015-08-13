/*FR_locations.js
 * This JavaScript file contains the (scripted) events for the different locations.
 * created by GeOdin
 * on 2015-08-05
 *
 * This file contains:
 * var locations // with background information about the different locations
 * var healingLocations // with background information about the healingLocations
 * function createLocation(...) // to create the different locations
 * function getLocation(...)
 * function createHealingLocation(...)
 * function getHealingLocation(...)
 * function createWildPokemon(...)
 * function setBattleBackGround(...)
 * function healAllPokemon(...)
 */
// add items you can buy per city pokemart?
// make objects of the trainers

// Background information about the different locations (make different variables for routes and cities?)
// include locationNumber
var locations = [
	["locationName", "battleBackground", "trainerAmount", "trainer1Number", "pokemonAmount", "pokemon1Name", "pokemon1MinLevel", "pokemon1MaxLevel", "pokemon1Chance", "pokemon2Name", "pokemon2MinLevel", "pokemon2MaxLevel", "pokemon2Chance", "pokemon3Name", "pokemon3MinLevel", "pokemon3MaxLevel", "pokemon3Chance", "pokemon4Name", "pokemon4MinLevel", "pokemon4MaxLevel", "pokemon4Chance", "pokemon5Name", "pokemon5MinLevel", "pokemon5MaxLevel", "pokemon5Chance"],
	["Introduction", "BattleGrass", 0, "", 0, "", 1, 1, 1.0, "", 1, 1, 0.0, "", 1, 1, 0.0, "", 1, 1, 0.0, "", 1, 1, 0.0],
	["Pallet Town", "BattleGrass", 0, "", 0, "", 1, 1, 1.0, "", 1, 1, 0.0, "", 1, 1, 0.0, "", 1, 1, 0.0, "", 1, 1, 0.0],
	["Route 1", "BattleGrass", 0, "", 2, "PIDGEY", 2, 5, 0.5, "RATTATA", 2, 4, 0.5, "", 1, 1, 0.0, "", 1, 1, 0.0, "", 1, 1, 0.0],
	["Viridian City", "BattleGrass", 0, "", 0, "", 1, 1, 1.0, "", 1, 1, 0.0, "", 1, 1, 0.0, "", 1, 1, 0.0, "", 1, 1, 0.0],
	["Route 22", "BattleGrass", 1, "002", 3, "RATTATA", 2, 5, 0.45, "MANKEY", 2, 5, 0.45, "SPEAROW", 3, 5, 0.1, "", 1, 1, 0.0, "", 1, 1, 0.0],
	["Route 2", "BattleGrass", 0, "", 4, "PIDGEY", 2, 5, 0.45, "RATTATA", 2, 5, 0.45, "CATEPIE", 4, 5, 0.05, "WEEDLE", 4, 5, 0.05, "", 1, 1, 0.0],
	["Viridian Forest", "BattleGrass", 0, "", 4, "CATERPIE", 3, 5, 0.4, "WEEDLE", 3, 5, 0.4, "METAPOD", 5, 5, 0.05, "KAKUNA", 4, 6, 0.1, "PIKACHU", 3, 5, 0.05],
 	["Hall of Fame", "BattleGrass", 0, "", 1, "", 1, 1, 1.0, "", 1, 1, 0.0, "", 1, 1, 0.0, "", 1, 1, 0.0, "", 1, 1, 0.0]
];
// Background information for the different healing locations
var healingLocations = [
	["healingLocationNumber", "healingLocationName", "healingLocationLocation", "healingLocationImage", "healingLocationText"],
	["001", "MOM", getLocation("Pallet Town"), "images/Mom.PNG", "Mom healed all your Pok&eacute;mon. "],
	["002", "Viridian City PokeCenter", getLocation("Viridian City"), "images/Viridian City PokeCenter.png", "We've restored your POK&eacute;MON to <br/>full health. "]
];

var trainers = [
	["trainerNumber", "trainerName", "trainerMoney", "pokemon1Name", "pokemon1Level", "pokemon2Name", "pokemon2Level", "pokemon3Name", "pokemon3Level", "pokemon4Name", "pokemon4Level", "pokemon5Name", "pokemon5Level", "pokemon6Name", "pokemon6Level"],
	["002", "trainerName", "trainerMoney", "pokemon1Name", "pokemon1Level", "pokemon2Name", "pokemon2Level", "pokemon3Name", "pokemon3Level", "pokemon4Name", "pokemon4Level", "pokemon5Name", "pokemon5Level", "pokemon6Name", "pokemon6Level"]
];

// Function to create the different locations
// add amount of trainers
// add amount of pokemon
// add items and amount of items?
function createLocation(locationName, battleBackground, trainerAmount, trainer1, pokemonAmount, pokemon1Name, pokemon1MinLevel, pokemon1MaxLevel, pokemon1Chance, pokemon2Name, pokemon2MinLevel, pokemon2MaxLevel, pokemon2Chance, pokemon3Name, pokemon3MinLevel, pokemon3MaxLevel, pokemon3Chance, pokemon4Name, pokemon4MinLevel, pokemon4MaxLevel, pokemon4Chance, pokemon5Name, pokemon5MinLevel, pokemon5MaxLevel, pokemon5Chance) {
	this.Name = locationName; //0
	this.battleBackground = battleBackground; //1
	this.trainerAmount = trainerAmount; //2
	this.trainer1 = trainer1; //3
	this.pokemonAmount = pokemonAmount; //4
	this.pokemon1Name = pokemon1Name; //5
	this.pokemon1MinLevel = pokemon1MinLevel; //6
	this.pokemon1MaxLevel = pokemon1MaxLevel; //7
	this.pokemon1Chance = pokemon1Chance; //8
	this.pokemon2Name = pokemon2Name; //9
	this.pokemon2MinLevel = pokemon2MinLevel; //10
	this.pokemon2MaxLevel = pokemon2MaxLevel; //11
	this.pokemon2Chance = pokemon2Chance; //12
	this.pokemon3Name = pokemon3Name; //13
	this.pokemon3MinLevel = pokemon3MinLevel; //14
	this.pokemon3MaxLevel = pokemon3MaxLevel; //15
	this.pokemon3Chance = pokemon3Chance; //16
	this.pokemon4Name = pokemon4Name; //17
	this.pokemon4MinLevel = pokemon4MinLevel; //18
	this.pokemon4MaxLevel = pokemon4MaxLevel; //19
	this.pokemon4Chance = pokemon4Chance; //20
	this.pokemon5Name = pokemon5Name; //21
	this.pokemon5MinLevel = pokemon5MinLevel; //22
	this.pokemon5MaxLevel = pokemon5MaxLevel; //23
	this.pokemon5Chance = pokemon5Chance; //24
};

function getLocation(locationName){
	var newLocation;
	for (i=0; i<locations.length; i++) {
		if (locations[i][0] == locationName) {
			newLocation = new createLocation(
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
				locations[i][12],
				locations[i][13],
				locations[i][14],
				locations[i][15],
				locations[i][16],
				locations[i][17],
				locations[i][18],
				locations[i][19],
				locations[i][20],
				locations[i][21],
				locations[i][22],
				locations[i][23],
				locations[i][24]
			);
		};
	};
	return newLocation;
};

function createHealingLocation(healingLocationNumber, healingLocationName, healingLocationLocation, healingLocationImage, healingLocationText){
	this.number = healingLocationNumber;
	this.Name = healingLocationName;
	this.locatedIn = healingLocationLocation;
	this.image = healingLocationImage;
	this.storyText = healingLocationText;
};

// Function to create a healing location
function getHealingLocation(healingLocationName){
	var newHealingLocation;
	for (i=0; i<healingLocations.length; i++) {
		if (healingLocations[i][1] == healingLocationName) {
			newHealingLocation = new createHealingLocation(
				healingLocations[i][0],
				healingLocations[i][1],
				healingLocations[i][2],
				healingLocations[i][3],
				healingLocations[i][4]
			);
		};
	};
	return newHealingLocation;
};

// Function to create wild Pokemon for a certain location 
function createWildPokemon(locationObject) {
	// Set variables
	var rand = Math.random();
	var wildPokemonName = "";
	var wildPokemonChance = 0.0;
	var wildPokemonLevel = 1;
	var wildPokemonNumber;
	var wildPokemon;

	// Get the Pokemon Name
	// make a while-loop around this to make sure it returns a Pokemon? or an else - Missingno?
	for (i=0; i<locationObject.pokemonAmount; i++) {
		wildPokemonNumber = i + 1;
		wildPokemonChance += locationObject["pokemon" + wildPokemonNumber + "Chance"]; 
		if (rand <= wildPokemonChance) {
			wildPokemonName = locationObject["pokemon" + wildPokemonNumber + "Name"];
			break;
		};
	};

	// Generate a random level
	wildPokemonLevel = Math.floor(Math.random() * (locationObject["pokemon" + wildPokemonNumber + "MaxLevel"] - locationObject["pokemon" + wildPokemonNumber + "MinLevel"] + 1)) + locationObject["pokemon" + wildPokemonNumber + "MinLevel"];

	// Create the pokemon object
	for (i=0; i<pokemonStats.length; i++) {
		if (pokemonStats[i][1] == wildPokemonName) {
			if (pokemonStats[i][2] == wildPokemonLevel) {
				// Create the starterPokemon Object
				wildPokemon = new createPokemon(
					pokemonStats[i][0], 
					pokemonStats[i][1],
					pokemonStats[i][2],
					pokemonStats[i][3],
					pokemonStats[i][4],
					pokemonStats[i][5],
					pokemonStats[i][6],
					pokemonStats[i][7],
					pokemonStats[i][8],
					pokemonStats[i][9],
					pokemonStats[i][10],
					pokemonStats[i][11],
					pokemonStats[i][12],
					pokemonStats[i][13],
					pokemonStats[i][14],
					pokemonStats[i][15],
					pokemonStats[i][16],
					pokemonStats[i][17],
					pokemonStats[i][18],
					pokemonStats[i][19],
					pokemonStats[i][20],
					pokemonStats[i][21],
					pokemonStats[i][22]
				);
			};
		};
	};

	// Update the wildPokemon object with move objects
	createPokemonMoves(wildPokemon);

	// Return the pokemon object
	return wildPokemon;
};

function setBattleBackground(locationObject){
	// Set the battle background
	document.getElementById("imageStory").src = "images/battle/" + locationObject.battleBackground + ".png";
};

function healAllPokemon(player) {
	for (i=0; i<6; i++) {
		var activePokemonNumber = i + 1;
		var activePokemonCall = "activePokemon" + activePokemonNumber;
		if (player[activePokemonCall] != "") {
			player[activePokemonCall].currentHP = player[activePokemonCall].maxHP;
		};
	};
};

/*// Get trainerName
function getTrainerName(trainerNumber) {
	var trainerName;
	for (i=0; i<trainer.length; i++) {
		// do something
		if (trainer[i][0] == trainerNumber) {
			trainerName = trainer[i][1];
			return trainerName;
		};
	};
};*/