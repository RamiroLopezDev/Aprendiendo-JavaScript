//ESTRUCTURA DE DATOS ARRAY

//Declaración de un array

let declaracionArray = ["Elemento1", "Elemento2", "Elemento3"]; //Se declara Array con 3 elementos con corchetes.
let declaracionArray2 = new Array("Elemento1", "Elemento2", "Elemento3"); // Otra forma de declarar un array pero esta vez con paréntesis y anteponiendo las palabras "new" y "array". Esta forma es menos común y se recomienda usar la primera opción con corchetes. Se utiliza más para crear arrays vacíos o con un número específico de elementos.

//Inicialización de un array vacío
let emptyArray = []; //Array vacío, se declara con corchetes sin elementos.
let emptyArray2 = new Array(); //Otra forma de declarar un array vacío.

//Ejemplo de un array con diferentes tipos de datos
let myArray = ["Ramiro", "Martín", "Lopez", 31, true, null];
console.log(myArray);
let myArray2 = new Array(3); //Crea un array con 3 posiciones vacías, pero no inicializa los valores.
console.log(myArray2); //Imprime el array con 3 posiciones vacías.

//Posiciones de un array
myArray2[1] = "Rama"; //Acceso al primer elemento del array y se cambia su valor.
myArray2[2] = "Martín"; //Acceso al segundo elemento del array y se cambia su valor.
myArray2[0] = "Cortes"; //Acceso al tercer elemento del array y se cambia su valor.
//myArray2[3] = 31; //Acceso al cuarto elemento del array, se cambia su valor y se lo transforma en comentario.
console.log(myArray2); //Imprime el array con los nuevos valores.
myArray = []; //Reinicializa el array a un array vacío.
myArray[2] = "Ramiro"; //Acceso al tercer elemento del array y se cambia su valor.
myArray[1] = "Lopez"; //Acceso al segundo elemento del array y se cambia su valor.
console.log(myArray); //Imprime el array con los nuevos valores.

//Métodos comunes de los arrays

//Push y Pop
//Push: Añade un elemento al final del array.
myArray = []; //Reinicializa el array a un array vacío.
myArray.push("Ramiro"); //Añade un elemento al final del array.
myArray.push("Martín"); //Añade otro elemento al final del array.
myArray.push("Lopez"); //Añade otro elemento al final del array.
console.log(myArray); //Imprime el array con los nuevos valores.

//Pop: Elimina el último elemento del array.
myArray.pop(); //Elimina el último elemento del array.
console.log(myArray); //Imprime el array después de eliminar el último elemento.
console.log(myArray.pop()); //Imprime el último elemento eliminado del array.

//Shift y Unshift
//Shift: Elimina el primer elemento del array.
myArray.shift(); //Elimina el primer elemento del array.
console.log(myArray); //Imprime el array después de eliminar el primer elemento.
//Unshift: Añade un elemento al principio del array.
myArray.unshift("Ramiro", "Martín", "Lopez"); //Añade un elemento al principio del array.
console.log(myArray); //Imprime el array después de añadir un elemento al principio.

//Length
console.log(myArray.length); //Imprime la longitud del array, es decir, el número de elementos que contiene.
myArray.length; //Otra forma de acceder a la propiedad length del array, que devuelve el número de elementos en el array.
myArray.length = 2; //Cambia la longitud del array a 2, eliminando los elementos adicionales.
console.log(myArray); //Imprime el array después de cambiar su longitud.

//Clear
myArray = []; //Reinicializa el array a un array vacío, eliminando todos sus elementos.
myArray.push("Ramiro", "Martín", "Lopez"); //Añade elementos al array.
myArray.lengyh = 0; //Otra forma de vaciar un array, estableciendo su longitud a 0.

//Splice
myArray = ["Ramiro", "Martín", "Lopez", "Cortes", true, 31];
myNewArray = myArray.splice(1, 2); //Captura los elementos que van desde la posición 1 a la 2
console.log(myNewArray); //Imprime el nuevo array con los elementos capturados.

//Splice
myArray.splice(0, 2, "Ramirito", "Cromalphio"); //Reemplaza los elementos desde la posición 0 a la 2 con los nuevos elementos, sin reemplazar la ultima posición descrita.
console.log(myArray); //Imprime el array después de reemplazar los elementos.