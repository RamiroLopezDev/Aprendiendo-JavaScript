// Exportación de módulo en Node.js
// Este archivo define una función y la exporta para que pueda ser utilizada en otros archivos.
export function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
// Ahora, en otro archivo, puedes importar y usar esta función

//Exportar una variable
export const PI = 3.14159;
export let name = "Ramiro";

// Exportación por defecto (opcional): Se utiliza para exportar una única funcionalidad o valor por defecto.
export default function resta(a, b){
    return a - b;
};
// Si usas export default, puedes importar sin llaves en el otro archivo.

//Expotación de una clase
export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
// Asegúrate de que este archivo esté en la misma carpeta que el archivo que lo importa.



