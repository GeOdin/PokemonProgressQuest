//Pokémon moves information from http://bulbapedia.bulbagarden.net/wiki/Main_Page

var pokemonMoves = [
	["Name", "Type", "Category", "PP", "Power", "Accuracy"], //add "Effect" for moves with type "Status" ? add PP-max for when PP UP items are introduced?
	["Growl", "Normal", "Status", 40, 0, 100], //http://bulbapedia.bulbagarden.net/wiki/Growl_%28move%29
	["Scratch", "Normal", "Physical", 35, 40, 100], //http://bulbapedia.bulbagarden.net/wiki/Scratch_%28move%29
	["Tackle", "Normal", "Physical", 35, 50, 100], //http://bulbapedia.bulbagarden.net/wiki/Tackle_%28move%29
	["Tail Whip", "Normal", "Status", 30, 0, 100] //http://bulbapedia.bulbagarden.net/wiki/Tail_Whip_%28move%29
];

var pokemonMoves = {
	name: "",
	type: "",
	category: "",
	pp: 1,
	power: 1,
	accuracy: 0
};

function calculateDamage() { //http://www.serebii.net/games/damage.shtml
/* Seems long and confusing? Compared to the other formula's, this one is easy as pie. Let me explain all the variables first. 
Damage is, well, damage, the output number. 
Level is your pokemon's current level. 
AttackStat is your pokemon's Attack/Special Attack stat, whichever one is being used at the moment. 
DefenseStat is your opponents Defense/SpecialDefense stat, depending on the attack your pokemon is using. 
AttackPower is the power of the specific move you're using. For example, if you were to have been using Thunderbolt, you would have a 95 for this variable seeing as in the status screen, there's a 95 clearly marked in the move description when you select it. 
STAB is the same type attack bonus. If you're using a move that coordinates with your own type, you get a 1.5 bonus here. Otherwise, this variable is equal to 1. 
Weakness/Resistance depends on if your move was super-effective or otherwise. This variable could be 0.25, 0.5, 1, 2, or 4 depending on how effective your attack was. 
RandomNumber is simply a Random Number between 85 and 100. */
	damage = ((((2 * Level / 5 + 2) * AttackStat * AttackPower / DefenseStat) / 50) + 2) * STAB * Weakness/Resistance * RandomNumber / 100
}

