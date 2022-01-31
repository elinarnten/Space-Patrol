
class Game implements IGame {
    public pauseMenu: PauseMenu;
    //public startMenu: StartMenu;
    //private startMenu: StartMenu;
    private gameEngine: GameEngine;
    public gameState: GameState;

    constructor() {
        this.gameState = "start";
        this.pauseMenu = new PauseMenu(this);
        //this.startMenu = new StartMenu(this);
        //this.startMenu = new StartMenu(this);
        this.gameEngine = new GameEngine();
    }

    // private restartGame() {
    //    this.gameEngine = new GameEngine();
    // }

    public playSound() {
        
    }
    
    public update() {
        if (this.gameState === 'running') {
            this.gameEngine.update();
            
            if (keyIsDown(80)) {
                this.gameState = 'paused';
                this.pauseMenu.open();
            }
        }
    }
    
    
    public draw() {
        if (this.gameState === 'running') {
            this.gameEngine.draw();
        }
    }

}