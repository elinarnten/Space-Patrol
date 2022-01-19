class TopMenu {

    constructor(gameState: GameState){
        // eventually this might not be needed
        gameState.gameState = 'start';
    }
    
    public addTopMenuContainer(){
       const topMenuContainer = document.createElement('DIV');
       document.body.appendChild(topMenuContainer);


    }

    public update(){

    }

    public draw() {
    }

}