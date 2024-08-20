import { gameboard } from "./gameboard";

const game = gameboard();
game.placeShip([2, 7], [6, 7]);
console.log(game.getBoard());
