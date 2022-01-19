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
        for(let i = 0; i < 5; i++) {
            spaceObjects.push(new SpaceObject('asteroid', createVector(random(100, (width - 100)), random(100, (height - height /4))), random(50, 200), 1, asteroidimg, false, 5))
        }
        
    }

    public goToNextLevel() {

    }
    
    public checkForDestroyedObjects() {

    }
    
    public calculateScore(spaceObject: []) {

    }
    
    public update() {
       
        
    }

    public draw() {
        for(let objects of spaceObjects) {
            objects.draw();
        }

        

    }
}