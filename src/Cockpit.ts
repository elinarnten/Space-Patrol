class Cockpit {
    private time: number;
    private isActivated: boolean;
    private angle: number;
    private position: p5.Vector;
    private angleChangeDirection: boolean;
    private gameEngine: GameEngine;
    private laserBeam?: LaserBeam;

    constructor(gameEngine: GameEngine) {
        this.isActivated = false;
        this.angle = 0;
        this.position = createVector(width / 2, height - 40);
        this.angleChangeDirection = true;
        this.time = 3000;
        this.gameEngine = gameEngine;
    }

    public getLaserBeam() {
        return this.laserBeam;
    }

    private updateBeamAngle() {
        if (!this.isActivated) {
            if (this.angle < 0 && this.angleChangeDirection == true) {
                this.angleChangeDirection = true;

            } else if (this.angle <= 180) {
                this.angleChangeDirection = false
            }

            if (this.angle < 0 && this.angleChangeDirection == true && !this.isActivated) {
                this.angle = this.angle + 1;
            } else if (this.angleChangeDirection == false && !this.isActivated) {
                this.angle = this.angle - 1;
                if (this.angle <= -180) {
                    this.angleChangeDirection = true;
                }
            }
        }
    }

    public update() {
        this.updateBeamAngle();

        if (keyIsDown(32) && !this.isActivated) {
            this.isActivated = true;
            this.laserBeam = new LaserBeam(false, this.angle, createVector(width / 2, height - 40), this.gameEngine);
        }

        if (this.isActivated) {
            this.time -= deltaTime;
            if (this.time < 0) {
                this.time = 3000;
                this.isActivated = false;
                delete this.laserBeam;
            }
        }
        this.laserBeam?.update();
    }


    public draw() {
        push();
        strokeWeight(10);

        const endX = this.position.x + 80 * cos(this.angle);
        const endY = this.position.y + 80 * sin(this.angle);

        line(width / 2, height - 40, endX, endY)
        pop()

        this.laserBeam?.draw();
    }
}