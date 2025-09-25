// src/app/components/Calendario/MesCard.tsx

import React from 'react';
import { MesData } from '../../types/calendario';

interface MesCardProps {
    mes: MesData;
    index: number;
    selectedMes: MesData | null;
    onMesClick: (mes: MesData) => void;
    getAnimationClass: (elementId: string, baseClass?: string) => string;
    capitalizeFirst: (str: string) => string;
}

const MesCard = ({
    mes,
    index,
    selectedMes,
    onMesClick,
    getAnimationClass,
    capitalizeFirst
}: MesCardProps) => {
    return (
        <div
            id={`mes-${mes.numero}`}
            data-animate
            onClick={() => onMesClick(mes)}
            className={`
                group cursor-pointer bg-[var(--color-beige)]/20 hover:bg-[var(--color-beige)]/40 
                rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1
                border border-[var(--color-beige)]/30 hover:border-[var(--color-amarillo)]/50
                ${selectedMes === mes
                    ? "ring-2 ring-amber-400 shadow-xl bg-[var(--color-beige)]/40 scale-105"
                    : ""
                }
                ${getAnimationClass(`mes-${mes.numero}`)}
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
    );
};

export default MesCard;