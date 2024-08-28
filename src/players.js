import { gameBoard } from "./gameboard";

export function player() {
  const playerBoard = gameBoard();

  function getPlayerBoard() {
    return playerBoard.getBoard();
  }

  playerBoard.placeShip([2, 7], [6, 7], playerBoard.ships.carrier.getName());
  playerBoard.placeShip([2, 4], [5, 4], playerBoard.ships.battleship.getName());
  playerBoard.placeShip([0, 7], [0, 9], playerBoard.ships.destroyer.getName());
  playerBoard.placeShip([8, 1], [8, 3], playerBoard.ships.submarine.getName());
  playerBoard.placeShip([6, 6], [7, 6], playerBoard.ships.patrolBoat.getName());

  //   const userDivs = document.querySelectorAll(".squareDivplayer");
  //   userDivs.forEach((div) => {
  //     div.addEventListener("click", () => {
  //       const row = parseInt(div.dataset.row);
  //       const col = parseInt(div.dataset.col);
  //       console.log(row, col);
  //       if (playerBoard.receiveAttack([row, col]) === false) {
  //         div.classList.add("miss");
  //       }
  //     });
  //   });
  return {
    playerBoard,
    getPlayerBoard,
  };
}
