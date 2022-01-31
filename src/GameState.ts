type GameState = "start" | "running" | "paused" | "game-over";

interface IGame {
    gameState: GameState;
} 