abstract class SpaceObject {


    public position: p5.Vector;
    public size: number;
    public health: number;
    protected image: p5.Image;
    protected friendly: boolean;
    public explosionTimeOut: number;
    protected angle = 0;
    public isDestroyed: boolean;
    private testTimer: number



    constructor(position: p5.Vector, size: number, health: number, image: p5.Image, friendly: boolean, explosionTimeOut: number) {

        this.position = position;
        this.size = size;
        this.health = health;
        this.image = image;
        this.friendly = friendly;
        this.explosionTimeOut = 5;
        this.isDestroyed = false;
        this.testTimer = 8;
    }

    public setDestroyed() {
        this.isDestroyed = true;
        this.explosionAnimation()
    }

    public explosionAnimation() {
        // let i = 0;

        for (let i = 1; i < 8; i++) { 
            if (frameCount % 30 === 0 && this.testTimer > 0) {
                this.testTimer--;
                
            }
            if (this.testTimer == 0) {
                this.image = images.explosions[i];
                this.testTimer = 8;
            }
        }
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
        image(this.image, 0, 0, this.size * 2, this.size * 2);
        pop();
    }
}  