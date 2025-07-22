import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { serviciosMock } from '../data/mockSalidas';

export default function AdventureHeroEnhanced() {
    const [currentService, setCurrentService] = useState(0);
    const [currentMainPhoto, setCurrentMainPhoto] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    const currentServiceData = serviciosMock[currentService];

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Reset main photo when service changes
    useEffect(() => {
        setCurrentMainPhoto(0);
    }, [currentService]);

    const parallaxX = windowSize.width
        ? (mousePosition.x / windowSize.width - 0.5) * 20
        : 0;
    const parallaxY = windowSize.height
        ? (mousePosition.y / windowSize.height - 0.5) * 20
        : 0;

    const nextService = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentService((prev) => (prev === serviciosMock.length - 1 ? 0 : prev + 1));
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }, 300);
    };

    const prevService = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentService((prev) => (prev === 0 ? serviciosMock.length - 1 : prev - 1));
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }, 300);
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentMainPhoto(index);
    };

    const getServiceTitle = () => {
        const serviceNumber = String(currentService + 1).padStart(2, '0');
        return serviceNumber;
    };

    const getPhotoTitle = (index: number) => {
        const serviceName = currentServiceData.nombre.split(' ')[1] || 'Aventura';
        return `${serviceName} ${index + 1}`;
    };

    return (
        <div className="relative w-full h-screen md:h-[120vh] overflow-hidden bg-gray-900 px-20">
            {/* Main Background Image with Parallax */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
                style={{
                    backgroundImage: `url(${currentServiceData.fotos[currentMainPhoto]})`,
                    transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.1)`,
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Main Container */}
            <div className="absolute inset-0 flex flex-col">
                {/* Content Section - Responsive Layout */}
                <div className="flex-1 flex flex-col justify-center px-6 md:px-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        {/* Left Section - Text Content */}
                        <div className="flex flex-col justify-center md:pr-8">
                            <div
                                className={`slide-change ${isAnimating ? "slide-exit" : "slide-active"
                                    }`}
                            >
                                <p className="text-sm md:text-base mb-3 animate-fade-in delay-100 text-white/90">
                                    Conocé la montaña con los mejores viajes
                                </p>
                                <h1 className="text-5xl md:text-7xl font-bold mb-2 md:mb-4 leading-tight animate-fade-in uppercase">
                                    Conectá con la montaña
                                </h1>
                                <div>
                                    <p className="text-md md:text-xl max-w-xl leading-relaxed animate-fade-in delay-200 text-white/80 font-bold bg-">
                                        {currentServiceData.nombre}
                                    </p>
                                    <p className="text-sm md:text-base mb-3 animate-fade-in delay-100 text-white/90 max-w-md">
                                        {/* {currentServiceData.duracion_dias} días • {currentServiceData.altura_maxima}m */}
                                        {currentServiceData.desc}
                                    </p>
                                </div>
                                <button className="bg-[var(--color-naranja)] hover:bg-[var(--color-naranja-200)] text-[var(--color-blanco)] font-medium py-3 px-6 rounded-full text-sm flex items-center group transition-all duration-300 animate-fade-in delay-300 w-fit justify-center">
                                    COMENZÁ TU AVENTURA
                                    <span className="ml-2 bg-[var(--color-negro)] text-[var(--color-naranja)] p-1 rounded-full group-hover:ml-3 transition-all duration-300">
                                        <ChevronRight size={14} />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Section - Images (Desktop Only) */}
                        <div className="hidden md:flex flex-col items-end justify-end pb-20 relative">
                            {/* Photo Title - Secondary */}
                            <div className="mb-2">
                                <p className="text-white/60 text-xs font-medium">
                                    {getPhotoTitle(currentMainPhoto)}
                                </p>
                            </div>

                            {/* Thumbnails row */}
                            <div className="">
                                <div className="flex space-x-4 items-end w-full">
                                    {currentServiceData.fotos.map((foto, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleThumbnailClick(index)}
                                            className={`w-28 h-36 md:w-32 md:h-40 rounded-lg overflow-hidden flex-shrink-0 shadow-lg animate-fade-in relative cursor-pointer transition-all duration-300 ${index === currentMainPhoto
                                                    ? "ring-2 ring-[var(--color-naranja)] scale-105"
                                                    : "hover:scale-105 hover:ring-2 hover:ring-white/40"
                                                }`}
                                            style={{ animationDelay: `${(index + 3) * 100}ms` }}
                                        >
                                            <Image
                                                src={foto}
                                                alt={`${getPhotoTitle(index)}`}
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Photo number overlay */}
                                            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                                {index + 1}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Controls and Thumbnails */}
                <div className="pb-8 px-6 md:px-12">
                    {/* Mobile Thumbnails */}
                    <div className="md:hidden mb-6">
                        {/* Photo Title - Secondary */}
                        <div className="mb-2">
                            <p className="text-white/60 text-xs font-medium">
                                {getPhotoTitle(currentMainPhoto)}
                            </p>
                        </div>

                        <div className="overflow-x-auto no-scrollbar">
                            <div className="flex space-x-3 pb-2">
                                {currentServiceData.fotos.map((foto, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleThumbnailClick(index)}
                                        className={`w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-lg animate-fade-in relative cursor-pointer transition-all duration-300 ${index === currentMainPhoto
                                                ? "ring-2 ring-white/60 scale-105"
                                                : "hover:scale-105 hover:ring-2 hover:ring-white/40"
                                            }`}
                                        style={{ animationDelay: `${(index + 3) * 100}ms` }}
                                    >
                                        <Image
                                            src={foto}
                                            alt={`${getPhotoTitle(index)}`}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Photo number overlay */}
                                        <div className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-1 py-0.5 rounded">
                                            {index + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Controls Section */}
                    <div className="relative">
                        {/* Horizontal Line */}
                        <div className="absolute left-0 right-0 h-px bg-white/20 hidden md:block"></div>
                        <div className="h-px bg-white/20 md:hidden"></div>

                        {/* Controls and Page Number Container */}
                        <div className="flex justify-between items-center pt-6 md:pt-8">
                            {/* Slider Controls */}
                            <div className="flex space-x-3 items-center">
                                <button
                                    onClick={prevService}
                                    disabled={isAnimating}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors duration-300 focus:outline-none text-white"
                                >
                                    <ArrowLeft size={18} />
                                </button>
                                <button
                                    onClick={nextService}
                                    disabled={isAnimating}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors duration-300 focus:outline-none text-white"
                                >
                                    <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Service Number */}
                            <div className="text-3xl md:text-4xl font-bold text-white animate-fade-in">
                                {getServiceTitle()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}