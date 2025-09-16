// Nota: Explora diferentes sintaxis de funciones para resolver los ejercicios.

//1. Crea una función que reciba dos números y devuelva su suma.
function suma(a, b) { // Función tradicional
    return a + b; // Retorna la suma de a y b
}
console.log(suma(3, 5)); // Salida: 8

//2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
let numeros = [1, 5, 7, 12, 3]; // Array de números

function encontrarMayor(numeros) {
    if (numeros.length === 0) return null; // Maneja el caso de array vacío

    let mayor = numeros [0]; // Inicializa mayor con el primer elemento

    for (let i= 1; i<numeros.length; i++) { // Itera desde el segundo elemento}
        const numeroActual = numeros[i]; // Elemento actual en la iteración
        if (numeroActual > mayor) { // Compara con el mayor actual
            mayor = numeroActual; // Actualiza mayor si se encuentra uno más grande
        }
    }
    return mayor; // Retorna el número mayor encontrado
}
console.log(encontrarMayor(numeros)); // Salida: 12

//3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
let texto = "Ramiro"; // String de ejemplo

function contarVocales(texto){ // Función para contar vocales
  let contadorVocales = 0; // Inicializa el contador de vocales
  let textoMinuscula = texto.toLowerCase(); // Convierte el texto a minúsculas para facilitar la comparación
  const vocales = "aeiou"; // String con las vocales para verificar
  for (let i=0; i<textoMinuscula.length; i++) { // Itera sobre cada carácter del texto
    const caracterActual = textoMinuscula[i]; // Carácter actual en la iteración
    if (vocales.includes(caracterActual)) { // Verifica si el carácter es una vocal
      contadorVocales++; // Incrementa el contador si es una vocal
    }
  }
  return contadorVocales; // Retorna el total de vocales encontradas
}

console.log(contarVocales(texto)); // Salida: 3

//4. Crea una función que reciba un array de strings y devuelva un nuevo array con los strings en mayúsculas.
let strings = ["Mi nombre es Ramiro", "Harry Potter tiene ojos color verde", "Los lunes son un fastidio", "Caminar junto a Jesús es lo mejor de la vida", "Hay que atrapar a todos los pokemon"] // Array de strings

function mayusculaArray (strings) { // Función para convertir a mayúsculas
  for (let i=0; i<strings.length;i++){ // Itera sobre cada string en el array
    strings[i] = strings[i].toUpperCase(); // Convierte el string actual a mayúsculas
  }
  return strings; // Retorna el array modificado
}

console.log(mayusculaArray(strings)); // Salida: ["MI NOMBRE ES RAMIRO", "HARRY POTTER TIENE OJOS COLOR VERDE", "LOS LUNES SON UN FASTIDIO", "CAMINAR JUNTO A JESÚS ES LO MEJOR DE LA VIDA", "HAY QUE ATRAPAR A TODOS LOS POKEMON"]

//5. Crea una función que reciba un número y devuelva true si es primo o false si no lo es.
function verificarPrimo (numero) { //Función para verificar si un número es primo o no
  if (numero<=1){ // Los números menores o iguales a 1 no son primos
    return false; 
  }
  for (let i=2; i < numero; i++){ //Recorremos los posibles divisores desde 2 hasta (numero - 1).
    if (numero % i === 0){ // Si el número es divisible por i, no es primo
      return false; // Retorna false si se encuentra un divisor
    }
  }
  return true; // Si no se encontraron divisores, el número es primo
}
console.log(`¿Es 7 un número primo? ${verificarPrimo(7)}`);  // Salida: true
console.log(`¿Es 10 un número primo? ${verificarPrimo(10)}`); // Salida: false

//6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes a ambos arrays.
let array1 = ["Ramiro", "Gonzalo", "Silvia", "Alberto"]; // Primer array
let array2 = ["Gonzalo", "Natalia", "Abighail", "Gabriel"]; // Segundo array

