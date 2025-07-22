import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQsSection = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            pregunta: "¿Qué incluye el precio de la expedición?",
            respuesta: "Nuestros precios incluyen guías profesionales certificados, permisos de ingreso a parques nacionales, equipo técnico grupal (cuerdas, anclajes), alimentación durante la expedición, transporte desde el punto de encuentro hasta el campamento base, y seguro de accidentes. No incluye equipo personal (ropa, calzado, mochila), gastos personales en ciudades, ni vuelos hasta el punto de encuentro."
        },
        {
            id: 2,
            pregunta: "¿Qué nivel de experiencia necesito para participar?",
            respuesta: "Cada expedición tiene requisitos específicos. Para montañas como Champaquí recomendamos experiencia básica en trekking, mientras que para Aconcagua necesitás experiencia previa en alta montaña y excelente estado físico. Todas nuestras expediciones incluyen una charla técnica previa donde evaluamos tu preparación y te damos consejos específicos para tu nivel."
        },
        {
            id: 3,
            pregunta: "¿Qué sucede si el clima no permite realizar la expedición?",
            respuesta: "La seguridad es nuestra prioridad. Si las condiciones climáticas son adversas, nuestros guías pueden modificar el itinerario, postergar días de cumbre, o en casos extremos, suspender la expedición. Por eso recomendamos siempre tener días extra en tu agenda. En caso de suspensión por fuerza mayor, ofrecemos reubicación en futuras expediciones o reembolso del 70% del costo."
        },
        {
            id: 4,
            pregunta: "¿Cómo debo prepararme físicamente?",
            respuesta: "La preparación física debe comenzar al menos 8 semanas antes. Recomendamos entrenamiento cardiovascular 4-5 veces por semana (correr, bicicleta, natación), fortalecimiento de piernas y core, y especialmente caminatas largas con mochila pesada los fines de semana. Para expediciones de alta montaña, incluir entrenamiento en escaleras o cerros locales para simular desniveles."
        },
        {
            id: 5,
            pregunta: "¿Qué equipamiento personal debo llevar?",
            respuesta: "Enviamos una lista detallada de equipamiento 30 días antes de la expedición. Lo básico incluye: mochila de trekking, botas de montaña, ropa técnica por capas, saco de dormir según la época, bastones, gafas de sol, protector solar, y botiquín personal. Para expediciones técnicas se requiere casco, arnés y equipo específico. Ofrecemos servicio de alquiler de equipamiento técnico."
        },
        {
            id: 6,
            pregunta: "¿Hay límites de edad para participar?",
            respuesta: "Para expediciones de iniciación (Champaquí, cerros locales) aceptamos participantes desde 14 años con autorización parental. Para alta montaña como Aconcagua, la edad mínima es 18 años. No hay límite máximo de edad, pero evaluamos caso por caso la condición física y experiencia. Participantes mayores de 65 años deben presentar apto médico específico para actividades de montaña."
        }
    ];

    const toggleAccordion = (id: number) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <section className="py-16 bg-gray-50" id='faqs'>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2">Preguntas Frecuentes</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Resolvemos las dudas más comunes sobre nuestras expediciones y servicios
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
                            >
                                <button
                                    onClick={() => toggleAccordion(faq.id)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-amber-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                                >
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <HelpCircle size={16} className="text-amber-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                            {faq.pregunta}
                                        </h3>
                                    </div>
                                    
                                    <div className="flex-shrink-0 ml-4">
                                        {openAccordion === faq.id ? (
                                            <ChevronUp 
                                                size={20} 
                                                className="text-amber-600 transform transition-transform duration-200" 
                                            />
                                        ) : (
                                            <ChevronDown 
                                                size={20} 
                                                className="text-gray-400 transform transition-transform duration-200" 
                                            />
                                        )}
                                    </div>
                                </button>

                                <div className={`
                                    transition-all duration-300 ease-in-out overflow-hidden
                                    ${openAccordion === faq.id 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                    }
                                `}>
                                    <div className="px-6 pb-5">
                                        <div className="pl-12">
                                            <div className="w-full h-px bg-amber-200 mb-4"></div>
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
                    <div className="text-center mt-12 bg-white rounded-xl shadow-md border border-amber-200 p-8">
                        <div className="max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HelpCircle size={24} className="text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                ¿Tenés otra consulta?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Nuestro equipo está listo para resolver todas tus dudas y ayudarte a planificar tu próxima aventura
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
                                    Contactanos por WhatsApp
                                </button>
                                <button className="bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
                                    Envianos un Email
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