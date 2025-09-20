//1- Crea una excepción utilizando try-catch.
let objeto = {
    nombre: "Ramiro", 
    edad: 30,
};

try {
    console.log(objeto.apellido.toUpperCase()); //Error
}
catch (error) {
   console.log("Ha ocurrido un error: " + error.message); //Se ejecuta si hay un error
}

//2- Captura una expeción utilizando try-catch y finally.
try {
    console.log(objeto.alias.toUpperCase()); //Error
}
catch (error) {
   console.log("Ha ocurrido un error: " + error.message); //Se ejecuta si hay un error
}
finally {
    console.log("Este mensaje se muestra siempre"); //Se ejecuta siempre
}

//3- Lanza una exepción genérica.
function validarEdad(edad) {
    if (typeof edad !== "number") {
        throw new Error("La edad debe ser un numero");
    }
    if (edad < 0) {
        throw new Error("La edad no puede ser negativa");
    }
}
try {
    validarEdad("veinte"); //Error
}
catch (error) {
    console.log("Error de validacion: " + error.message);
}
try {
    validarEdad(-5); //Error
}
catch (error) {
    console.log("Error de validacion: " + error.message);
}
try {
    validarEdad(25); //No hay error
    console.log("Edad valida");
}
catch (error) {
    console.log("Error de validacion: " + error.message);
}
finally {
    console.log("Validacion de edad finalizada");
}
console.log("Programa finalizado");

//4- Crea una excepción personalizada.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validarNombre(nombre) {
    if (typeof nombre !== "string") {
        throw new ValidationError("El nombre debe ser una cadena de texto");
    }
    if (nombre.length < 3) {
        throw new ValidationError("El nombre debe tener al menos 3 caracteres");
    }
    return true;
}
try {
    validarNombre(123); //Error
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log("Error de validacion: " + error.message);
    } else {
        console.log("Error inesperado: " + error.message);
    }
}
try {
    validarNombre("Al"); //Error
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log("Error de validacion: " + error.message);
    } else {
        console.log("Error inesperado: " + error.message);
    }
}
try {
    validarNombre("Ana"); //No hay error
    console.log("Nombre valido");
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log("Error de validacion: " + error.message);
    } else {
        console.log("Error inesperado: " + error.message);
    }
}
finally {
    console.log("Validacion de nombre finalizada");
}
console.log("Programa finalizado");

//5- Lanza una excepción personalizada.
class AgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "AgeError";
    }
}
function validarEdadPersonalizada(edad) {
    if (typeof edad !== "number") {
        throw new AgeError("La edad debe ser un numero");
    }
    if (edad < 0) {
        throw new AgeError("La edad no puede ser negativa");
    }
    if (edad < 18) {
        throw new AgeError("La persona es menor de edad");
    }   
    return true;
}
try {
    validarEdadPersonalizada("veinte"); //Error
}
catch (error) {
    if (error instanceof AgeError) {
        console.log("Error de validacion: " + error.message);
    }
    else {
        console.log("Error inesperado: " + error.message);
    }
}
try {
    validarEdadPersonalizada(-5); //Error
}
catch (error) {
    if (error instanceof AgeError) {
        console.log("Error de validacion: " + error.message);
    }
    else {
        console.log("Error inesperado: " + error.message);
    }
}
try {
    validarEdadPersonalizada(16); //Error
}
catch (error) {
    if (error instanceof AgeError) {
        console.log("Error de validacion: " + error.message);
    }
    else {
        console.log("Error inesperado: " + error.message);
    }
}
try {
    validarEdadPersonalizada(25); //No hay error
    console.log("Edad valida");
}
catch (error) {
    if (error instanceof AgeError) {
        console.log("Error de validacion: " + error.message);
    }
    else {
        console.log("Error inesperado: " + error.message);
    }
}
finally {
    console.log("Validacion de edad finalizada");
}
console.log("Programa finalizado");

//6- Lanza varias excepciones según una lógica definida.
function validarUsuario(usuario) {
    if (typeof usuario.nombre !== "string" || usuario.nombre.length < 3) {
        throw new ValidationError("El nombre debe ser una cadena de texto con al menos 3 caracteres");
    }
    if (typeof usuario.edad !== "number" || usuario.edad < 0) {
        throw new AgeError("La edad debe ser un numero positivo");
    }
    if (usuario.edad < 18) {
        throw new AgeError("El usuario es menor de edad");
    }
    return true;
}

