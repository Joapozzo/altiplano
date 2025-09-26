export const formatearFecha = (fecha: string) => {
    const [year, month, day] = fecha.split('-');
    const fechaLocal = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    return fechaLocal.toLocaleDateString('es-AR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const formatearFechaCorta = (fecha: string) => {
    const [year, month, day] = fecha.split('-');
    const fechaLocal = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    return fechaLocal.toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};