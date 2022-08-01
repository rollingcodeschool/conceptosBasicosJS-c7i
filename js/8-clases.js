//usuarios: nombre completo, email, dni, password, nombreUsuario, estado.

class Usuario {
  //un metodo que sabe construir el objeto
  constructor(nombreCompleto, email, dni, password, nombreUsuario) {
    //este metodo sabe crear las propiedades del futuro objeto
    this.nombre = nombreCompleto;
    this.email = email;
    this.dni = dni;
    this.nombreUsuario = nombreUsuario;
    this.password = password;
    this.estado = true; //propiedad por defecto
  }

  //agregar todos los metodos que consideremos necesarios
  iniciarSesion() {
    // agregar todo el codigo
  }

  cerrarSesion() {
    // agregar todo el codigo
  }

  mostrarDatos() {
    document.write(`
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Email: ${this.email}</li>
            <li>DNI: ${this.dni}</li>
            <li>Nombre de usuario: ${this.nombreUsuario}</li>
        </ul>`);
  }
  // propiedades conmutadas get y set
  set modificarNombreUsuario(nuevoNombreUsuario) {
    this.nombreUsuario = nuevoNombreUsuario;
  }

  set modificarDNI(nuevoDNI) {
    this.dni = nuevoDNI;
  }

  get mostrarNombreUsuario() {
    return this.nombreUsuario;
  }

  get mostrarDNI() {
    return this.dni;
  }
}
//usuarios: nombre completo, email, dni, password, nombreUsuario, estado.
// Alumnos: comision, curso, calificaciones, legajo, asistencia
class Alumno extends Usuario {
  constructor(
    nombreCompleto,
    email,
    dni,
    password,
    nombreUsuario,
    comision,
    curso,
    legajo
  ) {
    //invocar el constructor de la clase padre
    super(nombreCompleto, email, dni, password, nombreUsuario);
    this.comision = comision;
    this.curso = curso;
    this.calificaciones = [];
    this.legajo = legajo;
    this.asistencia = 0;
  }

  subirTareas() {
    //aqui agregar el codigo
  }

  registrarCalificacion(nota) {
    this.calificaciones.push(nota);
  }

  mostrarPromedio() {
    let cantidadNotas = this.calificaciones.length;
    let sumaNotas = 0;
    for (let i = 0; i < cantidadNotas; i++) {
      sumaNotas += this.calificaciones[i]; // sumaNotas = sumaNotas + this.calificaciones[i];
    }
    let promedio = sumaNotas / cantidadNotas;
    document.write(
      `<p>El promedio del alumno: ${this.nombre} es  ${promedio}</p>`
    );
  }

  mostrarDatosAcademicos() {
    document.write(`<h3>Datos Academicos</h3>
        <ul>
        <li>Curso: ${this.curso}</li>
        <li>Comision: ${this.comision}</li>
        <li>Legajo: ${this.legajo}</li>
        <li>Calificaciones: ${this.calificaciones}</li>
        </ul>`);
  }

  mostrarDatos() {
    document.write(`
        <h3>Datos Personales</h3>
        <hr>
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Email: ${this.email}</li>
            <li>DNI: ${this.dni}</li>
            <li>Nombre de usuario: ${this.nombreUsuario}</li>
        </ul>
        <h3>Datos Academicos</h3>
        <hr>
        <ul>
            <li>Curso: ${this.curso}</li>
            <li>Comision: ${this.comision}</li>
            <li>Legajo: ${this.legajo}</li>
            <li>Calificaciones: ${this.calificaciones}</li>
        </ul>`);
  }
  //agregar los get y set
}

// usar la clase Usuario, crear un objeto, instancia de un objeto
let luciana = new Usuario(
  "luciana soria",
  "luciana@gmail.com",
  40222333,
  "Arsfsd234%",
  "lucianaS"
);
let matias = new Usuario(
  "matias Cardoso",
  "matias@gmail.com",
  40222333,
  "Arsfsd234%",
  "lucianaS"
);

console.log(luciana);

luciana.mostrarDatos();
matias.mostrarDatos();

//usar los set
matias.modificarNombreUsuario = "matiasC";
matias.mostrarDatos();

//mostrar una propiedad con un get
// document.write(`<p>Nombre usuario: ${matias.nombreUsuario}</p>`) esto no deberia usar
document.write(`<p>Nombre usuario: ${matias.mostrarNombreUsuario}</p>`);

// crear un objeto Alumno
let Eloy = new Alumno(
  "Eloy Pintos",
  "eloy@gmail.com",
  40555663,
  "345Adf%1",
  "eloyp",
  "c7i",
  "FullStack",
  2374
);

Eloy.mostrarDatos();

Eloy.registrarCalificacion(9);
Eloy.registrarCalificacion(10);
Eloy.registrarCalificacion(8);

Eloy.mostrarPromedio();
console.log(Eloy);

Eloy.mostrarDatosAcademicos();

// usar los get y set

Eloy.modificarNombreUsuario = 'PintosEloy';
document.write(`<p>Nombre usuario: ${Eloy.mostrarNombreUsuario}</p>`);


