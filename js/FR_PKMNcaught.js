// variable to check whether a pokemon has been caught (to count caught pokemon for the pokedex)
// 0 = not caught
// 1 = caught
var pokemonCaught = {
	BULBASAUR: 0,
	IVYSAUR: 0,
	VENUSAUR: 0,
	CHARMANDER: 0,
	CHARMELEON: 0,
	CHARIZARD: 0,
	SQUIRTLE: 0,
	WARTORTLE: 0,
	BLASTOISE: 0,
	CATERPIE: 0,
	METAPOD: 0,
	BUTTERFREE: 0,
	WEEDLE: 0,
	KAKUNA: 0,
	BEEDRILL: 0,
	PIDGEY: 0,
	PIDGEOTTO: 0,
	PIDGEOT: 0,
	RATTATA: 0,
	RATICATE: 0,
	SPEAROW: 0,
	FEAROW: 0,
	EKANS: 0,
	ARBOK: 0,
	PIKACHU: 0,
	RAICHU: 0,
	SANDSHREW: 0,
	SANDSLASH: 0,
	NIDORAN_FEMALE: 0,
	NIDORINA: 0,
	NIDOQUEEN: 0,
	NIDORAN_MALE: 0,
	NIDORINO: 0,
	NIDOKING: 0,
	CLEFAIRY: 0,
	CLEFABLE: 0,
	VULPIX: 0,
	NINETALES: 0,
	JIGGLYPUFF: 0,
	WIGGLYTUFF: 0,
	ZUBAT: 0,
	GOLBAT: 0,
	ODDISH: 0,
	GLOOM: 0,
	VILEPLUME: 0,
	PARAS: 0,
	PARASECT: 0,
	VENONAT: 0,
	VENOMOTH: 0,
	DIGLETT: 0,
	DUGTRIO: 0,
	MEOWTH: 0,
	PERSIAN: 0,
	PSYDUCK: 0,
	GOLDUCK: 0,
	MANKEY: 0,
	PRIMEAPE: 0,
	GROWLITHE: 0,
	ARCANINE: 0,
	POLIWAG: 0,
	POLIWHIRL: 0,
	POLIWRATH: 0,
	ABRA: 0,
	KADABRA: 0,
	ALAKAZAM: 0,
	MACHOP: 0,
	MACHOKE: 0,
	MACHAMP: 0,
	BELLSPROUT: 0,
	WEEPINBELL: 0,
	VICTREEBELL: 0,
	TENTACOOL: 0,
	TENTACRUEL: 0,
	GEODUDE: 0,
	GRAVELER: 0,
	GOLEM: 0,
	PONYTA: 0,
	RAPIDASH: 0,
	SLOWPOKE: 0,
	SLOWBRO: 0,
	MAGNEMITE: 0,
	MAGNETON: 0,
	FARFETCH_D: 0,
	DODUO: 0,
	DODRIO: 0,
	SEEL: 0,
	DEWGONG: 0,
	GRIMER: 0,
	MUK: 0,
	SHELLDER: 0,
	CLOYSTER: 0,
	GASTLY: 0,
	HAUNTER: 0,
	GENGAR: 0,
	ONIX: 0,
	DROWZEE: 0,
	HYPNO: 0,
	KRABBY: 0,
	KINGLER: 0,
	VOLTORB: 0,
	ELECTRODE: 0,
	EXEGGCUTE: 0,
	EXEGGUTOR: 0,
	CUBONE: 0,
	MAROWAK: 0,
	HITMONLEE: 0,
	HITMONCHAN: 0,
	LICKITUNG: 0,
	KOFFING: 0,
	WEEZING: 0,
	RHYHORN: 0,
	RHYDON: 0,
	CHANSEY: 0,
	TANGELA: 0,
	KANGASKHAN: 0,
	HORSEA: 0,
	SEADREA: 0,
	GOLDEEN: 0,
	SEAKING: 0,
	STARYU: 0,
	STARMIE: 0,
	MR_MIME: 0,
	SCYTHER: 0,
	JYNX: 0,
	ELECTABUZZ: 0,
	MAGMAR: 0,
	PINSIR: 0,
	TAUROS: 0,
	MAGIKARP: 0,
	GYARADOS: 0,
	LAPRAS: 0,
	DITTO: 0,
	EEVEE: 0,
	VAPOREON: 0,
	JOLTEON: 0,
	FLAREON: 0,
	PORYGON: 0,
	OMANYTE: 0,
	OMASTAR: 0,
	KABUTO: 0,
	KABUTOPS: 0,
	AERODACTYL: 0,
	SNORLAX: 0,
	ARTICUNO: 0,
	ZAPDOS: 0,
	MOLTRES: 0,
	DRATINI: 0,
	DRAGONAIR: 0,
	DRAGONITE: 0,
	MEWTWO: 0,
	MEW: 0,
	total: function() {
		return this.BULBASAUR 
		+ this.IVYSAUR 
		+ this.VENUSAUR 
		+ this.CHARMANDER 
		+ this.CHARMELEON 
		+ this.CHARIZARD 
		+ this.SQUIRTLE 
		+ this.WARTORTLE 
		+ this.BLASTOISE 
		+ this.CATERPIE 
		+ this.METAPOD 
		+ this.BUTTERFREE 
		+ this.WEEDLE 
		+ this.KAKUNA 
		+ this.BEEDRILL 
		+ this.PIDGEY 
		+ this.PIDGEOTTO 
		+ this.PIDGEOT 
		+ this.RATTATA 
		+ this.RATICATE
		+ this.SPEAROW
		+ this.FEAROW
		+ this.EKANS
		+ this.ARBOK
		+ this.PIKACHU
		+ this.RAICHU
		+ this.SANDSHREW
		+ this.SANDSLASH
		+ this.NIDORAN_FEMALE
		+ this.NIDORINA
		+ this.NIDOQUEEN
		+ this.NIDORAN_MALE
		+ this.NIDORINO
		+ this.NIDOKING
		+ this.CLEFAIRY
		+ this.CLEFABLE
		+ this.VULPIX
		+ this.NINETALES
		+ this.JIGGLYPUFF
		+ this.WIGGLYTUFF
		+ this.ZUBAT
		+ this.GOLBAT
		+ this.ODDISH
		+ this.GLOOM
		+ this.VILEPLUME
		+ this.PARAS
		+ this.PARASECT
		+ this.VENONAT
		+ this.VENOMOTH
		+ this.DIGLETT
		+ this.DUGTRIO
		+ this.MEOWTH
		+ this.PERSIAN
		+ this.PSYDUCK
		+ this.GOLDUCK
		+ this.MANKEY
		+ this.PRIMEAPE
		+ this.GROWLITHE
		+ this.ARCANINE
		+ this.POLIWAG
		+ this.POLIWHIRL
		+ this.POLIWRATH
		+ this.ABRA
		+ this.KADABRA
		+ this.ALAKAZAM
		+ this.MACHOP
		+ this.MACHOKE
		+ this.MACHAMP
		+ this.BELLSPROUT
		+ this.WEEPINBELL
		+ this.VICTREEBELL
		+ this.TENTACOOL
		+ this.TENTACRUEL
		+ this.GEODUDE
		+ this.GRAVELER
		+ this.GOLEM
		+ this.PONYTA
		+ this.RAPIDASH
		+ this.SLOWPOKE
		+ this.SLOWBRO
		+ this.MAGNEMITE
		+ this.MAGNETON
		+ this.FARFETCH_D
		+ this.DODUO
		+ this.DODRIO
		+ this.SEEL
		+ this.DEWGONG
		+ this.GRIMER
		+ this.MUK
		+ this.SHELLDER
		+ this.CLOYSTER
		+ this.GASTLY
		+ this.HAUNTER
		+ this.GENGAR
		+ this.ONIX
		+ this.DROWZEE
		+ this.HYPNO
		+ this.KRABBY
		+ this.KINGLER
		+ this.VOLTORB
		+ this.ELECTRODE
		+ this.EXEGGCUTE
		+ this.EXEGGUTOR
		+ this.CUBONE
		+ this.MAROWAK
		+ this.HITMONLEE
		+ this.HITMONCHAN
		+ this.LICKITUNG
		+ this.KOFFING
		+ this.WEEZING
		+ this.RHYHORN
		+ this.RHYDON
		+ this.CHANSEY
		+ this.TANGELA
		+ this.KANGASKHAN
		+ this.HORSEA
		+ this.SEADREA
		+ this.GOLDEEN
		+ this.SEAKING
		+ this.STARYU
		+ this.STARMIE
		+ this.MR_MIME
		+ this.SCYTHER
		+ this.JYNX
		+ this.ELECTABUZZ
		+ this.MAGMAR
		+ this.PINSIR
		+ this.TAUROS
		+ this.MAGIKARP
		+ this.GYARADOS
		+ this.LAPRAS
		+ this.DITTO
		+ this.EEVEE
		+ this.VAPOREON
		+ this.JOLTEON
		+ this.FLAREON
		+ this.PORYGON
		+ this.OMANYTE
		+ this.OMASTAR
		+ this.KABUTO
		+ this.KABUTOPS
		+ this.AERODACTYL
		+ this.SNORLAX
		+ this.ARTICUNO
		+ this.ZAPDOS
		+ this.MOLTRES
		+ this.DRATINI
		+ this.DRAGONAIR
		+ this.DRAGONITE
		+ this.MEWTWO
		+ this.MEW;
	}
};