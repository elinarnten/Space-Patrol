class PointSystem {
    private baseAmountOfLives: number;
    public score: number;

    constructor(baseAmountOfLives: number, score: number){
        this.baseAmountOfLives = baseAmountOfLives;
        this.score = score;
    }

    public getBaseAmountOfLives() {
        return this.baseAmountOfLives;
    }
    
    public getScore() {
        return this.score;
    }

    public passLevel() {

    }

    public update() {
    

    }
    
    public draw() {
       
    }
}