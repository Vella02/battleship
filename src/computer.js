import { gameBoard } from "./gameboard";

export function computerPlayer() {
  const comPlayer = gameBoard();

  function getComputerBoard() {
    return comPlayer.getBoard();
  }

  comPlayer.placeShip([3, 3], [7, 3], comPlayer.ships.carrier.getName());
  comPlayer.placeShip([0, 1], [0, 4], comPlayer.ships.battleship.getName());
  comPlayer.placeShip([1, 4], [1, 6], comPlayer.ships.destroyer.getName());
  comPlayer.placeShip([2, 8], [4, 8], comPlayer.ships.submarine.getName());
  comPlayer.placeShip([8, 7], [8, 8], comPlayer.ships.patrolBoat.getName());

  return {
    comPlayer,
    getComputerBoard,
  };
}
