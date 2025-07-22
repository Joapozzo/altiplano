export interface Usuario {
    id_usuario: number;
    nombre: string;
    apellido: string;
    dni: string;
    fecha_nacimiento: string; // "YYYY-MM-DD"
    nacionalidad: string;
    provincia: string;
    ciudad: string;
    telefono: string;
    email: string;
    estado: string; // ej: "Activo", "Inactivo"
    fecha_registro: string;
}

export interface Coordinador {
    id_coordinador: number;
    nombre: string;
    apellido: string;
    dni: string;
    fecha_nacimiento: string;
}
