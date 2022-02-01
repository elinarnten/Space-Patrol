
class Game implements IGame {
    public pauseMenu: PauseMenu;
    //public startMenu: StartMenu;
    //private startMenu: StartMenu;
    private gameEngine: GameEngine;
    public gameState: GameState;
    public score: Number;
    public gameOver: Boolean;

    constructor() {
        this.gameState = "start";
        //this.startMenu = new StartMenu(this);
        //this.startMenu = new StartMenu(this);
        this.gameEngine = new GameEngine();
        this.pauseMenu = new PauseMenu(this);
        this.score = 0;
        this.gameOver = false;
        this.playSound();

    }

    public restartGame() {
       this.gameEngine = new GameEngine();
    }

     public playSound() {
         
             sound[0].setVolume(.003);
             sound[0].loop(); 
         
     }
    
    public update() {
        if (this.gameState === 'running') {
            this.gameEngine.update();
            
            
            if (keyIsDown(80)) {
                this.gameState = 'paused';
                this.pauseMenu.open();
            }

            if (keyIsDown(27)) {
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