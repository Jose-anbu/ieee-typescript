// DECLARACION DE UNA FUNCION
// function nombreFuncion(nombreParametro: tipoDatoParametro): tipoDeDatoDeRetorno{}
function miFuncion(arregloNumeros: number[]): number {
    return 0;
}

// Ejemplo
let listaNumeros: number[] = [1, 2, 3, 4, 5];

function sumaArreglo(arregloNumeros: number[]): number {
    let suma = 0;
    for (let numero of arregloNumeros) {
        suma += numero;
    }
    return suma;
}

console.log(sumaArreglo(listaNumeros));
