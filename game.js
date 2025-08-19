// score variable - used to track the correct choices
var playerScore;

// survival messages array - used to track messages outputted when the player survives
var survivalMessages = ["You survived!", "A rock fell from the ceiling... but it missed you", "You fell into a bottomless pit"];

// death messages array - used to track messages outputted when the player dies
var deathMessages = ["You died", "A brick fell on your head", "You ran into a bottomless pit... but you jumped over it"];

//function to break console text by 3 rows
function textBreak() {
console.log("");
console.log("");
console.log("");
}

// welcome text
console.log("WELCOME TO THE");
console.log("______ _   _ _   _ _____  _____ _____ _   _") ;
console.log("|  _  \ | | | \ | |  __ \|  ___|  _  | \ | |");
console.log("| | | | | | |  \| | |  \/| |__ | | | |  \| |");
console.log("| | | | | | | . ` | | __ |  __|| | | | . ` |");
console.log("| |/ /| |_| | |\  | |_\ \| |___\ \_/ / |\  |");
console.log("|___/  \___/\_| \_/\____/\____/ \___/\_| \_/");
textBreak();

// game logic
