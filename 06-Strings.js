// STRINGS

// Concatenación de cadenas
let nombre = "Ramiro";
let apellido = "Lopez";
console.log(`Este es mi nombre completo: ${nombre} ${apellido}`); // Ramiro Lopez
console.log(typeof nombre); // string
console.log(typeof apellido); // string

// Longitud de una cadena
let texto = "Hola, soy Ramiro Lopez";
console.log(texto.length); // 22, incluyendo espacios y coma

// Acceso a caracteres de una cadena
console.log(texto[0]); // H
console.log(texto[8]); // o (coma)

// Métodos de cadenas
console.log(texto.toUpperCase()); // HOLA, SOY RAMIRO LOPEZ
console.log(texto.toLowerCase()); // hola, soy ramiro lopez
console.log(texto.indexOf("Ramiro")); // 10, posición de la primera letra de "Ramiro"
console.log(texto.lastIndexOf("o")); // 20, posición de la última letra "o"
console.log(texto.includes("Ramiro")); // true, verifica si "Ramiro" está en el texto
console.log(texto.includes("Martín")); // false, verifica si "Martín" está en el texto
console.log(texto.startsWith("Hola")); // true, verifica si el texto empieza con "Hola"
console.log(texto.endsWith("Lopez")); // true, verifica si el texto termina con "Lopez"
console.log(texto.slice(0, 4)); // Hola, extrae los primeros 4 caracteres
console.log(texto.slice(5, 8)); // soy, extrae desde el índice 5 hasta el 8 (sin incluir el 8)
console.log(texto.slice(-5)); // Lopez, extrae los últimos 5 caracteres
console.log(texto.replace("Ramiro", "Martín")); // Hola, soy Martín Lopez, reemplaza "Ramiro" por "Martín"
console.log(texto.trim()); // "Hola, soy Ramiro Lopez", elimina espacios al inicio y al final
