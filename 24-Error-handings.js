//Excepciones: Son errores que se producen durante la ejecucion del codigo
//Try: Intenta ejecutar un bloque de codigo
//Catch: Si hay un error, captura el error y ejecuta un bloque de codigo alternativo
//Finally: Siempre se ejecuta al final, haya o no haya habido un error

let objeto = {nombre: "Juan", edad: 30};
//console.log(objeto.apellido.toUpperCase()); //Error
//console.log("Este mensaje no se muestra"); //No se ejecuta

try {
    console.log(objeto.apellido.toUpperCase()); //Error
}
catch (error) {
   console.log("Ha ocurrido un error: " + error.message); //Se ejecuta si hay un error
}
finally {
    console.log("Este mensaje se muestra siempre"); //Se ejecuta siempre
}
console.log("Este mensaje si se muestra"); //Se ejecuta

//Throw: Lanza una excepcion personalizada
function validarEdad(edad) {
    if (typeof edad !== "number") {
        throw new Error("La edad debe ser un numero");
    }
    if (edad < 0) {
        throw new Error("La edad no puede ser negativa");
    }
    if (edad < 18) {
        throw new Error("La persona es menor de edad");
    }
    return true;
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
    validarEdad(16); //Error
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
