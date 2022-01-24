class StartMenu {

    private gameState: GameState;

    constructor(gameState: GameState){
        this.gameState = gameState; 
        // eventually this might not be needed
        gameState.gameState = 'start';
        this.startGame();
    }

    public startGame() {
    //  textFont(spaceFont, [2])   

        const startMenuContainer = document.createElement ('div') as HTMLDivElement;
        document.body.appendChild(startMenuContainer);
        startMenuContainer.style.lineHeight = '.5'
        startMenuContainer.style.position = 'absolute';
        startMenuContainer.style.top = '0';
        startMenuContainer.style.left = '30%';
        const logoContainer = document.createElement('div') as HTMLDivElement;
        const logoTopText = document.createElement('h1') as HTMLHeadingElement;
        const logoBottomText = document.createElement('h1') as HTMLHeadingElement;
        logoTopText.innerHTML = 'Space';
        logoBottomText.innerHTML = 'Patrol';
        logoContainer.appendChild(logoTopText);
        logoContainer.appendChild(logoBottomText);
        startMenuContainer.appendChild(logoContainer);

        const nameInput = document.createElement('input');
        nameInput.classList.add('nameInput');
        nameInput.placeholder = 'Enter your name...';
        startMenuContainer.appendChild(nameInput);


    }

    public quitGame() {
    }

    public aboutGame() {
    }

    public playerName() {
    }

    public update() {

    }

    public draw() {
    }
}