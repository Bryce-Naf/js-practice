console.log("Hello World!");
let jersey = 88;
let hasWonChampionship = false;
let stadiumLocation = null;
let nextGame;
console.log(jersey, hasWonChampionship, stadiumLocation, nextGame);

let team = "Bears";
const sport = "Football";
let player = {
    name: "Caleb Williams",
    position: "QB",
    pointsPerGame: 14
};
player.gamesPlayed = 6;

console.log(player.name, player.position, player.pointsPerGame, player.gamesPlayed);

let favFoods = ["burger", "mac n cheese", "pizza", "turkey & cheese sandwich"];
console.log(favFoods);
favFoods.push("dots");
favFoods[3] = "pb&j";
favFoods.pop();
console.log(favFoods.length);
console.log(favFoods);

function rateSong(songName, rating) {
    if (rating < 3) {
        console.log("not a good one.");
    };
    if (rating === 3) {
        console.log("a mid one.");
    };
    if (rating > 3) {
        console.log("a good one.");
    };
};

let mySongs = ["Hexagons", "The Angel", "Ballistic Funk"];
for (let i = 0; i < mySongs.length; i++) {
    console.log(mySongs[i] + " is a jam!");
};

rateSong("Hexagons", 5)
rateSong("Dance Monkey", 1)