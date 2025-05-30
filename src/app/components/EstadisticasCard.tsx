import React from "react";

interface EstadisticaCardProps {
    icono: any;
    numero: string;
    descripcion: string;
}

// Subcomponente para las estadísticas
const EstadisticaCard = ({
    icono,
    numero,
    descripcion,
}: EstadisticaCardProps) => {
    return (
        <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {React.createElement(icono, { size: 32 })}
            </div>
            <div className="text-3xl font-bold text-amber-600 mb-1">{numero}</div>
            <p className="text-gray-600">{descripcion}</p>
        </div>
    );
};

export default EstadisticaCard;