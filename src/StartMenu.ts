class StartMenu {
    private game: IGame;
    private startMenuContainer!: HTMLDivElement;
    private aboutGameContainer!: HTMLDivElement;
    public pauseContainer!: HTMLDivElement;
    public topMenuContainer!: HTMLDivElement;

    constructor(game: IGame) {
        this.game = game; 
        this.topMenuContainer = document.getElementById('topMenuContainer') as HTMLDivElement;
        this.openMenu(); 
    }
    
    public openMenu() {
        this.startMenuContainer = document.createElement ('div') as HTMLDivElement;
        this.startMenuContainer.classList.add('startMenuContainer');
        document.body.appendChild(this.startMenuContainer);
        
        const logoContainer = document.createElement('div') as HTMLDivElement;
        const logoTopText = document.createElement('h1') as HTMLHeadingElement;
        const logoBottomText = document.createElement('h1') as HTMLHeadingElement;
        logoTopText.innerHTML = 'Space';
        logoBottomText.innerHTML = 'Patrol';
        logoContainer.appendChild(logoTopText);
        logoContainer.appendChild(logoBottomText);
        this.startMenuContainer.appendChild(logoContainer);
        
        
        const startGameButton = document.createElement('button');
        startGameButton.className = ('startGameButton');
        startGameButton.innerHTML = 'START GAME';
        startGameButton.style.fontFamily = 'russo one';
        startGameButton.addEventListener('click', () => this.startGame())
        this.startMenuContainer.appendChild(startGameButton);
        

        const aboutButton = document.createElement('button')
        aboutButton.classList.add('aboutButton');
        aboutButton.innerHTML = 'ABOUT';
        aboutButton.style.fontFamily = 'russo one';
        aboutButton.addEventListener('click', () => this.aboutGame())
        this.startMenuContainer.appendChild(aboutButton); 
        this.topMenuContainer.classList.toggle('displayNone');

    }
    
    public startGame() {
        this.game.gameState = "running";
        this.startMenuContainer.remove();
        this.topMenuContainer.remove()
        game.restartGame();
    }

    public aboutGame() {
        this.aboutGameContainer = document.createElement('div') as HTMLDivElement;
        this.aboutGameContainer.id = 'aboutGameContainer';
        document.body.appendChild(this.aboutGameContainer);

        const aboutGameInnerContainer = document.createElement('div') as HTMLDivElement;
        this.aboutGameContainer.appendChild(aboutGameInnerContainer);
        aboutGameInnerContainer.id = 'aboutGameInnerContainer';
        
        const aboutHeadingDiv = document.createElement('div') as HTMLDivElement;    
        aboutHeadingDiv.id = 'aboutHeadingDiv';
        aboutHeadingDiv.innerHTML = 'ABOUT';
        aboutGameInnerContainer.appendChild(aboutHeadingDiv); 

        const aboutContentDiv = document.createElement('div');
        aboutContentDiv.id = 'aboutContentDiv';
        aboutContentDiv.innerHTML = 'This game takes place in space where dangerous asteroids are threatening our planet. You will be positioned in a spacecraft. Your weapon is a laserbeam. Save our planet by shooting down asteroids with the laser. Bigger asteroids needs more shots to die. Beware of the bombs: once you shoot on them, you will lose points. Aim carefully. Each level goes on time. You must meet the current number of meteorites to survive and to reach the next level. <br><br> Use the following keys: <br> ESC - Menu <br> P - Pause <br> ENTER - Start game <br> SPACEBAR - Shoot <br><br> Yours truly, <br><br> The Mother Earth Guardians: <br> Sabina Andersson, Elin Arntén, Sara Lindqvist, <br>Rosanna Pistone and William Saar';
        aboutGameInnerContainer.appendChild(aboutContentDiv); 

        const buttonDiv = document.createElement('div');
        buttonDiv.id = 'buttonDiv';
        aboutGameInnerContainer.appendChild(buttonDiv);

        const backButton = document.createElement('button');
        backButton.id = 'backButton';
        backButton.innerHTML = 'BACK';
        backButton.addEventListener('click', () => this.aboutGameContainer.remove());
        buttonDiv.appendChild(backButton);  
    }
}