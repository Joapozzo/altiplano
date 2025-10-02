"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { serviciosMock } from '../data/mockSalidas';
import AnimatedButton from './ui/Button';
import { useWhatsApp } from '../hooks/useWhatsApp';

export default function AdventureHeroEnhanced() {
    const [currentService, setCurrentService] = useState(0);
    const [currentMainPhoto, setCurrentMainPhoto] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const heroRef = useRef(null);
    const textContentRef = useRef(null);
    const serviceDestacados = useMemo(() => serviciosMock.filter(s => s.destacado), []);
    const currentServiceData = serviceDestacados[currentService];

    // Intersection Observer para detectar cuando el hero es visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Scroll listener para efectos de parallax
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (e) => {
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

    // Cálculos de parallax mejorados
    const parallaxX = windowSize.width
        ? (mousePosition.x / windowSize.width - 0.5) * 15
        : 0;
    const parallaxY = windowSize.height
        ? (mousePosition.y / windowSize.height - 0.5) * 15
        : 0;

    // Parallax basado en scroll
    const scrollParallax = scrollY * 0.4;
    const textScrollOffset = Math.min(scrollY * 0.8, 100);

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

    const handleThumbnailClick = (index) => {
        setCurrentMainPhoto(index);
    };

    const getServiceTitle = () => {
        const serviceNumber = String(currentService + 1).padStart(2, '0');
        return serviceNumber;
    };

    const getPhotoTitle = (index) => {
        const serviceName = currentServiceData.nombre.split(' ')[1] || 'Aventura';
        return `${serviceName} ${index + 1}`;
    };

    const { openWhatsApp } = useWhatsApp();

    return (
        <div
            ref={heroRef}
            className="relative w-full h-screen overflow-hidden bg-gray-900"
            style={{
                paddingLeft: 'clamp(1rem, 5vw, 5rem)',
                paddingRight: 'clamp(1rem, 5vw, 5rem)'
            }}
        >
            {/* Main Background Image with Enhanced Parallax */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
                style={{
                    backgroundImage: `url(${currentServiceData.fotos[currentMainPhoto]})`,
                    transform: `translate(${parallaxX}px, ${parallaxY - scrollParallax}px) scale(1.1)`,
                    filter: `brightness(${Math.max(0.4, 0.7 - scrollY * 0.0008)})`,
                }}
            />

            {/* Dynamic Gradient Overlay */}
            <div
                className="absolute inset-0 transition-all duration-700"
                style={{
                    background: `linear-gradient(135deg, 
                        rgba(0,0,0,${0.3 + scrollY * 0.0005}) 0%, 
                        rgba(196,68,0,${0.15 + scrollY * 0.0003}) 60%, 
                        rgba(0,0,0,${0.4 + scrollY * 0.0006}) 100%)`
                }}
            />

            {/* Main Container */}
            <div className="absolute inset-0 flex flex-col pt-10 max-w-[1400px] mx-auto">
                {/* Content Section - Responsive Layout */}
                <div className="flex-1 flex flex-col justify-center px-6 md:px-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        {/* Left Section - Enhanced Text Content */}
                        <div
                            ref={textContentRef}
                            className="flex flex-col justify-center md:pr-8"
                            style={{
                                transform: `translateY(${-textScrollOffset}px)`,
                                opacity: Math.max(0.3, 1 - scrollY * 0.002)
                            }}
                        >
                            <div
                                className={`slide-change transition-all duration-800 ${isAnimating ? "slide-exit" : "slide-active"
                                    }`}
                            >
                                {/* Subtitle with stagger animation */}
                                <p
                                    className="text-sm md:text-base mb-3 text-white/90 font-medium transform transition-all duration-1000 ease-out"
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? 'translateY(0px) translateX(0px)'
                                            : 'translateY(30px) translateX(-20px)',
                                        transitionDelay: '200ms'
                                    }}
                                >
                                    Conocé la montaña con los mejores viajes
                                </p>

                                {/* Main Title with enhanced gradient and animation */}
                                <h1
                                    className="text-5xl md:text-5xl 2xl:text-6xl font-bold mb-2 md:mb-4 leading-tight uppercase text-white transform transition-all duration-1000 ease-out"
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? 'translateY(0px) translateX(0px)'
                                            : 'translateY(30px) translateX(-20px)',
                                        transitionDelay: '400ms'
                                    }}
                                >
                                    Conectá con la montaña
                                </h1>

                                {/* Service content with enhanced animations */}
                                <div
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? 'translateY(0px) translateX(0px)'
                                            : 'translateY(25px) translateX(15px)',
                                        transition: 'all 1s ease-out',
                                        transitionDelay: '600ms'
                                    }}
                                >
                                    <p className="text-lg md:text-xl max-w-xl leading-relaxed text-orange-200 font-bold mb-2 drop-shadow-lg">
                                        {currentServiceData.nombre}
                                    </p>
                                    <p className="text-sm md:text-base mb-6 text-white/85 max-w-md leading-relaxed">
                                        {currentServiceData.desc_resumen}
                                    </p>
                                </div>

                                <AnimatedButton onClick={() => openWhatsApp('')}>
                                    COMENZÁ TU AVENTURA
                                </AnimatedButton>

                            </div>
                        </div>

                        {/* Right Section - Enhanced Images */}
                        <div
                            className="hidden md:flex flex-col items-end justify-end pb-16 relative"
                            style={{
                                transform: `translateY(${scrollY * -0.2}px)`,
                                opacity: Math.max(0.5, 1 - scrollY * 0.001)
                            }}
                        >
                            {/* Photo Title with enhanced styling */}
                            <div
                                className="mb-2"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateX(0px)' : 'translateX(30px)',
                                    transition: 'all 0.8s ease-out',
                                    transitionDelay: '1000ms'
                                }}
                            >
                                <p className="text-white/70 text-xs font-medium uppercase tracking-wider">
                                    {/* {getPhotoTitle(currentMainPhoto)} */}
                                </p>
                            </div>

                            {/* Enhanced Thumbnails */}
                            <div
                                className=""
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateX(0px)' : 'translateX(50px)',
                                    transition: 'all 1s ease-out',
                                    transitionDelay: '1200ms'
                                }}
                            >
                                <div className="flex space-x-4 items-end w-full">
                                    {currentServiceData.fotos.map((foto, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleThumbnailClick(index)}
                                            className={`w-28 h-36 md:w-32 md:h-40 rounded-xl overflow-hidden flex-shrink-0 shadow-2xl relative cursor-pointer transition-all duration-500 backdrop-blur-sm ${index === currentMainPhoto
                                                ? "ring-3 ring-orange-500 scale-105 shadow-orange-500/30"
                                                : "hover:scale-105 hover:ring-2 hover:ring-white/40 hover:shadow-white/20"
                                                }`}
                                            style={{
                                                animationDelay: `${(index + 3) * 150}ms`,
                                                transform: `translateY(${index % 2 === 0 ? -10 : 0}px)`
                                            }}
                                        >
                                            <Image
                                                src={foto}
                                                alt={`${getPhotoTitle(index)}`}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-110"
                                            />

                                            {/* Enhanced overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                            {/* Photo number with better styling */}
                                            <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium">
                                                {index + 1}
                                            </div>

                                            {/* Hover effect */}
                                            <div className="absolute inset-0 bg-orange-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Bottom Section */}
                <div
                    className="pb-6 px-6 md:px-12"
                    style={{
                        opacity: Math.max(0.3, 1 - scrollY * 0.003)
                    }}
                >
                    {/* Mobile Thumbnails - Enhanced */}
                    <div className="md:hidden mb-4">
                        <div className="mb-2">
                            <p className="text-white/60 text-xs font-medium">
                                {getPhotoTitle(currentMainPhoto)}
                            </p>
                        </div>

                        <div className="overflow-x-auto scrollbar-hide">
                            <div className="flex space-x-3 pb-2">
                                {currentServiceData.fotos.map((foto, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleThumbnailClick(index)}
                                        className={`w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-lg relative cursor-pointer transition-all duration-300 ${index === currentMainPhoto
                                            ? "ring-2 ring-orange-500 scale-105"
                                            : "hover:scale-105 hover:ring-2 hover:ring-white/40"
                                            }`}
                                    >
                                        <Image
                                            src={foto}
                                            alt={`${getPhotoTitle(index)}`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-1 py-0.5 rounded">
                                            {index + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Controls Section */}
                    <div className="relative">
                        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent hidden md:block" />
                        <div className="h-px bg-white/20 md:hidden" />

                        <div className="flex justify-between items-center pt-4 md:pt-6">
                            {/* Enhanced Slider Controls */}
                            <div className="flex space-x-3 items-center">
                                <button
                                    onClick={prevService}
                                    disabled={isAnimating}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all duration-300 focus:outline-none text-white backdrop-blur-sm hover:scale-110 disabled:opacity-50"
                                >
                                    <ArrowLeft size={18} />
                                </button>
                                <button
                                    onClick={nextService}
                                    disabled={isAnimating}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all duration-300 focus:outline-none text-white backdrop-blur-sm hover:scale-110 disabled:opacity-50"
                                >
                                    <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Enhanced Service Number */}
                            <div
                                className="text-3xl md:text-4xl font-bold text-white relative"
                                style={{
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
                                }}
                            >
                                <span className="relative z-10">{getServiceTitle()}</span>
                                <div className="absolute inset-0 text-orange-400/30 transform translate-x-1 translate-y-1">
                                    {getServiceTitle()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS personalizado para animaciones */}
            <style jsx>{`
                .slide-change {
                    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                
                .slide-exit {
                    opacity: 0;
                    transform: translateX(-30px) scale(0.95);
                }
                
                .slide-active {
                    opacity: 1;
                    transform: translateX(0px) scale(1);
                }

                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}