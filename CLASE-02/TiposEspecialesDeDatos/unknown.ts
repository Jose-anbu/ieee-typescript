// unknown -> asume que la variable puede ser "o todo o nada"
let valor: unknown = 5;

// let valor1: unknown = valor; // Ok
// let valor2: any = valor; // Ok
// let valor3: boolean = valor; // Error
// let valor4: number = valor; // Error
// let valor5: string = valor; // Error
// let valor6: object = valor; // Error
// let valor7: any[] = valor; // Error
// let valor8: Function = valor; // Error

// valor.foo.bar; // Error
// valor.trim(); // Error
// valor(); // Error
// new valor(); // Error
// valor[0][1]; // Error

// Función para validar el tipo de dato antes de hacer uso de las propiedades y métodos específicos para cada tipo de dato
function manejarUnknown(valor: unknown) {
    if (typeof valor === "string") {
        // valor ahora está acotado al tipo 'string'
        console.log(valor.toUpperCase());
    } else if (valor instanceof Date) {
        // valor ahora está acotado al tipo 'Date'
        console.log(valor.getFullYear());
    } else {
        // valor es todavía del tipo 'unknown'
        console.log("Tipo desconocido", valor);
    }
}

manejarUnknown(valor);