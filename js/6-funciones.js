//funcion sin parametros
function saludar(){
    //todo el codigo que quiero que tenga esta funcion
    document.write('<p>Hola mundo</p>');
};

//funciones con parametros
function saludo(nombre, apellido){
    document.write(`<p>Hola mi nombre es ${nombre}, mi apellido es ${apellido}</p>`);
}

//funciones que retornan un valor
// function convertirDolaresAPesos(dolares){
//     let precioFinal = dolares * 300;
//     return precioFinal;
// }

//arrow functions
// let convertirDolaresAPesos = (dolares) =>{
//     let precioFinal = dolares * 300;
//     return precioFinal;
// }

//arrow functions
let convertirDolaresAPesos = dolares => dolares * 300;

//invocar o llamar 
saludar();

let nombreUsuario = prompt('Ingrese un nombre');
let apellidoUsuario = prompt('Ingrese un apellido');

saludo(nombreUsuario, apellidoUsuario);

let play5 = convertirDolaresAPesos(700);
console.log(play5);
console.log(convertirDolaresAPesos(800));

document.write(`<p>Ipad Pro 12,5" $${convertirDolaresAPesos(650)} sin impuestos</p>`);




