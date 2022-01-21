
//---- GLOBAL VARIABLES ----//
let game: Game;
let images: Images;
let spaceObjects: Array<SpaceObject> = []; 
let angleBeam = 0;
let angleChangeDirection = true;
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
        bomb: loadImage('./assets/images/bomb.png')

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
    const level = new Level(1200, 1, 1, 1, 20, 3)
    // const timeBaseValue = timeBaseValue(200)

    // level, BaseAmountOfLives, Score
    game = new Game(level, 0);
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
    image(images.cockpit, 0, 0, width, height);

    
    strokeWeight(20);
    translate(width/2, height - 40);
    rotate(angleBeam)
    line(0, 0, 0, -80)
    if(angleBeam < 90 && angleChangeDirection == true) {
        angleChangeDirection = true;
        
    } else if (angleBeam <= 90) {
        angleChangeDirection = false
    }

    if(angleBeam < 90 && angleChangeDirection == true) {
        angleBeam = angleBeam + 1;
    }   else if(angleChangeDirection == false) {
        angleBeam = angleBeam - 1;
        if (angleBeam <= -90) {
            angleChangeDirection = true;
        }

    }

    
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight-80);
}