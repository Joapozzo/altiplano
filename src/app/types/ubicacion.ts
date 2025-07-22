export interface Ubicacion {
    id_ubicacion: number;
    pais: string;
    provincia: string;
    zona: string;
}

export interface Lugar {
    id_lugar: number;
    nombre: string;
    tipo_lugar: string; // ej: "Montaña", "Campamento"
    altitud: number; // en metros
    desc: string;
    id_ubicacion: number;
}