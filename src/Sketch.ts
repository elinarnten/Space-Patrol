
//---- GLOBAL VARIABLES ----//
let game: Game;
let images: Images;
let startMenu: StartMenu;
// let spaceObjects: Array<SpaceObject> = [];
let isActivated: LaserBeam;
const timeBaseValue = 600;
let spaceFont;
let sound: Array<p5.SoundFile> = [];

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
        explosions: [
            loadImage('./assets/images/explosion/1.png'),
            loadImage('./assets/images/explosion/2.png'),
            loadImage('./assets/images/explosion/3.png'),
            loadImage('./assets/images/explosion/4.png'),
            loadImage('./assets/images/explosion/5.png'),
            loadImage('./assets/images/explosion/6.png'),
            loadImage('./assets/images/explosion/7.png'),
            loadImage('./assets/images/explosion/8.png'),
            loadImage('./assets/images/explosion/9.png')
        ],



    }


    sound = [
        loadSound('../assets/sound/background.mp3'),
        loadSound('../assets/sound/chargeup.mp3'),
        loadSound('../assets/sound/064-laser-thum.mp3'),
        loadSound('../assets/sound/explosion-small.mp3'),
        loadSound('../assets/sound/explosion-big.mp3'),
        loadSound('../assets/sound/incorrect.swf.mp3'),
        loadSound('../assets/sound/success.mp3'),
        loadSound('../assets/sound/great-success-borat.mp3'),
        loadSound('../assets/sound/game-over.mp3'),
        loadSound('../assets/sound/loser-wind.mp3'),
        









    ] 


}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight - 80);
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
    resizeCanvas(windowWidth, windowHeight - 80);
}