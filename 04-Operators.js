// Operadores (Operators)

// Operadores Aritméticos: Suma, Resta, Multiplicación, División, Módulo, Exponente, Incremento y Decremento.
let a1 = 5; //Definimos una variable a con el valor 5
let b1 = 10; //Definimos una variable b con el valor 10
let suma = a1 + b1; // Suma
let resta = a1 - b1; // Resta
let multiplicacion = a1 * b1; // Multiplicación
let division = a1 / b1; // División
let modulo = a1 % b1; // Módulo
let exponente = a1 ** b1; // Exponente
let incremento = a1++; // Incremento 
let decremento = a1--; // Decremento

console.log("Suma:", suma); // Imprime: Suma: 15
console.log("Resta:", resta); // Imprime: Resta: -5
console.log("Multiplicación:", multiplicacion); // Imprime: Multiplicación: 50
console.log("División:", division); // Imprime: División: 0.5
console.log("Módulo:", modulo); // Imprime: Módulo: 5
console.log("Exponente:", exponente); // Imprime: Exponente: 9765625
a++; // Imprime: Incremento: 6
b--; // Imprime: Decremento: 9

// Operadores de Asignación: Asignación simple (=), Asignación con suma (+=), Asignación con resta (-=), etc.
let myVariable = 2; // Definimos una variable myVariable con el valor 2

myVariable += 2; // Asignación con suma
myVariable -= 3; // Asignación con resta
myVariable *= 2; // Asignación con multiplicación
myVariable /= 4; // Asignación con división
myVariable %= 3; // Asignación con módulo
myVariable **= 3; // Asignación con exponente

// Operadores de Comparación: Igualdad, Desigualdad, Mayor que, Menor que, Mayor o igual que, Menor o igual que
let c = 5; // Definimos una variable x con el valor 5
let d = 10; // Definimos una variable y con el valor 10

console.log(c > d); // Mayor que (Falso)
console.log(c < d); // Menor que (Verdadero)
console.log (c >= d); // Mayor o igual que (Falso)
console.log (c <= d); // Menor o igual que (Verdadero)
console.log(c == d); // Igualdad por valor (Falso)
console.log(c != d); // Desigualdad por valor (Verdadero)
console.log(c === d); // Igualdad estricta (por valor y por tipo) (Falso)
console.log(c !== d); // Desigualdad estricta (por valor y por tipo) (Verdadero)

//Truthy values: Valores que se consideran verdaderos en un contexto booleano
//Todos los valores diferentes de 0, positivos y negativos.
// Todas las cadenas de texto no vacías.
//true

// Falsy values: Valores que se consideran falsos en un contexto booleano
// false, 0, "", null, undefined, NaN, cadena de texto vacía ("").

// Operadores Lógicos: AND (&&), OR (||), NOT (!)
let a = 5; // Definimos una variable a con el valor 5
let b = 10; // Definimos una variable b con el valor 10

console.log(5 > 10 && 15 > 20); // AND (Falso)
//Si las 2 expresiones son verdaderas, el resultado es verdadero. Si alguna de las dos es falsa, el resultado es falso. Si ambas son falsas, el resultado es falso.

console.log(5 > 10 || 15 > 10); // OR (Verdadero)
//Si alguna de las 2 expresiones es verdadera, el resultado es verdadero. Si ambas son falsas, el resultado es falso.Si ambas son verdaderas, el resultado es verdadero.

console.log(!(5 > 10 && 15 > 20)); // NOT
// Si la expresión es verdadera, el resultado es falso. Si la expresión es falsa, el resultado es verdadero.

//Operadores ternarios: Condición ? Valor si verdadero : Valor si falso
const isRaining = true; // Definimos una variable isRaining con el valor true
isRaining ? console.log("Lleva paraguas") : console.log("No es necesario llevar paraguas");
// El operador ternario evalúa la condición isRaining. Si es verdadera, imprime "Lleva paraguas". Si es falsa, imprime "No es necesario llevar paraguas".
