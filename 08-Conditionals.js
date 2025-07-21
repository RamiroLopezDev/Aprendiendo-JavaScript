//Condicionales en JavaScript: Permiten ejecutar diferentes bloques de código basados en condiciones específicas y tomar decisiones en el flujo del programa.


//IF (SI): Si pasa esto, haz esto.
//Sintaxis: 
if (condition) {
    // Código a ejecutar si la condición es verdadera
}  
//EJEMPLO:
let edad=31;
if (edad >=18) {
    console.log("Sos mayor de edad");
}


//ELSE (SINO): Si pasa esto, haz esto; si no, haz otra cosa.
//Sintaxis: 
if (condition) {
    // Código a ejecutar si la condición es verdadera
}  
else {
    // Código a ejecutar si la condición es falsa
} 
//EJEMPLO:
let precioNintendoSwitch2=800;
if (precioNintendoSwitch2 > 800) {
    console.log("NO COMPRAR");
}
else {
    console.log("COMPRAR");
}


//IF ELSE IF (SI SINO SI): Si pasa esto, haz esto; si no, haz otra cosa; si no, haz otra cosa.
//Sintaxis:
if (condition1) {
    // Código a ejecutar si la condición1 es verdadera
}
else if (condition2) {
    // Código a ejecutar si la condición2 es verdadera
}
else {
    // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
}
//EJEMPLO:
let SatO2= 95;
if (SatO2 >= 92){
    console.log("Saturación de oxígeno normal");
}
else if (SatO2 >= 88 && SatO2 < 92) {
    console.log("Saturación de oxígeno baja");
}
else {
    console.log("Saturación de oxígeno crítica");
}



// SWITCH (CAMBIAR)
//Sintaxis:
switch (expression) {
    case value1:
        // Código a ejecutar si expression es igual a value1
        break;
    case value2:
        // Código a ejecutar si expression es igual a value2
        break;
    // Puedes agregar más casos según sea necesario
    default:
        // Código a ejecutar si expression no coincide con ningún caso
}
//EJEMPLO:
let nivel = 1 //1: Rojo, 2: Amarillo, 3: Verde
let categoria //Puede ser verde, amarillo o rojo
switch (nivel){
    case 1:
        categoria = "Rojo";
        break;
    case 2:
        categoria = "Amarillo";
        break;
    case 3:
        categoria = "Verde";
        break;
    default:
        console.log("Categoría no válida")
}
