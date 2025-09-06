//Loops o Bucles: Son estructuras que nos permiten ejecutar un bloque de código varias veces.

//For Loop: Se utiliza cuando sabemos cuántas veces queremos iterar.
for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

//Ejemplo de For Loop

let frutas = ["Manzana", "Banana", "Cereza", "Mandarina", "Kiwi", "Pera", "Sandía", "Melón", "Ananá", "Uva"]; // Array de frutas
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta: " + frutas[i]);
} // Itera sobre cada fruta en el array y la imprime en la consola


//While Loop: Se utiliza cuando no sabemos cuántas veces queremos iterar, pero tenemos una condición.
let j = 0;
while (j < 5) {
    console.log("Iteración número: " + j);
    j++;
}

//Ejemplo de While Loop
let numeros = [10, 20, 30, 40, 50]; // Array de números
while (numeros.length > 0) {
    console.log("Número: " + numeros.shift()); // Elimina el primer elemento del array y lo imprime
}

//Do While Loop: Similar al while, pero garantiza que el bloque de código se ejecute al menos una vez.
let k = 0;
do {
    console.log("Iteración número: " + k);
    k++;
}while (k < 5);

//Ejemplo de Do While Loop
let colores = ["Rojo", "Verde", "Azul", "Amarillo"]; // Array de colores
let l = 0;
do {
    console.log("Color: " + colores[l]);
    l++;
}while (l < colores.length); // Itera sobre cada color en el array y lo imprime en la consola

//For...of Loop: Se utiliza para iterar sobre elementos de colecciones como arrays o strings.
const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log("Elemento del array: " + element);
}

//Ejemplo de For...of Loop
const cadena = "Hola Mundo"; // String
for (const caracter of cadena) {
    console.log("Carácter de la cadena: " + caracter);
} // Itera sobre cada carácter en la cadena y lo imprime en la consola

//Break y Continue: Controlan el flujo de los bucles.
for (let o = 0; o < 5; o++) {
    if (o === 2) {
        console.log("Continuando al siguiente ciclo en o = " + o);
        continue; // Salta a la siguiente iteración
    }
    if (o === 4) {
        console.log("Rompiendo el bucle en o = " + o);
        break; // Sale del bucle
    }
    console.log("Iteración número: " + o); // Imprime la iteración actual
}

// Ejemplo de Break y Continue
let numerosPares = [2, 4, 6, 8, 10]; // Array de números pares
for (let m = 0; m < numerosPares.length; m++) {
    if (numerosPares[m] === 6) {
        console.log("Continuando al siguiente ciclo en m = " + m);
        continue; // Salta a la siguiente iteración
    }
    if (numerosPares[m] === 10) {
        console.log("Rompiendo el bucle en m = " + m);
        break; // Sale del bucle
    }
    console.log("Número par: " + numerosPares[m]); // Imprime el número par actual
}

//Laballed Loops: Permiten etiquetar bucles para un control más preciso.
outerLoop: for (let p = 0; p < 3; p++) {
    for (let q = 0; q < 3; q++) {
        if (q === 1) {
            console.log("Saliendo del bucle interno en p = " + p + ", q = " + q);
            continue outerLoop; // Salta a la siguiente iteración del bucle externo
        }
        console.log("Iteración externa: " + p + ", Iteración interna: " + q); // Imprime las iteraciones actuales
    }
}

// Ejemplo de Labeled Loops
labeledLoop: for (let r = 0; r < 3; r++) {
    for (let s = 0; s < 3; s++) {
        if (s === 2) {
            console.log("Saliendo del bucle interno en r = " + r + ", s = " + s);
            break labeledLoop; // Sale del bucle etiquetado
        }
        console.log("Iteración externa: " + r + ", Iteración interna: " + s); // Imprime las iteraciones actuales
    }
}


