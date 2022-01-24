
class IsActivated {

    private hitsAsteroid: boolean;
    private angle: number;
    private startPosition: p5.Vector;
    private endPosition: p5.Vector
    private beamLength: number;
    private gameEngine: GameEngine;
    public r: number;

    constructor(hitsAsteroid: boolean, angle: number, position: p5.Vector, gameEngine: GameEngine) {
        this.hitsAsteroid = hitsAsteroid;
        this.angle = angle;
        this.startPosition = position;
        this.endPosition = position;
        this.beamLength = 0;
        this.gameEngine = gameEngine;
        this.r = 1;
    }

    public hitsAsteroidFunc() {

    }

    public hitsBomb() {

    }

    // hidden beam to first run how the other beam would go. To see position and check array.

    // make a circle, move the circle 10px every framerate (60fps), 
    //check every framerate if something is hit on x & y (check full array, size/2)
    // use dist, and see if overlap
    // get list of all hit objects from array, and look for the one with the lowest X value (ie the closest one)
    // make explode, pop from array, add/remove points/lives

    public isCollision() {
        const hits: SpaceObject[] = []

        // need to calculate the end position of the "hidden beam", with given angle and given start position
        for (const spaceObject of spaceObjects) {
            const d = dist(spaceObject.position.x, spaceObject.position.y, width / 2, height - 40);
            console.log(d)

            const isHit = this.isBeamHittingObject(spaceObject)

            if (isHit) {
                hits.push(spaceObject)
            }
        }

        const closestSpaceObject = this.checkClosestCollision(hits, width / 2, height - 40);
        return closestSpaceObject;
    }


    public isBeamHittingObject(spaceObject: SpaceObject) {
        let lengthOfBeam = (this.startPosition.x, this.startPosition.y, this.endPosition.x, this.endPosition.y);

        let dot = (((spaceObject.position.x - this.startPosition.x) *
            (this.endPosition.x - this.startPosition.x)) +
            ((spaceObject.position.y - this.startPosition.y) *
            (this.endPosition.y - this.startPosition.y))) / pow(lengthOfBeam, 2);

            let closestX = this.startPosition.x + (dot * (this.endPosition.x - this.startPosition.x));
            let closestY = this.startPosition.y + (dot * (this.endPosition.y - this.startPosition.y));
            
            let onSegment = this.linePoint(this.startPosition.x,this.startPosition.y,this.endPosition.x,this.endPosition.y, closestX,closestY);
            if (!onSegment) return false;
            
            let distance = dist(closestX, closestY, spaceObject.position.x, spaceObject.position.y);
            
            let r = 20;
            
            if (distance <= r) {
              return true;
            }
            return false;
    }


    public linePoint(x1: number, y1:number, x2:number, y2:number, px:number, py:number) {
        let d1 = dist(px, py, x1, y1);
        let d2 = dist(px, py, x2, y2);
      
        let lineLen = dist(x1, y1, x2, y2);
      
        let buffer = 0.5;
      
        if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
          return true;
        }
        return false;
      
      }

    public checkClosestCollision(hits: SpaceObject[], x: number, y: number) {
        const distances: number[] = hits.map(function (spaceObject) {
            const distance = dist(spaceObject.position.x, spaceObject.position.y, x, y);
            return distance;
        })

        const smallestDistance = Math.min(...distances)
        const smallestIndex = distances.indexOf(smallestDistance)

        return hits[smallestIndex]
    }

    public update() {
        this.beamLength = this.beamLength - 20;
    }


    public draw() {
        const isCollision = this.isCollision();

        push();
        stroke('red');
        strokeWeight(10);



        if (frameCount % 60 === 0 && this.gameEngine.deltaTime > 0) {
            this.gameEngine.deltaTime--;

        }

        if (this.gameEngine.deltaTime == 0) {
            spaceBar = false;
            this.beamLength = 0;
        }

        if (!isCollision) {
            this.r += 10;
        }
        this.endPosition = createVector(
            this.startPosition.x + this.r * cos(this.angle),
            this.startPosition.y + this.r * sin(this.angle)
        )

        console.log(this.angle)

        line(this.startPosition.x, this.startPosition.y, this.endPosition.x, this.endPosition.y);
        pop();

        console.log(this.startPosition.x, this.startPosition.y, this.endPosition.x, this.endPosition.y)

    }
}