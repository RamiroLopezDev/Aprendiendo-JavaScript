//Acá vamos a ver los tipos de datos que podemos utilizar en JavaScript.

// 1. Number. En este tipo de dato podemos almacenar números enteros o decimales.
let number = 10;
console.log(number);

let decimal = 10.5;
console.log(decimal);

// 2. String. En este tipo de dato podemos almacenar texto.
let string = "Hola Mundo!";
console.log(string);

// 3. Boolean. En este tipo de dato podemos almacenar valores de verdadero o falso.
let boolean = true;
console.log(boolean);

let boolean2 = false;
console.log(boolean2);

// 4. Undefined. En este tipo de dato podemos almacenar un valor que no ha sido definido.
let undefined;
console.log(undefined);

// 5. Null. En este tipo de dato podemos almacenar un valor nulo.
let nullValue = null;
console.log(nullValue);

// 6. Object. En este tipo de dato podemos almacenar un objeto.
let object = {
    name: "Juan",
    age: 30
};
console.log(object);

// 7. Symbol. En este tipo de dato podemos almacenar un valor único.
let symbol = Symbol("symbol");
console.log(symbol);

//8. BigInt. En este tipo de dato podemos almacenar números enteros grandes.
let bigInt = 9007199254740991n;
console.log(bigInt);

// Para saber el tipo de dato de una variable podemos utilizar el operador typeof.
console.log(typeof number)
console.log(typeof decimal)
console.log(typeof string)
console.log(typeof boolean)
console.log(typeof boolean2)
console.log(typeof undefined)
console.log(typeof nullValue)
console.log(typeof object)
console.log(typeof symbol)
console.log(typeof bigInt)