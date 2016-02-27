/* PKMN.js
 * JavaScript file to handle the Pokemon
 * Made on 2016-02-25
 * by GeOdin
 * Last modified on 2016-02-27
 *
 *=========================================================
 * This file includes the following variables: *
 *=========================================================
 * pokemon
 */

var pokemon = [
	["Pokemon ID", "Pokemon Name", "catchChance"],
	[1, "BULBASAUR", 45/255],
	[2, "IVYSAUR", 45/255], 
	[3, "VENUSAUR", 45/255],
	[4, "CHARMANDER", 45/255],
	[5, "CHARMELEON", 45/255],
	[6, "CHARIZARD", 45/255],
	[7, "SQUIRTLE", 45/255],
	[8, "WARTORTLE", 45/255],
	[9, "BLASTOISE", 45/255],
	[10, "CATERPIE", 255/255],
	[11, "METAPOD", 120/255],
	[12, "BUTTERFREE", 45/255],
	[13, "WEEDLE", 255/255],
	[14, "KAKUNA", 120/255],
	[15, "BEEDRILL", 45/255],
	[16, "PIDGEY", 255/255],
	[17, "PIDGEOTTO", 120/255],
	[18, "PIDGEOT", 45/255],
	[19, "RATTATA", 255/255],
	[20, "RATICATE", 127/255],
	[21, "SPEAROW", 255/255],
	[22, "FEAROW", 90/255],
	[23, "EKANS", 255/255],
	[24, "ARBOK", 90/255],
	[25, "PIKACHU", 190/255],
	[26, "RAICHU", 75/255],
	[27, "SANDSHREW", 255/255],
	[28, "SANDSLASH", 90/255],
	[29, "NIDORAN_FEMALE", 235/255],
	[30, "NIDORINA", 120/255],
	[31, "NIDOQUEEN", 45/255],
	[32, "NIDORAN_MALE", 235/255],
	[33, "NIDORINO", 120/255],
	[34, "NIDOKING", 45/255],
	[35, "CLEFAIRY", 150/255],
	[36, "CLEFABLE", 25/255],
	[37, "VULPIX", 190/255],
	[38, "NINETALES", 75/255],
	[39, "JIGGLYPUFF", 170/255],
	[40, "WIGGLYTUFF", 50/255],
	[41, "ZUBAT", 255/255],
	[42, "GOLBAT", 90/255],
	[43, "ODDISH", 255/255],
	[44, "GLOOM", 120/255],
	[45, "VILEPLUME", 45/255],
	[46, "PARAS", 190/255],
	[47, "PARASECT", 75/255],
	[48, "VENONAT", 190/255],
	[49, "VENOMOTH", 75/255],
	[50, "DIGLETT", 255/255],
	[51, "DUGTRIO", 50/255],
	[52, "MEOWTH", 255/255],
	[53, "PERSIAN", 90/255],
	[54, "PSYDUCK", 190/255],
	[55, "GOLDUCK", 75/255],
	[56, "MANKEY", 190/255],
	[57, "PRIMEAPE", 75/255],
	[58, "GROWLITHE", 190/255],
	[59, "ARCANINE", 75/255],
	[60, "POLIWAG", 255/255],
	[61, "POLIWHIRL", 120/255],
	[62, "POLIWRATH", 45/255],
	[63, "ABRA", 200/255],
	[64, "KADABRA", 100/255],
	[65, "ALAKAZAM", 50/255],
	[66, "MACHOP", 180/255],
	[67, "MACHOKE", 90/255],
	[68, "MACHAMP", 45/255],
	[69, "BELLSPROUT", 255/255],
	[70, "WEEPINBELL", 120/255],
	[71, "VICTREEBELL", 45/255],
	[72, "TENTACOOL", 190/255],
	[73, "TENTACRUEL", 60/255],
	[74, "GEODUDE", 255/255],
	[75, "GRAVELER", 120/255],
	[76, "GOLEM", 45/255],
	[77, "PONYTA", 190/255],
	[78, "RAPIDASH", 60/255],
	[79, "SLOWPOKE", 190/255],
	[80, "SLOWBRO", 75/255],
	[81, "MAGNEMITE", 190/255],
	[82, "MAGNETON", 60/255],
	[83, "FARFETCH_D", 45/255],
	[84, "DODUO", 190/255],
	[85, "DODRIO", 45/255],
	[86, "SEEL", 190/255],
	[87, "DEWGONG", 75/255],
	[88, "GRIMER", 190/255],
	[89, "MUK", 75/255],
	[90, "SHELLDER", 190/255],
	[91, "CLOYSTER", 60/255],
	[92, "GASTLY", 190/255],
	[93, "HAUNTER", 90/255],
	[94, "GENGAR", 45/255],
	[95, "ONIX", 45/255],
	[96, "DROWZEE", 190/255],
	[97, "HYPNO", 75/255],
	[98, "KRABBY", 225/255],
	[99, "KINGLER", 60/255],
	[100, "VOLTORB", 190/255],
	[101, "ELECTRODE", 60/255],
	[102, "EXEGGCUTE", 90/255],
	[103, "EXEGGUTOR", 45/255],
	[104, "CUBONE", 190/255],
	[105, "MAROWAK", 75/255],
	[106, "HITMONLEE", 45/255],
	[107, "HITMONCHAN", 45/255],
	[108, "LICKITUNG", 45/255],
	[109, "KOFFING", 190/255],
	[110, "WEEZING", 60/255],
	[111, "RHYHORN", 120/255],
	[112, "RHYDON", 60/255],
	[113, "CHANSEY", 30/255],
	[114, "TANGELA", 45/255],
	[115, "KANGASKHAN", 45/255],
	[116, "HORSEA", 225/255],
	[117, "SEADRA", 75/255],
	[118, "GOLDEEN", 225/255],
	[119, "SEAKING", 60/255],
	[120, "STARYU", 225/255],
	[121, "STARMIE", 60/255],
	[122, "MR_MIME", 45/255],
	[123, "SCYTHER", 45/255],
	[124, "JYNX", 45/255],
	[125, "ELECTABUZZ", 45/255],
	[126, "MAGMAR", 45/255],
	[127, "PINSIR", 45/255],
	[128, "TAUROS", 45/255],
	[129, "MAGIKARP", 255/255],
	[130, "GYARADOS", 45/255],
	[131, "LAPRAS", 45/255],
	[132, "DITTO", 35/255],
	[133, "EEVEE", 45/255],
	[134, "VAPOREON", 45/255],
	[135, "JOLTEON", 45/255],
	[136, "FLAREON", 45/255],
	[137, "PORYGON", 45/255],
	[138, "OMANYTE", 45/255],
	[139, "OMASTAR", 45/255],
	[140, "KABUTO", 45/255],
	[141, "KABUTOPS", 45/255],
	[142, "AERODACTYL", 45/255],
	[143, "SNORLAX", 25/255],
	[144, "ARTICUNO", 3/255],
	[145, "ZAPDOS", 3/255],
	[146, "MOLTRES", 3/255],
	[147, "DRATINI", 45/255],
	[148, "DRAGONAIR", 45/255],
	[149, "DRAGONITE", 45/255],
	[150, "MEWTWO", 3/255],
	[151, "MEW", 45/255],
	[152, "CHIKORITA", 45/255],
	[153, "BAYLEEF", 45/255],
	[154, "MEGANIUM", 45/255],
	[155, "CYNDAQUIL", 45/255],
	[156, "QUILAVA", 45/255],
	[157, "TYPHLOSION", 45/255],
	[158, "TOTODILE", 45/255],
	[159, "CROCONAW", 45/255],
	[160, "FERALIGATR", 45/255],
	[161, "SENTRET", 255/255],
	[162, "FURRET", 90/255],
	[163, "HOOTHOOT", 255/255],
	[164, "NOCTOWL", 90/255],
	[165, "LEDYBA", 255/255],
	[166, "LEDIAN", 90/255],
	[167, "SPINARAK", 255/255],
	[168, "ARIADOS", 90/255],
	[169, "CROBAT", 90/255],
	[170, "CHINCHOU", 190/255],
	[171, "LANTURN", 75/255],
	[172, "PICHU", 190/255],
	[173, "CLEFFA", 150/255],
	[174, "IGGLYBUFF", 170/255],
	[175, "TOGEPI", 190/255],
	[176, "TOGETIC", 75/255],
	[177, "NATU", 190/255],
	[178, "XATU", 75/255],
	[179, "MAREEP", 235/255],
	[180, "FLAAFFY", 120/255],
	[181, "AMPHAROS", 45/255],
	[182, "BELLOSSOM", 45/255],
	[183, "MARILL", 190/255],
	[184, "AZUMARILL", 75/255],
	[185, "SUDOWOODO", 65/255],
	[186, "POLITOAD", 45/255],
	[187, "HOPPIP", 255/255],
	[188, "SKIPLOOM", 120/255],
	[189, "JUMPLUFF", 45/255],
	[190, "AIPOM", 45/255],
	[191, "SUNKERN", 235/255],
	[192, "SUNFLORA", 120/255],
	[193, "YANMA", 75/255],
	[194, "WOOPER", 255/255],
	[195, "QUAGSIRE", 90/255],
	[196, "ESPEON", 45/255],
	[197, "UMBREON", 45/255],
	[198, "MURKROW", 30/255],
	[199, "SLOWKING", 70/255],
	[200, "MISDREAVUS", 45/255],
	[201, "UNOWN", 225/255],
	[202, "WOBBUFFET", 45/255],
	[203, "GIRAFARIG", 60/255],
	[204, "PINECO", 190/255],
	[205, "FORRETRESS", 75/255],
	[206, "DUNSPARCE", 190/255],
	[207, "GLIGAR", 60/255],
	[208, "STEELIX", 25/255],
	[209, "SNUBBULL", 190/255],
	[210, "GRANBULL", 75/255],
	[211, "QWILFISH", 45/255],
	[212, "SCIZOR", 25/255],
	[213, "SHUCKLE", 190/255],
	[214, "HERACROSS", 45/255],
	[215, "SNEASEL", 60/255],
	[216, "TEDDIURSA", 120/255],
	[217, "URSARING", 60/255],
	[218, "SLUGMA", 190/255],
	[219, "MAGCARGO", 75/255],
	[220, "SWINUB", 225/255],
	[221, "PILOSWINE", 75/255],
	[222, "CORSOLA", 60/255],
	[223, "REMORAID", 190/255],
	[224, "OCTILLERY", 75/255],
	[225, "DELIBIRD", 45/255],
	[226, "MANTINE", 25/255],
	[227, "SKARMORY", 25/255],
	[228, "HOUNDOUR", 120/255],
	[229, "HOUNDOOM", 45/255],
	[230, "KINGDRA", 45/255],
	[231, "PHANPY", 120/255],
	[232, "DONPHAN", 60/255],
	[233, "PORYGON2", 45/255],
	[234, "STANTLER", 45/255],
	[235, "SMEARGLE", 45/255],
	[236, "TYROGUE", 75/255],
	[237, "HITMONTOP", 45/255],
	[238, "SMOOCHUM", 45/255],
	[239, "ELEKID", 45/255],
	[240, "MAGBY", 45/255],
	[241, "MILTANK", 45/255],
	[242, "BLISSEY", 30/255],
	[243, "RAIKOU", 3/255],
	[244, "ENTEI", 3/255],
	[245, "SUICUNE", 3/255],
	[246, "LARVITAR", 45/255],
	[247, "PUPITAR", 45/255],
	[248, "TYRANITAR", 45/255],
	[249, "LUGIA", 3/255],
	[250, "HO_OH", 3/255],
	[251, "CELEBI", 45/255],
	[252, "TREECKO", 45/255],
	[253, "GROVYLE", 45/255],
	[254, "SCEPTILE", 45/255],
	[255, "TORCHIC", 45/255],
	[256, "COMBUSKEN", 45/255],
	[257, "BLAZIKEN", 45/255],
	[258, "MUDKIP", 45/255],
	[259, "MARSHTOMP", 45/255],
	[260, "SWAMPERT", 45/255],
	[261, "POOCHYENA", 255/255],
	[262, "MIGHTYENA", 127/255],
	[263, "ZIGZAGOON", 255/255],
	[264, "LINOONE", 90/255],
	[265, "WURMPLE", 255/255],
	[266, "SILCOON", 120/255],
	[267, "BEAUTIFLY", 45/255],
	[268, "CASCOON", 120/255],
	[269, "DUSTOX", 45/255],
	[270, "LOTAD", 255/255],
	[271, "LOMBRE", 120/255],
	[272, "LUDICOLO", 45/255],
	[273, "SEEDOT", 255/255],
	[274, "NUZLEAF", 120/255],
	[275, "SHIFTRY", 45/255],
	[276, "TAILLOW", 200/255],
	[277, "SWELLOW", 45/255],
	[278, "WINGULL", 190/255],
	[279, "PELIPPER", 45/255],
	[280, "RALTS", 235/255],
	[281, "KIRLIA", 120/255],
	[282, "GARDEVOIR", 45/255],
	[283, "SURSKIT", 200/255],
	[284, "MASQUERAIN", 75/255],
	[285, "SHROOMISH", 255/255],
	[286, "BRELOOM", 90/255],
	[287, "SLAKOTH", 255/255],
	[288, "VIGOROTH", 120/255],
	[289, "SLAKING", 45/255],
	[290, "NINCADA", 255/255],
	[291, "NINJASK", 120/255],
	[292, "SHEDINJA", 45/255],
	[293, "WHISMUR", 190/255],
	[294, "LOUDRED", 120/255],
	[295, "EXPLOUD", 45/255],
	[296, "MAKUHITA", 180/255],
	[297, "HARIYAMA", 200/255],
	[298, "AZURILL", 150/255],
	[299, "NOSEPASS", 255/255],
	[300, "SKITTY", 255/255],
	[301, "DELCATTY", 60/255],
	[302, "SABLEYE", 45/255],
	[303, "MAWILE", 45/255],
	[304, "ARON", 180/255],
	[305, "LAIRON", 90/255],
	[306, "AGGRON", 45/255],
	[307, "MEDITITE", 180/255],
	[308, "MEDICHAM", 90/255],
	[309, "ELECTRIKE", 120/255],
	[310, "MANECTRIC", 45/255],
	[311, "PLUSLE", 200/255],
	[312, "MINUN", 200/255],
	[313, "VOLBEAT", 150/255],
	[314, "ILLUMISE", 150/255],
	[315, "ROSELIA", 150/255],
	[316, "GULPIN", 225/255],
	[317, "SWALOT", 75/255],
	[318, "CARVANHA", 225/255],
	[319, "SHARPEDO", 60/255],
	[320, "WAILMER", 125/255],
	[321, "WAILORD", 60/255],
	[322, "NUMEL", 255/255],
	[323, "CAMERUPT", 150/255],
	[324, "TORKOAL", 90/255],
	[325, "SPOINK", 255/255],
	[326, "GRUMPIG", 60/255],
	[327, "SPINDA", 255/255],
	[328, "TRAPINCH", 255/255],
	[329, "VIBRAVA", 120/255],
	[330, "FLYGON", 45/255],
	[331, "CACNEA", 190/255],
	[332, "CACTURNE", 60/255],
	[333, "SWABLU", 255/255],
	[334, "ALTARIA", 45/255],
	[335, "ZANGOOSE", 90/255],
	[336, "SEVIPER", 90/255],
	[337, "LUNATONE", 45/255],
	[338, "SOLROCK", 45/255],
	[339, "BARBOACH", 190/255],
	[340, "WHISCASH", 75/255],
	[341, "CORPHISH", 205/255],
	[342, "CRAWDAUNT", 155/255],
	[343, "BALTOY", 255/255],
	[344, "CLAYDOL", 90/255],
	[345, "LILEEP", 45/255],
	[346, "CRADILY", 45/255],
	[347, "ANORITH", 45/255],
	[348, "ARMALDO", 45/255],
	[349, "FEEBAS", 255/255],
	[350, "MILOTIC", 60/255],
	[351, "CASTFORM", 45/255],
	[352, "KECLEON", 200/255],
	[353, "SHUPPET", 225/255],
	[354, "BANETTE", 45/255],
	[355, "DUSKULL", 190/255],
	[356, "DUSCLOPS", 90/255],
	[357, "TROPIUS", 200/255],
	[358, "CHIMECHO", 45/255],
	[359, "ABSOL", 30/255],
	[360, "WYNAUT", 125/255],
	[361, "SNORUNT", 190/255],
	[362, "GLALIE", 75/255],
	[363, "SPHEAL", 255/255],
	[364, "SEALEO", 120/255],
	[365, "WALREIN", 45/255],
	[366, "CLAMPERL", 255/255],
	[367, "HUNTAIL", 60/255],
	[368, "GOREBYSS", 60/255],
	[369, "RELICANTH", 25/255],
	[370, "LUVDISC", 225/255],
	[371, "BAGON", 45/255],
	[372, "SHELGON", 45/255],
	[373, "SALAMENCE", 45/255],
	[374, "BELDUM", 3/255],
	[375, "METANG", 3/255],
	[376, "METAGROSS", 3/255],
	[377, "REGIROCK", 3/255],
	[378, "REGICE", 3/255],
	[379, "REGISTEEL", 3/255],
	[380, "LATIAS", 3/255],
	[381, "LATIOS", 3/255],
	[382, "KYOGRE", 3/255],
	[383, "GROUDON", 3/255],
	[384, "RAYQUAZA", 45/255],
	[385, "JIRACHI", 3/255],
	[386, "DEOXYS", 3/255]
];

/*
	still need transparent images for Pokemon beyond 3rd Generation
 */