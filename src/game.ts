class Game {
     
    private level: Level;
    private amountOfLives: Number;
    private pauseMenu: PauseMenu;
    private startMenu: StartMenu;
    private score: number;
    private gameOver: boolean;
    

    constructor(level: Level, amountOfLives: number, pauseMenu: PauseMenu, startMenu: StartMenu, score: number, gameOver: boolean){
        this.level = new level;
        this.amountOfLives = amountOfLives
        this.pauseMenu = pauseMenu
        this.startMenu = startMenu
        this.score = score
        this.gameOver = gameOver
    }

    public update() {
    

    }
    

    public draw() {
        clear();
       
    }
    
    public playSound() {

    }
}