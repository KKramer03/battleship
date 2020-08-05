var min = 2
var max = 5
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var location2 = getRandom(min, max);
var location1 = location2 - 1;
var location3 = location2 + 1;
var hit1 = 0;
var hit2 = 0;
var hit3 = 0;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var answer;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 1-6):")
    if (guess < 1 || guess > 6) {
        alert("Please enter a valid cell number!");
    }
    else {
        guesses = guesses + 1;
    }

    if (guess == location1 && hit1 == 0) {
        alert("HIT!");
        hits = hits + 1;
        hit1 += 1
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
        }
    }
    else if (guess == location1 && hit1 > 0) {
        alert("You've already hit here!")
    }
    else if (guess == location2 && hit2 == 0) {
        alert("HIT!");
        hits = hits + 1;
        hit2 += 1
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
        }
    }
    else if (guess == location2 && hit2 > 0) {
        alert("You've already hit here!")
    }
    else if (guess == location3 && hit3 == 0) {
        alert("HIT!");
        hits = hits + 1;
        hit3 += 1
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
        }
    }
    else if (guess == location3 && hit3 > 0) {
        alert("You've already hit here!")
    }
    else {
        alert("MISS");
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses);
alert(stats);

if (isSunk == true) {
    answer = prompt("Want to play again?")
    if (answer == "yes" || answer == "Yes" || answer == "y" || answer == "Y") {
        window.location.reload(false);
    }
    else {
        alert("Game Over!");
    }
}

