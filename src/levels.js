import Brick from "./brick.js";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, index) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 0,
          y: 0,
        };
        bricks.push(new Brick(game, position));
      }
    });
  });
}

export const level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
