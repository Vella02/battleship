import { gameBoard } from "./gameboard";
import { ship } from "./ship";

const game = gameBoard();
//console.log(game.getBoard());
game.receiveAttack([6, 6]);
game.receiveAttack([7, 6]);
//console.log(game.getBoard());
game.receiveAttack([2, 7]);
game.receiveAttack([3, 7]);
game.receiveAttack([4, 7]);
game.receiveAttack([5, 7]);
game.receiveAttack([6, 7]);

game.receiveAttack([2, 4]);
game.receiveAttack([3, 4]);
game.receiveAttack([4, 4]);
game.receiveAttack([5, 4]);

game.receiveAttack([0, 7]);
game.receiveAttack([0, 8]);
game.receiveAttack([0, 9]);

game.receiveAttack([8, 1]);
game.receiveAttack([8, 2]);
game.receiveAttack([8, 3]);
