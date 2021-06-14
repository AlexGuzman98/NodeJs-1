const fs = require('fs');
let path = process.cwd();

// const user = {
//     'id': 1,
//     'name': 'Alex Daniel',
//     'age': 22
// };
// const data = JSON.stringify(user);
// fs.appendFile(`${path}/holamundo.txt`,'Hola lobas\ny grupo', function(err,data){
//     if (err) 
//         return console.error(err)
//         console.log('Se ha actualizado el archivo')
// });
// fs.open(`${path}/nuevoarchivo.txt`,'w', function(err,fd){
//     if (err) 
//         return console.error(err)
        
//     fs.write(fd,'Esta es mi primera linea','utf8',function(err){
//         if (err) 
//         return console.error(err)
//     });
// });
// fs.unlink(`${path}/nuevoarchivo.txt`, function(err){
//     if (err) 
//         return console.error(err);
//         console.error('Archivo Eliminado');
// });

fs.writeFile(`${path}/personas.txt`, 'Nombre,Apellido,Edad\nOliver, Brown, 35\nJack, Murphy, 35\nCharlie, Rodriguez, 38\nGeorge, Smith, 22\nJames, Anderson, 23\nWilliam, Walsh, 25', function(err){
    if (err) 
        return console.error(err)
        console.log('Archivo Creado y Salvado')
});
fs.readFile(`${path}/disney_movies.txt`,'utf8', function(err,data){
    if (err) 
       return console.error(err)
       
        let dataList = data.split(/\r?\n/);
        for (i in dataList) {
           let list = dataList[i].split(';');
             fs.appendFile('disney_list.txt' , `Pelicula: ${list[0]}\nAño: ${list[1]}\nGenero: ${list[2]}\n \n` ,function (err) {
                 if(err)
                 return console.error(err)
             });
        }
});
