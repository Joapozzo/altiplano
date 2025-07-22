import React from 'react';
import SalidaCard from './SalidasCard';
import { serviciosMock, expedicionesMock } from '../data/mockSalidas';

const SalidasDestacadas = () => {
  // Mezclamos servicio + expedición para armar la card
  const salidas = serviciosMock.map((servicio) => {
    const expedicion = expedicionesMock.find(e => e.id_servicio === servicio.id_servicio);

    // Si no hay expedición, no lo mostramos
    if (!expedicion) return null;

    // Armamos rango de fechas
    const fechaInicio = new Date(expedicion.fecha_salida).toLocaleDateString('es-AR', { day: 'numeric', month: 'short' });
    const fechaFin = new Date(expedicion.fecha_fin).toLocaleDateString('es-AR', { day: 'numeric', month: 'short' });

    // Definimos etiqueta dinámica (opcional, podés cambiar el criterio)
    let etiqueta = { texto: 'Destacado', color: 'bg-amber-100 text-amber-800' };

    if (servicio.nombre.toLowerCase().includes('aconcagua')) {
      etiqueta = { texto: 'Expedición', color: 'bg-amber-100 text-amber-800' };
    } else if (servicio.nombre.toLowerCase().includes('champaquí')) {
      etiqueta = { texto: 'Próxima Salida', color: 'bg-amber-100 text-amber-800' };
    }

    return {
      id: servicio.id_servicio,
      imagen: servicio.fotos[0],
      etiqueta,
      fecha: `${fechaInicio} - ${fechaFin}`,
      titulo: servicio.nombre,
      descripcion: servicio.desc,
      duracion: `${servicio.duracion_dias} días`,
      dificultad: servicio.altura_maxima > 5000 ? 'Dificultad alta' : servicio.altura_maxima > 3000 ? 'Dificultad media-alta' : 'Dificultad media'
    };
  }).filter(Boolean);

  return (
    <section id="expediciones" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Salidas Destacadas</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Las experiencias más increíbles en las mejores montañas de nuestro país
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salidas.map((salida, index) => (
            <SalidaCard key={index} salida={salida} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition shadow-md text-lg">
            Ver Todas las Salidas
          </button>
        </div>
      </div>
    </section>
  );
};

export default SalidasDestacadas;
