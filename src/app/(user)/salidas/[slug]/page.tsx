"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useExpedicion } from '@/app/hooks/useExpedicion';
import Button from '@/app/components/ui/Button';
import HeroServicio from '@/app/components/servicio/HeroServicio';
import InfoGeneral from '@/app/components/servicio/InfoGeneral';
import DescripcionDetallada from '@/app/components/servicio/DescripcionDetallada';
import Logistica from '@/app/components/servicio/Logistica';
import ServiciosIncluidos from '@/app/components/servicio/ServiciosIncluidos';
import Consideraciones from '@/app/components/servicio/Consideraciones';
import Diferenciadores from '@/app/components/servicio/Diferenciadores';
import SideBarReserva from '@/app/components/servicio/SideBarReserva';
import { formatearFecha } from '@/app/lib/utils';
import BackButton from '@/app/components/ui/ButtonBack';
import Itinerario from '@/app/components/servicio/Itinerario';
import GaleriaSlider from '@/app/components/servicio/GaleriaSlider';

const ExpedicionDetail = () => {
    const { expedicion, servicio, error } = useExpedicion();
    const [paqueteSeleccionado, setPaqueteSeleccionado] = useState(0);
    const [showReservaModal, setShowReservaModal] = useState(false);

    // Manejar estados de error
    if (error || !expedicion || !servicio) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        {error || 'Expedición no encontrada'}
                    </h1>
                    <p className="text-gray-600 mb-4">
                        La expedición que buscas no existe o ha sido removida.
                    </p>
                    <div className="flex items-center justify-center">
                        <BackButton />
                    </div>
                </div>
            </div>
        );
    }

    const precioSeleccionado = expedicion.precios[paqueteSeleccionado];

    return (
        <div className="min-h-screen bg-gray-50 w-full">
            {/* Hero Section */}
            <HeroServicio servicio={servicio} expedicion={expedicion} />

            <div className="container mx-auto px-4 py-8 max-w-[1400px] lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <InfoGeneral servicio={servicio} expedicion={expedicion} />

                        <GaleriaSlider
                            fotos={servicio.fotos}
                            servicioNombre={servicio.nombre}
                            autoplay={true}
                            autoplayInterval={4000}
                            showThumbnails={true}
                            showControls={true}
                        />

                        <DescripcionDetallada servicio={servicio} />

                        {(servicio.punto_encuentro || servicio.comodidades || servicio.alimentacion_detalle) && (
                            <Logistica servicio={servicio} />
                        )}

                        {(servicio.servicios_incluidos || servicio.servicios_no_incluidos) && (
                            <ServiciosIncluidos servicio={servicio} />
                        )}

                        {servicio.id_itinerario && (
                            <Itinerario servicio={servicio} />
                        )}

                        {servicio.consideraciones_especiales && (
                            <Consideraciones servicio={servicio} />
                        )}

                        {servicio.diferenciadores && (
                            <Diferenciadores servicio={servicio} />
                        )}
                    </div>

                    {/* Sidebar de Reserva */}
                    <SideBarReserva
                        expedicion={expedicion}
                        setShowReservaModal={setShowReservaModal}
                        setPaqueteSeleccionado={setPaqueteSeleccionado}
                        paqueteSeleccionado={paqueteSeleccionado}
                        precioSeleccionado={precioSeleccionado}
                        servicio={servicio}
                    />
                </div>
            </div>

            {/* Modal de Reserva */}
            {showReservaModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Confirmar Reserva</h3>
                            <button onClick={() => setShowReservaModal(false)}>
                                <X className="text-gray-400 hover:text-gray-600" size={24} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="font-medium text-gray-800">{servicio.nombre}</div>
                                <div className="text-sm text-gray-600">
                                    {formatearFecha(expedicion.fecha_salida || '')}
                                </div>
                                <div className="text-lg font-bold text-amber-600 mt-2">
                                    {precioSeleccionado.moneda} {precioSeleccionado.precio.toLocaleString()}
                                </div>
                            </div>

                            <p className="text-sm text-gray-600">
                                Al confirmar, serás redirigido a WhatsApp para completar tu reserva con nuestro equipo.
                            </p>

                            <div className="flex space-x-3">
                                <Button
                                    variant="primary"
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
                                        const mensaje = `Hola! Quiero reservar la expedición "${servicio.nombre}" para ${formatearFecha(expedicion.fecha_salida || '')}. Precio: ${precioSeleccionado.moneda} ${precioSeleccionado.precio.toLocaleString()}`;
                                        window.open(
                                            `https://wa.me/5493837498552?text=${encodeURIComponent(mensaje)}`,
                                            "_blank"
                                        );
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