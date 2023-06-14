let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

//Ejercicio a
let tamañoDeCita;
tamañoDeCita = cita.length;
console.log("El tamaño de cita es: " + tamañoDeCita);

//Ejercicio b
let indice = cita.indexOf(substring);
console.log("El indice del substring es: " + indice);

//Ejercicio c
let citaRevisada;
citaRevisada = cita.slice(0,31);
console.log(citaRevisada)