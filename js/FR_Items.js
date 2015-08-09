/* FR_Items.js
 * Javascript for the items
 * created on 2015-08-08
 * by GeOdin
 *
 * This script contains the functions:
 * createBag();
 * createHEALtype();
 * createPOKEBALLtype();
 * createItem(itemName);
 * createHealItem(itemObject);
 * createPokeballItem(itemObject);
 * healPokemonWithItem(healItemObject);
 */
 // add max amount of certain items?

var items = [
	["itemNumber", "itemName", "itemType"],
	["001", "Potion", "HEAL"],
	["101", "Pokeball", "POKEBALL"]
];

var healItems = [
	["itemNumber", "itemName", "itemType", "stat", "statAdd", "amount"],
	["001", "Potion", "HEAL", "HP", 20, 1]
];

var pokeballs = [
	// catchrate in percentage
	["itemNumber", "itemName", "itemType", "catchRate", "amount"],
	["101", "Pokeball", "POKEBALL", 100, 1]
];

// Create a bag object
function createBag(){
	// Creates a bag object
};

function createHEALtype(){
	// Creates the HEAL part of the bag
};

function createItem(itemName) {
	// if property player.bag[itemName] already exists, only add item
		// player.bag[itemName].amount +=1; //does .amount work? or must it then be player.bag[itemName]["amount"] +=1;
	// else create item (like below)
	var item = new Object();
	for (i=0; i<items.length; i++){
		if (items[i][1] == itemName) {
			item.number = items[i][0];
			item.Name = items[i][1];
			item.Type = items[i][2];
		}
	};

	if (item.Type == "HEAL") {
		// Make the item a HEAL type item
		createHealItem(item);
	} else if (item.Type == "POKEBALL") {
		// Make the item a POKEBALL item
		createPokeballItem(item);
	};
	return item;
};

function createHealItem(itemObject){
	for (i=0; i<healItems.length; i++){
		if (healItems[i][1] == itemObject.Name) {
			itemObject.stat = healItems[i][3];
			itemObject.statAdd = healItems[i][4];
			itemObject.amount = healItems[i][5];
		};
	};
};

function createPokeballItem(itemObject){
	for (i=0; i<pokeballs.length; i++){
		if (pokeballs[i][1] == itemObject.Name) {
			itemObject.catchRate = pokeballs[i][3];
			itemObject.amount = pokeballs[i][4];
		};
	};
};

function healPokemonWithItem(pokemonObject, healItemObject){
	// check if it's a healItemObject so no amount of other items is diminished?
	// if (healItemObject.amount > 0) {healPokemonWithItem(pokemon, healItemObject)}; --> no, put this in the battlefuntion before this choice is made, otherwise the player should use a move
	if (healItemObject.stat == "HP") {
		pokemonObject.currentHP += healItemObject.statAdd;
		if (pokemonObject.currentHP > pokemonObject.maxHP) {
			pokemonObject.currentHP = pokemonObject.maxHP;
		};
		document.getElementById("activePokemon1").innerHTML = pokemonObject.Name + "<br/>Lvl: " + pokemonObject.level + "<br/> <img src=images/pokemonIconsTransparent/" + pokemonObject.Name + ".png /> <br/>HP: " + pokemonObject.currentHP + "/" + pokemonObject.maxHP + "<br/> Exp: " + pokemonObject.currentExp + "/" + pokemonObject.expNextLevel;
		healItemObject.amount -= 1;
	};
};