// interfaz -> se utilizan para modelar un objeto JSON, arrays, función, clases
// Estructura que define el "contrato" de aplicación

// Modelando la interfaz Perro
interface IPerro {
    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    color: string;
    comidasFavoritas: string[];
    gustaJugar: boolean;
    vacunas?: {     // el signo ? indica que es opcional
        rabia: boolean;
        moquilloCanino: boolean;
        parvo: boolean;
    }
}

