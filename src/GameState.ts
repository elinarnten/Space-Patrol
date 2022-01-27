type GameState = "start" | "running" | "paused" | "game-over";

interface IGame {
    // start: boolean;
    // running: boolean;
    // paused: boolean;
    // gameOver: boolean;

    gameState: GameState;

} 