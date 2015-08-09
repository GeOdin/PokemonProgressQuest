// stat calculator 31 IV and +Nature --> http://pycosites.com/pkmn/stat.html
// moves for FireRed --> http://serebii.net/pokedex-rs/
// This has the functions
//// createPokemon(pokemonNumber, pokemonName, pokemonLevel, pokemonType1, pokemonType2, pokemonEvolveLevel, pokemonEvolvePokemon, currentHP, maxHP, attack, defense, spattack, spdefense, speed, pokemonMove1, pokemonMove2, pokemonMove3, pokemonMove4);
//// createPokemonMoves(pokemonObject);
//// setPokemonMove(pokemonMoveName, pokemonMoveType, pokemonMoveCategory, pokemonMovePP, pokemonMovePower, pokemonMoveAccuracy, pokemonMoveEffect)

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
	["pokemonNumber", "pokemonName", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"], //0
	["001", "BULBASAUR", 1, "GRASS", "POISON", 16, "IVYSAUR", 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "expGroup", "currentExp", "expNextLevel", 64], //1
	["002", "IVYSAUR", 16, "GRASS", "POISON", 32, "VENUSAUR", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", "", "expGroup", "currentExp", "expNextLevel", 141],
	["003", "VENUSAUR", 32, "GRASS", "POISON", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", "", "expGroup", "currentExp", "expNextLevel", 208],
	["004", "CHARMANDER", 1, "FIRE", "", 16, "CHARMELEON", 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "", "", "expGroup", "currentExp", "expNextLevel", 65],
	["005", "CHARMELEON", 16, "FIRE", "", 36, "CHARIZARD", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", "", "expGroup", "currentExp", "expNextLevel", 142],
	["006", "CHARIZARD", 36, "FIRE", "FLYING", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", "", "expGroup", "currentExp", "expNextLevel", 209],
	["007", "SQUIRTLE", 1, "WATER", "", 16, "WARTORTLE", 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "expGroup", "currentExp", "expNextLevel", 66],
	["008", "WARTORTLE", 16, "WATER", "", 36, "BLASTOISE", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", "", "expGroup", "currentExp", "expNextLevel", 143],
	["009", "BLASTOISE", 36, "WATER", "", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", "", "expGroup", "currentExp", "expNextLevel", 210],
	["010", "CATERPIE", 1, "BUG", "", 7, "METAPOD", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "String Shot", "", "", "expGroup", "currentExp", "expNextLevel", 53],
	["011", "METAPOD", 7, "BUG", "", 10, "BUTTERFREE", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "String Shot", "Harden", "", "expGroup", "currentExp", "expNextLevel", 72],
	["012", "BUTTERFREE", 10, "BUG", "FLYING", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "String Shot", "Harden", "Confusion", "expGroup", "currentExp", "expNextLevel", 160],
	["013", "WEEDLE", 1, "BUG", "POISON", 7, "KAKUNA", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Poison Sting", "String Shot", "", "", "expGroup", "currentExp", "expNextLevel", 52],
	["014", "KAKUNA", 7, "BUG", "POISON", 10, "BEEDRILL", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Poison Sting", "String Shot", "Harden", "", "expGroup", "currentExp", "expNextLevel", 71],
	["015", "BEEDRILL", 10, "BUG", "POISON", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Poison Sting", "String Shot", "Harden", "Fury Attack", "expGroup", "currentExp", "expNextLevel", 159],
	["016", "PIDGEY", 1, "NORMAL", "FLYING", 18, "PIDGEOTTO", 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "expGroup", "currentExp", "expNextLevel", 55],
	["017", "PIDGEOTTO", 18, "NORMAL", "FLYING", 36, "PIDGEOT", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "Sand-attack", "Gust", "Quick Attack", "expGroup", "currentExp", "expNextLevel", 113],
	["018", "PIDGEOT", 36, "NORMAL", "FLYING", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Wing Attack", "Quick Attack", "Tackle", "Gust", "expGroup", "currentExp", "expNextLevel", 172],
	["019", "RATTATA", 1, "NORMAL", "", 20, "RATICATE", 11, 6, 6, 6, 5, 6, "Tackle", "Tail Whip", "", "", "expGroup", "currentExp", "expNextLevel", 57],
	["020", "RATICATE", 20, "NORMAL", "", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "Tail Whip", "Quick Attack", "Hyper Fang", "expGroup", "currentExp", "expNextLevel", 116],
	["021", "SPEAROW", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", 58],
	["022", "FEAROW", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", 162],
	["023", "EKANS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["024", "ARBOK", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["025", "PIKACHU", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["026", "RAICHU", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["027", "SANDSHREW", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["028", "SANDSLASH", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["029", "NIDORAN_FEMALE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["030", "NIDORINA", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["031", "NIDOQUEEN", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["032", "NIDORAN_MALE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["033", "NIDORINO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["034", "NIDOKING", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["035", "CLEFAIRY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["036", "CLEFABLE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["037", "VULPIX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["038", "NINETALES", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["039", "JIGGLYPUFF", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["040", "WIGGLYTUFF", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["041", "ZUBAT", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["042", "GOLBAT", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["043", "ODDISH", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["044", "GLOOM", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["045", "VILEPLUME", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["046", "PARAS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["047", "PARASECT", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["048", "VENONAT", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["049", "VENOMOTH", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["050", "DIGLETT", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["051", "DUGTRIO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["052", "MEOWTH", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["053", "PERSIAN", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["054", "PSYDUCK", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["055", "GOLDUCK", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["056", "MANKEY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", 74],
	["057", "PRIMEAPE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", 149],
	["058", "GROWLITHE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["059", "ARCANINE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["060", "POLIWAG", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["061", "POLIWHIRL", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["062", "POLIWRATH", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["063", "ABRA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["064", "KADABRA", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["065", "ALAKAZAM", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["066", "MACHOP", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["067", "MACHOKE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["068", "MACHAMP", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["069", "BELLSPROUT", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["070", "WEEPINBELL", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["071", "VICTREEBELL", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["072", "TENTACOOL", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["073", "TENTACRUEL", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["074", "GEODUDE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["075", "GRAVELER", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["076", "GOLEM", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["077", "PONYTA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["078", "RAPIDASH", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["079", "SLOWPOKE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["080", "SLOWBRO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["081", "MAGNEMITE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["082", "MAGNETON", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["083", "FARFETCH_D", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["084", "DODUO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["085", "DODRIO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["086", "SEEL", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["087", "DEWGONG", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["088", "GRIMER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["089", "MUK", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["090", "SHELLDER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["091", "CLOYSTER", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["092", "GASTLY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["093", "HAUNTER", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["094", "GENGAR", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["095", "ONIX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["096", "DROWZEE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["097", "HYPNO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["098", "KRABBY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["099", "KINGLER", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["100", "VOLTORB", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["101", "ELECTRODE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["102", "EXEGGCUTE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["103", "EXEGGUTOR", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["104", "CUBONE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["105", "MAROWAK", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["106", "HITMONLEE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["107", "HITMONCHAN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["108", "LICKITUNG", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["109", "KOFFING", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["110", "WEEZING", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["111", "RHYHORN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["112", "RHYDON", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["113", "CHANSEY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["114", "TANGELA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["115", "KANGASKHAN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["116", "HORSEA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["117", "SEADREA", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["118", "GOLDEEN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["119", "SEAKING", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["120", "STARYU", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["121", "STARMIE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["122", "MR_MIME", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["123", "SCYTHER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["124", "JYNX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["125", "ELECTABUZZ", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["126", "MAGMAR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["127", "PINSIR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["128", "TAUROS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["129", "MAGIKARP", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["130", "GYARADOS", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["131", "LAPRAS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["132", "DITTO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["133", "EEVEE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["134", "VAPOREON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["135", "JOLTEON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["136", "FLAREON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["137", "PORYGON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["138", "OMANYTE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["139", "OMASTAR", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["140", "KABUTO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["141", "KABUTOPS", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["142", "AERODACTYL", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["143", "SNORLAX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["144", "ARTICUNO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["145", "ZAPDOS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["146", "MOLTRES", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["147", "DRATINI", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["148", "DRAGONAIR", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["149", "DRAGONITE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["150", "MEWTWO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["151", "MEW", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"]
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
	["pokemonNumber", "pokemonName", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolveName", "currentHP", "maxHP", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4", "expGroup", "currentExp", "expNextLevel", "baseExpYield"],
	["001", "BULBASAUR", 1, "GRASS", "POISON", 16, "IVYSAUR", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 2, "GRASS", "POISON", 16, "IVYSAUR", 14, 14, 7, 7, 8, 8, 7, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 3, "GRASS", "POISON", 16, "IVYSAUR", 16, 16, 8, 8, 9, 9, 8, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 4, "GRASS", "POISON", 16, "IVYSAUR", 18, 18, 11, 11, 12, 12, 9, "Tackle", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 5, "GRASS", "POISON", 16, "IVYSAUR", 21, 21, 12, 12, 14, 14, 12, "Tackle", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 6, "GRASS", "POISON", 16, "IVYSAUR", 23, 23, 13, 13, 15, 15, 13, "Tackle", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 7, "GRASS", "POISON", 16, "IVYSAUR", 25, 25, 15, 15, 17, 17, 14, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 8, "GRASS", "POISON", 16, "IVYSAUR", 27, 27, 16, 16, 18, 18, 15, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 9, "GRASS", "POISON", 16, "IVYSAUR", 29, 29, 17, 17, 20, 20, 16, "Tackle", "Growl", "Leech Seed", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 10, "GRASS", "POISON", 16, "IVYSAUR", 32, 32, 18, 18, 23, 23, 18, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 11, "GRASS", "POISON", 16, "IVYSAUR", 34, 34, 20, 20, 24, 24, 19, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 12, "GRASS", "POISON", 16, "IVYSAUR", 36, 36, 22, 22, 26, 26, 20, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 13, "GRASS", "POISON", 16, "IVYSAUR", 38, 38, 23, 23, 27, 27, 22, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 14, "GRASS", "POISON", 16, "IVYSAUR", 40, 40, 25, 25, 29, 29, 23, "Tackle", "Growl", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 15, "GRASS", "POISON", 16, "IVYSAUR", 43, 43, 26, 26, 31, 31, 25, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("001")],
	["001", "BULBASAUR", 16, "GRASS", "POISON", 16, "IVYSAUR", 45, 45, 27, 27, 33, 33, 26, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("001")],
	["004", "CHARMANDER", 1, "FIRE", "", 16, "CHARMELEON", 12, 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 2, "FIRE", "", 16, "CHARMELEON", 14, 14, 7, 7, 8, 7, 8, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 3, "FIRE", "", 16, "CHARMELEON", 16, 16, 9, 8, 9, 8, 9, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 4, "FIRE", "", 16, "CHARMELEON", 18, 18, 11, 9, 12, 11, 12, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 5, "FIRE", "", 16, "CHARMELEON", 20, 20, 12, 11, 13, 12, 14, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 6, "FIRE", "", 16, "CHARMELEON", 22, 22, 14, 13, 15, 13, 15, "Scratch", "Growl", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 7, "FIRE", "", 16, "CHARMELEON", 24, 24, 15, 14, 16, 15, 17, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 8, "FIRE", "", 16, "CHARMELEON", 26, 26, 16, 15, 18, 16, 18, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 9, "FIRE", "", 16, "CHARMELEON", 28, 28, 18, 16, 19, 17, 20, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 10, "FIRE", "", 16, "CHARMELEON", 30, 30, 19, 17, 22, 19, 23, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 11, "FIRE", "", 16, "CHARMELEON", 32, 32, 20, 18, 23, 20, 24, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 12, "FIRE", "", 16, "CHARMELEON", 35, 35, 23, 20, 25, 22, 26, "Scratch", "Growl", "Ember", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 13, "FIRE", "", 16, "CHARMELEON", 37, 37, 24, 22, 26, 24, 27, "Scratch", "Growl", "Ember", "Smokescreen", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 14, "FIRE", "", 16, "CHARMELEON", 39, 39, 25, 23, 28, 25, 29, "Scratch", "Growl", "Ember", "Smokescreen", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 15, "FIRE", "", 16, "CHARMELEON", 41, 41, 27, 24, 29, 26, 31, "Scratch", "Growl", "Ember", "Smokescreen", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("004")],
	["004", "CHARMANDER", 16, "FIRE", "", 16, "CHARMELEON", 43, 43, 28, 25, 31, 27, 33, "Scratch", "Growl", "Ember", "Smokescreen", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("004")],
	["007", "SQUIRTLE", 1, "WATER", "", 16, "WARTORTLE", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 2, "WATER", "", 16, "WARTORTLE", 14, 14, 7, 8, 7, 8, 7, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 3, "WATER", "", 16, "WARTORTLE", 16, 16, 8, 9, 8, 9, 8, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 4, "WATER", "", 16, "WARTORTLE", 18, 18, 11, 12, 11, 12, 9, "Tackle", "Tail Whip", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 5, "WATER", "", 16, "WARTORTLE", 20, 20, 12, 14, 12, 13, 11, "Tackle", "Tail Whip", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 6, "WATER", "", 16, "WARTORTLE", 23, 23, 13, 15, 13, 15, 13, "Tackle", "Tail Whip", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(6, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 7, "WATER", "", 16, "WARTORTLE", 25, 25, 14, 17, 15, 17, 14, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(7, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 8, "WATER", "", 16, "WARTORTLE", 27, 27, 16, 18, 16, 18, 15, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(8, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 9, "WATER", "", 16, "WARTORTLE", 29, 29, 17, 20, 17, 20, 16, "Tackle", "Tail Whip", "Bubble", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(9, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 10, "WATER", "", 16, "WARTORTLE", 31, 31, 18, 23, 19, 22, 17, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(10, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 11, "WATER", "", 16, "WARTORTLE", 34, 34, 19, 24, 20, 24, 18, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(11, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 12, "WATER", "", 16, "WARTORTLE", 36, 36, 22, 26, 22, 26, 20, "Tackle", "Tail Whip", "Bubble", "Withdraw", "MEDIUMSLOW", 0, getExpNeededForNextLevel(12, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 13, "WATER", "", 16, "WARTORTLE", 38, 38, 23, 27, 24, 27, 22, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(13, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 14, "WATER", "", 16, "WARTORTLE", 40, 40, 24, 29, 25, 29, 23, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(14, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 15, "WATER", "", 16, "WARTORTLE", 42, 42, 26, 31, 26, 30, 24, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(15, "MEDIUMSLOW"), getBaseExpYield("007")],
	["007", "SQUIRTLE", 16, "WATER", "", 16, "WARTORTLE", 45, 45, 27, 33, 27, 33, 25, "Tackle", "Tail Whip", "Bubble", "Water Gun", "MEDIUMSLOW", 0, getExpNeededForNextLevel(16, "MEDIUMSLOW"), getBaseExpYield("007")],
	["016", "PIDGEY", 1, "NORMAL", "FLYING", 18, "PIDGEOTTO", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(1, "MEDIUMSLOW"), getBaseExpYield("016")],
	["016", "PIDGEY", 2, "NORMAL", "FLYING", 18, "PIDGEOTTO", 14, 14, 7, 7, 7, 7, 7, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(2, "MEDIUMSLOW"), getBaseExpYield("016")],
	["016", "PIDGEY", 3, "NORMAL", "FLYING", 18, "PIDGEOTTO", 16, 16, 8, 8, 8, 8, 9, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(3, "MEDIUMSLOW"), getBaseExpYield("016")],
	["016", "PIDGEY", 4, "NORMAL", "FLYING", 18, "PIDGEOTTO", 18, 18, 9, 9, 9, 9, 11, "Tackle", "", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(4, "MEDIUMSLOW"), getBaseExpYield("016")],
	["016", "PIDGEY", 5, "NORMAL", "FLYING", 18, "PIDGEOTTO", 20, 20, 12, 11, 11, 11, 13, "Tackle", "Sand-attack", "", "", "MEDIUMSLOW", 0, getExpNeededForNextLevel(5, "MEDIUMSLOW"), getBaseExpYield("016")],
	["019", "RATTATA", 1, "NORMAL", "", 20, "RATICATE", 11, 11, 6, 6, 6, 5, 6, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("019")],
	["019", "RATTATA", 2, "NORMAL", "", 20, "RATICATE", 13, 13, 7, 7, 6, 7, 8, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("019")],
	["019", "RATTATA", 3, "NORMAL", "", 20, "RATICATE", 15, 15, 9, 8, 7, 8, 11, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("019")],
	["019", "RATTATA", 4, "NORMAL", "", 20, "RATICATE", 17, 17, 11, 9, 8, 9, 13, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("019")],
	["019", "RATTATA", 5, "NORMAL", "", 20, "RATICATE", 19, 19, 13, 11, 9, 11, 14, "Tackle", "Tail Whip", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("019")],
	["021", "SPEAROW", 1, "NORMAL", "FLYING", 20, "FEAROW", 12, 12, 6, 5, 5, 5, 6, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("021")],
	["021", "SPEAROW", 2, "NORMAL", "FLYING", 20, "FEAROW", 14, 14, 8, 6, 6, 6, 8, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("021")],
	["021", "SPEAROW", 3, "NORMAL", "FLYING", 20, "FEAROW", 16, 16, 9, 7, 7, 7, 11, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("021")],
	["021", "SPEAROW", 4, "NORMAL", "FLYING", 20, "FEAROW", 18, 18, 12, 8, 8, 8, 12, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("021")],
	["021", "SPEAROW", 5, "NORMAL", "FLYING", 20, "FEAROW", 20, 20, 13, 9, 9, 9, 14, "Peck", "Growl", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("021")],
	["056", "MANKEY", 1, "FIGHT", "", 28, "PRIMEAPE", 12, 12, 6, 6, 6, 6, 6, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(1, "MEDIUMFAST"), getBaseExpYield("056")],
	["056", "MANKEY", 2, "FIGHT", "", 28, "PRIMEAPE", 14, 14, 8, 7, 7, 7, 8, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(2, "MEDIUMFAST"), getBaseExpYield("056")],
	["056", "MANKEY", 3, "FIGHT", "", 28, "PRIMEAPE", 16, 16, 11, 8, 8, 8, 11, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(3, "MEDIUMFAST"), getBaseExpYield("056")],
	["056", "MANKEY", 4, "FIGHT", "", 28, "PRIMEAPE", 18, 18, 13, 9, 9, 9, 12, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(4, "MEDIUMFAST"), getBaseExpYield("056")],
	["056", "MANKEY", 5, "FIGHT", "", 28, "PRIMEAPE", 20, 20, 15, 11, 11, 12, 14, "Scratch", "Leer", "", "", "MEDIUMFAST", 0, getExpNeededForNextLevel(5, "MEDIUMFAST"), getBaseExpYield("056")]
];

// Pokemon moves background information
var pokemonMoves = [
	//add "Effect" for moves with type "Status" ? add PP-max for when PP UP items are introduced? //also add description? //perhaps make accuracy a float instead of integer?
	["Name", "Type", "category", "pp", "power", "accuracy", "statOpponent", "statOpponentDecrease", "statOpponentMaxDecrease"], //http://bulbapedia.bulbagarden.net/wiki/Confusion_(move)
	["Bubble", "WATER", "Special", 30, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Bubble_(move)
	["Confusion", "PSYCHIC", "Special", 25, 50, 100, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/Growl_%28move%29
	// Add effect
	["Ember", "FIRE", "Special", 25, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Ember_(move)
	// Add fact for Fury attack that the attack can hit 2-5 times! - http://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(move)
	["Fury Attack", "NORMAL", "Physical", 20, 15, 85, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(move)
	// Add effect of attack -= 1 until end of battle
	["Growl", "NORMAL", "Status", 40, 0, 100, "attackOpponent", -1, -6], //http://bulbapedia.bulbagarden.net/wiki/Growl_%28move%29
	["Gust", "FLYING", "Special", 35, 40, 100, "", "", ""],  // http://bulbapedia.bulbagarden.net/wiki/Gust_(move)
	// Add effect
	["Harden", "NORMAL", "Status", 30, 0, 100, "", "", ""], //accuracy is actually --- instead of 100% //http://bulbapedia.bulbagarden.net/wiki/Harden_(move)
	["Hyper Fang", "NORMAL", "Physical", 15, 80, 90, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Hyper_Fang_(move)
	// Add effect
	["Leech Seed", "GRASS", "Status", 10, 0, 90, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Leech_Seed_(move)
	// Add effect
	["Leer", "NORMAL", "Status", 30, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Leer_(move)
	["Peck", "FLYING", "Physical", 35, 35, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Peck_(move)
	// Add effect
	["Poisonpowder", "POISON", "Status", 35, 0, 75, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Poison_Powder_(move)
	// Add effect
	["Poison Sting", "POISON", "Physical", 35, 15, 100, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/Poison_Sting_(move)
	// priority +1 for Quick Attack
	["Quick Attack", "NORMAL", "Physical", 30, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Quick_Attack_(move)
	// Add effect
	["Sand-attack", "GROUND", "Status", 15, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Sand_Attack_(move)
	["Scratch", "NORMAL", "Physical", 35, 40, 100, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/Scratch_%28move%29
	// Add effect
	["Sleep Powder", "GRASS", "Status", 15, 0, 75, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Sleep_Powder_(move)
	// Add effect
	["Smokescreen", "NORMAL", "Status", 20, 0, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Smokescreen_(move)
	// Add effect
	["String Shot", "BUG", "Status", 40, 0, 95, "", "", ""], //http://bulbapedia.bulbagarden.net/wiki/String_Shot_(move)
	["Tackle", "NORMAL", "Physical", 35, 50, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Tackle_(move)
	// Add effect
	["Tail Whip", "NORMAL", "Status", 30, 0, 100, "defenseOpponent", -1, -6], //http://bulbapedia.bulbagarden.net/wiki/Tail_Whip_%28move%29
	// Add effect
	["Vine Whip", "GRASS", "Physical", 25, 45, 100, "", "", ""],
	["Water Gun", "WATER", "Special", 25, 40, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Water_Gun_(move)
	["Wing Attack", "FLYING", "Physical", 35, 60, 100, "", "", ""], // http://bulbapedia.bulbagarden.net/wiki/Wing_Attack_(move)
	// Add effect
	["Withdraw", "WATER", "Status", 40, 0, 100, "", "", ""], // accuracy is actually --- instead of 100% // http://bulbapedia.bulbagarden.net/wiki/Withdraw_(move)
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

// Get base exp yield for a pokemon
function getBaseExpYield(pokemonNumber) {
	var baseExpYield;
	for (i=0; i<pokemon.length; i++) {
		// do something
		if (pokemon[i][0] == pokemonNumber) {
			baseExpYield = pokemon[i][20];
			return baseExpYield;
		}
	};
};

//Create pokemon function
// also add current exp for next level? (and exp needed for next level in pokemonStats?
// have current hp and maxHP as a stat of the pokemon; hp == maxHP at the start of the creation
function createPokemon(pokemonNumber, pokemonName, pokemonLevel, pokemonType1, pokemonType2, pokemonEvolveLevel, pokemonEvolvePokemon, currentHP, maxHP, attack, defense, spattack, spdefense, speed, pokemonMove1, pokemonMove2, pokemonMove3, pokemonMove4, expGroup, currentExp, expNextLevel, baseExpYield) {
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