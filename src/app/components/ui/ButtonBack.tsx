import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
    return (
        <button
            onClick={() => window.history.back()}
            className="group relative flex items-center gap-2 text-white px-4 py-2 rounded-full transition-all duration-300 overflow-hidden
                       bg-black/20 backdrop-blur-sm border border-white/20 
                       hover:bg-white/10 hover:border-white/40 hover:scale-105 hover:shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent
                       active:scale-95"
        >
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                            transition-transform duration-700 ease-out"></div>

            {/* Icono con animación */}
            <ArrowLeft
                size={18}
                className="transform transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110 relative z-10"
            />

            {/* Texto con animación */}
            <span className="font-medium text-sm relative z-10 transform transition-all duration-300 
                           group-hover:translate-x-0.5">
                Volver
            </span>

            {/* Overlay sutil en hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        </button>
    );
};

export default BackButton;