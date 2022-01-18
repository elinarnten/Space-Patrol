
//---- GLOBAL VARIABLES ----//
let game: Game;
// let sound: p5.SoundFile

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
    // noCursor();
    
    // level base stats, time, levelvalue, objectsize, amountofobjects, levelgoal, amountoflives
    const level = new Level(1200, 1, 1, 1, 20, 3)
    // const timeBaseValue = timeBaseValue(200)

    // level, amountOfLives, Score
    game = new Game(level, 3, 0, false);
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {

    game.update();
    game.draw();
    
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}