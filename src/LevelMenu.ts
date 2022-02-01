class LevelMenu {

    private levelMenuContainer!: HTMLDivElement;
    private timeIsOutContainer!: HTMLDivElement;
    private livesMenuContainer!: HTMLDivElement;
    private level: ILevel; 
    private game: Game;

    constructor(level: ILevel) {
        this.level = level;
        this.game = game;
        
    }

    public openLevelMenu(score: number, goal: number, livesLeft: number) {
        //this.level.prepareForNextLevel = true;
        this.levelMenuContainer = document.createElement('div') as HTMLDivElement;
        this.levelMenuContainer.id = 'levelMenuContainer';
        document.body.appendChild(this.levelMenuContainer);

        const levelContentContainer = document.createElement('DIV') as HTMLDivElement;
        levelContentContainer.id = 'levelContentContainer';
        this.levelMenuContainer.appendChild(levelContentContainer);

        const headingLevelDiv = document.createElement('div') as HTMLDivElement;    
        headingLevelDiv.id = 'aboutLevelDiv';
        headingLevelDiv.innerHTML = 'LEVEL IS COMPLETED' ;
        levelContentContainer.appendChild(headingLevelDiv);

        const levelInfoDiv = document.createElement('div') as HTMLDivElement;    
        levelInfoDiv.id = 'levelInfoDiv';
        levelInfoDiv.innerHTML = `SCORE: ${score} / ${goal} <br><br> LIVES LEFT: ${livesLeft} / 3`;;
        levelContentContainer.appendChild(levelInfoDiv);

        const nextButton = document.createElement('button') as HTMLButtonElement;
        nextButton.id = 'nextButton';
        nextButton.innerHTML = 'NEXT';
        nextButton.addEventListener('click', () => this.goToNextLevel());
        levelContentContainer.appendChild(nextButton);
    }

    private goToNextLevel() {
        this.levelMenuContainer.remove();
        this.level.generateNextLevel();
    }

    public timeIsOutMenu(score: number, goal: number, livesLeft: number) {
        this.timeIsOutContainer = document.createElement('div') as HTMLDivElement;
        this.timeIsOutContainer.id = 'timeIsOutContainer';
        document.body.appendChild(this.timeIsOutContainer);

        const timeContentContainer = document.createElement('DIV') as HTMLDivElement;
        timeContentContainer.id = 'timeContentContainer';
        this.timeIsOutContainer.appendChild(timeContentContainer);

        const timeLevelDiv = document.createElement('div') as HTMLDivElement;    
        timeLevelDiv.id = 'timeLevelDiv';
        timeLevelDiv.innerHTML = 'GAME OVER <br> <br> TIME IS OUT' ;
        timeContentContainer.appendChild(timeLevelDiv);

        const timeInfoDiv = document.createElement('div') as HTMLDivElement;    
        timeInfoDiv.id = 'timeInfoDiv';
        timeInfoDiv.innerHTML = `SCORE: ${score} / ${goal} <br><br> LIVES LEFT: ${livesLeft} / 3`;;
        timeContentContainer.appendChild(timeInfoDiv);

        const tryAgainButton = document.createElement('button') as HTMLButtonElement;
        tryAgainButton.id = 'nextButton';
        tryAgainButton.innerHTML = 'PLAY AGAIN';
        tryAgainButton.addEventListener('click', () => location.reload());
        timeContentContainer.appendChild(tryAgainButton);
    }

    public livesIsOutMenu(score: number, goal: number, livesLeft: number) {
        this.livesMenuContainer = document.createElement('div') as HTMLDivElement;
        this.livesMenuContainer.id = 'livesMenuContainer';
        document.body.appendChild(this.livesMenuContainer);

        const livesContentContainer = document.createElement('DIV') as HTMLDivElement;
        livesContentContainer.id = 'livesContentContainer';
        this.livesMenuContainer.appendChild(livesContentContainer);

        const livesLevelDiv = document.createElement('div') as HTMLDivElement;    
        livesLevelDiv.id = 'livesLevelDiv';
        livesLevelDiv.innerHTML = 'GAME OVER <br><br> YOU GOT NO LIVES LEFT' ;
        livesContentContainer.appendChild(livesLevelDiv);

        const livesInfoDiv = document.createElement('div') as HTMLDivElement;    
        livesInfoDiv.id = 'livesInfoDiv';
        livesInfoDiv.innerHTML = `SCORE: ${score} / ${goal} <br><br> LIVES LEFT: ${livesLeft} / 3`;;
        livesContentContainer.appendChild(livesInfoDiv);

        const tryAgainButton = document.createElement('button') as HTMLButtonElement;
        tryAgainButton.id = 'tryAgainButton';
        tryAgainButton.innerHTML = 'PLAY AGAIN';
        tryAgainButton.addEventListener('click', () => location.reload());
        livesContentContainer.appendChild(tryAgainButton);
    }

    


}