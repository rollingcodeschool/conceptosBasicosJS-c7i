//pedir texto al usuario hasta que presione cancelar
let fraseCompleta=''

while(confirm('¿Desea ingresar palabras?')){
    let textoIngresado = prompt('Ingrese una palabra');
    fraseCompleta = fraseCompleta +' - '+textoIngresado
    console.log(textoIngresado)
    console.log(fraseCompleta)
}

//una vez que cancelo muestro todo el texto separado con -
