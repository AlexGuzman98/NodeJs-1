exports.Sumar = function(a,b){
    return  a + b;
}
//Ejercicio 2 clase 3

exports.FuncionDigitos = function(n){
    if ((n.toString().lenght) === 3) {
        console.log('Tu numero tiene 3 digitos');
    } else {
        console.log('Tu numero tiene menos de 3 digitos');
    }
}

//Ejercicio 3 Clase 3.
exports.Temp = function grados(num){
    if (num < 10){
        return 'Hace mucho frío'
    } else if (num >= 10  && num <= 15){
        return 'Hace poco frío'
    } else if (num >= 16  && num <= 24){
        return 'Hace una temperatura normal'
    } else if (num >= 25  && num <= 30){
        return 'Hace poco calor'
    } else if (num > 30){
        return 'Hace mucho calor'
    }
}
//Ejercicio 4 Clase 3
exports.OptionMath = function(opcion,n1,n2){
    if(opcion === 1){
        return n1+n2;
    }else if(opcion === 2){
        return n1*n2;
    }else if(opcion === 3){
        if(n1 === 0 || n2 === 0 ){
            console.log('No se puede realizar la operacion')
        }else{
            return n1/n2;
        }
    }else if(opcion === 4){
        return n1-n2;
    }else{
        console.log('Seleccion un metodo de operacion correcto')
    }
}