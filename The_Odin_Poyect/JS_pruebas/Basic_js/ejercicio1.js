// ============================================
// EJERCICIO DE PRACTICA: Variables, Comparaciones y Condicionales
// ============================================
//
// Vas a construir un pequeño "sistema de acceso a un cine".
// Completa el codigo donde dice TODO. No borres los console.log,
// son los que te van a decir si vas por buen camino.

// ---- PARTE 1: Variables ----
// 1. Crea una variable "edad" (usa let) y asignale un numero, por ejemplo 16.
// 2. Crea una constante "precioEntrada" con el valor 8 (el precio base en dolares).
// 3. Crea una variable "tieneAcompanante" (usa let) de tipo booleano (true o false).

// TODO: declara aca las 3 variables

let edad = 16;
const precioEntrada = 8;
let tieneAcompanante = false;
let sala;
let esMayorDeEdad;
let tipoPelicula;
let precioFinal;
let entradaDenegada;

// ---- PARTE 2: Comparaciones ----
// Usando la variable "edad", comprueba con el operador === si la persona
// es mayor o igual a 18. Guarda el resultado (true/false) en una nueva
// variable llamada "esMayorDeEdad".
//
// Pista: no existe un operador ">=” especial distinto al de otros lenguajes,
// se usa igual que en matematicas: >=

// TODO: crea la variable esMayorDeEdad

if (edad >= 18) {
    esMayorDeEdad = true;
} else {
    esMayorDeEdad = false;
    console.log("Es menor de edad");
}


// ---- PARTE 3: Condicionales (if / else if / else) ----
// Reglas para calcular el precio final de la entrada:
//   - Si "esMayorDeEdad" es true  -> precio = precioEntrada (sin cambios)
//   - Si "esMayorDeEdad" es false y "edad" es mayor o igual a 12 -> precio = precioEntrada - 3 (descuento adolescente)
//   - Si "edad" es menor a 12 -> precio = precioEntrada - 5 (descuento nino)
//
// Guarda el resultado en una variable "precioFinal".

// TODO: escribe el if / else if / else que calcule "precioFinal"

if (esMayorDeEdad===true) {
    precioFinal = precioEntrada;
} else if (esMayorDeEdad===false && edad >= 12) {
    precioFinal = precioEntrada - 3;
} else if (edad < 12) {
    precioFinal = precioEntrada - 5;
}


// ---- PARTE 4: Operadores logicos (&&, ||) ----
// Si la persona NO es mayor de edad (esMayorDeEdad === false) Y ademas
// no tiene acompanante (tieneAcompanante === false), no puede entrar al cine.
// Guarda el resultado (true/false) en una variable "entradaDenegada".

// TODO: crea la variable entradaDenegada usando && (AND)
if (esMayorDeEdad===false && tieneAcompanante===false) {
    entradaDenegada = true;
} else {
    entradaDenegada = false;
}


// ---- PARTE 5: switch ----
// El cine tiene 3 salas segun el tipo de pelicula. Crea una variable
// "tipoPelicula" con uno de estos valores (elige uno para probar):
// "accion", "terror" o "comedia".
//
// Usa un switch para asignar el numero de sala a una variable "sala":
//   "accion"  -> sala = 1
//   "terror"  -> sala = 2
//   "comedia" -> sala = 3
//   cualquier otro valor -> sala = 0 (default)

// TODO: declara "tipoPelicula" y escribe el switch

switch (tipoPelicula) {
    case "accion":
       sala = 1;
        break;
    case "terror":
        sala = 2;
        break;
    case "comedia":
        sala = 3;
        break;
    default:
        sala = 0;
        break;
}

// ---- PARTE 6: Resultado final ----
// No modifiques esto, es para que verifiques tus resultados.
console.log("Edad: " + edad);
console.log("Es mayor de edad: " + esMayorDeEdad);
console.log("Precio final de la entrada: $" + precioFinal);
console.log("Entrada denegada: " + entradaDenegada);
console.log("Sala asignada: " + sala);
