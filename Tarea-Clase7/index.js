// Function
exports.fruta = function(n) {
    let seleccionFruta = false;
    let mensaje = '';
    let listaFruta = ['Manzana','Pera','Uva','Sandía','Melocotón','Piña','Mandarina','Mango'];

    for (i in listaFruta) {
        if (listaFruta[i] === n) {
            seleccionFruta = listaFruta;
        }
    }

    if(seleccionFruta === listaFruta) {
        mensaje = 'La fruta seleccionada está disponible';
    } else {
        mensaje = 'La fruta seleccionada no está disponible';
    }
    
    return mensaje;
}