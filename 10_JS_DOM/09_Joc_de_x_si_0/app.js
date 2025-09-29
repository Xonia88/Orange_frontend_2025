// Tic-tac-toe game - starter code
// TODO: Implement the game logic

let jucatorulCurent = "X";
let tabla = ["", "", "", "", "", "", "", "", ""];
let esteJoculInDesfasurare = true;

// TODO: Add your game implementation here
const celule = document.querySelectorAll(".cell");
const mesajDeStatus = document.querySelector("#status");
const butonResetare = document.querySelector("#reset");

const combinatiiCastigatoare = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i <= celule.length - 1; i++) {
  celule[i].addEventListener("click", gestioneazaClickPeCelula);
}

function gestioneazaClickPeCelula(e) {}
