// FUNCION main()
function sumaArreglo(arregloNumeros: number[]): number {
    let suma = 0;
    for (let numero of arregloNumeros) {
        suma += numero;
    }
    return suma;
}

function main(): void {
    let listaNumeros: number[] = [1, 2, 3, 4, 5];
    console.log("Usando función main:", sumaArreglo(listaNumeros));
}

main();