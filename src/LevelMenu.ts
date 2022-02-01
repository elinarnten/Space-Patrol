class LevelMenu {
    
    private levelMenuContainer!: HTMLDivElement;
    private level: Level; 

    constructor(level: Level) {
        this.level = level;
    } 




    public openLevelMenu() {
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
        levelInfoDiv.innerHTML = `SCORE: ${this.level.score}/${this.level.getLevelGoal()} <br><br> LIVES LEFT: ${this.level.getAmountOfLivesLeft()} / 3`;;
        levelContentContainer.appendChild(levelInfoDiv);

        const nextButton = document.createElement('button') as HTMLButtonElement;
        nextButton.id = 'nextButton';
        nextButton.innerHTML = 'NEXT';
        nextButton.addEventListener('click', () => this.level.generateNextLevel());
        levelContentContainer.appendChild(nextButton);

       

    }


}