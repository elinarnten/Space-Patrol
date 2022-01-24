class GameEngine {
    private level: Level;
    private laserBeam: LaserBeam;
    private topMenu: TopMenu;
    private pointSystem: PointSystem;
    public deltaTime: number;

    constructor() {
        this.level = new Level(120, 1, 1, 1, 20, 3);
        this.pointSystem = new PointSystem(3, 0)
        this.laserBeam = new LaserBeam(this);
        this.topMenu = new TopMenu(this.level, this.pointSystem);
        this.deltaTime = 5000;
    }
    
    public checkCollision () {
        
    }

    public update() {
        this.topMenu.update();
        this.level.update();
        this.laserBeam.update();
        // this.level.LevelCountDownTimer();
    }

    public draw() {
        // this.laserBeam.drawLaser();
        this.level.draw();
        image(images.cockpit, 0, 0, width, height);
        this.laserBeam.draw();
    }
    
}