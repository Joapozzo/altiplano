import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Clock, Map, Users } from 'lucide-react';
import AnimatedButton from './ui/Button';
import { useRouter } from 'next/navigation';

const EstadisticaCard = ({ icono, numero, descripcion, index, isVisible }) => {
    const [displayNumber, setDisplayNumber] = useState(0);

    // Extraer el número del string (ej: "10+" -> 10, "3k+" -> 3000)
    const targetNumber = useMemo(() => {
        const numStr = numero.replace(/[^\d]/g, '');
        const num = parseInt(numStr);
        if (numero.includes('k')) return num * 1000;
        return num;
    }, [numero]);

    // Formatear el número para mostrar
    const formatNumber = (num) => {
        if (targetNumber >= 1000) {
            return Math.floor(num / 1000) + 'k+';
        }
        return Math.floor(num) + '+';
    };

    useEffect(() => {
        if (!isVisible) return;

        const timer = setTimeout(() => {
            const duration = 2000; // 2 segundos de animación
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function para efecto más suave
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentNumber = targetNumber * easeOutQuart;

                setDisplayNumber(currentNumber);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }, index * 150 + 300); // Delay inicial + delay por index

        return () => clearTimeout(timer);
    }, [isVisible, targetNumber, index]);

    return (
        <div
            className={`bg-gray-50 p-6 rounded-xl text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {React.createElement(icono, { size: 32 })}
            </div>
            <div className="text-3xl font-bold text-amber-600 mb-1">
                {isVisible ? formatNumber(displayNumber) : '0+'}
            </div>
            <p className="text-gray-600">{descripcion}</p>
        </div>
    );
};

const ImagenEquipo = ({ isVisible }) => {
    return (
        <div className="lg:col-span-5 relative">
            <div
                className={`absolute -top-6 -left-6 w-24 h-24 bg-amber-100 rounded-lg -z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                style={{ transitionDelay: '200ms' }}
            ></div>
            <div
                className={`absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-lg -z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                style={{ transitionDelay: '400ms' }}
            ></div>
            <div
                className={`relative overflow-hidden rounded-xl shadow-xl h-96 md:h-[500px] transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'
                    }`}
                style={{ transitionDelay: '300ms' }}
            >
                <Image
                    src="/imgs/champaqui.jpg"
                    alt="Equipo CumbreAndina"
                    fill
                    className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-8">
                    <div className="flex justify-between items-end">
                        <div>
                            <h4 className="text-white text-xl font-bold">Equipo Altiplano</h4>
                            <p className="text-white/80 text-sm">Guías certificados y apasionados</p>
                        </div>
                        <div className="flex space-x-2">
                            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition">
                                <Instagram size={20} className="text-white" />
                            </a>
                            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition">
                                <Facebook size={20} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContenidoPrincipal = ({ isVisible }) => {
    const router = useRouter();

    const estadisticas = [
        { icono: Clock, numero: "10+", descripcion: "Años de experiencia" },
        { icono: Map, numero: "50+", descripcion: "Destinos explorados" },
        { icono: Users, numero: "3k+", descripcion: "Aventureros guiados" }
    ];

    const goToTeamPage = () => { router.push('/nosotros'); }

    return (
        <div className="lg:col-span-7 lg:pl-8">
            <div
                className={`bg-white p-8 rounded-xl shadow-md transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'
                    }`}
                style={{ transitionDelay: '400ms' }}
            >
                <h3
                    className={`text-3xl font-bold mb-6 text-gray-800 transition-all duration-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    style={{ transitionDelay: '600ms' }}
                >
                    Altiplano Experience
                </h3>

                <div
                    className={`mb-8 border-l-4 border-amber-500 pl-6 py-2 bg-amber-50 rounded-r-lg transition-all duration-800 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                    style={{ transitionDelay: '700ms' }}
                >
                    <p className="text-amber-800 italic">
                        "Nos gusta más decir –y creer– que nos dedicamos a compartir aventuras, experiencias, conocimiento y sueños."
                    </p>
                </div>

                <p
                    className={`text-gray-600 mb-6 transition-all duration-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    style={{ transitionDelay: '800ms' }}
                >
                    Decir que organizamos expediciones personalizadas de escalada y trekking tal vez sería un concepto demasiado básico sobre nuestros servicios.
                </p>

                <p
                    className={`text-gray-600 mb-8 transition-all duration-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    style={{ transitionDelay: '900ms' }}
                >
                    Te llevamos con el equipo necesario a vivir la vida fuera de los límites de tu rutina, de la manera más segura para pasarla bien y encargándonos de todo el resto por vos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {estadisticas.map((estadistica, index) => (
                        <EstadisticaCard
                            key={index}
                            icono={estadistica.icono}
                            numero={estadistica.numero}
                            descripcion={estadistica.descripcion}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                <AnimatedButton
                    className={`flex items-center gap-2 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    variant='primary'
                    onClick={goToTeamPage}
                >
                    Conocer al Equipo
                </AnimatedButton>
            </div>
        </div>
    );
};

const QuienesSomos = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);

    const headerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === headerRef.current) {
                            setIsHeaderVisible(true);
                        }
                        if (entry.target === contentRef.current) {
                            setIsContentVisible(true);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        if (contentRef.current) observer.observe(contentRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="quienes-somos" className="py-20">
            <div className="container mx-auto px-4">
                <div
                    ref={headerRef}
                    className="text-center mb-16"
                >
                    <div
                        className={`inline-block bg-amber-100 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 mb-4 transition-all duration-800 transform ${isHeaderVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
                            }`}
                    >
                        NUESTRO EQUIPO
                    </div>
                    <h2
                        className={`text-4xl font-bold mb-4 transition-all duration-800 transform ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        Quiénes somos
                    </h2>
                    <div
                        className={`w-24 h-1 bg-amber-500 mx-auto my-4 transition-all duration-800 transform origin-center ${isHeaderVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                            }`}
                        style={{ transitionDelay: '400ms' }}
                    ></div>
                    <p
                        className={`text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-800 transform ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        Un equipo apasionado por la montaña y el turismo de aventura
                    </p>
                </div>

                <div
                    ref={contentRef}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                    <ImagenEquipo isVisible={isContentVisible} />
                    <ContenidoPrincipal isVisible={isContentVisible} />
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;