import React from 'react';
import { MessageCircle, Shield, Users, Utensils, MapPin, Backpack, HeartHandshake, Phone } from 'lucide-react';

const BeneficiosIncluidos = () => {

    const beneficios = [
        {
            id: 1,
            titulo: "Asesoramiento Previo",
            descripcion: "Te acompañamos desde el primer contacto para elegir la aventura perfecta según tu experiencia.",
            icono: MessageCircle
        },
        {
            id: 2,
            titulo: "Seguro Contra Accidentes",
            descripcion: "Cobertura completa durante toda la expedición para tu total tranquilidad.",
            icono: Shield
        },
        {
            id: 3,
            titulo: "Grupos Reducidos",
            descripcion: "Máximo 12 personas por expedición para atención personalizada y experiencia íntima.",
            icono: Users
        },
        {
            id: 4,
            titulo: "Pensión Completa",
            descripcion: "Todas las comidas incluidas con menús balanceados para actividades de montaña.",
            icono: Utensils
        },
        {
            id: 5,
            titulo: "Guías Especializados",
            descripcion: "Profesionales certificados con años de experiencia garantizando tu seguridad.",
            icono: MapPin
        },
        {
            id: 6,
            titulo: "Equipo Técnico Incluido",
            descripcion: "Todo el equipamiento especializado: carpas, cuerdas, arneses y equipo de seguridad.",
            icono: Backpack
        }
    ];

    return (
        <section id="beneficios" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    {/* Panel izquierdo */}
                    <div className="lg:col-span-1">
                        <div className="bg-[var(--color-negro)] rounded-2xl p-8 h-full flex flex-col justify-center text-white">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">
                                BENEFICIOS <span className='text-[var(--color-negro)] bg-[var(--color-naranja-200)] px-2'>INCLUÍDOS</span>
                            </h2>
                            <p className="text-white/90 leading-relaxed text-lg">
                                Nos ocupamos de todos los detalles para que tu traslado sea cómodo y confiable.
                                Sabemos lo que hacemos, más de 25 años de experiencia nos respaldan.
                            </p>
                        </div>
                    </div>

                    {/* Grid de beneficios */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {beneficios.map((beneficio, index) => (
                                <div
                                    key={beneficio.id}
                                    className="group bg-[var(--color-beige)]/20 hover:bg-[var(--color-beige)]/40 
                                             rounded-xl p-6 transition-all duration-300 hover:shadow-lg
                                             border border-[var(--color-beige)]/30 hover:border-[var(--color-amarillo)]/50"
                                >
                                    {/* Icono */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[var(--color-naranja-200)] rounded-full p-3 flex-shrink-0 
                                                      group-hover:scale-105 transition-transform duration-300">
                                            {React.createElement(beneficio.icono, {
                                                size: 24,
                                                className: "text-[var(--color-negro)]"
                                            })}
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[var(--color-negro)] mb-2 
                                                         group-hover:text-[var(--color-naranja)] transition-colors duration-300">
                                                {beneficio.titulo}
                                            </h3>
                                            <p className="text-[var(--color-negro)]/70 leading-relaxed text-sm">
                                                {beneficio.descripcion}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA inferior */}
                {/* <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-[var(--color-naranja)] to-[var(--color-naranja-200)] 
                                  rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-blanco)] mb-4">
                            ¿Listo para tu próxima aventura?
                        </h3>
                        <p className="text-[var(--color-blanco)]/90 text-lg mb-6 max-w-2xl mx-auto">
                            Todos estos beneficios están incluidos sin costo adicional en cada expedición
                        </p>
                        <button className="bg-[var(--color-blanco)] text-[var(--color-naranja)] font-bold 
                                         py-4 px-8 rounded-full text-lg hover:bg-[var(--color-amarillo)] 
                                         hover:text-[var(--color-negro)] transition-all duration-300 
                                         shadow-lg hover:shadow-xl transform hover:scale-105">
                            Consultá Nuestras Salidas
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default BeneficiosIncluidos;