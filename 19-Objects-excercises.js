//1- Crea un objeto con 3 propiedades
let objeto1 = { // Objeto con 3 propiedades
    fruta: "manzana", // Propiedad 1
    color: "rojo", // Propiedad 2
    cantidad: 5 // Propiedad 3
};

//2- Accede y muestra su valor
console.log(objeto1); // Muestra el objeto completo

//3- Agrega una nueva propiedad
objeto1.precio = 1.5; // Agrega una nueva propiedad 'precio'
console.log(objeto1);

//4- Elimina una de las 3 primeras propiedades
delete objeto1.color; // Elimina la propiedad 'color'
console.log(objeto1);

//5- Agrega una función e invócala
objeto1.calcularPrecioTotal = function() { // Agrega una función para calcular el precio total
    return this.cantidad * this.precio; // Retorna el precio total
}
console.log("Precio total:", objeto1.calcularPrecioTotal()); // Invoca la función y muestra el resultado: 7,5

//6- Itera las propíedades del objeto: Hace un bucle que recorre todas las propiedades del objeto y muestra su nombre y valor
for (let key in objeto1) { // Itera sobre las propiedades del objeto
    console.log(key + ": " + objeto1[key]); // Muestra cada propiedad y su valor
}

//7- Crea un objeto anidado
objeto1.objeto2 = {
    fruta: "manzana verde",
    cantidad: 10,
    precio: 2,
}

//8- Accede y muestra el valor de las propiedades anidadas
console.log(objeto1); // Muestra el objeto con el objeto anidado

//9- Comprueba si los 2 objetos son iguales
if (objeto1 === objeto1.objeto2) { // Comparación estricta entre los dos objetos
    console.log("Los objetos son iguales"); // Esto no se cumple porque son referencias diferentes
} else {
    console.log("Los objetos son diferentes");  // Muestra que los objetos son diferentes
}

//10- Comprueba si dos propiedades diferentes son iguales
if (objeto1.fruta === objeto1.objeto2.fruta) {
    console.log("Las frutas son iguales"); // Muestra que las propiedades son iguales
} else {
    console.log("Las frutas son diferentes"); // Esto no se cumple porque las frutas son diferentes
}
