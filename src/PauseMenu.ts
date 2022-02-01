/// <reference path="StartMenu.ts" />

class PauseMenu {
    public pauseContainer!: HTMLDivElement;
    private game: IGame; 
    private startMenu: StartMenu;
    public topMenuContainer!: HTMLDivElement;

    // private topMenu: TopMenu;
    // private level: Level;

    
    constructor(game: IGame){
        this.game = game;
        this.startMenu = new StartMenu(game); 
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

        this.topMenuContainer = document.getElementById('topMenuContainer') as HTMLDivElement;
    }
    

    private resumeGame() {
        this.game.gameState = "running";
        this.pauseContainer.remove();
    }
    

    private restartGame() {
        this.game.gameState = "start";
        this.topMenuContainer.remove();
        this.pauseContainer.remove();
        this.startMenu.startGame();
    }
    public quitGame() {
        this.game.gameState = "start";
        this.topMenuContainer.remove();
        this.startMenu.openMenu();
        this.pauseContainer.remove();
    }
} 