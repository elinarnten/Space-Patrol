class SpaceObject {

    protected name: string;
    protected position: p5.Vector;
    protected size: number;
    protected health: number;
    protected image: p5.Image;
    protected friendly: boolean;
    protected explosionTimeOut: number;
    protected angle = 0;

    constructor(name: string, position: p5.Vector, size: number, health: number, image: p5.Image, friendly: boolean, explosionTimeOut: number) {
        this.name = name;
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
        
        
    }

    public draw() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(asteroidimg, 0, 0, this.size, this.size);

        this.angle = this.angle + 1;
        pop();
        
    }
}