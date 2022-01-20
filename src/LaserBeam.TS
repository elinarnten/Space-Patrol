import p5 from "p5";

 class LaserBeam {

    private isActivated: boolean;
    private hitsAsteroid: boolean; 
    private isEscapeDown: boolean;
    private isSpaceBarDown: boolean;
    private angle: number;
    private position: p5.Vector;
    private time: number;
    private width: number;


    constructor(isActivated: boolean, hitsAsteroid: boolean, isEscapeDown: boolean, isSpaceBarDown: boolean, angle: number, position: p5.Vector, time: number, width: number)
    {
        this.isActivated = isActivated;
        this.hitsAsteroid = hitsAsteroid;
        this.isEscapeDown = isEscapeDown;
        this.isSpaceBarDown = isSpaceBarDown;
        this.angle = angle;
        this.position = position;
        this.time = time;
        this.width = width;

    }

    public update() {
    

    }
    

    public draw() {
        push();

        
        
        translate(width / 2, height / 2);
        translate(p5.Vector.fromAngle(millis() / 1000, 40));
        stroke('red');
        strokeWeight(5);
        pop();
    }

    public rotateBeam() {
       angleMode(DEGREES);
      
    }
}