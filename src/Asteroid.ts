/// <reference path='./SpaceObject.ts'/>
class Asteroid extends SpaceObject {

    

    constructor(position: p5.Vector, size: number, health: number, explosionTimeOut: number) {
        super(position, size, health, images.asteroid, true, explosionTimeOut);
        
    }
    
    public setDestroyed() {
        super.setDestroyed();
        // this.image = 
        // byt till andra bilder
        // starta animering
    }

    public rotateAsteroid() {
        
    }


    public changeHealth() { 

    }

}