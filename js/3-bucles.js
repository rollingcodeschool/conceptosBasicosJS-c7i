/*
mientras se cumple (cierta condicion logica){
    entonces hago este codigo
}
let bandera = false
while(bandera){
    todo el codigo que quiero que se repita
    cambiar la condicion logica
}

*/

// let cantidadMates = 20;

// while(cantidadMates >= 1){
//     document.write('<br>Mates cebados: '+cantidadMates);
//     cantidadMates--; //cantidadMates = cantidadMates - 1;
// }

/* do-while, hacer... mientras (se cumple una condicion logica)

do{
    todas las lineas de codigo a ejecutar
    cambiar la condicion logica
}while(condicion logica)

*/

// let cantidadMates = 20;

// do{
//     document.write('<br>Mates cebados: N '+cantidadMates);
//     cantidadMates--; //cantidadMates = cantidadMates - 1; 
// }while(cantidadMates >= 1)

// Bucle for

/* for(inicializar una variable; condicion logica;  incrimentar o decrementar la variable creada){
    todas las lineas que quiero ejecutar
} */


for(let mates = 1; mates <= 20; mates= mates + 1){
    document.write('<br>Mates cebados: N '+mates);
}

