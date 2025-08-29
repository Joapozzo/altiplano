"use client";
import React, { useState } from 'react';
import {
    Calendar,
    Mountain,
    Users,
    Clock,
    MapPin,
    Thermometer,
    Star,
    Shield,
    Heart,
    MessageCircle,
    CreditCard,
    CheckCircle,
    X,
    Info
} from 'lucide-react';
import { serviciosMock, expedicionesMock } from '@/app/data/mockSalidas';
import { useParams } from 'next/navigation';
import Button from '@/app/components/ui/Button';

const ExpedicionDetail = () => {
    const params = useParams();
    const expedicionId = params.id;
    const [paqueteSeleccionado, setPaqueteSeleccionado] = useState(0);
    const [showReservaModal, setShowReservaModal] = useState(false);

    console.log(expedicionId);
    if (!expedicionId) {
        return <div>Expedición no encontrada</div>;
    }
    
    // Obtener datos (en un caso real vendría del router/params)
    const expedicion = expedicionesMock.find(e => e.id_expedicion === +expedicionId);
    const servicio = serviciosMock.find(s => s.id_servicio === expedicion?.id_servicio);

    if (!expedicion || !servicio) {
        return <div>Expedición no encontrada</div>;
    }

    const formatearFecha = (fecha: string) => {
        return new Date(fecha).toLocaleDateString('es-AR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const obtenerDificultad = () => {
        if (servicio.altura_maxima >= 5000) return { texto: 'Muy Alta', color: 'text-red-600', bg: 'bg-red-100' };
        if (servicio.altura_maxima >= 4000) return { texto: 'Alta', color: 'text-orange-600', bg: 'bg-orange-100' };
        if (servicio.altura_maxima >= 3000) return { texto: 'Media-Alta', color: 'text-yellow-600', bg: 'bg-yellow-100' };
        return { texto: 'Media', color: 'text-green-600', bg: 'bg-green-100' };
    };

    const dificultad = obtenerDificultad();
    const precioSeleccionado = expedicion.precios[paqueteSeleccionado];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('${servicio.fotos[0] || '/placeholder-mountain.jpg'}')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 py-20">
                        <div className="text-white max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{servicio.nombre}</h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-6 animate-fade-in-delay">
                                {servicio.desc.substring(0, 120)}...
                            </p>
                            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
                                <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
                                    <Calendar className="mr-2" size={16} />
                                    <span>{formatearFecha(expedicion.fecha_salida)}</span>
                                </div>
                                <div className={`flex items-center px-4 py-2 rounded-full ${dificultad.bg} ${dificultad.color}`}>
                                    <Mountain className="mr-2" size={16} />
                                    <span>Dificultad {dificultad.texto}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contenido Principal */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Información General */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-6 text-[var(--color-negro)]">Información General</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <Clock className="mx-auto mb-2 text-[var(--color-naranja)]" size={24} />
                                    <div className="font-semibold">{servicio.duracion_dias} días</div>
                                    <div className="text-sm text-gray-600">{servicio.duracion_noches} noches</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <Mountain className="mx-auto mb-2 text-[var(--color-naranja)]" size={24} />
                                    <div className="font-semibold">{servicio.altura_maxima.toLocaleString()}m</div>
                                    <div className="text-sm text-gray-600">Altura máxima</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <Users className="mx-auto mb-2 text-[var(--color-naranja)]" size={24} />
                                    <div className="font-semibold">{expedicion.cupos_disponibles}/{servicio.cupos_maximos}</div>
                                    <div className="text-sm text-gray-600">Cupos disponibles</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <Thermometer className="mx-auto mb-2 text-[var(--color-naranja)]" size={24} />
                                    <div className="font-semibold">{servicio.temperatura_dia_min}° a {servicio.temperatura_dia_max}°</div>
                                    <div className="text-sm text-gray-600">Temperatura día</div>
                                </div>
                            </div>
                        </div>

                        {/* Descripción Detallada */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4 text-[var(--color-negro)]">Sobre esta Expedición</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {servicio.desc}
                            </p>

                            {servicio.sobre_lugar && (
                                <div className="border-t pt-6">
                                    <h3 className="text-xl font-semibold mb-3 text-[var(--color-naranja)]">Sobre el Lugar</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {servicio.sobre_lugar}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Itinerario */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-6 text-[var(--color-negro)]">Itinerario Detallado</h2>
                            <div className="space-y-4">
                                {/* Aquí mostrarías el itinerario real */}
                                <div className="border-l-4 border-[var(--color-naranja)] pl-4">
                                    <h4 className="font-semibold text-[var(--color-negro)]">Día 1: Inicio de la aventura</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {servicio.punto_encuentro}. Presentación del equipo y distribución de equipaje.
                                    </p>
                                </div>
                                <div className="border-l-4 border-[var(--color-amarillo)] pl-4">
                                    <h4 className="font-semibold text-[var(--color-negro)]">Día 2: Ascenso</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Caminata hacia la cumbre con técnicas de aclimatación y disfrute del paisaje.
                                    </p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <h4 className="font-semibold text-[var(--color-negro)]">Día 3: Regreso</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Descenso y finalización de la expedición con almuerzo de despedida.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Consideraciones Especiales */}
                        {servicio.consideraciones_especiales && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                                <h2 className="text-xl font-bold mb-4 text-[var(--color-negro)] flex items-center">
                                    <Info className="mr-2 text-yellow-600" size={20} />
                                    Consideraciones Especiales
                                </h2>
                                <ul className="space-y-2">
                                    {servicio.consideraciones_especiales.map((consideracion, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="mr-2 mt-0.5 text-yellow-600 flex-shrink-0" size={16} />
                                            <span className="text-gray-700">{consideracion}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar de Reserva */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
                            <h3 className="text-xl font-bold mb-4 text-[var(--color-negro)]">Reserva tu Expedición</h3>

                            {/* Selección de Paquete */}
                            {expedicion.precios.length > 1 && (
                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3 text-[var(--color-negro)]">Selecciona tu paquete:</h4>
                                    <div className="space-y-2">
                                        {expedicion.precios.map((precio, index) => (
                                            <label key={index} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input
                                                    type="radio"
                                                    name="paquete"
                                                    checked={paqueteSeleccionado === index}
                                                    onChange={() => setPaqueteSeleccionado(index)}
                                                    className="mr-3"
                                                />
                                                <div className="flex-1">
                                                    <div className="font-medium">{precio.nombre_paquete}</div>
                                                    <div className="text-lg font-bold text-[var(--color-naranja)]">
                                                        {precio.moneda} {precio.precio.toLocaleString()}
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Precio Principal */}
                            <div className="mb-6 p-4 bg-[var(--color-beige)] rounded-lg">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600">Precio total</div>
                                    <div className="text-3xl font-bold text-[var(--color-negro)]">
                                        {precioSeleccionado.moneda} {precioSeleccionado.precio.toLocaleString()}
                                    </div>
                                    {expedicion.reserva_porcentaje && (
                                        <div className="text-sm text-[var(--color-naranja)] mt-1">
                                            Reserva: {expedicion.reserva_porcentaje}% = {precioSeleccionado.moneda} {Math.round(precioSeleccionado.precio * expedicion.reserva_porcentaje / 100).toLocaleString()}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Botones de Acción */}
                            <div className="space-y-3">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    icon={<CreditCard size={20} />}
                                    onClick={() => setShowReservaModal(true)}
                                >
                                    Reservar Ahora
                                </Button>

                                <Button
                                    variant="outline"
                                    size="md"
                                    className="w-full"
                                    icon={<MessageCircle size={20} />}
                                    onClick={() => window.open('https://wa.me/5493837498552', '_blank')}
                                >
                                    Consultar por WhatsApp
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="md"
                                    className="w-full"
                                    icon={<Heart size={20} />}
                                >
                                    Guardar en Favoritos
                                </Button>
                            </div>

                            {/* Información de Contacto */}
                            <div className="mt-6 pt-6 border-t">
                                <h4 className="font-semibold mb-2 text-[var(--color-negro)]">¿Necesitas ayuda?</h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Nuestro equipo está listo para resolver todas tus dudas
                                </p>
                                <div className="text-sm space-y-1">
                                    <div className="flex items-center">
                                        <MessageCircle size={16} className="mr-2 text-[var(--color-naranja)]" />
                                        <span>+54 9 3837 498552</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-2 text-[var(--color-naranja)]" />
                                        <span>Lun a Vie 9:00 - 18:00</span>
                                    </div>
                                </div>
                            </div>

                            {/* Garantías */}
                            <div className="mt-6 p-4 bg-green-50 rounded-lg">
                                <h4 className="font-semibold mb-2 text-green-800 flex items-center">
                                    <Shield size={16} className="mr-2" />
                                    Garantías Incluidas
                                </h4>
                                <ul className="text-sm text-green-700 space-y-1">
                                    <li>• Guías profesionales certificados</li>
                                    <li>• Seguro contra accidentes</li>
                                    <li>• Cancelación hasta 48hs antes</li>
                                    <li>• Equipamiento de seguridad</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Reserva */}
            {showReservaModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-[var(--color-negro)]">Confirmar Reserva</h3>
                            <button onClick={() => setShowReservaModal(false)}>
                                <X className="text-gray-400 hover:text-gray-600" size={24} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="font-medium">{servicio.nombre}</div>
                                <div className="text-sm text-gray-600">{formatearFecha(expedicion.fecha_salida)}</div>
                                <div className="text-lg font-bold text-[var(--color-naranja)] mt-2">
                                    {precioSeleccionado.moneda} {precioSeleccionado.precio.toLocaleString()}
                                </div>
                            </div>

                            <p className="text-sm text-gray-600">
                                Al confirmar, serás redirigido a WhatsApp para completar tu reserva con nuestro equipo.
                            </p>

                            <div className="flex space-x-3">
                                <Button
                                    variant="outline"
                                    size="md"
                                    className="flex-1"
                                    onClick={() => setShowReservaModal(false)}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="primary"
                                    size="md"
                                    className="flex-1"
                                    onClick={() => {
                                        const mensaje = `Hola! Quiero reservar la expedición "${servicio.nombre}" para ${formatearFecha(expedicion.fecha_salida)}. Precio: ${precioSeleccionado.moneda} ${precioSeleccionado.precio.toLocaleString()}`;
                                        window.open(`https://wa.me/5493837498552?text=${encodeURIComponent(mensaje)}`, '_blank');
                                        setShowReservaModal(false);
                                    }}
                                >
                                    Confirmar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExpedicionDetail;