/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { serviciosMock } from '../data/mockSalidas';
import { X, ArrowLeft, ArrowRight, ZoomIn, Camera, Mountain } from 'lucide-react';
import AnimatedButton from './ui/Button';

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

    // Layouts más dinámicos para las fotos
    const getImageLayout = (index: number) => {
        const layouts = [
            // Primera fila: Hero grande + 2 columnas
            { class: 'col-span-2 row-span-2', height: 'h-96' }, // Grande
            { class: 'col-span-1 row-span-1', height: 'h-44' }, // Normal
            { class: 'col-span-1 row-span-1', height: 'h-44' }, // Normal

            // Segunda fila: 3 medianas + 1 alta
            { class: 'col-span-1 row-span-1', height: 'h-32' }, // Pequeña
            { class: 'col-span-2 row-span-1', height: 'h-32' }, // Ancha
            { class: 'col-span-1 row-span-2', height: 'h-72' }, // Alta

            // Tercera fila: Mix dinámico
            { class: 'col-span-1 row-span-1', height: 'h-40' }, // Normal
            { class: 'col-span-1 row-span-1', height: 'h-40' }, // Normal
            { class: 'col-span-2 row-span-1', height: 'h-48' }, // Ancha diferente

            // Cuarta fila: Variaciones
            { class: 'col-span-1 row-span-2', height: 'h-64' }, // Alta diferente
            { class: 'col-span-1 row-span-1', height: 'h-32' }, // Pequeña
            { class: 'col-span-2 row-span-1', height: 'h-32' }, // Ancha
        ];

        return layouts[index % layouts.length];
    };

    return (
        <section className="relative overflow-hidden" id="galeria">
            {/* Fondo con imagen y overlay dinámico */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/imgs/final.jpg"
                    alt="Fondo aventura"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-negro)]/80 via-[var(--color-negro)]/60 to-[var(--color-negro)]/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-naranja)]/20 via-transparent to-[var(--color-amarillo)]/20"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 py-24 px-10">

                {/* Header con diseño asimétrico */}
                <div className="container mx-auto px-4 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Lado izquierdo: Título */}
                        <div className="text-left">
                            <div className="flex items-center mb-6">
                                <div className="bg-[var(--color-naranja-200)] p-3 rounded-full mr-4">
                                    <Camera size={24} className="text-[var(--color-negro)]" />
                                </div>
                                <span className="text-[var(--color-amarillo)] font-semibold uppercase tracking-wider text-sm">
                                    Momentos Únicos
                                </span>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                                GALERÍA DE
                                <span className="block text-[var(--color-naranja-200)]">AVENTURAS</span>
                            </h2>
                        </div>

                        {/* Lado derecho: Descripción y stats */}
                        <div className="text-white">
                            <p className="text-xl leading-relaxed text-gray-200">
                                Cada expedición cuenta una historia. Cada cumbre alcanzada es un logro compartido.
                                Revive los momentos más impresionantes de nuestras aventuras.
                            </p>

                            {/* <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                    <div className="text-3xl font-bold text-[var(--color-amarillo)] mb-1">{fotos.length}</div>
                                    <div className="text-sm text-gray-300">Fotos Capturadas</div>
                                </div>
                                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                    <div className="text-3xl font-bold text-[var(--color-amarillo)] mb-1">{serviciosMock.length}</div>
                                    <div className="text-sm text-gray-300">Expediciones</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Masonry Grid Full Width */}
                <div className="w-full px-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 auto-rows-auto max-w-none">
                        {fotos.map((foto, index) => {
                            const layout = getImageLayout(index);
                            return (
                                <div
                                    key={index}
                                    className={`
                                        relative cursor-pointer group overflow-hidden
                                        ${layout.class} ${layout.height}
                                        transform transition-all duration-700 ease-out
                                        hover:scale-[1.02] hover:shadow-2xl hover:z-20
                                        ${index === 0 ? 'rounded-tl-3xl' : ''}
                                        ${index === 2 ? 'rounded-tr-3xl' : ''}
                                        ${index >= fotos.length - 3 ? 'rounded-bl-3xl' : ''}
                                        ${index === fotos.length - 1 ? 'rounded-br-3xl' : ''}
                                    `}
                                    onClick={() => openLightbox(index)}
                                >
                                    <Image
                                        src={foto.src}
                                        alt={foto.alt}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.67vw"
                                    />

                                    {/* Overlay premium con múltiples capas */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        {/* Contenido del overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            <div className="flex items-center mb-2">
                                                <Mountain size={14} className="mr-2 text-[var(--color-amarillo)]" />
                                                <p className="text-sm font-bold">{foto.servicio}</p>
                                            </div>
                                            <p className="text-xs opacity-80">Aventura #{index + 1}</p>
                                        </div>

                                        {/* Ícono de zoom mejorado */}
                                        <div className="absolute top-4 right-4 bg-[var(--color-naranja)]/80 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200 hover:bg-[var(--color-amarillo)]">
                                            <ZoomIn size={16} className="text-white" />
                                        </div>

                                        {/* Badge del servicio */}
                                        <div className="absolute top-4 left-4 bg-[var(--color-negro)]/60 backdrop-blur-sm px-3 py-1 rounded-full transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                            <span className="text-xs font-semibold text-[var(--color-amarillo)]">
                                                {foto.servicio.split(' ').slice(-1)[0]}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Efecto de brillo más sutil */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out opacity-0 group-hover:opacity-100"></div>

                                    {/* Border glow effect */}
                                    <div className="absolute inset-0 rounded-inherit border-2 border-transparent group-hover:border-[var(--color-amarillo)]/50 transition-all duration-500"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Call to action inferior */}
                <div className="container mx-auto px-4 mt-16">
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-[var(--color-naranja)] to-[var(--color-naranja-200)] rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                ¿Querés ser parte de la próxima aventura?
                            </h3>
                            <p className="text-white/90 mb-6">
                                Cada foto cuenta una historia. Tu historia está esperando ser escrita.
                            </p>
                            <AnimatedButton variant='warning' className='flex items-center mx-auto'>
                                Reservar Mi Expedición
                            </AnimatedButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox mantiene el mismo diseño anterior */}
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
                        <div className="flex justify-center space-x-2 overflow-x-auto">
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