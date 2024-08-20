//import { ship } from "./ship";

export function gameboard() {
  const rows = 10;
  const columns = 10;
  const board = [];

  //   const ships = {
  //     carrier: ship(5),
  //     battleship: ship(4),
  //     destroyer: ship(3),
  //     submarine: ship(3),
  //     patrolBoat: ship(2),
  //   };

  //create the board
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push("");
    }
  }
  function getBoard() {
    return board;
  }

  //place ships
  function placeShip(array1, array2) {
    let [x1, y1] = array1;
    let [x2, y2] = array2;

    //check if valid ship coords
    if (x1 === x2 && y1 === y2) {
      throw new Error("coordinates cannot be the same");
    }

    //ships can only go up/down or left/right
    //checking if they are on same row
    if (x1 === x2) {
      if (y1 < y2) {
        for (let i = y1; i <= y2; i++) {
          if (board[x1][i] != "x") {
            board[x1][i] = "x";
          } else throw new Error("ship already exists in this location");
        }
      }
      if (y1 > y2) {
        for (let i = y1; i >= y2; i--) {
          if (board[x1][i] != "x") {
            board[x1][i] = "x";
          } else throw new Error("ship already exists in this location");
        }
      }
    }
    //logic for ship that is from left/right
    if (x1 < x2 && y1 === y2) {
      for (let i = x1; i <= x2; i++) {
        if (board[i][y1] != "x") {
          board[i][y1] = "x";
        } else throw new Error("ship already exists in this location");
      }
    }
    //logic for ship that is from right/left
    if (x1 > x2 && y1 === y2) {
      for (let i = x1; i >= x2; i--) {
        if (board[i][y1] != "x") {
          board[i][y1] = "x";
        } else throw new Error("ship already exists in this location");
      }
    }
  }

  return {
    board,
    getBoard,
    placeShip,
  };
}

const game = gameboard();
game.placeShip([2, 7], [6, 7]);
//process.stdout.write(`${JSON.stringify(game.getBoard())}\n`);
console.log(game.getBoard());
// game.placeShip([3, 0], [3, 2]);
// console.log(game.getBoard());
