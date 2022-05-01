const d = document;

function computerPlay() {
  const posiblesManos = ["piedra", "papel", "tijera"];
  const random = Math.floor(Math.random() * 3);
  return `${posiblesManos[random]}`;
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  console.log(`player: ${playerSelection}`);
  console.log(`computer: ${computerSelection}`);

  if (playerSelection === computerSelection) return `empate`;

  switch (computerSelection) {
    case "piedra":
      if (playerSelection === "tijera") {
        return "computer";
      } else {
        return "player";
      }
    case "papel":
      if (playerSelection === "piedra") {
        return "computer";
      } else {
        return "player";
      }
    case "tijera":
      if (playerSelection === "papel") {
        return "computer";
      } else {
        return "player";
      }
  }
}

function game(playerSelection) {
  let contador = 1;
  let winsPlayer = 0;
  let winsComputer = 0;

  const juego = {
      name: 'player',
      play: 'piedra',
      wins: 0
  }

  const winText = d.querySelector(".win");

  console.log(`---------- Ronda ${contador} -------------`);

  const computerSelection = computerPlay();
  let ganador = playRound(playerSelection, computerSelection);
  console.log(ganador);
  winText.textContent = ganador;
  if (ganador === "computer") {
    winsComputer++;
  } else if (ganador === "player") {
    winsPlayer++;
  }

  /*
  while (contador <= 5) {
    console.log(`---------- Ronda ${contador} -------------`);
    const playerSelection = prompt(
      `Ingrese piedra, papel o tijera`
    ).toLowerCase();
    const computerSelection = computerPlay();
    let ganador = playRound(playerSelection, computerSelection);
    console.log(ganador);
    if (ganador === "computer") {
      winsComputer++;
    } else if (ganador === "player") {
      winsPlayer++;
    }
    contador++;
  }
*/
  if (winsPlayer === winsComputer) {
    return `Ha sido un empate`.toUpperCase();
  } else if (winsPlayer > winsComputer) {
    return `El ganador es Player`.toUpperCase();
  } else {
    return `El ganador es Computer`.toUpperCase();
  }
}

//console.log(game());

/* DELEGACION DE EVENTO BOTONES */

const playerPlay = (e) => {
  if (e.target.matches(".btn")) {
    console.log(game(e.target.dataset.id));
  }
};

d.addEventListener("click", playerPlay);
