
class IsActivated {
 
    private hitsAsteroid: boolean; 
    private angle: number;
    private position: p5.Vector;
    private beamLength: number;

    constructor(hitsAsteroid: boolean, angle: number, position: p5.Vector)
    {
        this.hitsAsteroid = hitsAsteroid;
        this.angle = angle;
        this.position = position;
        this.beamLength = 0;
    }

    public hitsAsteroidFunc(){

    }

    public hitsBomb(){

    }

    public update() {
        this.beamLength = this.beamLength - 20;
    }


    public draw() {

        push();
        translate(this.position.x, this.position.y);
        rotate(angleBeam);
        stroke('red');
        strokeWeight(10);
        
        
        if(frameCount % 60 === 0 && timerValue > 0) {
            timerValue--;
        
        }
        
        if(timerValue == 0) {
            spaceBar = false;
            this.beamLength = 0;
        }
        
        line(0, 0, 0, this.beamLength);
        pop();
    }
}