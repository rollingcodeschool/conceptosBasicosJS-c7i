//crear un objeto con notacion literal

let celular = {
    //propiedades -> clave: valor
    marca: 'Xiaomi',
    SO: 'Android',
    version: 11,
    color: ['plateado','negro', 'celeste metalizado'],
    bateria: {
        cargaRapida: true,
        amperes: '3500mah'
    },
    ram: ['4Gb','6Gb','8Gb','16Gb'],
    //metodos
    sacarFoto: ()=>{ document.write('<p>preparando camara...</p>')},
    llamar: function (){ document.write('<p>Llamando a una persona...</p>')}
}

//mostrar objeto
// document.write(celular); //de esta manera no mostrarmos los objetos por pantalla
console.log(celular);

document.write(`<p>Marca: ${celular.marca}</p>`);
document.write(`<p>SO: ${ celular['SO'] }</p>`);
document.write(`<p>Version: ${celular.version}</p>`);

//modificar una propiedad existente en el objeto
celular.version = 12;
document.write(`<p>Version: ${celular.version}</p>`);

//invocar un metodo
celular.llamar();
celular.llamar();
celular.sacarFoto();
