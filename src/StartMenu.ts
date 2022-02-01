class StartMenu {
    private game: IGame;
    private startMenuContainer!: HTMLDivElement;
    private aboutGameContainer!: HTMLDivElement;
    public pauseContainer!: HTMLDivElement;
    public addTopMenuContainer!: HTMLDivElement; //ej HTML.
    // private topMenu: TopMenu;
    // private level: Level;
    public topMenuContainer!: HTMLDivElement;
    //public pauseMenu: PauseMenu;

    constructor(game: IGame) {
        this.game = game; 

        //this.topMenu = new TopMenu()
        // eventually this might not be needed
        this.openMenu();
        
        //this.pauseMenu = new PauseMenu(game); 
    }
    
    public openMenu() {
        //  textFont(spaceFont, [2]) 
        //this.topMenuContainer.style.display = 'none';
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
        //this.pauseContainer.remove() 
        //this.pauseContainer.remove();
    }
    
    public startGame() {
        this.game.gameState = "running";
        this.startMenuContainer.remove();
        // this.topMenu.addTopMenuContainer();
        //this.pauseContainer.remove();
        //this.pauseMenu.remove();
    }

    public quitGame() {
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
        aboutContentDiv.innerHTML = 'This game takes place in space where dangerous asteroids are threatening our planet. You will be positioned in a spacecraft. Your weapon is a laserbeam. Save our planet by shooting down asteroids with the laser. Beware of the bombs: once you shoot on them, you will lose points. Aim carefully. Each level goes on time. You must meet the current number of meteorites to survive and to reach the next level. <br><br> Use the following keys: <br> ESC - Menu <br> P - Pause <br> ENTER - Start game <br> SPACEBAR - Shoot <br><br> Yours truly, <br><br> The Mother Earth Guardians: <br> Sabina Andersson, Elin Arntén, Sara Lindqvist, <br>Rosanna Pistone and William Saar';
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

    public playerName() {
    }

    public update() {
       
    }

    public draw() {
      
    }
}