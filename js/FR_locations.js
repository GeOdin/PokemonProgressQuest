/*FR_locations.js
 * This JavaScript file contains the (scripted) events for the different locations.
 * created by GeOdin
 * on 2015-08-05
 *
 * This file contains:
 * var locations // with background information about the different locations
 * function createLocation(...) // to create the different locations
 */
 // Add healingLocations/ make it a special version of locations
 // also create call to lastHealingPlace to teleport to if player faints
 // add background for battle as part of location

// Background information about the different locations (make different variables for routes and cities?)
// include locationNumber
var locations = [
	["locationName", "battleBackground", "trainerAmount", "trainer1", "pokemonAmount", "pokemon1Name", "pokemon1MinLevel", "pokemon1MaxLevel", "pokemon1Chance", "pokemon2Name", "pokemon2MinLevel", "pokemon2MaxLevel", "pokemon2Chance"],
	["Introduction", "BattleGrass", 0, "", 0, "", 1, 1, 1.0, "", 1, 1, 0.0],
	["Pallet Town", "BattleGrass", 0, "", 0, "", 1, 1, 1.0, "", 1, 1, 0.0],
	["Route 1", "BattleGrass", 0, "", 2, "PIDGEY", 2, 5, 0.5, "RATTATA", 2, 4, 0.5],
	["Viridian City", "BattleGrass", 0, "", 0, "", 1, 1, 1.0, "", 1, 1, 0.0],
 	["Hall of Fame", "BattleGrass", 0, "", 1, "", 1, 1, 1.0, "", 1, 1, 0.0]
];
// Background information for the different healing locations
var healingLocations = [
	["healingLocationNumber", "healingLocationName", "healingLocationLocation", "healingLocationImage", "healingLocationText"],
	["001", "MOM", getLocation("Pallet Town"), "images/Mom.PNG", "Mom healed all your Pok&eacute;mon. "],
	["002", "Viridian City PokeCenter", getLocation("Viridian City"), "images/Viridian City PokeCenter.png", "We've restored your POK&eacute;MON to <br/>full health. "]
];

// Function to create the different locations
// add amount of trainers
// add amount of pokemon
// add items and amount of items?
function createLocation(locationName, battleBackground, trainerAmount, trainer1, pokemonAmount, pokemon1Name, pokemon1MinLevel, pokemon1MaxLevel, pokemon1Chance, pokemon2Name, pokemon2MinLevel, pokemon2MaxLevel, pokemon2Chance) {
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
				locations[i][12]
			);
		};
	};
	return newLocation;
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

function createHealingLocation(healingLocationNumber, healingLocationName, healingLocationLocation, healingLocationImage, healingLocationText){
	this.number = healingLocationNumber;
	this.Name = healingLocationName;
	this.locatedIn = healingLocationLocation;
	this.image = healingLocationImage;
	this.storyText = healingLocationText;
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
					pokemonStats[i][21]
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