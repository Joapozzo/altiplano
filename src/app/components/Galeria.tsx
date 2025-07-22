/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { serviciosMock } from '../data/mockSalidas';
import { X, ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';

const Galeria = () => {
    // Unificamos todas las fotos en un array plano con referencias
    const fotos = serviciosMock.flatMap(servicio =>
        servicio.fotos.map((foto, index) => ({
            src: foto,
            alt: `${servicio.nombre} - Foto ${index + 1}`,
            servicio: servicio.nombre
        }))
    );

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        setImageLoaded(false);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setImageLoaded(false);
        document.body.style.overflow = 'unset';
    };

    const prevImage = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setImageLoaded(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
            setIsAnimating(false);
        }, 150);
    };

    const nextImage = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setImageLoaded(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
            setIsAnimating(false);
        }, 150);
    };

    // Cerrar con tecla Escape
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };

        if (lightboxOpen) {
            document.addEventListener('keydown', handleKeyPress);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [lightboxOpen, nextImage, prevImage]);

    // Definir tamaños para el collage (hacemos que algunas fotos sean más grandes)
    const getImageClass = (index: number) => {
        const patterns = [
            'col-span-2 row-span-2', // Grande
            'col-span-1 row-span-1', // Normal
            'col-span-1 row-span-1', // Normal
            'col-span-2 row-span-1', // Ancho
            'col-span-1 row-span-2', // Alto
            'col-span-1 row-span-1', // Normal
            'col-span-1 row-span-1', // Normal
            'col-span-2 row-span-1', // Ancho
            'col-span-1 row-span-1', // Normal
        ];
        return patterns[index % patterns.length];
    };

    const getImageHeight = (index: number) => {
        const patterns = [
            'h-80', // Grande
            'h-40', // Normal
            'h-40', // Normal
            'h-40', // Ancho
            'h-80', // Alto
            'h-40', // Normal
            'h-40', // Normal
            'h-40', // Ancho
            'h-40', // Normal
        ];
        return patterns[index % patterns.length];
    };

    return (
        <section className="py-16 bg-gray-50" id="galeria">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2">Galería de Aventuras</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Capturamos los momentos más impresionantes de nuestras
                        expediciones
                    </p>
                </div>

                {/* Collage Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-auto max-w-7xl mx-auto">
                    {fotos.map((foto, index) => (
                        <div
                            key={index}
                            className={`
                                relative cursor-pointer group overflow-hidden rounded-xl
                                ${getImageClass(index)} ${getImageHeight(index)}
                                transform transition-all duration-500 ease-out
                                hover:scale-[1.02] hover:shadow-2xl hover:z-10
                            `}
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.67vw"
                            />

                            {/* Overlay con gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-sm font-medium mb-1">{foto.servicio}</p>
                                    <p className="text-xs opacity-80">Foto {index + 1}</p>
                                </div>

                                {/* Ícono de zoom */}
                                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full p-2 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                    <ZoomIn size={16} className="text-white" />
                                </div>
                            </div>

                            {/* Efecto de brillo */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Mejorado */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 z-10">
                        <div className="flex justify-between items-center text-white">
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {fotos[currentIndex].servicio}
                                </h3>
                                <p className="text-sm opacity-70">
                                    {currentIndex + 1} de {fotos.length}
                                </p>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeLightbox();
                                }}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Navegación Izquierda */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 z-10 p-3 text-white hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
                    >
                        <ArrowLeft size={28} />
                    </button>

                    {/* Imagen Principal */}
                    <div
                        className={`
                            max-w-5xl max-h-[70vh] w-full px-4 transition-all duration-300
                            ${imageLoaded
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                            }
                            ${isAnimating ? "scale-95 opacity-50" : ""}
                        `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={fotos[currentIndex].src}
                                alt={fotos[currentIndex].alt}
                                width={1200}
                                height={800}
                                className="object-contain w-full h-full mx-auto rounded-lg shadow-2xl"
                                onLoad={() => setImageLoaded(true)}
                                priority
                            />
                        </div>
                    </div>

                    {/* Navegación Derecha */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 z-10 p-3 text-white hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
                    >
                        <ArrowRight size={28} />
                    </button>

                    {/* Thumbnails en la parte inferior */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div className="flex justify-center space-x-2 ">
                            {fotos.map((foto, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(index);
                                        setImageLoaded(false);
                                    }}
                                    className={`
                                        w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 flex-shrink-0
                                        ${index === currentIndex
                                            ? "ring-2 ring-amber-400 scale-110"
                                            : "opacity-60 hover:opacity-100 hover:scale-105"
                                        }
                                    `}
                                >
                                    <Image
                                        src={foto.src}
                                        alt={foto.alt}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Indicadores de teclado */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/50 text-xs hidden md:block">
                        Usa las flechas del teclado para navegar • ESC para cerrar
                    </div>
                </div>
            )}

            {/* CSS personalizado para animaciones */}
            <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}</style>
        </section>
    );
};

export default Galeria;