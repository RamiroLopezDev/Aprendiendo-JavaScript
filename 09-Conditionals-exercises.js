//EJERCICIOS DE CONDICIONALES

//1. Imprime por consola tu nombre si una variable toma su valor.
let name = "Ramiro";
if (name=="Ramiro"){
    console.log("Mi nombre es " + name);
}

//2. Imprimir por consola un mensaje si el usuario y contraseña coincide con unos establecidos.
let user = "ramiro.lpz";
let password = "12345";
if (user == "ramiro.lpz" && password == "12345") {
    console.log("Usuario y contraseña correctos");
}
else {
    console.log("Usuario o contraseña incorrectos");
}

//3. Verifica si un numero es positivo, negativo o cero y muestra un mensaje por consola.
let number = -5;
if (number > 0) {
    console.log("El número es positivo");
} 
else if (number < 0) {
    console.log("El número es negativo");
}
else {
    console.log("El número es cero");
}

//4. Verifica si una persona puede votar o no, según su edad; e indica cuantos años le faltan para poder votar si es menor de edad.
let edad = 36;
let edadParaVotar = 18;

if (edad>=18) {
    console.log("Puede votar.");
} 
else {
    let anosParaVotar = edadParaVotar - edad;
    console.log("No puede votar. Le faltan " + anosParaVotar + " años para poder votar.");
}

//5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable, según la edad de una persona.
let edadPersona = 16;
let categoria = (edadPersona >= 18) ? "adulto" : "menor";
console.log("La persona es un " + categoria);

//6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".
let month = 3; // 1: Enero, 2: Febrero, 3: Marzo, 4: Abril, 5: Mayo, 6: Junio, 7: Julio, 8: Agosto, 9: Septiembre, 10: Octubre, 11: Noviembre, 12: Diciembre

if (month <=1 && month<=2 || month == 12) {
    console.log("VERANO");
} 
else if (month  >= 3 && month  <=6) {
    console.log("OTOÑO");
} 
else if (month  >= 7 && month  <= 9) {
    console.log("INVIERNO");
}
else if (month >= 10 && month  <= 11) {
    console.log("PRIMAVERA");
}


//7. Muestra el número de dias que tiene un mes dependiendo de la variable del ejercicio anterior.
let mesActual = 3; // 1: Enero, 2: Febrero, 3: Marzo, 4: Abril, 5: Mayo, 6: Junio, 7: Julio, 8: Agosto, 9: Septiembre, 10: Octubre, 11: Noviembre, 12: Diciembre
let dias;
if (mesActual == 1 || mesActual == 3 || mesActual == 5 || mesActual == 7 || mesActual == 8 || mesActual == 10 || mesActual == 12) {
    dias = 31;
    console.log("El mes tiene " + dias + " días.");
} else if (mesActual == 4 || mesActual == 6 || mesActual == 9 || mesActual == 11) {
    dias = 30;
    console.log("El mes tiene " + dias + " días.");
}
else if (mesActual == 2) {
    dias = 28; // Considerando un año no bisiesto
    console.log("El mes tiene " + dias + " días.");
} 
else {
    dias = "Mes no válido";
    console.log(dias);
}

//8. Usa switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let saludo = "español"; // "español", "inglés", "francés", "alemán"
switch (saludo) {
    case "español":
        console.log("¡Hola!");
        break;
    case "inglés":
        console.log("Hello!");
        break;
    case "francés":
        console.log("Bonjour!");
        break;
    case "alemán":
        console.log("Hallo!");
        break;
    case "italiano":
        console.log("Ciao!");
        break;
    default:
        console.log("Idioma no reconocido");
}

//9.Usa un swuitch para hacer de nuevo el ejercicio 6.
let mess = 2; // 1: Enero, 2: Febrero, 3: Marzo, 4: Abril, 5: Mayo, 6: Junio, 7: Julio, 8: Agosto, 9: Septiembre, 10: Octubre, 11: Noviembre, 12: Diciembre

switch (mess) {
    case 1:
        console.log("VERANO");
        break;
    case 2:
        console.log("VERANO");
        break;
    case 3:
        console.log("OTOÑO");
        break;
    case 4:
        console.log("OTOÑO");
        break;
    case 5:
        console.log("OTOÑO");
        break;
    case 6:
        console.log("OTOÑO");
        break;
    case 7:
        console.log("INVIERNO");
        break;
    case 8:
        console.log("INVIERNO");
        break;
    case 9:
        console.log("INVIERNO");
        break;
    case 10:
        console.log("PRIMAVERA");
        break;
    case 11:
        console.log("PRIMAVERA");
        break;
    case 12:
        console.log("VERANO");
        break;
    default:
        console.log("Mes no válido");
}


//10. Usa un swuitch para hacer de nuevo el ejercicio 7.
let mes = 2; // 1: Enero, 2: Febrero, 3: Marzo, 4: Abril, 5: Mayo, 6: Junio, 7: Julio, 8: Agosto, 9: Septiembre, 10: Octubre, 11: Noviembre, 12: Diciembre
switch (mes) {
    case 1:
        console.log("El mes tiene 31 días.");
        break;
    case 2:
        console.log("El mes tiene 28 días."); // Considerando un año no bisiesto
        break;
    case 3:
        console.log("El mes tiene 31 días.");
        break;
    case 4:
        console.log("El mes tiene 30 días.");
        break;
    case 5:
        console.log("El mes tiene 31 días.");
        break;
    case 6:
        console.log("El mes tiene 30 días.");
        break;
    case 7:
        console.log("El mes tiene 31 días.");
        break;
    case 8:
        console.log("El mes tiene 31 días.");
        break;
    case 9:
        console.log("El mes tiene 30 días.");
        break;
    case 10:
        console.log("El mes tiene 31 días.");
        break;
    case 11:
        console.log("El mes tiene 30 días.");
        break;
    case 12:
        console.log("El mes tiene 31 días.");
        break;
    default:
        console.log("Mes no válido");
}

