import React from "react";

interface ServicioCardProps {
    servicio: object | any;
}

// Subcomponente para cada servicio
const ServicioCard = ({ servicio }: ServicioCardProps) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition hover:shadow-lg hover:border-amber-200">
            <div className="mb-6 text-amber-600 bg-amber-50 w-16 h-16 flex items-center justify-center rounded-xl">
                {React.createElement(servicio.icono, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold mb-3">{servicio.titulo}</h3>
            <p className="text-gray-600">{servicio.descripcion}</p>
        </div>
    );
};

export default ServicioCard;