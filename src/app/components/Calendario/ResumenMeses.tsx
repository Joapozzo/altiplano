// src/app/components/Calendario/ResumenMeses.tsx

import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { MesData } from '../../types/calendario';

interface ResumenMesesProps {
    mesesParaMostrar: MesData[];
    selectedYear: number;
    onMesClick: (mes: MesData) => void;
    capitalizeFirst: (str: string) => string;
}

const ResumenMeses = ({
    mesesParaMostrar,
    selectedYear,
    onMesClick,
    capitalizeFirst
}: ResumenMesesProps) => {
    const mesesConSalidas = mesesParaMostrar.filter((mes) => mes.salidas.length > 0);

    return (
        <div className="text-center h-full flex flex-col">
            <Calendar
                size={48}
                className="mx-auto text-[var(--color-naranja-200)] mb-4 animate-bounce"
            />
            <h3 className="text-xl font-bold text-[var(--color-white)] mb-2">
                Seleccioná un Mes
            </h3>
            <p className="text-sm text-[var(--color-white)] mb-4 font-light">
                Hacé click en cualquier mes para ver las expediciones programadas.
            </p>

            {/* Contenido scrolleable */}
            <div className="flex-1 overflow-y-auto pr-2" style={{ maxHeight: 'calc(80vh - 200px)' }}>
                <div className="space-y-3 text-left bg-[var(--color-negro-200)] rounded-lg p-4 border border-amber-100">
                    <div className="text-sm font-medium text-[var(--color-white)] border-b border-amber-100 pb-2">
                        Meses con Salidas en {selectedYear}
                    </div>

                    {mesesConSalidas.slice(0, 4).map((mes, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center text-sm cursor-pointer hover:bg-[var(--color-naranja)]/10 rounded p-2 transition-all duration-300 transform hover:scale-105"
                            onClick={() => onMesClick(mes)}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                opacity: 0,
                                animation: `fadeInLeft 0.5s ease-out ${index * 100}ms forwards`,
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

                    {mesesConSalidas.length === 0 && (
                        <div className="text-center py-4">
                            <p className="text-[var(--color-white)] text-sm">
                                No hay salidas programadas para {selectedYear}
                            </p>
                            <p className="text-xs text-[var(--color-white)] font-light mt-1">
                                Probá con otro año o consultanos por salidas privadas
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumenMeses;