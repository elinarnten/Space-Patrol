
//---- GLOBAL VARIABLES ----//
let timerValue = 5;
let game: Game;
let images: Images;
let spaceObjects: Array<SpaceObject> = []; 
let angleBeam = 0;
let angleChangeDirection = true;
let spaceBar = false;
let isActivated: IsActivated;
const timeBaseValue = 1200;


// let sound: p5.SoundFile

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
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
    isActivated = new IsActivated(false, angleBeam, createVector(width/2, height - 40));
    

}


function keyTyped() {
         
 
        
     if (keyCode === 32 && spaceBar === false) {
         timerValue = 5
        stroke(random(255), random(100, 200), random(100), random(200, 255));
         spaceBar = true;
        
         console.log(timerValue)
         
        
         //kallar på isActivated funktionen    
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

    if(spaceBar) {
        isActivated.draw();
        isActivated.update();
    }
  
    image(images.cockpit, 0, 0, width, height);
    
    push();
    strokeWeight(10);
    translate(width/2, height - 40);
    rotate(angleBeam)
    line(0, 0, 0, -80)
    if(angleBeam < 90 && angleChangeDirection == true) {
        angleChangeDirection = true;
        
    } else if (angleBeam <= 90) {
        angleChangeDirection = false
    }

    if(angleBeam < 90 && angleChangeDirection == true && spaceBar == false) {
        angleBeam = angleBeam + 1;
    }   else if(angleChangeDirection == false && spaceBar == false) {
        angleBeam = angleBeam - 1;
        if (angleBeam <= -90) {
            angleChangeDirection = true;
        }

    }
    pop()

   

   
    
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight-80);
}