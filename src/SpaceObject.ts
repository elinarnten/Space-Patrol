abstract class SpaceObject {


    public position: p5.Vector;
    public size: number;
    public health: number;
    protected image: p5.Image;
    protected friendly: boolean;
    public explosionTimeOut: number;
    protected angle = 0;
    public isDestroyed: boolean;
    private changeImageTimer: number



    constructor(position: p5.Vector, size: number, health: number, image: p5.Image, friendly: boolean) {

        this.position = position;
        this.size = size;
        this.health = health;
        this.image = image;
        this.friendly = friendly;
        this.explosionTimeOut = 5;
        this.isDestroyed = false;
        this.changeImageTimer = 9;
    }

    public setDestroyed() {
        this.explosionAnimation()
    }

    public explosionAnimation() {
        // let i = 0;
        console.log('animating boom')
        console.log(this.changeImageTimer)
        console.log(this.image)
        console.log('framecount', frameCount)

        let i = 1;
        const timer = window.setInterval(()=>{
            if (i === 9){
                window.clearInterval(timer)
                this.isDestroyed = true;
            }
            i++;
            this.image = images.explosions[i];
            console.log('changing image')
        }, 200)

        console.log(this.image)
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