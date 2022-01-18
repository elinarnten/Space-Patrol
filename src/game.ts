/// <reference path='./Level.ts'/>
/// <reference path='./PauseMenu.ts'/>
/// <reference path='./StartMenu.ts'/>

class Game {
     
    private level: Level;
    private amountOfLives: number;
    private pauseMenu: PauseMenu;
    private startMenu: StartMenu;
    private score: number;
    private gameState: GameState;
    private gameOver: boolean;
    

    constructor(level: Level, amountOfLives: number, score: number, gameOver: boolean){
        this.level = new Level(1200, 1, 1, 1, 20, 3);
        this.amountOfLives = amountOfLives;
        this.gameState = {gameState: "start"};
        this.pauseMenu = new PauseMenu(this.gameState);
        this.startMenu = new StartMenu(this.gameState);
        this.score = score;
        this.gameOver = gameOver;
        
    }

    
    public playSound() {
        
    }
    
    public update() {
    
    }

    public draw() {
        this.level.draw();

        push();
        noFill();
        strokeWeight(4);
        stroke('white')
        circle(700, 300, 100);
        // texture('./assets/images/asteroid.png');
        
        fill('black');
        rect(200,20,20,100);
        
       
    }
}