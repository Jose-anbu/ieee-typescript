interface IVacunas {
    rabia: boolean,
    moquilloCanino: boolean,
    parvo: boolean
}

interface IPerro {
    nombre: string;
    raza: string;
    edad: number;
    comidasFavoritas: string[];
    vacunas?: IVacunas;
    madre?: IPerro;
    padre?: IPerro;
}


// class -> es como un modelo, que puede instanciarse las veces que sea necesario para crear diferentes objetos

// Modelado de un Perro
class Perro implements IPerro {
    private _nombre: string;
    private _raza: string;
    private _edad: number;
    private _comidasFavoritas: string[];
    private _vacunas?: IVacunas;
    private _madre?: IPerro;
    private _padre?: IPerro;

    constructor(
        nombre: string,
        raza: string,
        edad: number,
        comidasFavoritas: string[],
        vacunas?: IVacunas,
        madre?: IPerro,
        padre?: IPerro,
    ) {
        this._nombre = nombre;
        this._raza = raza;
        this._edad = edad;
        this._comidasFavoritas = comidasFavoritas;
        this._vacunas = vacunas;
        this._madre = madre;
        this._padre = padre;
    }

    get nombre() {
        return this._nombre;
    }

    get raza() {
        return this._raza;
    }

    get edad() {
        return this._edad;
    }

    get comidasFavoritas() {
        return this._comidasFavoritas;
    }

    get vacunas() {
        return this._vacunas;
    }

    get madre() {
        return this._madre;
    }

    get padre() {
        return this._padre;
    }

    crecer() {
        this._edad++;
    }

    sumarInformacionPadre(padre: IPerro) {
        this._padre = padre;
    }

    sumarInformacionMadre(madre: IPerro) {
        this._madre = madre;
    }

    sumarVacunas(vacunas: IVacunas) {
        this._vacunas = vacunas;
    }
}

// Instancia de la clase Perro
const miPerro = new Perro("Fido", "Golden Retriever", 5, ["carne", "queso"], { rabia: true, moquilloCanino: true, parvo: true });

console.log(miPerro);