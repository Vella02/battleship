import { ship } from "./ship";

export function gameBoard() {
  const rows = 10;
  const columns = 10;
  const board = [];
  const sunkenShips = [];

  const ships = {
    carrier: ship(5, "carrier"),
    battleship: ship(4, "battleship"),
    destroyer: ship(3, "destroyer"),
    submarine: ship(3, "submarine"),
    patrolBoat: ship(2, "patrolBoat"),
  };

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
  function placeShip(array1, array2, name) {
    let [x1, y1] = array1;
    let [x2, y2] = array2;
    let initial = name.charAt(0);

    //check if valid ship coords
    if (x1 === x2 && y1 === y2) {
      throw new Error("coordinates cannot be the same");
    }

    //ships can only go up/down or left/right
    //checking if they are on same row
    if (x1 === x2) {
      if (y1 < y2) {
        for (let i = y1; i <= y2; i++) {
          if (board[x1][i] != initial) {
            board[x1][i] = initial;
          } else throw new Error("ship already exists in this location");
        }
      }
      if (y1 > y2) {
        for (let i = y1; i >= y2; i--) {
          if (board[x1][i] != initial) {
            board[x1][i] = initial;
          } else throw new Error("ship already exists in this location");
        }
      }
    }
    //logic for ship that is from left/right
    if (x1 < x2 && y1 === y2) {
      for (let i = x1; i <= x2; i++) {
        if (board[i][y1] != initial) {
          board[i][y1] = initial;
        } else throw new Error("ship already exists in this location");
      }
    }
    //logic for ship that is from right/left
    if (x1 > x2 && y1 === y2) {
      for (let i = x1; i >= x2; i--) {
        if (board[i][y1] != initial) {
          board[i][y1] = initial;
        } else throw new Error("ship already exists in this location");
      }
    }
  }

  placeShip([2, 7], [6, 7], ships.carrier.getName());
  placeShip([2, 4], [5, 4], ships.battleship.getName());
  placeShip([0, 7], [0, 9], ships.destroyer.getName());
  placeShip([8, 1], [8, 3], ships.submarine.getName());
  placeShip([6, 6], [7, 6], ships.patrolBoat.getName());

  //logic for taking attacks
  function receiveAttack(array) {
    let [x, y] = array;

    if (board[x][y] === "") {
      console.log("missed");
      board[x][y] = "x";
    }
    if (board[x][y] === "c") {
      board[x][y] = board[x][y] + "x";
      ships.carrier.hit();
      if (ships.carrier.getSunkValue() === true) {
        sunkenShips.push(ships.carrier);
        console.log(sunkenShips);
      }
    }
    if (board[x][y] === "b") {
      board[x][y] = board[x][y] + "x";
      ships.battleship.hit();
      if (ships.battleship.getSunkValue() === true) {
        sunkenShips.push(ships.battleship);
        console.log(sunkenShips);
      }
    }
    if (board[x][y] === "d") {
      board[x][y] = board[x][y] + "x";
      ships.destroyer.hit();
      if (ships.destroyer.getSunkValue() === true) {
        sunkenShips.push(ships.destroyer);
        console.log(sunkenShips);
      }
    }
    if (board[x][y] === "s") {
      board[x][y] = board[x][y] + "x";
      ships.submarine.hit();
      if (ships.submarine.getSunkValue() === true) {
        sunkenShips.push(ships.submarine);
        console.log(sunkenShips);
      }
    }
    if (board[x][y] === "p") {
      board[x][y] = board[x][y] + "x";
      ships.patrolBoat.hit();
      if (ships.patrolBoat.getSunkValue() === true) {
        sunkenShips.push(ships.patrolBoat);
        console.log(sunkenShips);
      }
    }

    if (sunkenShips.length === 5) {
      alert("all ships sunk");
    }
  }

  return {
    board,
    getBoard,
    placeShip,
    receiveAttack,
    ships,
  };
}

// const game = gameBoard();
// game.placeShip([2, 7], [6, 7]);
// //process.stdout.write(`${JSON.stringify(game.getBoard())}\n`);
// console.log(game.getBoard());
// game.placeShip([3, 0], [3, 2]);
// console.log(game.getBoard());
