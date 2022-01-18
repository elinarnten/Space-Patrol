class Bomb extends SpaceObject {

    private isHit: boolean;

    constructor(name: string, x: number, y: number, size: number, health: number, image: p5.Image, friendly: boolean, isHit: boolean, explosionTimeOut: number) {
        super(name, x, y, size, health, image, friendly, explosionTimeOut);
        this.isHit = isHit;
    }

    public explodeBomb() {

    }

    public changeHealth() {
        
    }

}