class Bomb extends SpaceObject {

    private isHit: boolean;

    constructor(name: string, position: p5.Vector, size: number, health: number, image: p5.Image, friendly: boolean, isHit: boolean, explosionTimeOut: number) {
        super(name, position, size, health, image, friendly, explosionTimeOut);
        this.isHit = isHit;
    }

    public explodeBomb() {

    }

    public changeHealth() {
        
    }

}