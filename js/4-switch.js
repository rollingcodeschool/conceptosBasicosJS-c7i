// se usa cuando tenemos programas que simulan un menu y reemplaza a una serie de if anidados

let estacion = prompt('Seleccione su estacion del año preferida: 1- verano, 2- primavera, 3-otoño, 4-invierno');

// if( estacion === '1'){
//     document.write('Sushi');
// }else{
//     if(estacion === '2'){
//         document.write('Sandwich de milanesa');
//     }else if(estacion === '3'){
//         document.write('fideos con manteca y queso');
//     }else if( estacion === '4'){
//         document.write('Guiso de fideo moñito');
//     }else{
//         document.write('ingreso una opcion incorrecta');
//     }
// }

/*switch(opcion){
    case "1":
        todas las lineas de codigo
        break;
    case "2":
        todas las lineas de codigo
        break;
        .
        .
        .
    case "n":
        todas las lineas de codigo
        break;
    default:
        todas las lineas de codigo a ejecutar si no se cumplio ningun case
} */ 

switch(estacion){
    case '1':
    case 'verano':
        document.write('Sushi');
        break;
    case '2':
        document.write('Sandwich de milanesa');
        break;
    case '3':
        document.write('fideos con manteca y queso');
        break;
    case '4':
        document.write('Guiso de fideo moñito');
        break;
    default:
        document.write('ingreso una opcion incorrecta');
}