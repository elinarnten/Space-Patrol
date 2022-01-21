class StartMenu {

    private gameState: GameState;

    constructor(gameState: GameState){
        this.gameState = gameState; 
        // eventually this might not be needed
        gameState.gameState = 'start';
    }

    public startGame() {
     textFont(spaceFont, [2])   
    }

    public quitGame() {
    }

    public aboutGame() {
    }

    public playerName() {
    }

    public draw() {
    }
}