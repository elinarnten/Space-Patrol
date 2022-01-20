class TopMenu {

    private level: Level;
    private pointSystem: PointSystem;
    // private game: Game;


    constructor(level: Level, pointSystem: PointSystem) {
        this.level = level;
        this.pointSystem = pointSystem;
        this.addTopMenuContainer();
    }


    public addTopMenuContainer() {
        const topMenuContainer = document.createElement('DIV') as HTMLDivElement;
        topMenuContainer.id= 'topMenuContainer';
        document.body.appendChild(topMenuContainer);

        // all children of the menuContainer
        const levelContainer = document.createElement('DIV') as HTMLDivElement;
        levelContainer.id = 'levelContainer';
        levelContainer.innerText =`Level: ${this.level.getCurrentLevel()}`;
        topMenuContainer.appendChild(levelContainer)

        const scoreContainer = document.createElement('DIV') as HTMLDivElement;
        scoreContainer.id = 'scoreContainer';
        scoreContainer.innerText =`Score:${this.pointSystem.getScore()}/${this.level.getLevelGoal()}`;
        topMenuContainer.appendChild(scoreContainer)
        

        const livesContainer = document.createElement('DIV') as HTMLDivElement;
        livesContainer.id = 'livesContainer';
        livesContainer.innerText= `Lives: ${this.level.getAmountOfLivesLeft()} / ${this.pointSystem.getBaseAmountOfLives()}`;
        topMenuContainer.appendChild(livesContainer)

        const timerContainer = document.createElement('DIV') as HTMLDivElement;
        timerContainer.id = 'timerContainer';
        timerContainer.innerText = `Time to destruction:  ${this.level.getTimeBaseValue()}`
        topMenuContainer.appendChild(timerContainer)
    }

    public update() {

    }

    public draw() {
    }

}