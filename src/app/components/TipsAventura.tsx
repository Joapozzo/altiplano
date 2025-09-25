"use client";
import React, { useState, useEffect } from 'react';
import {
    Calendar,
    MapPin,
    Thermometer,
    Droplets,
    Heart,
    FileText,
    X,
    Lightbulb,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

const FloatingTipsWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTip, setCurrentTip] = useState(0);

    const tips = [
        {
            id: 1,
            icon: Calendar,
            categoria: "Planificación",
            titulo: "Días Extra = Tranquilidad",
            contenido: "Disponé de 2 días extras. El clima en montaña es cambiante y más tiempo te permitirá modificar el plan.",
            color: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            icon: MapPin,
            categoria: "Investigación",
            titulo: "Conocé tu Destino",
            contenido: "Investigá el lugar para combinar el viaje con otras experiencias y conocer costumbres locales.",
            color: "from-green-500 to-green-600"
        },
        {
            id: 3,
            icon: Thermometer,
            categoria: "Equipamiento",
            titulo: "Preparate para el Clima",
            contenido: "Invierno: cadenas, mantas térmicas. Verano: agua extra, sombrero y protector solar.",
            color: "from-orange-500 to-red-500"
        },
        {
            id: 4,
            icon: Droplets,
            categoria: "Hidratación",
            titulo: "Hidratación Constante",
            contenido: "En altura, tomá agua cada 15-20 min. Evitá alcohol 48hs antes de la expedición.",
            color: "from-cyan-500 to-blue-500"
        },
        {
            id: 5,
            icon: Heart,
            categoria: "Preparación",
            titulo: "Entrenamiento Previo",
            contenido: "Comenzá 6 semanas antes. Enfocate en cardio y piernas. Caminatas con mochila son ideales.",
            color: "from-pink-500 to-rose-500"
        },
        {
            id: 6,
            icon: FileText,
            categoria: "Documentación",
            titulo: "Permisos y Seguros",
            contenido: "Verificá DNI vigente, contratá seguro de aventura y consultá permisos especiales.",
            color: "from-purple-500 to-indigo-500"
        }
    ];

    // Auto-rotación cada 4 segundos cuando está abierto
    useEffect(() => {
        if (isOpen) {
            const interval = setInterval(() => {
                setCurrentTip((prev) => (prev + 1) % tips.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isOpen, tips.length]);

    const nextTip = () => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
    };

    const prevTip = () => {
        setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length);
    };

    const currentTipData = tips[currentTip];
    const IconComponent = currentTipData.icon;

    if (!isOpen) {
        return (
            <div className="fixed bottom-22 right-8 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <Lightbulb size={24} className="group-hover:scale-110 transition-transform duration-200" />
                    
                    {/* Badge de notificación */}
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                        {tips.length}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Tips de Aventura
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                </button>
            </div>
        );
    }

    return (
        <div className="fixed bottom-22 right-6 z-50">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-80 max-w-sm">
                {/* Header */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Lightbulb size={18} />
                            <span className="font-medium text-sm">Tips de Aventura</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* Contenido del tip */}
                <div className="p-4">
                    <div className="flex items-start space-x-3 mb-3">
                        <div className={`
                            w-10 h-10 rounded-xl bg-gradient-to-br ${currentTipData.color} 
                            flex items-center justify-center flex-shrink-0 shadow-md
                        `}>
                            <IconComponent size={18} className="text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <div className="mb-1">
                                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                                    {currentTipData.categoria}
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-800 text-sm mb-1 leading-tight">
                                {currentTipData.titulo}
                            </h4>
                            <p className="text-gray-600 text-xs leading-relaxed">
                                {currentTipData.contenido}
                            </p>
                        </div>
                    </div>

                    {/* Navegación y progreso */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={prevTip}
                                className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors duration-200"
                            >
                                <ChevronLeft size={14} />
                            </button>
                            <button
                                onClick={nextTip}
                                className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors duration-200"
                            >
                                <ChevronRight size={14} />
                            </button>
                        </div>

                        {/* Indicadores */}
                        <div className="flex space-x-1">
                            {tips.map((_, index) => (
                                <div
                                    key={index}
                                    className={`
                                        w-1.5 h-1.5 rounded-full transition-all duration-300
                                        ${index === currentTip ? 'bg-amber-500' : 'bg-gray-300'}
                                    `}
                                />
                            ))}
                        </div>

                        {/* Contador */}
                        <div className="text-xs text-gray-500 font-medium">
                            {currentTip + 1}/{tips.length}
                        </div>
                    </div>

                    {/* Barra de progreso */}
                    <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${currentTipData.color} rounded-full transition-all duration-100`}
                            style={{
                                width: '100%',
                                animation: 'progress 4s linear infinite'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* CSS para animaciones */}
            <style jsx>{`
                @keyframes progress {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0%); }
                }
            `}</style>
        </div>
    );
};

export default FloatingTipsWidget;