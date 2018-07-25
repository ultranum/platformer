// JUMPING PLAYER
"use strict";

// Declare Global Variables
let player1, player2;
let platforms;
let level = 0;
let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	initGlobals()
}
// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	// Move Horizontally on Key is Down
	moveObjects()


	// DRAW
	background(GREEN);

	// Draw Player
	drawObjects()
	if (level == 0) {
		drawLevel1()
		// checkSpikeCollision1()
		// checkLevelEnd1()
	} else if (level == 1) {
		drawLevel2()
	}
	console.log(level)
}

// EVENT FUNCTIONS
function keyPressed() {
	// Jump on UP_ARROW
	player1.setXSpeed();
	player1.jump()
	// player2.jump()
}

function keyReleased() {
	player1.stopXSpeed();
}