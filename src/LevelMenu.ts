class LevelMenu {
    
    public levelMenuContainer!: HTMLDivElement;
    private level: ILevel; 

    constructor(level: ILevel) {
        this.level = level;
    } 




    public open() {
        this.level.prepareForNextLevel = true;
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
        levelInfoDiv.innerHTML = 'SCORE:' + 'LIVES:';
        levelContentContainer.appendChild(levelInfoDiv);

        const nextButton = document.createElement('button')
        nextButton.id = 'aboutButton';
        nextButton.innerHTML = 'ABOUT';
        //nextButton.addEventListener('click', () => this.level.generateNextLevel());
        this.levelMenuContainer.appendChild(nextButton);

       

    }


}