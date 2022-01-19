
//---- GLOBAL VARIABLES ----//
let game: Game;
let spaceObject: SpaceObject;
let spaceObject2: SpaceObject;
let asteroidimg: p5.Image;


// let sound: p5.SoundFile

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
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

    // creates spaceObject
    spaceObject = new SpaceObject('asteroid', createVector(1000, 300), 100, 1, asteroidimg, false, 5);
    spaceObject2 = new SpaceObject('asteroid', createVector(500, 100), 300, 1, asteroidimg, false, 5);





}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    clear();
    spaceObject.draw();
    spaceObject2.draw();
    spaceObject.update();
    game.update();
    game.draw();
    
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}