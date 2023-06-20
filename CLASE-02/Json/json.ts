// json -> utilizados para representar objetos. Se basan en el concepto de clave-valor

// Ejemplo
let perro = {
    "nombre": "Rufo",
    "raza": "Golden Retriever",
    "edad": 5,
    "comidasFavoritas": ["Solomillo", "Atun"],
    "gustaJugar": true,
    "vacunas": {
        "rabia": true,
        "moquillo_canino": true,
        "parvo": true,
    }
}

console.log(perro);

// Imprimir un valor específico
console.log(perro.nombre);

// Modificar un valor
perro.edad = 7;
console.log(perro.edad);
