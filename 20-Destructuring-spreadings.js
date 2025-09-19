//Destructuración y Propagación

//Destructuración de Arrays: Permite extraer valores de un array y asignarlos a variables individuales.
//Sintaxis de destructuración de arrays:

let numeros = [10, 20, 30]; //Array original
let [a, b, c] = numeros; //Destructuración
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

//Ignorar valores durante la destructuración:
let [x, , z] = numeros; //Ignorar el segundo valor
console.log(x); // 10
console.log(z); // 30

//Sintaxis de arrays con valores por defecto:
let [m = 1, n = 2, o = 3, p = 4] = [10, 20]; //Valores por defecto
console.log(m); // 10
console.log(n); // 20
console.log(o); // 3 (valor por defecto)
console.log(p); // 4 (valor por defecto)

//Propagación (Spread Operator): Permite expandir elementos de un array u objeto en lugares donde se esperan múltiples elementos.
//Sintaxis de propagación en arrays:

let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5, 6]; //Propagación
console.log(array2); // [1, 2, 3, 4, 5, 6]

//Combinar arrays usando propagación:
let arrayCombinado = [...array1, ...array2]; //Combinar arrays
console.log(arrayCombinado); // [1, 2, 3, 1, 2, 3, 4, 5, 6]

//Destructuración de Objetos: Sirve para extraer valores de un objeto y asignarlos a variables individuales.
//Sintaxis de destructuración de objetos:

let persona = { nombre: "Ramiro", edad: 32, ciudad: "Las Heras" }; //Objeto original
let { nombre, edad, ciudad } = persona; //Destructuración
console.log(nombre); // "Ramiro"
console.log(edad);  // 32
console.log(ciudad); // "Las Heras"

//Sintaxis de destructuración de objetos con valores por defecto:
let { name: nom = "Desconocido", age: ed = 0, pais: pa = "Argentina" } = persona; //Valores por defecto
console.log(nom); // "Desconocido" (valor por defecto)
console.log(ed);   // 0 (valor por defecto)
console.log(pa);   // "Argentina" (valor por defecto)

//Destructuración de objetos anidados:
let persona1 = {
    nombre: "Ramiro",
    direccion: { ciudad: "Las Heras", pais: "Argentina"  }
};
let { nombre: q, direccion: { ciudad: r} } = persona1; //Destructuración anidada
console.log(q); // "Ramiro"
console.log(r); // "Las Heras"

//Sintaxis de propagación en objetos:
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 }; //Propagación
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }

//Combinar objetos usando propagación:
let objCombinado = { ...obj1, ...obj2 }; //Combinar objetos
console.log(objCombinado); // { a: 1, b: 2, c: 3, d: 4 }

