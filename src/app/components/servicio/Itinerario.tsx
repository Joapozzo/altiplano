import React, { useState } from 'react';
import {
    ChevronRight,
    Clock,
    MapPin,
    Mountain,
    Star,
    Home,
    Utensils
} from 'lucide-react';
import { 
    itinerarioChampaqui, 
    itinerarioPenitentes, 
    itinerarioVallecitos, 
    itinerarioPuntaNegra, 
    itinerarioAconcagua, 
    itinerarioTuzgle, 
    itinerarioQuewar ,
    itinerarioFranke,
    itinerarioSanFrancisco,
    itinerarioLlullaillaco
} from '@/app/data/mockSalidas';
import { ItinerarioDia } from '@/app/types/Itinerario';

interface ItinerarioProps {
    servicio: {
        id_itinerario?: number;
        nombre: string;
    };
}

const Itinerario = ({ servicio }: ItinerarioProps) => {
    const [expandedDay, setExpandedDay] = useState<number | null>(null);
const getItinerario = (): ItinerarioDia[] => {
    const itinerarioId = servicio.id_itinerario;
    
    switch (itinerarioId) {
        case 1:
            return itinerarioChampaqui;
        case 2:
            return itinerarioPenitentes;
        case 3:
            return itinerarioPuntaNegra;
        case 4:
            return itinerarioVallecitos;
        case 6:
            return itinerarioAconcagua;
        case 7:
            return itinerarioTuzgle;
        case 8:
            return itinerarioQuewar;
        case 9:
            return itinerarioFranke;
        case 11:
            return itinerarioSanFrancisco;
        case 12:
            return itinerarioLlullaillaco;  // <-- Este case faltaba
        default:
            return [];
    }
};

    const itinerario = getItinerario();

    // Si no hay itinerario, no mostrar el componente
    if (!itinerario || itinerario.length === 0) {
        return null;
    }

    const toggleDay = (dia: number) => {
        setExpandedDay(expandedDay === dia ? null : dia);
    };

    const getIntensityColor = (intensidad?: string) => {
        if (!intensidad) return 'bg-gray-100 text-gray-700';
        
        const intensity = intensidad.toLowerCase();
        if (intensity.includes('muy exigente')) return 'bg-red-100 text-red-700';
        if (intensity.includes('exigente')) return 'bg-orange-100 text-orange-700';
        if (intensity.includes('moderada')) return 'bg-yellow-100 text-yellow-700';
        return 'bg-green-100 text-green-700';
    };

    const getDayIconColor = (dia: number) => {
        if (dia === 0) return 'bg-blue-600 text-white';
        return 'bg-amber-600 text-white';
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Itinerario Detallado</h2>
            
            <div className="space-y-3">
                {itinerario.map((dia, index) => (
                    <div 
                        key={`${dia.dia}-${index}`}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        <button
                            onClick={() => toggleDay(dia.dia)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-md ${getDayIconColor(dia.dia)}`}>
                                    {dia.dia === 0 ? 'PRE' : `D${dia.dia}`}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800 text-lg">{dia.titulo}</h3>
                                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                        {dia.altitud && (
                                            <span className="flex items-center gap-1">
                                                <Mountain size={14} />
                                                {dia.altitud}m
                                            </span>
                                        )}
                                        {dia.duracion_horas && (
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {dia.duracion_horas}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                {dia.intensidad && (
                                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getIntensityColor(dia.intensidad)}`}>
                                        {dia.intensidad}
                                    </span>
                                )}
                                <ChevronRight 
                                    size={20} 
                                    className={`text-gray-400 transition-transform duration-300 ${
                                        expandedDay === dia.dia ? 'rotate-90' : ''
                                    }`} 
                                />
                            </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            expandedDay === dia.dia ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                            <div className="px-6 pb-6 bg-gray-50">
                                <div className="border-l-4 border-amber-500 pl-6 ml-6">
                                    <p className="text-gray-700 leading-relaxed mb-6">{dia.descripcion}</p>
                                    
                                    {/* Grid de información técnica */}
                                    {(dia.distancia_km || dia.desnivel_metros || dia.alojamiento || dia.hora_inicio || dia.hora_fin) && (
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                            {dia.distancia_km && (
                                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <MapPin size={16} className="text-amber-600" />
                                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Distancia</span>
                                                    </div>
                                                    <span className="text-lg font-bold text-gray-800">{dia.distancia_km} km</span>
                                                </div>
                                            )}
                                            
                                            {dia.desnivel_metros && (
                                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <Mountain size={16} className="text-amber-600" />
                                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Desnivel</span>
                                                    </div>
                                                    <span className="text-lg font-bold text-gray-800">+{dia.desnivel_metros}m</span>
                                                </div>
                                            )}
                                            
                                            {dia.alojamiento && (
                                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <Home size={16} className="text-amber-600" />
                                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Alojamiento</span>
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-800 capitalize">{dia.alojamiento}</span>
                                                </div>
                                            )}
                                            
                                            {(dia.hora_inicio || dia.hora_fin) && (
                                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <Clock size={16} className="text-amber-600" />
                                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Horario</span>
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-800">
                                                        {dia.hora_inicio && `${dia.hora_inicio}`}
                                                        {dia.hora_inicio && dia.hora_fin && ' - '}
                                                        {dia.hora_fin && `${dia.hora_fin}`}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Actividades especiales */}
                                    {dia.actividades_especiales && dia.actividades_especiales.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                                <Star size={16} className="text-amber-600" />
                                                Actividades Destacadas
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {dia.actividades_especiales.map((actividad, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                                                    >
                                                        {actividad}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Comidas */}
                                    {dia.comidas && dia.comidas.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                                <Utensils size={16} className="text-amber-600" />
                                                Comidas Incluidas
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {dia.comidas.map((comida, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                                    >
                                                        {comida}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Peso de mochila si existe */}
                                    {dia.peso_mochila && (
                                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                                            <p className="text-sm text-amber-800">
                                                <span className="font-medium">Peso estimado de mochila:</span> {dia.peso_mochila}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Itinerario;