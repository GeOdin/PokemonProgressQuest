// stat calculator 31 IV and +Nature --> http://pycosites.com/pkmn/stat.html
// moves for FireRed --> http://serebii.net/pokedex-rs/
// This has the functions
//// createPokemon(pokemonNumber, pokemonName, pokemonLevel, pokemonType1, pokemonType2, pokemonEvolveLevel, pokemonEvolvePokemon, currentHP, maxHP, attack, defense, spattack, spdefense, speed, pokemonMove1, pokemonMove2, pokemonMove3, pokemonMove4);
//// createPokemonMoves(pokemonObject);
//// setPokemonMove(pokemonMoveName, pokemonMoveType, pokemonMoveCategory, pokemonMovePP, pokemonMovePower, pokemonMoveAccuracy, pokemonMoveEffect)

//Pokemon background information per pokemon
var pokemon = [
	//level 1 and accompanying stats and moves by default, or level of evolvement
	["pokemonNumber", "pokemonName", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"], //0
	["001", "BULBASAUR", 1, "GRASS", "POISON", 16, "IVYSAUR", 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""], //1
	["002", "IVYSAUR", 16, "GRASS", "POISON", 32, "VENUSAUR", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", ""],
	["003", "VENUSAUR", 32, "GRASS", "POISON", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", ""],
	["004", "CHARMANDER", 1, "FIRE", "", 16, "CHARMELEON", 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "", ""],
	["005", "CHARMELEON", 16, "FIRE", "", 36, "CHARIZARD", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", ""],
	["006", "CHARIZARD", 36, "FIRE", "FLYING", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", ""],
	["007", "SQUIRTLE", 1, "WATER", "", 16, "WARTORTLE", 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["008", "WARTORTLE", 16, "WATER", "", 36, "BLASTOISE", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", ""],
	["009", "BLASTOISE", 36, "WATER", "", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "", "", "", ""],
	["010", "CATERPIE", 1, "BUG", "", 7, "METAPOD", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "String Shot", "", ""],
	["011", "METAPOD", 7, "BUG", "", 10, "BUTTERFREE", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "String Shot", "Harden", ""],
	["012", "BUTTERFREE", 10, "BUG", "FLYING", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "String Shot", "Harden", "Confusion"],
	["013", "WEEDLE", 1, "BUG", "POISON", 7, "KAKUNA", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Poison Sting", "String Shot", "", ""],
	["014", "KAKUNA", 7, "BUG", "POISON", 10, "BEEDRILL", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Poison Sting", "String Shot", "Harden", ""],
	["015", "BEEDRILL", 10, "BUG", "POISON", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Poison Sting", "String Shot", "Harden", "Fury Attack"],
	["016", "PIDGEY", 1, "NORMAL", "FLYING", 18, "PIDGEOTTO", 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["017", "PIDGEOTTO", 18, "NORMAL", "FLYING", 36, "PIDGEOT", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "Sand-attack", "Gust", "Quick Attack"],
	["018", "PIDGEOT", 36, "NORMAL", "FLYING", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Wing Attack", "Quick Attack", "Tackle", "Gust"],
	["019", "RATTATA", 1, "NORMAL", "", 20, "RATICATE", 11, 6, 6, 6, 5, 6, "Tackle", "Tail Whip", "", ""],
	["020", "RATICATE", 20, "NORMAL", "", 0, "", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed", "Tackle", "Tail Whip", "Quick Attack", "Hyper Fang"],
	["021", "SPEAROW", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["022", "FEAROW", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["023", "EKANS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["024", "ARBOK", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["025", "PIKACHU", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["026", "RAICHU", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["027", "SANDSHREW", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["028", "SANDSLASH", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["029", "NIDORAN_FEMALE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["030", "NIDORINA", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["031", "NIDOQUEEN", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["032", "NIDORAN_MALE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["033", "NIDORINO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["034", "NIDOKING", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["035", "CLEFAIRY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["036", "CLEFABLE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["037", "VULPIX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["038", "NINETALES", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["039", "JIGGLYPUFF", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["040", "WIGGLYTUFF", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["041", "ZUBAT", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["042", "GOLBAT", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["043", "ODDISH", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["044", "GLOOM", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["045", "VILEPLUME", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["046", "PARAS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["047", "PARASECT", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["048", "VENONAT", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["049", "VENOMOTH", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["050", "DIGLETT", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["051", "DUGTRIO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["052", "MEOWTH", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["053", "PERSIAN", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["054", "PSYDUCK", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["055", "GOLDUCK", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["056", "MANKEY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["057", "PRIMEAPE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["058", "GROWLITHE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["059", "ARCANINE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["060", "POLIWAG", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["061", "POLIWHIRL", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["062", "POLIWRATH", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["063", "ABRA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["064", "KADABRA", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["065", "ALAKAZAM", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["066", "MACHOP", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["067", "MACHOKE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["068", "MACHAMP", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["069", "BELLSPROUT", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["070", "WEEPINBELL", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["071", "VICTREEBELL", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["072", "TENTACOOL", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["073", "TENTACRUEL", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["074", "GEODUDE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["075", "GRAVELER", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["076", "GOLEM", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["077", "PONYTA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["078", "RAPIDASH", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["079", "SLOWPOKE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["080", "SLOWBRO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["081", "MAGNEMITE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["082", "MAGNETON", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["083", "FARFETCH_D", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["084", "DODUO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["085", "DODRIO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["086", "SEEL", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["087", "DEWGONG", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["088", "GRIMER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["089", "MUK", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["090", "SHELLDER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["091", "CLOYSTER", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["092", "GASTLY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["093", "HAUNTER", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["094", "GENGAR", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["095", "ONIX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["096", "DROWZEE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["097", "HYPNO", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["098", "KRABBY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["099", "KINGLER", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["100", "VOLTORB", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["101", "ELECTRODE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["102", "EXEGGCUTE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["103", "EXEGGUTOR", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["104", "CUBONE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["105", "MAROWAK", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["106", "HITMONLEE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["107", "HITMONCHAN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["108", "LICKITUNG", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["109", "KOFFING", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["110", "WEEZING", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["111", "RHYHORN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["112", "RHYDON", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["113", "CHANSEY", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["114", "TANGELA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["115", "KANGASKHAN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["116", "HORSEA", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["117", "SEADREA", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["118", "GOLDEEN", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["119", "SEAKING", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["120", "STARYU", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["121", "STARMIE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["122", "MR_MIME", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["123", "SCYTHER", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["124", "JYNX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["125", "ELECTABUZZ", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["126", "MAGMAR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["127", "PINSIR", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["128", "TAUROS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["129", "MAGIKARP", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["130", "GYARADOS", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["131", "LAPRAS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["132", "DITTO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["133", "EEVEE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["134", "VAPOREON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["135", "JOLTEON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["136", "FLAREON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["137", "PORYGON", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["138", "OMANYTE", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["139", "OMASTAR", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["140", "KABUTO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["141", "KABUTOPS", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["142", "AERODACTYL", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["143", "SNORLAX", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["144", "ARTICUNO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["145", "ZAPDOS", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["146", "MOLTRES", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["147", "DRATINI", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["148", "DRAGONAIR", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["149", "DRAGONITE", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["150", "MEWTWO", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["151", "MEW", 1, "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolvePokemon", "hp", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"]
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
	["pokemonNumber", "pokemonName", "pokemonLevel", "pokemonType1", "pokemonType2", "pokemonEvolveLevel", "pokemonEvolveName", "currentHP", "maxHP", "attack", "defense", "spattack", "spdefense", "speed", "pokemonMove1", "pokemonMove2", "pokemonMove3", "pokemonMove4"],
	["001", "BULBASAUR", 1, "GRASS", "POISON", 16, "IVYSAUR", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["001", "BULBASAUR", 2, "GRASS", "POISON", 16, "IVYSAUR", 14, 14, 7, 7, 8, 8, 7, "Tackle", "", "", ""],
	["001", "BULBASAUR", 3, "GRASS", "POISON", 16, "IVYSAUR", 16, 16, 8, 8, 9, 9, 8, "Tackle", "", "", ""],
	["001", "BULBASAUR", 4, "GRASS", "POISON", 16, "IVYSAUR", 18, 18, 11, 11, 12, 12, 9, "Tackle", "Growl", "", ""],
	["001", "BULBASAUR", 5, "GRASS", "POISON", 16, "IVYSAUR", 21, 21, 12, 12, 14, 14, 12, "Tackle", "Growl", "", ""],
	["001", "BULBASAUR", 6, "GRASS", "POISON", 16, "IVYSAUR", 23, 23, 13, 13, 15, 15, 13, "Tackle", "Growl", "", ""],
	["001", "BULBASAUR", 7, "GRASS", "POISON", 16, "IVYSAUR", 25, 25, 15, 15, 17, 17, 14, "Tackle", "Growl", "Leech Seed", ""],
	["001", "BULBASAUR", 8, "GRASS", "POISON", 16, "IVYSAUR", 27, 27, 16, 16, 18, 18, 15, "Tackle", "Growl", "Leech Seed", ""],
	["001", "BULBASAUR", 9, "GRASS", "POISON", 16, "IVYSAUR", 29, 29, 17, 17, 20, 20, 16, "Tackle", "Growl", "Leech Seed", ""],
	["001", "BULBASAUR", 10, "GRASS", "POISON", 16, "IVYSAUR", 32, 32, 18, 18, 23, 23, 18, "Tackle", "Growl", "Leech Seed", "Vine Whip"],
	["001", "BULBASAUR", 11, "GRASS", "POISON", 16, "IVYSAUR", 34, 34, 20, 20, 24, 24, 19, "Tackle", "Growl", "Leech Seed", "Vine Whip"],
	["001", "BULBASAUR", 12, "GRASS", "POISON", 16, "IVYSAUR", 36, 36, 22, 22, 26, 26, 20, "Tackle", "Growl", "Leech Seed", "Vine Whip"],
	["001", "BULBASAUR", 13, "GRASS", "POISON", 16, "IVYSAUR", 38, 38, 23, 23, 27, 27, 22, "Tackle", "Growl", "Leech Seed", "Vine Whip"],
	["001", "BULBASAUR", 14, "GRASS", "POISON", 16, "IVYSAUR", 40, 40, 25, 25, 29, 29, 23, "Tackle", "Growl", "Leech Seed", "Vine Whip"],
	["001", "BULBASAUR", 15, "GRASS", "POISON", 16, "IVYSAUR", 43, 43, 26, 26, 31, 31, 25, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip"],
	["001", "BULBASAUR", 16, "GRASS", "POISON", 16, "IVYSAUR", 45, 45, 27, 27, 33, 33, 26, "Tackle", "Sleep Powder", "Leech Seed", "Vine Whip"],
	["004", "CHARMANDER", 1, "FIRE", "", 16, "CHARMELEON", 12, 12, 6, 6, 6, 6, 6, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 2, "FIRE", "", 16, "CHARMELEON", 14, 14, 7, 7, 8, 7, 8, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 3, "FIRE", "", 16, "CHARMELEON", 16, 16, 9, 8, 9, 8, 9, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 4, "FIRE", "", 16, "CHARMELEON", 18, 18, 11, 9, 12, 11, 12, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 5, "FIRE", "", 16, "CHARMELEON", 20, 20, 12, 11, 13, 12, 14, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 6, "FIRE", "", 16, "CHARMELEON", 22, 22, 14, 13, 15, 13, 15, "Scratch", "Growl", "", ""],
	["004", "CHARMANDER", 7, "FIRE", "", 16, "CHARMELEON", 24, 24, 15, 14, 16, 15, 17, "Scratch", "Growl", "Ember", ""],
	["004", "CHARMANDER", 8, "FIRE", "", 16, "CHARMELEON", 26, 26, 16, 15, 18, 16, 18, "Scratch", "Growl", "Ember", ""],
	["004", "CHARMANDER", 9, "FIRE", "", 16, "CHARMELEON", 28, 28, 18, 16, 19, 17, 20, "Scratch", "Growl", "Ember", ""],
	["004", "CHARMANDER", 10, "FIRE", "", 16, "CHARMELEON", 30, 30, 19, 17, 22, 19, 23, "Scratch", "Growl", "Ember", ""],
	["004", "CHARMANDER", 11, "FIRE", "", 16, "CHARMELEON", 32, 32, 20, 18, 23, 20, 24, "Scratch", "Growl", "Ember", ""],
	["004", "CHARMANDER", 12, "FIRE", "", 16, "CHARMELEON", 35, 35, 23, 20, 25, 22, 26, "Scratch", "Growl", "Ember", ""],
	["004", "CHARMANDER", 13, "FIRE", "", 16, "CHARMELEON", 37, 37, 24, 22, 26, 24, 27, "Scratch", "Growl", "Ember", "Smokescreen"],
	["004", "CHARMANDER", 14, "FIRE", "", 16, "CHARMELEON", 39, 39, 25, 23, 28, 25, 29, "Scratch", "Growl", "Ember", "Smokescreen"],
	["004", "CHARMANDER", 15, "FIRE", "", 16, "CHARMELEON", 41, 41, 27, 24, 29, 26, 31, "Scratch", "Growl", "Ember", "Smokescreen"],
	["004", "CHARMANDER", 16, "FIRE", "", 16, "CHARMELEON", 43, 43, 28, 25, 31, 27, 33, "Scratch", "Growl", "Ember", "Smokescreen"],
	["007", "SQUIRTLE", 1, "WATER", "", 16, "WARTORTLE", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["007", "SQUIRTLE", 2, "WATER", "", 16, "WARTORTLE", 14, 14, 7, 8, 7, 8, 7, "Tackle", "", "", ""],
	["007", "SQUIRTLE", 3, "WATER", "", 16, "WARTORTLE", 16, 16, 8, 9, 8, 9, 8, "Tackle", "", "", ""],
	["007", "SQUIRTLE", 4, "WATER", "", 16, "WARTORTLE", 18, 18, 11, 12, 11, 12, 9, "Tackle", "Tail Whip", "", ""],
	["007", "SQUIRTLE", 5, "WATER", "", 16, "WARTORTLE", 20, 20, 12, 14, 12, 13, 11, "Tackle", "Tail Whip", "", ""],
	["007", "SQUIRTLE", 6, "WATER", "", 16, "WARTORTLE", 23, 23, 13, 15, 13, 15, 13, "Tackle", "Tail Whip", "", ""],
	["007", "SQUIRTLE", 7, "WATER", "", 16, "WARTORTLE", 25, 25, 14, 17, 15, 17, 14, "Tackle", "Tail Whip", "Bubble", ""],
	["007", "SQUIRTLE", 8, "WATER", "", 16, "WARTORTLE", 27, 27, 16, 18, 16, 18, 15, "Tackle", "Tail Whip", "Bubble", ""],
	["007", "SQUIRTLE", 9, "WATER", "", 16, "WARTORTLE", 29, 29, 17, 20, 17, 20, 16, "Tackle", "Tail Whip", "Bubble", ""],
	["007", "SQUIRTLE", 10, "WATER", "", 16, "WARTORTLE", 31, 31, 18, 23, 19, 22, 17, "Tackle", "Tail Whip", "Bubble", "Withdraw"],
	["007", "SQUIRTLE", 11, "WATER", "", 16, "WARTORTLE", 34, 34, 19, 24, 20, 24, 18, "Tackle", "Tail Whip", "Bubble", "Withdraw"],
	["007", "SQUIRTLE", 12, "WATER", "", 16, "WARTORTLE", 36, 36, 22, 26, 22, 26, 20, "Tackle", "Tail Whip", "Bubble", "Withdraw"],
	["007", "SQUIRTLE", 13, "WATER", "", 16, "WARTORTLE", 38, 38, 23, 27, 24, 27, 22, "Tackle", "Tail Whip", "Bubble", "Water Gun"],
	["007", "SQUIRTLE", 14, "WATER", "", 16, "WARTORTLE", 40, 40, 24, 29, 25, 29, 23, "Tackle", "Tail Whip", "Bubble", "Water Gun"],
	["007", "SQUIRTLE", 15, "WATER", "", 16, "WARTORTLE", 42, 42, 26, 31, 26, 30, 24, "Tackle", "Tail Whip", "Bubble", "Water Gun"],
	["007", "SQUIRTLE", 16, "WATER", "", 16, "WARTORTLE", 45, 45, 27, 33, 27, 33, 25, "Tackle", "Tail Whip", "Bubble", "Water Gun"],
	["016", "PIDGEY", 1, "NORMAL", "FLYING", 18, "PIDGEOTTO", 12, 12, 6, 6, 6, 6, 6, "Tackle", "", "", ""],
	["016", "PIDGEY", 2, "NORMAL", "FLYING", 18, "PIDGEOTTO", 14, 14, 7, 7, 7, 7, 7, "Tackle", "", "", ""],
	["016", "PIDGEY", 3, "NORMAL", "FLYING", 18, "PIDGEOTTO", 16, 16, 8, 8, 8, 8, 9, "Tackle", "", "", ""],
	["016", "PIDGEY", 4, "NORMAL", "FLYING", 18, "PIDGEOTTO", 18, 18, 9, 9, 9, 9, 11, "Tackle", "", "", ""],
	["016", "PIDGEY", 5, "NORMAL", "FLYING", 18, "PIDGEOTTO", 20, 20, 12, 11, 11, 11, 13, "Tackle", "Sand-attack", "", ""],
	["019", "RATTATA", 1, "NORMAL", "", 20, "RATICATE", 11, 11, 6, 6, 6, 5, 6, "Tackle", "Tail Whip", "", ""],
	["019", "RATTATA", 2, "NORMAL", "", 20, "RATICATE", 13, 13, 7, 7, 6, 7, 8, "Tackle", "Tail Whip", "", ""],
	["019", "RATTATA", 3, "NORMAL", "", 20, "RATICATE", 15, 15, 9, 8, 7, 8, 11, "Tackle", "Tail Whip", "", ""],
	["019", "RATTATA", 4, "NORMAL", "", 20, "RATICATE", 17, 17, 11, 9, 8, 9, 13, "Tackle", "Tail Whip", "", ""],
	["019", "RATTATA", 5, "NORMAL", "", 20, "RATICATE", 19, 19, 13, 11, 9, 11, 14, "Tackle", "Tail Whip", "", ""],
	["021", "SPEAROW", 1, "NORMAL", "FLYING", 20, "FEAROW", 12, 12, 6, 5, 5, 5, 6, "Peck", "Growl", "", ""],
	["021", "SPEAROW", 2, "NORMAL", "FLYING", 20, "FEAROW", 14, 14, 8, 6, 6, 6, 8, "Peck", "Growl", "", ""],
	["021", "SPEAROW", 3, "NORMAL", "FLYING", 20, "FEAROW", 16, 16, 9, 7, 7, 7, 11, "Peck", "Growl", "", ""],
	["021", "SPEAROW", 4, "NORMAL", "FLYING", 20, "FEAROW", 18, 18, 12, 8, 8, 8, 12, "Peck", "Growl", "", ""],
	["021", "SPEAROW", 5, "NORMAL", "FLYING", 20, "FEAROW", 20, 20, 13, 9, 9, 9, 14, "Peck", "Growl", "", ""],
	["056", "MANKEY", 1, "FIGHT", "", 28, "PRIMEAPE", 12, 12, 6, 6, 6, 6, 6, "Scratch", "Leer", "", ""],
	["056", "MANKEY", 2, "FIGHT", "", 28, "PRIMEAPE", 14, 14, 8, 7, 7, 7, 8, "Scratch", "Leer", "", ""],
	["056", "MANKEY", 3, "FIGHT", "", 28, "PRIMEAPE", 16, 16, 11, 8, 8, 8, 11, "Scratch", "Leer", "", ""],
	["056", "MANKEY", 4, "FIGHT", "", 28, "PRIMEAPE", 18, 18, 13, 9, 9, 9, 12, "Scratch", "Leer", "", ""],
	["056", "MANKEY", 5, "FIGHT", "", 28, "PRIMEAPE", 20, 20, 15, 11, 11, 12, 14, "Scratch", "Leer", "", ""]
];

// Pokemon moves background information
var pokemonMoves = [
	//add "Effect" for moves with type "Status" ? add PP-max for when PP UP items are introduced? //also add description? //perhaps make accuracy a float instead of integer?
	["Name", "Type", "category", "pp", "power", "accuracy", "effect"], //http://bulbapedia.bulbagarden.net/wiki/Confusion_(move)
	["Bubble", "WATER", "Special", 30, 40, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Bubble_(move)
	["Confusion", "PSYCHIC", "Special", 25, 50, 100, ""], //http://bulbapedia.bulbagarden.net/wiki/Growl_%28move%29
	// Add effect
	["Ember", "FIRE", "Special", 25, 40, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Ember_(move)
	// Add fact for Fury attack that the attack can hit 2-5 times! - http://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(move)
	["Fury Attack", "NORMAL", "Physical", 20, 15, 85, ""], //http://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(move)
	// Add effect of attack -= 1 until end of battle
	["Growl", "NORMAL", "Status", 40, 0, 100, ""], //http://bulbapedia.bulbagarden.net/wiki/Growl_%28move%29
	["Gust", "FLYING", "Special", 35, 40, 100, ""],  // http://bulbapedia.bulbagarden.net/wiki/Gust_(move)
	// Add effect
	["Harden", "NORMAL", "Status", 30, 0, 100, ""], //accuracy is actually --- instead of 100% //http://bulbapedia.bulbagarden.net/wiki/Harden_(move)
	["Hyper Fang", "NORMAL", "Physical", 15, 80, 90, ""], // http://bulbapedia.bulbagarden.net/wiki/Hyper_Fang_(move)
	// Add effect
	["Leech Seed", "GRASS", "Status", 10, 0, 90, ""], // http://bulbapedia.bulbagarden.net/wiki/Leech_Seed_(move)
	// Add effect
	["Leer", "NORMAL", "Status", 30, 0, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Leer_(move)
	["Peck", "FLYING", "Physical", 35, 35, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Peck_(move)
	// Add effect
	["Poisonpowder", "POISON", "Status", 35, 0, 75, ""], // http://bulbapedia.bulbagarden.net/wiki/Poison_Powder_(move)
	// Add effect
	["Poison Sting", "POISON", "Physical", 35, 15, 100, ""], //http://bulbapedia.bulbagarden.net/wiki/Poison_Sting_(move)
	// priority +1 for Quick Attack
	["Quick Attack", "NORMAL", "Physical", 30, 40, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Quick_Attack_(move)
	// Add effect
	["Sand-attack", "GROUND", "Status", 15, 0, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Sand_Attack_(move)
	["Scratch", "NORMAL", "Physical", 35, 40, 100, ""], //http://bulbapedia.bulbagarden.net/wiki/Scratch_%28move%29
	// Add effect
	["Sleep Powder", "GRASS", "Status", 15, 0, 75, ""], // http://bulbapedia.bulbagarden.net/wiki/Sleep_Powder_(move)
	// Add effect
	["Smokescreen", "NORMAL", "Status", 20, 0, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Smokescreen_(move)
	// Add effect
	["String Shot", "BUG", "Status", 40, 0, 95, ""], //http://bulbapedia.bulbagarden.net/wiki/String_Shot_(move)
	["Tackle", "NORMAL", "Physical", 35, 50, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Tackle_(move)
	// Add effect
	["Tail Whip", "NORMAL", "Status", 30, 0, 100, ""], //http://bulbapedia.bulbagarden.net/wiki/Tail_Whip_%28move%29
	// Add effect
	["Vine Whip", "GRASS", "Physical", 25, 45, 100, ""],
	["Water Gun", "WATER", "Special", 25, 40, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Water_Gun_(move)
	["Wing Attack", "FLYING", "Physical", 35, 60, 100, ""], // http://bulbapedia.bulbagarden.net/wiki/Wing_Attack_(move)
	// Add effect
	["Withdraw", "WATER", "Status", 40, 0, 100, ""], // accuracy is actually --- instead of 100% // http://bulbapedia.bulbagarden.net/wiki/Withdraw_(move)
	["", "", "", 0, 0, 0, ""] // for when pokemon don't have all 4 moves yet
];

//Create pokemon function
// also add current exp for next level? (and exp needed for next level in pokemonStats?
// have current hp and maxHP as a stat of the pokemon; hp == maxHP at the start of the creation
function createPokemon(pokemonNumber, pokemonName, pokemonLevel, pokemonType1, pokemonType2, pokemonEvolveLevel, pokemonEvolvePokemon, currentHP, maxHP, attack, defense, spattack, spdefense, speed, pokemonMove1, pokemonMove2, pokemonMove3, pokemonMove4) {
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
				pokemonMoves[i][6]
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
				pokemonMoves[i][6]
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
				pokemonMoves[i][6]
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
				pokemonMoves[i][6]
			); 
			pokemonObject.move4 = moveFour;
		};
	};
/*	if (moveOneName == "") {
		moveOne = new setPokemonMove(
			"", 
			"", 
			"", 
			0, 
			0, 
			100, 
			""
		);
	};
	if (moveTwoName == "") {
		moveTwo = new setPokemonMove(
			"", 
			"", 
			"", 
			0, 
			0, 
			100, 
			""
		);
	};
	if (moveThreeName == "") {
		moveThree = new setPokemonMove(
			"", 
			"", 
			"", 
			0, 
			0, 
			100, 
			""
		);
	};
	if (moveFourName == "") {
		moveFour = new setPokemonMove(
			"", 
			"", 
			"", 
			0, 
			0, 
			100, 
			""
		);
	};*/
};