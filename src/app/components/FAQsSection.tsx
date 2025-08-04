import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Mountain, User, Award } from 'lucide-react';

const FAQsSection = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('principiantes');

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
            },
            amber: {
                bg: "bg-amber-100",
                text: "text-amber-600",
                border: "border-amber-200",
                hover: "hover:bg-amber-50",
                button: "bg-amber-600 hover:bg-amber-700",
                accent: "focus:ring-amber-500",
            },
            orange: {
                bg: "bg-orange-100",
                text: "text-orange-600",
                border: "border-orange-200",
                hover: "hover:bg-orange-50",
                button: "bg-orange-600 hover:bg-orange-700",
                accent: "focus:ring-orange-500",
            },
        };
        return colorMap[color] || colorMap.amber;
    };

    const currentCategory = categories[activeCategory];
    const colors = getColorClasses(currentCategory.color);

    return (
        <section className="py-16 bg-gray-50" id="faqs">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2">Preguntas Frecuentes</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Organizamos las respuestas según tu nivel de experiencia en montaña
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                        {Object.entries(categories).map(([key, category]) => {
                            const Icon = category.icon;
                            const isActive = activeCategory === key;
                            const tabColors = getColorClasses(category.color);

                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`
                                        flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-200 
                                        border-2 min-w-[200px] justify-center
                                        ${isActive
                                            ? `${tabColors.button} text-white border-transparent shadow-lg`
                                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-md'
                                        }
                                    `}
                                >
                                    <Icon size={20} />
                                    <span>{category.title}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Category Description */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {currentCategory.title}
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {currentCategory.subtitle}
                        </p>
                    </div>
                </div>

                {/* FAQs */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {currentCategory.faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`bg-white rounded-xl shadow-md border ${colors.border} overflow-hidden transition-all duration-300 hover:shadow-lg`}
                            >
                                <button
                                    onClick={() => toggleAccordion(faq.id)}
                                    className={`w-full px-6 py-5 text-left flex items-center justify-between ${colors.hover} transition-colors duration-200 focus:outline-none focus:ring-2 ${colors.accent} focus:ring-opacity-50`}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                                            <HelpCircle size={16} className={colors.text} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                            {faq.pregunta}
                                        </h3>
                                    </div>

                                    <div className="flex-shrink-0 ml-4">
                                        {openAccordion === faq.id ? (
                                            <ChevronUp
                                                size={20}
                                                className={`${colors.text} transform transition-transform duration-200`}
                                            />
                                        ) : (
                                            <ChevronDown
                                                size={20}
                                                className="text-gray-400 transform transition-transform duration-200"
                                            />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`
                                        transition-all duration-300 ease-in-out overflow-hidden
                                        ${openAccordion === faq.id
                                            ? "max-h-96 opacity-100"
                                            : "max-h-0 opacity-0"
                                        }
                                    `}
                                >
                                    <div className="px-6 pb-5">
                                        <div className="pl-12">
                                            <div className={`w-full h-px ${colors.accent} opacity-30 mb-4`}></div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.respuesta}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className={`text-center mt-12 bg-white rounded-xl shadow-md border ${colors.border} p-8`}>
                        <div className="max-w-2xl mx-auto">
                            <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <HelpCircle size={24} className={colors.text} />
                            </div>
                            <h3 className="text-xl font-medium text-gray-800 mb-4">
                                Si tu pregunta no está en la lista, contactanos
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className={`${colors.button} text-white px-6 py-3 rounded-lg transition-colors duration-200 font-bold w-full sm:w-auto`}>
                                    ¿Tenés otra duda?
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQsSection;