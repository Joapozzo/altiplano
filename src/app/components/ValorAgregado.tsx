'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Leaf, BookOpen, Recycle, ChevronRight } from 'lucide-react';

const ValorAgregado = () => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const valores = [
        {
            id: 1,
            icono: Leaf,
            titulo: "Conexión con la Naturaleza",
            descripcion: "Creamos experiencias que van más allá del deporte, fomentando un vínculo profundo con el entorno natural y promoviendo el respeto por los paisajes que visitamos."
        },
        {
            id: 2,
            icono: BookOpen,
            titulo: "Educación en Montaña",
            descripcion: "Compartimos conocimientos técnicos y ambientales para que cada expedición sea también una oportunidad de aprendizaje y crecimiento personal."
        },
        {
            id: 3,
            icono: Recycle,
            titulo: "Sustentabilidad",
            descripcion: "Todas nuestras salidas siguen protocolos de mínimo impacto ambiental y contribuyen activamente a la conservación de los espacios naturales que visitamos."
        }
    ];

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = itemRefs.current.findIndex(ref => ref === entry.target);
                    if (index !== -1 && !visibleItems.includes(index)) {
                        setVisibleItems(prev => [...prev, index]);
                    }
                }
            });
        }, observerOptions);

        // Observar la sección principal
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Observar cada item
        itemRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, [visibleItems]);

    return (
        <section className="py-16 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Grid de valores */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 gap-6">
                            {valores.map((valor, index) => (
                                <div
                                    key={valor.id}
                                    ref={(el) => {
                                        itemRefs.current[index] = el;
                                    }}
                                    className={`
                                        group bg-[var(--color-beige)]/20 hover:bg-[var(--color-beige)]/40 
                                        rounded-xl p-6 transition-all duration-500 hover:shadow-lg
                                        border border-[var(--color-beige)]/30 hover:border-[var(--color-amarillo)]/50
                                        transform ease-out
                                        ${visibleItems.includes(index)
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-12 opacity-0'
                                        }
                                    `}
                                    style={{
                                        transitionDelay: `${index * 200}ms`
                                    }}
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Icono */}
                                        <div className={`
                                            bg-[var(--color-naranja-200)] rounded-full p-4 flex-shrink-0 
                                            group-hover:scale-105 transition-transform duration-300
                                            transform
                                            ${visibleItems.includes(index)
                                                ? 'scale-100 rotate-0'
                                                : 'scale-0 rotate-180'
                                            }
                                        `}
                                        style={{
                                            transitionDelay: `${(index * 200) + 100}ms`
                                        }}>
                                            {React.createElement(valor.icono, {
                                                size: 28,
                                                className: "text-[var(--color-negro)]"
                                            })}
                                        </div>

                                        <div className="flex-1">
                                            <h3 className={`
                                                text-xl font-bold text-[var(--color-negro)] mb-3 
                                                group-hover:text-[var(--color-naranja)] transition-colors duration-300
                                                transform
                                                ${visibleItems.includes(index)
                                                    ? 'translate-y-0 opacity-100'
                                                    : 'translate-y-4 opacity-0'
                                                }
                                            `}
                                            style={{
                                                transitionDelay: `${(index * 200) + 200}ms`
                                            }}>
                                                {valor.titulo}
                                            </h3>
                                            <p className={`
                                                text-[var(--color-negro)]/70 leading-relaxed text-sm mb-4
                                                transform transition-all duration-500
                                                ${visibleItems.includes(index)
                                                    ? 'translate-y-0 opacity-100'
                                                    : 'translate-y-4 opacity-0'
                                                }
                                            `}
                                            style={{
                                                transitionDelay: `${(index * 200) + 300}ms`
                                            }}>
                                                {valor.descripcion}
                                            </p>

                                            {/* Link de acción */}
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <a
                                                    href="#"
                                                    className="text-[var(--color-naranja)] font-medium inline-flex items-center text-sm
                                                             hover:text-[var(--color-naranja-200)] transition-colors"
                                                >
                                                    Descubrir más
                                                    <ChevronRight
                                                        size={16}
                                                        className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Panel izquierdo */}
                    <div className="lg:col-span-1">
                        <div className={`
                            bg-[var(--color-negro)] rounded-2xl p-8 h-full flex flex-col justify-center text-white text-end
                            transform transition-all duration-1000 ease-out
                            ${visibleItems.length > 0
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                            }
                        `}>
                            <h2 className="text-3xl md:text-5xl font-black mb-6">
                                NUESTRO <span className='text-[var(--color-negro)] bg-[var(--color-naranja-200)] px-2'>VALOR</span>
                            </h2>
                            <p className="text-white/90 leading-relaxed text-lg">
                                Lo que nos hace diferentes y te brinda la mejor experiencia.
                                Más que aventuras, creamos <span className="text-[var(--color-naranja-200)] font-medium">transformaciones</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValorAgregado;