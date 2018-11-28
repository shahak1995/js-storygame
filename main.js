alert("The HAUNTING!");
const name = prompt("Enter your name if you DARE!");
if (name === name) {
  alert("You are a VERY brave HUMAN " + name);
} else {
  alert("You are a WUSS!");
  exit();
}

alert("As you are taking a stroll outside in the cold rainy weather, you stumble upon a house that looks pretty dated and old with windows that are broken and branches coming out of it. As you make your way near the house, the door slowly and creepily just opens awaiting someone.");
var house = prompt("Do you choose to enter the house?");
if (house === "yes") {
  alert("You are MAD!");
} else {
  alert("You still going in even if you say no!");
}

alert("As you enter this strange looking house, you hear a voice on the other side of the house which is straight ahead!");
var voice = prompt("Do you go straight towards that direction or go right and enter the corridor?");
if (voice === "straight") {
  alert("Demon came out and killed you leaving you decapitated!");
} else {
  alert("Good Choice! you have now entered the corridor");
}

alert("As you are walking down the corridor, you see a gun laying on the floor");
var gun = prompt("Do you want to pick it up just incase?");
if (gun === "yes") {
  alert("Look at you ready to defend yourself");
} else {
  alert("Alright suit yourself, dont blame me if you die!");
}

alert("You are now at the end of the corridor, you see in the distance a weird looking creature eating the flesh of a human! As soon as you notice the creature, the creature then notices you and shrieks loudly! The creature then comes running at you!");
var creature = prompt("Do you use your WEAPON to start shooting at the creature or RUN as fast as you can back down the corridor");
if (creature === "weapon") {
  alert("You have stunned the creature giving you time to get yourself out of there");
} else {
  alert("The creature caught you as you were trying to make a run for it! You have been eaten ALIVE!");
}











