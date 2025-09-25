// src/app/components/Calendario/GridMeses.tsx

import React from 'react';
import { MesData } from '../../types/calendario';
import MesCard from './MesCard';

interface GridMesesProps {
    mesesParaMostrar: MesData[];
    selectedMes: MesData | null;
    selectedYear: number;
    onMesClick: (mes: MesData) => void;
    getAnimationClass: (elementId: string, baseClass?: string) => string;
}

const GridMeses = ({
    mesesParaMostrar,
    selectedMes,
    selectedYear,
    onMesClick,
    getAnimationClass
}: GridMesesProps) => {
    const capitalizeFirst = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const mesesConSalidas = mesesParaMostrar.filter(mes => mes.salidas.length > 0);

    return (
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
                    {mesesConSalidas.length} meses con salidas programadas
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
                {mesesConSalidas.map((mes, index) => (
                    <MesCard
                        key={`${mes.year}-${mes.numero}`}
                        mes={mes}
                        index={index}
                        selectedMes={selectedMes}
                        onMesClick={onMesClick}
                        getAnimationClass={getAnimationClass}
                        capitalizeFirst={capitalizeFirst}
                    />
                ))}
            </div>
        </div>
    );
};

export default GridMeses;