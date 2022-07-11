/* Estructura if

if(condicion logica){
    todas las lineas de codigo que quiero que haga mi programa cuando se cumple la condicion, o el resultado de la condicion es true
}else{
    todo el codigo que quiero ejecutar cuando la condicion no se cumple (false)
}

*/

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
console.log(numero1);
console.log(numero2);

if (numero1 > numero2) {
  document.write("El numero mas grande es el numero 1: " + numero1);
} else if (numero1 === numero2) {
  document.write("Ambos numeros son iguales, numero ingresado: " + numero1);
} else {
  document.write("El segundo numero es mayor: " + numero2);
}
