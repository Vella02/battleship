import { player } from "./players";
import { computerPlayer } from "./computer";
import "./style.css";

import { createGrid } from "./dom";

export function game() {
  const playerOne = player();
  const com = computerPlayer();

  createGrid(10, "player");
  createGrid(10, "computer");

  let isHumanTurn = true;

  function turnController() {
    if (isHumanTurn) {
    }
  }

  function computerTurn() {
    let x, y;
    x = Math.floor(Math.random() * playerOne.playerBoard.board.length);
    y = Math.floor(Math.random() * playerOne.playerBoard.board.length);
    if (!playerOne.playerBoard.receiveAttack([x, y])) {
      console.log("missed: computer cords:" + x + y);
      isHumanTurn = true;
      turnController();
    } else {
      console.log("hit: computer cords:" + x + y);
      isHumanTurn = true;
      turnController();
    }
  }

  return { turnController };
}
