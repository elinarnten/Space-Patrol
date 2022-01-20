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
        topMenuContainer.id = 'topMenuContainer';
        document.body.appendChild(topMenuContainer);

        // all children of the menuContainer, loop later, make LI
        const levelContainer = document.createElement('DIV') as HTMLDivElement;
        levelContainer.id = 'levelContainer';
        topMenuContainer.appendChild(levelContainer)

        const scoreContainer = document.createElement('DIV') as HTMLDivElement;
        scoreContainer.id = 'scoreContainer';
        topMenuContainer.appendChild(scoreContainer)

        const livesContainer = document.createElement('DIV') as HTMLDivElement;
        livesContainer.id = 'livesContainer';
        topMenuContainer.appendChild(livesContainer)

        const timerContainer = document.createElement('DIV') as HTMLDivElement;
        timerContainer.id = 'timerContainer';
        topMenuContainer.appendChild(timerContainer)

        this.update()
    }

    public update() {
        if (frameCount % 60 !== 0) {
            return
        }

        const levelContainer = document.getElementById('levelContainer')
        const scoreContainer = document.getElementById('scoreContainer')
        const livesContainer = document.getElementById('livesContainer')
        const timerContainer = document.getElementById('timerContainer')

        if (!levelContainer || !scoreContainer || !livesContainer || !timerContainer) {
            return
        }

        levelContainer.innerText = `Level: ${this.level.getCurrentLevel()}`;
        scoreContainer.innerText = `Score:${this.pointSystem.getScore()}/${this.level.getLevelGoal()}`;
        livesContainer.innerText = `Lives: ${this.level.getAmountOfLivesLeft()} / ${this.pointSystem.getBaseAmountOfLives()}`;
        // fix so if span is in "danger" (10sec left) add class danger - red text
        timerContainer.innerHTML = `Time to destruction: <span>${this.level.getTimeBaseValue()}</span>`
    }

    public draw() {
    }

}