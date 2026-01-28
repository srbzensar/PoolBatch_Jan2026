// const player = new Object();
const player = {}

player.id = 10;
player.name = "Sachin";
player.city = "Mumbai";

console.log("Player:", player);

// -------------------------

const player1 = {id: 11, name: "Virat", city: "Delhi"};
const player2 = {id: 10, country: "India", team: "RCB", };

console.log("Player 1:", player1);
console.log("Player 2:", player2);

// const players = {player1, player2};
// console.log("Players Object:", players);

const players = {...player1, ...player2}; // spread operator
console.log("Players Object:", players);

console.log("keys: ", Object.keys(players));
console.log("values: ", Object.values(players));