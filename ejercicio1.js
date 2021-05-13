console.log('process.argv', process.argv)

let myArgv = process.argv.slice(2);
console.log('MyArgv', myArgv)

const numero1 = Number(myArgv[0])
const numero2 = Number(myArgv[1])
const numero3 = Number(myArgv[2])

const resultado = numero1 + numero2 + numero3
console.log(`El resultado es ${resultado} `)

// Ejercicio 1

// Ejercicio 2
let a = 1
let b = 24
let c = 42
Math.max(a,b,c)
// Ejercicio 3
function prom() {
    const resultado = (70 + 60 + 85 )/3;
    console.log(resultado)
}
prom()
// Ejercicio 4
let num = -10
if(num < 0){
    console.log('El numero es Negativo')
}else{
    console.log('El numero es Positivo')
}