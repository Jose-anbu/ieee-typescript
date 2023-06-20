interface IVacunas {
    rabia: boolean,
    moquilloCanino: boolean,
    parvo: boolean
}

interface IPerro {
    readonly nombre: string;
    raza: string;
    edad: number;
    comidasFavoritas: string[];
    gustaJugar: boolean;
    vacunas?: IVacunas;
    madre?: IPerro;
    padre?: IPerro;
    crecer: () => void;
    sumarInformacionPadre: (padre: IPerro) => void;
    sumarInformacionMadre: (madre: IPerro) => void;
    sumarVacunas: (vacunas: IVacunas) => void;
}

// funcion crecer no recibe parametros ni retorna un valor
// funcion sumarInformacionPadre recibe parametro pero no retorna valor
// funcion sumarInformacionMadre recibe parametro pero no retorna valor
// funcion sumarVacunas recibe parametro pero no retorna valor
