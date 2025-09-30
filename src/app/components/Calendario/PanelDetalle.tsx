import React from 'react';
import { MesData } from '../../types/calendario';
import DetalleMes from './DetalleMes';
import ResumenMeses from './ResumenMeses';

interface PanelDetalleProps {
    selectedMes: MesData | null;
    mesesParaMostrar: MesData[];
    selectedYear: number;
    onMesClick: (mes: MesData) => void;
    onCloseMes: () => void;
    getAnimationClass: (elementId: string, baseClass?: string) => string;
}

const PanelDetalle = ({
    selectedMes,
    mesesParaMostrar,
    selectedYear,
    onMesClick,
    onCloseMes,
    getAnimationClass
}: PanelDetalleProps) => {
    const capitalizeFirst = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="lg:col-span-1">
            <div className="sticky top-24">
                <div
                    className="bg-[var(--color-negro)] rounded-xl shadow-lg border border-amber-200 p-6 transition-all duration-500 transform max-h-[80vh] overflow-hidden flex flex-col"
                    id="detail-panel"
                    data-animate
                >
                    <div className={`${getAnimationClass("detail-panel")} flex-1 flex flex-col`}>
                        {selectedMes ? (
                            <DetalleMes
                                selectedMes={selectedMes}
                                onCloseMes={onCloseMes}
                                capitalizeFirst={capitalizeFirst}
                            />
                        ) : (
                            <ResumenMeses
                                mesesParaMostrar={mesesParaMostrar}
                                selectedYear={selectedYear}
                                onMesClick={onMesClick}
                                capitalizeFirst={capitalizeFirst}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PanelDetalle;