//Importación de módulo en Node.js
// Este archivo importa la función definida en otro archivo y la utiliza.
import {saludar, PI, name, Persona} from './28-Export-module.js'; // Asegúrate de usar la extensión .js si es necesario
import resta from './28-Export-module.js';

//Este archivo importa una variable definida en otro archivo.
console.log(saludar('JavaScript')); 
console.log(`El valor de PI es: ${PI}`);
console.log(`El nombre es: ${name}`);

//Importación por defecto: Se utiliza para importar una única funcionalidad o valor por defecto exportado.
console.log(resta(10, 5)); // Salida: 5

//Importación de una clase
console.log(new Persona('Ramiro', 32).saludar()); // Salida: Hola, mi nombre es Ramiro y tengo 32 años.

// Asegúrate de que el archivo 28-Export-module.js esté en la misma carpeta que este archivo.

// También asegúrate de que tu entorno de Node.js soporte módulos ES6 (puedes usar la extensión .mjs o configurar "type": "module" en package.json).

// Si estás usando CommonJS, la sintaxis sería diferente:
// const { saludar } = require('./28-Export-module');
// console.log(saludar('JavaScript')); // Salida: Hola, JavaScript!
// --- IGNORE ---