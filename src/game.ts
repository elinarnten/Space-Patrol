class Game {

    private grid: Grid

    constructor(){
        this.grid = new Grid(createVector(10, 10))
    }

    public update() {
    this.grid.update()

    }

    public draw() {
        background('white');

        this.grid.draw()
    }
}