console.log('process.argv', process.argv)
let myArgv = process.argv.slice(2);
const numero1 = Number(myArgv[0]);
//Ejercicio 1 Clase 3
function sumatoria(n){
    let operacion = (n*(n+1)/2)
    console.log(operacion);
         }
sumatoria(numero1);