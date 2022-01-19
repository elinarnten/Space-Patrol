
//---- GLOBAL VARIABLES ----//
let game: Game;
let cockpit: p5.Image;
let asteroidimg: p5.Image;
let spaceObjects: Array<SpaceObject> = [];


// let sound: p5.SoundFile

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    cockpit = loadImage('./assets/images/cockpit.png');
    asteroidimg = loadImage('./assets/images/asteroid.png')
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
    angleMode(DEGREES);
    frameRate(60);
    // noCursor();
    
    // level base stats, time, levelvalue, objectsize, amountofobjects, levelgoal, amountoflives
    const level = new Level(1200, 1, 1, 1, 20, 3)
    // const timeBaseValue = timeBaseValue(200)

    // level, amountOfLives, Score
    game = new Game(level, 3, 0, false);
    level.generateSpaceObjects();


}

function keyTyped() {
    if (keyCode === 32) {
        console.log('its working :O');
    }
     
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    clear();
    game.update();
    game.draw();
    image(cockpit, 0, 0, width, height);

    
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}