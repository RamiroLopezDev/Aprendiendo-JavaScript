//EJERCICIOS DE ESTRUCTURAS DE DATOS

//1. Crea un array que almacene cinco animales diferentes y muestra por consola el tercer animal del array.
let animales = ["León", "Cocodrilo", "Serpiente", "Jabalí", "Mono"]; //Declaración del array con cinco animales
console.log(animales[2]); // Muestra el tercer animal

//2. Añade dos animales más, uno al principio y otro al final del array, y muestra el array completo por consola.
animales.push("Perro"); // Añado Perro al final del array
animales.unshift("Gato") // Añado Gato al principio del array
console.log(animales); // Muestra el array completo

//3. Elimina el animal que se encuentra en la tercera posición y muestra el array resultante por consola.
animales.splice(3,1) // Elimina el animal en la tercera posición (índice 3)
console.log(animales) // Muestra el array resultante

//4. Crea un set que almacene cinco libros diferentes y muestra por consola el número total de libros en el set.
let libros = new Set(["El Señor de los Anillos: La Comunidad del Anillo", "Harry Potter y el Cáliz de Fuego", "El Principito", "Las Crónicas de Narnia: El León, la Bruja y el Ropero", "El Silmarillion"]); // Crea un set con cinco libros
console.log(libros.size); // Muestra el número total de libros en el set

//5. Añade dos libros más al set (uno de ellos repetido) y muestra el set completo por consola.
libros.add("La Biblia", "El Principito"); // Añade dos libros al set, uno de ellos repetido
console.log(libros); // Muestra el set completo

//6. Elimina un libro del set y muestra el set resultante por consola.
libros.delete("El Silmarillion") // Elimina un libro del set
console.log(libros) // Muestra el set resultante

//7. Crea un mapa que asocie el número del mes (del 1 al 12) con el nombre del mes correspondiente y muestra por consola el nombre del mes de tu cumpleaños.
let mes = new Map([])
mes = new Map([
  [1,"Enero"],
  [2,"Febrero"],
  [3,"Marzo"],
  [4,"Abril"],
  [5,"Mayo"],
  [6,"Junio"],
  [7,"Julio"],
  [8,"Agosto"],
  [9,"Septiembre"],
  [10,"Octubre"],
  [11,"Noviembre"],
  [12,"Diciembre"]
]); // Crea un mapa con los meses del año
console.log(mes.get(9)); // Muestra el nombre del mes de septiembre (mes 9)

//8. Comprueba si el número 5 existe en el map y muestra un mensaje indicando si existe o no.
mes.has(5); // Comprueba si el número 5 existe en el map
if (mes.has(5)) {
    console.log("El número 5 existe en el map")}
else {
    console.log("El número 5 no existe en el map.")}; // Muestra un mensaje indicando si el número 5 existe o no

//9. Añade al map una clave con un array (que almacene los meses de verano) y muestra el map completo por consola.
mes.set("verano", ["Noviembre","Diciembre","Enero"]);
console.log(mes); // Muestra el map completo con la nueva clave y su array de meses de verano

//10. Crea un Array, transformalo a un Set y almacenalo en un Map.
myArray = ["Array de Ejemplo"]; // Crea un array de ejemplo
console.log(myArray); // Muestra el array de ejemplo
let mySet = new Set(myArray); // Convierte el array a un set
console.log(mySet); // Muestra el set creado a partir del array
let myMap = new Map([
  [mySet],
]); // Almacena el set en un map
console.log(myMap) // Muestra el map que contiene el set