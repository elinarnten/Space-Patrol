/// <reference path='./Level.ts'/>
/// <reference path='./PauseMenu.ts'/>
/// <reference path='./StartMenu.ts'/>
/// <reference path='./TopMenu.ts'/>
/// <reference path='./PointSystem.ts'/>

class Game {
    private level: Level;
    private pauseMenu: PauseMenu;
    private startMenu: StartMenu;
    private score: number;
    private gameState: GameState;
    private gameOver: boolean;
    private topMenu: TopMenu;
    private pointSystem: PointSystem;
    
    

    constructor(level: Level, score: number){
        this.level = new Level(1200, 1, 1, 1, 20, 3);
        this.pointSystem = new PointSystem(3)
        this.topMenu = new TopMenu(this.level, this.pointSystem);
        this.gameState = {gameState: "start"};
        this.pauseMenu = new PauseMenu(this.gameState);
        this.startMenu = new StartMenu(this.gameState);
        this.score = score;
        this.gameOver = false;  
    }


    public playSound() {
        
    }
    
    public update() {
        this.level.update();
    }


    public draw() {
        this.level.draw();
    }

}