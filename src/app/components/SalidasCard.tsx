import React from 'react';
import { Clock, Mountain, Calendar, DollarSign, Users, ChevronRight } from 'lucide-react';
import { Servicio } from '../types/servicio';
import { Expedicion } from '../types/expedicion';

interface SalidaCardProps {
  servicio: Servicio;
  expedicion: Expedicion;
}

const SalidaCard = ({ servicio, expedicion }: SalidaCardProps) => {
  // Formatear fechas
  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-AR', { 
      day: 'numeric', 
      month: 'short' 
    });
  };

  const fechaInicio = formatearFecha(expedicion.fecha_salida);
  const fechaFin = formatearFecha(expedicion.fecha_fin);
  const rangoFechas = `${fechaInicio} - ${fechaFin}`;

  // Obtener precio principal (primer precio)
  const precioMinimo = expedicion.precios[0];
  const precioPrincipal = expedicion.precios.length > 1 
    ? `Desde ${precioMinimo.moneda} ${precioMinimo.precio.toLocaleString()}`
    : `${precioMinimo.moneda} ${precioMinimo.precio.toLocaleString()}`;

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

  // Obtener nivel de dificultad
  const obtenerDificultad = () => {
    if (servicio.altura_maxima >= 5000) return 'Muy Alta';
    if (servicio.altura_maxima >= 4000) return 'Alta';
    if (servicio.altura_maxima >= 3000) return 'Media-Alta';
    return 'Media';
  };

  // Truncar descripción
  const descripcionCorta = servicio.desc.length > 120 
    ? servicio.desc.substring(0, 120) + '...' 
    : servicio.desc;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105">
      <div className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url('${servicio.fotos[0] || '/placeholder-mountain.jpg'}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${etiqueta.color}`}>
            {etiqueta.texto}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-lg px-2 py-1">
          <span className="text-xs font-medium text-gray-800">{rangoFechas}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold mb-1">{servicio.nombre}</h3>
          {/* <p className="text-sm text-gray-500">{servicio.ubicacion || 'Argentina'}</p> */}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {descripcionCorta}
        </p>
        
        {/* Información clave */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2 text-amber-600" />
            <span>{servicio.duracion_dias} días / {servicio.duracion_noches} noches</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Mountain size={16} className="mr-2 text-amber-600" />
            <span>{servicio.altura_maxima.toLocaleString()}m - Dificultad {obtenerDificultad()}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2 text-amber-600" />
            <span>Máx. {servicio.cupos_maximos} personas - {expedicion.cupos_disponibles} disponibles</span>
          </div>
        </div>

        {/* Precio y CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-lg font-bold text-gray-900">{precioPrincipal}</span>
            {expedicion.precios.length > 1 && (
              <p className="text-xs text-gray-500">Varios paquetes disponibles</p>
            )}
          </div>
          <button className="text-amber-600 hover:text-amber-800 font-medium flex items-center">
            Ver detalles <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalidaCard;