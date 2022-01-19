class Level {
    public spaceObjects: Array<SpaceObject> = [];

    // Is this supporsed to be a func using timeBaseValue -1ms for every fps/loop.
    // private timeToDestruct: number;
    private timeBaseValue: number;
    private levelValue: number;
    private objectSize: number;
    private amountOfObjects: number;
    private levelGoal: number;
    private amountOfLives: number;

    constructor(timeBaseValue: number, levelValue: number, objectSize: number, amountOfObjects: number, levelGoal: number, amountOfLives: number){
        this.timeBaseValue = timeBaseValue;
        this.levelValue = levelValue;
        this.objectSize = objectSize;
        this.amountOfObjects = amountOfObjects;
        this.levelGoal = levelGoal;
        this.amountOfLives = amountOfLives;    
    }

    /* public getCurrentLevel() {

    } */

    /* public setNewGoal() {

    } */

    public generateSpaceObjects() {
        
    }

    public goToNextLevel() {

    }
    
    public checkForDestroyedObjects() {

    }
    
    public calculateScore(spaceObject: []) {

    }
    
    public update() {
        //  for(let i = 0; i < 50; i++) {
        //      let asteroid  = new SpaceObject('asteroid', createVector(i * 10, i * 5), 50, 1, asteroidimg, false, 5);
        //      this.spaceObjects.push(asteroid);  
        //     }
        //     this.amountOfObjects += 0.5;

        
    }

    public draw() {
        
            // for(let objects of this.spaceObjects) {
            //     image(asteroidimg, this.amountOfObjects * 10, this.amountOfObjects * 5, 50, 50)
            // }
        
        


    }
}