class TopMenu {

    private level: Level;


    constructor(level: Level) {
        this.level = level;
        this.addTopMenuContainer();
    }


    public addTopMenuContainer() {
        const topMenuContainer = document.createElement('DIV') as HTMLDivElement;
        topMenuContainer.id = 'topMenuContainer';
        document.body.appendChild(topMenuContainer);

        // all children of the menuContainer, loop later, make LI
        const levelContainer = document.createElement('SPAN') as HTMLSpanElement;
        levelContainer.id = 'levelContainer';
        topMenuContainer.appendChild(levelContainer)

        const scoreContainer = document.createElement('SPAN') as HTMLSpanElement;
        scoreContainer.id = 'scoreContainer';
        topMenuContainer.appendChild(scoreContainer)

        const livesContainer = document.createElement('DIV') as HTMLSpanElement;
        livesContainer.id = 'livesContainer';
        topMenuContainer.appendChild(livesContainer)

        const timerContainer = document.createElement('DIV') as HTMLSpanElement;
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

        const timeLeft = this.level.getTimeBaseValue()

        levelContainer.innerText = `Level: ${this.level.getCurrentLevel()}`;
        scoreContainer.innerText = `Score:${this.level.score}/${this.level.getLevelGoal()}`;
        livesContainer.innerText = `Lives: ${this.level.getAmountOfLivesLeft()} / 3`;
        timerContainer.innerHTML = `Time to destruction: <span>${timeLeft.toFixed(0)}</span>`
        if (timeLeft <= 10){
            timerContainer.classList.add('danger');
        }

    }

    public draw() {
    } 

}