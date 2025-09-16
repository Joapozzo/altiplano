'use client';
import React, { useState, useEffect } from 'react';
import { Mountain, Compass } from 'lucide-react';
import Image from 'next/image';

interface LoadingScreenProps {
    isLoading: boolean;
    onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [showLogo, setShowLogo] = useState(false);

    const steps = [
        "Preparando tu aventura...",
        "Verificando condiciones...",
        "Cargando destinos...",
        "¡Listo para explorar!"
    ];

    useEffect(() => {
        if (!isLoading) return;

        setProgress(0);
        setCurrentStep(0);
        setShowLogo(false);

        // Mostrar logo después de un breve delay
        const logoTimer = setTimeout(() => {
            setShowLogo(true);
        }, 300);

        // Simular progreso de carga
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        onComplete();
                    }, 500);
                    return 100;
                }
                return prev + 2.5; // Ajusta la velocidad aquí
            });
        }, 50);

        // Cambiar pasos de carga
        const stepInterval = setInterval(() => {
            setCurrentStep(prev => {
                if (prev < steps.length - 1) {
                    return prev + 1;
                }
                clearInterval(stepInterval);
                return prev;
            });
        }, 1000);

        return () => {
            clearTimeout(logoTimer);
            clearInterval(progressInterval);
            clearInterval(stepInterval);
        };
    }, [isLoading, onComplete]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-[var(--color-negro)] via-gray-800 to-black flex items-center justify-center">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-8 w-full max-w-md">
                {/* Logo animado */}
                <div className={`mb-8 transition-all duration-1000 ${showLogo ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4'}`}>
                    <div className="relative mx-auto w-32 h-32 mb-6">
                        {/* Círculo exterior giratorio */}
                        <div className="absolute inset-0 border-4 border-[var(--color-naranja)]/30 rounded-full animate-spin"></div>
                        <div className="absolute inset-2 border-4 border-[var(--color-amarillo)]/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>

                        {/* Logo central */}
                        <div className="absolute inset-4 flex items-center justify-center">
                            <Image
                                src="/logos/Logo-Reducido-Naranja.png"
                                alt="Altiplano Experience"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Logo text */}
                    <h1 className="text-3xl font-bold text-white mb-2">Altiplano</h1>
                    <p className="text-[var(--color-amarillo)] text-lg font-medium">Experience</p>
                </div>

                {/* Paso actual */}
                <div className="mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <Compass size={20} className="text-[var(--color-amarillo)] mr-2 animate-spin" style={{ animationDuration: '4s' }} />
                        <p className="text-white text-lg font-medium animate-pulse">
                            {steps[currentStep]}
                        </p>
                    </div>
                </div>

                {/* Barra de progreso */}
                <div className="mb-8">
                    <div className="bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                        <div
                            className="h-full bg-gradient-to-r from-[var(--color-naranja)] to-[var(--color-amarillo)] rounded-full transition-all duration-300 ease-out shadow-lg"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Efecto de brillo */}
                            <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3 text-sm">
                        <span className="text-gray-400">0%</span>
                        <span className="text-[var(--color-amarillo)] font-bold">{Math.round(progress)}%</span>
                        <span className="text-gray-400">100%</span>
                    </div>
                </div>

                {/* Indicadores de montañas animadas */}
                <div className="flex justify-center space-x-3 mb-6">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`transition-all duration-500 ${currentStep > index
                                    ? 'text-[var(--color-amarillo)] scale-110'
                                    : currentStep === index
                                        ? 'text-[var(--color-naranja)] animate-bounce'
                                        : 'text-gray-600'
                                }`}
                        >
                            <Mountain size={20} />
                        </div>
                    ))}
                </div>

                {/* Mensaje inspiracional */}
                <div className="opacity-70">
                    <p className="text-gray-300 text-sm italic">
                        "La montaña te espera..."
                    </p>
                </div>
            </div>

            {/* Partículas flotantes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[var(--color-amarillo)]/30 rounded-full animate-ping"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default LoadingScreen;