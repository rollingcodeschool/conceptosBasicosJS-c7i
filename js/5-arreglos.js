//crear un arreglo sin datos
let peliculas = [];

//crear un arreglo con datos;
let series = ['breaking bad', 4, 'peaky blinders', 5, true];

//mostrar el arreglo
document.write('<p>'+series+'</p>');
console.log(peliculas);

document.write('<h3>Mostrar todos los elementos del arreglo</h3>')
document.write(`<ul>`);
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write(`<li>${ series[indiceSerie] }</li>`);
}
document.write(`</ul>`);

//agregar un nuevo item al final del arreglo
series.push('El marginal');

document.write('<h3>Agregar un nuevo elemento al final del arreglo</h3>')
document.write(`<ul>`);
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write(`<li>${ series[indiceSerie] }</li>`);
}
document.write(`</ul>`);

//agregar un nuevo elemento en una posicion particular del arreglo
series.splice(3, 0, 'Stranger Thinks');
document.write('<h3>Agregar un nuevo elemento en una posicion particular del arreglo</h3>')
document.write(`<ul>`);
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write(`<li>${ series[indiceSerie] }</li>`);
}
document.write(`</ul>`);

//eliminar un elemento del arreglo de una posicion particular
series.splice(4,1); //(posicion del elemento a eliminar, cantidad de elementos a borrar)
document.write('<h3>Eliminar un elemento del arreglo de una posicion particular</h3>')
document.write(`<ol>`);
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write(`<li>${ series[indiceSerie] }</li>`);
}
document.write(`</ol>`);

//borrar todos los elementos desde una posicion
// series.splice(3);
// document.write('<h3>borrar todos los elementos desde una posicion</h3>')
// document.write(`<ul>`);
// for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
//     document.write(`<li>${ series[indiceSerie] }</li>`);
// }
// document.write(`</ul>`);

// modificar el valor de un elemento
series[4] = 'Loky';
document.write('<h3>Modificar el valor de un elemento</h3>')
document.write(`<ul>`);
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write(`<li>${ series[indiceSerie] }</li>`);
}
document.write(`</ul>`);

console.log(series.length);
console.log(series[20]);

