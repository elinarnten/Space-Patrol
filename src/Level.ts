class Level {
    public spaceObjects: Array<Asteroid> = [];


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
        this.generateSpaceObjects();
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

    private generateSpaceObjects() {

        while(this.spaceObjects.length < 5) {
            let position = createVector(random(100, (width - 100)), random(100, (height - height /4)));
            let size = random(25, 100);
            let healthLevel = 1;

            if(size > 75) {
                healthLevel = 3
            } else if(size > 75 && size > 50) {
                healthLevel = 2
            }

            let asteroid = new Asteroid(position, size, healthLevel, 5)

            let overlapping = false;
            
            for(let j = 0; j < this.spaceObjects.length; j++) {
                let other = this.spaceObjects[j];
                let d = dist(asteroid.position.x, asteroid.position.y, other.position.x, other.position.y);

                if(d < asteroid.size + other.size) {
                    //then they are overlapping
                    overlapping = true;
                    
                }
            }

            if(!overlapping) {
                this.spaceObjects.push(asteroid);
            }

        }

    }
        // for(let i = 0; i < 3; i++) {
        //     const position = createVector(random(100, (width - 100)), random(100, (height - height /4)));
        //     spaceObjects.push(new Bomb(position, 3));

        // }
        
    

    public goToNextLevel() {
        // this.generateSpaceObjects();
    }

    public checkForDestroyedObjects() {

    }

    public calculateScore(spaceObject: []) {

    }

    public update() {
        for (let object of this.spaceObjects) {
            object.update();
        }

    }

    public draw() {
        for (let object of this.spaceObjects) {
            object.draw();
        }
        

    }
}