try {
    validarUsuario({nombre: "Al", edad: 25}); //Error de validacion
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log("Error de validacion: " + error.message);
    }
    else if (error instanceof AgeError) {
        console.log("Error de edad: " + error.message);
    }
    else {
        console.log("Error inesperado: " + error.message);
    }
}
try {
    validarUsuario({nombre: "Ana", edad: -5}); //Error de edad
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log("Error de validacion: " + error.message);
    }
    else if (error instanceof AgeError) {
        console.log("Error de edad: " + error.message);
    }
    else {
        console.log("Error inesperado: " + error.message);
    }
}
try {
    validarUsuario({nombre: "Luis", edad: 16}); //Error de edad
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log("Error de validacion: " + error.message);
    }
    else if (error instanceof AgeError) {
        console.log("Error de edad: " + error.message);
    }
    else {
        console.log("Error inesperado: " + error.message);
    }
}
try {
    validarUsuario({nombre: "Carlos", edad: 30}); //No hay error
    console.log("Usuario valido");
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log("Error de validacion: " + error.message);
    }
    else if (error instanceof AgeError) {
        console.log("Error de edad: " + error.message);
    }
    else {
        console.log("Error inesperado: " + error.message);
    }
}
finally {
    console.log("Validacion de usuario finalizada");
}
console.log("Programa finalizado");

//7- Captura varias excepciones en un mismo try-catch.
try {
    validarUsuario({nombre: "Al", edad: 25}); //Error de validacion
    validarUsuario({nombre: "Ana", edad: -5}); //Error de edad
    validarUsuario({nombre: "Luis", edad: 16}); //Error de edad
    validarUsuario({nombre: "Carlos", edad: 30}); //No hay error
    console.log("Usuario valido");
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log("Error de validacion: " + error.message);
    }
    else if (error instanceof AgeError) {
        console.log("Error de edad: " + error.message);
    }
    else {
        console.log("Error inesperado: " + error.message);
    }
}
finally {
    console.log("Validacion de usuario finalizada");
}
console.log("Programa finalizado");

//8- Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.
let valores = ["10.5", "20.3", "abc", "30.1", "def", "40.2"];
for (let i = 0; i < valores.length; i++) {
    try {
        let numero = parseFloat(valores[i]);//Puede generar NaN
        if (isNaN(numero)) {
            throw new Error("El valor no es un numero: " + valores[i]);//Lanza una excepcion personalizada
        }
        console.log("Numero valido: " + numero);
    }
    catch (error) {
        console.log("Error al convertir el valor: " + error.message);//Captura el error y muestra el mensaje
    }
}

//9- Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada.
let objeto2 = {nombre: "Carlos", edad: 22};
function verificarPropiedad(obj, prop) { //Verifica si el objeto tiene la propiedad
    if (!obj.hasOwnProperty(prop)) { //Si el objeto no tiene la propiedad
        throw new Error("El objeto no tiene la propiedad: " + prop); //Lanza una excepcion personalizada
    }
    return true; //Si el objeto tiene la propiedad, retorna true
}
try {
    verificarPropiedad(objeto2, "nombre"); //No hay error
    console.log("El objeto tiene la propiedad 'nombre'"); //Se ejecuta si no hay error
}
catch (error) {
    console.log("Error: " + error.message); //No se ejecuta
}
try {
    verificarPropiedad(objeto2, "apellido"); //Error
}
catch (error) {
    console.log("Error: " + error.message);
}

//10- Crea una función que realice reintentos en caso de error hasta un máximo de 10 intentos.
function funcionConError() { //Funcion que puede generar un error aleatorio
    if (Math.random() < 0.7) { //70% de probabilidad de error
        throw new Error("Error aleatorio"); //Lanza una excepcion
    }
    return "Funcion ejecutada correctamente"; //Si no hay error, retorna un mensaje
}
function ejecutarConReintentos(maxIntentos) { //Funcion que ejecuta la funcion con reintentos
    let intentos = 0; //Contador de intentos
    while (intentos < maxIntentos) { //Mientras no se alcance el maximo de intentos
        try {
            let resultado = funcionConError(); //Intenta ejecutar la funcion
            console.log(resultado); //Si no hay error, muestra el resultado
            return; //Sale de la funcion
        }
        catch (error) {
            intentos++; //Incrementa el contador de intentos
            console.log("Intento " + intentos + " fallido: " + error.message); //Muestra el error
        }
    }
    console.log("Se alcanzó el máximo de intentos (" + maxIntentos + ")."); //Si se alcanza el maximo de intentos, muestra un mensaje
}
ejecutarConReintentos(10); //Ejecuta la funcion con un maximo de 10 intentos
console.log("Programa finalizado");
