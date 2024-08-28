export function createGrid(amountOfDivs, user) {
  const board = document.querySelector("." + user + "-div");

  for (let i = 0; i < amountOfDivs; i++) {
    const horizontalDiv = document.createElement("div");
    horizontalDiv.classList.add("horizontalDiv" + user);
    board.appendChild(horizontalDiv);
    horizontalDiv.setAttribute("id", "horizontalDivs" + user + i);
  }
  createSidewayDivs(amountOfDivs, user);
}

function createSidewayDivs(amountOfDivs, user) {
  for (let i = 0; i < amountOfDivs; i++) {
    const sideDivs = document.querySelector("#horizontalDivs" + user + i);
    for (let j = 0; j < amountOfDivs; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("squareDiv" + user);
      sideDivs.appendChild(squareDiv);
      squareDiv.setAttribute("data-row", i);
      squareDiv.setAttribute("data-col", j);
    }
  }
}
