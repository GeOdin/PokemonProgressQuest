/* FR_StoryText.js
 * Javascript file that contains the scripted text of the story
 * Created on 2015-08-10
 * by GeOdin
 */

/*var playerName = "something"; // = "something"; // getPlayerName(player);*/
var playerName = "something";
//playerName = getPlayerName(player);
var rivalName;
var starterPokemon;
var starterPokemonRival;
var story;

var story = {// set to other file, and add the variables that are mentioned in here as var x; above var text ?
	// Get playerName, playerGender, rivalName and starterPokemon
	//playerName: "berry",
	// Short introduction about Pokemon
/*	playerName: "bargain", */
	
	// Introduction Professor Oak
	1: "Hello, there! <br/> Glad to meet you! ",
	2: "Welcome to the world of POKeMON! ",
	3: "My name is OAK. ",
	4: "People affectionately refer to me <br/> as the POKeMON PROFESSOR. ",
	5: "This world...",
	6: "...is inhabited far and wide by creatures called POKeMON. ",//10
	7: "For some people, POKeMON are pets. <br/> Others use them for battling. ",
	8: "As for myself... ",
	9: "I study POKeMON as a profession. ",

	// Introduction player
	10: "But first, tell me a little about <br/> yourself. ",
	11: "Let's begin with your name. <br/> What is it? ",
	12: "Right... <br/> So your name is " + this.playerName + ".", //16 // this.playerName / playerName makes no difference
	
	// Introduction rival
	13: "This is my grandson.",
	14: "He's been your rival since you both <br/> were babies. ", //18
	15: "...Erm, what was his name now? ",
	16: "That's right! I remember now! <br/> His name is " + rivalName + "! ",//20
	
	17: playerName + "!",
	18: "Your very own POKeMON legend is <br/> about to unfold! ",
	19: "A world of dreams and adventures <br/> with POKeMON awaits! Let's go! ",
	
	/////////////////
	// PALLET TOWN // //http://bulbapedia.bulbagarden.net/wiki/File:Pallet_Town_FRLG.png (not yet used, in folder PalletTown in folder images)
	///////////////// //prof oaks lab --> http://bulbapedia.bulbagarden.net/wiki/File:Professor_Oak_Lab_inside_FRLG.png (not yet used, in folder PalletTown in folder images)
	// Own House
	20: "You walk to your PC. ", 
	21: "You withdraw the POTION from your PC. ", //25
	22: "You walk down to your mom. ", 
	23: "", 
	24: "It said so on TV. ",
	25: "Oh yes. PROF. OAK, next door, was <br/> looking for you. ",
	playerName: function() {return "blast"}
};

