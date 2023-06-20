// enums -> para modelar tipos de estado de una entidad
// Usan estructuras de datos que contienen constantes con nombre


// FORMAS DE INICIALIZAR UN ENUM

// ASIGNACION POR DEFECTO: la 1er constante tiene el valor 0, y las siguientes el valor anterior +1
// Uso: si realmente no interesa el valor, sino el nombre de la constante
enum Frutas {
    Manzana,  // 0
    Naranja,  // 1
    Banana,   // 2
    Mango,    // 3
    Uva,      // 4
    Frutilla  // 5
}

console.log("Enum Frutas:", Frutas.Banana);
console.log("Enum Frutas:", Frutas[1]);
console.log("Enum Frutas:", Frutas[9]);


// ASIGNACION POR INICIALIZACION
// Se indica el 1er valor numérico del enum, y los demás valores se inicializan automáticamente en el anterior + 1
enum Numeros {
    Diez = 10, // -> valor 10
    Once,   // 10 + 1 = 11 
    Doce,   // 11 + 1 = 12
    Trece,  // 12 + 1 = 13
    Catorce // 13 + 1 = 14
}

console.log("Enum Numeros:", Numeros.Trece);
console.log("Enum Numeros:", Numeros[11]);
console.log("Enum Numeros:", Numeros[2]);


// ASIGNACION POR INICIALIZACION COMPLETA
// Se indica el valor de todas las constantes
enum Color {
    Rojo = "ROJO",      // "ROJO"
    Verde = "VERDE",    // "VERDE"
    Azul = "AZUL"       // "AZUL"
}

console.log("Enum Color:", Color.Verde);

// COMPARACION
const miColorFavorito: string = Color.Rojo;

console.log(Color.Rojo === miColorFavorito);

// Enums declarados como CONSTANTES
const enum Color_ {
    Rojo = "ROJO",      // "ROJO"
    Verde = "VERDE",    // "VERDE"
    Azul = "AZUL"       // "AZUL"
}

// UNION DE TIPOS
type Estados = "Prendido" | "Apagado";

let estadoActual: Estados = "Apagado"; // Al ser del tipo Estados solo puede tomar uno de los 2 valores, 
                                       // si toma otro diferente dará error
