
class IsActivated {
 
    private hitsAsteroid: boolean; 
    private angle: number;
    private position: p5.Vector;

    constructor(hitsAsteroid: boolean, angle: number, position: p5.Vector)
    {
        this.hitsAsteroid = hitsAsteroid;
        this.angle = angle;
        this.position = position;
    }

    public hitsAsteroidFunc(){

    }

    public hitsBomb(){

    }

    public update() {
    
    }


    public draw() {

        push();
        translate(this.position.x, this.position.y);
        rotate(angleBeam);
        stroke('red');
        strokeWeight(10);
        line(0, 0, 0, -300);
        pop();

        if(frameCount % 60 === 0 && timerValue > 0) {
            timerValue--;
         }

         if(timerValue == 0) {
             spaceBar = false;
         }

    }
}