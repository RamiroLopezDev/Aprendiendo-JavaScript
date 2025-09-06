//Explora diferentes sintaxis de bucles en JavaScript y resuelve los siguientes ejercicios:

//1. Crea un bucle que imprima los números del 1 al 20.
//Bucle for:
for (i=1; i<21;i++){ // Bucle for: donde i es la variable de control del bucle, comienza en 1 y se incrementa en 1 hasta que sea menor que 21; y en cada iteración, se imprime el valor de i.
  console.log(i) // Imprime el valor de i en la consola
};

//Bucle while:
let m = 0; // m es la variable de control del bucle, comienza en 0.
while(m < 20){ //Bucle while: Mientras m sea menor que 20, se ejecuta el bloque de código.
  m++; // Incrementa m en 1 en cada iteración
  console.log(m); // Imprime el valor de m en la consola
}
//Bucle do while:
let d = 0; // d es la variable de control del bucle, comienza en 0.
do { //Bucle do while: Se ejecuta al menos una vez, luego verifica la condición.
  d++ // Incrementa d en 1 en cada iteración
  console.log(d)  // Imprime el valor de d en la consola
}
while(d<20); // Mientras d sea menor que 20, se repite el bloque de código.

//2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.
let suma = 0; // Inicializamos la variable para almacenar la suma
for (let i=1; i<= 100; i++){ // Bucle for que itera desde 1 hasta 100
  suma = suma + i; // En cada iteración, sumamos el valor de i a la variable suma
}
console.log("La suma de todos los números del 1 al 100 es:", suma); // Imprimimos el resultado en la consola

//3. Crea un bucle que imprima todos los números pares entre 1 y 50.
for (let i = 1; i <= 50; i++){ // Bucle for que itera desde 1 hasta 50
  if (i%2 === 0){ // Condición para verificar si el número es par (el resto de la división por 2 es 0)
    console.log(i); // Imprime el número par en la consola
  }
}

//Otra forma de hacerlo:
for (let i = 2; i <= 50; i=i+2){ // Bucle for que comienza en 2 y se incrementa en 2 en cada iteración, asegurando que solo se impriman números pares
    console.log(i); // Imprime el número par en la consola
}

//4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.
let arrayNombres = ["Ramiro", "Silvia","Alberto","Martín", "Yajaira", "Gonzalo", "Maria", "Natalia"]; //Array de nombres
for (let i=0; i<arrayNombres.length; i++){ // Bucle for que itera desde 0 hasta la longitud del array de nombres
  console.log(arrayNombres[i]) // Imprime cada nombre en la consola accediendo a cada elemento del array mediante su índice
}

//5. Escribe un bucle que cuente el número de vocales en una cadena de texto.
let texto = "Mi pelicula favorita es Harry Potter"; //Cadena de texto
const vocales = "aeiou"; //Cadena con las vocales para comparar

let contadorVocales = 0; //Inicializamos el contador de vocales en 0
const textoMinusculas = texto.toLowerCase(); //Convertimos el texto a minúsculas para facilitar la comparación

for (let i= 0; i < textoMinusculas.length; i++){ // Bucle for que itera desde 0 hasta la longitud del texto
  const caracterActual = textoMinusculas[i]; //Accedemos a cada carácter del texto mediante su índice 
  if (vocales.includes(caracterActual)){ //Verificamos si el carácter actual es una vocal comparándolo con la cadena de vocales
    contadorVocales++; //Si es una vocal, incrementamos el contador de vocales en 1
  }
}

console.log("El texto tiene", contadorVocales, "vocales"); //Imprimimos el resultado en la consola

//6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.
let arrayNumeros = [1,2,4,6,7,10]; //Array de números
let producto = 1; //Inicializamos la variable producto en 1 (ya que es el elemento neutro de la multiplicación)

for (let i=0; i<arrayNumeros.length; i++){ // Bucle for que itera desde 0 hasta la longitud del array de números
  producto = producto * arrayNumeros[i]; //En cada iteración, multiplicamos el valor actual de producto por el número en la posición i del array
  console.log("El producto de todos los numeros es", producto); //Imprimimos el producto en cada iteración para ver cómo va cambiando
}

//7. Escribe un bucle que imprima la tabla de multiplicar del 5.
for (i=1; i<=10;i++){ // Bucle for que itera desde 1 hasta 10
 const tabla = 5 * i; //Calcula el producto de 5 por el valor actual de i
  console.log (tabla) //Imprime el resultado en la consola
}

//8. Usa un bucle para invertir una cadena de texto.
let texto1 = "Mi nombre es Ramiro"; //Cadena de texto a invertir
let cadenaInvertida = ""; //Inicializamos una variable vacía para almacenar la cadena invertida

for (let i = texto1.length - 1; i >= 0; i--){ // Bucle for que comienza en el último índice de la cadena y se decrementa hasta 0
  cadenaInvertida = cadenaInvertida + texto1[i]; //En cada iteración, concatenamos el carácter actual (texto[i]) al principio de la cadena invertida
}
console.log("Cadena original:", texto); //Imprimimos la cadena original
console.log ("Cadena invertida: ", cadenaInvertida); //Imprimimos la cadena invertida

//9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.
let a=0; //Primer número de la secuencia
let b=1; //Segundo número de la secuencia

console.log(a); //Imprime el primer número de la secuencia
console.log(b); //Imprime el segundo número de la secuencia

for (let i = 2; i < 10; i++){ // Bucle for que comienza en 2 (ya que los dos primeros números ya están impresos) y se ejecuta hasta que i sea menor que 10
  const siguiente = a + b; //Calcula el siguiente número de la secuencia sumando los dos números anteriores
  console.log(siguiente); //Imprime el siguiente número de la secuencia
a = b; //Actualiza el valor de a al valor de b
b = siguiente; //Actualiza el valor de b al siguiente número calculado
}

//10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.
let array = [1,5,9,20,34,60]; //Array de números
const nFiltrados = []; //Inicializamos un nuevo array vacío para almacenar los números mayores a 10

for (let i = 0; i < array.length; i++){ // Bucle for que itera desde 0 hasta la longitud del array original
  const numeroActual = array[i]; //Accedemos a cada número del array mediante su índice
  if (numeroActual > 10){ //Verificamos si el número actual es mayor a 10
    nFiltrados.push(numeroActual); //Si es mayor a 10, lo añadimos al nuevo array usando el método push
  }
}
console.log("El array original es: ", array); //Imprimimos el array original
console.log("El nuevo array con numeros mayores a 10 es: ", nFiltrados); //Imprimimos el nuevo array con los números mayores a 10