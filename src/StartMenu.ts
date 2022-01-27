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
        startMenuContainer.classList.add('startMenuContainer');
        document.body.appendChild(startMenuContainer);
        startMenuContainer.style.transform = 'translate(-50%, -50%)';
        
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
        

        const startGameButton = document.createElement('button');
        startGameButton.className = ('startGameButton');
        startGameButton.innerHTML = 'START GAME';
        startGameButton.style.fontFamily = 'russo one';
        startMenuContainer.appendChild(startGameButton);

        const aboutButton = document.createElement('button')
        aboutButton.classList.add('aboutButton');
        aboutButton.innerHTML = 'ABOUT';
        aboutButton.style.fontFamily = 'russo one'
        startMenuContainer.appendChild(aboutButton);
      
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