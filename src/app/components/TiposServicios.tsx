import React, { useEffect, useRef, useState } from 'react';
import { Shield, Camera, UserCheck } from 'lucide-react';

const BeneficiosIncluidos = () => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const beneficios = [
        {
            id: 1,
            titulo: "Asistencia personalizada",
            subtitulo: "Antes del viaje",
            descripcion: "Te ayudamos a diseñar tu experiencia ideal, desde la elección del destino hasta el equipo que vas a llevar.",
            detalles: [
                "Entrevista personal para ajustar la propuesta a tu nivel y preferencias",
                "Asesoramiento pre-viaje sobre traslados, equipo y alquileres",
                "Seguimiento personal para resolver dudas y ayudarte a armar tu equipaje"
            ],
            icono: UserCheck
        },
        {
            id: 2,
            titulo: "Acompañamiento experto",
            subtitulo: "Durante el viaje",
            descripcion: "Desde el primer saludo hasta el regreso, estamos en cada paso de la experiencia.",
            detalles: [
                "Recepción en el punto de encuentro, traslados y despedida",
                "Charlas técnicas y briefing diario para que siempas sepas qué esperar",
                "Guía de montaña en grupos reducidos",
                "Gestión de la seguridad: planes de evacuación, seguro contra accidentes personales y comunicación satelital",
                "Gestión de la alimentación: selección, transporte y preparación de comidas adaptadas a la montaña",
                "Gestión de cargas: optimizamos el transporte de equipo y suministros según las necesidades de cada viaje y su programa"
            ],
            icono: Shield
        },
        {
            id: 3,
            titulo: "Tu experiencia con nosotros no termina aquí",
            subtitulo: "Después del viaje",
            descripcion: "Te ayudamos a capitalizar la experiencia y revivirla cuantas veces quieras.",
            detalles: [
                "Recomendaciones personalizadas para tu evolución como montañista (técnicas, destinos, entrenamientos)",
                "Book de fotos y videos de la salida, para que te lleves el recuerdo más lindo",
                "Encuesta de calidad: te ofrecemos una herramienta para reflexionar sobre tu experiencia"
            ],
            icono: Camera
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
        <section
            id="beneficios"
            className="py-16 bg-white"
            ref={sectionRef}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Panel izquierdo */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-24">
                            <div className={`
bg-[var(--color-negro)] rounded-2xl p-8 flex flex-col justify-center text-white min-h-[35vh] lg:min-h-[80vh]
            transform transition-all duration-1000 ease-out
            ${visibleItems.includes(-1) || visibleItems.length > 0
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                                }
        `}>
                                <h2 className="text-3xl md:text-5xl font-black mb-6">
                                    BENEFICIOS <span className='text-[var(--color-negro)] bg-[var(--color-naranja-200)] px-2'>INCLUÍDOS</span>
                                </h2>
                                <p className="text-white/90 leading-relaxed text-lg">
                                    Nos ocupamos de todos los detalles para que tu experiencia sea cómoda y transformadora.
                                    Sabemos lo que hacemos, más de 10 años de experiencia nos respaldan.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid de beneficios */}
                    <div className="lg:col-span-2">
                        <div className="space-y-8">
                            {beneficios.map((beneficio, index) => (
                                <div
                                    key={beneficio.id}
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
                                    {/* Header con ícono y títulos */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="bg-[var(--color-naranja-200)] rounded-full p-3 flex-shrink-0 
                                                      group-hover:scale-105 transition-transform duration-300">
                                            {React.createElement(beneficio.icono, {
                                                size: 24,
                                                className: "text-[var(--color-negro)]"
                                            })}
                                        </div>

                                        <div className="flex-1">
                                            <div className="mb-2">
                                                <span className="inline-block bg-[var(--color-amarillo)] text-[var(--color-negro)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                                    {beneficio.subtitulo}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[var(--color-negro)] mb-2 
                                                         group-hover:text-[var(--color-naranja)] transition-colors duration-300">
                                                {beneficio.titulo}
                                            </h3>
                                            <p className="text-[var(--color-negro)]/70 leading-relaxed text-sm mb-4">
                                                {beneficio.descripcion}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Lista de detalles incluidos */}
                                    <div className="pl-16">
                                        <h4 className="text-sm font-semibold text-[var(--color-naranja)] mb-3 uppercase tracking-wide">
                                            Incluye:
                                        </h4>
                                        <ul className="space-y-2">
                                            {beneficio.detalles.map((detalle, detalleIndex) => (
                                                <li
                                                    key={detalleIndex}
                                                    className={`
                                                        flex items-start text-sm text-[var(--color-negro)]/80 leading-relaxed
                                                        transform transition-all duration-300 ease-out
                                                        ${visibleItems.includes(index)
                                                            ? 'translate-x-0 opacity-100'
                                                            : 'translate-x-4 opacity-0'
                                                        }
                                                    `}
                                                    style={{
                                                        transitionDelay: `${(index * 200) + (detalleIndex * 100) + 400}ms`
                                                    }}
                                                >
                                                    {detalle}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeneficiosIncluidos;