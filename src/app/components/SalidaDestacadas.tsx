import React, { useEffect, useRef, useState } from 'react';
import SalidaCard from './SalidasCard';
import { serviciosMock, expedicionesMock } from '../data/mockSalidas';
import { useRouter } from 'next/navigation';
import { Servicio } from '../types/servicio';
import { Expedicion } from '../types/expedicion';

// Agregar esta interfaz
interface SalidaDestacada {
  servicio: Servicio;
  expedicion: Expedicion;
}

const SalidasDestacadas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);

  const expedicionesDestacadas = expedicionesMock.slice(0, 3);

  const salidasDestacadas: SalidaDestacada[] = expedicionesDestacadas
    .map((expedicion) => {
      const servicio = serviciosMock.find(s => s.id_servicio === expedicion.id_servicio);

      if (!servicio) return null;

      return {
        servicio,
        expedicion
      };
    })
    .filter((item): item is SalidaDestacada => item !== null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          setTimeout(() => {
            setIsVisible(true);
          }, 400);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToSalidas = () => {
    router.push("/salidas");
  };

  return (
    <section
      ref={sectionRef}
      id="expediciones"
      className="py-16 overflow-hidden w-full"
    >
      <div className="container mx-auto">
        {/* Header con animaciones escalonadas */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-2 transition-all duration-1000 ease-out ${headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            Salidas Destacadas
          </h2>

          <div
            className={`h-1 bg-amber-500 mx-auto my-4 transition-all duration-800 ease-out ${headerVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
              }`}
            style={{ transitionDelay: '300ms' }}
          />

          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out ${headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '500ms' }}
          >
            Las experiencias más increíbles en las mejores montañas de nuestro país
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {salidasDestacadas.map(({ servicio, expedicion }, index) => (
            <SalidaCard
              key={expedicion.id_expedicion}
              servicio={servicio}
              expedicion={expedicion}
              index={index}
            />
          ))}
        </div>

        {/* Botón final animado */}
        <div className="text-center">
          <button
            className={`group relative overflow-hidden bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-xl text-lg font-medium transition-all duration-500 transform hover:scale-105 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '1000ms' }}
            onClick={goToSalidas}
          >
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            <span className="relative z-10">Ver Todas las Salidas</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SalidasDestacadas;