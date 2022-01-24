

class Game {
    private pauseMenu: PauseMenu;
    private startMenu: StartMenu;
    private score: number;
    private gameState: GameState;
    private gameOver: boolean;
    private gameEngine: GameEngine;
    // private isActivated: IsActivated;

    constructor() {
        this.gameState = {gameState: "start"};
        this.pauseMenu = new PauseMenu(this.gameState);
        this.startMenu = new StartMenu(this.gameState);
        this.gameEngine = new GameEngine(new Level(120, 1, 1, 1, 20, 3));
        this.score = 0;
        this.gameOver = false;
        // this.isActivated = new IsActivated(false, angleBeam, createVector(width/2, height - 40));

    }


    public playSound() {
        
    }
    
    public update() {
        this.gameEngine.update();
    }
    
    
    public draw() {
        this.gameEngine.draw();
    }

}