// 1. Concatena dos cadenas de texto y muestra el resultado por consola.
let cadena1 = "Me gusta Harry Potter";
let cadena2 = "y la saga de El Señor de los Anillos";
console.log(cadena1 + " " + cadena2);

// 2. Muestra la longitud de una cadena de texto.
console.log(cadena1.length); // 21

// 3. Muestra el primer y el último carácter de una cadena de texto.
console.log(cadena1[0]); // M
console.log(cadena1[20]); // r

// 4. Convierte una cadena de texto a mayúsculas y minúsculas y muestra el resultado por consola.
console.log(cadena2.toUpperCase()); // Y LA SAGA DE EL SEÑOR DE LOS ANILLOS
console.log(cadena2.toLowerCase()); // y la saga de el señor de los anillos

// 5. Crea una cadena de texto en varias lineas y muestra el resultado por consola.
let textoVariasLineas = `Esta es
una cadena
de texto
en varias líneas.`;
console.log(textoVariasLineas);

// 6. Interpola el valor de una variable en una cadena de texto y muestra el resultado por consola.
console.log(`Hobbies de Ramiro: ${cadena1}`); //'Hobbies de Ramiro: Me gusta Harry Potter'

// 7. Reemplaza todos los espacios en blanco de una cadena de texto por guiones
console.log(cadena1.replace(/ /g, "-")); //'Me-gusta-Harry-Potter'

// 8. Comprueba si una cadena de texto contiene una palabra específica y muestra el resultado por consola.
console.log(cadena2.includes("Anillos")); // true, verifica si "Anillos" está en el texto

// 9. Comprueba si dos cadenas de texto son iguales y muestra el resultado por consola.
console.log(cadena1 === cadena2); // false, verifica si las cadenas son iguales

// 10. Comprueba si dos cadenas de texto tienen la misma longitud y muestra el resultado por consola.
console.log(cadena1.length === cadena2.length); // false, verifica si las longitudes son iguales