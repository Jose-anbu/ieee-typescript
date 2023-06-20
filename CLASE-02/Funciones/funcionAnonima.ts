// FUNCION ANONIMA
// const nombreFuncion = (nombreParametro: tipoDatoParametro): tipoDeDatoDeRetorno => {}
// también puede ser con let
const miFuncion_ = (arregloNumeros: number[]): number => {
    return 0;
}

// Ejemplo
let listaNumeros: number[] = [1, 2, 3, 4, 5];

const sumarArreglo = (arregloNumeros: number[]): number => {
    let suma = 0;
    for (let numero of arregloNumeros) {
        suma += numero;
    }
    return suma;
}

console.log("Usando función anónima:", sumarArreglo(listaNumeros));
