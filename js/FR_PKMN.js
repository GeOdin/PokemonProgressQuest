// stat calculator 31 IV and +Nature --> http://pycosites.com/pkmn/stat.html
// moves for FireRed --> http://serebii.net/pokedex-rs/
// This has the functions
//// createPokemon(pokemonNumber, pokemonName, pokemonLevel, pokemonType1, pokemonType2, pokemonEvolveLevel, pokemonEvolvePokemon, currentHP, maxHP, attack, defense, spattack, spdefense, speed, pokemonMove1, pokemonMove2, pokemonMove3, pokemonMove4);
//// createPokemonMoves(pokemonObject);
//// setPokemonMove(pokemonMoveName, pokemonMoveType, pokemonMoveCategory, pokemonMovePP, pokemonMovePower, pokemonMoveAccuracy, pokemonMoveEffect)
//// setActivePokemonText(player)

var expNeededPerExpGroup = [
	// Equations for exp per exp group (from Bulbapedia // http://bulbapedia.bulbagarden.net/wiki/Experience):
	//// ERRATIC experience group (600000 to reach level 100)
	////// LEVEL <= 50 --> (LEVEL ^ 3 (100 - LEVEL)) / 50 
	////// 50 <= LEVEL <= 68 --> (LEVEL ^ 3 (150 - LEVEL)) / 100 
	////// 68 <= LEVEL <= 98 --> (LEVEL ^ 3 ((1911 - 10 * LEVEL) / 3)) / 500 
	////// 98 <= LEVEL <= 100 --> (LEVEL ^ 3 (160 - LEVEL)) / 100 
	//// FAST experience group (800000 to reach level 100)
	////// (4 * LEVEL ^ 3) / 5
	//// FLUCTUATING experience group (1640000 to reach level 100)
	////// LEVEL <= 15 --> LEVEL ^ 3 ((((LEVEL + 1) / 3) + 24) / 50)
	////// 15 <= LEVEL <= 36 --> LEVEL ^ 3 ((LEVEL + 14) / 50)
	////// 36 <= LEVEL <= 100 --> LEVEL ^ 3 (((LEVEL / 2) + 32) / 50)
	//// MEDIUMFAST experience group (1000000 to reach level 100)
	////// LEVEL ^ 3
	//// MEDIUMSLOW experience group (1059860 experience to reach level 100)
	////// (6 / 5) LEVEL ^ 3 - 15 LEVEL ^ 2 + 100 LEVEL - 140
	//// SLOW experience group (1250000 experience to reach level 100)
	////// (5 / 4) LEVEL ^ 3
	["LEVEL", "ERRATIC", "FAST", "FLUCTUATING", "MEDIUMFAST", "MEDIUMSLOW", "SLOW"],
	[1, 2, 1, 0, 1, -54, 1],
	[2, 16, 6, 4, 8, 10, 10],
	[3, 52, 22, 14, 27, 57, 34],
	[4, 123, 51, 33, 64, 97, 80],
	[5, 238, 100, 65, 125, 135, 156],
	[6, 406, 173, 114, 216, 179, 270],
	[7, 638, 274, 183, 343, 237, 429],
	[8, 942, 410, 276, 512, 314, 640],
	[9, 1327, 583, 399, 729, 420, 911],
	[10, 1800, 800, 553, 1000, 560, 1250],
	[11, 2369, 1065, 745, 1331, 742, 1664],
	[12, 3041, 1382, 979, 1728, 974, 2160],
	[13, 3823, 1758, 1260, 2197, 1261, 2746],
	[14, 4720, 2195, 1592, 2744, 1613, 3430],
	[15, 5738, 2700, 1980, 3375, 2035, 4219],
	[16, 6881, 3277, 2458, 4096, 2535, 5120],
	[17, 8156, 3930, 3046, 4913, 3121, 6141],
	[18, 9564, 4666, 3732, 5832, 3798, 7290],
	[19, 11112, 5487, 4527, 6859, 4576, 8574],
	[20, 12800, 6400, 5440, 8000, 5460, 10000],
	[21, 14632, 7409, 6483, 9261, 6458, 11576],
	[22, 16611, 8518, 7667, 10648, 7578, 13310],
	[23, 18737, 9734, 9004, 12167, 8825, 15209],
	[24, 21012, 11059, 10506, 13824, 10209, 17280],
	[25, 23438, 12500, 12188, 15625, 11735, 19531],
	[26, 26012, 14061, 14061, 17576, 13411, 21970],
	[27, 28737, 15746, 16140, 19683, 15245, 24604],
	[28, 31611, 17562, 18440, 21952, 17242, 27440],
	[29, 34632, 19511, 20975, 24389, 19412, 30486],
	[30, 37800, 21600, 23760, 27000, 21760, 33750],
	[31, 41112, 23833, 26812, 29791, 24294, 37239],
	[32, 44564, 26214, 30147, 32768, 27022, 40960],
	[33, 48156, 28750, 33781, 35937, 29949, 44921],
	[34, 51881, 31443, 37732, 39304, 33085, 49130],
	[35, 55738, 34300, 42018, 42875, 36435, 53594],
	[36, 59720, 37325, 46656, 46656, 40007, 58320],
	[37, 63823, 40522, 51160, 50653, 43809, 63316],
	[38, 68041, 43898, 55969, 54872, 47846, 68590],
	[39, 72369, 47455, 61099, 59319, 52128, 74149],
	[40, 76800, 51200, 66560, 64000, 56660, 80000],
	[41, 81327, 55137, 72367, 68921, 61450, 86151],
	[42, 85942, 59270, 78533, 74088, 66506, 92610],
	[43, 90638, 63606, 85072, 79507, 71833, 99384],
	[44, 95406, 68147, 91999, 85184, 77441, 106480],
	[45, 100238, 72900, 99326, 91125, 83335, 113906],
	[46, 105123, 77869, 107070, 97336, 89523, 121670],
	[47, 110052, 83058, 115244, 103823, 96013, 129779],
	[48, 115016, 88474, 123863, 110592, 102810, 138240],
	[49, 120002, 94119, 132943, 117649, 109924, 147061],
	[50, 125000, 100000, 142500, 125000, 117360, 156250],
	[51, 131324, 106121, 152549, 132651, 125126, 165814],
	[52, 137796, 112486, 163105, 140608, 133230, 175760],
	[53, 144411, 119102, 174186, 148877, 141677, 186096],
	[54, 151165, 125971, 185808, 157464, 150477, 196830],
	[55, 158056, 133100, 197986, 166375, 159635, 207969],
	[56, 165079, 140493, 210739, 175616, 169159, 219520],
	[57, 172229, 148154, 224084, 185193, 179057, 231491],
	[58, 179503, 156090, 238037, 195112, 189334, 243890],
	[59, 186895, 164303, 252616, 205379, 200000, 256724],
	[60, 194400, 172800, 267840, 216000, 211060, 270000],
	[61, 202013, 181585, 283726, 226981, 222522, 283726],
	[62, 209729, 190662, 300293, 238328, 234394, 297910],
	[63, 217541, 200038, 317560, 250047, 246681, 312559],
	[64, 225444, 209715, 335544, 262144, 259393, 327680],
	[65, 233431, 219700, 354266, 274625, 272535, 343281],
	[66, 241497, 229997, 373745, 287496, 286155, 359370],
	[67, 249633, 240610, 394000, 300763, 300141, 375954],
	[68, 257834, 251546, 415050, 314432, 314618, 393040],
	[69, 267406, 262807, 436917, 328509, 329556, 410636],
	[70, 276915, 274400, 459620, 343000, 344960, 428750],
	[71, 286567, 286329, 483180, 357911, 360838, 447389],
	[72, 296359, 298598, 507617, 373248, 377198, 466560],
	[73, 306286, 311214, 532953, 389017, 394045, 486271],
	[74, 316345, 324179, 559209, 405224, 411389, 506530],
	[75, 326531, 337500, 586406, 421875, 429235, 527344],
	[76, 336841, 351181, 614566, 438976, 447591, 548720],
	[77, 347269, 365226, 643712, 456533, 466465, 570666],
	[78, 357812, 379642, 673864, 474552, 485862, 593190],
	[79, 368353, 394431, 705046, 493039, 505792, 616299],
	[80, 379221, 409600, 737280, 512000, 526260, 640000],
	[81, 390078, 425153, 770589, 531441, 547274, 664301],
	[82, 401028, 441094, 804997, 551368, 568842, 689210],
	[83, 412068, 457430, 840527, 571787, 590969, 714734],
	[84, 423191, 474163, 877202, 592704, 613665, 740880],
	[85, 434391, 491300, 915046, 614125, 636935, 767656],
	[86, 445663, 508845, 954084, 636056, 660787, 795070],
	[87, 457001, 526802, 994340, 658503, 685229, 823129],
	[88, 468398, 545178, 1035837, 681472, 710266, 851840],
	[89, 479849, 563975, 1078603, 704969, 735908, 881211],
	[90, 491346, 583200, 1122660, 729000, 762160, 911250],
	[91, 502883, 602857, 1168035, 753571, 789030, 941964],
	[92, 514453, 622950, 1214753, 778688, 816526, 973360],
	[93, 526049, 643486, 1262840, 804357, 844653, 1005446],
	[94, 537665, 664467, 1312323, 830584, 873421, 1038230],
	[95, 549292, 685900, 1363226, 857375, 902835, 1071719],
	[96, 560923, 707789, 1415578, 884736, 932903, 1105920],
	[97, 572550, 730138, 1469404, 912673, 963633, 1140841],
	[98, 583167, 752954, 1524731, 941192, 995030, 1176490],
	[99, 591882, 776239, 1581587, 970299, 1027104, 1212874],
	[100, 600000, 800000, 1640000, 1000000, 1059860, 1250000]
];

