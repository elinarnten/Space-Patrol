abstract class SpaceObject {

    
    public position: p5.Vector;
    public size: number;
    protected health: number;
    protected image: p5.Image;
    protected friendly: boolean;
    protected explosionTimeOut: number;
    protected angle = 0;

    constructor(position: p5.Vector, size: number, health: number, image: p5.Image, friendly: boolean, explosionTimeOut: number) {

        this.position = position;
        this.size = size;
        this.health = health;
        this.image = image;          
        this.friendly = friendly;
        this.explosionTimeOut = explosionTimeOut;
    }

    public shouldBeRemoved() {

    }
    

    public update() {
        this.angle = this.angle + 1;
        
    }

    public draw() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.size*2, this.size*2);
        pop();
    }
}  