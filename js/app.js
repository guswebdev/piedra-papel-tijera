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

function game() {
  let contador = 1;
  let winsPlayer = 0;
  let winsComputer = 0;

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

  if (winsPlayer === winsComputer) {
    return `Ha sido un empate`.toUpperCase();
  } else if (winsPlayer > winsComputer) {
    return `El ganador es Player`.toUpperCase();
  } else {
    return `El ganador es Computer`.toUpperCase();
  }
}

console.log(game());
