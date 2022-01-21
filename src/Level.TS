class Level {

    // public spaceObjects: Array<Asteroid> = [];


    // Is this supporsed to be a func using timeBaseValue -1ms for every fps/loop.
    private timeBaseValue: number;
    private levelValue: number;
    private objectSize: number;
    private amountOfObjects: number;
    private levelGoal: number;
    private amountOfLivesLeft: number;


    constructor(
        timeBaseValue: number,
        levelValue: number,
        objectSize: number,
        amountOfObjects: number,
        levelGoal: number,
        amountOfLivesLeft: number,
    ) {
        this.timeBaseValue = timeBaseValue;
        this.levelValue = levelValue;
        this.objectSize = objectSize;
        this.amountOfObjects = amountOfObjects;
        this.levelGoal = levelGoal;
        this.amountOfLivesLeft = amountOfLivesLeft; 
    }

    public getCurrentLevel() {
        return this.levelValue;
    }
    public getTimeBaseValue() {
        return this.timeBaseValue;
    }

    public LevelCountDownTimer() {
        if (frameCount % 60 === 0 && this.timeBaseValue > 0) {
            this.timeBaseValue--;
        }

        if (this.timeBaseValue === 0) {
            
            // run passLevel()
        }
    }

    public getLevelGoal() {
        return this.levelGoal;
    }

    public getAmountOfLivesLeft() {
        return this.amountOfLivesLeft;
    }

    /* public setNewGoal() {

    } */

    public generateSpaceObjects() {

        while(spaceObjects.length < 5) {
            let position = createVector(random(100, (width - 100)), random(100, (height - height /4)));
            let size = random(25, 100);
            let asteroid = new Asteroid(position, size, 1, 5)

            let overlapping = false;
            
            for(let j = 0; j < spaceObjects.length; j++) {
                let other = spaceObjects[j];
                console.log(asteroid.position);
                console.log(spaceObjects);
                let d = dist(asteroid.position.x, asteroid.position.y, other.position.x, other.position.y);

                if(d < asteroid.size + other.size) {
                    //then they are overlapping
                    overlapping = true;
                    
                }
            }

            if(!overlapping) {
                spaceObjects.push(asteroid);
            }

        }

    }
        // for(let i = 0; i < 3; i++) {
        //     const position = createVector(random(100, (width - 100)), random(100, (height - height /4)));
        //     spaceObjects.push(new Bomb(position, 3));

        // }
        
    

    public goToNextLevel() {

    }

    public checkForDestroyedObjects() {

    }

    public calculateScore(spaceObject: []) {

    }

    public update() {
        for (let object of spaceObjects) {
            object.update();
            // if(object instanceof Asteroid) use to check if bomb or asteroid
        }

    }

    public draw() {
        for (let object of spaceObjects) {
            object.draw();
        }
        

    }
}