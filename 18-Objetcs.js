//Objeto: Colección de propiedades y métodos

//Sintaxis de un objeto
let objeto = { // Definición del objeto
    propiedad1: "valor1", // Propiedad con su valor
    propiedad2: "valor2", // Otra propiedad
    metodo1: function() { // Método del objeto
        console.log("Este es un método"); // Acción del método
    }
}

//Ejemplo de uso
let persona = {
    nombre: "Ramiro", // Propiedad nombre
    edad: 30, // Propiedad edad
    saludar: function() { // Método saludar
        console.log("Hola, mi nombre es " + this.nombre); // Uso de 'this' para referirse a la propiedad del objeto
    }
}

//Acceder a las propiedades y métodos
console.log(persona.nombre); // Acceder a la propiedad nombre con punto
console.log(persona["edad"]); // Acceder a la propiedad edad con corchetes

//Modificación de propiedades
persona.edad = 31; // Cambiar el valor de la propiedad edad
console.log(persona.edad); // Mostrar la edad actualizada
console.log(typeof persona.edad); // Mostrar el tipo de dato de la propiedad edad: number
persona.edad = "32 años"; // Cambiar el valor de la propiedad edad y el tipo de dato a un string
console.log(persona.edad); // Mostrar la edad actualizada
console.log(typeof persona.edad); // Mostrar el tipo de dato de la propiedad edad: string

//Eliminar una propiedad
delete persona.edad; // Eliminar la propiedad edad
console.log(persona); // Mostrar el objeto sin la propiedad edad

//Agregar nueva propiedad
persona.apellido = "Lopez"; // Agregar una nueva propiedad apellido
console.log(persona); // Mostrar el objeto con la nueva propiedad

//Metodos del objeto: son funciones asociadas a un objeto
persona.saludar(); // Llamar al método saludar
console.log(typeof persona.saludar); // Mostrar el tipo de dato del método saludar (function)

//Agregar un nuevo método
persona.despedir = function() { // Nuevo método despedir
    console.log("Adiós!"); // Acción del método
}


//Anidación de objetos
let persona2 = {
    nombre: "Gonzalo",
    apellido: "Lopez",
    edad: 36,
    direccion: { // Objeto anidado
        calle: "Videla 123",
        ciudad: "Las Heras",
        mostrarDireccion: function() { // Método para mostrar la dirección
        console.log(this.calle + ", " + this.ciudad); // Acceder a las propiedades del objeto anidado
        }
    }
}

//Acceder a propiedades del objeto anidado
console.log(persona2.direccion.calle); // Mostrar la calle
persona2.direccion.ciudad(); // Mostrar la ciudad 

//Llamar al método que muestra la dirección
persona2.direccion.mostrarDireccion(); // Mostrar la dirección completa

//Iteración sobre las propiedades de un objeto
for (let key in persona2) { // Iterar sobre las propiedades del objeto persona2
    console.log(key); // Mostrar el nombre de la propiedad
    console.log(persona2[key]); // Mostrar el valor de la propiedad
}


