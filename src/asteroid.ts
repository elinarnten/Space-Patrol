class Asteroid extends SpaceObject {

    private isDestroyed: boolean;

    constructor(name: string, x: number, y: number, size: number, health: number, image: p5.Image, friendly: boolean, isDestroyed: boolean) {
        super(name, x, y, size, health, image, friendly);
        this.isDestroyed = isDestroyed;
    }

    public rotateAsteroid() {
        
    }


    public changeHealth() { 

    }

    public score() { 

    }

}