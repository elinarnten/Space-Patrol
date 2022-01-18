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

    }

    public draw() {
    

    }
}