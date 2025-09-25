// src/app/components/Calendario/DetalleMes.tsx

import React from 'react';
import { Calendar, X } from 'lucide-react';
import { MesData } from '../../types/calendario';
import SalidaCard from './SalidasCard';

interface DetalleMesProps {
    selectedMes: MesData;
    onCloseMes: () => void;
    capitalizeFirst: (str: string) => string;
}

const DetalleMes = ({ selectedMes, onCloseMes, capitalizeFirst }: DetalleMesProps) => {
    return (
        <div className="flex flex-col h-full">
            {/* Header fijo */}
            <div className="flex items-center justify-between mb-4 flex-shrink-0">
                <h3 className="text-lg font-bold text-[var(--color-white)]">
                    {capitalizeFirst(selectedMes.nombre)} {selectedMes.year}
                </h3>
                <button
                    onClick={onCloseMes}
                    className="p-1 rounded-lg transition-all duration-200 text-[var(--color-white)] hover:bg-[var(--color-naranja-200)] hover:scale-110"
                >
                    <X size={16} />
                </button>
            </div>

            {/* Contenido scrolleable */}
            <div className="flex-1 overflow-y-auto pr-2" style={{ maxHeight: 'calc(80vh - 120px)' }}>
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
                            ¡Pero podemos organizar una expedición personalizada!
                        </p>
                        <button className="mt-4 bg-[var(--color-naranja-200)] hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm transform hover:scale-105">
                            Consultar Salida Privada
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="text-center mb-4 flex-shrink-0">
                            <div className="bg-[var(--color-naranja-200)] text-[var(--color-negro)] px-3 py-1 rounded-full text-sm font-bold inline-block animate-pulse">
                                {selectedMes.salidas.length} salida
                                {selectedMes.salidas.length > 1 ? "s" : ""} programada
                                {selectedMes.salidas.length > 1 ? "s" : ""}
                            </div>
                        </div>

                        {/* Lista de salidas con scroll personalizado */}
                        <div className="space-y-4">
                            {selectedMes.salidas.map((salida, index) => (
                                <SalidaCard
                                    key={index}
                                    salida={salida}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetalleMes;