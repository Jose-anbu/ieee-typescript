let diasDeSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

console.log(diasDeSemana[0]);

// push() -> agrega el elemento al final del array
diasDeSemana.push('Octes');
console.log(diasDeSemana);

// pop() -> elimina el último elemento del array
console.log(diasDeSemana.pop());
console.log(diasDeSemana);

// Definiendo un array vacio
let diasDeSemana_: string[] = [];
diasDeSemana_.push('Lunes'); // llenando el array
diasDeSemana_.push('Martes');
console.log(diasDeSemana_);

// Imprimir un array
for (let i = 0; i < diasDeSemana.length; i++) {
    console.log(diasDeSemana[i]);
}