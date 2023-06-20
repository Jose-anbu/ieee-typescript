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

// Aplicando a perro1 interfaz IPerro
const perro1: IPerro = {
    "nombre": "Rufo",
    "raza": "Golden Retriever",
    "edad": 5,
    "peso": 23,
    "color": "marron",
    "comidasFavoritas": ["Solomillo", "Atun"],
    "gustaJugar": true,
    "vacunas": {
        "rabia": true,
        "moquilloCanino": true,
        "parvo": true,
    }
}

// Aplicando a perro2 interfaz IPerro (vacunas es opcional por lo que al no tener vacunas no genera error)
const perro2: IPerro = {
    "nombre": "Rufo",
    "raza": "Golden Retriever",
    "edad": 5,
    "peso": 45,
    "color": "marron",
    "comidasFavoritas": ["Solomillo", "Atun"],
    "gustaJugar": true
}

// Definiendo y aplicando interfaz IVacunas
interface IVacunas {
    rabia: boolean,
    moquilloCanino: boolean,
    parvo: boolean
}

interface IPerro_ {
    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    color: string;
    comidasFavoritas: string[];
    gustaJugar: boolean;
    vacunas?: IVacunas;
    madre?: IPerro;
    padre?: IPerro;
}

const perro3: IPerro_ = {
    "nombre": "Rufo",
    "raza": "Golden Retriever",
    "edad": 5,
    "peso": 23,
    "color": "marron",
    "comidasFavoritas": ["Solomillo", "Atun"],
    "gustaJugar": true,
    "vacunas": {
        "rabia": true,
        "moquilloCanino": true,
        "parvo": true,
    }
}