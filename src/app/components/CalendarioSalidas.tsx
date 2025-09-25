/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { expedicionesMock, serviciosMock } from '../data/mockSalidas';
import CalendarioHeader from './Calendario/CalendarioHeader';
import GridMeses from './Calendario/GridMeses';
import PanelDetalle from './Calendario/PanelDetalle';
import { SalidaCalendario, MesData } from '../types/calendario';

const CalendarioSalidas = () => {
    const [selectedMes, setSelectedMes] = useState<MesData | null>(null);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Procesar salidas
    const salidas: SalidaCalendario[] = expedicionesMock.map(expedicion => {
        const servicio = serviciosMock.find(s => s.id_servicio === expedicion.id_servicio);
        return {
            expedicion,
            servicio,
            fechaInicio: new Date(expedicion.fecha_salida || ''),
            fechaFin: new Date(expedicion.fecha_fin || '')
        };
    }).filter(s => s.servicio);

    // Obtener años disponibles - solo de fechas válidas
    const añosDisponibles = [...new Set(
        salidas
            .filter(s => !isNaN(s.fechaInicio.getTime())) // Filtrar fechas inválidas
            .map(s => s.fechaInicio.getFullYear())
    )].sort();

    // Si no hay años con salidas, mostrar el año actual
    if (añosDisponibles.length === 0) {
        añosDisponibles.push(new Date().getFullYear());
    }

    // Agrupar salidas por mes y año
    const mesesConSalidas = new Map<string, SalidaCalendario[]>();

    salidas.forEach(salida => {
        const fecha = salida.fechaInicio;
        const mesKey = `${fecha.getFullYear()}-${fecha.getMonth()}`;

        if (!mesesConSalidas.has(mesKey)) {
            mesesConSalidas.set(mesKey, []);
        }
        mesesConSalidas.get(mesKey)?.push(salida);
    });

    // Crear array de meses para el año seleccionado
    const mesesParaMostrar: MesData[] = [];

    for (let i = 0; i < 12; i++) {
        const fecha = new Date(selectedYear, i, 1);
        const mesKey = `${fecha.getFullYear()}-${fecha.getMonth()}`;
        const salidasDelMes = mesesConSalidas.get(mesKey) || [];

        mesesParaMostrar.push({
            numero: fecha.getMonth() + 1,
            nombre: fecha.toLocaleDateString('es-AR', { month: 'long' }),
            nombreCorto: fecha.toLocaleDateString('es-AR', { month: 'short' }),
            year: fecha.getFullYear(),
            salidas: salidasDelMes
        });
    }

    // Intersection Observer para animaciones
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px'
            }
        );

        const elementsToObserve = document.querySelectorAll('[data-animate]');
        elementsToObserve.forEach(el => {
            if (observerRef.current && el.id) {
                observerRef.current.observe(el);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [selectedYear, selectedMes]);

    // Limpiar animaciones al cambiar año
    useEffect(() => {
        setVisibleElements(new Set());

        setTimeout(() => {
            const elementsToObserve = document.querySelectorAll('[data-animate]');
            elementsToObserve.forEach(el => {
                if (observerRef.current && el.id) {
                    observerRef.current.observe(el);
                }
            });
        }, 100);
    }, [selectedYear]);

    const handleMesClick = (mes: MesData) => {
        setSelectedMes(mes);
    };

    const handleYearChange = (year: number) => {
        setSelectedYear(year);
        setSelectedMes(null);
    };

    const getAnimationClass = (elementId: string, baseClass: string = '') => {
        const isVisible = visibleElements.has(elementId);
        return `${baseClass} transition-all duration-700 ease-out ${isVisible
            ? 'opacity-100 transform translate-y-0 scale-100'
            : 'opacity-0 transform translate-y-8 scale-95'
            }`;
    };

    return (
        <section className="py-16 bg-white w-full" id="calendario">
            <div className="container mx-auto">
                <CalendarioHeader
                    añosDisponibles={añosDisponibles}
                    selectedYear={selectedYear}
                    onYearChange={handleYearChange}
                    getAnimationClass={getAnimationClass}
                />

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <GridMeses
                            mesesParaMostrar={mesesParaMostrar}
                            selectedMes={selectedMes}
                            selectedYear={selectedYear}
                            onMesClick={handleMesClick}
                            getAnimationClass={getAnimationClass}
                        />

                        <PanelDetalle
                            selectedMes={selectedMes}
                            mesesParaMostrar={mesesParaMostrar}
                            selectedYear={selectedYear}
                            onMesClick={handleMesClick}
                            onCloseMes={() => setSelectedMes(null)}
                            getAnimationClass={getAnimationClass}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalendarioSalidas;