export interface Inscripcion {
    id_inscripcion: number;
    id_usuario: number;
    id_expedicion: number;
    fecha_url: string; // fecha de inscripción
    estado: string; // "Inscripto", "Cancelado", "Confirmado"
}
