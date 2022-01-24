/// <reference path='./Level.ts'/>
/// <reference path='./PauseMenu.ts'/>
/// <reference path='./StartMenu.ts'/>
/// <reference path='./TopMenu.ts'/>
/// <reference path='./PointSystem.ts'/>
/// <reference path='./laserBeam.ts'/>
/// <reference path='./IsActivated.TS'/>


class Game {
    private level: Level;
    private pauseMenu: PauseMenu;
    private startMenu: StartMenu;
    private score: number;
    private gameState: GameState;
    private gameOver: boolean;
    private topMenu: TopMenu;
    private pointSystem: PointSystem;
    // private isActivated: IsActivated;
    
    

    constructor(level: Level, score: number){
        this.level = new Level(120, 1, 1, 1, 20, 3);
        this.pointSystem = new PointSystem(3, 0)
        this.topMenu = new TopMenu(this.level, this.pointSystem);
        this.gameState = {gameState: "start"};
        this.pauseMenu = new PauseMenu(this.gameState);
        this.startMenu = new StartMenu(this.gameState);
        this.score = score;
        this.gameOver = false; 
        // this.isActivated = new IsActivated(false, angleBeam, createVector(width/2, height - 40));

            }


    public playSound() {
        
    }
    
    public update() {
        this.level.update();
        this.topMenu.update();
    
    }


    public draw() {
            
        this.level.draw();
        this.level.LevelCountDownTimer();
    }

}