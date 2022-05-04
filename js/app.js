const d = document;
const round = d.querySelector(".round");
const winsPlayer = d.querySelector(".winsPlayer");
const winsComputer = d.querySelector(".winsComputer");
const winsEnd = d.querySelector(".win-end");
const btnReset = d.querySelector(".btn-reset");
const bnts = d.querySelectorAll('.item-btns .btn');

let contadorRound = 0;
let contPlayer = 0;
let contComputer = 0;


function computerPlay() {
  const posiblesManos = ["piedra", "papel", "tijera"];
  const random = Math.floor(Math.random() * 3);
  return `${posiblesManos[random]}`;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return `empate`;

  switch (computerSelection) {
    case "piedra":
      return playerSelection === "tijera" ? `computer` : `player`;
    case "papel":
      return playerSelection === "piedra" ? `computer` : `player`;
    case "tijera":
      return playerSelection === "papel" ? `computer` : `player`;
  }
}

function contarPartidas(ganador) {
  ganador === `computer` ? contComputer++ : contPlayer++;
}

function mostrarPuntuacion() {
  winsPlayer.textContent = contPlayer;
  winsComputer.textContent = contComputer;
}

function mostrarGanador(ganador) {
  winsEnd.textContent = ganador.toUpperCase();
}

function mostrarGanadorFinal(ganador) {
  winsEnd.textContent = `EL GANADOR FINAL ES ${ganador.toUpperCase()}`;
}

function game(playerSelection) {
  round.textContent = contadorRound;

  const computerSelection = computerPlay();
  let ganador = playRound(playerSelection, computerSelection);

  if (ganador !== `empate`) {
    contarPartidas(ganador);
  }

  mostrarPuntuacion();
  if (contPlayer === 5 || contComputer === 5) {
    bnts.forEach(item => {
      item.setAttribute('disabled','true')
    })
    mostrarGanadorFinal(ganador);
    btnReset.classList.remove('hide');
    return;
  }
  
  mostrarGanador(ganador);
}

function resetGame() {
  contadorRound = 0;
  contPlayer = 0;
  contComputer = 0;
  btnReset.classList.add('hide');
  winsEnd.textContent = `Toca un boton para iniciar el juego`
  mostrarPuntuacion()
  round.textContent = contadorRound;
  bnts.forEach(item => {
    item.removeAttribute('disabled');
  })
}

/* DELEGACION DE EVENTO BOTONES */

const playerPlay = (e) => {
  if (e.target.matches(".item-btns .btn") || e.target.matches(".item-btns .btn *")) {
    contadorRound++;
    game(e.target.dataset.id);
  }

  if (e.target.matches(".btn-reset")) {
    resetGame();
  }
};

d.addEventListener("click", playerPlay);
