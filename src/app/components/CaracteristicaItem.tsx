import React from "react";

interface CaracteristicaItemProps {
    icono: any;
    texto: string;
}

// Subcomponente para las características
const CaracteristicaItem = ({ icono, texto } : CaracteristicaItemProps) => {
    return (
        <div className="flex items-center">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full mr-4">
                {React.createElement(icono, { size: 20, className: "text-white" })}
            </div>
            <span>{texto}</span>
        </div>
    );
};

export default CaracteristicaItem;