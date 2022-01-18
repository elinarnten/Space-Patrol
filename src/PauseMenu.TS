class PauseMenu {
    
    private gameState: GameState; 
   
    constructor(gameState: GameState){
        this.gameState = gameState;

        gameState.gameState = 'paused';
    }
    
    
    public quitGame() {
    }
    
    public resumeGame() {
    }

    public draw() {
    }
} 