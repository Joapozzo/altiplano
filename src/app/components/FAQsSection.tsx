import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Mountain, User, Award } from 'lucide-react';
import AnimatedButton from './ui/Button';

const FAQsSection = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('principiantes');
    const [isVisible, setIsVisible] = useState(false);
    const [visibleFAQs, setVisibleFAQs] = useState<Set<number>>(new Set());

    const sectionRef = useRef<HTMLElement>(null);
    const faqRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    const categories = {
        principiantes: {
            title: "Principiantes",
            subtitle: "Si es tu primera vez en la montaña o tenés poca experiencia",
            icon: User,
            color: "yellow",
            faqs: [
                {
                    id: 1,
                    pregunta: "¿Necesito tener experiencia previa en montaña para sumarme a una salida?",
                    respuesta: "No, muchas de nuestras experiencias están pensadas para personas que se están iniciando. Lo importante es elegir una salida adecuada a tu nivel, y para eso te asesoramos de forma personalizada antes de que te inscribas."
                },
                {
                    id: 2,
                    pregunta: "¿Cómo saber si esta experiencia es adecuada para mí?",
                    respuesta: "Te ofrecemos una charla de orientación gratuita donde conversamos sobre tu experiencia, tu estado físico y tus objetivos. Nuestra misión es ayudarte a elegir la propuesta que mejor se adapte a vos, para que disfrutes de una experiencia con seguridad y confianza."
                },
                {
                    id: 3,
                    pregunta: "¿Qué pasa si no tengo todo el equipo? ¿Me ayudan a organizar mi mochila?",
                    respuesta: "Sí, al momento de reservar te enviamos una lista detallada del equipo necesario. Te acompañamos a revisar lo que tenés, te orientamos sobre qué podés alquilar o conseguir, y te damos recomendaciones para organizarte sin estrés."
                },
                {
                    id: 4,
                    pregunta: "¿Con cuánta anticipación tengo que reservar?",
                    respuesta: "Recomendamos reservar con al menos 3 a 4 meses de anticipación. Ese tiempo te permite ajustar tu entrenamiento, conseguir el equipo necesario y planificar traslados sin apuros y a mejores precios. Trabajamos con grupos reducidos a propósito, porque creemos que una experiencia transformadora requiere atención personalizada."
                },
                {
                    id: 5,
                    pregunta: "¿Cuál es la diferencia entre trekking y montañismo?",
                    respuesta: "El trekking es una caminata en la naturaleza, generalmente por senderos marcados, sin necesidad de equipo técnico. El montañismo implica mayor exigencia física y técnica, y suele desarrollarse en terrenos más agrestes o en altura, incluyendo el uso de equipo específico como crampones, casco o cuerda."
                }
            ]
        },
        intermedio: {
            title: "Nivel Intermedio",
            subtitle: "Si ya hiciste alguna experiencia de trekking o montaña y querés avanzar",
            icon: Mountain,
            color: "amber",
            faqs: [
                {
                    id: 6,
                    pregunta: "¿Qué pasa si el clima cambia durante la expedición?",
                    respuesta: "En montaña, el clima puede ser variable y el 'mal tiempo' forma parte de la experiencia. No solemos suspender la actividad salvo en situaciones de fuerza mayor que pongan en riesgo la seguridad. Nuestro equipo guía monitorea constantemente el pronóstico y las condiciones reales para ajustar el plan si es necesario."
                },
                {
                    id: 7,
                    pregunta: "¿Qué pasa si no puedo continuar la caminata durante la expedición?",
                    respuesta: "Si no podés o no querés continuar el ascenso, organizamos el descenso para acompañarte y garantizar tu seguridad. Si el motivo es un problema médico, activamos el protocolo de evacuación hasta el centro de salud más cercano. Nuestros guías están capacitados para manejar estas situaciones con cuidado y acompañamiento."
                },
                {
                    id: 8,
                    pregunta: "¿Hacen salidas privadas o a medida?",
                    respuesta: "Sí, diseñamos propuestas personalizadas para personas solas, parejas, grupos de amigos o empresas. Se pueden ajustar la dificultad, los días, el nivel de servicio y los objetivos de la salida. Contactanos y armamos juntos tu experiencia."
                },
                {
                    id: 9,
                    pregunta: "¿Qué pasa si no llego a la cumbre? ¿Cómo manejan la dinámica en expediciones de alta montaña?",
                    respuesta: "En montaña, siempre hay variables que pueden impedir llegar a la cumbre: clima, fatiga, malestar físico o decisiones del equipo guía para cuidar la seguridad. En Altiplano trabajamos con un ratio de 1 guía cada 2 personas en alta montaña, lo que nos permite acompañar de forma personalizada y adaptarnos si alguien no puede continuar."
                },
                {
                    id: 10,
                    pregunta: "¿Hay opciones para personas vegetarianas o con restricciones alimenticias?",
                    respuesta: "Sí, ofrecemos menús adaptados. Al momento de reservar, podés informarnos tus preferencias o restricciones (vegetariana, vegana, sin TACC, etc.) y adaptamos la propuesta dentro de lo posible según el tipo de logística de la salida."
                }
            ]
        },
        avanzado: {
            title: "Avanzado",
            subtitle: "Si ya tenés experiencia en montaña y buscás información técnica",
            icon: Award,
            color: "orange",
            faqs: [
                {
                    id: 11,
                    pregunta: "¿Qué es el MAM (Mal Agudo de Montaña) y cómo prevenirlo?",
                    respuesta: "El Mal Agudo de Montaña es una patología asociada a la exposición a gran altitud. Se previene con estrategias de aclimatación: dosificación de la actividad, hidratación constante, descanso adecuado y alimentación apropiada. Mantenemos seguimiento permanente del estado de cada persona y tomamos decisiones a tiempo para cuidar la salud del grupo."
                },
                {
                    id: 12,
                    pregunta: "¿Puedo hacer alta montaña con botas simples rígidas? ¿Qué calzado recomiendan?",
                    respuesta: "Sí, en algunos casos es posible usar botas simples rígidas, pero depende del tipo de salida, la época del año y tu experiencia previa. Siempre evaluamos cada caso para asesorarte la mejor opción según las condiciones y tu nivel."
                },
                {
                    id: 13,
                    pregunta: "¿Puedo gestionar la alimentación por mi cuenta durante la expedición?",
                    respuesta: "En general, recomendamos que la alimentación sea gestionada por nuestro equipo, ya que está planificada cuidadosamente para cubrir todas las necesidades energéticas y logísticas. Si tenés experiencia en este tipo de gestión y sabés cómo planificar y transportar correctamente tu comida, podemos evaluarlo juntos."
                },
                {
                    id: 14,
                    pregunta: "Tengo vehículo propio, ¿es posible descontar el valor del traslado?",
                    respuesta: "En general, no recomendamos utilizar vehículo propio para las experiencias, especialmente en expediciones de alta montaña. Se subestima el estado del camino, las habilidades requeridas para manejo off road, y las condiciones climáticas. Llegar por cuenta propia implica un esfuerzo extra que puede afectar tu rendimiento en la actividad."
                }
            ]
        }
    };

    // Intersection Observer para animaciones de scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === sectionRef.current) {
                            setIsVisible(true);
                        } else {
                            // FAQ individual
                            const faqId = parseInt(entry.target.getAttribute('data-faq-id') || '0');
                            if (faqId) {
                                setVisibleFAQs(prev => new Set([...prev, faqId]));
                            }
                        }
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Observar FAQs individuales
        Object.values(faqRefs.current).forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [activeCategory]);

    // Reset visible FAQs when category changes
    useEffect(() => {
        setVisibleFAQs(new Set());
        setOpenAccordion(null);
    }, [activeCategory]);

    const toggleAccordion = (id: number) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const getColorClasses = (color: string) => {
        const colorMap = {
            yellow: {
                bg: "bg-yellow-100",
                text: "text-yellow-600",
                border: "border-yellow-200",
                hover: "hover:bg-yellow-50",
                button: "bg-yellow-600 hover:bg-yellow-700",
                accent: "focus:ring-yellow-500",
                gradient: "from-yellow-400/20 to-yellow-600/20",
            },
            amber: {
                bg: "bg-amber-100",
                text: "text-amber-600",
                border: "border-amber-200",
                hover: "hover:bg-amber-50",
                button: "bg-amber-600 hover:bg-amber-700",
                accent: "focus:ring-amber-500",
                gradient: "from-amber-400/20 to-amber-600/20",
            },
            orange: {
                bg: "bg-orange-100",
                text: "text-orange-600",
                border: "border-orange-200",
                hover: "hover:bg-orange-50",
                button: "bg-orange-600 hover:bg-orange-700",
                accent: "focus:ring-orange-500",
                gradient: "from-orange-400/20 to-orange-600/20",
            },
        };
        return colorMap[color] || colorMap.amber;
    };

    const currentCategory = categories[activeCategory];
    const colors = getColorClasses(currentCategory.color);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
            id="faqs"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-20 right-20 w-64 h-64 bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl opacity-30 animate-pulse`}></div>
                <div className={`absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr ${colors.gradient} rounded-full blur-3xl opacity-20 animate-pulse`} style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Header con animación de entrada */}
                <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <div className="flex items-center justify-center mb-4">
                        <h2 className="text-4xl font-bold">Preguntas Frecuentes</h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto my-4 rounded-full"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Organizamos las respuestas según tu nivel de experiencia en montaña
                    </p>
                </div>

                {/* Category Tabs con animación mejorada */}
                <div className={`max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                        {Object.entries(categories).map(([key, category], index) => {
                            const Icon = category.icon;
                            const isActive = activeCategory === key;
                            const tabColors = getColorClasses(category.color);

                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`
                                        flex items-center gap-3 px-6 py-4 rounded-xl font-semibold 
                                        transition-all duration-500 transform hover:scale-105
                                        border-2 min-w-[200px] justify-center group
                                        ${isActive
                                            ? `${tabColors.button} text-white border-transparent shadow-xl scale-105`
                                            : 'bg-white/80 backdrop-blur-sm text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-lg'
                                        }
                                    `}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                        animation: isVisible ? `slideInUp 0.8s ease-out ${index * 100}ms both` : undefined
                                    }}
                                >
                                    <Icon size={20} className={isActive ? 'animate-bounce' : 'group-hover:scale-110 transition-transform'} />
                                    <span>{category.title}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Category Description con efecto de escritura */}
                    <div className={`text-center mb-8 transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {currentCategory.title}
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {currentCategory.subtitle}
                        </p>
                    </div>
                </div>

                {/* FAQs con animaciones escalonadas */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {currentCategory.faqs.map((faq, index) => {
                            const isOpen = openAccordion === faq.id;
                            const isVisible = visibleFAQs.has(faq.id);

                            return (
                                <div
                                    key={faq.id}
                                    ref={el => { faqRefs.current[faq.id] = el; }}
                                    data-faq-id={faq.id}
                                    className={`
                                        bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border ${colors.border} 
                                        overflow-hidden transition-all duration-700 transform
                                        hover:shadow-xl hover:scale-[1.02] group
                                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                                    `}
                                    style={{
                                        transitionDelay: `${index * 150}ms`,
                                    }}
                                >
                                    <button
                                        onClick={() => toggleAccordion(faq.id)}
                                        className={`w-full px-6 py-5 text-left flex items-center justify-between ${colors.hover} transition-all duration-300 focus:outline-none focus:ring-2 ${colors.accent} focus:ring-opacity-50 group-hover:bg-gray-50/50`}
                                    >
                                        <div className="flex items-center">
                                            <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${isOpen ? 'rotate-12 scale-110' : ''}`}>
                                                <HelpCircle size={18} className={`${colors.text} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                                {faq.pregunta}
                                            </h3>
                                        </div>

                                        <div className="flex-shrink-0 ml-4">
                                            <div className={`transform transition-all duration-500 ${isOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                                                {isOpen ? (
                                                    <ChevronUp
                                                        size={20}
                                                        className={`${colors.text}`}
                                                    />
                                                ) : (
                                                    <ChevronDown
                                                        size={20}
                                                        className="text-gray-400"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </button>

                                    <div
                                        className={`
                                            transition-all duration-500 ease-in-out overflow-hidden
                                            ${isOpen
                                                ? "max-h-96 opacity-100"
                                                : "max-h-0 opacity-0"
                                            }
                                        `}
                                    >
                                        <div className="px-6 pb-5">
                                            <div className="pl-14">
                                                <div className={`w-full h-px bg-gradient-to-r ${colors.gradient} mb-4 transition-all duration-500 ${isOpen ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
                                                <p className={`text-gray-600 leading-relaxed transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                                    {faq.respuesta}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Call to Action con efectos especiales */}
                    <div className={`text-center mt-12 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border ${colors.border} p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500`}>
                            {/* Background animation */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="max-w-2xl mx-auto relative z-10">
                                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                                    <HelpCircle size={24} className={`${colors.text} transition-transform duration-500 group-hover:animate-pulse`} />
                                </div>
                                <h3 className="text-xl font-medium text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                                    Si tu pregunta no está en la lista, contactanos
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <AnimatedButton className={`${colors.button} text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold w-full sm:w-auto transform hover:scale-105 hover:shadow-lg group/btn`}>
                                        <span className="group-hover/btn:animate-pulse">¿Tenés otra duda?</span>
                                    </AnimatedButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS personalizado para animaciones */}
            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        transform: translateY(30px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </section>
    );
};

export default FAQsSection;