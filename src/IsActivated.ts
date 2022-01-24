class IsActivated {
    
}

// class IsActivated {
 
//     private hitsAsteroid: boolean; 
//     private angle: number;
//     private position: p5.Vector;
//     private beamLength: number;

//     constructor(hitsAsteroid: boolean, angle: number, position: p5.Vector)
//     {
//         this.hitsAsteroid = hitsAsteroid;
//         this.angle = angle;
//         this.position = position;
//         this.beamLength = 0;
//     }

//     public hitsAsteroidFunc(){

//     }

//     public hitsBomb(){

//     }

//     // hidden beam to first run how the other beam would go. To see position and check array.

//     // make a circle, move the circle 10px every framerate (60fps), 
//     //check every framerate if something is hit on x & y (check full array, size/2)
//     // use dist, and see if overlap
//     // get list of all hit objects from array, and look for the one with the lowest X value (ie the closest one)
//     // make explode, pop from array, add/remove points/lives
 
//     public isCollision(){
//         // push();
//         // translate(this.position.x, this.position.y);
//         // rotate(angleBeam);
//         // pop();

//         // MAYBEEE???
//         let r = 1;
//         const position = {
//             x: this.position.x + r * cos(angle),
//             y: this.position.y + r * sin(angle)
//         }

//         const hits: SpaceObject[] = []

//         // need to calculate the end position of the "hidden beam", with given angle and given start position
//         for(const spaceObject of spaceObjects){
//             const d = dist(spaceObject.position.x,spaceObject.position.y,width/2,height-40);
//             console.log(d)
//             // if (isHit){
//             //     hits.push(spaceObject)
//             // }
//         }

//         const closestSpaceObject = this.checkClosestCollision(hits, width/2, height-40)

//     }

//     public checkClosestCollision(hits: SpaceObject[], x: number, y: number){
//         const distances:number[] = hits.map(function(spaceObject){
//             const distance = dist(spaceObject.position.x, spaceObject.position.y, x, y);
//             return distance;
//         })

//         const smallestDistance = Math.min(...distances)
//         const smallestIndex = distances.indexOf(smallestDistance)

//         return hits[smallestIndex]
//     }

//     public update() {
//         this.beamLength = this.beamLength - 20;
//     }


//     public draw() {
//         this.isCollision();

//         push();
//         translate(this.position.x, this.position.y);
//         rotate(angleBeam);
//         stroke('red');
//         strokeWeight(10);
        
        
//         if(frameCount % 60 === 0 && timerValue > 0) {
//             timerValue--;
        
//         }
        
//         if(timerValue == 0) {
//             spaceBar = false;
//             this.beamLength = 0;
//         }
        
//         line(0, 0, 0, this.beamLength);
//         pop();
//         // console.log(this.position.x, this.position.y,angleBeam,this.beamLength)
//         //line(this.position.x, this.position.y, this.position.x * angleBeam, this.beamLength);
        
        
//     }
// }