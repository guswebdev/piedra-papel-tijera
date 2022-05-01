const d = document;
const round = d.querySelector(".round");
const winsPlayer = d.querySelector(".winsPlayer");
const winsComputer = d.querySelector(".winsComputer");
const winsEnd = d.querySelector(".win-end");

let contador = 1;
let limitRound = 6;
let contPlayer = 0;
let contComputer = 0;

function computerPlay() {
  const posiblesManos = ["piedra", "papel", "tijera"];
  const random = Math.floor(Math.random() * 3);
  return `${posiblesManos[random]}`;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return;

  switch (computerSelection) {
    case "piedra":
      if (playerSelection === "tijera") {
        contComputer++;
      } else {
        contPlayer++;
      }
      break;
    case "papel":
      if (playerSelection === "piedra") {
        contComputer++;
      } else {
        contPlayer++;
      }
      break;
    case "tijera":
      if (playerSelection === "papel") {
        contComputer++;
      } else {
        contPlayer++;
      }
      break;
  }
}

function game(playerSelection) {
  if (contador === limitRound) return;

  round.textContent = contador;

  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);

  winsComputer.textContent = contComputer;
  winsPlayer.textContent = contPlayer;
  /*
  if (contPlayer === contComputer) {
    winsEnd.textContent = `Ha sido un empate`.toUpperCase();
  } else if (contPlayer > contComputer) {
    winsEnd.textContent = `El ganador es Player`.toUpperCase();
  } else {
    winsEnd.textContent = `El ganador es Computer`.toUpperCase();
  }
  */
  contador++;
}

/* DELEGACION DE EVENTO BOTONES */

const playerPlay = (e) => {
  if (e.target.matches(".btn")) {
    game(e.target.dataset.id);
  }
};

d.addEventListener("click", playerPlay);
