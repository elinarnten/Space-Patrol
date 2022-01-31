class GameEngine {
    private level: Level;
    private cockpit: Cockpit;
    private topMenu: TopMenu;
    public deltaTime: number;

    constructor() {
        this.level = new Level(1,3);
        this.cockpit = new Cockpit(this);
        this.topMenu = new TopMenu(this.level);
        this.deltaTime = 5000;
       

    }

    
    



    public checkCollision () {
        const laserBeam = this.cockpit.getLaserBeam();
        if (!laserBeam || laserBeam.hitsAsteroid) return;


        const endPosition = laserBeam.getEndPosition();
        
        for (const spaceObject of this.level.spaceObjects) {

            const isHit = dist(endPosition.x, endPosition.y, spaceObject.position.x, spaceObject.position.y)

            if (isHit < spaceObject.size) {
                
                laserBeam.hitsAsteroid = true;                 

                if(spaceObject.health > 0) {
                    console.log(spaceObject.health);
                    spaceObject.health--;
                    
                    if (spaceObject.health == 0) {
                        if(spaceObject instanceof Asteroid) {
                            this.level.score = this.level.score + spaceObject.score;
                        }
                        spaceObject.setDestroyed();
                    }

                } 
                
            }
        }
    }



    public removeDestroyedObjects() {
        for (const spaceObject of this.level.spaceObjects) {
            if (spaceObject.isDestroyed) {

                if(spaceObject instanceof Bomb) {
                    this.level.amountOfLivesLeft = this.level.amountOfLivesLeft - 1;
                    sound[5].setVolume(.5);
                    sound[5].play();

                }
                    console.log('removing object')
                    let index = this.level.spaceObjects.indexOf(spaceObject);
                    this.level.spaceObjects.splice(index, 1);
            }
        }
    }



    public update() {
        this.level.update();
        this.cockpit.update();
        this.level.levelCountDownTimer();
        this.topMenu.update();
        this.checkCollision();
         for (const spaceObject of this.level.spaceObjects) {
             if (spaceObject.isDestroyed) {
                 this.removeDestroyedObjects()
             }
         }

    }

    public draw() {
        this.level.draw();
        image(images.cockpit, 0, 0, width, height);
        this.cockpit.draw();
    }
    
}