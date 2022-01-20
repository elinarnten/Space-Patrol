class Bomb extends SpaceObject {

    private isHit: boolean;

    constructor(position: p5.Vector, size: number, health: number, friendly: boolean, explosionTimeOut: number) {
        super(position, size, health, images.bomb, friendly, explosionTimeOut);
        this.isHit = false;
    }

    public explodeBomb() {

    }

    public changeHealth() {
        
    }

}