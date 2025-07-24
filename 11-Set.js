//ESTRUCTURA DE DATOS SET
//Los sets se utilizan como estructuras de datos para construir un almacén de datos utilizando un array como argumento. Los sets no permiten elementos duplicados.

//Declaración de un set

let mySet = new Set([]); //Se declara un set vacío utilizando el constructor Set con corchetes.
mySet = new Set(["Ramiro", "Martín", "López", 31, "ramiro.lopez.lotr@gmail.com"]); //Otra forma de declarar un set con elementos

//Métodos comunes de los sets

//Add: Añade un elemento al set.
mySet.add("World of Warcraft"); //Añade un nuevo elemento al set.
console.log(mySet); //Imprime el set con el nuevo elemento añadido.

//Delete: Elimina un elemento del set.
mySet.delete("World of Warcraft"); //Elimina el elemento "World of Warcraft" del set.
console.log(mySet.delete("World of Wacraft")); //Imprime el set después de eliminar el elemento.

//Has: Comprueba si un elemento está presente en el set.
console.log(mySet.has("Ramiro")); //Devuelve true si "Ramiro" está en el set, false en caso contrario.
console.log(mySet.has("World of Warcraft")); //Devuelve false porque "World of Warcraft" fue eliminado.

//Size: Devuelve el número de elementos en el set.
console.log(mySet.size); //Imprime el número de elementos en el set.

//From: Crea un array a partir de un set.
let myArray = Array.from(mySet); //Convierte el set en un array.
console.log(myArray); //Imprime el array creado a partir del set.

//Crear un set a partir de un array
let myNewSet = new Set(myArray); //Convierte el array en un set.
console.log(myNewSet); //Imprime el set creado a partir del array.

//Clear: Elimina todos los elementos del set.
myNewSet.clear(); //Elimina todos los elementos del set.
console.log(mySet); //Imprime el set después de eliminar todos los elementos.
