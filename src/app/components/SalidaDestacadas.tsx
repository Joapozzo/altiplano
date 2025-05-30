import React from 'react';
import SalidaCard from './SalidasCard';

const SalidasDestacadas = () => {

  const salidas = [
    {
      id: 1,
      imagen: 'imgs/aconcagua.jpg',
      etiqueta: { texto: 'Próxima Salida', color: 'bg-amber-100 text-amber-800' },
      fecha: '17-19 Mayo',
      titulo: 'Cerro Champaquí',
      descripcion: 'El punto más alto de las Sierras de Córdoba te espera con vistas panorámicas únicas.',
      duracion: '3 días',
      dificultad: 'Dificultad media'
    },
    {
      id: 2,
      imagen: 'imgs/champaqui.jpg',
      etiqueta: { texto: 'Destacado', color: 'bg-amber-100 text-amber-800' },
      fecha: '25-28 Mayo',
      titulo: 'Laguna de los Tres',
      descripcion: 'El mirador del imponente Fitz Roy, una de las vistas más impresionantes de la Patagonia.',
      duracion: '4 días',
      dificultad: 'Dificultad media-alta'
    },
    {
      id: 3,
      imagen: 'imgs/vallecitos.jpg',
      etiqueta: { texto: 'Expedición', color: 'bg-amber-100 text-amber-800' },
      fecha: '2-5 Junio',
      titulo: 'Vallecitos',
      descripcion: 'La puerta de entrada al andinismo en Mendoza, con cumbres que superan los 5000 msnm.',
      duracion: '4 días',
      dificultad: 'Dificultad alta'
    }
  ];

  return (
    <section id="salidas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Salidas Destacadas</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Las experiencias más increíbles en las mejores montañas de nuestro país
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salidas.map((salida) => (
            <SalidaCard key={salida.id} salida={salida} />
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