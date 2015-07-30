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
	total: function() {
		return this.BULBASAUR 
		+ this.IVYSAUR 
		+ this.VENUSAUR 
		+ this.CHARMANDER 
		+ this.CHARMELEON 
		+ this.CHARIZARD 
		+ this.SQUIRTLE 
		+ this.WARTORTLE 
		+ this.BLASTOISE;
	}
}