export interface SalidaCalendario {
    expedicion: any;
    servicio: any;
    fechaInicio: Date;
    fechaFin: Date;
}

export interface MesData {
    numero: number;
    nombre: string;
    nombreCorto: string;
    year: number;
    salidas: SalidaCalendario[];
}