var story2 = [// set to other file, and add the variables that are mentioned in here as var x; above var text ?
	// Get playerName, playerGender, rivalName and starterPokemon
	// Short introduction about Pokemon
	
	// Introduction Professor Oak
	"Hello, there! <br/> Glad to meet you! ",
	"Welcome to the world of POKeMON! ",
	"My name is OAK. ",
	"People affectionately refer to me <br/> as the POKeMON PROFESSOR. ",
	"This world...",
	"...is inhabited far and wide by creatures called POKeMON. ",//10
	"For some people, POKeMON are pets. <br/> Others use them for battling. ",
	"As for myself... ",
	"I study POKeMON as a profession. ",

	// Introduction player
	"But first, tell me a little about <br/> yourself. ",
	"Let's begin with your name. <br/> What is it? ",
	"Right... <br/> So your name is " + playerName + ".", //16
	
	// Introduction rival
	"This is my grandson.",
	"He's been your rival since you both <br/> were babies. ", //18
	"...Erm, what was his name now? ",
	"That's right! I remember now! <br/> His name is " + rivalName + "! ",//20
	
	playerName + "!",
	"Your very own POKeMON legend is <br/> about to unfold! ",
	"A world of dreams and adventures <br/> with POKeMON awaits! Let's go! ",
	
	/////////////////
	// PALLET TOWN // //http://bulbapedia.bulbagarden.net/wiki/File:Pallet_Town_FRLG.png (not yet used, in folder PalletTown in folder images)
	///////////////// //prof oaks lab --> http://bulbapedia.bulbagarden.net/wiki/File:Professor_Oak_Lab_inside_FRLG.png (not yet used, in folder PalletTown in folder images)
	// Own House
	"You walk to your PC. ", 
	"You withdraw the POTION from your PC. ", //25
	"You walk down to your mom. ", 
	"", 
	"It said so on TV. ",
	"Oh yes. PROF. OAK, next door, was <br/> looking for you. ",
	
	// Walk to PROF. OAK's and getting your first Pokemon
	"You walk out of your house. ", //30
	"", 
	"You walk into " + rivalName + ". ", 
	rivalName + ": What, it's only " + playerName + "? <br/> Gramps isn't around. ",
	"",
	"You try to walk out of PALLET TOWN. ",//35
	"OAK: Hey! Wait! <br/> Don't go out! ",
	"",
	"OAK: It's unsafe! <br/> Wild POK&eacute;MON live in tall grass! ",
	"You need your own POK&eacute;MON for <br/> your protection. ",
	"I know! <br/> Here, come with me! ",//40
	"You walk with PROF. OAK to his lab. ",
	rivalName + ": Gramps! <br/> I'm fed up with waiting! ",
	"OAK: " + rivalName + "? <br/> Let me think... ",
	"Oh, that's right, I told you to <br/> come! Just wait! ",
	"Here, " + playerName + ".",//45
	"There are three POK&eacute;MON here. ",
	"Haha! ",
	"The POK&eacute;MON are held inside <br/> these POK&eacute; BALLS. ",
	"When I was young, I was a serious <br/> POK&eacute;MON TRAINER. ",
	"But now, in my old age, I have <br/> only these three left. ",//50
	"You can have one. <br/> Go on, choose! ",
	rivalName + ": Hey! Gramps! No fair! <br/> What about me? ",
	"OAK: Be patient, " + rivalName + ". <br/> You can have one, too! ",
	"", 
	playerName + " received the " + starterPokemon + " <br/> from PROF. OAK! ", //55
	rivalName + ": I'll take this one, then! ",
	rivalName + " received the " + starterPokemonRival + " <br/> from PROF. OAK! ", 
	
		// Your first battle
	"OAK: If a wild POK&eacute;MON appears, <br/> your POK&eacute;MON can battle it. ",
	"With it at your side, you should be <br/> able to reach the next town. ",
	"", //60
	rivalName + ": Wait, " + playerName + "! <br/> Let's check out our POK&Eacute;MON!",
	"Come on, I'll take you on! ",
	"RIVAL " + rivalName + " <br/> would like to battle! ",
	"RIVAL " + rivalName + " sent <br/> out " + starterPokemonRival + "!", 
	"Go! " + starterPokemon + "! ", //65
	"OAK: Oh, for Pete's sake... <br/> So pushy, as always. ",
	playerName + ". ",
	"You've never had a POK&eacute;MON battle <br/> before, have you? ",
	"A POK&eacute;MON battle is when TRAINERS <br/> pit their POK&eacute;MON against each ",
	"other. ", //70
	"The TRAINER that makes the other <br/> TRAINER's POK&eacute;MON faint by lowering ",
	"their HP to '0', wins. ",
	"But rather than talking about it, <br/> you'll learn more from experience. ",
	"Try battling and see for yourself. ",
	"", //75
	"OAK: Inflicting damage on the foe <br/> is the key to any battle. ",
	"",
	"",
	rivalName + ": Okay! I'll make my <br/> POK&eacute;MON battle to toughen it up!",
	playerName + "! Gramps! <br/> Smell you later! ",
	rivalName + " walks away. ", //80
	"You walk out of the door... ",
	"... to your mom to heal your POK&eacute;MON ...",
	"... and into ROUTE 1. ",
	"",
	"", //85
	""
	
	
	/////////////
	// Route 1 // // route 1 http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_1_FRLG.png (not yet used, in folder images)
	/////////////
	
	///////////////////
	// Viridian City // // viridian city http://bulbapedia.bulbagarden.net/wiki/File:Viridian_City_FRLG.png (not yet used, in folder viridianCity in folder images)
	///////////////////
	
	/////////////////
	// Pallet Town // //http://bulbapedia.bulbagarden.net/wiki/File:Pallet_Town_FRLG.png (not yet used, in folder PalletTown in folder images)
	///////////////// //prof oaks lab --> http://bulbapedia.bulbagarden.net/wiki/File:Professor_Oak_Lab_inside_FRLG.png (not yet used, in folder PalletTown in folder images)
	
	///////////////////
	// Viridian City //
	///////////////////
	
	//////////////
	// Route 22 // //http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_22_FRLG.png (not yet used, in folder images)
	//////////////
	
	/////////////
	// Route 2 // //http://bulbapedia.bulbagarden.net/wiki/File:Kanto_Route_2_FRLG.png (not yet used, in folder images)
	///////////// //viridian forest --> http://bulbapedia.bulbagarden.net/wiki/File:Viridian_Forest_FRLG.png (not yet used, in folder images)
	
	//from bulbapedia: http://bulbapedia.bulbagarden.net/wiki/Appendix:FireRed_and_LeafGreen_walkthrough
	//// Pewter City, Pewter Gym, Route 3, Mt. Moon, Route 4
	//// Cerulean City, Cerulean Gym, Routes 24 and 25, Route 5
	//// Route 6, Vermilion City, S.S. Anne, Vermilion Gym
	//// Route 11, Route 2, Pewter City, Cerulean City, Routes 9 and 10 (north)
	//// Rock Tunnel, Route 10 (south), Lavender Town, Route 8, Route 7
	//// Celadon City, Celadon Gym, Rocket Hideout
	//// Saffron City, Silph Co., Saffron Gym
	//// Routes 16, 17, and 18, Fuchsia City, Fuchsia Gym, Safari Zone
	//// Routes 12, 13, 14, and 15, Routes 19 and 20, Seafoam Islands
	//// Cinnabar Island, Cinnabar Gym
	//// One Island, Two Island, Three Island
	//// Route 21, Power Plant, Viridian Gym
	//// Routes 22 and 23, Victory Road
	//// Indigo Plateau
];

function getTextStory(counter, player){
	var textStory;
/*	//playerName = getPlayerName(player); // works */
	story[playerName] = player.Name; // works // document.getElementById("player").innerHTML = story[playerName];
	textStory = story[counter];
	return textStory;
};