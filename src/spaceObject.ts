class SpaceObject {

    protected name: string;
    protected x: number;
    protected y: number;
    protected size: number;
    protected health: number;
    protected image: p5.Image;
    protected friendly: boolean;



    constructor(name: string, x: number, y: number, size: number, health: number, image: p5.Image, friendly: boolean) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
        this.health = health;
        this.image = image;
        this.friendly = friendly;
    }

    public shouldBeRemoved() {

    }

    public update() {

    }

    public draw() {

    }
}