// Funciones: Bloques de código reutilizables

// Parámetro: Variable que recibe un valor al llamar a la función

// Valor de retorno: Resultado que devuelve la función al ser llamada

// Declaración de una función simple
function myFunction() { // Nombre de la función sin parámetros
    console.log('Hola, Función!'); // Acción de la función
}

// Llamada a la función
console.log(myFunction('Mundo')); // Salida: Hola, Mundo!
myFunction(); // Llamada sin usar el valor de retorno

// Función con parámetros y valor de retorno
function suma(a, b) { // Parámetros a y b
    return a + b; // Retorna la suma de a y b
}
console.log(suma(5, 3)); // Salida: 8
console.log(suma(10, 20)); // Salida: 30

function saludo(nombre) {
    return `Hola, ${nombre}!`; // Retorna un saludo personalizado
}
console.log(saludo('Ramiro')); // Salida: Hola, Ramiro!
console.log(saludo('Gonzalo')); // Salida: Hola, Gonzalo!

// Función anónima: Función sin nombre asignada a una variable o constante
const resta = function(a, b) { 
    return a - b; // Retorna la resta de a y b
};
console.log(resta(10, 4)); // Salida: 6
console.log(resta(20, 5)); // Salida: 15

// Función flecha: Sintaxis más corta para funciones anónimas
const multiplicacion = (a, b) => a * b; // Retorna el producto de a y b
console.log(multiplicacion(3, 4)); // Salida: 12
console.log(multiplicacion(7, 6)); // Salida: 42

// Función flecha sin parámetros
const saludoFlecha = () => '¡Hola desde la función flecha!';
console.log(saludoFlecha()); // Salida: ¡Hola desde la función flecha!

//Parámetros por defecto
function potencia(base, exponente = 2) { // exponente tiene valor por defecto 2
    return Math.pow(base, exponente); // Retorna base elevado a exponente
}
console.log(potencia(3)); // Salida: 9 (3^2)
console.log(potencia(2, 3)); // Salida: 8 (2^3)

// Funciones anidadas
function calcularAreaRectangulo(largo, ancho) {
    function area() { // Función interna para calcular el área
        return largo * ancho;
    }
    return area(); // Llama a la función interna y retorna el área
}
console.log(calcularAreaRectangulo(5, 3)); // Salida: 15
console.log(calcularAreaRectangulo(10, 4)); // Salida: 40

function extern() {
    console.log('Función externa');
    function intern() {
        console.log('Función interna');
    }
    intern(); // Llama a la función interna desde la externa
}
extern(); // Llama a la función externa
// intern(); // Error: intern no está definida fuera de extern

// Funciones de orden superior: Reciben otras funciones como argumentos o retornan funciones
function aplicarOperacion(a, b, operacion) { // operacion es una función pasada como argumento
    return operacion(a, b); // Llama a la función operacion con a y b
}
console.log(aplicarOperacion(5, 3, suma)); // Salida: 8 (usa la función suma)
console.log(aplicarOperacion(10, 4, resta)); // Salida: 6 (usa la función resta)
console.log(aplicarOperacion(6, 7, multiplicacion)); // Salida: 42 (usa la función multiplicacion)

// forEach con funciones: Itera sobre elementos de un array o conjunto
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(num) { // Función anónima como callback
    console.log(num * 2); // Multiplica cada número por 2
});
// Salida: 2, 4, 6, 8, 10
numeros.forEach(num => console.log(num * 3)); // Función flecha como callback
// Salida: 3, 6, 9, 12, 15

// Map con funciones: Crea un nuevo array aplicando una función a cada elemento
const cuadrados = numeros.map(num => num * num); // Función flecha para elevar al cuadrado
console.log(cuadrados); // Salida: [1, 4, 9, 16, 25]
const dobles = numeros.map(function(num) { // Función anónima para duplicar
    return num * 2;
});
console.log(dobles); // Salida: [2, 4, 6, 8, 10]

// Set con funciones: Itera sobre un conjunto de valores únicos
const conjunto = new Set([1, 2, 3]);
conjunto.forEach(num => console.log(num + 1)); // Función flecha para sumar 1
// Salida: 2, 3, 4
conjunto.forEach(function(num) { // Función anónima para multiplicar por 2
    console.log(num * 2);
});
// Salida: 2, 4, 6


