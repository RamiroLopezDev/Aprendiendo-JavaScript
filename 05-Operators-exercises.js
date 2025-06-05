// 1. Crea una variabale para cada operación aritmética
variable1 = 2;
variable2 = 6;

suma = variable1 + variable2;
resta = variable2 - variable1;
multiplicacion = variable1 * variable2;
division = variable2 / variable1;
modulo = variable2 % variable1;
exponente = variable1 ** variable2;

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.
variable3 = 10;

variable3 = 5; // Asignación simple
variable3 += 5; // Asignación con suma
variable3 -= 2; // Asignación con resta
variable3 *= 2; // Asignación con multiplicación
variable3 /= 2; // Asignación con división
variable3 %= 3; // Asignación con módulo
variable3 **= 2; // Asignación con exponente

// 3. Imprime 5 operaciones verdades con diferentes operadores de comparación.

console.log(5 > 2); // Mayor que (Verdadero)
console.log(3 < 7); // Menor que (Verdadero)
console.log(5 >= 5); // Mayor o igual que (Verdadero)
console.log(10 <= 15); // Menor o igual que (Verdadero)
console.log(5 == 5); // Igualdad por valor (Verdadero)

// 4. Imprime 5 operaciones falsas con diferentes operadores de comparación.
console.log(2>10); // Mayor que (Falso)
console.log(5<3); // Menor que (Falso)
console.log(23>=25); // Mayor o igual que (Falso)
console.log(10===2); // Igualdad estricta (por valor y por tipo) (Falso)
console.log(5!==5); // Desigualdad estricta (por valor y por tipo) (Falso)

// 5. Utiliza el operador lógico AND (&&) para crear una expresión que sea verdadera y otra que sea falsa.

console.log(5<8 && 4>1); // AND (Verdadero)
console.log(7<4 && 8>2); // AND (Falso)

// 6. Utiliza el operador lógico OR (||) para crear una expresión que sea verdadera y otra que sea falsa.

console.log(8<10 || 3>=7); // OR (Verdadero)
console.log(9<4 || 50>=70); // OR (Falso)

// 7. Combina los operadores lógicos AND (&&) y OR (||) para crear una expresión que sea verdadera y otra que sea falsa.

console.log(10<20 && 4>1 || 50<=100); // AND y OR (Verdadero)
console.log(10>20 && 5===4 || 1000<=500); // AND y OR (Falso)

// 8. Añade alguna negación con el operador NOT (!) a las expresiones anteriores para invertir su valor booleano.

console.log(!(10>20 && 5===4 || 1000<=500)); // AND y OR (Verdadero)

// 9. Utiliza el operador ternario para crear una expresión que sea verdadera y otra que sea falsa.

temp1 = true; // Definimos una variable para el estado febril
temp1 ? console.log("El paciente está FEBRIL") : console.log("El paciente está AFEBRIL"); // Verdadero

temp2 = false; // Definimos una variable para el estado febril
temp2 ? console.log("El paciente está FEBRIL") : console.log("El paciente está AFEBRIL"); // Falso

// 10. Combina operadores aritméticos, de comparación y lógicos para crear una expresión compleja que sea verdadera y otra que sea falsa.

console.log(20<60 && 76<100); // AND (Verdadero)
console.log(25>=35 || 100>200); // OR (Falso)
