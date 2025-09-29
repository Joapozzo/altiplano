import React, { useEffect, useRef, useState } from 'react';
import { Clock, Mountain, Users, ChevronRight } from 'lucide-react';
import { Servicio } from '../types/servicio';
import { Expedicion } from '../types/expedicion';
import { generateExpedicionLink } from '../hooks/useExpedicion';
import { obtenerDificultad } from '../lib/salidas.utils';
import { formatearFechaMasCorta } from '../lib/utils';

interface SalidaCardProps {
  servicio: Servicio;
  expedicion: Expedicion;
  index: number;
}

const SalidaCard = ({ servicio, expedicion, index }: SalidaCardProps) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const expedicionLink = generateExpedicionLink(expedicion, servicio);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);


  const fechaInicio = formatearFechaMasCorta(expedicion.fecha_salida || '');
  const fechaFin = formatearFechaMasCorta(expedicion.fecha_fin || '');
  const rangoFechas = `${fechaInicio} - ${fechaFin}`;

  // Obtener precio principal (primer precio)
  // const precioMinimo = expedicion.precios[0];
  // const precioPrincipal = expedicion.precios.length > 1
  //   ? `Desde ${precioMinimo.moneda} ${precioMinimo.precio.toLocaleString()}`
  //   : `${precioMinimo.moneda} ${precioMinimo.precio.toLocaleString()}`;

  // Determinar etiqueta dinámica basada en los datos
  const obtenerEtiqueta = () => {
    if (servicio.altura_maxima >= 5000) {
      return { texto: 'Alta Montaña', color: 'bg-red-100 text-red-800' };
    }
    if (servicio.cupos_maximos <= 6) {
      return { texto: 'Grupo Reducido', color: 'bg-blue-100 text-blue-800' };
    }
    if (expedicion.reserva_porcentaje) {
      return { texto: 'Requiere Reserva', color: 'bg-purple-100 text-purple-800' };
    }
    return { texto: 'Disponible', color: 'bg-green-100 text-green-800' };
  };

  const etiqueta = obtenerEtiqueta();
  const dificultad = obtenerDificultad(servicio);
  // Truncar descripción
  const descripcionCorta = servicio.desc.length > 120
    ? servicio.desc.substring(0, 120) + '...'
    : servicio.desc;

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 transform hover:scale-105 hover:shadow-xl ${isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative group">
        <div
          className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${servicio.fotos[0] || '/placeholder-mountain.jpg'})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 group-hover:from-black/50 transition-all duration-300"></div>
        </div>

        {/* Etiqueta animada */}
        <div
          className={`absolute top-4 left-4 transition-all duration-500 ${isCardVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4"
            }`}
          style={{ transitionDelay: `${index * 100 + 300}ms` }}
        >
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${etiqueta.color} shadow-lg`}
          >
            {etiqueta.texto}
          </span>
        </div>

        {/* Fechas animadas */}
        <div
          className={`absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-2 py-1 transition-all duration-500 ${isCardVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4"
            }`}
          style={{ transitionDelay: `${index * 100 + 400}ms` }}
        >
          <span className="text-xs font-medium text-gray-800">
            {rangoFechas}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Título animado */}
        <div
          className={`mb-3 transition-all duration-500 ${isCardVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: `${index * 100 + 500}ms` }}
        >
          <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
            {servicio.nombre}
          </h3>
        </div>

        {/* Descripción animada */}
        <p
          className={`text-gray-600 text-sm mb-4 leading-relaxed transition-all duration-500 ${isCardVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: `${index * 100 + 600}ms` }}
        >
          {descripcionCorta}
        </p>

        {/* Información clave animada */}
        <div
          className={`space-y-2 mb-4 transition-all duration-500 ${isCardVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: `${index * 100 + 700}ms` }}
        >
          <div className="flex items-center text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200">
            <Clock size={16} className="mr-2 text-amber-600" />
            <span>
              {servicio.duracion_dias} días / {servicio.duracion_noches} noches
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200">
            <Mountain size={16} className="mr-2 text-amber-600" />
            <span>
              {servicio.altura_maxima.toLocaleString()}m - Nivel{" "}
              {dificultad.texto}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200">
            <Users size={16} className="mr-2 text-amber-600" />
            <span>
              Máx. {servicio.cupos_maximos} personas -{" "}
              {expedicion.cupos_disponibles} disponibles
            </span>
          </div>
        </div>

        {/* Precio y CTA animados */}
        <div
          className={`flex items-center justify-between pt-4 border-t border-gray-100 transition-all duration-500 ${isCardVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: `${index * 100 + 800}ms` }}
        >
          {/* <div>
            <span className="text-lg font-bold text-gray-900">
              {precioPrincipal}
            </span>
            {expedicion.precios.length > 1 && (
              <p className="text-xs text-gray-500">
                Varios paquetes disponibles
              </p>
            )}
          </div> */}
          <button className="group text-amber-600 hover:text-amber-800 font-medium flex items-center transition-all duration-300 hover:bg-amber-50 px-3 py-1 rounded-lg"
            onClick={() => { window.location.href = expedicionLink; }}>
            Ver detalles
            <ChevronRight
              size={16}
              className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalidaCard;