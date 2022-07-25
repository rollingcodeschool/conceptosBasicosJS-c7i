// que simule el lanzamiento de dos dados  Math.random para obtener números aleatorios entre 1 y 6
//Sumar el resultado de lanzar dos dados y anotar en un array 50 veces
//mostrar con que frecuencia aparecen los resultados

// let dado1 = Math.floor(Math.random()* (max - min + 1)+min);

let sumas= [];
let pruebaDado1= [];
let pruebaDado2= [];

for(let i=0; i < 50; i++){
    let dado1 = Math.floor(Math.random()* (6 - 1 + 1)+1);
    let dado2 = Math.floor(Math.random()* (6 - 1 + 1)+1);
    let resultado = dado1 +dado2;
    pruebaDado1.push(dado1);
    pruebaDado2.push(dado2);
    sumas.push(resultado)
}

document.write('<br>Resultado de las pruebaDado1: '+pruebaDado1);
document.write('<br>Resultado de las pruebaDado2: '+pruebaDado2);
document.write('<br>Resultado de las sumas: '+sumas);

document.write(`<table>
<thead>
    <tr>
        <th>Resultado</th>
        <th>Frecuencia</th>
    </tr>
</thead>
<tbody>`);

for(let i = 2; i <= 12; i++){
    document.write(`<tr>`);
    //recorrer el arreglo de sumas y verificar cuantas veces aparece el valor que esta en la variable i, por ej i=2;
    let contador = 0;
    for(let posicion = 0; posicion < sumas.length; posicion++){
        if( i === sumas[posicion]){
            //contar cuantas veces aparecio x valor
            contador++;
        }
    }
    document.write(`<td>${i}</td><td>${contador}</td>`);
    document.write(`</tr>`);
}
document.write(`</tbody></table>`);
