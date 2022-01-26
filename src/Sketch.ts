
//---- GLOBAL VARIABLES ----//
let game: Game;
let images: Images;
let startMenu: StartMenu;
// let spaceObjects: Array<SpaceObject> = [];
let isActivated: LaserBeam;
const timeBaseValue = 1200;
let spaceFont;


// let sound: p5.SoundFile

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    spaceFont = loadFont('/assets/fonts/space-silhouette-font-regular.ttf')

    images = {
        cockpit: loadImage('./assets/images/cockpit5.png'),
        asteroid: loadImage('./assets/images/asteroid.png'),
        bomb: loadImage('./assets/images/bomb.png'),
        explosions: [loadImage('./assets/images/explosion/1.png'), loadImage('./assets/images/explosion/2.png'), loadImage('./assets/images/explosion/3.png'),
                    loadImage('./assets/images/explosion/4.png'), loadImage('./assets/images/explosion/5.png'), loadImage('./assets/images/explosion/6.png'),
                    loadImage('./assets/images/explosion/7.png'), loadImage('./assets/images/explosion/8.png'), loadImage('./assets/images/explosion/9.png') ]
        // explosion1: loadImage('./assets/images/explosion/1'),
        // explosion2: loadImage('./assets/images/explosion/2'),
        // explosion3: loadImage('./assets/images/explosion/3'),
        // explosion4: loadImage('./assets/images/explosion/4'),
        // explosion5: loadImage('./assets/images/explosion/5'),
        // explosion6: loadImage('./assets/images/explosion/6'),
        // explosion7: loadImage('./assets/images/explosion/7'),
        // explosion8: loadImage('./assets/images/explosion/8'),
        // explosion9: loadImage('./assets/images/explosion/9')


    }
    

    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');

    
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight-80);
    angleMode(DEGREES);
    frameRate(60);
    // noCursor();
    
    // level base stats, time, levelvalue, objectsize, amountofobjects, levelgoal, amountoflives
    // const timeBaseValue = timeBaseValue(200)

    // level, BaseAmountOfLives, Score
    game = new Game();
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
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight-80);
}