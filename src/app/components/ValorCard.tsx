import { ChevronRight } from 'lucide-react';
import React from 'react';

interface ValorCardProps {
    valor: object | any;
}

// Subcomponente para cada valor
const ValorCard = ({ valor } : ValorCardProps) => {
    return (
        <div className="bg-gradient-to-br from-white to-amber-50 p-10 rounded-xl shadow-md border border-amber-100 hover:shadow-xl transition duration-300 hover:translate-y-[-5px]">
            <div className="bg-amber-500 w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg mx-auto transform -translate-y-14 border-4 border-white">
                {React.createElement(valor.icono, { size: 30, className: "text-white" })}
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-amber-800">
                {valor.titulo}
            </h3>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-center">
                {valor.descripcion}
            </p>
            <div className="text-center mt-6">
                <a
                    href="#"
                    className="text-amber-600 font-medium inline-flex items-center"
                >
                    Descubrir más <ChevronRight size={16} className="ml-1" />
                </a>
            </div>
        </div>
    );
};

export default ValorCard;
