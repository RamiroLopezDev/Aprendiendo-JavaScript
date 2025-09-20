//1 - Crea una función que utilice error correctamente.
function mostrarError(){
    console.error("Esto es un mensaje de error.");
}
mostrarError();
// Otra forma de hacerlo:
function mostrarError2(){
    try {
        throw new Error("Esto es un mensaje de error lanzado.");
    } catch (e) {
        console.error(e.message);
    }
}
mostrarError2();

//2- Crea una función que utilice warn correctamente.
function mostrarAdvertencia(){
    console.warn("Esto es una advertencia.");
}
mostrarAdvertencia();

//3- Crea una función que utilice info correctamente.
function mostrarInfo(){
    console.info("Esto es un mensaje informativo.");    
}
mostrarInfo();

//4- Utilice table para mostrar una lista de objetos en la consola.
let listaProductos = [
    { nombre: "Manzana", precio: 1.2 },
    { nombre: "Banana", precio: 0.8 },
    { nombre: "Cereza", precio: 2.5 },
    { nombre: "Ananá", precio: 3.0 }]
console.table(listaProductos);

//5- Utilice group y groupEnd para agrupar mensajes.
console.group("Material de Enfermería:");
console.log("Guantes");
console.log("Mascarillas");
console.log("Termómetros");
console.groupEnd();

//6- Utilice time y timeEnd para medir el tiempo de ejecución de un bloque de código.
console.time("Tiempo de ejecución");
// Código a medir
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Tiempo de ejecución");

//7- Valida con assert si un número es positivo.
function validarNumeroPositivo(num){
    console.assert(num >= 0, "El número no es positivo.");
}
validarNumeroPositivo(-5);
validarNumeroPositivo(10);

//8- Utiliza count para contar cuántas veces se llama a una función.
function contarLlamadas() {
    console.count("Llamada a la función");
}
contarLlamadas();
contarLlamadas();
contarLlamadas();
console.countReset("Llamada a la función"); // Reinicia el contador
contarLlamadas();
contarLlamadas();

//9- Utiliza trace para mostrar la pila de llamadas en una función anidada.
function funcionA() {
    funcionB();
}
function funcionB() {
    funcionC();
}
function funcionC() {
    console.trace("Rastreo de la pila de llamadas");
}
funcionA();

//10- Utiliza clear para limpiar la consola.
//console.clear(); // Descomenta esta línea para limpiar la consola

