//Clases: Sirven para crear objetos con propiedades y métodos predefinidos
//Constructores: Son funciones especiales que se ejecutan al crear una instancia de una clase
//Instancia: Es un objeto creado a partir de una clase
//Propiedades privadas: Son propiedades que no pueden ser accedidas ni modificadas desde fuera de la clase (se definen con #)
//Getters y Setters: Permiten acceder y modificar propiedades privadas de una clase

//Ejemplo de clase vacía
class Persona { //Definición de la clase
    #usuario; //Propiedad privada
    #contraseña; //Propiedad privada
    constructor(nombre = "sin nombre", edad = "sin edad", usuario = "sin usuario", contraseña = "sin contraseña") {
        //El constructor es un método especial para inicializar objetos
        this.nombre = nombre; //this hace referencia a la instancia actual
        this.edad = edad; 
        this.#usuario = usuario;
        this.#contraseña = contraseña;
    }
    get usuario() { //Getter para acceder a la propiedad privada usuario
        return this.#usuario;
    }
    set contraseña(nuevaContraseña) { //Setter para modificar la propiedad privada contraseña
        this.#contraseña = nuevaContraseña;
    }
}

//Ejemplo
let persona1 = new Persona("Ramiro", 32,"ramiro_lpz", 1234); //Creación de una instancia de la clase Persona
let persona2 = new Persona("Silvia", 63, "silvy_89", 5643); //Otra instancia
console.log(persona1);
console.log(persona1.usuario); //Acceso a la propiedad privada usuario mediante el getter
persona1.contraseña = 4321; //Modificación de la propiedad privada contraseña mediante el setter
console.log(persona1.contraseña); //No se puede acceder directamente a la propiedad privada
console.log(persona2);


//Ejemplo de clase con método
class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }
    sonido() { //Método de la clase
        if (this.especie === "Perro") { 
            console.log("Guau Guau");
        } else if (this.especie === "Gato") {
            console.log("Miau Miau");
        } else {
            console.log("Sonido desconocido");
        }
    }
}
let animal1 = new Animal("Perro", 5, "Marrón");
let animal2 = new Animal("Gato", 3, "Blanco");
console.log(animal1);
animal1.sonido();
console.log(animal2);
animal2.sonido();
let animal3 = new Animal("Loro", 2, "Verde");
console.log(animal3);
animal3.sonido();

//Herencia: Permite crear una nueva clase basada en una clase existente
class Leon extends Animal { //La clase León hereda de la clase Animal
    constructor(edad, color, tamaño) {
        super("León", edad, color); //Llama al constructor de la clase padre (Animal)
        this.tamaño = tamaño;
    }
    sonido() { //Sobrescribe el método sonido de la clase padre
        console.log("Roar");
    }
}

let leon1 = new Leon(7, "Dorado", "Grande");
console.log(leon1);
leon1.sonido();
let animal4 = new Animal("León", 7, "Dorado");
console.log(animal4);
animal4.sonido(); //El método sonido de la clase Animal no se ve afectado por la clase León

//Método estático: Pertenece a la clase y no a las instancias
class Matematica {
    static sumar(a, b) { //Método estático
        return a + b;
    }
}

console.log(Matematica.sumar(5, 10)); //Uso del método estático sin crear una instancia de la clase
//console.log(Matematica.sumar(5, 10)); //No se puede llamar al método estático desde una instancia

//Resumen:
//Las clases permiten crear objetos con propiedades y métodos predefinidos
//El constructor inicializa las propiedades de la clase
//Las propiedades privadas no pueden ser accedidas ni modificadas desde fuera de la clase
//Los getters y setters permiten acceder y modificar propiedades privadas
//La herencia permite crear nuevas clases basadas en clases existentes
//Los métodos estáticos pertenecen a la clase y no a las instancias