//Pokemon background information per pokemon
var pokemon = [
	//level 1 and accompanying stats and moves by default, or level of evolvement
	// add pokemonEvolveItem
	// add Missingno (missing number) as pokemon?
	["pokemonNumber", "pokemonName", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield", "catchRate"],
	["001", "BULBASAUR", 1, "GRASS", "POISON", 16, "IVYSAUR", 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 64, 45],
	["002", "IVYSAUR", 1, "GRASS", "POISON", 32, "VENUSAUR", 12, 6, 6, 6, 6, 6, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 141, 45],
	["003", "VENUSAUR", 1, "GRASS", "POISON", 0, "", 12, 6, 6, 7, 7, 6, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 208, 45],
	["004", "CHARMANDER", 1, "FIRE", "", 16, "CHARMELEON", 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 65, 45],
	["005", "CHARMELEON", 1, "FIRE", "", 36, "CHARIZARD", 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 142, 45],
	["006", "CHARIZARD", 1, "FIRE", "FLYING", 0, "", 12, 6, 6, 7, 6, 7, "Scratch", "Growl", "Ember", "Smokescreen", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 209, 45],
	["007", "SQUIRTLE", 1, "WATER", "", 16, "WARTORTLE", 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 66, 45],
	["008", "WARTORTLE", 1, "WATER", "", 36, "BLASTOISE", 12, 6, 6, 6, 6, 6, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 143, 45],
	["009", "BLASTOISE", 1, "WATER", "", 0, "", 12, 6, 7, 7, 7, 6, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 210, 45],
	["010", "CATERPIE", 1, "BUG", "", 7, "METAPOD", 12, 5, 6, 5, 5, 6, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 53, 255],
	["011", "METAPOD", 1, "BUG", "", 10, "BUTTERFREE", 12, 5, 6, 5, 5, 5, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 72, 120],
	["012", "BUTTERFREE", 1, "BUG", "FLYING", 0, "", 12, 6, 6, 6, 6, 6, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 160, 45],
	["013", "WEEDLE", 1, "BUG", "POISON", 7, "KAKUNA", 12, 6, 5, 5, 5, 6, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 52, 255],
	["014", "KAKUNA", 1, "BUG", "POISON", 10, "BEEDRILL", 12, 5, 6, 5, 5, 6, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 71, 120],
	["015", "BEEDRILL", 1, "BUG", "POISON", 0, "", 12, 6, 6, 6, 6, 6, "Fury Attack", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 159, 45],
	["016", "PIDGEY", 1, "NORMAL", "FLYING", 18, "PIDGEOTTO", 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 55, 255],
	["017", "PIDGEOTTO", 1, "NORMAL", "FLYING", 36, "PIDGEOT", 12, 6, 6, 6, 6, 6, "Tackle", "Sand-attack", "Gust", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 113, 120],
	["018", "PIDGEOT", 1, "NORMAL", "FLYING", 0, "", 12, 6, 6, 6, 6, 7, "Tackle", "Sand-attack", "Gust", "Quick Attack", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 172, 45],
	["019", "RATTATA", 1, "NORMAL", "", 20, "RATICATE", 11, 6, 6, 6, 5, 6, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 57, 255],
	["020", "RATICATE", 1, "NORMAL", "", 0, "", 12, 6, 6, 6, 6, 7, "Tackle", "Tail Whip", "Quick Attack", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 116, 127],
	["021", "SPEAROW", 1, "NORMAL", "FLYING", 20, "FEAROW", 12, 6, 5, 5, 5, 6, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 58, 255],
	["022", "FEAROW", 1, "NORMAL", "FLYING", 0, "", 12, 7, 6, 6, 6, 7, "Peck", "Growl", "Leer", "Fury Attack", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 162, 90],
	["023", "EKANS", 1, "POISON", "", 22, "ARBOK", 12, 6, 6, 6, 6, 6, "Wrap", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 62, 255],
	["024", "ARBOK", 1, "POISON", "", 0, "", 12, 7, 6, 6, 6, 6, "Wrap", "Leer", "Poison Sting", "Bite", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 147, 90],
	["025", "PIKACHU", 1, "ELECTRIC", "", 0, "RAICHU", 12, 6, 5, 6, 6, 7, "Thundershock", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 82, 190],
	["026", "RAICHU", 1, "ELECTRIC", "", 0, "", 12, 7, 6, 7, 6, 7, "Thundershock", "Tail Whip", "Quick Attack", "Thunderbolt", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 122, 75],
	["027", "SANDSHREW", 1, "GROUND", "", 22, "SANDSLASH", 12, 6, 7, 5, 5, 6, "Scratch", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 93, 255],
	["028", "SANDSLASH", 1, "GROUND", "", 0, "", 12, 7, 7, 6, 6, 6, "Scratch", "Defense Curl", "Sand-attack", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 163, 90],
	["029", "NIDORAN_FEMALE", 1, "POISON", "", 16, "NIDORINA", 12, 6, 6, 6, 6, 6, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 59, 235],
	["030", "NIDORINA", 1, "POISON", "", 0, "NIDOQUEEN", 12, 6, 6, 6, 6, 6, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 117, 120],
	["031", "NIDOQUEEN", 1, "POISON", "GROUND", 0, "", 13, 6, 7, 6, 7, 6, "Scratch", "Tail Whip", "Double Kick", "Poison Sting", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 194, 45],
	["032", "NIDORAN_MALE", 1, "POISON", "", 16, "NIDORINO", 12, 6, 6, 6, 6, 6, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 60, 235],
	["033", "NIDORINO", 1, "POISON", "", 0, "NIDOKING", 12, 6, 6, 6, 6, 6, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 118, 120],
	["034", "NIDOKING", 1, "POISON", "GROUND", 0, "", 12, 7, 6, 7, 6, 7, "Peck", "Focus Energy", "Double Kick", "Poison Sting", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 195, 45],
	["035", "CLEFAIRY", 1, "NORMAL", "", 0, "CLEFABLE", 12, 6, 6, 6, 6, 6, "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(1, "FAST"), 68, 150],
	["036", "CLEFABLE", 1, "NORMAL", "", 0, "", 13, 6, 6, 7, 7, 6, "Sing", "Doubleslap", "Minimize", "Metronome", "FAST", 0, getExpNeededForNextLevel(1, "FAST"), 129, 25],
	["037", "VULPIX", 1, "FIRE", "", 0, "NINETALES", 12, 6, 6, 6, 6, 6, "Ember", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 63, 190],
	["038", "NINETALES", 1, "FIRE", "", 0, "", 12, 6, 6, 6, 7, 7, "Ember", "Quick Attack", "Confuse Ray", "Safeguard", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 178, 75],
	["039", "JIGGLYPUFF", 1, "NORMAL", "", 0, "WIGGLYTUFF", 13, 6, 5, 6, 5, 5, "Sing", "", "", "", "FAST", 0, getExpNeededForNextLevel(1, "FAST"), 76, 170],
	["040", "WIGGLYTUFF", 1, "NORMAL", "", 0, "", 14, 6, 6, 6, 6, 6, "Doubleslap", "Sing", "Disable", "Defense Curl", "FAST", 0, getExpNeededForNextLevel(1, "FAST"), 109, 50],
	["041", "ZUBAT", 1, "POISON", "FLYING", 22, "GOLBAT", 12, 6, 6, 5, 6, 6, "Leech Life", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 54, 255],
	["042", "GOLBAT", 1, "POISON", "FLYING", 0, "", 12, 6, 6, 6, 6, 7, "Screech", "Leech Life", "Astonish", "Supersonic", "expGroup", "currentExp", "expNextLevel", 171, 90],
	["043", "ODDISH", 1, "GRASS", "POISON", 21, "GLOOM", 12, 6, 6, 6, 6, 5, "Absorb", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 78, 255],
	["044", "GLOOM", 1, "GRASS", "POISON", 0, "VILEPLUME", 12, 6, 6, 7, 6, 6, "Absorb", "Sweet Scent", "Poisonpowder", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 132, 120],
	["045", "VILEPLUME", 1, "GRASS", "POISON", 0, "", 12, 6, 7, 7, 7, 6, "Absorb", "Aromatherapy", "Stun Spore", "Mega Drain", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 184, 45],
	["046", "PARAS", 1, "BUG", "GRASS", 24, "PARASECT", 12, 6, 6, 6, 6, 5, "Scratch", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 70, 190],
	["047", "PARASECT", 1, "BUG", "GRASS", 0, "", 12, 7, 6, 6, 6, 6, "Scratch", "Stun Spore", "Poisonpowder", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 128, 75],
	["048", "VENONAT", 1, "BUG", "POISON", 31, "VENOMOTH", 12, 6, 6, 6, 6, 6, "Tackle", "Disable", "Foresight", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 75, 190],
	// Supersonic is also a move that could be one of Venomoth its moves // http://www.serebii.net/pokedex-rs/049.shtml
	["049", "VENOMOTH", 1, "BUG", "POISON", 0, "", 12, 6, 6, 7, 6, 7, "Silver Wind", "Tackle", "Disable", "Foresight", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 138, 75],
	["050", "DIGLETT", 1, "GROUND", "", 26, "DUGTRIO", 11, 6, 5, 6, 6, 7, "Sand-attack", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 81, 255],
	["051", "DUGTRIO", 1, "GROUND", "", 0, "", 12, 6, 6, 6, 6, 7, "Tri Attack", "Scratch", "Sand-attack", "Growl", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 153, 50],
	["052", "MEOWTH", 1, "NORMAL", "", 28, "PERSIAN", 12, 6, 6, 6, 6, 7, "Scratch", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 69, 255],
	["053", "PERSIAN", 1, "NORMAL", "", 0, "", 12, 6, 6, 6, 6, 7, "Scratch", "Growl", "Bite", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 148, 90],
	["054", "PSYDUCK", 1, "WATER", "", 33, "GOLDUCK", 12, 6, 6, 6, 6, 6, "Water Sport", "Scratch", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 80, 190],
	["055", "GOLDUCK", 1, "WATER", "", 0, "", 12, 6, 6, 7, 6, 7, "Water Sport", "Scratch", "Tail Whip", "Disable", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 174, 75],
	["056", "MANKEY", 1, "FIGHTING", "", 28, "PRIMEAPE", 12, 6, 6, 6, 6, 6, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 74, 190],
	["057", "PRIMEAPE", 1, "FIGHTING", "", 0, "", 12, 7, 6, 6, 6, 7, "Scratch", "Leer", "Low Kick", "Rage", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 149, 75],
	["058", "GROWLITHE", 1, "FIRE", "", 0, "ARCANINE", 12, 6, 6, 6, 6, 6, "Bite", "Roar", "", "", "SLOW", 0, getExpNeededForNextLevel(1, "SLOW"), 91, 190],
	["059", "ARCANINE", 1, "FIRE", "", 0, "", 13, 7, 6, 7, 6, 7, "Bite", "Roar", "Ember", "Odor Sleuth", "SLOW", 0, getExpNeededForNextLevel(1, "SLOW"), 213, 75],
	["060", "POLIWAG", 1, "WATER", "", 25, "POLIWHIRL", 12, 6, 6, 6, 6, 7, "Bubble", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 77, 255],
	["061", "POLIWHIRL", 1, "WATER", "", 0, "POLIWRATH", 12, 6, 6, 5, 6, 7, "Bubble", "Hypnosis", "Water Gun", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 131, 120],
	["062", "POLIWRATH", 1, "WATER", "FIGHTING", 0, "", 13, 7, 7, 6, 7, 6, "Water Gun", "Doubleslap", "Hypnosis", "Submission", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 185, 45],
	["063", "ABRA", 1, "PSYCHIC", "", 16, "KADABRA", 11, 5, 5, 7, 6, 7, "Teleport", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 73, 200],
	["064", "KADABRA", 1, "PSYCHIC", "", 0, "ALAKAZAM", 12, 6, 5, 7, 6, 7, "Teleport", "Kinesis", "Confusion", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 145, 100],
	["065", "ALAKAZAM", 1, "PSYCHIC", "", 0, "", 12, 6, 6, 8, 7, 7, "Teleport", "Kinesis", "Confusion", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 186, 50],
	["066", "MACHOP", 1, "FIGHTING", "", 28, "MACHOKE", 12, 6, 6, 6, 6, 6, "Low Kick", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 88, 180],
	["067", "MACHOKE", 1, "FIGHTING", "", 0, "MACHAMP", 12, 7, 6, 6, 6, 6, "Low Kick", "Leer", "Focus Energy", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 146, 90],
	["068", "MACHAMP", 1, "FIGHTING", "", 0, "", 13, 7, 6, 6, 7, 6, "Low Kick", "Leer", "Focus Energy", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 193, 45],
	["069", "BELLSPROUT", 1, "GRASS", "POISON", 21, "WEEPINBELL", 12, 6, 6, 6, 5, 6, "Vine Whip", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 84, 255],
	["070", "WEEPINBELL", 1, "GRASS", "POISON", 0, "VICTREEBELL", 12, 7, 6, 7, 6, 6, "Vine Whip", "Growth", "Wrap", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 151, 120],
	["071", "VICTREEBELL", 1, "GRASS", "POISON", 0, "", 12, 7, 6, 7, 6, 6, "Vine Whip", "Sleep Powder", "Sweet Scent", "Razor Leaf", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 191, 45],
	["072", "TENTACOOL", 1, "WATER", "POISON", 30, "TENTACRUEL", 12, 6, 6, 6, 7, 6, "Poison Sting", "", "", "", "SLOW", 0, getExpNeededForNextLevel(1, "SLOW"), 105, 190],
	["073", "TENTACRUEL", 1, "WATER", "POISON", 0, "", 12, 6, 6, 6, 7, 7, "Poison Sting", "Supersonic", "Constrict", "", "SLOW", 0, getExpNeededForNextLevel(1, "SLOW"), 205, 60],
	["074", "GEODUDE", 1, "ROCK", "GROUND", 25, "GRAVELER", 12, 6, 7, 5, 5, 5, "Tackle", "Defense Curl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 86, 255],
	["075", "GRAVELER", 1, "ROCK", "GROUND", 0, "GOLEM", 12, 7, 7, 6, 6, 6, "Tackle", "Defense Curl", "Mud Sport", "Rock Throw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 134, 120],
	["076", "GOLEM", 1, "ROCK", "GROUND", 0, "", 12, 7, 7, 6, 6, 6, "Tackle", "Defense Curl", "Mud Sport", "Rock Throw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), 177, 45],
	["077", "PONYTA", 1, "FIRE", "", 40, "RAPIDASH", 12, 7, 6, 6, 6, 7, "Quick Attack", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 152, 190],
	["078", "RAPIDASH", 1, "FIRE", "", 0, "", 12, 7, 6, 6, 6, 7, "Quick Attack", "Growl", "Tail Whip", "Ember", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 192, 60],
	["079", "SLOWPOKE", 1, "WATER", "PSYCHIC", 37, "SLOWBRO", 13, 6, 6, 6, 6, 5, "Curse", "Yawn", "Tackle", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 99, 190],
	["080", "SLOWBRO", 1, "WATER", "PSYCHIC", 0, "", 13, 6, 7, 7, 6, 5, "Curse", "Yawn", "Tackle", "Growl", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 164, 75],
	["081", "MAGNEMITE", 1, "ELECTRIC", "STEEL", 30, "MAGNETON", 13, 6, 6, 6, 6, 5, "Metal Sound", "Tackle", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 89, 190],
	["082", "MAGNETON", 1, "ELECTRIC", "STEEL", 0, "", 12, 6, 7, 7, 6, 6, "Metal Sound", "Tackle", "Thundershock", "Supersonic", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 161, 60],
	["083", "FARFETCH_D", 1, "NORMAL", "FLYING", 0, "", 12, 6, 6, 6, 6, 6, "Peck", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 94, 45],
	["084", "DODUO", 1, "NORMAL", "FLYING", 31, "DODRIO", 12, 7, 6, 6, 6, 6, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 96, 190],
	["085", "DODRIO", 1, "NORMAL", "FLYING", 0, "", 12, 7, 6, 6, 6, 7, "Peck", "Growl", "Pursuit", "Fury Attack", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 158, 45],
	["086", "SEEL", 1, "WATER", "", 34, "DEWGONG", 12, 6, 6, 6, 6, 6, "Headbutt", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 100, 190],
	["087", "DEWGONG", 1, "WATER", "ICE", 0, "", 13, 6, 6, 6, 7, 6, "Signal Beam", "Headbutt", "Icy Wind", "Aurora Beam", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 176, 75],
	["088", "GRIMER", 1, "POISON", "", 38, "MUK", 12, 6, 6, 6, 6, 5, "Poison Gas", "Pound", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 90, 190],
	["089", "MUK", 1, "POISON", "", 0, "", 13, 7, 6, 6, 7, 6, "Poison Gas", "Pound", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), 157, 75],
	["090", "SHELLDER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["091", "CLOYSTER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["092", "GASTLY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["093", "HAUNTER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["094", "GENGAR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["095", "ONIX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["096", "DROWZEE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["097", "HYPNO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["098", "KRABBY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["099", "KINGLER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["100", "VOLTORB", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["101", "ELECTRODE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["102", "EXEGGCUTE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["103", "EXEGGUTOR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["104", "CUBONE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["105", "MAROWAK", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["106", "HITMONLEE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["107", "HITMONCHAN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["108", "LICKITUNG", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["109", "KOFFING", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["110", "WEEZING", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["111", "RHYHORN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["112", "RHYDON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["113", "CHANSEY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["114", "TANGELA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["115", "KANGASKHAN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["116", "HORSEA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["117", "SEADREA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["118", "GOLDEEN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["119", "SEAKING", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["120", "STARYU", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["121", "STARMIE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["122", "MR_MIME", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["123", "SCYTHER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["124", "JYNX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["125", "ELECTABUZZ", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["126", "MAGMAR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["127", "PINSIR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["128", "TAUROS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["129", "MAGIKARP", 1, "WATER", "", 20, "GYARADOS", 11, 5, 6, 5, 5, 6, "Splash", "", "", "", "SLOW", 0, getExpNeededForNextLevel(1, "SLOW"), 20, 255],
	["130", "GYARADOS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["131", "LAPRAS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["132", "DITTO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["133", "EEVEE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["134", "VAPOREON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["135", "JOLTEON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["136", "FLAREON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["137", "PORYGON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["138", "OMANYTE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["139", "OMASTAR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["140", "KABUTO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["141", "KABUTOPS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["142", "AERODACTYL", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["143", "SNORLAX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["144", "ARTICUNO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["145", "ZAPDOS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["146", "MOLTRES", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["147", "DRATINI", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["148", "DRAGONAIR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["149", "DRAGONITE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["150", "MEWTWO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["151", "MEW", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"]
];

// Pokemon background information per pokemon per level
var pokemonStats = [ //make the variables here the same as for the function createPokemon() //add exp needed for level up?
	// Experience: http://www.psypokes.com/lab/expguide.php
/* Enemy Experience Stat * Enemy Level Stat * Enemy Tame Stat / 7 = Exp
 * Note: This Equation is not entirely accurate, but it will still be very close to the actual number.
 * Okay. First, the Enemy Experience Stat is a special stat given to each individual species of Pokemon (See Section 3.2 for list and details) and is applied here. 
 * Next, is the level of the enemy. 
 * Next, is either a 1 or a 1.5 on whether your enemy is a trainer's pokemon. If it's wild, it's 1, if it's a Trainer's, it's 1.5. 
 * Finally, divide all this by 7, add any applied boosters, split evenly between Pokemon that battled, round them, and you've got about how many points each will earn from the battle. */
	["pokemonNumber", "pokemonName", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolveName", "currentHP", "maxHP", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield", "catchRate"],
	["001", "BULBASAUR", 1, "GRASS", "POISON", 16, "IVYSAUR", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 2, "GRASS", "POISON", 16, "IVYSAUR", 14, 14, 7, 7, 8, 8, 7, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 3, "GRASS", "POISON", 16, "IVYSAUR", 16, 16, 8, 8, 9, 9, 8, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 4, "GRASS", "POISON", 16, "IVYSAUR", 18, 18, 11, 11, 12, 12, 9, "Tackle", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 5, "GRASS", "POISON", 16, "IVYSAUR", 21, 21, 12, 12, 14, 14, 12, "Tackle", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 6, "GRASS", "POISON", 16, "IVYSAUR", 23, 23, 13, 13, 15, 15, 13, "Tackle", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 7, "GRASS", "POISON", 16, "IVYSAUR", 25, 25, 15, 15, 17, 17, 14, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 8, "GRASS", "POISON", 16, "IVYSAUR", 27, 27, 16, 16, 18, 18, 15, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 9, "GRASS", "POISON", 16, "IVYSAUR", 29, 29, 17, 17, 20, 20, 16, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 10, "GRASS", "POISON", 16, "IVYSAUR", 32, 32, 18, 18, 23, 23, 18, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 11, "GRASS", "POISON", 16, "IVYSAUR", 34, 34, 20, 20, 24, 24, 19, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 12, "GRASS", "POISON", 16, "IVYSAUR", 36, 36, 22, 22, 26, 26, 20, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 13, "GRASS", "POISON", 16, "IVYSAUR", 38, 38, 23, 23, 27, 27, 22, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 14, "GRASS", "POISON", 16, "IVYSAUR", 40, 40, 25, 25, 29, 29, 23, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 15, "GRASS", "POISON", 16, "IVYSAUR", 43, 43, 26, 26, 31, 31, 25, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 16, "GRASS", "POISON", 16, "IVYSAUR", 45, 45, 27, 27, 33, 33, 26, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 17, "GRASS", "POISON", 16, "IVYSAUR", 47, 47, 28, 28, 35, 35, 27, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(17, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 18, "GRASS", "POISON", 16, "IVYSAUR", 49, 49, 30, 30, 36, 36, 28, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(18, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 19, "GRASS", "POISON", 16, "IVYSAUR", 51, 51, 31, 31, 38, 38, 29, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(19, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["001", "BULBASAUR", 20, "GRASS", "POISON", 16, "IVYSAUR", 54, 54, 33, 33, 40, 40, 31, "Tackle", "Razor Leaf", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(20, "MEDIUMSLOW"), getBaseExpYield("001"), getCatchRate("001")],
	["002", "IVYSAUR", 1, "GRASS", "POISON", 32, "VENUSAUR", 12, 12, 6, 6, 6, 6, 6, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 2, "GRASS", "POISON", 32, "VENUSAUR", 15, 15, 8, 8, 8, 8, 8, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 3, "GRASS", "POISON", 32, "VENUSAUR", 17, 17, 9, 9, 11, 11, 9, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 4, "GRASS", "POISON", 32, "VENUSAUR", 20, 20, 12, 12, 13, 13, 12, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 5, "GRASS", "POISON", 32, "VENUSAUR", 22, 22, 13, 13, 15, 15, 13, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 6, "GRASS", "POISON", 32, "VENUSAUR", 25, 25, 15, 15, 17, 17, 15, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 7, "GRASS", "POISON", 32, "VENUSAUR", 27, 27, 16, 16, 19, 19, 16, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 8, "GRASS", "POISON", 32, "VENUSAUR", 30, 30, 18, 18, 22, 22, 18, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 9, "GRASS", "POISON", 32, "VENUSAUR", 32, 32, 19, 20, 24, 24, 19, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 10, "GRASS", "POISON", 32, "VENUSAUR", 35, 35, 22, 22, 26, 26, 22, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 11, "GRASS", "POISON", 32, "VENUSAUR", 37, 37, 24, 24, 28, 28, 23, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 12, "GRASS", "POISON", 32, "VENUSAUR", 40, 40, 25, 25, 29, 29, 25, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 13, "GRASS", "POISON", 32, "VENUSAUR", 42, 42, 27, 27, 31, 31, 26, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 14, "GRASS", "POISON", 32, "VENUSAUR", 45, 45, 28, 28, 34, 34, 28, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 15, "GRASS", "POISON", 32, "VENUSAUR", 47, 47, 30, 30, 36, 36, 29, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 16, "GRASS", "POISON", 32, "VENUSAUR", 50, 50, 31, 33, 38, 38, 31, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 17, "GRASS", "POISON", 32, "VENUSAUR", 52, 52, 34, 34, 40, 40, 33, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(17, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 18, "GRASS", "POISON", 32, "VENUSAUR", 55, 55, 35, 36, 42, 42, 35, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(18, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 19, "GRASS", "POISON", 32, "VENUSAUR", 57, 57, 37, 37, 45, 45, 36, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(19, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["002", "IVYSAUR", 20, "GRASS", "POISON", 32, "VENUSAUR", 60, 60, 39, 39, 47, 47, 38, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(20, "MEDIUMSLOW"), getBaseExpYield("002"), getCatchRate("002")],
	["003", "VENUSAUR", 1, "GRASS", "POISON", 0, "", 12, 12, 6, 6, 7, 7, 6, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 2, "GRASS", "POISON", 0, "", 15, 15, 8, 8, 9, 9, 8, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 3, "GRASS", "POISON", 0, "", 18, 18, 11, 11, 12, 12, 11, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 4, "GRASS", "POISON", 0, "", 21, 21, 13, 13, 15, 15, 13, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 5, "GRASS", "POISON", 0, "", 24, 24, 15, 15, 17, 17, 15, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 6, "GRASS", "POISON", 0, "", 27, 27, 17, 17, 19, 19, 17, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 7, "GRASS", "POISON", 0, "", 30, 30, 19, 19, 23, 23, 19, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 8, "GRASS", "POISON", 0, "", 33, 33, 22, 22, 25, 25, 22, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 9, "GRASS", "POISON", 0, "", 36, 36, 24, 24, 27, 27, 24, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 10, "GRASS", "POISON", 0, "", 39, 39, 26, 26, 30, 30, 26, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 11, "GRASS", "POISON", 0, "", 42, 42, 28, 28, 33, 33, 28, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 12, "GRASS", "POISON", 0, "", 44, 44, 30, 30, 35, 35, 29, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 13, "GRASS", "POISON", 0, "", 47, 47, 33, 33, 38, 38, 31, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 14, "GRASS", "POISON", 0, "", 50, 50, 35, 35, 40, 40, 34, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 15, "GRASS", "POISON", 0, "", 53, 53, 37, 37, 42, 42, 36, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 16, "GRASS", "POISON", 0, "", 56, 56, 39, 39, 45, 45, 38, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 17, "GRASS", "POISON", 0, "", 59, 59, 41, 41, 48, 48, 40, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(17, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 18, "GRASS", "POISON", 0, "", 62, 62, 44, 44, 50, 50, 42, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(18, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 19, "GRASS", "POISON", 0, "", 65, 65, 46, 46, 52, 52, 45, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(19, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["003", "VENUSAUR", 20, "GRASS", "POISON", 0, "", 68, 68, 48, 48, 56, 56, 47, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(20, "MEDIUMSLOW"), getBaseExpYield("003"), getCatchRate("003")],
	["004", "CHARMANDER", 1, "FIRE", "", 16, "CHARMELEON", 12, 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 2, "FIRE", "", 16, "CHARMELEON", 14, 14, 7, 7, 8, 7, 8, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 3, "FIRE", "", 16, "CHARMELEON", 16, 16, 9, 8, 9, 8, 9, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 4, "FIRE", "", 16, "CHARMELEON", 18, 18, 11, 9, 12, 11, 12, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 5, "FIRE", "", 16, "CHARMELEON", 20, 20, 12, 11, 13, 12, 14, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 6, "FIRE", "", 16, "CHARMELEON", 22, 22, 14, 13, 15, 13, 15, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 7, "FIRE", "", 16, "CHARMELEON", 24, 24, 15, 14, 16, 15, 17, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 8, "FIRE", "", 16, "CHARMELEON", 26, 26, 16, 15, 18, 16, 18, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 9, "FIRE", "", 16, "CHARMELEON", 28, 28, 18, 16, 19, 17, 20, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 10, "FIRE", "", 16, "CHARMELEON", 30, 30, 19, 17, 22, 19, 23, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 11, "FIRE", "", 16, "CHARMELEON", 32, 32, 20, 18, 23, 20, 24, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 12, "FIRE", "", 16, "CHARMELEON", 35, 35, 23, 20, 25, 22, 26, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 13, "FIRE", "", 16, "CHARMELEON", 37, 37, 24, 22, 26, 24, 27, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 14, "FIRE", "", 16, "CHARMELEON", 39, 39, 25, 23, 28, 25, 29, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 15, "FIRE", "", 16, "CHARMELEON", 41, 41, 27, 24, 29, 26, 31, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 16, "FIRE", "", 16, "CHARMELEON", 43, 43, 28, 25, 31, 27, 33, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 17, "FIRE", "", 16, "CHARMELEON", 45, 45, 29, 26, 33, 29, 35, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(17, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 18, "FIRE", "", 16, "CHARMELEON", 47, 47, 31, 28, 35, 30, 36, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(18, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 19, "FIRE", "", 16, "CHARMELEON", 49, 49, 33, 29, 36, 31, 38, "Scratch", "Smokescreen", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(19, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["004", "CHARMANDER", 20, "FIRE", "", 16, "CHARMELEON", 51, 51, 35, 30, 38, 34, 40, "Scratch", "Smokescreen", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(20, "MEDIUMSLOW"), getBaseExpYield("004"), getCatchRate("004")],
	["005", "CHARMELEON", 1, "FIRE", "", 36, "CHARIZARD", 12, 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 2, "FIRE", "", 36, "CHARIZARD", 14, 14, 8, 7, 8, 8, 8, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 3, "FIRE", "", 36, "CHARIZARD", 17, 17, 9, 9, 11, 9, 11, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 4, "FIRE", "", 36, "CHARIZARD", 19, 19, 12, 11, 13, 12, 13, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 5, "FIRE", "", 36, "CHARIZARD", 22, 22, 13, 13, 15, 14, 15, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 6, "FIRE", "", 36, "CHARIZARD", 24, 24, 15, 14, 17, 15, 17, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 7, "FIRE", "", 36, "CHARIZARD", 27, 27, 17, 16, 19, 17, 19, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 8, "FIRE", "", 36, "CHARIZARD", 29, 29, 18, 17, 22, 18, 22, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 9, "FIRE", "", 36, "CHARIZARD", 32, 32, 20, 19, 24, 20, 24, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 10, "FIRE", "", 36, "CHARIZARD", 34, 34, 22, 20, 26, 23, 26, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 11, "FIRE", "", 36, "CHARIZARD", 37, 37, 24, 23, 28, 24, 28, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 12, "FIRE", "", 36, "CHARIZARD", 39, 39, 26, 24, 29, 26, 29, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 13, "FIRE", "", 36, "CHARIZARD", 42, 42, 27, 26, 31, 27, 31, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 14, "FIRE", "", 36, "CHARIZARD", 44, 44, 29, 27, 34, 29, 34, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 15, "FIRE", "", 36, "CHARIZARD", 47, 47, 30, 29, 36, 31, 36, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 16, "FIRE", "", 36, "CHARIZARD", 49, 49, 33, 30, 38, 33, 38, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 17, "FIRE", "", 36, "CHARIZARD", 51, 51, 35, 31, 40, 35, 40, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(17, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 18, "FIRE", "", 36, "CHARIZARD", 54, 54, 36, 34, 42, 36, 42, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(18, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 19, "FIRE", "", 36, "CHARIZARD", 56, 56, 38, 35, 45, 38, 45, "Scratch", "Growl", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(19, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["005", "CHARMELEON", 20, "FIRE", "", 36, "CHARIZARD", 59, 59, 39, 37, 47, 40, 47, "Scratch", "Smokescreen", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(20, "MEDIUMSLOW"), getBaseExpYield("005"), getCatchRate("005")],
	["006", "CHARIZARD", 1, "FIRE", "FLYING", 0, "", 12, 12, 6, 6, 7, 6, 7, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 2, "FIRE", "FLYING", 0, "", 15, 15, 8, 8, 9, 8, 9, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 3, "FIRE", "FLYING", 0, "", 18, 18, 11, 11, 13, 9, 12, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 4, "FIRE", "FLYING", 0, "", 21, 21, 13, 13, 15, 12, 15, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 5, "FIRE", "FLYING", 0, "", 24, 24, 15, 15, 18, 14, 17, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 6, "FIRE", "FLYING", 0, "", 27, 27, 17, 17, 20, 15, 19, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 7, "FIRE", "FLYING", 0, "", 30, 30, 19, 19, 24, 17, 23, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 8, "FIRE", "FLYING", 0, "", 32, 32, 22, 20, 26, 18, 25, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 9, "FIRE", "FLYING", 0, "", 35, 35, 24, 23, 29, 20, 27, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 10, "FIRE", "FLYING", 0, "", 38, 38, 26, 25, 31, 23, 30, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 11, "FIRE", "FLYING", 0, "", 41, 41, 28, 27, 35, 24, 33, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 12, "FIRE", "FLYING", 0, "", 44, 44, 30, 29, 37, 26, 35, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 13, "FIRE", "FLYING", 0, "", 47, 47, 33, 31, 40, 27, 38, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 14, "FIRE", "FLYING", 0, "", 50, 50, 35, 34, 42, 29, 40, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 15, "FIRE", "FLYING", 0, "", 53, 53, 37, 36, 46, 31, 42, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 16, "FIRE", "FLYING", 0, "", 55, 55, 39, 37, 48, 33, 45, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 17, "FIRE", "FLYING", 0, "", 58, 58, 41, 39, 51, 35, 48, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(17, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 18, "FIRE", "FLYING", 0, "", 61, 61, 44, 41, 53, 36, 50, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(18, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 19, "FIRE", "FLYING", 0, "", 64, 64, 46, 44, 57, 38, 52, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(19, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["006", "CHARIZARD", 20, "FIRE", "FLYING", 0, "", 67, 67, 48, 46, 59, 40, 56, "Scratch", "Heat Wave", "Ember", "Metal Claw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(20, "MEDIUMSLOW"), getBaseExpYield("006"), getCatchRate("006")],
	["007", "SQUIRTLE", 1, "WATER", "", 16, "WARTORTLE", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 2, "WATER", "", 16, "WARTORTLE", 14, 14, 7, 8, 7, 8, 7, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 3, "WATER", "", 16, "WARTORTLE", 16, 16, 8, 9, 8, 9, 8, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 4, "WATER", "", 16, "WARTORTLE", 18, 18, 11, 12, 11, 12, 9, "Tackle", "Tail Whip", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 5, "WATER", "", 16, "WARTORTLE", 20, 20, 12, 14, 12, 13, 11, "Tackle", "Tail Whip", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 6, "WATER", "", 16, "WARTORTLE", 23, 23, 13, 15, 13, 15, 13, "Tackle", "Tail Whip", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 7, "WATER", "", 16, "WARTORTLE", 25, 25, 14, 17, 15, 17, 14, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 8, "WATER", "", 16, "WARTORTLE", 27, 27, 16, 18, 16, 18, 15, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 9, "WATER", "", 16, "WARTORTLE", 29, 29, 17, 20, 17, 20, 16, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 10, "WATER", "", 16, "WARTORTLE", 31, 31, 18, 23, 19, 22, 17, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 11, "WATER", "", 16, "WARTORTLE", 34, 34, 19, 24, 20, 24, 18, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 12, "WATER", "", 16, "WARTORTLE", 36, 36, 22, 26, 22, 26, 20, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 13, "WATER", "", 16, "WARTORTLE", 38, 38, 23, 27, 24, 27, 22, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 14, "WATER", "", 16, "WARTORTLE", 40, 40, 24, 29, 25, 29, 23, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 15, "WATER", "", 16, "WARTORTLE", 42, 42, 26, 31, 26, 30, 24, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 16, "WATER", "", 16, "WARTORTLE", 45, 45, 27, 33, 27, 33, 25, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 17, "WATER", "", 16, "WARTORTLE", 47, 47, 28, 35, 29, 35, 26, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(17, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 18, "WATER", "", 16, "WARTORTLE", 49, 49, 29, 36, 30, 36, 28, "Tackle", "Bite", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(18, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 19, "WATER", "", 16, "WARTORTLE", 51, 51, 31, 38, 31, 38, 29, "Tackle", "Bite", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(19, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["007", "SQUIRTLE", 20, "WATER", "", 16, "WARTORTLE", 53, 53, 33, 40, 34, 39, 30, "Tackle", "Bite", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(20, "MEDIUMSLOW"), getBaseExpYield("007"), getCatchRate("007")],
	["008", "WARTORTLE", 1, "WATER", "", 36, "BLASTOISE", 12, 12, 6, 6, 6, 6, 6, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 2, "WATER", "", 36, "BLASTOISE", 14, 14, 8, 8, 8, 8, 7, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 3, "WATER", "", 36, "BLASTOISE", 17, 17, 9, 11, 9, 11, 9, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 4, "WATER", "", 36, "BLASTOISE", 19, 19, 12, 13, 12, 13, 11, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 5, "WATER", "", 36, "BLASTOISE", 22, 22, 13, 15, 14, 15, 13, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 6, "WATER", "", 36, "BLASTOISE", 24, 24, 15, 17, 15, 17, 14, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 7, "WATER", "", 36, "BLASTOISE", 27, 27, 16, 19, 17, 19, 16, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 8, "WATER", "", 36, "BLASTOISE", 29, 29, 18, 22, 18, 22, 17, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 9, "WATER", "", 36, "BLASTOISE", 32, 32, 20, 24, 20, 24, 19, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 10, "WATER", "", 36, "BLASTOISE", 34, 34, 22, 26, 23, 26, 20, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 11, "WATER", "", 36, "BLASTOISE", 37, 37, 24, 28, 24, 28, 23, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 12, "WATER", "", 36, "BLASTOISE", 39, 39, 25, 29, 26, 29, 24, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 13, "WATER", "", 36, "BLASTOISE", 42, 42, 27, 31, 27, 31, 26, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 14, "WATER", "", 36, "BLASTOISE", 44, 44, 28, 34, 29, 34, 27, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 15, "WATER", "", 36, "BLASTOISE", 47, 47, 30, 36, 31, 36, 29, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 16, "WATER", "", 36, "BLASTOISE", 49, 49, 33, 38, 33, 38, 30, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 17, "WATER", "", 36, "BLASTOISE", 52, 52, 34, 40, 35, 40, 31, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(17, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 18, "WATER", "", 36, "BLASTOISE", 54, 54, 36, 42, 36, 42, 34, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(18, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 19, "WATER", "", 36, "BLASTOISE", 57, 57, 37, 45, 38, 45, 35, "Tackle", "Bite", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(19, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["008", "WARTORTLE", 20, "WATER", "", 36, "BLASTOISE", 59, 59, 39, 47, 40, 47, 37, "Tackle", "Bite", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(20, "MEDIUMSLOW"), getBaseExpYield("008"), getCatchRate("008")],
	["009", "BLASTOISE", 1, "WATER", "", 0, "", 12, 12, 6, 7, 7, 7, 6, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 2, "WATER", "", 0, "", 15, 15, 8, 9, 9, 9, 8, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 3, "WATER", "", 0, "", 18, 18, 11, 12, 12, 13, 11, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 4, "WATER", "", 0, "", 21, 21, 13, 15, 14, 15, 13, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 5, "WATER", "", 0, "", 24, 24, 15, 17, 16, 18, 15, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 6, "WATER", "", 0, "", 27, 27, 17, 19, 18, 20, 17, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 7, "WATER", "", 0, "", 30, 30, 19, 23, 20, 23, 19, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 8, "WATER", "", 0, "", 33, 33, 22, 25, 23, 26, 20, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 9, "WATER", "", 0, "", 36, 36, 24, 27, 25, 28, 23, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 10, "WATER", "", 0, "", 38, 38, 26, 30, 27, 31, 25, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 11, "WATER", "", 0, "", 41, 41, 28, 33, 29, 34, 27, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 12, "WATER", "", 0, "", 44, 44, 30, 35, 31, 36, 29, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 13, "WATER", "", 0, "", 47, 47, 33, 38, 34, 39, 31, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 14, "WATER", "", 0, "", 50, 50, 35, 40, 36, 41, 34, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 15, "WATER", "", 0, "", 53, 53, 37, 42, 38, 45, 36, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 16, "WATER", "", 0, "", 56, 56, 39, 45, 40, 47, 37, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 17, "WATER", "", 0, "", 59, 59, 41, 48, 42, 49, 39, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(17, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 18, "WATER", "", 0, "", 62, 62, 44, 50, 45, 52, 41, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(18, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 19, "WATER", "", 0, "", 64, 64, 46, 52, 47, 55, 44, "Tackle", "Bite", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(19, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["009", "BLASTOISE", 20, "WATER", "", 0, "", 67, 67, 48, 56, 49, 58, 46, "Tackle", "Bite", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(20, "MEDIUMSLOW"), getBaseExpYield("009"), getCatchRate("009")],
	["010", "CATERPIE", 1, "BUG", "", 7, "METAPOD", 12, 12, 5, 6, 5, 5, 6, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 2, "BUG", "", 7, "METAPOD", 14, 14, 6, 7, 6, 6, 7, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 3, "BUG", "", 7, "METAPOD", 16, 16, 7, 8, 7, 7, 8, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 4, "BUG", "", 7, "METAPOD", 18, 18, 8, 9, 7, 7, 9, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 5, "BUG", "", 7, "METAPOD", 21, 21, 9, 11, 8, 8, 12, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 6, "BUG", "", 7, "METAPOD", 23, 23, 11, 12, 9, 9, 13, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 7, "BUG", "", 7, "METAPOD", 25, 25, 12, 13, 9, 9, 14, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 8, "BUG", "", 7, "METAPOD", 27, 27, 13, 14, 11, 11, 15, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 9, "BUG", "", 7, "METAPOD", 29, 29, 14, 15, 12, 12, 16, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 10, "BUG", "", 7, "METAPOD", 32, 32, 15, 16, 13, 13, 18, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 11, "BUG", "", 7, "METAPOD", 34, 34, 16, 17, 13, 13, 19, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(11, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 12, "BUG", "", 7, "METAPOD", 36, 36, 16, 18, 14, 14, 20, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(12, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 13, "BUG", "", 7, "METAPOD", 38, 38, 17, 19, 15, 15, 22, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(13, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 14, "BUG", "", 7, "METAPOD", 40, 40, 18, 20, 15, 15, 23, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(14, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 15, "BUG", "", 7, "METAPOD", 43, 43, 19, 22, 16, 16, 25, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(15, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 16, "BUG", "", 7, "METAPOD", 45, 45, 20, 23, 17, 17, 26, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(16, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 17, "BUG", "", 7, "METAPOD", 47, 47, 22, 24, 18, 18, 27, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(17, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 18, "BUG", "", 7, "METAPOD", 49, 49, 23, 25, 18, 18, 28, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(18, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 19, "BUG", "", 7, "METAPOD", 51, 51, 24, 26, 19, 19, 29, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(19, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["010", "CATERPIE", 20, "BUG", "", 7, "METAPOD", 54, 54, 25, 27, 20, 20, 31, "Tackle", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(20, "MEDIUMFAST"), getBaseExpYield("010"), getCatchRate("010")],
	["011", "METAPOD", 1, "BUG", "", 10, "BUTTERFREE", 12, 12, 5, 6, 5, 5, 5, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 2, "BUG", "", 10, "BUTTERFREE", 14, 14, 6, 7, 6, 6, 6, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 3, "BUG", "", 10, "BUTTERFREE", 16, 16, 7, 9, 7, 7, 7, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 4, "BUG", "", 10, "BUTTERFREE", 19, 19, 7, 11, 8, 8, 8, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 5, "BUG", "", 10, "BUTTERFREE", 21, 21, 8, 13, 9, 9, 9, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 6, "BUG", "", 10, "BUTTERFREE", 23, 23, 9, 14, 9, 9, 11, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 7, "BUG", "", 10, "BUTTERFREE", 26, 26, 9, 15, 11, 11, 12, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 8, "BUG", "", 10, "BUTTERFREE", 28, 28, 11, 17, 12, 12, 13, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 9, "BUG", "", 10, "BUTTERFREE", 30, 30, 12, 18, 13, 13, 14, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 10, "BUG", "", 10, "BUTTERFREE", 33, 33, 13, 20, 14, 14, 15, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 11, "BUG", "", 10, "BUTTERFREE", 35, 35, 13, 22, 14, 14, 16, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(11, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 12, "BUG", "", 10, "BUTTERFREE", 37, 37, 14, 34, 15, 15, 16, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(12, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 13, "BUG", "", 10, "BUTTERFREE", 40, 40, 15, 25, 16, 16, 17, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(13, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 14, "BUG", "", 10, "BUTTERFREE", 42, 42, 15, 26, 17, 17, 18, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(14, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 15, "BUG", "", 10, "BUTTERFREE", 44, 44, 16, 28, 18, 18, 19, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(15, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 16, "BUG", "", 10, "BUTTERFREE", 46, 46, 17, 29, 18, 18, 20, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(16, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 17, "BUG", "", 10, "BUTTERFREE", 49, 49, 18, 30, 19, 19, 22, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(17, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 18, "BUG", "", 10, "BUTTERFREE", 51, 51, 18, 33, 20, 20, 23, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(18, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 19, "BUG", "", 10, "BUTTERFREE", 53, 53, 19, 34, 22, 22, 24, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(19, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["011", "METAPOD", 20, "BUG", "", 10, "BUTTERFREE", 56, 56, 20, 36, 23, 23, 25, "Tackle", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(20, "MEDIUMFAST"), getBaseExpYield("011"), getCatchRate("011")],
	["012", "BUTTERFREE", 1, "BUG", "FLYING", 0, "", 12, 12, 6, 6, 6, 6, 6, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 2, "BUG", "FLYING", 0, "", 15, 15, 7, 7, 8, 8, 8, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 3, "BUG", "FLYING", 0, "", 17, 17, 8, 8, 11, 11, 11, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 4, "BUG", "FLYING", 0, "", 20, 20, 9, 11, 13, 13, 12, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 5, "BUG", "FLYING", 0, "", 22, 22, 12, 12, 15, 15, 14, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 6, "BUG", "FLYING", 0, "", 25, 25, 13, 13, 17, 17, 16, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 7, "BUG", "FLYING", 0, "", 27, 27, 14, 15, 19, 19, 17, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 8, "BUG", "FLYING", 0, "", 30, 30, 15, 16, 22, 22, 19, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 9, "BUG", "FLYING", 0, "", 32, 32, 16, 17, 24, 24, 22, "Confusion", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 10, "BUG", "FLYING", 0, "", 35, 35, 18, 19, 26, 26, 24, "Confusion", "Tackle", "String Shot", "Harden", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 11, "BUG", "FLYING", 0, "", 37, 37, 19, 20, 28, 28, 25, "Confusion", "Tackle", "String Shot", "Harden", "MEDIUMFAST", 0, getExpNeededForNextLevel(11, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 12, "BUG", "FLYING", 0, "", 40, 40, 20, 22, 29, 29, 27, "Confusion", "Tackle", "String Shot", "Harden", "MEDIUMFAST", 0, getExpNeededForNextLevel(12, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 13, "BUG", "FLYING", 0, "", 42, 42, 22, 24, 31, 31, 29, "Confusion", "Tackle", "String Shot", "Poisonpowder", "MEDIUMFAST", 0, getExpNeededForNextLevel(13, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 14, "BUG", "FLYING", 0, "", 45, 45, 23, 25, 34, 34, 30, "Confusion", "Tackle", "Stun Spore", "Poisonpowder", "MEDIUMFAST", 0, getExpNeededForNextLevel(14, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 15, "BUG", "FLYING", 0, "", 47, 47, 25, 26, 36, 36, 33, "Confusion", "Tackle", "Sleep Powder", "Poisonpowder", "MEDIUMFAST", 0, getExpNeededForNextLevel(15, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 16, "BUG", "FLYING", 0, "", 50, 50, 26, 27, 38, 38, 35, "Confusion", "Tackle", "Sleep Powder", "Poisonpowder", "MEDIUMFAST", 0, getExpNeededForNextLevel(16, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 17, "BUG", "FLYING", 0, "", 52, 52, 27, 29, 40, 40, 37, "Confusion", "Tackle", "Sleep Powder", "Poisonpowder", "MEDIUMFAST", 0, getExpNeededForNextLevel(17, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 18, "BUG", "FLYING", 0, "", 55, 55, 28, 30, 42, 42, 38, "Confusion", "Tackle", "Sleep Powder", "Poisonpowder", "MEDIUMFAST", 0, getExpNeededForNextLevel(18, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 19, "BUG", "FLYING", 0, "", 57, 57, 29, 31, 45, 45, 40, "Confusion", "Tackle", "Sleep Powder", "Poisonpowder", "MEDIUMFAST", 0, getExpNeededForNextLevel(19, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["012", "BUTTERFREE", 20, "BUG", "FLYING", 0, "", 60, 60, 31, 34, 47, 47, 42, "Confusion", "Tackle", "Sleep Powder", "Poisonpowder", "MEDIUMFAST", 0, getExpNeededForNextLevel(20, "MEDIUMFAST"), getBaseExpYield("012"), getCatchRate("012")],
	["013", "WEEDLE", 1, "BUG", "POISON", 7, "KAKUNA", 12, 12, 6, 5, 5, 5, 6, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["013", "WEEDLE", 2, "BUG", "POISON", 7, "KAKUNA", 14, 14, 7, 6, 6, 6, 7, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["013", "WEEDLE", 3, "BUG", "POISON", 7, "KAKUNA", 16, 16, 8, 7, 7, 7, 8, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["013", "WEEDLE", 4, "BUG", "POISON", 7, "KAKUNA", 18, 18, 9, 8, 7, 7, 11, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["013", "WEEDLE", 5, "BUG", "POISON", 7, "KAKUNA", 20, 20, 11, 9, 8, 8, 12, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["013", "WEEDLE", 6, "BUG", "POISON", 7, "KAKUNA", 22, 22, 12, 11, 9, 9, 13, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["013", "WEEDLE", 7, "BUG", "POISON", 7, "KAKUNA", 24, 24, 13, 12, 9, 9, 15, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["013", "WEEDLE", 8, "BUG", "POISON", 7, "KAKUNA", 26, 26, 14, 13, 11, 11, 16, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["013", "WEEDLE", 9, "BUG", "POISON", 7, "KAKUNA", 28, 28, 15, 14, 12, 12, 17, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["013", "WEEDLE", 10, "BUG", "POISON", 7, "KAKUNA", 31, 31, 16, 15, 13, 13, 19, "Poison Sting", "String Shot", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("013"), getCatchRate("013")],
	["014", "KAKUNA", 1, "BUG", "POISON", 10, "BEEDRILL", 12, 12, 5, 6, 5, 5, 6, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["014", "KAKUNA", 2, "BUG", "POISON", 10, "BEEDRILL", 14, 14, 6, 7, 6, 6, 7, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["014", "KAKUNA", 3, "BUG", "POISON", 10, "BEEDRILL", 16, 16, 7, 8, 7, 7, 8, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["014", "KAKUNA", 4, "BUG", "POISON", 10, "BEEDRILL", 18, 18, 8, 11, 8, 8, 9, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["014", "KAKUNA", 5, "BUG", "POISON", 10, "BEEDRILL", 21, 21, 9, 12, 9, 9, 11, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["014", "KAKUNA", 6, "BUG", "POISON", 10, "BEEDRILL", 23, 23, 9, 13, 9, 9, 12, "Harden", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["014", "KAKUNA", 7, "BUG", "POISON", 10, "BEEDRILL", 25, 25, 11, 15, 11, 11, 13, "Poison Sting", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["014", "KAKUNA", 8, "BUG", "POISON", 10, "BEEDRILL", 27, 27, 12, 16, 12, 12, 14, "Poison Sting", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["014", "KAKUNA", 9, "BUG", "POISON", 10, "BEEDRILL", 29, 29, 13, 17, 13, 13, 15, "Poison Sting", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["014", "KAKUNA", 10, "BUG", "POISON", 10, "BEEDRILL", 32, 32, 14, 19, 14, 14, 16, "Poison Sting", "String Shot", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("014"), getCatchRate("014")],
	["015", "BEEDRILL", 1, "BUG", "POISON", 0, "", 12, 12, 6, 6, 6, 6, 6, "Fury Attack", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("015"), getCatchRate("015")],
	["016", "PIDGEY", 1, "NORMAL", "FLYING", 18, "PIDGEOTTO", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["016", "PIDGEY", 2, "NORMAL", "FLYING", 18, "PIDGEOTTO", 14, 14, 7, 7, 7, 7, 7, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["016", "PIDGEY", 3, "NORMAL", "FLYING", 18, "PIDGEOTTO", 16, 16, 8, 8, 8, 8, 9, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["016", "PIDGEY", 4, "NORMAL", "FLYING", 18, "PIDGEOTTO", 18, 18, 9, 9, 9, 9, 11, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["016", "PIDGEY", 5, "NORMAL", "FLYING", 18, "PIDGEOTTO", 20, 20, 12, 11, 11, 11, 13, "Tackle", "Sand-attack", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["016", "PIDGEY", 6, "NORMAL", "FLYING", 18, "PIDGEOTTO", 22, 22, 13, 12, 12, 12, 14, "Tackle", "Sand-attack", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["016", "PIDGEY", 7, "NORMAL", "FLYING", 18, "PIDGEOTTO", 24, 24, 14, 13, 13, 13, 16, "Tackle", "Sand-attack", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["016", "PIDGEY", 8, "NORMAL", "FLYING", 18, "PIDGEOTTO", 26, 26, 15, 14, 14, 14, 17, "Tackle", "Sand-attack", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["016", "PIDGEY", 9, "NORMAL", "FLYING", 18, "PIDGEOTTO", 28, 28, 16, 15, 15, 15, 18, "Tackle", "Sand-attack", "Gust", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["016", "PIDGEY", 10, "NORMAL", "FLYING", 18, "PIDGEOTTO", 31, 31, 18, 17, 16, 16, 20, "Tackle", "Sand-attack", "Gust", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("016"), getCatchRate("016")],
	["017", "PIDGEOTTO", 1, "NORMAL", "FLYING", 36, "PIDGEOT", 12, 12, 6, 6, 6, 6, 6, "Tackle", "Sand-attack", "Gust", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("017"), getCatchRate("017")],
	["018", "PIDGEOT", 1, "NORMAL", "FLYING", 0, "", 12, 12, 6, 6, 6, 6, 7, "Tackle", "Sand-attack", "Gust", "Quick Attack", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("018"), getCatchRate("018")],
	["019", "RATTATA", 1, "NORMAL", "", 20, "RATICATE", 11, 11, 6, 6, 6, 5, 6, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("019"), getCatchRate("019")],
	["019", "RATTATA", 2, "NORMAL", "", 20, "RATICATE", 13, 13, 7, 7, 6, 7, 8, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("019"), getCatchRate("019")],
	["019", "RATTATA", 3, "NORMAL", "", 20, "RATICATE", 15, 15, 9, 8, 7, 8, 11, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("019"), getCatchRate("019")],
	["019", "RATTATA", 4, "NORMAL", "", 20, "RATICATE", 17, 17, 11, 9, 8, 9, 13, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("019"), getCatchRate("019")],
	["019", "RATTATA", 5, "NORMAL", "", 20, "RATICATE", 19, 19, 13, 11, 9, 11, 14, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("019"), getCatchRate("019")],
	["020", "RATICATE", 1, "NORMAL", "", 0, "", 12, 12, 6, 6, 6, 6, 7, "Tackle", "Tail Whip", "Quick Attack", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("020"), getCatchRate("020")],
	["021", "SPEAROW", 1, "NORMAL", "FLYING", 20, "FEAROW", 12, 12, 6, 5, 5, 5, 6, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["021", "SPEAROW", 2, "NORMAL", "FLYING", 20, "FEAROW", 14, 14, 8, 6, 6, 6, 8, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["021", "SPEAROW", 3, "NORMAL", "FLYING", 20, "FEAROW", 16, 16, 9, 7, 7, 7, 11, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["021", "SPEAROW", 4, "NORMAL", "FLYING", 20, "FEAROW", 18, 18, 12, 8, 8, 8, 12, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["021", "SPEAROW", 5, "NORMAL", "FLYING", 20, "FEAROW", 20, 20, 13, 9, 9, 9, 14, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["021", "SPEAROW", 6, "NORMAL", "FLYING", 20, "FEAROW", 22, 22, 15, 11, 11, 11, 16, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["021", "SPEAROW", 7, "NORMAL", "FLYING", 20, "FEAROW", 24, 24, 16, 12, 12, 12, 17, "Peck", "Growl", "Leer", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["021", "SPEAROW", 8, "NORMAL", "FLYING", 20, "FEAROW", 26, 26, 18, 13, 13, 13, 19, "Peck", "Growl", "Leer", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["021", "SPEAROW", 9, "NORMAL", "FLYING", 20, "FEAROW", 28, 28, 19, 14, 14, 14, 22, "Peck", "Growl", "Leer", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["021", "SPEAROW", 10, "NORMAL", "FLYING", 20, "FEAROW", 31, 31, 22, 15, 15, 15, 24, "Peck", "Growl", "Leer", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("021"), getCatchRate("021")],
	["022", "FEAROW", 1, "NORMAL", "FLYING", 0, "", 12, 12, 7, 6, 6, 6, 7, "Peck", "Growl", "Leer", "Fury Attack", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("022"), getCatchRate("022")],
	["023", "EKANS", 1, "POISON", "", 22, "ARBOK", 12, 12, 6, 6, 6, 6, 6, "Wrap", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("023"), getCatchRate("023")],
	["024", "ARBOK", 1, "POISON", "", 0, "", 12, 12, 7, 6, 6, 6, 6, "Wrap", "Leer", "Poison Sting", "Bite", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("024"), getCatchRate("024")],
	["025", "PIKACHU", 1, "ELECTRIC", "", 0, "RAICHU", 12, 12, 6, 5, 6, 6, 7, "Thundershock", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["025", "PIKACHU", 2, "ELECTRIC", "", 0, "RAICHU", 14, 14, 7, 6, 7, 7, 9, "Thundershock", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["025", "PIKACHU", 3, "ELECTRIC", "", 0, "RAICHU", 16, 16, 9, 7, 8, 8, 12, "Thundershock", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["025", "PIKACHU", 4, "ELECTRIC", "", 0, "RAICHU", 18, 18, 11, 8, 11, 9, 14, "Thundershock", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["025", "PIKACHU", 5, "ELECTRIC", "", 0, "RAICHU", 20, 20, 13, 9, 12, 11, 16, "Thundershock", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["025", "PIKACHU", 6, "ELECTRIC", "", 0, "RAICHU", 22, 22, 14, 11, 13, 12, 18, "Thundershock", "Growl", "Tail Whip", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["025", "PIKACHU", 7, "ELECTRIC", "", 0, "RAICHU", 24, 24, 15, 12, 15, 13, 20, "Thundershock", "Growl", "Tail Whip", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["025", "PIKACHU", 8, "ELECTRIC", "", 0, "RAICHU", 26, 26, 17, 13, 16, 14, 23, "Thundershock", "Thunder Wave", "Growl", "Tail Whip", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["025", "PIKACHU", 9, "ELECTRIC", "", 0, "RAICHU", 28, 28, 18, 14, 17, 15, 25, "Thundershock", "Thunder Wave", "Growl", "Tail Whip", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["025", "PIKACHU", 10, "ELECTRIC", "", 0, "RAICHU", 30, 30, 20, 15, 19, 17, 28, "Thundershock", "Thunder Wave", "Growl", "Tail Whip", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("025"), getCatchRate("025")],
	["026", "RAICHU", 1, "ELECTRIC", "", 0, "", 12, 12, 7, 6, 7, 6, 7, "Thundershock", "Tail Whip", "Quick Attack", "Thunderbolt", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("026"), getCatchRate("026")],
	["027", "SANDSHREW", 1, "GROUND", "", 22, "SANDSLASH", 12, 12, 6, 7, 5, 5, 6, "Scratch", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("027"), getCatchRate("027")],
	["028", "SANDSLASH", 1, "GROUND", "", 0, "", 12, 12, 7, 7, 6, 6, 6, "Scratch", "Defense Curl", "Sand-attack", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("028"), getCatchRate("028")],
	["029", "NIDORAN_FEMALE", 1, "POISON", "", 16, "NIDORINA", 12, 12, 6, 6, 6, 6, 6, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["029", "NIDORAN_FEMALE", 2, "POISON", "", 16, "NIDORINA", 14, 14, 7, 7, 7, 7, 7, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["029", "NIDORAN_FEMALE", 3, "POISON", "", 16, "NIDORINA", 17, 17, 8, 9, 8, 8, 8, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["029", "NIDORAN_FEMALE", 4, "POISON", "", 16, "NIDORINA", 19, 19, 11, 11, 9, 9, 9, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["029", "NIDORAN_FEMALE", 5, "POISON", "", 16, "NIDORINA", 22, 22, 12, 12, 11, 11, 11, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["029", "NIDORAN_FEMALE", 6, "POISON", "", 16, "NIDORINA", 24, 24, 13, 14, 12, 12, 12, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["029", "NIDORAN_FEMALE", 7, "POISON", "", 16, "NIDORINA", 26, 26, 14, 15, 13, 13, 13, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["029", "NIDORAN_FEMALE", 8, "POISON", "", 16, "NIDORINA", 29, 29, 16, 16, 14, 14, 15, "Growl", "Scratch", "Tail Whip", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["029", "NIDORAN_FEMALE", 9, "POISON", "", 16, "NIDORINA", 31, 31, 17, 18, 15, 15, 16, "Growl", "Scratch", "Tail Whip", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["029", "NIDORAN_FEMALE", 10, "POISON", "", 16, "NIDORINA", 34, 34, 18, 19, 17, 17, 17, "Growl", "Scratch", "Tail Whip", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("029"), getCatchRate("029")],
	["030", "NIDORINA", 1, "POISON", "", 0, "NIDOQUEEN", 12, 12, 6, 6, 6, 6, 6, "Growl", "Scratch", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("030"), getCatchRate("030")],
	["031", "NIDOQUEEN", 1, "POISON", "GROUND", 0, "", 13, 13, 6, 7, 6, 7, 6, "Scratch", "Tail Whip", "Double Kick", "Poison Sting", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("031"), getCatchRate("031")],
	["032", "NIDORAN_MALE", 1, "POISON", "", 16, "NIDORINO", 12, 12, 6, 6, 6, 6, 6, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["032", "NIDORAN_MALE", 2, "POISON", "", 16, "NIDORINO", 14, 14, 7, 7, 7, 7, 7, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["032", "NIDORAN_MALE", 3, "POISON", "", 16, "NIDORINO", 16, 16, 9, 8, 8, 8, 8, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["032", "NIDORAN_MALE", 4, "POISON", "", 16, "NIDORINO", 18, 18, 11, 9, 9, 9, 11, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["032", "NIDORAN_MALE", 5, "POISON", "", 16, "NIDORINO", 21, 21, 13, 11, 11, 11, 12, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["032", "NIDORAN_MALE", 6, "POISON", "", 16, "NIDORINO", 23, 23, 14, 12, 12, 12, 13, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["032", "NIDORAN_MALE", 7, "POISON", "", 16, "NIDORINO", 25, 25, 16, 13, 13, 13, 15, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["032", "NIDORAN_MALE", 8, "POISON", "", 16, "NIDORINO", 27, 27, 17, 14, 14, 14, 16, "Peck", "Leer", "Focus Energy", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["032", "NIDORAN_MALE", 9, "POISON", "", 16, "NIDORINO", 30, 30, 19, 15, 15, 15, 17, "Peck", "Leer", "Focus Energy", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["032", "NIDORAN_MALE", 10, "POISON", "", 16, "NIDORINO", 32, 32, 20, 17, 17, 17, 19, "Peck", "Leer", "Focus Energy", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("032"), getCatchRate("032")],
	["033", "NIDORINO", 1, "POISON", "", 0, "NIDOKING", 12, 12, 6, 6, 6, 6, 6, "Peck", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("033"), getCatchRate("033")],
	["034", "NIDOKING", 1, "POISON", "GROUND", 0, "", 12, 12, 7, 6, 7, 6, 7, "Peck", "Focus Energy", "Double Kick", "Poison Sting", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("034"), getCatchRate("034")],
	["035", "CLEFAIRY", 1, "NORMAL", "", 0, "CLEFABLE", 12, 12, 6, 6, 6, 6, 6, "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(1, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
//	["035", "CLEFAIRY", 2, "NORMAL", "", 0, "CLEFABLE", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(2, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
//	["035", "CLEFAIRY", 3, "NORMAL", "", 0, "CLEFABLE", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(3, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
//	["035", "CLEFAIRY", 4, "NORMAL", "", 0, "CLEFABLE", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(4, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
//	["035", "CLEFAIRY", 5, "NORMAL", "", 0, "CLEFABLE", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(5, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
//	["035", "CLEFAIRY", 6, "NORMAL", "", 0, "CLEFABLE", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(6, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
//	["035", "CLEFAIRY", 7, "NORMAL", "", 0, "CLEFABLE", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(7, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
	["035", "CLEFAIRY", 8, "NORMAL", "", 0, "CLEFABLE", 31, 31, 15, 16, 18, 18, 14, "Pound", "Growl", "Encore", "", "FAST", 0, getExpNeededForNextLevel(8, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
//	["035", "CLEFAIRY", 9, "NORMAL", "", 0, "CLEFABLE", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(9, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
//	["035", "CLEFAIRY", 10, "NORMAL", "", 0, "CLEFABLE", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Pound", "Growl", "", "", "FAST", 0, getExpNeededForNextLevel(10, "FAST"), getBaseExpYield("035"), getCatchRate("035")],
	["036", "CLEFABLE", 1, "NORMAL", "", 0, "", 13, 13, 6, 6, 7, 7, 6, "Sing", "Doubleslap", "Minimize", "Metronome", "FAST", 0, getExpNeededForNextLevel(1, "FAST"), getBaseExpYield("036"), getCatchRate("036")],
	["037", "VULPIX", 1, "FIRE", "", 0, "NINETALES", 12, 12, 6, 6, 6, 6, 6, "Ember", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("037"), getCatchRate("037")],
	["038", "NINETALES", 1, "FIRE", "", 0, "", 12, 12, 6, 6, 6, 7, 7, "Ember", "Quick Attack", "Confuse Ray", "Safeguard", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("038"), getCatchRate("038")],
	["039", "JIGGLYPUFF", 1, "NORMAL", "", 0, "WIGGLYTUFF", 13, 13, 6, 5, 6, 5, 5, "Sing", "", "", "", "FAST", 0, getExpNeededForNextLevel(1, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["039", "JIGGLYPUFF", 2, "NORMAL", "", 0, "WIGGLYTUFF", 17, 17, 7, 6, 7, 6, 6, "Sing", "", "", "", "FAST", 0, getExpNeededForNextLevel(2, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["039", "JIGGLYPUFF", 3, "NORMAL", "", 0, "WIGGLYTUFF", 20, 20, 8, 7, 8, 7, 7, "Sing", "", "", "", "FAST", 0, getExpNeededForNextLevel(3, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["039", "JIGGLYPUFF", 4, "NORMAL", "", 0, "WIGGLYTUFF", 24, 24, 9, 7, 9, 8, 7, "Sing", "Defense Curl", "", "", "FAST", 0, getExpNeededForNextLevel(4, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["039", "JIGGLYPUFF", 5, "NORMAL", "", 0, "WIGGLYTUFF", 28, 28, 12, 8, 12, 9, 8, "Sing", "Defense Curl", "", "", "FAST", 0, getExpNeededForNextLevel(5, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["039", "JIGGLYPUFF", 6, "NORMAL", "", 0, "WIGGLYTUFF", 31, 31, 13, 9, 13, 9, 9, "Sing", "Defense Curl", "", "", "FAST", 0, getExpNeededForNextLevel(6, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["039", "JIGGLYPUFF", 7, "NORMAL", "", 0, "WIGGLYTUFF", 35, 35, 14, 9, 14, 11, 9, "Sing", "Defense Curl", "", "", "FAST", 0, getExpNeededForNextLevel(7, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["039", "JIGGLYPUFF", 8, "NORMAL", "", 0, "WIGGLYTUFF", 38, 38, 15, 11, 15, 12, 11, "Sing", "Defense Curl", "", "", "FAST", 0, getExpNeededForNextLevel(8, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["039", "JIGGLYPUFF", 9, "NORMAL", "", 0, "WIGGLYTUFF", 42, 42, 16, 12, 16, 13, 12, "Sing", "Defense Curl", "Pound", "", "FAST", 0, getExpNeededForNextLevel(9, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["039", "JIGGLYPUFF", 10, "NORMAL", "", 0, "WIGGLYTUFF", 46, 46, 18, 13, 18, 14, 13, "Sing", "Defense Curl", "Pound", "", "FAST", 0, getExpNeededForNextLevel(10, "FAST"), getBaseExpYield("039"), getCatchRate("039")],
	["040", "WIGGLYTUFF", 1, "NORMAL", "", 0, "", 14, 14, 6, 6, 6, 6, 6, "Doubleslap", "Sing", "Disable", "Defense Curl", "FAST", 0, getExpNeededForNextLevel(1, "FAST"), getBaseExpYield("040"), getCatchRate("040")],
	["041", "ZUBAT", 1, "POISON", "FLYING", 22, "GOLBAT", 12, 12, 6, 6, 5, 6, 6, "Leech Life", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
//	["041", "ZUBAT", 2, "POISON", "FLYING", 22, "GOLBAT", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
//	["041", "ZUBAT", 3, "POISON", "FLYING", 22, "GOLBAT", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
//	["041", "ZUBAT", 4, "POISON", "FLYING", 22, "GOLBAT", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
//	["041", "ZUBAT", 5, "POISON", "FLYING", 22, "GOLBAT", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
//	["041", "ZUBAT", 6, "POISON", "FLYING", 22, "GOLBAT", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
	["041", "ZUBAT", 7, "POISON", "FLYING", 22, "GOLBAT", 24, 24, 14, 13, 12, 13, 15, "Leech Life", "Astonish", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
	["041", "ZUBAT", 8, "POISON", "FLYING", 22, "GOLBAT", 26, 26, 15, 14, 13, 14, 17, "Leech Life", "Astonish", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
	["041", "ZUBAT", 9, "POISON", "FLYING", 22, "GOLBAT", 28, 28, 16, 15, 14, 15, 18, "Leech Life", "Astonish", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
	["041", "ZUBAT", 10, "POISON", "FLYING", 22, "GOLBAT", 31, 31, 18, 16, 15, 17, 20, "Leech Life", "Astonish", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
	["041", "ZUBAT", 11, "POISON", "FLYING", 22, "GOLBAT", 33, 33, 19, 17, , "Leech Life", "Astonish", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(11, "MEDIUMFAST"), getBaseExpYield("041"), getCatchRate("041")],
	["042", "GOLBAT", 1, "POISON", "FLYING", 0, "", 12, 12, 6, 6, 6, 6, 7, "Screech", "Leech Life", "Astonish", "Supersonic", "expGroup", "currentExp", "expNextLevel", getBaseExpYield("042"), getCatchRate("042")],
	["043", "ODDISH", 1, "GRASS", "POISON", 21, "GLOOM", 12, 12, 6, 6, 6, 6, 5, "Absorb", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("043"), getCatchRate("043")],
	["044", "GLOOM", 1, "GRASS", "POISON", 0, "VILEPLUME", 12, 12, 6, 6, 7, 6, 6, "Absorb", "Sweet Scent", "Poisonpowder", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("044"), getCatchRate("044")],
	["045", "VILEPLUME", 1, "GRASS", "POISON", 0, "", 12, 12, 6, 7, 7, 7, 6, "Absorb", "Aromatherapy", "Stun Spore", "Mega Drain", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("045"), getCatchRate("045")],
	["046", "PARAS", 1, "BUG", "GRASS", 24, "PARASECT", 12, 12, 6, 6, 6, 6, 5, "Scratch", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["046", "PARAS", 2, "BUG", "GRASS", 24, "PARASECT", 14, 14, 8, 7, 7, 7, 6, "Scratch", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["046", "PARAS", 3, "BUG", "GRASS", 24, "PARASECT", 16, 16, 11, 9, 8, 9, 7, "Scratch", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["046", "PARAS", 4, "BUG", "GRASS", 24, "PARASECT", 18, 18, 12, 11, 9, 11, 8, "Scratch", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["046", "PARAS", 5, "BUG", "GRASS", 24, "PARASECT", 20, 20, 14, 13, 12, 13, 9, "Scratch", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["046", "PARAS", 6, "BUG", "GRASS", 24, "PARASECT", 22, 22, 16, 14, 13, 14, 9, "Scratch", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["046", "PARAS", 7, "BUG", "GRASS", 24, "PARASECT", 24, 24, 17, 15, 14, 15, 11, "Scratch", "Stun Spore", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["046", "PARAS", 8, "BUG", "GRASS", 24, "PARASECT", 26, 26, 19, 17, 15, 17, 12, "Scratch", "Stun Spore", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["046", "PARAS", 9, "BUG", "GRASS", 24, "PARASECT", 28, 28, 22, 18, 16, 18, 13, "Scratch", "Stun Spore", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["046", "PARAS", 10, "BUG", "GRASS", 24, "PARASECT", 30, 30, 24, 20, 18, 20, 14, "Scratch", "Stun Spore", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("046"), getCatchRate("046")],
	["047", "PARASECT", 24, "BUG", "GRASS", 0, "", 12, 12, 7, 6, 6, 6, 6, "Scratch", "Stun Spore", "Poisonpowder", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("047"), getCatchRate("047")],
	["048", "VENONAT", 1, "BUG", "POISON", 31, "VENOMOTH", 12, 12, 6, 6, 6, 6, 6, "Tackle", "Disable", "Foresight", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("048"), getCatchRate("048")],
	// Supersonic is also a move that could be one of Venomoth its moves // http://www.serebii.net/pokedex-rs/049.shtml
	["049", "VENOMOTH", 31, "BUG", "POISON", 0, "", 12, 12, 6, 6, 7, 6, 7, "Silver Wind", "Tackle", "Disable", "Foresight", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("049"), getCatchRate("049")],
	["050", "DIGLETT", 1, "GROUND", "", 26, "DUGTRIO", 11, 11, 6, 5, 6, 6, 7, "Sand-attack", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("050"), getCatchRate("050")],
	["051", "DUGTRIO", 26, "GROUND", "", 0, "", 12, 12, 6, 6, 6, 6, 7, "Tri Attack", "Scratch", "Sand-attack", "Growl", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("051"), getCatchRate("051")],
	["052", "MEOWTH", 1, "NORMAL", "", 28, "PERSIAN", 12, 12, 6, 6, 6, 6, 7, "Scratch", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("052"), getCatchRate("052")],
	["053", "PERSIAN", 1, "NORMAL", "", 0, "", "hp", 12, 12, 6, 6, 6, 6, 7, "Scratch", "Growl", "Bite", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("053"), getCatchRate("053")],
	["054", "PSYDUCK", 1, "WATER", "", 33, "GOLDUCK", 12, 12, 6, 6, 6, 6, 6, "Water Sport", "Scratch", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("054"), getCatchRate("054")],
	["055", "GOLDUCK", 1, "WATER", "", 0, "", 12, 12, 6, 6, 7, 6, 7, "Water Sport", "Scratch", "Tail Whip", "Disable", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("055"), getCatchRate("055")],
	["056", "MANKEY", 1, "FIGHTING", "", 28, "PRIMEAPE", 12, 12, 6, 6, 6, 6, 6, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["056", "MANKEY", 2, "FIGHTING", "", 28, "PRIMEAPE", 14, 14, 8, 7, 7, 7, 8, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["056", "MANKEY", 3, "FIGHTING", "", 28, "PRIMEAPE", 16, 16, 11, 8, 8, 8, 11, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["056", "MANKEY", 4, "FIGHTING", "", 28, "PRIMEAPE", 18, 18, 13, 9, 9, 9, 12, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["056", "MANKEY", 5, "FIGHTING", "", 28, "PRIMEAPE", 20, 20, 15, 11, 11, 12, 14, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["056", "MANKEY", 6, "FIGHTING", "", 28, "PRIMEAPE", 22, 22, 17, 12, 12, 13, 16, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(6, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["056", "MANKEY", 7, "FIGHTING", "", 28, "PRIMEAPE", 24, 24, 19, 13, 13, 14, 17, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(7, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["056", "MANKEY", 8, "FIGHTING", "", 28, "PRIMEAPE", 26, 26, 22, 14, 14, 15, 19, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(8, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["056", "MANKEY", 9, "FIGHTING", "", 28, "PRIMEAPE", 28, 28, 24, 15, 15, 16, 22, "Scratch", "Leer", "Low Kick", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(9, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["056", "MANKEY", 10, "FIGHTING", "", 28, "PRIMEAPE", 31, 31, 26, 16, 16, 18, 24, "Scratch", "Leer", "Low Kick", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(10, "MEDIUMFAST"), getBaseExpYield("056"), getCatchRate("056")],
	["057", "PRIMEAPE", 1, "FIGHTING", "", 0, "", 12, 12, 7, 6, 6, 6, 7, "Scratch", "Leer", "Low Kick", "Rage", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("057"), getCatchRate("057")],
	["058", "GROWLITHE", 1, "FIRE", "", 0, "ARCANINE", 12, 12, 6, 6, 6, 6, 6, "Bite", "Roar", "", "", "SLOW", 0, getExpNeededForNextLevel(1, "SLOW"), getBaseExpYield("058"), getCatchRate("058")],
	["059", "ARCANINE", 1, "FIRE", "", 0, "", 13, 13, 7, 6, 7, 6, 7, "Bite", "Roar", "Ember", "Odor Sleuth", "SLOW", 0, getExpNeededForNextLevel(1, "SLOW"), getBaseExpYield("059"), getCatchRate("059")],
	["060", "POLIWAG", 1, "WATER", "", 25, "POLIWHIRL", 12, 12, 6, 6, 6, 6, 7, "Bubble", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("060"), getCatchRate("060")],
	["061", "POLIWHIRL", 1, "WATER", "", 0, "POLIWRATH", 12, 12, 6, 6, 5, 6, 7, "Bubble", "Hypnosis", "Water Gun", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("061"), getCatchRate("061")],
	["062", "POLIWRATH", 1, "WATER", "FIGHTING", 0, "", 13, 13, 7, 7, 6, 7, 6, "Water Gun", "Doubleslap", "Hypnosis", "Submission", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("062"), getCatchRate("062")],
	["063", "ABRA", 1, "PSYCHIC", "", 16, "KADABRA", 11, 11, 5, 5, 7, 6, 7, "Teleport", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("063"), getCatchRate("063")],
	["064", "KADABRA", 1, "PSYCHIC", "", 0, "ALAKAZAM", 12, 12, 6, 5, 7, 6, 7, "Teleport", "Kinesis", "Confusion", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("064"), getCatchRate("064")],
	["065", "ALAKAZAM", 1, "PSYCHIC", "", 0, "", 12, 12, 6, 6, 8, 7, 7, "Teleport", "Kinesis", "Confusion", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("065"), getCatchRate("065")],
	["066", "MACHOP", 1, "FIGHTING", "", 28, "MACHOKE", 12, 12, 6, 6, 6, 6, 6, "Low Kick", "Leer", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("066"), getCatchRate("066")],
	["067", "MACHOKE", 1, "FIGHTING", "", 0, "MACHAMP", 12, 12, 7, 6, 6, 6, 6, "Low Kick", "Leer", "Focus Energy", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("067"), getCatchRate("067")],
	["068", "MACHAMP", 1, "FIGHTING", "", 0, "", 13, 13, 7, 6, 6, 7, 6, "Low Kick", "Leer", "Focus Energy", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("068"), getCatchRate("068")],
	["069", "BELLSPROUT", 1, "GRASS", "POISON", 21, "WEEPINBELL", 12, 12, 6, 6, 6, 5, 6, "Vine Whip", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("069"), getCatchRate("069")],
	["070", "WEEPINBELL", 1, "GRASS", "POISON", 0, "VICTREEBELL", 12, 12, 7, 6, 7, 6, 6, "Vine Whip", "Growth", "Wrap", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("070"), getCatchRate("070")],
	["071", "VICTREEBELL", 1, "GRASS", "POISON", 0, "", 12, 12, 7, 6, 7, 6, 6, "Vine Whip", "Sleep Powder", "Sweet Scent", "Razor Leaf", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("071"), getCatchRate("071")],
	["072", "TENTACOOL", 1, "WATER", "POISON", 30, "TENTACRUEL", 12, 12, 6, 6, 6, 7, 6, "Poison Sting", "", "", "", "SLOW", 0, getExpNeededForNextLevel(1, "SLOW"), getBaseExpYield("072"), getCatchRate("072")],
	["073", "TENTACRUEL", 1, "WATER", "POISON", 0, "", 12, 12, 6, 6, 6, 7, 7, "Poison Sting", "Supersonic", "Constrict", "", "SLOW", 0, getExpNeededForNextLevel(1, "SLOW"), getBaseExpYield("073"), getCatchRate("073")],
	["074", "GEODUDE", 1, "ROCK", "GROUND", 25, "GRAVELER", 12, 12, 6, 7, 5, 5, 5, "Tackle", "Defense Curl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
//	["074", "GEODUDE", 2, "ROCK", "GROUND", 25, "GRAVELER", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Tackle", "Defense Curl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
//	["074", "GEODUDE", 3, "ROCK", "GROUND", 25, "GRAVELER", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Tackle", "Defense Curl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
//	["074", "GEODUDE", 4, "ROCK", "GROUND", 25, "GRAVELER", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Tackle", "Defense Curl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
//	["074", "GEODUDE", 5, "ROCK", "GROUND", 25, "GRAVELER", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Tackle", "Defense Curl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
//	["074", "GEODUDE", 6, "ROCK", "GROUND", 25, "GRAVELER", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Tackle", "Defense Curl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
	["074", "GEODUDE", 7, "ROCK", "GROUND", 25, "GRAVELER", 24, 24, 19, 23, 12, 12, 9, "Tackle", "Defense Curl", "Mud Sport", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
	["074", "GEODUDE", 8, "ROCK", "GROUND", 25, "GRAVELER", 26, 26, 22, 25, 13, 13, 11, "Tackle", "Defense Curl", "Mud Sport", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
	["074", "GEODUDE", 9, "ROCK", "GROUND", 25, "GRAVELER", 28, 28, 24, 27, 14, 14, 12, "Tackle", "Defense Curl", "Mud Sport", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
//	["074", "GEODUDE", 10, "ROCK", "GROUND", 25, "GRAVELER", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "Tackle", "Defense Curl", "Mud Sport", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("074"), getCatchRate("074")],
	["075", "GRAVELER", 1, "ROCK", "GROUND", 0, "GOLEM", 12, 12, 7, 7, 6, 6, 6, "Tackle", "Defense Curl", "Mud Sport", "Rock Throw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("075"), getCatchRate("075")],
	["076", "GOLEM", 1, "ROCK", "GROUND", 0, "", 12, 12, 7, 7, 6, 6, 6, "Tackle", "Defense Curl", "Mud Sport", "Rock Throw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("076"), getCatchRate("076")],
	["077", "PONYTA", 1, "FIRE", "", 40, "RAPIDASH", 12, 12, 7, 6, 6, 6, 7, "Quick Attack", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("077"), getCatchRate("077")],
	["078", "RAPIDASH", 1, "FIRE", "", 0, "", 12, 12, 7, 6, 6, 6, 7, "Quick Attack", "Growl", "Tail Whip", "Ember", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("078"), getCatchRate("078")],
	["079", "SLOWPOKE", 1, "WATER", "PSYCHIC", 37, "SLOWBRO", 13, 13, 6, 6, 6, 6, 5, "Curse", "Yawn", "Tackle", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("079"), getCatchRate("079")],
	["080", "SLOWBRO", 1, "WATER", "PSYCHIC", 0, "", 13, 13, 6, 7, 7, 6, 5, "Curse", "Yawn", "Tackle", "Growl", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("080"), getCatchRate("080")],
	["081", "MAGNEMITE", 1, "ELECTRIC", "STEEL", 30, "MAGNETON", 13, 13, 6, 6, 6, 6, 5, "Metal Sound", "Tackle", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("081"), getCatchRate("081")],
	["082", "MAGNETON", 1, "ELECTRIC", "STEEL", 0, "", 12, 12, 6, 7, 7, 6, 6, "Metal Sound", "Tackle", "Thundershock", "Supersonic", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("082"), getCatchRate("082")],
	["083", "FARFETCH_D", 1, "NORMAL", "FLYING", 0, "", 12, 12, 6, 6, 6, 6, 6, "Peck", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("083"), getCatchRate("083")],
	["084", "DODUO", 1, "NORMAL", "FLYING", 31, "DODRIO", 12, 12, 7, 6, 6, 6, 6, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("084"), getCatchRate("084")],
	["085", "DODRIO", 1, "NORMAL", "FLYING", 0, "", 12, 12, 7, 6, 6, 6, 7, "Peck", "Growl", "Pursuit", "Fury Attack", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("085"), getCatchRate("085")],
	["086", "SEEL", 1, "WATER", "", 34, "DEWGONG", 12, 12, 6, 6, 6, 6, 6, "Headbutt", "", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("086"), getCatchRate("086")],
	["087", "DEWGONG", 1, "WATER", "ICE", 0, "", 13, 13, 6, 6, 6, 7, 6, "Signal Beam", "Headbutt", "Icy Wind", "Aurora Beam", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("087"), getCatchRate("087")],
	["088", "GRIMER", 1, "POISON", "", 38, "MUK", 12, 12, 6, 6, 6, 6, 5, "Poison Gas", "Pound", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("088"), getCatchRate("088")],
	["089", "MUK", 1, "POISON", "", 0, "", 13, 13, 7, 6, 6, 7, 6, "Poison Gas", "Pound", "Harden", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("089"), getCatchRate("089")],
	["129", "MAGIKARP", 5, "WATER", "", 20, "GYARADOS", 11, 11, 5, 6, 5, 5, 6, "Splash", "", "", "", "SLOW", 0, getExpNeededForNextLevel(5, "SLOW"), getBaseExpYield("129"), getCatchRate("129")],
//	["129", "MAGIKARP", 2, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
//	["129", "MAGIKARP", 3, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
//	["129", "MAGIKARP", 4, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "currentHP", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", 0, "expNextLevel", "baseExpYield", "catchRate"],
	["129", "MAGIKARP", 5, "WATER", "", 20, "GYARADOS", 18, 18, 7, 13, 8, 8, 15, "Splash", "", "", "", "SLOW", 0, getExpNeededForNextLevel(5, "SLOW"), getBaseExpYield("129"), getCatchRate("129")]
];

// Pokemon moves background information
// make empty one for pokemonMove1 in case I forget to delete it for a Pokemon?
// Add effect chance?
var pokemonMoves = [
	//add "Effect" for moves with type "Status" ? add PP-max for when PP UP items are introduced? //also add description? //perhaps make accuracy a float instead of integer?
	["Name", "Type", "category", "pp", "power", "accuracy", "statOpponent", "statOpponentDecrease", "statOpponentMaxDecrease"], //http://bulbapedia.bulbagarden.net/wiki/Confusion_(move)
	// Add effect
	["Absorb", "GRASS", "Special", 25, 20, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Absorb_(move)
	// Add effect
	["Aromatherapy", "GRASS", "Status", 5, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Aromatherapy_%28move%29
	// Add effect
	["Astonish", "GHOST", "Physical", 15, 30, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Astonish_(move)
	// Add effect
	["Aurora Beam", "ICE", "Special", 20, 65, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Aurora_Beam_(move)
	// Add effect
	["Bite", "DARK", "Physical", 25, 60, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Bite_(move)
	["Bubble", "WATER", "Special", 30, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Bubble_(move)
	// Add effect
	["Confuse Ray", "GHOST", "Status", 10, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Confuse_Ray_(move)
	// Add effect
	["Confusion", "PSYCHIC", "Special", 25, 50, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Confusion_(move)
	// Add effect
	["Constrict", "NORMAL", "Physical", 35, 10, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Constrict_(move)
	// Add effect
	["Curse", "GHOST", "Status", 10, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Curse_(move)
	// Add effect
	["Defense Curl", "NORMAL", "Status", 40, 0, 100, "", "", ""], //  accuracy is actually --- instead of 100% // http://bulbapedia.bulbagarden.net/wiki/Defense_Curl_(move)
	// Add effect
	["Disable", "NORMAL", "Status", 20, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Disable_(move)
	// Add effect
	["Double Kick", "FIGHTING", "Physical", 30, 30, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Double_Kick_(move)
	// Add effect
	["Doubleslap", "NORMAL", "Physical", 10, 15, 85, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Double_Slap_(move)
	// Add effect
	["Ember", "FIRE", "Special", 25, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Ember_(move)
	// Add effect
	["Encore", "NORMAL", "Status", 5, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Encore_(move)
	// Add effect
	["Focus Energy", "NORMAL", "Status", 30, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Focus_Energy_(move)
	// Add fact for Fury attack that the attack can hit 2-5 times! - http://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(move)
	["Foresight", "NORMAL", "Status", 40, 0, 100, "", "", ""], // accuracy actually --- instead of  100 // http://bulbapedia.bulbagarden.net/wiki/Foresight_(move)
	// Add fact for Fury attack that the attack can hit 2-5 times! - http://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(move)
	["Fury Attack", "NORMAL", "Physical", 20, 15, 85, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(move)
	// Add effect of attack -= 1 until end of battle
	["Growl", "NORMAL", "Status", 40, 0, 100, "attackOpponent", -1, -6], //http://bulbapedia.bulbagarden.net/wiki/Growl_%28move%29
	// Add effect
	["Growth", "NORMAL", "Status", 20, 0, 100, "", "", ""], // accuracy actually --- // http://bulbapedia.bulbagarden.net/wiki/Growth_(move)
	["Gust", "FLYING", "Special", 35, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Gust_(move)
	// Add effect
	["Harden", "NORMAL", "Status", 30, 0, 100, "", "", ""], //accuracy is actually --- instead of 100% //http://bulbapedia.bulbagarden.net/wiki/Harden_(move)
	// Add effect
	["Headbutt", "NORMAL", "Physical", 15, 70, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Headbutt_(move)
	// Add effect
	["Heat Wave", "FIRE", "Special", 10, 95, 90, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Heat_Wave_(move)
	// Add effect
	["Hypnosis", "PSYCHIC", "Status", 20, 0, 60, "", "", ""], // bulbapedia.bulbagarden.net/wiki/Hypnosis_(move)
	["Hyper Fang", "NORMAL", "Physical", 15, 80, 90, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Hyper_Fang_(move)
	// Add effect
	["Icy Wind", "ICE", "Special", 15, 55, 95, "", "", ""], // bulbapedia.bulbagarden.net/wiki/Icy Wind_(move)
	// Add effect
	["Kinesis", "PSYCHIC", "Status", 15, 0, 80, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Kinesis_(move)
	// Add effect
	["Leech Life", "BUG", "Physical", 15, 20, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Leech_Life_(move)
	// Add effect
	["Leech Seed", "GRASS", "Status", 10, 0, 90, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Leech_Seed_(move)
	// Add effect
	["Leer", "NORMAL", "Status", 30, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Leer_(move)
	// Add effect
	["Low Kick", "FIGHTING", "Physical", 20, 40, 100, "", "", ""], // power varies // http://bulbapedia.bulbagarden.net/wiki/Low_Kick_(move)
	// Add effect
	["Mega Drain", "GRASS", "Special", 15, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Mega_Drain_(move)
	// Add effect
	["Metal Claw", "STEEL", "Physical", 35, 50, 95, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Metal_Claw_(move)
	// Add effect
	["Metal Sound", "STEEL", "Status", 40, 0, 85, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Metal_Sound_(move)
	// Add effect
	["Metronome", "NORMAL", "Status", 10, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Metronome_(move)
	// Add effect
	["Minimize", "NORMAL", "Status", 10, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Minimize_(move)
	// Add effect
	["Mud Sport", "GROUND", "Status", 15, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Mud_Sport_(move)
	// Add effect
	["Odor Sleuth", "NORMAL", "Status", 40, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Odor_Sleuth_(move)
	["Peck", "FLYING", "Physical", 35, 35, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Peck_(move)
	// Add effect
	["Poison Gas", "POISON", "Status", 40, 0, 90, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Poison_Gas_(move)
	// Add effect
	["Poisonpowder", "POISON", "Status", 35, 0, 75, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Poison_Powder_(move)
	// Add effect
	["Poison Sting", "POISON", "Physical", 35, 15, 100, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/Poison_Sting_(move)
	["Pound", "NORMAL", "Physical", 35, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Pound_(move)
	// Add effect
	["Pursuit", "DARK", "Physical", 20, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Pursuit_(move)
	// priority +1 for Quick Attack
	["Quick Attack", "NORMAL", "Physical", 30, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Quick_Attack_(move)
	// Add effect
	["Rage", "NORMAL", "Physical", 20, 20, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Rage_(move)
	// Add effect
	["Razor Leaf", "GRASS", "Physical", 25, 55, 95, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Razor_Leaf_(move)
	// Add effect + priority
	["Roar", "NORMAL", "Status", 20, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Roar_(move)
	// Add effect
	["Rock Throw", "ROCK", "Physical", 15, 50, 90, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Rock_Throw_(move)
	// Add effect
	["Sand-attack", "GROUND", "Status", 15, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Sand_Attack_(move)
	// Add effect
	["Safeguard", "NORMAL", "Status", 25, 0, 100, "", "", ""], // ACCURACY IS ACTUALLY --- // http://bulbapedia.bulbagarden.net/wiki/Safeguard_(move)
	["Scratch", "NORMAL", "Physical", 35, 40, 100, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/Scratch_%28move%29
	// Add effect
	["Screech", "NORMAL", "Status", 40, 0, 85, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Screech_(move)
	// Add effect
	["Signal Beam", "BUG", "Special", 15, 75, 100, "", "", ""], // bulbapedia.bulbagarden.net/wiki/Signal_Beam_(move)
	// Add effect
	["Silver Wind", "BUG", "Special", 5, 60, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Silver_Wind_(move)
	// Add effect
	["Sing", "NORMAL", "Status", 15, 0, 55, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Sing_(move)
	// Add effect
	["Sleep Powder", "GRASS", "Status", 15, 0, 75, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Sleep_Powder_(move)
	// Add effect
	["Smokescreen", "NORMAL", "Status", 20, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Smokescreen_(move)
	// Add effect
	["Splash", "NORMAL", "Status", 40, 0, 0, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Splash_(move)
	// Add effect
	["String Shot", "BUG", "Status", 40, 0, 95, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/String_Shot_(move)
	// Add effect
	["Stun Spore", "GRASS", "Status", 30, 0, 75, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Stun_Spore_(move)
	// Add effect
	["Submission", "FIGHTING", "Physical", 20, 80, 80, "", "", ""], // bulbapedia.bulbagarden.net/wiki/Submission_(move)
	// Add effect
	["Supersonic", "NORMAL", "Status", 20, 0, 55, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Supersonic_(move)
	// Add effect
	["Sweet Scent", "NORMAL", "Status", 20, 0, 100, "", "", ""], // bulbapedia.bulbagarden.net/wiki/Sweet_Scent_(move)
	["Tackle", "NORMAL", "Physical", 35, 50, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Tackle_(move)
	// Add effect
	["Tail Whip", "NORMAL", "Status", 30, 0, 100, "defenseOpponent", -1, -6], //http://bulbapedia.bulbagarden.net/wiki/Tail_Whip_%28move%29
	// Add effect
	["Teleport", "PSYCHIC", "Status", 20, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Teleport_(move)
	// Add effect
	["Thundershock", "ELECTRIC", "Special", 30, 40, 100, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/Thunder_Shock_(move)
	// Add effect
	["Thunderbolt", "ELECTRIC", "Special", 15, 90, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Thunderbolt_(move)
	// Add effect
	["Thunder Wave", "ELECTRIC", "Status", 20, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Thunder_Wave_(move)
	// Add effect
	["Tri Attack", "NORMAL", "Special", 10, 80, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Tri_Attack_(move)
	// Add effect
	["Vine Whip", "GRASS", "Physical", 25, 45, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Vine_Whip_%28move%29
	["Water Gun", "WATER", "Special", 25, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Water_Gun_(move)
	// Add effect
	["Water Sport", "WATER", "Status", 15, 0, 100, "", "", ""], // accuracy is actually --- instead of 100% // http://bulbapedia.bulbagarden.net/wiki/Water_Sport_(move)
	["Wing Attack", "FLYING", "Physical", 35, 60, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Wing_Attack_(move)
	// Add effect
	["Withdraw", "WATER", "Status", 40, 0, 100, "", "", ""], // accuracy is actually --- instead of 100% // http://bulbapedia.bulbagarden.net/wiki/Withdraw_(move)
	// Add effect
	["Wrap", "NORMAL", "Physical", 20, 15, 90, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Wrap_(move)
	// Add effect
	["Yawn", "NORMAL", "Status", 10, 0, 100, "", "", ""], // accuracy is actually --- // http://bulbapedia.bulbagarden.net/wiki/Yawn_(move)
	["", "", "", 0, 0, 0, "", "", ""] // for when pokemon don't have all 4 moves yet
];

// Get exp needed for next level
function getExpNeededForNextLevel(level, expGroup) {
	var expNeeded;
	if (level == 100) {
		expNeeded = "---"
	} else {
		for (i=0; i<expNeededPerExpGroup.length; i++) {
			// do something
			if (expNeededPerExpGroup[i][0] == level) {
				for (j=0; j<7; j++) {
					if (expNeededPerExpGroup[0][j] == expGroup) {
						expNeeded = expNeededPerExpGroup[i+1][j] - expNeededPerExpGroup[i][j];
						return expNeeded;
					}
				}
			}
		};
	};
};

// Get name of a pokemon
function getPokemonName(pokemonNumber) {
	var pokemonName;
	for (i=0; i<pokemon.length; i++) {
		if (pokemon[i][0] == pokemonNumber) {
			pokemonName = pokemon[i][1];
			return pokemonName;
		};
	};
};

// Get base exp yield for a pokemon
function getBaseExpYield(pokemonNumber) {
	var baseExpYield;
	for (i=0; i<pokemon.length; i++) {
		if (pokemon[i][0] == pokemonNumber) {
			baseExpYield = pokemon[i][20];
			return baseExpYield;
		};
	};
};

// Get base exp yield for a pokemon
function getCatchRate(pokemonNumber) {
	var catchRate;
	for (i=0; i<pokemon.length; i++) {
		if (pokemon[i][0] == pokemonNumber) {
			catchRate = pokemon[i][21];
			return catchRate;
		};
	};
};

//Create pokemon function
// also add current exp for next level? (and exp needed for next level in pokemonStats?
// have current hp and maxHP as a stat of the pokemon; hp == maxHP at the start of the creation
function createPokemon(pokemonNumber, pokemonName, pokemonLevel, pokemonType1, pokemonType2, pokemonEvolveLevel, pokemonEvolvePokemon, currentHP, maxHP, attack, defense, spattack, spdefense, speed, pokemonMove1, pokemonMove2, pokemonMove3, pokemonMove4, expGroup, currentExp, expNextLevel, baseExpYield, catchRate) {
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
	this.expGroup = expGroup; //18 - ""
	this.currentExp = currentExp; //19 - 0
	this.expNextLevel = expNextLevel; //20 - 0
	this.baseExpYield = baseExpYield; //21 - 0
	this.catchRate = catchRate; //22 - 0
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
				pokemonMoves[i][6],
				pokemonMoves[i][7],
				pokemonMoves[i][8]
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
				pokemonMoves[i][6],
				pokemonMoves[i][7],
				pokemonMoves[i][8]
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
				pokemonMoves[i][6],
				pokemonMoves[i][7],
				pokemonMoves[i][8]
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
				pokemonMoves[i][6],
				pokemonMoves[i][7],
				pokemonMoves[i][8]
			); 
			pokemonObject.move4 = moveFour;
		};
	};
};

function createPokemonWithNameLevel(pokemonName, pokemonLevel) {
	var pokemon;
	// Create the pokemon object
	for (i=0; i<pokemonStats.length; i++) {
		if (pokemonStats[i][1] == pokemonName) {
			if (pokemonStats[i][2] == pokemonLevel) {
				// Create the starterPokemon Object
				pokemon = new createPokemon(
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
	createPokemonMoves(pokemon);

	// Return the pokemon object
	return pokemon;
};

function setActivePokemonText(player){
	for(i=0; i<6; i++) {
		var activePokemonNumber = i+1;
		var activePokemonCall = "activePokemon" + activePokemonNumber;
		if (player[activePokemonCall] != "") {
			document.getElementById(activePokemonCall).innerHTML = player[activePokemonCall].Name + "<br/>Lvl: " + player[activePokemonCall].level + "<br/> <img src=images/pokemonIconsTransparent/" + player[activePokemonCall].Name + ".png /> <br/>HP: " + player[activePokemonCall].currentHP + "/" + player[activePokemonCall].maxHP + "<br/><progress id='health' value=" + player[activePokemonCall].currentHP + " max=" + player[activePokemonCall].maxHP + " style='height:1vh;width:60%;'></progress> <br/>Exp: " + player[activePokemonCall].currentExp + "/" + player[activePokemonCall].expNextLevel;
			document.getElementById("activePokemonTitle").style.display = "block";
			document.getElementById("activePokemon").style.display = "block";
		};
	};
};

function setPokemonCaught(player){
	document.getElementById("pokemonCaught").innerHTML = "<h3> Pok&eacute;dex: " + player.pokemonCaught.total() + "/151 <br/><progress id='health' value=" + player.pokemonCaught.total() + " max=" + 151 + " style='height:1vh;width:60%;'>";
};

function levelAllPokemon(player){
	// show image of player surrounded by activePokemon
	var expTemp;
	document.getElementById("imageStory").innerHTML = "images/FireRed_" + player.gender + ".png";
	document.getElementById("pokemonRed").innerHTML = "You level all your pokemon to level " + player.pokemonLevel + ". ";
	// Level all activePokemon
	for (i=0; i<6; i++) {
		var activePokemonNumber = i + 1;
		var activePokemonCall = "activePokemon" + activePokemonNumber;
		if (player[activePokemonCall] != "") {
			if (player[activePokemonCall].level < player.pokemonLevel) {
				document.getElementById("pokemonOnTop" + activePokemonNumber).src = "images/pokemonIconsTransparent/" + player[activePokemonCall].Name + ".png";
				document.getElementById("pokemonOnTop" + activePokemonNumber).style.display = "inline";
				expTemp = player[activePokemonCall].currentExp;
				for (i=0; i<pokemonStats.length; i++) {
					if (pokemonStats[i][1] == player[activePokemonCall].Name) {
						if (pokemonStats[i][2] == player.pokemonLevel) {
							// Create the starterPokemon Object
							player[activePokemonCall] = new createPokemon(
								pokemonStats[i][0], 
								pokemonStats[i][1],
								pokemonStats[i][2],
								pokemonStats[i][3],
								pokemonStats[i][4],
								pokemonStats[i][5],
								pokemonStats[i][6],
								pokemonStats[i][7], // add difference between current and next level HP
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
								expTemp,
								pokemonStats[i][20],
								pokemonStats[i][21],
								pokemonStats[i][22]
							);
						};
					};
				};
				createPokemonMoves(player[activePokemonCall]);
				setActivePokemonText(player);
			};
		};
	};

	// Level all pcPokemon
	for(i=0; i<151; i++){
		var pcPokemonNumber = i + 1;
		var pcPokemonCall = "pc" + pcPokemonNumber;
		if (player[activePokemonCall].Name != "") {
			if (player[activePokemonCall].level < player.pokemonLevel) {
				expTemp = player[activePokemonCall].currentExp;
				for (i=0; i<pokemonStats.length; i++) {
					if (pokemonStats[i][1] == player[activePokemonCall].Name) {
						if (pokemonStats[i][2] == player.pokemonLevel) {
							// Create the starterPokemon Object
							player[activePokemonCall] = new createPokemon(
								pokemonStats[i][0], 
								pokemonStats[i][1],
								pokemonStats[i][2],
								pokemonStats[i][3],
								pokemonStats[i][4],
								pokemonStats[i][5],
								pokemonStats[i][6],
								player[activePokemonCall].currentHP + (pokemonStats[i][7] - pokemonStats[i-1][7]), // add difference between current and next level HP
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
								expTemp,
								pokemonStats[i][20],
								pokemonStats[i][21],
								pokemonStats[i][22]
							);
						};
					};
				};
				createPokemonMoves(player[activePokemonCall]);
				setActivePokemonText(player);
			};
		};
	};

	// Reset surrounding Pokemon images
	for (i=0; i<6; i++) {
		var activePokemonNumber = i + 1;
		var activePokemonCall = "activePokemon" + activePokemonNumber;
		if (player[activePokemonCall] != "") {
			document.getElementById("pokemonOnTop" + activePokemonNumber).style.display = "none";
		};
	};
};