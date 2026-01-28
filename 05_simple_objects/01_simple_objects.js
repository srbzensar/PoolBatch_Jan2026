const player = {
    "name": "Sachin",
    "full name": "Sachin Tendulkar",
    age: 47,
    country: "India",
    email: "sachin@cricket.com",
    isRetired: true,
    achievements: ["Most runs in ODIs", "Most centuries in Tests"],
    contacts: {"mobile": "9876543210", "resi": "0123456789", "office": "0987654321" }
}

console.log("Player:", player);
console.log("Player Name:", player.name);
console.log("Player Full Name:", player["full name"]);
console.log("Player Age:", player["age"]);
console.log("Player Achievements:", player.achievements);
console.log("Player Contact Mobile:", player.contacts.mobile);

player.age = 48;
console.log("Player Age after Birthday:", player.age);

player.city = "Mumbai";
console.log("Player City:", player.city);
console.log("Player Object after adding city:", player);

player.intro = function() {
    console.log("Hi, I'm " + this["full name"] + " from " + this.country + ".");
}

player.intro();
