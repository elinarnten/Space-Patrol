/// <reference path='./spaceObject.ts'/>
class Asteroid extends SpaceObject {

    private isDestroyed: boolean;

    constructor(position: p5.Vector, size: number, health: number, explosionTimeOut: number) {
        super(position, size, health, images.asteroid, true, explosionTimeOut);
        this.isDestroyed = false;
    }

    public rotateAsteroid() {
        
    }


    public changeHealth() { 

    }

}