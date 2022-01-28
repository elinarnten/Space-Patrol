class GameEngine {
    private level: Level;
    private cockpit: Cockpit;
    private topMenu: TopMenu;
    private pointSystem: PointSystem;
    public deltaTime: number;

    constructor() {
        this.level = new Level(60, 1, 1, 20, 3);
        this.pointSystem = new PointSystem(3, 0)
        this.cockpit = new Cockpit(this);
        this.topMenu = new TopMenu(this.level, this.pointSystem);
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
                            this.pointSystem.score = this.pointSystem.score + spaceObject.score;
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
        this.level.LevelCountDownTimer();
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