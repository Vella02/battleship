export function gameboard() {
  const rows = 10;
  const columns = 10;
  const board = [];

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
  return {
    board,
    getBoard,
  };
}

// const game = gameboard();
// game.getBoard();
