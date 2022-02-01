class GameEngine {
    private level: Level;
    private cockpit: Cockpit;
    private topMenu: TopMenu;
    public deltaTime: number;

    constructor() {
        this.level = new Level();
        this.cockpit = new Cockpit(this);
        this.topMenu = new TopMenu(this.level);
        this.deltaTime = 5000;
    }

    // The function that handles collisions
    public checkCollision() {
        // gets laserbeam
        const laserBeam = this.cockpit.getLaserBeam();

        if (!laserBeam || laserBeam.hitsAsteroid) return;

        // gets endposition of laserbeam
        const endPosition = laserBeam.getEndPosition();

        // loops through array
        for (const spaceObject of this.level.spaceObjects) {

            // checks distance between endposition of laserbeam and the position of objects on the vector (if they overlap = isHit)
            const isHit = dist(endPosition.x, endPosition.y, spaceObject.position.x, spaceObject.position.y)

            // if they overlap
            if (isHit < spaceObject.size) {

                // boolean hitsAsteroid is changed to true
                laserBeam.hitsAsteroid = true;

                // checks if a spaceobject has more helth than 0 when hit, change the health with -1
                if (spaceObject.health > 0) {
                    spaceObject.health--;
                    spaceObject.isHit = true;

                    // checks if a spaceobject has a health of 0
                    if (spaceObject.health == 0) {

                        // if the destroyed spaceobject is a Asteroid, add the score to level (displays in topmenu)
                        if (spaceObject instanceof Asteroid) {
                            this.level.score = this.level.score + spaceObject.score;
                        }
                        // run setDestroyed()
                        spaceObject.setDestroyed();
                    }
                }
            }
        }
    }

    // Loops through array, if isDestroyed = true; remove destroyed object from array, change life and play sounds
    public removeDestroyedObjects() {
        for (const spaceObject of this.level.spaceObjects) {

            // if a space
            if (spaceObject.isDestroyed) {

                // if a bomb is hit, remove one life from amountOfLivesLeft
                if (spaceObject instanceof Bomb) {
                    this.level.amountOfLivesLeft = this.level.amountOfLivesLeft - 1;

                    // plays a sound if a bomb is hit
                    sound[5].setVolume(.05);
                    sound[5].play();
                }

                // remove the destroyed object from array
                let index = this.level.spaceObjects.indexOf(spaceObject);
                this.level.spaceObjects.splice(index, 1);
            }
        }
    }

    public update() {
        this.level.update();
        this.cockpit.update();
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