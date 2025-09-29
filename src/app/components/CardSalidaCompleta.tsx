import { useRouter } from "next/navigation";
import { Expedicion } from "../types/expedicion";
import { Servicio } from "../types/servicio";
import { Calendar, Mountain, Users, Clock, MapPin, ChevronRight } from 'lucide-react';
import { generateExpedicionLink } from "../hooks/useExpedicion";
import { obtenerCuposDisponiblesSlash, obtenerDificultad, obtenerEstadoExpedicion } from "../lib/salidas.utils";
import { formatearFechaCorta } from "../lib/utils";

// Componente de card más completa para esta página
interface SalidaCardCompletaProps {
    servicio: Servicio;
    expedicion: Expedicion;
}

const SalidaCardCompleta = ({ servicio, expedicion }: SalidaCardCompletaProps) => {
    const router = useRouter();

    const expedicionLink = generateExpedicionLink(expedicion, servicio);

    const fechaInicio = formatearFechaCorta(expedicion.fecha_salida || '');
    const fechaFin = formatearFechaCorta(expedicion.fecha_fin || '');

    const precioMinimo = expedicion.precios[0];
    const tieneMultiplesPaquetes = expedicion.precios.length > 1;
    // const precioPrincipal = tieneMultiplesPaquetes
    //     ? `Desde ${precioMinimo.moneda} ${precioMinimo.precio.toLocaleString()}`
    //     : `${precioMinimo.moneda} ${precioMinimo.precio.toLocaleString()}`;

    const dificultad = obtenerDificultad(servicio);
    const estadoExpedicion = obtenerEstadoExpedicion(expedicion);
    const cuposDisponibles = obtenerCuposDisponiblesSlash(expedicion);

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
                <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${servicio.fotos[0] || '/placeholder-mountain.jpg'}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${estadoExpedicion.color}`}>
                        {estadoExpedicion.texto}
                    </span>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold">{servicio.nombre}</h3>
                </div>
            </div>

            <div className="p-5">
                {/* Fechas */}
                <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar size={16} className="mr-2 text-amber-600" />
                    <span>{fechaInicio} - {fechaFin}</span>
                </div>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {servicio.desc}
                </p>

                {/* Características principales */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                        <Clock size={14} className="mr-1 text-amber-600" />
                        <span>{servicio.duracion_dias}d/{servicio.duracion_noches}n</span>
                    </div>
                    <div className="flex items-center">
                        <Mountain size={14} className="mr-1 text-amber-600" />
                        <span className={`font-medium ${dificultad.color}`}> Nivel {dificultad.texto}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <MapPin size={14} className="mr-1 text-amber-600" />
                        <span>{servicio.altura_maxima.toLocaleString()}m</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Users size={14} className="mr-1 text-amber-600" />
                        <span>{cuposDisponibles}/{expedicion.cupos_disponibles}</span>
                    </div>
                </div>

                {/* Servicios adicionales highlight */}
                {expedicion.servicios_adicionales && expedicion.servicios_adicionales.length > 0 && (
                    <div className="mb-4">
                        <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                            +{expedicion.servicios_adicionales.length} servicios adicionales
                        </span>
                    </div>
                )}

                {/* Precio y reserva */}
                <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                        {/* <div>
                            <div className="text-lg font-bold text-gray-900">{precioPrincipal}</div>
                            {tieneMultiplesPaquetes && (
                                <span className="text-xs text-gray-500">Múltiples paquetes</span>
                            )}
                            {expedicion.reserva_porcentaje && (
                                <div className="text-xs text-amber-600 font-medium">
                                    Reserva {expedicion.reserva_porcentaje}%
                                </div>
                            )}
                        </div> */}
                        <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition flex items-center text-sm font-medium" onClick={() => { window.location.href = expedicionLink; }}>
                            Ver más <ChevronRight size={16} className="ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalidaCardCompleta;