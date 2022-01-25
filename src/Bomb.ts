class Bomb extends SpaceObject {

    private isHit: boolean;

    constructor(position: p5.Vector, explosionTimeOut: number) {
        super(position, 100, 1, images.bomb, false, explosionTimeOut);
        this.isHit = false;
    }

    public explodeBomb() {

    }

    public changeHealth() {
        
    }

}