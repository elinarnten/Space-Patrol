class Level {
    public spaceObjects: Array<Asteroid | Bomb> = [];
    public timeBaseValue: number;
    public levelValue: number;
    public score: number;
    public levelGoal: number;
    public amountOfLivesLeft: number;


    constructor(
        levelValue: number,
        amountOfLivesLeft: number,
    ) {
        this.timeBaseValue = 50;
        this.levelValue = levelValue;
        this.levelGoal = 0;
        this.amountOfLivesLeft = amountOfLivesLeft;
        this.score = 0;
        this.generateSpaceObjects();
        this.calculateCountdownTimer();
        this.calculateAmountOfLivesLeft()
        this.setNewGoal();
    }

    public getCurrentLevel() {
        return this.levelValue;
    }

    public getTimeBaseValue() {
        return this.timeBaseValue;
    }

    public calculateCountdownTimer() {
        //defining the value of timebasevalue depending on which level    
        this.timeBaseValue = this.timeBaseValue * (1 + (this.levelValue * 0.2));
        return this.timeBaseValue;
    }

    public levelCountDownTimer() {

        if (frameCount % 60 === 0 && this.timeBaseValue > 0) {
            this.timeBaseValue--;
        }

        // when the level-timer (timeBaseValue) reach 0, this happens
        if (this.timeBaseValue === 0) {

            textSize(100);
            text('TIME IS OUT YOU DID NOT MAKE IT!', 100, 500);
            fill(250, 255, 0);
            //you didn't pass score in time, earth is no more.
        }

        if (this.score >= this.levelGoal) {
            textSize(100);
            text('YOU MADE THE SCORE!', 100, 500);
            fill(250, 255, 0);
            // NEXT LEVEL SHOW
            this.generateNextLevel();
        }

        if (this.amountOfLivesLeft == 0) {
            textSize(300);
            text('GAME OVER!', 100, 500);
            fill(250, 255, 0);
            // run "next level menu thing"
            // Score:  xxx/xxx
            // Lives left: xx/xx
            // If score met, generate new level
            // if score not met, add GAME OVER state
        }
    }

    public getLevelGoal() {
        return this.levelGoal;
    }

    public getAmountOfLivesLeft() {
        return this.amountOfLivesLeft;
    }

    // CHECK IF WORKS WHEN GAME WORKS!!!!
    public calculateAmountOfLivesLeft() {
        if (this.amountOfLivesLeft < 3) {
            this.amountOfLivesLeft = this.amountOfLivesLeft * (1 + (this.levelValue * 0.2));
            return this.amountOfLivesLeft.toFixed(0);
        }
    }

    public setNewGoal() {
        this.levelGoal = (this.generateSpaceObjects() * 5);
        return this.levelGoal;
    }

    private generateSpaceObjects() {

        let amountOfAsteroids = 5 + this.levelValue;
        let amountOfBombs = 1 + Math.ceil((this.levelValue - 1) * 0.2);
        let amountOfObjects = amountOfAsteroids + amountOfBombs;

        this.spaceObjects.splice(0, amountOfObjects);

        while (this.spaceObjects.length < amountOfAsteroids) {
            let position = createVector(random(100, (width - 100)), random(100, (height - height / 4)));
            let size = random(25, 100);
            let healthLevel = 1;
            let score = 5;
            let angle = random(1, 300);

            if (size > 75) {
                healthLevel = 3
            } else if (size < 75 && size > 50) {
                healthLevel = 2
            }

            score = score * healthLevel;

            let asteroid = new Asteroid(position, size, healthLevel, score, angle)

            let overlapping = false;

            for (let j = 0; j < this.spaceObjects.length; j++) {
                let other = this.spaceObjects[j];
                let d = dist(asteroid.position.x, asteroid.position.y, other.position.x, other.position.y);

                if (d < asteroid.size + other.size) {
                    //then they are overlapping
                    overlapping = true;
                }
            }

            if (!overlapping) {
                this.spaceObjects.push(asteroid);
            }
        }

        // Bomb generator
        while (this.spaceObjects.length < amountOfObjects) {
            let position = createVector(random(100, (width - 100)), random(100, (height - height / 4)));
            let angle = random(1, 300);

            let bomb = new Bomb(position, angle)

            let overlapping = false;

            for (let j = 0; j < this.spaceObjects.length; j++) {
                let other = this.spaceObjects[j];
                let d = dist(bomb.position.x, bomb.position.y, other.position.x, other.position.y);

                if (d < bomb.size + other.size) {
                    //then they are overlapping
                    overlapping = true;
                }
            }

            if (!overlapping) {
                this.spaceObjects.push(bomb);
            }
        }
        return amountOfAsteroids;
    }

    public generateNextLevel() {

        this.timeBaseValue = 50;
        this.levelValue = this.levelValue + 1;
        this.score = 0;
        this.levelGoal = this.setNewGoal();

        this.generateSpaceObjects();
        this.calculateCountdownTimer();
        this.calculateAmountOfLivesLeft()
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