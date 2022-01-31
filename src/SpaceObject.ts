abstract class SpaceObject {
    public position: p5.Vector;
    public size: number;
    public health: number;
    protected image: p5.Image;
    protected friendly: boolean;
    protected angle: number;
    public isDestroyed: boolean;
    private changeImageTimer: number
    private isExploding: boolean;
    private explodingTimeout: number;
    private imageIndex: number;
    public explosionTimeOut: number;
    public score: number;


    constructor(position: p5.Vector, size: number, health: number, image: p5.Image, friendly: boolean, score: number, angle: number) {

        this.position = position;
        this.size = size;
        this.health = health;
        this.image = image;
        this.friendly = friendly;
        this.explosionTimeOut = 5;
        this.isDestroyed = false;
        this.changeImageTimer = 9;
        this.score = score;
        this.explodingTimeout = 200;
        this.isExploding = false;
        this.imageIndex = 0;
        this.angle = angle;
    }

    public setDestroyed() {
        this.isExploding = true;
        if(this.size <= 70){

            sound[3].play();
        } else {
            sound[4].play();
        }
    }

    public explosionAnimation(){
        if (this.isExploding) {
            this.explodingTimeout -= deltaTime; 
            if (this.explodingTimeout < 0) {
                this.image = images.explosions[this.imageIndex];
                this.explodingTimeout = 200;
                this.imageIndex++;
            }

            if (this.imageIndex === 9){
                this.isDestroyed = true;
            }
        }
    }

    public shouldBeRemoved() {


    }


    public update() {
        this.angle = this.angle + 1;
        this.explosionAnimation()
        
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