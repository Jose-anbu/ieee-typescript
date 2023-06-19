/*for (let i = 1; i <= 10; i++) {
    console.log(i);
}*/

// Ejemplo usando for, if-else
/*for (let diaDeSemana = 1; diaDeSemana <= 7; diaDeSemana++) {
    if (diaDeSemana === 1) {
        console.log("Hoy es Lunes");
    } else if (diaDeSemana === 2) {
        console.log("Hoy es Martes");
    } else if (diaDeSemana === 3) {
        console.log("Hoy es Miércoles");
    } else if (diaDeSemana === 4) {
        console.log("Hoy es Jueves");
    } else if (diaDeSemana === 5) {
        console.log("Hoy es Viernes");
    } else if (diaDeSemana === 6) {
        console.log("Hoy es Sábado");
    } else {
        console.log("Hoy es Domingo");
    }
}*/

// Ejemplo usando for y switch
for (let diaDeSemana = 1; diaDeSemana <= 8; diaDeSemana++) {
    switch (diaDeSemana) {
        case 1: console.log("Hoy es Lunes");
            break;
        case 2: console.log("Hoy es Martes");
            break;
        case 3: console.log("Hoy es Miércoles");
            break;
        case 4: console.log("Hoy es Jueves");
            break;
        case 5: console.log("Hoy es Viernes");
            break;
        case 6: console.log("Hoy es Sábado");
            break;
        case 7: console.log("Hoy es Domingo");
            break;
        default:
            console.log("Este no es un día de la semana correcto", diaDeSemana);
            break;
    }
}