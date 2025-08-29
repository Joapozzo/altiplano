/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, DollarSign, X, ChevronRight } from 'lucide-react';
import { expedicionesMock, serviciosMock } from '../data/mockSalidas';
import Image from 'next/image';

interface SalidaCalendario {
    expedicion: any;
    servicio: any;
    fechaInicio: Date;
    fechaFin: Date;
}

const CalendarioSalidas = () => {
    const [selectedSalida, setSelectedSalida] = useState<SalidaCalendario | null>(null);

    // Procesar salidas
    const salidas: SalidaCalendario[] = expedicionesMock.map(expedicion => {
        const servicio = serviciosMock.find(s => s.id_servicio === expedicion.id_servicio);
        return {
            expedicion,
            servicio,
            fechaInicio: new Date(expedicion.fecha_salida),
            fechaFin: new Date(expedicion.fecha_fin)
        };
    }).filter(s => s.servicio).sort((a, b) => a.fechaInicio.getTime() - b.fechaInicio.getTime());

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('es-AR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const formatDateShort = (date: Date) => {
        return date.toLocaleDateString('es-AR', {
            day: 'numeric',
            month: 'short'
        });
    };

    const getDaysUntil = (date: Date) => {
        const today = new Date();
        const diffTime = date.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Hoy";
        if (diffDays === 1) return "Mañana";
        if (diffDays < 0) return "En curso";
        return `En ${diffDays} días`;
    };

    const handleSalidaClick = (salida: SalidaCalendario) => {
        setSelectedSalida(salida);
    };

    return (
        <section className="py-16 bg-white" id="calendario">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2">Próximas Salidas</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Elegí tu próxima aventura entre nuestras expediciones programadas
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Lista de salidas */}
                        <div className="lg:col-span-2">
                            <div className="space-y-4">
                                {salidas.map((salida, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleSalidaClick(salida)}
                                        className={`
                                            group bg-[var(--color-beige)]/20 hover:bg-[var(--color-beige)]/40 
                                            rounded-xl p-6 transition-all duration-300 hover:shadow-lg
                                            border border-[var(--color-beige)]/30 hover:border-[var(--color-amarillo)]/50
                                            ${selectedSalida === salida
                                                ? "ring-2 ring-amber-400 shadow-xl"
                                                : ""
                                            }
                                        `}
                                    >
                                        <div className="flex flex-col md:flex-row gap-4">
                                            {/* Imagen */}
                                            <div className="relative w-full md:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={salida.servicio.fotos[0]}
                                                    alt={salida.servicio.nombre}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                                    {getDaysUntil(salida.fechaInicio)}
                                                </div>
                                            </div>

                                            {/* Contenido */}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                                                        {salida.servicio.nombre}
                                                    </h3>
                                                    <ChevronRight
                                                        size={20}
                                                        className="text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2"
                                                    />
                                                </div>

                                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                    {salida.servicio.desc}
                                                </p>

                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                                                    <div className="flex items-center text-gray-700">
                                                        <Calendar
                                                            size={14}
                                                            className="mr-1 text-amber-600"
                                                        />
                                                        <span className="font-medium">
                                                            {formatDateShort(salida.fechaInicio)}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <Clock
                                                            size={14}
                                                            className="mr-1 text-amber-600"
                                                        />
                                                        <span>{salida.servicio.duracion_dias} días</span>
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <Users
                                                            size={14}
                                                            className="mr-1 text-amber-600"
                                                        />
                                                        <span>{salida.expedicion.cupos} cupos</span>
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <DollarSign
                                                            size={14}
                                                            className="mr-1 text-amber-600"
                                                        />
                                                        <span className="font-bold">
                                                            $
                                                            {salida.servicio.toLocaleString(
                                                                "es-AR"
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Panel de detalle */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <div className="bg-[var(--color-negro)] rounded-xl shadow-lg border border-amber-200 p-6">
                                    {selectedSalida ? (
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-lg font-bold text-[var(--color-white)]">
                                                    Detalle de la Salida
                                                </h3>
                                                <button
                                                    onClick={() => setSelectedSalida(null)}
                                                    className="p-1 rounded-lg transition-colors text-[var(--color-white)] hover:bg-[var(--color-naranja-200)]"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>

                                            <div className="space-y-4">
                                                {/* Imagen principal */}
                                                <div className="relative h-32 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={selectedSalida.servicio.fotos[0]}
                                                        alt={selectedSalida.servicio.nombre}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                                    <div className="absolute bottom-2 left-2 text-white">
                                                        <div className="text-xs bg-amber-500 px-2 py-1 rounded-full">
                                                            {getDaysUntil(selectedSalida.fechaInicio)}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Información detallada */}
                                                <div>
                                                    <h4 className="font-bold text-[var(--color-white)] mb-2">
                                                        {selectedSalida.servicio.nombre}
                                                    </h4>
                                                    <p className="text-sm text-[var(--color-white)] mb-4 font-light">
                                                        {selectedSalida.servicio.desc}
                                                    </p>

                                                    <div className="space-y-3 text-sm">
                                                        <div className="rounded-lg p-3 border border-[var(--color-naranja-200)]">
                                                            <div className="flex items-center text-[var(--color-white)] mb-2">
                                                                <Calendar
                                                                    size={16}
                                                                    className="mr-2 text-[var(--color-naranja-200)]"
                                                                />
                                                                <span className="font-medium">Fechas</span>
                                                            </div>
                                                            <div className="text-[var(--color-white)] pl-6">
                                                                Salida:{" "}
                                                                {formatDate(selectedSalida.fechaInicio)}
                                                                <br />
                                                                Regreso: {formatDate(selectedSalida.fechaFin)}
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-3">
                                                            <div className="bg-[var(--color-naranja-200)] rounded-lg p-3">
                                                                <div className="flex items-center text-gray-700 mb-1">
                                                                    <Clock
                                                                        size={14}
                                                                        className="mr-1 text-[var(--color-negro)]"
                                                                    />
                                                                    <span className="text-xs font-medium text-[var(--color-negro)]">
                                                                        Duración
                                                                    </span>
                                                                </div>
                                                                <div className="text-[var(--color-negro)] font-bold">
                                                                    {selectedSalida.servicio.duracion_dias} días
                                                                </div>
                                                            </div>
                                                            <div className=" rounded-lg p-3 border border-[var(--color-naranja-200)]">
                                                                <div className="flex items-center text-[var(--color-naranja-200)] mb-1">
                                                                    <MapPin
                                                                        size={14}
                                                                        className="mr-1 text-[var(--color-naranja-200)]"
                                                                    />
                                                                    <span className="text-xs font-medium text-[var(--color-naranja-200)]">
                                                                        Altura
                                                                    </span>
                                                                </div>
                                                                <div className="text-[var(--color-naranja-200)] font-bold">
                                                                    {selectedSalida.servicio.altura_maxima}m
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-3">
                                                            <div className="rounded-lg p-3 border border-[var(--color-naranja-200)]">
                                                                <div className="flex items-center text-[var(--color-naranja-200)] mb-1">
                                                                    <Users
                                                                        size={14}
                                                                        className="mr-1 text-[var(--color-naranja-200)]"
                                                                    />
                                                                    <span className="text-xs font-medium text-[var(--color-naranja-200)]">
                                                                        Cupos
                                                                    </span>
                                                                </div>
                                                                <div className="text-[var(--color-naranja-200)] font-bold">
                                                                    {selectedSalida.expedicion.cupos}{" "}
                                                                    disponibles
                                                                </div>
                                                            </div>
                                                            <div className="bg-[var(--color-naranja-200)] rounded-lg p-3">
                                                                <div className="flex items-center text-[var(--color-negro)] mb-1">
                                                                    <DollarSign
                                                                        size={14}
                                                                        className="mr-1 text-[var(--color-negro)] "
                                                                    />
                                                                    <span className="text-xs font-medium text-[var(--color-negro)]">
                                                                        Precio
                                                                    </span>
                                                                </div>
                                                                <div className="text-[var(--color-negro)]  font-bold">
                                                                    $
                                                                    {selectedSalida.expedicion.precio.toLocaleString(
                                                                        "es-AR"
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2 mt-4">
                                                        <button className="w-full bg-[var(--color-naranja-200)] hover:bg-amber-700 text-white py-3 px-4 rounded-lg transition-colors font-medium">
                                                            Reservar Cupo
                                                        </button>
                                                        <button className="w-full border border-[var(--color-naranja-200)] text-amber-600 hover:bg-amber-50 py-2 px-4 rounded-lg transition-colors font-medium">
                                                            Ver Itinerario Completo
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <Calendar
                                                size={48}
                                                className="mx-auto text-[var(--color-naranja-200)] mb-4"
                                            />
                                            <h3 className="text-xl font-bold text-[var(--color-white)] mb-2">
                                                Seleccioná una Salida
                                            </h3>
                                            <p className="text-sm text-[var(--color-white)] mb-4 font-light">
                                                Hacé click en cualquier expedición para ver los
                                                detalles completos y opciones de reserva.
                                            </p>

                                            <div className="space-y-3 text-left bg-[var(--color-black-200)] rounded-lg p-4 border border-amber-100">
                                                <div className="text-sm font-medium text-[var(--color-white)] border-b border-amber-100 pb-2">
                                                    Resumen de Salidas
                                                </div>
                                                {salidas.slice(0, 3).map((salida, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex justify-between items-center text-sm"
                                                    >
                                                        <div>
                                                            <div className="font-bold text-[var(--color-white)]">
                                                                {salida.servicio.nombre
                                                                    .split(" ")
                                                                    .slice(1, 3)
                                                                    .join(" ")}
                                                            </div>
                                                            <div className="text-xs text-[var(--color-white)] font-light">
                                                                {formatDateShort(salida.fechaInicio)}
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-xs text-[var(--color-naranja-200)] font-medium">
                                                                {getDaysUntil(salida.fechaInicio)}
                                                            </div>
                                                            <div className="text-xs text-gray-600">
                                                                {salida.expedicion.cupos} cupos
                                                            </div>
                                                        </div>
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
            </div>
        </section>
    );
};

export default CalendarioSalidas;