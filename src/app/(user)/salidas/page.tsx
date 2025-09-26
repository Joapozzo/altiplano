"use client";
import React, { useState, useMemo } from 'react';
import { Mountain } from 'lucide-react';
import { expedicionesMock, serviciosMock } from '../../data/mockSalidas';
import { CustomSelect, SearchInput } from '@/app/components/ui/Input';
import SalidaCardCompleta from '@/app/components/CardSalidaCompleta';
import BackButton from '@/app/components/ui/ButtonBack';
import { Servicio } from '@/app/types/servicio';
import { Expedicion } from '@/app/types/expedicion';

interface SalidaCompleta {
    servicio: Servicio;
    expedicion: Expedicion;
}

const TodasLasSalidas = () => {
    const [filtroTexto, setFiltroTexto] = useState('');
    const [filtroDificultad, setFiltroDificultad] = useState('todas');
    // const [filtroMoneda, setFiltroMoneda] = useState('todas');
    const [ordenarPor, setOrdenarPor] = useState('fecha'); // fecha, precio, dificultad

    // Combinar servicios y expediciones
    const todasLasSalidas = useMemo((): SalidaCompleta[] => {
        return expedicionesMock
            .map(expedicion => {
                const servicio = serviciosMock.find(s => s.id_servicio === expedicion.id_servicio);
                return servicio ? { servicio, expedicion } : null;
            })
            .filter((salida): salida is SalidaCompleta => salida !== null);
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

        if (filtroDificultad !== 'todas') {
            salidas = salidas.filter(({ servicio }) => {
                const altura = servicio.altura_maxima;
                switch (filtroDificultad) {
                    case 'inicial': return altura <= 4500;
                    case 'medio': return altura > 4500 && altura <= 5500;
                    case 'avanzado': return altura > 6000;
                    default: return true;
                }
            });
        }

        // Filtro por moneda
        // if (filtroMoneda !== 'todas') {
        //     salidas = salidas.filter(({ expedicion }) =>
        //         expedicion.precios.some(p => p.moneda === filtroMoneda)
        //     );
        // }

        // Ordenamiento actualizado
        salidas.sort((a, b) => {
            switch (ordenarPor) {
                case 'precio':
                    return a.expedicion.precios[0].precio - b.expedicion.precios[0].precio;
                case 'dificultad':
                    return b.servicio.altura_maxima - a.servicio.altura_maxima;
                case 'fecha':
                default:
                    const hoy = new Date();
                    hoy.setHours(0, 0, 0, 0);

                    const fechaA = new Date(a.expedicion.fecha_salida || '');
                    fechaA.setHours(0, 0, 0, 0);

                    const fechaB = new Date(b.expedicion.fecha_salida || '');
                    fechaB.setHours(0, 0, 0, 0);

                    const aExpirada = fechaA < hoy;
                    const bExpirada = fechaB < hoy;

                    // Si una está expirada y la otra no, la expirada va al final
                    if (aExpirada && !bExpirada) return 1;
                    if (!aExpirada && bExpirada) return -1;

                    // Si ambas están en el mismo estado (ambas expiradas o ambas vigentes)
                    // ordenar normalmente por fecha
                    return fechaA.getTime() - fechaB.getTime();
            }
        });

        return salidas;
    }, [todasLasSalidas, filtroTexto, filtroDificultad, ordenarPor]);

    return (
        <div className="min-h-screen bg-gray-50 w-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white w-full">
                <div className="container mx-auto px-4 pt-32 pb-30 flex flex-col items-start max-w-[1400px] lg:px-8">
                    <div className="text-center flex flex-col items-start text-left gap-4">
                        <div className='mb-10'>
                            <BackButton />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
                            Descrubre toas experiencias que tenemos preparadas
                        </h1>
                        <p className="text-xl text-amber-100 max-w-2xl">
                            Descubre todas las aventuras que tenemos preparadas para ti en
                            las montañas de Argentina
                        </p>
                        <div className="mt-6 text-lg">
                            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-[var(--color-naranja-200)]">
                                {salidasFiltradas.length} expediciones disponibles
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-[1400px] lg:px-8">
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
                                { value: "todas", label: "Todas las dificultades" },
                                { value: "inicial", label: "Inicial (hasta 4500msnm)" },
                                { value: "medio", label: "Medio (hasta 5500msnm)" },
                                { value: "avanzado", label: "Avanzado (+6000msnm)" },
                            ]}

                            placeholder="Seleccionar dificultad"
                        />

                        {/* Filtro Moneda */}
                        {/* <CustomSelect
                            value={filtroMoneda}
                            onChange={setFiltroMoneda}
                            options={[
                                { value: "todas", label: "Todas las monedas" },
                                { value: "ARS", label: "Pesos Argentinos" },
                                { value: "USD", label: "Dólares USD" },
                            ]}
                            placeholder="Seleccionar moneda"
                        /> */}

                        {/* Ordenar por */}
                        <CustomSelect
                            value={ordenarPor}
                            onChange={setOrdenarPor}
                            options={[
                                { value: "fecha", label: "Ordenar por fecha" },
                                // { value: "precio", label: "Ordenar por precio" },
                                { value: "dificultad", label: "Ordenar por dificultad" },
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
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">
                            No se encontraron expediciones
                        </h3>
                        <p className="text-gray-500">
                            Intenta ajustar los filtros de búsqueda
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodasLasSalidas;