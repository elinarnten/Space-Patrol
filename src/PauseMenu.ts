class PauseMenu {
    private pauseMenuContainer!: HTMLDivElement;
    private game: IGame; 
   
    constructor(game: IGame){
        this.game = game;
    }

    public open() {


        const pauseMenuContainer = document.createElement('DIV') as HTMLDivElement;
        pauseMenuContainer.id = 'pauseMenuContainer';
        document.body.appendChild(pauseMenuContainer);
        
        const resumeButton = document.createElement('button')
        resumeButton.id = 'resumeButton';
        resumeButton.innerHTML = 'RESUME';
        pauseMenuContainer.appendChild(resumeButton);

        const restartButton = document.createElement('button')
        restartButton.id = 'restartButton';
        restartButton.innerHTML = 'RESTART';
        pauseMenuContainer.appendChild(restartButton);

        const aboutButton = document.createElement('button')
        aboutButton.id = 'aboutButton';
        aboutButton.innerHTML = 'ABOUT';
        pauseMenuContainer.appendChild(aboutButton);

        const quitButton = document.createElement('button')
        quitButton.id = 'quitButton';
        quitButton.innerHTML = 'QUIT';
        pauseMenuContainer.appendChild(quitButton);   
    }

    private resumeGame() {
        this.game.gameState = "running";
        this.pauseMenuContainer.remove();
    }
    
    public quitGame() {
    }
} 