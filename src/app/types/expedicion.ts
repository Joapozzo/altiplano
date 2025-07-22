export interface Expedicion {
    id_expedicion: number;
    id_servicio: number;
    fecha_salida: string; // formato ISO, ej: "2025-02-02"
    fecha_fin: string;
    cupos: number;
    estado: string; // ej: "Activa", "Finalizada", "Suspendida"
    precio: number; // en USD
    itinerario: string; // puede ser HTML, Markdown o texto simple
}
