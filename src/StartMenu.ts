/// <reference path='./sketch.ts'/>
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

        push();
        image(images.cockpit, 0, 0);
        filter(BLUR, 10);
        image(images.asteroid, 0, 0);
        filter(BLUR, 10);
        image(images.bomb, 0, 0);
        filter(BLUR, 10);
        pop();

    //     const startMenuContainer = document.createElement ('div') as HTMLDivElement;
    //     document.body.appendChild(startMenuContainer);
    //     startMenuContainer.style.lineHeight = '.5'
    //     startMenuContainer.style.position = 'absolute';
    //     startMenuContainer.style.top = '0';
    //     startMenuContainer.style.display = 'flex';
    //     startMenuContainer.style.flexDirection = 'column';
    //     startMenuContainer.style.justifyContent = 'center';
    //     startMenuContainer.style.alignItems = 'center';
    //     startMenuContainer.style.transform = 'translateX(50%)';
        
    //     const logoContainer = document.createElement('div') as HTMLDivElement;
    //     const logoTopText = document.createElement('h1') as HTMLHeadingElement;
    //     const logoBottomText = document.createElement('h1') as HTMLHeadingElement;
    //     logoTopText.innerHTML = 'Space';
    //     logoBottomText.innerHTML = 'Patrol';
    //     logoContainer.appendChild(logoTopText);
    //     logoContainer.appendChild(logoBottomText);
    //     startMenuContainer.appendChild(logoContainer);
    

    //     const nameInput = document.createElement('input');
    //     nameInput.classList.add('nameInput');
    //     nameInput.placeholder = 'Enter your name...';
    //     nameInput.style.color = '#FAFF00';
    //     startMenuContainer.appendChild(nameInput);
        

    //     const startGameButton = document.createElement('button');
    //     startGameButton.className = ('startGameButton');
    //     startGameButton.innerHTML = 'START GAME';
    //     startGameButton.style.fontFamily = 'russo one';
    //     startGameButton.style.color = '#FAFF00';
    //     startGameButton.style.backgroundColor = 'transparent';
    //     startGameButton.style.border = 'none';
    //     startGameButton.style.fontSize = '2rem';
    //     startGameButton.style.margin = '.5rem'; 
    //     startMenuContainer.appendChild(startGameButton);

    //     const aboutButton = document.createElement('button')
    //     aboutButton.innerHTML = 'ABOUT';
    //     aboutButton.style.fontFamily = 'russo one'
    //     aboutButton.style.color = '#FAFF00'
    //     startMenuContainer.appendChild(aboutButton);
    //     aboutButton.style.background = 'none';
    //     aboutButton.style.border = 'none';
    //     aboutButton.style.fontSize = '2rem' 
    // }

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