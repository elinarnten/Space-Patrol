class GameEngine {
    private level: Level;
    private cockpit: Cockpit;
    private topMenu: TopMenu;
    private pointSystem: PointSystem;
    public deltaTime: number;

    constructor() {
        this.level = new Level(120, 1, 1, 1, 20, 3);
        this.pointSystem = new PointSystem(3, 0)
        this.cockpit = new Cockpit(this);
        this.topMenu = new TopMenu(this.level, this.pointSystem);
        this.deltaTime = 5000;
    }
    
    public checkCollision () {
        const laserBeam = this.cockpit.getLaserBeam();
        if (!laserBeam) return;

        const endPosition = laserBeam.getEndPosition();
        
        for (const spaceObject of this.level.spaceObjects) {

            const isHit = dist(endPosition.x, endPosition.y, spaceObject.position.x, spaceObject.position.y)

            if (isHit < spaceObject.size) {
                // destroy asteroid ()
                spaceObject.setDestroyed();
                // update laserbeam
                laserBeam.hitsAsteroid = true;
                console.log(spaceObject.health);
            }
        }
    }

    public removeDestroyedObjects() {
        for (const spaceObject of this.level.spaceObjects) {
            if (spaceObject.isDestroyed) {
                // let index = this.level.spaceObjects.indexOf(spaceObject);
                // this.level.spaceObjects.splice(index, 1);
            }
        }
    }

    public update() {
        this.topMenu.update();
        this.level.update();
        this.cockpit.update();
        this.level.LevelCountDownTimer(); 
        this.checkCollision();
        this.removeDestroyedObjects();
    }

    public draw() {
        this.level.draw();
        image(images.cockpit, 0, 0, width, height);
        this.cockpit.draw();
    }
    
}