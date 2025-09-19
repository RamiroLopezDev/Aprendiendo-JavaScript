//1- Usa destructuración para extraer los dos primeros elementos de un array.
let myArray0 = [5, 10, 15, 20, 25];
let [a, b] = myArray0;
console.log(a); // 5
console.log(b); // 10

//2- Usa destructuración en un array y asigna un valor predeterminado a una variable.
let myArray1 = [5];
let [x = 1, y = 2] = myArray1; // Asignar valor predeterminado a y
console.log(x); // 5
console.log(y); // 2

//3- Usa destructuración para extraer dos propiedades de un objeto.
let myObject0 = { 
    nombre: "Ramiro", 
    age: 32, 
    city: "Las Heras" 
};
let { nombre, age } = myObject0;
console.log(nombre); // "Ramiro"
console.log(age);  // 32

//4- Usa destructuración para extraer dos propiedades de un objeto y asignalos a nuevas variables con nombres diferentes.
let myObject1 = {
    name: "Martín",
    profesión: "Enfermero",
    email: "ramiro.m.lopez@outlook.com"
};
let { name: nom , profesión: oficio} = myObject1;
console.log(nom); // "Martín"
console.log(oficio); // "Enfermero"

//5- Usa destructuración para extraer dos propiedades de un objeto anidado.
let myObject2 = {
    nombre: "Gonzalo",
    profesión:{profesión: "técnico de campo", experiencia: "5 años"} 
}
let { nombre: nombre1, profesión: { profesión: profe } } = myObject2;
console.log(nombre1); // "Gonzalo"
console.log(profe); // "técnico de campo"

//6- Usa propagación para combinar dos arrays en uno nuevo.
let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];
let arrayC = [...arrayA, ...arrayB]; //Combinar arrays usando propagación
console.log(arrayC); // [1, 2, 3, 4, 5, 6]

//7- Usa propagación para crear una copia de un array.
let arrayD = [7, 8, 9];
let arrayE = [...arrayD]; //Crear una copia del array usando propagación
console.log(arrayE); // [7, 8, 9]

//8- Usa propagación para combinar dos objetos en uno nuevo.
let objA = { a: 1, b: 2 };
let objB = { c: 3, d: 4 };
let objC = { ...objA, ...objB }; //Combinar objetos usando propagación
console.log(objC); // { a: 1, b: 2, c: 3, d: 4 }

//9- Usa propagación para crear una copia de un objeto.
let objD = { x: 10, y: 20 };
let objE = { ...objD }; //Crear una copia del objeto usando propagación
console.log(objE); // { x: 10, y: 20 }

//10- Combina destructuración y propagación para extraer propiedades de un objeto y crear un nuevo objeto con algunas propiedades modificadas.
let originalObj = { 
    n: 1, 
    m: 2, 
    p: 3 
};
let { n, m } = originalObj; // Destructurar propiedades a y b
let newObj = { n, m, p: 4 }; // Crear nuevo objeto con c modificado
console.log(newObj); // { n: 1, m: 2, p: 4 }