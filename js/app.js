const d = document;
let contJugador = 0;
let contMaquina = 0;
const $mensaje = d.querySelector(`[data-mensaje]`);
const $ganador = d.querySelector(`[data-ganador]`);
const $botones = d.querySelectorAll(`[data-mano]`);
const $contJugador = d.querySelector(`[data-contador-jugador]`);
const $contComputer = d.querySelector(`[data-contador-computer]`);


const terminarJuego = (ganador) => {
  $ganador.textContent = ganador;

  $botones.forEach(el => {
    el.setAttribute("disabled","true")
  })

}

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

const tomarOpcionMaquina = () => Math.round(Math.random()*2);

const jugarRonda = (manoJugador, manoMaquina,mensaje) => {
  
  
  if(manoJugador === manoMaquina){
    
    $mensaje.textContent = `empate, vamos de nuevo!`;
  } else {
    if(manoJugador == 0 && manoMaquina == 1){
      
      $mensaje.textContent = `Papel le gana a piedra`;
      contMaquina++;
    } else if(manoJugador == 0 && manoMaquina == 2) {
    
      $mensaje.textContent = `Piedra le gana a tijera`;
      contJugador++;
    }

    if(manoJugador == 1 && manoMaquina == 0){
      
      $mensaje.textContent = `Papel le gana a piedra`;
      contJugador++;
    } else if(manoJugador == 1 && manoMaquina == 2) {
      
      $mensaje.textContent = `Tijera le gana a papel`;
      contMaquina++;
      
    }

    if(manoJugador == 2 && manoMaquina == 0){
      
      $mensaje.textContent = `Piedra le gana a tijera`;
      contMaquina++;
    } else if(manoJugador == 2 && manoMaquina == 1) {
      
      $mensaje.textContent = `Tijera le gana a papel`;
      contJugador++;
    }

    $contJugador.textContent = `${contJugador}`;
    $contComputer.textContent = `${contMaquina}`

    if(contJugador == 5){
      terminarJuego("Jugador");
    } else if(contMaquina == 5){
      terminarJuego("Computer")
    }
  }
  
}

const reset = () => {
  $botones.forEach(el => {
    el.removeAttribute("disabled");
    contJugador=0;
    contMaquina=0;
    $contJugador.textContent = `0`;
  $contComputer.textContent = `0`;
  $ganador.textContent = `-`;
  })
}

d.addEventListener("click",(e)=> {

  if(e.target.dataset.mano == "piedra" || e.target.dataset.mano == "papel" || e.target.dataset.mano == "tijera"){
    jugarRonda(convertirJugada(e.target.dataset.mano),tomarOpcionMaquina(),$mensaje)
  }

  if(e.target.dataset.reset == "reset"){
    reset()
  }
})


