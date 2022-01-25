

class LaserBeam { //change time name
    private time: number;
    private isActivated: boolean;
    private hitsAsteroid: boolean;
    private angle: number;
    private position: p5.Vector;
    private angleChangeDirection: boolean;
    private gameEngine: GameEngine;
    private shootingBeam: IsActivated | null;

    constructor(gameEngine: GameEngine) {
        this.isActivated = false;
        this.hitsAsteroid = false;
        this.angle = 0;
        this.position = createVector(width / 2, height - 40);
        this.angleChangeDirection = true;
        this.time = 5000;
        this.gameEngine = gameEngine;
        this.shootingBeam = null;
    }

    public update() {
        this.updateBeamAngle();

        if (keyIsDown(32) && !this.isActivated) {
            this.isActivated = true;
            this.shootingBeam = new IsActivated(false, this.angle, createVector(width / 2, height - 40), this.gameEngine);
        }

        if (this.isActivated) {
            this.time -= deltaTime;
            if (this.time < 0) {
                this.time = 5000;
                this.isActivated = false;
                this.shootingBeam = null;
            }
        }
    }

    private updateBeamAngle() {
        if (!this.isActivated) {
            if (this.angle < 0 && this.angleChangeDirection == true) {
                this.angleChangeDirection = true;

            } else if (this.angle <= 180) {
                this.angleChangeDirection = false
            }

            if (this.angle < 0 && this.angleChangeDirection == true && spaceBar == false) {
                this.angle = this.angle + 1;
            } else if (this.angleChangeDirection == false && spaceBar == false) {
                this.angle = this.angle - 1;
                if (this.angle <= -180) {
                    this.angleChangeDirection = true;
                }

            }
        }
    }


    public draw() {
        push();
        strokeWeight(10);
        
        const endX = this.position.x+80* cos(this.angle);
        const endY = this.position.y+80 * sin(this.angle);

        line(width/2, height-40, endX, endY)
        pop()

        if (this.isActivated && this.shootingBeam) {
            this.shootingBeam.draw();
        }
    }

}