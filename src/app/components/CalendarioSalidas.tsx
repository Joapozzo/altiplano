/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, DollarSign, X } from 'lucide-react';
import { expedicionesMock, serviciosMock } from '../data/mockSalidas';
import Image from 'next/image';

interface SalidaCalendario {
    expedicion: any;
    servicio: any;
    fechaInicio: Date;
    fechaFin: Date;
}

const CalendarioSalidas = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedSalida, setSelectedSalida] = useState<SalidaCalendario | null>(null);
    const [hoveredSalida, setHoveredSalida] = useState<SalidaCalendario | null>(null);
    const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

    // Procesar salidas
    const salidas: SalidaCalendario[] = expedicionesMock.map(expedicion => {
        const servicio = serviciosMock.find(s => s.id_servicio === expedicion.id_servicio);
        return {
            expedicion,
            servicio,
            fechaInicio: new Date(expedicion.fecha_salida),
            fechaFin: new Date(expedicion.fecha_fin)
        };
    }).filter(s => s.servicio);

    // Obtener salidas de un día específico
    const getSalidasDelDia = (fecha: Date) => {
        return salidas.filter(salida => {
            const fechaStr = fecha.toDateString();
            return fechaStr === salida.fechaInicio.toDateString();
        });
    };

    // Verificar si un día tiene salidas
    const tieneReSalidas = (fecha: Date) => {
        return getSalidasDelDia(fecha).length > 0;
    };

    const generarDiasDelMes = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days: (Date | null)[] = [];

        // Días vacíos al inicio
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }

        // Días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day));
        }

        return days;
    };

    const cambiarMes = (increment: number) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + increment);
        setCurrentDate(newDate);
        setSelectedSalida(null);
        setHoveredSalida(null);
    };

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    const handleDayClick = (fecha: Date) => {
        const salidasDelDia = getSalidasDelDia(fecha);
        if (salidasDelDia.length > 0) {
            setSelectedSalida(salidasDelDia[0]);
        }
    };

    const handleDayHover = (fecha: Date | null) => {
        setHoveredDate(fecha);
        if (fecha) {
            const salidasDelDia = getSalidasDelDia(fecha);
            if (salidasDelDia.length > 0) {
                setHoveredSalida(salidasDelDia[0]);
            } else {
                setHoveredSalida(null);
            }
        } else {
            setHoveredSalida(null);
        }
    };

    return (
        <section className="py-16 bg-white" id='calendario'>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2">Calendario de Salidas</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Planificá tu próxima aventura consultando nuestro calendario de expediciones
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {/* Calendario */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">

                                {/* Header del calendario */}
                                <div className="flex items-center justify-between mb-6">
                                    <button
                                        onClick={() => cambiarMes(-1)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <h3 className="text-xl font-bold text-gray-800">
                                        {meses[currentDate.getMonth()]} {currentDate.getFullYear()}
                                    </h3>

                                    <button
                                        onClick={() => cambiarMes(1)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Días de la semana */}
                                <div className="grid grid-cols-7 gap-1 mb-2">
                                    {diasSemana.map(dia => (
                                        <div key={dia} className="p-2 text-center text-sm font-medium text-gray-500">
                                            {dia}
                                        </div>
                                    ))}
                                </div>

                                {/* Días del mes */}
                                <div className="grid grid-cols-7 gap-1">
                                    {generarDiasDelMes().map((fecha, index) => {
                                        if (!fecha) {
                                            return <div key={index} className="p-2 h-12"></div>;
                                        }

                                        const tieneSalidas = tieneReSalidas(fecha);
                                        const esHoy = fecha.toDateString() === new Date().toDateString();

                                        return (
                                            <div
                                                key={index}
                                                className={`
                                                    p-2 h-12 flex items-center justify-center text-sm cursor-pointer
                                                    rounded-lg transition-all duration-200 relative
                                                    ${tieneSalidas
                                                        ? 'bg-amber-500 text-white hover:bg-amber-600 font-bold shadow-md'
                                                        : 'hover:bg-gray-100'
                                                    }
                                                    ${esHoy && !tieneSalidas ? 'ring-2 ring-amber-300' : ''}
                                                `}
                                                onClick={() => handleDayClick(fecha)}
                                                onMouseEnter={() => handleDayHover(fecha)}
                                                onMouseLeave={() => handleDayHover(null)}
                                            >
                                                {fecha.getDate()}
                                                {tieneSalidas && (
                                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Panel de información */}
                        <div className="lg:col-span-1">
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg border border-amber-200 p-6">

                                {selectedSalida ? (
                                    // Información detallada de salida seleccionada
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-bold text-gray-800">Salida Seleccionada</h3>
                                            <button
                                                onClick={() => setSelectedSalida(null)}
                                                className="p-1 hover:bg-amber-200 rounded-lg transition-colors"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="relative h-32 rounded-lg overflow-hidden">
                                                <Image
                                                    src={selectedSalida.servicio.fotos[0]}
                                                    alt={selectedSalida.servicio.nombre}
                                                    className="w-full h-full object-cover"
                                                    width={1200}
                                                    height={800}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-2">{selectedSalida.servicio.nombre}</h4>
                                                <p className="text-sm text-gray-600 mb-3">{selectedSalida.servicio.desc}</p>

                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-center text-gray-700">
                                                        <Calendar size={16} className="mr-2 text-amber-600" />
                                                        {selectedSalida.fechaInicio.toLocaleDateString('es-AR')} - {selectedSalida.fechaFin.toLocaleDateString('es-AR')}
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <Clock size={16} className="mr-2 text-amber-600" />
                                                        {selectedSalida.servicio.duracion_dias} días
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <MapPin size={16} className="mr-2 text-amber-600" />
                                                        {selectedSalida.servicio.altura_maxima}m altura máxima
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <Users size={16} className="mr-2 text-amber-600" />
                                                        {selectedSalida.expedicion.cupos} cupos disponibles
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <DollarSign size={16} className="mr-2 text-amber-600" />
                                                        ${selectedSalida.expedicion.precio.toLocaleString('es-AR')}
                                                    </div>
                                                </div>

                                                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors mt-4 font-medium">
                                                    Ver Detalles
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : hoveredSalida ? (
                                    // Preview al hacer hover
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Vista Previa</h3>
                                        <div className="space-y-3">
                                            <div className="relative h-24 rounded-lg overflow-hidden">
                                                <Image
                                                    src={hoveredSalida.servicio.fotos[0]}
                                                    alt={hoveredSalida.servicio.nombre}
                                                    className="w-full h-full object-cover"
                                                    width={1200}
                                                    height={800}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">{hoveredSalida.servicio.nombre}</h4>
                                                <p className="text-xs text-gray-600 mb-2 line-clamp-2">{hoveredSalida.servicio.desc}</p>
                                                <div className="text-xs text-amber-700">
                                                    💰 ${hoveredSalida.expedicion.precio.toLocaleString('es-AR')} • 👥 {hoveredSalida.expedicion.cupos} cupos
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500 italic">Hacé click para ver más detalles</p>
                                        </div>
                                    </div>
                                ) : (
                                    // Estado por defecto
                                    <div className="text-center">
                                        <Calendar size={48} className="mx-auto text-amber-400 mb-4" />
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">Próximas Expediciones</h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Los días marcados en naranja tienen salidas programadas.
                                            Hacé click en un día para ver los detalles.
                                        </p>

                                        <div className="space-y-2 text-left">
                                            <div className="text-sm">
                                                <span className="font-medium">Próximas salidas:</span>
                                            </div>
                                            {salidas.slice(0, 3).map((salida, index) => (
                                                <div key={index} className="text-xs text-gray-600 flex justify-between">
                                                    <span>{salida.fechaInicio.getDate()}/{salida.fechaInicio.getMonth() + 1}</span>
                                                    <span className="font-medium">{salida.servicio.nombre.split(' ')[1]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalendarioSalidas;