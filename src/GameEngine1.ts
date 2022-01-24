class GameEngine {
    private level: Level;
    private laserBeam: LaserBeam;
    private topMenu: TopMenu;
    private pointSystem: PointSystem;

    constructor(level: Level){
        this.level = level;
        this.pointSystem = new PointSystem(3, 0)
        this.laserBeam = new LaserBeam();
        this.topMenu = new TopMenu(this.level, this.pointSystem);
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