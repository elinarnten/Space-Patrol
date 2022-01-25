/// <reference path='./SpaceObject.ts'/>
class Asteroid extends SpaceObject {

    

    constructor(position: p5.Vector, size: number, health: number, explosionTimeOut: number) {
        super(position, size, health, images.asteroid, true, explosionTimeOut);
        
    }
    
   

    public rotateAsteroid() {
        
    }


    public changeHealth() { 

    }

}