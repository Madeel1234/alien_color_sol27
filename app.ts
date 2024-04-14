#! /usr/bin/env node

// Task# 27
// Alien color 3: Turn your if- else chain from exercise into an if - else chain. 
// If the alien is green, print a message that the player earned 5 points.
// If the alien is red, print a message that the player earned 10 points.
// If the alien is yellow,print a message that the player earned 15 points.
// write three versions of this program, making sure each message is printed for the appropriate color alien.


let alien_color : string = "green";
if (alien_color == "green") {
    console.log("the player earned 5 point")
} else if (alien_color == "red") {

console.log("the player earned 10 points")
}
else {
    console.log("the player earned 15 points.");
}