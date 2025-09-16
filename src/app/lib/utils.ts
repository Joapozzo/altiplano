export const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-AR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const formatearFechaCorta = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};