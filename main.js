// title of the Game
alert("The HAUNTING!");

// user entering their name
const name = prompt("Enter your name if you DARE!");
if (name === "") {
  alert("You are a WUSS!");
  exit();
} else {
  alert("You are a VERY brave HUMAN " + name);
}

// intro of the game

alert("As you are taking a stroll outside in the cold rainy weather, you stumble upon a house that looks pretty dated and old with windows that are broken and branches coming out of it. As you make your way near the house, the door slowly and creepily just opens awaiting someone.");
var house = prompt("Do you choose to enter the house? (yes or no)");
if (house === "yes") {
  alert("You are MAD!");
} else {
  alert("You are not worthy to enter peasant!");
  exit();
}

alert("As you enter this strange looking house, you hear a voice on the other side of the house which is straight ahead!");
var voice = prompt("Do you go STRAIGHT towards that direction or go RIGHT and enter the corridor? (straight or right)");
if (voice === "straight") {
  alert("Demon came out and killed you leaving you decapitated!");
  exit();
} else {
  alert("Good Choice! you have now entered the corridor");
}

alert("As you are walking down the corridor, you see a gun laying on the floor");
var gun = prompt("Do you want to pick it up just incase? (yes or no)");
if (gun === "yes") {
  alert("Look at you ready to defend yourself");
} else {
  alert("Alright suit yourself, dont blame me if you die!");
}

alert("You are now at the end of the corridor, you see in the distance a weird looking creature eating the flesh of a human! As soon as you notice the creature, the creature then notices you and shrieks loudly! The creature then comes running at you!");
var creature = prompt("Do you use your WEAPON to start shooting at the creature or RUN as fast as you can back down the corridor (weapon or run)");
if (creature === "weapon") {
  alert("You have stunned the creature giving you time to get yourself out of there");
} else {
  alert("The creature caught you as you were trying to make a run for it! You have been eaten ALIVE!");
  exit();
}

alert("As you are running away from the creature you see a door right opposite you, and you look right and you see another door");
var door = prompt("Which door do you want to go through? (first door or second door)");
if (door === "first door") {
  alert("Another CREATURE was behind the door and ate you for DINNER TIME!");
  exit();
} else {
  alert("Yes that was the balcony door! You have escaped the house! " + name + " is FREEEEEE");
  exit();
}














