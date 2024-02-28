const d = document;
let contJugador = 0;
let contMaquina = 0;

const convertirJugada = (jugada) => {
  let mano = "";
  switch(jugada){
    case "piedra":
      mano = 0;
      break;
    case "papel":
      mano = 1;
      break;
    case "tijera":
      mano = 2;
      break; 
  }
  return mano;
}

const tomarOpcionMaquina = () => {
  let jugadaMaquina = Math.round(Math.random()*2);
  return jugadaMaquina;

}

const jugarRonda = (manoJugador, manoMaquina) => {
  
  
  if(manoJugador === manoMaquina){
    console.log("empate, vamos de nuevo!");
  } else {
    if(manoJugador == 0 && manoMaquina == 1){
      console.log("Papel le gana a piedra");
      contMaquina++;
    } else if(manoJugador == 0 && manoMaquina == 2) {
      console.log("Piedra le gana a tijera");
      contJugador++;
    }

    if(manoJugador == 1 && manoMaquina == 0){
      console.log("Papel le gana a piedra");
      contJugador++;
    } else if(manoJugador == 1 && manoMaquina == 2) {
      console.log("Tijera le gana a papel");
      contMaquina++;
      
    }

    if(manoJugador == 2 && manoMaquina == 0){
      console.log("Piedra le gana a tijera");
      contMaquina++;
    } else if(manoJugador == 2 && manoMaquina == 1) {
      console.log("Tijera le gana a papel");
      contJugador++;
    }
  }
  
}

const jugarJuego = () => {
  let rondas = 0;
  while (rondas < 5){
    let manoJugador = prompt(`Ingrese 'piedra','papel' o 'tijera'`).toLowerCase();
    jugarRonda(convertirJugada(manoJugador),tomarOpcionMaquina());
    rondas++;
  }
}

const mostrarGanador = () => {
if(contJugador > contMaquina){
  console.log(`El Jugador es el ganador`);
} else if(contJugador < contMaquina) {
  console.log(`La maquina es el ganador`);
} else {
  console.log(`Hubo un empate`);
}

}


jugarJuego();
mostrarGanador();
