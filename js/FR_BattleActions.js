// Function to switch pokemon if necessary
// for this one, it’s necessary to have the pokemon as objects of trainer
// if trainer only has 1 pokemon, either make the other 5 with hp 0 / != exist

function switchPokemon(trainer) {
	if (trainer.pokemon1.hp <= 0) {
		if (trainer.pokemon2.hp > 0) {
			var faintedPokemon = trainer.pokemon1;
			trainer.pokemon1 = trainer.pokemon2;
			trainer.pokemon2 = trainer.pokemon3;
			trainer.pokemon3 = trainer.pokemon4;
			trainer.pokemon4 = trainer.pokemon5;
			trainer.pokemon5 = trainer.pokemon6;
			trainer.pokemon6 = faintedPokemon;
		};
	};
	// if (trainer.pokemon1.hp > 0) {} //if-statement for switching between pokemon to get a type-advantage
};
