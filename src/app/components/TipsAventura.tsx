import React, { useState, useEffect } from 'react';
import {
    Calendar,
    MapPin,
    Thermometer,
    Droplets,
    Heart,
    FileText,
    ChevronLeft,
    ChevronRight,
    Clock
} from 'lucide-react';

const TipsAventura = () => {
    const [currentTip, setCurrentTip] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const tips = [
        {
            id: 1,
            icon: Calendar,
            categoria: "Planificación",
            titulo: "Días Extra = Tranquilidad",
            contenido: "Te sugerimos disponer de 2 días extras para tu expedición. El clima en la montaña es cambiante y disponer de más tiempo te permitirá poder modificar el plan.",
            color: "from-blue-400 to-blue-500"
        },
        {
            id: 2,
            icon: MapPin,
            categoria: "Investigación",
            titulo: "Conocé tu Destino",
            contenido: "Investigá acerca del lugar que elegiste como destino para combinar el viaje con otras experiencias, así conocer sobre costumbres y cultura del lugar.",
            color: "from-green-400 to-green-500"
        },
        {
            id: 3,
            icon: Thermometer,
            categoria: "Equipamiento",
            titulo: "Preparate para el Clima",
            contenido: "Equipamiento según el clima: Invierno lleva cadenas para la nieve, mantas térmicas y líquido anticongelante. Verano: agua extra para vos y el motor, sombrero y protector solar.",
            color: "from-orange-400 to-red-500"
        },
        {
            id: 4,
            icon: Droplets,
            categoria: "Hidratación",
            titulo: "Hidratación Constante",
            contenido: "En altura, tu cuerpo se deshidrata más rápido. Tomá agua pequeños sorbos cada 15-20 minutos, incluso si no tenés sed. Evitá el alcohol 48hs antes de la expedición.",
            color: "from-cyan-400 to-blue-500"
        },
        {
            id: 5,
            icon: Heart,
            categoria: "Preparación Física",
            titulo: "Entrenamiento Previo",
            contenido: "Comenzá a entrenar al menos 6 semanas antes. Enfocate en resistencia cardiovascular y fortalecimiento de piernas. Caminatas con mochila pesada son ideales.",
            color: "from-pink-400 to-rose-500"
        },
        {
            id: 6,
            icon: FileText,
            categoria: "Documentación",
            titulo: "Permisos y Seguros",
            contenido: "Verificá que tu DNI esté vigente, contratá seguro de aventura, y consultá si necesitás permisos especiales para el área protegida que vas a visitar.",
            color: "from-purple-400 to-indigo-500"
        }
    ];

    // Auto-rotación cada 5 segundos
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentTip((prev) => (prev + 1) % tips.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused, tips.length]);

    const nextTip = () => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
    };

    const prevTip = () => {
        setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length);
    };

    const goToTip = (index: number) => {
        setCurrentTip(index);
    };

    const currentTipData = tips[currentTip];
    const IconComponent = currentTipData.icon;

    return (
        <section className="py-8 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
            {/* Patrón de fondo decorativo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-amber-300"></div>
                <div className="absolute top-12 right-8 w-12 h-12 rounded-full bg-orange-300"></div>
                <div className="absolute bottom-6 left-1/4 w-16 h-16 rounded-full bg-yellow-300"></div>
                <div className="absolute bottom-8 right-1/3 w-8 h-8 rounded-full bg-amber-400"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm mb-4">
                            <span className="text-amber-600 font-medium text-sm">💡 Tips de Aventura</span>
                        </div>
                    </div>

                    {/* Contenido Principal */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 md:p-10">

                            {/* Tip Content */}
                            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">

                                {/* Icono animado */}
                                <div className={`
                                    flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${currentTipData.color} 
                                    flex items-center justify-center shadow-lg transform transition-all duration-500
                                    hover:scale-110 animate-pulse
                                `}>
                                    <IconComponent size={32} className="text-white" />
                                </div>

                                {/* Contenido del tip */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="mb-2">
                                        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
                                            {currentTipData.categoria}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 transition-all duration-500">
                                        {currentTipData.titulo}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed transition-all duration-500">
                                        {currentTipData.contenido}
                                    </p>
                                </div>

                                {/* Navegación */}
                                <div className="flex-shrink-0 flex items-center space-x-2">
                                    <button
                                        onClick={prevTip}
                                        className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 transition-colors duration-200"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextTip}
                                        className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 transition-colors duration-200"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Indicadores de progreso */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {tips.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToTip(index)}
                                        className={`
                                            w-3 h-3 rounded-full transition-all duration-300
                                            ${index === currentTip
                                                ? 'bg-amber-500 scale-125'
                                                : 'bg-amber-200 hover:bg-amber-300'
                                            }
                                        `}
                                    />
                                ))}
                            </div>

                            {/* Barra de progreso automático */}
                            <div className="mt-4 h-1 bg-amber-100 rounded-full overflow-hidden">
                                <div
                                    className={`
                                        h-full bg-gradient-to-r ${currentTipData.color} rounded-full transition-all duration-100
                                        ${isPaused ? 'animate-none' : 'animate-progress'}
                                    `}
                                    style={{
                                        animation: isPaused ? 'none' : 'progress 5s linear infinite'
                                    }}
                                />
                            </div>

                            {/* Indicador de pausa */}
                            {isPaused && (
                                <div className="absolute top-4 right-4 flex items-center text-amber-600 text-xs">
                                    <Clock size={12} className="mr-1" />
                                    Pausado
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer discreto */}
                    <div className="text-center mt-6">
                        <p className="text-amber-700/60 text-xs">
                            ✨ Consejos que marcan la diferencia en tu aventura
                        </p>
                    </div>
                </div>
            </div>

            {/* CSS para animaciones */}
            <style jsx>{`
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-progress {
                    animation: progress 5s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default TipsAventura;