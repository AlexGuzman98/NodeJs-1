exports.Sumar = function(a,b){
    return  a + b;
}
exports.FuncionDigitos = function(n){
    if ((n.toString().lenght) === 3) {
        console.log('Tu numero tiene 3 digitos');
    } else {
        console.log('Tu numero tiene menos de 3 digitos');
    }
}
