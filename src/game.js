export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
    let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

    new InputHandler(paddle);
  }
}
