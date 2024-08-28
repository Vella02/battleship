import { gameBoard } from "./gameboard";
import { ship } from "./ship";
import { player } from "./players";
import { computerPlayer } from "./computer";
import "./style.css";

import { createGrid } from "./dom";

createGrid(10, "player");
createGrid(10, "computer");
// import { game } from "./controller";

const playerOne = player();
const com = computerPlayer();

// const computerBoard = document.getElementById("computers-board");
// const playerBoard = document.getElementById("#player-board");

// let currentPlayer = "player";

//const theGame = game();
