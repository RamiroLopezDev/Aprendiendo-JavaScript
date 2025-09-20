//Consola: Es una herramienta de depuración que proporciona varios métodos para mostrar información en la consola del navegador o en la terminal. Aquí hay algunos de los métodos más comunes y útiles de la consola:

// 1. console.log(): Muestra un mensaje en la consola. Es el método más comúnmente utilizado para imprimir información.
console.log("Hola, JavaScript!");

// 2. console.error(): Muestra un mensaje de error en la consola. Se utiliza para indicar que ha ocurrido un error.
console.error("Esto es un mensaje de error.");

// 3. console.warn(): Muestra un mensaje de advertencia en la consola. Se utiliza para indicar que algo podría ser problemático.
console.warn("Esto es una advertencia.");

// 4. console.info(): Muestra un mensaje informativo en la consola. Se utiliza para proporcionar información adicional.
console.info("Esto es un mensaje informativo.");

// 5. console.table(): Muestra datos tabulares en la consola. Es útil para visualizar arrays y objetos de manera estructurada.
const usuarios = [
  { nombre: "Ramiro", edad: 32 },
  { nombre: "Gonzalo", edad: 35 },
  { nombre: "Alberto", edad: 68 },
  { nombre: "Silvia", edad: 63},
];
console.table(usuarios);

// 6. console.group() y console.groupEnd(): Agrupa mensajes relacionados en la consola. Útil para organizar la salida.
console.group("Animales Domésticos:");
console.log("Perro");
console.log("Gato");
console.log("Pez");
console.groupEnd();

// 7. console.time() y console.timeEnd(): Mide el tiempo que tarda en ejecutarse un bloque de código.
console.time("Tiempo de ejecución");
// Código a medir
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Tiempo de ejecución");

// 8. console.clear(): Limpia la consola.
// console.clear(); // Descomenta esta línea para limpiar la consola

// 9. console.assert(): Muestra un mensaje de error si la condición es falsa. Útil para pruebas y depuración.
console.assert(1 === 2, "La afirmación es falsa: 1 no es igual a 2");
console.assert(1 === 1, "Esto no se mostrará porque la afirmación es verdadera.");

//10. console.count(): Cuenta el número de veces que se llama a un punto específico en el código.
function contarLlamadas() {
  console.count("Click");
}
contarLlamadas();
contarLlamadas();
contarLlamadas();
console.countReset("Click"); // Reinicia el contador
contarLlamadas();
contarLlamadas();

// 11. console.trace(): Muestra la pila de llamadas en el punto donde se llama. Útil para rastrear el flujo de ejecución.
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

//12. console.clear(): Limpia la consola.
// console.clear(); // Descomenta esta línea para limpiar la consola

// Estos son solo algunos de los métodos disponibles en la consola. Dependiendo del entorno (navegador, Node.js, etc.), puede haber otros métodos adicionales disponibles para su uso.  