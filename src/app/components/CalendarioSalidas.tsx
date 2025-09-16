/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, Users, DollarSign, X, ChevronRight } from 'lucide-react';
import { expedicionesMock, serviciosMock } from '../data/mockSalidas';
import Image from 'next/image';

interface SalidaCalendario {
    expedicion: any;
    servicio: any;
    fechaInicio: Date;
    fechaFin: Date;
}

interface MesData {
    numero: number;
    nombre: string;
    nombreCorto: string;
    year: number;
    salidas: SalidaCalendario[];
}

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
            fechaInicio: new Date(expedicion.fecha_salida),
            fechaFin: new Date(expedicion.fecha_fin)
        };
    }).filter(s => s.servicio);

    // Obtener años disponibles
    const añosDisponibles = [...new Set(salidas.map(s => s.fechaInicio.getFullYear()))].sort();

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

    // Crear array de meses para el año seleccionado (12 meses completos)
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

        // Observar elementos existentes
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

        // Pequeño delay para permitir que los elementos se re-rendericen
        setTimeout(() => {
            const elementsToObserve = document.querySelectorAll('[data-animate]');
            elementsToObserve.forEach(el => {
                if (observerRef.current && el.id) {
                    observerRef.current.observe(el);
                }
            });
        }, 100);
    }, [selectedYear]);

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

    const handleMesClick = (mes: MesData) => {
        setSelectedMes(mes);
    };

    const handleYearChange = (year: number) => {
        setSelectedYear(year);
        setSelectedMes(null); // Reset selección de mes al cambiar año
    };

    const capitalizeFirst = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
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
                <div
                    className="text-center mb-12"
                    id="calendario-header"
                    data-animate
                >
                    <h2
                        className={getAnimationClass(
                            "calendario-header",
                            "text-4xl font-bold mb-2"
                        )}
                    >
                        Calendario de Salidas
                    </h2>
                    <div
                        className={getAnimationClass(
                            "calendario-header",
                            "w-24 h-1 bg-amber-500 mx-auto my-4"
                        )}
                    ></div>
                    <p
                        className={getAnimationClass(
                            "calendario-header",
                            "text-lg text-gray-600 max-w-3xl mx-auto mb-6"
                        )}
                    >
                        Elegí el año y mes de tu próxima aventura
                    </p>

                    {/* Selector de Año */}
                    <div
                        className={getAnimationClass(
                            "calendario-header",
                            "flex justify-center items-center space-x-2 mb-8"
                        )}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <span className="text-sm font-medium text-gray-600 mr-4">
                            Ver año:
                        </span>
                        <div className="flex space-x-2">
                            {añosDisponibles.map((año, index) => (
                                <button
                                    key={año}
                                    onClick={() => handleYearChange(año)}
                                    className={`
                                        px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
                                        ${selectedYear === año
                                            ? "bg-[var(--color-naranja)] text-[var(--color-white)] shadow-lg"
                                            : "bg-[var(--color-beige)]/40 text-[var(--color-negro)] hover:bg-[var(--color-beige)]/60 border border-[var(--color-beige)]"
                                        }
                                    `}
                                    style={{
                                        animationDelay: `${300 + index * 100}ms`,
                                    }}
                                >
                                    {año}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Calendario de meses */}
                        <div className="lg:col-span-2">
                            {/* Título del año actual */}
                            <div className="text-center mb-6" id="year-title" data-animate>
                                <h3
                                    className={getAnimationClass(
                                        "year-title",
                                        "text-2xl font-bold text-[var(--color-negro)]"
                                    )}
                                >
                                    Año {selectedYear}
                                </h3>
                                <p
                                    className={getAnimationClass(
                                        "year-title",
                                        "text-sm text-gray-600"
                                    )}
                                >
                                    {
                                        mesesParaMostrar.filter((m) => m.salidas.length > 0)
                                            .length
                                    }{" "}
                                    meses con salidas programadas
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                                {mesesParaMostrar.map((mes, index) => (
                                    <div
                                        key={`${mes.year}-${mes.numero}`}
                                        id={`mes-${mes.numero}`}
                                        data-animate
                                        onClick={() => handleMesClick(mes)}
                                        className={`
                                            group cursor-pointer bg-[var(--color-beige)]/20 hover:bg-[var(--color-beige)]/40 
                                            rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1
                                            border border-[var(--color-beige)]/30 hover:border-[var(--color-amarillo)]/50
                                            ${selectedMes === mes
                                                ? "ring-2 ring-amber-400 shadow-xl bg-[var(--color-beige)]/40 scale-105"
                                                : ""
                                            }
                                            ${getAnimationClass(
                                                `mes-${mes.numero}`
                                            )}
                                        `}
                                        style={{
                                            transitionDelay: `${index * 100}ms`,
                                        }}
                                    >
                                        <div className="text-center">
                                            {/* Número del mes */}
                                            <div className="text-3xl font-bold text-[var(--color-naranja)] mb-2 group-hover:scale-110 transition-transform duration-300">
                                                {mes.numero.toString().padStart(2, "0")}
                                            </div>

                                            {/* Nombre del mes */}
                                            <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors duration-300">
                                                {capitalizeFirst(mes.nombre)}
                                            </h3>

                                            {/* Año */}
                                            <div className="text-sm text-gray-500 mb-3">
                                                {mes.year}
                                            </div>

                                            {/* Número de salidas */}
                                            <div
                                                className={`
                                                inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 group-hover:scale-110
                                                ${mes.salidas.length > 0
                                                        ? "bg-[var(--color-amarillo)] text-[var(--color-negro)]"
                                                        : "bg-gray-100 text-gray-500"
                                                    }
                                            `}
                                            >
                                                {mes.salidas.length === 0 && "Sin salidas"}
                                                {mes.salidas.length === 1 && "1 salida"}
                                                {mes.salidas.length > 1 &&
                                                    `${mes.salidas.length} salidas`}
                                            </div>

                                            {/* Indicador visual */}
                                            {mes.salidas.length > 0 && (
                                                <div className="mt-3 flex justify-center">
                                                    <div className="flex space-x-1">
                                                        {mes.salidas.slice(0, 3).map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className="w-2 h-2 rounded-full bg-[var(--color-naranja-200)] transform transition-all duration-300 group-hover:scale-125"
                                                                style={{ animationDelay: `${i * 100}ms` }}
                                                            />
                                                        ))}
                                                        {mes.salidas.length > 3 && (
                                                            <div className="text-xs text-[var(--color-naranja)] font-bold ml-1 transition-transform duration-300 group-hover:scale-110">
                                                                +{mes.salidas.length - 3}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Panel de detalle */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <div
                                    className="bg-[var(--color-negro)] rounded-xl shadow-lg border border-amber-200 p-6 transition-all duration-500 transform"
                                    id="detail-panel"
                                    data-animate
                                >
                                    <div className={getAnimationClass("detail-panel")}>
                                        {selectedMes ? (
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-lg font-bold text-[var(--color-white)]">
                                                        {capitalizeFirst(selectedMes.nombre)}{" "}
                                                        {selectedMes.year}
                                                    </h3>
                                                    <button
                                                        onClick={() => setSelectedMes(null)}
                                                        className="p-1 rounded-lg transition-all duration-200 text-[var(--color-white)] hover:bg-[var(--color-naranja-200)] hover:scale-110"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>

                                                {selectedMes.salidas.length === 0 ? (
                                                    <div className="text-center py-8">
                                                        <Calendar
                                                            size={48}
                                                            className="mx-auto text-[var(--color-naranja-200)] mb-4 animate-bounce"
                                                        />
                                                        <p className="text-[var(--color-white)] mb-2">
                                                            No hay salidas programadas para este mes
                                                        </p>
                                                        <p className="text-sm text-[var(--color-white)] font-light">
                                                            ¡Pero podemos organizar una expedición
                                                            personalizada!
                                                        </p>
                                                        <button className="mt-4 bg-[var(--color-naranja-200)] hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm transform hover:scale-105">
                                                            Consultar Salida Privada
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="space-y-4">
                                                        <div className="text-center mb-4">
                                                            <div className="bg-[var(--color-naranja-200)] text-[var(--color-negro)] px-3 py-1 rounded-full text-sm font-bold inline-block animate-pulse">
                                                                {selectedMes.salidas.length} salida
                                                                {selectedMes.salidas.length > 1 ? "s" : ""}{" "}
                                                                programada
                                                                {selectedMes.salidas.length > 1 ? "s" : ""}
                                                            </div>
                                                        </div>
                                                        {selectedMes.salidas.map((salida, index) => (
                                                            <div
                                                                key={index}
                                                                className="border border-[var(--color-naranja-200)] rounded-lg p-4 transition-all duration-300 hover:shadow-lg transform hover:scale-102"
                                                                style={{
                                                                    animationDelay: `${index * 200}ms`,
                                                                    opacity: 0,
                                                                    animation: `fadeInUp 0.6s ease-out ${index * 200
                                                                        }ms forwards`,
                                                                }}
                                                            >
                                                                {/* Imagen principal */}
                                                                <div className="relative h-24 rounded-lg overflow-hidden mb-3 group">
                                                                    <Image
                                                                        src={salida.servicio.fotos[0]}
                                                                        alt={salida.servicio.nombre}
                                                                        fill
                                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                                                    <div className="absolute bottom-2 left-2 text-white">
                                                                        <div className="text-xs bg-amber-500 px-2 py-1 rounded-full animate-pulse">
                                                                            {getDaysUntil(salida.fechaInicio)}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Información de la salida */}
                                                                <h4 className="font-bold text-[var(--color-white)] mb-2 text-sm">
                                                                    {salida.servicio.nombre}
                                                                </h4>
                                                                <div className="space-y-2 text-xs">
                                                                    <div className="flex items-center justify-between text-[var(--color-white)]">
                                                                        <div className="flex items-center">
                                                                            <Calendar
                                                                                size={12}
                                                                                className="mr-1 text-[var(--color-naranja-200)]"
                                                                            />
                                                                            <span>Fechas</span>
                                                                        </div>
                                                                        <span className="font-medium">
                                                                            {formatDateShort(salida.fechaInicio)} -{" "}
                                                                            {formatDateShort(salida.fechaFin)}
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between text-[var(--color-white)]">
                                                                        <div className="flex items-center">
                                                                            <Clock
                                                                                size={12}
                                                                                className="mr-1 text-[var(--color-naranja-200)]"
                                                                            />
                                                                            <span>Duración</span>
                                                                        </div>
                                                                        <span className="font-medium">
                                                                            {salida.servicio.duracion_dias} días
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between text-[var(--color-white)]">
                                                                        <div className="flex items-center">
                                                                            <MapPin
                                                                                size={12}
                                                                                className="mr-1 text-[var(--color-naranja-200)]"
                                                                            />
                                                                            <span>Altura</span>
                                                                        </div>
                                                                        <span className="font-medium">
                                                                            {salida.servicio.altura_maxima}m
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between text-[var(--color-white)]">
                                                                        <div className="flex items-center">
                                                                            <Users
                                                                                size={12}
                                                                                className="mr-1 text-[var(--color-naranja-200)]"
                                                                            />
                                                                            <span>Cupos</span>
                                                                        </div>
                                                                        <span className="font-medium">
                                                                            {salida.expedicion.cupos_disponibles}{" "}
                                                                            disponibles
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center justify-between text-[var(--color-white)]">
                                                                        <div className="flex items-center">
                                                                            <DollarSign
                                                                                size={12}
                                                                                className="mr-1 text-[var(--color-naranja-200)]"
                                                                            />
                                                                            <span>Precio</span>
                                                                        </div>
                                                                        <span className="font-bold text-[var(--color-naranja-200)]">
                                                                            {salida.expedicion.precios[0].moneda}{" "}
                                                                            {salida.expedicion.precios[0].precio.toLocaleString()}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <button className="w-full mt-3 bg-[var(--color-naranja-200)] hover:bg-amber-700 text-white py-2 px-3 rounded-lg transition-all duration-300 font-medium text-xs transform hover:scale-105"
                                                                onClick={() => {window.location.href = `/salidas/${salida.servicio.id_servicio}`;}}>
                                                                    Ver Detalles y Reservar
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center">
                                                <Calendar
                                                    size={48}
                                                    className="mx-auto text-[var(--color-naranja-200)] mb-4 animate-bounce"
                                                />
                                                <h3 className="text-xl font-bold text-[var(--color-white)] mb-2">
                                                    Seleccioná un Mes
                                                </h3>
                                                <p className="text-sm text-[var(--color-white)] mb-4 font-light">
                                                    Hacé click en cualquier mes para ver las
                                                    expediciones programadas.
                                                </p>
                                                <div className="space-y-3 text-left bg-[var(--color-negro-200)] rounded-lg p-4 border border-amber-100">
                                                    <div className="text-sm font-medium text-[var(--color-white)] border-b border-amber-100 pb-2">
                                                        Meses con Salidas en {selectedYear}
                                                    </div>
                                                    {mesesParaMostrar
                                                        .filter((mes) => mes.salidas.length > 0)
                                                        .slice(0, 4)
                                                        .map((mes, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex justify-between items-center text-sm cursor-pointer hover:bg-[var(--color-naranja)]/10 rounded p-2 transition-all duration-300 transform hover:scale-105"
                                                                onClick={() => handleMesClick(mes)}
                                                                style={{
                                                                    animationDelay: `${index * 100}ms`,
                                                                    opacity: 0,
                                                                    animation: `fadeInLeft 0.5s ease-out ${index * 100
                                                                        }ms forwards`,
                                                                }}
                                                            >
                                                                <div>
                                                                    <div className="font-bold text-[var(--color-white)]">
                                                                        {capitalizeFirst(mes.nombre)}
                                                                    </div>
                                                                    <div className="text-xs text-[var(--color-white)] font-light">
                                                                        Mes #{mes.numero}
                                                                    </div>
                                                                </div>
                                                                <div className="text-right">
                                                                    <div className="text-xs text-[var(--color-naranja-200)] font-bold">
                                                                        {mes.salidas.length} salida
                                                                        {mes.salidas.length > 1 ? "s" : ""}
                                                                    </div>
                                                                    <ChevronRight
                                                                        size={12}
                                                                        className="text-[var(--color-naranja-200)] mx-auto mt-1 transition-transform duration-300 hover:translate-x-1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}

                                                    {mesesParaMostrar.filter(
                                                        (mes) => mes.salidas.length > 0
                                                    ).length === 0 && (
                                                            <div className="text-center py-4">
                                                                <p className="text-[var(--color-white)] text-sm">
                                                                    No hay salidas programadas para {selectedYear}
                                                                </p>
                                                                <p className="text-xs text-[var(--color-white)] font-light mt-1">
                                                                    Probá con otro año o consultanos por salidas
                                                                    privadas
                                                                </p>
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .scale-102 {
            transform: scale(1.02);
          }
        `}</style>
        </section>
    );
};

export default CalendarioSalidas;