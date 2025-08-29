"use client";
import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Mountain, Users, DollarSign, Clock, MapPin, ChevronRight } from 'lucide-react';
import { expedicionesMock, serviciosMock } from '../../data/mockSalidas';
import { Servicio } from '@/app/types/servicio';
import { Expedicion } from '@/app/types/expedicion';
import { CustomSelect, SearchInput } from '@/app/components/ui/Input';

const TodasLasSalidas = () => {
    const [filtroTexto, setFiltroTexto] = useState('');
    const [filtroDificultad, setFiltroDificultad] = useState('todas');
    const [filtroMoneda, setFiltroMoneda] = useState('todas');
    const [ordenarPor, setOrdenarPor] = useState('fecha'); // fecha, precio, dificultad

    // Combinar servicios y expediciones
    const todasLasSalidas = useMemo(() => {
        return expedicionesMock.map(expedicion => {
            const servicio = serviciosMock.find(s => s.id_servicio === expedicion.id_servicio);
            return servicio ? { servicio, expedicion } : null;
        }).filter(Boolean);
    }, []);

    // Aplicar filtros y ordenamiento
    const salidasFiltradas = useMemo(() => {
        let salidas = [...todasLasSalidas];

        // Filtro por texto
        if (filtroTexto) {
            salidas = salidas.filter(({ servicio }) =>
                servicio.nombre.toLowerCase().includes(filtroTexto.toLowerCase()) ||
                servicio.desc.toLowerCase().includes(filtroTexto.toLowerCase())
            );
        }

        // Filtro por dificultad
        if (filtroDificultad !== 'todas') {
            salidas = salidas.filter(({ servicio }) => {
                const altura = servicio.altura_maxima;
                switch (filtroDificultad) {
                    case 'media': return altura < 3000;
                    case 'media-alta': return altura >= 3000 && altura < 4500;
                    case 'alta': return altura >= 4500;
                    default: return true;
                }
            });
        }

        // Filtro por moneda
        if (filtroMoneda !== 'todas') {
            salidas = salidas.filter(({ expedicion }) =>
                expedicion.precios.some(p => p.moneda === filtroMoneda)
            );
        }

        // Ordenamiento
        salidas.sort((a, b) => {
            switch (ordenarPor) {
                case 'precio':
                    return a.expedicion.precios[0].precio - b.expedicion.precios[0].precio;
                case 'dificultad':
                    return b.servicio.altura_maxima - a.servicio.altura_maxima;
                case 'fecha':
                default:
                    return new Date(a.expedicion.fecha_salida).getTime() - new Date(b.expedicion.fecha_salida).getTime();
            }
        });

        return salidas;
    }, [todasLasSalidas, filtroTexto, filtroDificultad, filtroMoneda, ordenarPor]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
                <div className="container mx-auto px-4 pt-32 pb-30">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Todas Nuestras Expediciones</h1>
                        <p className="text-xl text-amber-100 max-w-2xl mx-auto">
                            Descubre todas las aventuras que tenemos preparadas para ti en las montañas de Argentina
                        </p>
                        <div className="mt-6 text-lg">
                            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-[var(--color-naranja-200)]">
                                {salidasFiltradas.length} expediciones disponibles
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Filtros y búsqueda */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {/* Búsqueda */}
                        <div className="lg:col-span-2">
                            <SearchInput
                                value={filtroTexto}
                                onChange={setFiltroTexto}
                                placeholder="Buscar expediciones..."
                                className=""
                            />
                        </div>

                        {/* Filtro Dificultad */}
                        <CustomSelect
                            value={filtroDificultad}
                            onChange={setFiltroDificultad}
                            options={[
                                { value: 'todas', label: 'Todas las dificultades' },
                                { value: 'media', label: 'Media (<3000m)' },
                                { value: 'media-alta', label: 'Media-Alta (3000-4500m)' },
                                { value: 'alta', label: 'Alta (>4500m)' }
                            ]}
                            placeholder="Seleccionar dificultad"
                        />

                        {/* Filtro Moneda */}
                        <CustomSelect
                            value={filtroMoneda}
                            onChange={setFiltroMoneda}
                            options={[
                                { value: 'todas', label: 'Todas las monedas' },
                                { value: 'ARS', label: 'Pesos Argentinos' },
                                { value: 'USD', label: 'Dólares USD' }
                            ]}
                            placeholder="Seleccionar moneda"
                        />

                        {/* Ordenar por */}
                        <CustomSelect
                            value={ordenarPor}
                            onChange={setOrdenarPor}
                            options={[
                                { value: 'fecha', label: 'Ordenar por fecha' },
                                { value: 'precio', label: 'Ordenar por precio' },
                                { value: 'dificultad', label: 'Ordenar por dificultad' }
                            ]}
                            placeholder="Ordenar por..."
                        />
                    </div>
                </div>

                {/* Grid de expediciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {salidasFiltradas.map(({ servicio, expedicion }) => (
                        <SalidaCardCompleta
                            key={expedicion.id_expedicion}
                            servicio={servicio}
                            expedicion={expedicion}
                        />
                    ))}
                </div>

                {/* Mensaje si no hay resultados */}
                {salidasFiltradas.length === 0 && (
                    <div className="text-center py-12">
                        <Mountain className="mx-auto text-gray-400 mb-4" size={64} />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron expediciones</h3>
                        <p className="text-gray-500">Intenta ajustar los filtros de búsqueda</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Componente de card más completa para esta página
interface SalidaCardCompletaProps {
    servicio: Servicio;
    expedicion: Expedicion;
}

const SalidaCardCompleta = ({ servicio, expedicion }: SalidaCardCompletaProps) => {
    const formatearFecha = (fecha: string) => {
        return new Date(fecha).toLocaleDateString('es-AR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const fechaInicio = formatearFecha(expedicion.fecha_salida);
    const fechaFin = formatearFecha(expedicion.fecha_fin);

    const precioMinimo = expedicion.precios[0];
    const tieneMultiplesPaquetes = expedicion.precios.length > 1;
    const precioPrincipal = tieneMultiplesPaquetes
        ? `Desde ${precioMinimo.moneda} ${precioMinimo.precio.toLocaleString()}`
        : `${precioMinimo.moneda} ${precioMinimo.precio.toLocaleString()}`;

    const obtenerDificultad = () => {
        if (servicio.altura_maxima >= 5000) return { texto: 'Muy Alta', color: 'text-red-600' };
        if (servicio.altura_maxima >= 4000) return { texto: 'Alta', color: 'text-orange-600' };
        if (servicio.altura_maxima >= 3000) return { texto: 'Media-Alta', color: 'text-yellow-600' };
        return { texto: 'Media', color: 'text-green-600' };
    };

    const dificultad = obtenerDificultad();

    const obtenerEstadoExpedicion = () => {
        const diasParaSalida = Math.ceil((new Date(expedicion.fecha_salida).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

        if (expedicion.cupos_disponibles === 0) {
            return { texto: 'Completa', color: 'bg-red-100 text-red-800' };
        }
        if (diasParaSalida <= 30) {
            return { texto: 'Próxima Salida', color: 'bg-orange-100 text-orange-800' };
        }
        if (expedicion.cupos_disponibles <= 3) {
            return { texto: 'Últimos Cupos', color: 'bg-yellow-100 text-yellow-800' };
        }
        return { texto: 'Disponible', color: 'bg-green-100 text-green-800' };
    };

    const estadoExpedicion = obtenerEstadoExpedicion();

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
                        <span className={`font-medium ${dificultad.color}`}>{dificultad.texto}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <MapPin size={14} className="mr-1 text-amber-600" />
                        <span>{servicio.altura_maxima.toLocaleString()}m</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Users size={14} className="mr-1 text-amber-600" />
                        <span>{expedicion.cupos_disponibles}/{servicio.cupos_maximos}</span>
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
                        <div>
                            <div className="text-lg font-bold text-gray-900">{precioPrincipal}</div>
                            {tieneMultiplesPaquetes && (
                                <span className="text-xs text-gray-500">Múltiples paquetes</span>
                            )}
                            {expedicion.reserva_porcentaje && (
                                <div className="text-xs text-amber-600 font-medium">
                                    Reserva {expedicion.reserva_porcentaje}%
                                </div>
                            )}
                        </div>
                        <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition flex items-center text-sm font-medium">
                            Ver más <ChevronRight size={16} className="ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodasLasSalidas;