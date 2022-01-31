/// <reference path='./SpaceObject.ts'/>
class Asteroid extends SpaceObject {

    constructor(position: p5.Vector, size: number, health: number, score: number, angle: number) {
        super(position, size, health, images.asteroid, true, score, angle);  
    }
} 