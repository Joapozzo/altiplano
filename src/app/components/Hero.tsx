import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function AdventureHeroEnhanced() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    const slides = [
        {
            id: '01',
            title: 'CONECTÁ CON LA MONTAÑA',
            subtitle: 'Redescubrí tu camino lejos del ruido',
            description: 'Viví una aventura auténtica entre paisajes imponentes. Explorá territorios únicos, compartí con culturas locales y descubrí una versión más libre de vos mismo.',
            backgroundImage: 'imgs/final.jpg',
            thumbnails: [
                '/imgs/final.jpg',
                '/imgs/final.jpg',
                '/imgs/final.jpg',
                '/imgs/final.jpg',
            ]
        },
        {
            id: '02',
            title: 'DESCUBRÍ LO INEXPLORADO',
            subtitle: 'Explorá rincones que pocos conocen',
            description: 'Dejá atrás lo habitual y aventurate hacia destinos fuera del circuito. Nuestros guías te llevan a lugares mágicos, lejos del turismo masivo.',
            backgroundImage: 'imgs/final.jpg',
            thumbnails: [
                '/imgs/final.jpg',
                '/imgs/final.jpg',
                '/imgs/final.jpg',
                '/imgs/final.jpg',
            ]
        }
    ];

    const currentSlideData = slides[currentSlide];

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

    const parallaxX = windowSize.width
        ? (mousePosition.x / windowSize.width - 0.5) * 20
        : 0;
    const parallaxY = windowSize.height
        ? (mousePosition.y / windowSize.height - 0.5) * 20
        : 0;

    const nextSlide = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }, 300);
    };

    const prevSlide = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }, 300);
    };

    return (
        <div className="relative w-full h-screen md:h-[120vh] overflow-hidden bg-gray-900">
            {/* Main Background Image with Parallax */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
                style={{
                    backgroundImage: `url(${currentSlideData.backgroundImage})`,
                    transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.1)`,
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Main Container */}
            <div className="absolute inset-0 flex flex-col">

                {/* Content Section - Responsive Layout */}
                <div className="flex-1 flex flex-col justify-center px-6 md:px-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                        {/* Left Section - Text Content */}
                        <div className="flex flex-col justify-center md:pr-8">
                            <div className={`slide-change ${isAnimating ? "slide-exit" : "slide-active"}`}>
                                <p className="text-sm md:text-base mb-3 animate-fade-in delay-100 text-white/90">
                                    {currentSlideData.subtitle}
                                </p>
                                <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in">
                                    {currentSlideData.title}
                                </h1>
                                <p className="text-sm md:text-base max-w-xl mb-6 md:mb-8 leading-relaxed animate-fade-in delay-200 text-white/80">
                                    {currentSlideData.description}
                                </p>

                                <button className="bg-[var(--color-naranja)] hover:bg-[var(--color-naranja-200)] text-[var(--color-blanco)] font-medium py-3 px-6 rounded-full text-sm flex items-center group transition-all duration-300 animate-fade-in delay-300 w-fit">
                                    COMENZA TU AVENTURA
                                    <span className="ml-2 bg-[var(--color-negro)] text-[var(--color-naranja)] p-1 rounded-full group-hover:ml-3 transition-all duration-300">
                                        <ChevronRight size={14} />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Section - Images (Desktop Only) */}
                        <div className="hidden md:flex flex-col justify-end pb-20 relative">
                            {/* Thumbnails row */}
                            <div className="overflow-x-auto no-scrollbar px-4 mb-8">
                                <div className="flex space-x-4">
                                    {currentSlideData.thumbnails.map((thumbnail, index) => (
                                        <div
                                            key={index}
                                            className="w-28 h-36 md:w-32 md:h-40 rounded-lg overflow-hidden flex-shrink-0 shadow-lg animate-fade-in relative"
                                            style={{ animationDelay: `${(index + 3) * 100}ms` }}
                                        >
                                            <Image
                                                src={thumbnail}
                                                alt={`Adventure ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
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
                        <div className="overflow-x-auto no-scrollbar">
                            <div className="flex space-x-3 pb-2">
                                {currentSlideData.thumbnails.map((thumbnail, index) => (
                                    <div
                                        key={index}
                                        className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-lg animate-fade-in relative"
                                        style={{ animationDelay: `${(index + 3) * 100}ms` }}
                                    >
                                        <Image
                                            src={thumbnail}
                                            alt={`Adventure ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
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
                                    onClick={prevSlide}
                                    disabled={isAnimating}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors duration-300 focus:outline-none text-white"
                                >
                                    <ArrowLeft size={18} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={isAnimating}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors duration-300 focus:outline-none text-white"
                                >
                                    <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Slide Number */}
                            <div className="text-3xl md:text-4xl font-bold text-white animate-fade-in">
                                {currentSlideData.id}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}