function coincidenciaArrays (array1, array2) { // Función para encontrar elementos comunes
  let nuevoArray = []; // Array para almacenar los elementos comunes
  for (let i=0; i<array1.length;i++) { // Itera sobre cada elemento del primer array
    const elementoActual = array1[i]; // Elemento actual en la iteración
    if (array2.includes(elementoActual)){ // Verifica si el elemento actual está en el segundo array
      if (!nuevoArray.includes(elementoActual)){ // Evita duplicados en el nuevo array
        nuevoArray.push(elementoActual); // Agrega el elemento común al nuevo array
      }
    }
  }
  return nuevoArray; // Retorna el array con los elementos comunes
}

const resultado1 = coincidenciaArrays(array1,array2); // Llama a la función con los dos arrays
console.log(`Elementos comunes: [${resultado1}]`);  // Salida: ["Gonzalo"]

//7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.
let arrayNumeros = [1,4,7,8,10]; // Array de números

function sumaPares(arrayNumeros) { // Función para sumar los números pares
  let numeroPar = 0; // Inicializa la suma de números pares
  for (let i=0;i<arrayNumeros.length;i++){ // Itera sobre cada número en el array
    const elementoActual = arrayNumeros[i]; // Elemento actual en la iteración
    if(elementoActual%2 === 0){ // Verifica si el número es par
      numeroPar += elementoActual; // Suma el número par a la suma total
    }
  }
  return numeroPar; // Retorna la suma de los números pares
}

const totalPares = sumaPares(arrayNumeros) // Llama a la función con el array de números
console.log(`La suma de los números pares es: ${totalPares}`); // Salida: 22

//8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.
let arrayNum = [1,2,3,4,5]; // Array de números

function arrayAlCuadrado(arrayNum) { // Función para elevar al cuadrado cada número
  let arrayElevado = []; // Array para almacenar los números elevados al cuadrado
  for (let i=0; i<arrayNum.lenth; i++) { // Itera sobre cada número en el array
    let numeroActual = arrayNum[i]; // Elemento actual en la iteración
    numeroActual = numeroActual ** 2; // Eleva el número al cuadrado
    arrayElevado.push(numeroActual); // Agrega el número elevado al nuevo array
    }
  return arrayElevado; // Retorna el array con los números elevados al cuadrado
}
console.log(arrayAlCuadrado(arrayNum)); // Salida: [1, 4, 9, 16, 25]

//9. Crea una función que reciba una cadena de texto y que devuelva la misma cadena pero con las palabras en orden inverso.
let texto1 = "Mi nombre es Ramiro"; // Cadena de texto de ejemplo
function invertirPalabras(texto1) { // Función para invertir el orden de las palabras
  let palabras = texto1.split(" "); // Divide el texto en un array de palabras
  let palabrasInvertidas = palabras.reverse(); // Invierte el orden de las palabras en el array
  let textoInvertido = palabrasInvertidas.join(" "); // Une las palabras invertidas en una cadena de texto
  return textoInvertido; // Retorna la cadena de texto con las palabras en orden inverso
}
console.log(invertirPalabras(texto1)); // Salida: "Ramiro es nombre Mi"

//10. Crea una función que calcule el factorial de un número dado.
function calcularFactorial(numero) { // Función para calcular el factorial
  if (numero < 0) { // El factorial no está definido para números negativos
    return null; 
  }
  if (numero === 0 || numero === 1) { // El factorial de 0 y 1 es 1
    return 1; 
  }
  let factorial = 1; // Inicializa el factorial en 1
  for (let i = 2; i <= numero; i++) { // Itera desde 2 hasta el número dado
    factorial *= i; // Multiplica el factorial por el número actual
  }
  return factorial; // Retorna el factorial calculado
}
console.log(calcularFactorial(5)); // Salida: 120
console.log(calcularFactorial(0)); // Salida: 1
console.log(calcularFactorial(-3)); // Salida: null
