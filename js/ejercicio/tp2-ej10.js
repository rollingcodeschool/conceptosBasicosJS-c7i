//pedir al usuario un numero de filas y columnas X
//dibujar una tabla X
//Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente ej 7X5 = de 35 al 1


let filas = parseInt(prompt('Ingrese el numero de filas'));
let columnas = parseInt(prompt('Ingrese un numero de columnas'));

console.log(filas);
console.log(columnas);

    document.write(`<table>
    <tbody>`)

    for(let inidiceFila = 0; inidiceFila < filas; inidiceFila++ ){
        document.write(`<tr>`)
        for(let indiceColumna = 0; indiceColumna < columnas; indiceColumna++){
            document.write(`<td>hola</td>`)
        }
        document.write(`</tr>`)
    }

    document.write(`
    </tbody>
    </table>`)