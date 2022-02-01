/// <reference path="StartMenu.ts" />

class PauseMenu {
    public pauseContainer!: HTMLDivElement;
    private game: IGame; 
    private startMenu: StartMenu;
    public topMenuContainer!: HTMLDivElement;

    private topMenu: TopMenu;
    private level: Level;

    
    constructor(game: IGame, level: Level){
        this.game = game;
        this.level = level;
        this.startMenu = new StartMenu(game, level); 
        this.topMenu = new TopMenu(level) 
    }

    public open() {

        this.pauseContainer = document.createElement('div') as HTMLDivElement;
        this.pauseContainer.id = 'pauseContainer';
        document.body.appendChild(this.pauseContainer);

        const pauseMenuContainer = document.createElement('DIV') as HTMLDivElement;
        pauseMenuContainer.id = 'pauseMenuContainer';
        this.pauseContainer.appendChild(pauseMenuContainer);
        
        const resumeButton = document.createElement('button')
        resumeButton.id = 'resumeButton';
        resumeButton.innerHTML = 'RESUME';
        resumeButton.addEventListener('click', () => this.resumeGame());
        pauseMenuContainer.appendChild(resumeButton);

        const restartButton = document.createElement('button')
        restartButton.id = 'restartButton';
        restartButton.innerHTML = 'RESTART';
        restartButton.addEventListener('click', () => this.restartGame());
        pauseMenuContainer.appendChild(restartButton);

        const aboutButton = document.createElement('button')
        aboutButton.id = 'aboutButton';
        aboutButton.innerHTML = 'ABOUT';
        aboutButton.addEventListener('click', () => this.startMenu.aboutGame());
        pauseMenuContainer.appendChild(aboutButton);

        const quitButton = document.createElement('button')
        quitButton.id = 'quitButton';
        quitButton.innerHTML = 'QUIT';
        quitButton.addEventListener('click', () => this.quitGame());
        pauseMenuContainer.appendChild(quitButton);   
    }
    

    private resumeGame() {
        this.game.gameState = "running";
        this.pauseContainer.remove();
        this.topMenu.addTopMenuContainer();
    }
    
    private restartGame() {
        this.game.gameState = "running";
        this.pauseContainer.remove();
        this.startMenu.startGame();
        this.topMenu.addTopMenuContainer();
    }
    public quitGame() {
        this.game.gameState = "start";
        this.startMenu.openMenu();
        this.pauseContainer.remove();
    }
} 