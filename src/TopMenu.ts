class TopMenu {
    private level: Level;

    constructor(level: Level) {
        this.level = level;
        this.addTopMenuContainer();
    }

    // creating a top menu with HTML elements
    // use TopMenu.css for styling

    public addTopMenuContainer() {
        // creating the big DIV container
        const topMenuContainer = document.createElement('DIV') as HTMLDivElement;
        topMenuContainer.id = 'topMenuContainer';
        document.body.appendChild(topMenuContainer);

        // all children-containers of the menuContainer, HTML List items

        // Level
        const levelContainer = document.createElement('LI') as HTMLLIElement;
        levelContainer.id = 'levelContainer';
        topMenuContainer.appendChild(levelContainer)

        // Score
        const scoreContainer = document.createElement('LI') as HTMLLIElement;
        scoreContainer.id = 'scoreContainer';
        topMenuContainer.appendChild(scoreContainer)

        // Lives
        const livesContainer = document.createElement('LI') as HTMLLIElement;
        livesContainer.id = 'livesContainer';
        topMenuContainer.appendChild(livesContainer)

        // Countdown timer
        const timerContainer = document.createElement('LI') as HTMLLIElement;
        timerContainer.id = 'timerContainer';
        topMenuContainer.appendChild(timerContainer)

        this.update()
    }

    public update() {
        if (frameCount % 60 !== 0) {
            return
        }

        // get all containers
        const levelContainer = document.getElementById('levelContainer')
        const scoreContainer = document.getElementById('scoreContainer')
        const livesContainer = document.getElementById('livesContainer')
        const timerContainer = document.getElementById('timerContainer')

        // make sure all containers are created
        if (!levelContainer || !scoreContainer || !livesContainer || !timerContainer) {
            return
        }

        // adds all data to containers
        const timeLeft = this.level.getTimeBaseValue()

        levelContainer.innerText = `Level: ${this.level.getCurrentLevel()}`;
        scoreContainer.innerText = `Score:${this.level.score}/${this.level.getLevelGoal()}`;
        livesContainer.innerText = `Lives: ${this.level.getAmountOfLivesLeft()} / 3`;
        timerContainer.innerHTML = `Time to destruction: <span>${timeLeft.toFixed(0)}</span>`
        
        // adds "danger class" (with red text) when it's 10 seconds left on the countdown timer.
        if (timeLeft <= 10){
            timerContainer.classList.add('danger');
        }
    }

    public draw() {
    } 
}