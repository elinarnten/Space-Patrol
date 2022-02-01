class LevelMenu {

    private levelMenuContainer!: HTMLDivElement;
    private level: ILevel; 

    constructor(level: ILevel) {
        this.level = level;
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
        headingLevelDiv.innerHTML = 'LEVEL IS COMPLEATED' ;
        levelContentContainer.appendChild(headingLevelDiv);

        const levelInfoDiv = document.createElement('div') as HTMLDivElement;    
        levelInfoDiv.id = 'levelInfoDiv';
        levelInfoDiv.innerHTML = `SCORE: ${score}/${goal} <br><br> LIVES LEFT: ${livesLeft} / 3`;;
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

    public timeIsOutMenu() {

    }

    public livesIsOutMenu() {
        
    }


}