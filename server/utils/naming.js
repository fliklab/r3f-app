// Usernames
const nameListAdjective = ["Creepy", "Deadly", "Eerie", "Howling", "Icy", "Invisible", "Jumpy", "Dark", "Savage",
	"Quiet", "Grim", "Dangerous", "Cursed", "Frightful", "Bitter", "Gloomy", "Menacing", "Crackling", "Magical",
	"Lurking", "Gravestone", "Wicked", "Phantom", "Scarlet", "Haunted", "Witchy", "Spooky", "Scary", "Weird", "Nerdy"];
const nameListNoun = ["Spider", "Ghost", "Pumpkin", "Skull", "Vampire", "Goblin", "Potion", "Shadow", "Monster", "Fog",
	"Owl", "Bat", "Hunter", "Stalker", "Cat", "Candy", "Ghoul", "Zombie", "Moon", "Werewolf", "Skeleton", "Web",
	"Thief", "Eyeball", "Eyes", "Candle", "Mist", "Midnight", "Creature", "Nerd"];
const playerModelList = ["ghost", "vampire", "werewolf"];

function randomName() {
	return nameListAdjective[nameListAdjective.length * Math.random() | 0] + nameListNoun[nameListNoun.length * Math.random() | 0] + Math.floor(Math.random().toFixed(2)*100);
}
function randomPlayerModel() {
	return playerModelList[playerModelList.length * Math.random() | 0];
}


exports.randomName = randomName
exports.randomPlayerModel = randomPlayerModel