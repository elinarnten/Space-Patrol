class LaserBeam {

    public hitsAsteroid: boolean;
    private angle: number;
    private startPosition: p5.Vector;
    private endPosition: p5.Vector
    private beamLength: number;
    private gameEngine: GameEngine;
    private length: number;

    constructor(hitsAsteroid: boolean, angle: number, position: p5.Vector, gameEngine: GameEngine) {
        this.hitsAsteroid = hitsAsteroid;
        this.angle = angle;
        this.startPosition = position;
        this.endPosition = position;
        this.beamLength = 0;
        this.gameEngine = gameEngine;
        this.length = 1;
    }

    public getEndPosition() {
        return this.endPosition.copy();
    }

    public update() {
        this.beamLength = this.beamLength - 20;
        if (frameCount % 60 === 0 && this.gameEngine.deltaTime > 0) {
            this.gameEngine.deltaTime--;
        }
        if (this.gameEngine.deltaTime == 0) {
            this.beamLength = 0;
        }
    
        if (!this.hitsAsteroid) {
            this.length += 10;
        }
        
        this.endPosition = createVector(
            this.startPosition.x + this.length * cos(this.angle),
            this.startPosition.y + this.length * sin(this.angle)
        )
    }

    public draw() { 
        push();
        stroke('red');
        strokeWeight(10);
        line(this.startPosition.x, this.startPosition.y, this.endPosition.x, this.endPosition.y);
        pop();
    }
}