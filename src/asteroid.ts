/// <reference path='./spaceObject.ts'/>
class Asteroid extends SpaceObject {

    private isDestroyed: boolean;

    constructor(position: p5.Vector, size: number, health: number, friendly: boolean, explosionTimeOut: number) {
        super(position, size, health, images.asteroid, friendly, explosionTimeOut);
        this.isDestroyed = false;
    }

    public rotateAsteroid() {
        
    }


    public changeHealth() { 

    }

}