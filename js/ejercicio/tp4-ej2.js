// cree un objeto "cuenta"
// propiedades:  titular con el valor "Alex",  propiedad saldo, teniendo como valor inicial 0.
// método ingresar(), extraer(), informar()

let cuenta ={
    titular: 'Alex',
    saldo: 0,
    ingresar(montoIngresar){ 
        //toda la logica para ingresar dinero
        this.saldo += montoIngresar //  this.saldo=  this.saldo+ montoIngresar;
    },
    extraer(montoExtraer){
        //toda la logica para extraer dinero de la cuenta
        if(this.saldo >= montoExtraer){
            this.saldo -= montoExtraer; // this.saldo = this.saldo - montoExtraer
        }else{
            alert('Fondos insuficientes');
        }
    },
    informar(){
        console.log(this);
        document.write(`<p>La cuenta del usuario: ${this.titular}, contiene un saldo de $${this.saldo}</p>`)
    }
}

cuenta.titular
//invocar metodo informar
cuenta.informar();

let deposito = parseFloat(prompt('Ingrese un monto'));
cuenta.ingresar(deposito);

cuenta.informar();

let montoExtraer = parseFloat(prompt('Ingrese un monto a retirar'));
cuenta.extraer(montoExtraer);

cuenta.informar();
