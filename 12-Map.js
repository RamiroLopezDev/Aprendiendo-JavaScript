//ESTRUCTURA DE DATOS MAP
//Los maps se utilizan como estructuras de datos para almacenar pares clave-valor, donde cada clave es única y se asocia a un valor específico. Los maps permiten una fácil inserción, eliminación y búsqueda de elementos.

//Declaración de un map

let myMap = new Map(); //Se declara un map vacío utilizando el constructor Map.

//Inicialización de un map con pares clave-valor
myMap = new Map([
    ["name", "Ramiro"],
    ["lastname", "López"],
    ["age", 31],
    ["email", "ramiro.lopez.lotr@gmail.com"]
]);
console.log(myMap); //Imprime el map con los pares clave-valor inicializados.

//Métodos comunes de los maps
//Set: Añade un par clave-valor al map o actualiza el valor.
myMap.set("game", "World of Warcraft"); //Añade un nuevo par clave-valor al map.
console.log(myMap); //Imprime el map con el nuevo par clave-valor añadido.
myMap.set("game", "Zelda: Breath of the Wild"); //Actualiza el valor del par clave "game".
console.log(myMap); //Imprime el map después de actualizar el valor.

//Get: Comprueba si un valor está asociado a una clave específica.
console.log(myMap.get("name")); //Devuelve "Ramiro", el valor asociado a la clave "name".
console.log(myMap.get("game")); //Devuelve "Zelda: Breath of the Wild", el valor actualizado del par clave "game".

//Delete: Elimina un par clave-valor del map.
myMap.delete("game"); //Elimina el par clave-valor con la clave "game" del map.
console.log(myMap); //Imprime el map después de eliminar el par clave-valor.

//Has: Comprueba si una clave está presente en el map.
console.log(myMap.has("lastname")); //Devuelve true si "lastname" está en el map, false en caso contrario.
console.log(myMap.has("alias")); //Devuelve false porque "alias" no está en el map.

//Size: Devuelve el número de pares clave-valor en el map.
console.log(myMap.size); //Imprime el número de pares clave-valor en el map

//Keys: Devuelve un iterador con las claves del map.
console.log(myMap.keys()); //Devuelve un iterador con las claves del map.

//Values: Devuelve un iterador con los valores del map.
console.log(myMap.values()); //Devuelve un iterador con los valores del map.

//Entries: Devuelve un iterador con los pares clave-valor del map.
console.log(myMap.entries()); //Devuelve un iterador con los pares clave-valor del map.

//Clear: Elimina todos los pares clave-valor del map.
myMap.clear(); //Elimina todos los pares clave-valor del map.
console.log(myMap); //Imprime el map después de eliminar todos los pares clave-valor, que ahora está vacío.





