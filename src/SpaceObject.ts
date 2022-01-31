abstract class SpaceObject {
    public position: p5.Vector;
    public size: number;
    public health: number;
    protected image: p5.Image;
    protected friendly: boolean;
    protected angle: number;
    public isDestroyed: boolean;
    private isExploding: boolean;
    private explodingTimeout: number;
    private imageIndex: number;
    public score: number;
    public isHit: boolean;

    constructor(position: p5.Vector, size: number, health: number, image: p5.Image, friendly: boolean, score: number, angle: number) {

        this.position = position;
        this.size = size;
        this.health = health;
        this.image = image;
        this.friendly = friendly;
        this.isDestroyed = false;
        this.score = score;
        this.explodingTimeout = 200;
        this.isExploding = false;
        this.imageIndex = 0;
        this.angle = angle;
        this.isHit = false;
    }

    public setDestroyed() {
        this.isExploding = true;
        if(this.size <= 70){

            sound[3].play();
            sound[3].setVolume(.01);
        } else {
            sound[4].play();
            sound[4].setVolume(.01);
        }
    }

    public displayAsteroidLife() {
        push();
        rectMode(CENTER);
        textSize(30);
        fill('red');
        translate(this.position.x, this.position.y)
        if(this.health == 2) {
            fill('yellow')
            rect(0, this.size, this.size, 15);
        }else {
            fill('red');
            rect(0, this.size, this.size / 2, 15);

        }
        pop();
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

        if(this.isHit == true && this.health >= 1) {
            this.displayAsteroidLife();
        }

    }
}  