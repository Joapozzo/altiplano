import { Expedicion } from "../types/expedicion";
import { Servicio } from "../types/servicio";

export const obtenerEstadoExpedicion = (expedicion: Expedicion) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const fechaSalida = new Date(expedicion.fecha_salida || '');
    fechaSalida.setHours(0, 0, 0, 0);

    // Verificar si la expedición ya expiró
    if (fechaSalida < hoy) {
        return { texto: 'Expirada', color: 'bg-gray-100 text-gray-600' };
    }

    const diasParaSalida = Math.ceil((fechaSalida.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

    if (expedicion.cupos_disponibles === 0) {
        return { texto: 'Completa', color: 'bg-red-100 text-red-800' };
    }
    if (diasParaSalida <= 30) {
        return { texto: 'Próxima Salida', color: 'bg-orange-100 text-orange-800' };
    }
    if (expedicion.cupos_disponibles <= 3) {
        return { texto: 'Últimos Cupos', color: 'bg-yellow-100 text-yellow-800' };
    }
    return { texto: 'Disponible', color: 'bg-green-100 text-green-800' };
};

export const obtenerDificultad = (servicio: Servicio) => {
    if (servicio.id_dificultad === 3) return { texto: 'Avanzado', color: 'text-red-600', bg: 'bg-red-100' };
    if (servicio.id_dificultad === 2) return { texto: 'Medio', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { texto: 'Inicial', color: 'text-green-600', bg: 'bg-green-100' };
};

export const obtenerCuposDisponibles = (expedicion: Expedicion) => { 
    const cuposDisponibles = expedicion.cupos_disponibles - expedicion.cupos_ocupados;
    
    if (cuposDisponibles === 0) return "Sin cupos disponibles";
    if (cuposDisponibles === 1) return "Último cupo disponible";
    return `${cuposDisponibles} cupos disponibles`;
}

export const obtenerCuposDisponiblesSlash = (expedicion: Expedicion) => { 
    const cuposDisponibles = expedicion.cupos_disponibles - expedicion.cupos_ocupados;
    
    if (cuposDisponibles === 0) return "0";
    if (cuposDisponibles === 1) return "1";
    return `${cuposDisponibles}`;
}