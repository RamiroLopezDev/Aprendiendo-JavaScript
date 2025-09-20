//1- Crea una clase que reciba 2 propiedades.
class Ropa {
    constructor(tipo, talla, color) {
        this.tipo = tipo;
        this.color = color;
    }
}

//2- Añade un método a la clase que utilice las propiedades.
Ropa.prototype.descripcion = function() { //Se agrega función para describir la clase Ropa
    return `Esta prenda es un/a ${this.tipo} de color ${this.color}.`;
}
let prenda1 = new Ropa("Camiseta", "M", "Azul"); //Creación de una instancia de la clase Ropa

//3- Muestra los valores de las propiedades e invoca a la función.
console.log(`Tipo: ${prenda1.tipo}, Color: ${prenda1.color}`);
console.log(prenda1.descripcion());

//4- Añade un método estático a la primera clase.
Ropa.categoria = function() { //Método estático que describe la categoría de ropa
    return "Ropa de moda";
}

//5- Haz uso del método estático.
console.log(Ropa.categoria()); //Invocación del método estático

//6- Crea una clase que haga uso de herencia.
class Pantalon extends Ropa { //La clase Pantalon hereda de la clase Ropa
    constructor(talla, color, tipo) {
        super("Pantalón", talla, color); //Llama al constructor de la clase padre (Ropa)
        this.tipo = tipo; //Tipo de pantalón (jeans, chándal, etc.)
    }
    descripcion() {
        return `Este pantalón es un ${this.tipo} de color ${this.color}.`;
    }
}

let pantalon1 = new Pantalon("L", "Blanco", "Jeans"); //Creación de una instancia de la clase Pantalon
console.log(pantalon1);
console.log(pantalon1.descripcion()); //Uso del método heredado de la clase Ropa

//7- Crea una clase que haga uso de getters y setters.
class CuentaBancaria{
    #saldo; //Propiedad privada
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial; //Saldo inicial privado
    }
    get saldo (){
        return this.#saldo; //Getter para obtener el saldo
    }
    set saldo (cantidad){
        if(cantidad >= 0){
            this.#saldo = cantidad; //Setter para modificar el saldo
        } else {
            console.log("El saldo no puede ser negativo");
        }
    }
}

//8- Modifica la clase con getters y setters para que use propiedades privadas.
let cuenta1 = new CuentaBancaria("Ramiro", 1000); //Creación de una instancia de la clase CuentaBancaria
console.log(cuenta1);
console.log(cuenta1.saldo); //Uso del getter para obtener el saldo
cuenta1.saldo = 1500; //Uso del setter para modificar el saldo
console.log(cuenta1.saldo);
let cuenta2 = new CuentaBancaria("Gonzalo", 2000); //Creación de otra instancia de la clase CuentaBancaria
cuenta1.saldo = -200; //Intento de establecer un saldo negativo
console.log(cuenta2.saldo); //El saldo no cambia porque el setter no lo permite

//9- Utiliza los gets y sets y muestra sus valores.
console.log(`Titular: ${cuenta1.titular}, Saldo: ${cuenta1.saldo}`); //Muestra el titular y saldo de la cuenta
console.log(`Titular: ${cuenta2.titular}, Saldo: ${cuenta2.saldo}`); //Muestra el titular y saldo de la cuenta

//10- Sobreescribe un método de una clase que utilice herencia.
class Mesa{
    constructor(material, color){
        this.material = material;
        this.color = color;
    }
    descripcion(){
        return `Esta mesa es de ${this.material} y de color ${this.color}.`;
    }
}
class MesaRatonera extends Mesa{
    constructor(material, color, forma){
        super(material, color); //Llama al constructor de la clase padre (Mesa)
        this.forma = forma; //Forma de la mesa ratonera (redonda, cuadrada, etc.)
    }
    descripcion(){ //Sobrescribe el método descripcion de la clase Mesa
        return `Esta mesa ratonera es de ${this.material}, de color ${this.color} y tiene forma ${this.forma}.`;
    }
}
let mesa1 = new Mesa("Madera", "Marrón"); //Creación de una instancia de la clase Mesa
console.log(mesa1.descripcion());
let mesaRatonera1 = new MesaRatonera("Vidrio", "Transparente", "Redonda"); //Creación de una instancia de la clase MesaRatonera
console.log(mesaRatonera1.descripcion()); //Uso del método sobrescrito