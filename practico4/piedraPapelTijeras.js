const readlineSync = require("readline-sync");
let jugadas = readlineSync.questionInt("Ingrese cantidad de jugadas: ");

let numAleatorio;

function obtenerJugadaComputadora() {
  numAleatorio = Math.floor(Math.random() * 3);

  if (numAleatorio === 0) {
    return "piedra";
  } else if (numAleatorio === 1) {
    return "papel";
  } else {
    return "tijera";
  }
}

let jugadaUsua;
function obtenerJugadaUsuario() {
  do {
    jugadaUsua = readlineSync.question("Elija piedra, papel o tijera: ");
    jugadaUsua.toLowerCase();
  } while (
    jugadaUsua !== "piedra" &&
    jugadaUsua !== "papel" &&
    jugadaUsua !== "tijera"
  );
  return jugadaUsua;
}

function determinarGanador(computadora, usuario) {
  if (computadora == usuario) {
    return "Empate";
  } else if (
    (computadora === "piedra" && usuario === "papel") ||
    (computadora === "papel" && usuario === "tijera") ||
    (computadora === "tijera" && usuario === "piedra")
  ) {
    return "Gana el usuario";
  } else {
    return "Gana la computadora";
  }
}

function juegoPiedraPapelTijera(jugadas) {
  let contadorUsuario = 0;
  let contadorComputadora = 0;
  let contadorEmpate = 0;

  for (let i = 0; i < jugadas; i++) {
    let computadora = obtenerJugadaComputadora();
    let usuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(computadora, usuario);

    console.log(
      "La computadora eligio: %s. El usuario eligio: %s. El resultado fue: %s",
      computadora,
      usuario,
      resultado
    );

    if (resultado === "Gana el usuario") {
      contadorUsuario++;
    } else if (resultado === "Gana la computadora") {
      contadorComputadora++;
    } else {
      contadorEmpate++;
    }
  }

  if (
    (contadorEmpate > contadorUsuario &&
      contadorEmpate > contadorComputadora) ||
    contadorComputadora === contadorUsuario
  ) {
    console.log("El resultado final es: Empate");
  } else if (contadorUsuario > contadorComputadora) {
    console.log("El resultado final es: Gana el usuario");
  } else {
    console.log("El resultado final es: Gana la computadora");
  }
}
juegoPiedraPapelTijera(jugadas);
