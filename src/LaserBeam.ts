

class LaserBeam { //change time name
    private time: number;
    private isActivated: boolean;
    private hitsAsteroid: boolean; 
    private angle: number;
    private position: p5.Vector;
    private angleChangeDirection: boolean;

    constructor() {
        this.isActivated = false;
        this.hitsAsteroid = false;
        this.angle = 90;
        this.position = createVector(width/2, height - 40);
        this.angleChangeDirection = true;
        this.time = 5000;
        // isActivated = new IsActivated(false, angleBeam, createVector(width/2, height - 40));
    }

    public update() {
        this.updateBeamAngle();
        
        if (keyIsDown(32) && !this.isActivated) {
            this.isActivated = true;
        }
        
        if (this.isActivated) {
            this.time -= deltaTime;
            if (this.time < 0) {
                this.time = 5000;
                this.isActivated = false;
            }
        }
    }

    private updateBeamAngle() {
        if(this.angle < 90 && this.angleChangeDirection == true) {
            this.angleChangeDirection = true;
            
        } else if (this.angle <= 90) {
            this.angleChangeDirection = false
        }

        if(this.angle < 90 && this.angleChangeDirection == true && spaceBar == false) {
            this.angle = this.angle + 1;
        }   else if(this.angleChangeDirection == false && spaceBar == false) {
            this.angle = this.angle - 1;
            if (this.angle <= -90) {
                this.angleChangeDirection = true;
            }

        }

        // if(this.isActivated) {
        //     isActivated.update();
        
    }
    

    public draw() {
        push();
        strokeWeight(10);
        translate(this.position.x, this.position.y);
        rotate(this.angle)
        line(0, 0, 0, -80)
        pop()

        // if(this.isActivated) {
        //     isActivated.draw();
        // }
    }

}