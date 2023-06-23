const readlineSync = require('readline-sync');
const numMes=readlineSync.question('Ingrese un numero del 1 al 12: ');

let mesNombre = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
let mes = mesNombre[numMes - 1];
let cantidadDeDias;

if(numMes == 2){
    cantidadDeDias = 28;
} else if(numMes == 4 || numMes == 6 || numMes == 9 || numMes == 11){
    cantidadDeDias = 30;
} else {
    cantidadDeDias = 31;
}

console.log("La cantidad de dias del mes de %s es %i",mes,cantidadDeDias);