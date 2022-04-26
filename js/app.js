//console.log("Hello World!");

function computerPlay() {
  const posiblesManos = ["piedra", "papel", "tijera"];
  const random = Math.floor(Math.random() * 3);
  return `${posiblesManos[random]}`;
}

//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
  // your code here!
  console.log(`player: ${playerSelection}`);
  console.log(`computer: ${computerSelection}`);
  
  if (playerSelection === computerSelection) return `empate`;

  switch (computerSelection) {
    case "piedra":
      if (playerSelection === "tijera") {
        return ("computer");
      } else {
        return ("player");
      }
    case "papel":
      if (playerSelection === "piedra") {
        return ("computer");
      } else {
        return ("player");
      }
    case "tijera":
      if (playerSelection === "papel") {
        return ("computer");
      } else {
        return ("player");
      }
  }
}

//const playerSelection = "piedra".toLowerCase();
const playerSelection = computerPlay().toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
