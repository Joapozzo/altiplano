import React, { useState, useEffect, useRef } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    Maximize2,
    X
} from 'lucide-react';
import Image from 'next/image';

interface GaleriaSliderProps {
    fotos: string[];
    servicioNombre: string;
    autoplay?: boolean;
    autoplayInterval?: number;
    showThumbnails?: boolean;
    showControls?: boolean;
}

const GaleriaSlider = ({
    fotos,
    servicioNombre,
    autoplay = true,
    autoplayInterval = 4000,
    showThumbnails = true,
    showControls = true
}: GaleriaSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoplay);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-play functionality
    useEffect(() => {
        if (isPlaying && !isHovered && !isFullscreen) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % fotos.length);
            }, autoplayInterval);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPlaying, isHovered, isFullscreen, fotos.length, autoplayInterval]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (isFullscreen) {
                switch (e.key) {
                    case 'ArrowLeft':
                        prevImage();
                        break;
                    case 'ArrowRight':
                        nextImage();
                        break;
                    case 'Escape':
                        setIsFullscreen(false);
                        break;
                    case ' ':
                        e.preventDefault();
                        setIsPlaying(!isPlaying);
                        break;
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [isFullscreen, isPlaying]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % fotos.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const openFullscreen = () => {
        setIsFullscreen(true);
        setIsPlaying(false);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Galería de Imágenes</h2>
                        {showControls && (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={togglePlayPause}
                                    className="p-2 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors duration-200"
                                    title={isPlaying ? "Pausar" : "Reproducir"}
                                >
                                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                                </button>
                                <span className="text-sm text-gray-500 min-w-[60px]">
                                    {currentIndex + 1} / {fotos.length}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Slider Principal */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Contenedor de imagen principal */}
                        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden bg-gray-100">
                            <Image
                                src={fotos[currentIndex]}
                                alt={`${servicioNombre} - Imagen ${currentIndex + 1}`}
                                fill
                                className="object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                priority={currentIndex === 0}
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Controles de navegación */}
                            {showControls && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full 
                                                   hover:bg-black/70 transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                                        title="Imagen anterior"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full 
                                                   hover:bg-black/70 transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                                        title="Imagen siguiente"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </>
                            )}

                            {/* Botón fullscreen */}
                            <button
                                onClick={openFullscreen}
                                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full 
                                           hover:bg-black/70 transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100"
                                title="Pantalla completa"
                            >
                                <Maximize2 size={16} />
                            </button>

                            {/* Información de la imagen */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-semibold">{servicioNombre}</p>
                                <p className="text-white/80 text-sm">Fotografía {currentIndex + 1} de {fotos.length}</p>
                            </div>

                            {/* Barra de progreso */}
                            {isPlaying && !isHovered && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                                    <div 
                                        className="h-full bg-amber-500"
                                        style={{
                                            animation: `slideProgress ${autoplayInterval}ms linear infinite`
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Indicadores de puntos */}
                        <div className="flex justify-center gap-2 mt-4">
                            {fotos.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-amber-500 w-8' 
                                            : 'bg-gray-300 hover:bg-gray-400 w-2'
                                    }`}
                                    title={`Ir a imagen ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Thumbnails */}
                        {showThumbnails && (
                            <div className="mt-6">
                                <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                    {fotos.map((foto, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToImage(index)}
                                            className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 transform hover:scale-105 ${
                                                index === currentIndex 
                                                    ? 'ring-2 ring-amber-500 scale-105 shadow-lg' 
                                                    : 'opacity-70 hover:opacity-100'
                                            }`}
                                        >
                                            <Image
                                                src={foto}
                                                alt={`Thumbnail ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="80px"
                                            />
                                            <div className={`absolute inset-0 border-2 rounded-lg transition-colors duration-300 ${
                                                index === currentIndex ? 'border-amber-500' : 'border-transparent'
                                            }`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal Fullscreen */}
            {isFullscreen && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 z-10">
                        <div className="flex justify-between items-center text-white">
                            <div>
                                <h3 className="text-xl font-semibold">{servicioNombre}</h3>
                                <p className="text-sm opacity-70">
                                    {currentIndex + 1} de {fotos.length}
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={togglePlayPause}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                                    title={isPlaying ? "Pausar" : "Reproducir"}
                                >
                                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                                </button>
                                <button
                                    onClick={closeFullscreen}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                                    title="Cerrar"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navegación Izquierda */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 z-10 p-4 text-white hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
                        title="Imagen anterior"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    {/* Imagen Principal Fullscreen */}
                    <div className="relative max-w-7xl max-h-[80vh] w-full mx-4">
                        <Image
                            src={fotos[currentIndex]}
                            alt={`${servicioNombre} - Imagen ${currentIndex + 1}`}
                            width={1200}
                            height={800}
                            className="object-contain w-full h-full rounded-lg shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Navegación Derecha */}
                    <button
                        onClick={nextImage}
                        className="absolute right-4 z-10 p-4 text-white hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
                        title="Imagen siguiente"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Indicadores inferiores */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {fotos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToImage(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Ayuda de teclado */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/50 text-xs hidden md:block">
                        ← → Navegar • ESPACIO Play/Pause • ESC Cerrar
                    </div>
                </div>
            )}
        </>
    );
};

export default GaleriaSlider;