import React from 'react';
import SalidaCard from './SalidasCard';
import { serviciosMock, expedicionesMock } from '../data/mockSalidas';
import { Servicio } from '../types/servicio';
import { Expedicion } from '../types/expedicion';

const SalidasDestacadas = () => {
  // Seleccionamos solo 3 expediciones destacadas
  const expedicionesDestacadas = expedicionesMock.slice(0, 3);

  // Combinamos servicio + expedición para cada card
  const salidasDestacadas = expedicionesDestacadas.map((expedicion) => {
    const servicio = serviciosMock.find(s => s.id_servicio === expedicion.id_servicio);
    
    if (!servicio) return null;

    return {
      servicio,
      expedicion
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
          {salidasDestacadas.map(({ servicio, expedicion }) => (
            <SalidaCard 
              key={expedicion.id_expedicion} 
              servicio={servicio} 
              expedicion={expedicion} 
            />
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