import React from 'react';
import { Compass, Users, Award, ChevronRight } from 'lucide-react';
import CaracteristicaItem from './CaracteristicaItem';
import ExpedicionEjemplo from './ExpedicionEjemplo';

interface DisenarExpedicionProps {
    onToggleModal: any;
}

// Componente principal
const DisenarExpedicion = ({ onToggleModal } : DisenarExpedicionProps) => {
    const caracteristicas = [
        { icono: Compass, texto: "Destinos a elección" },
        { icono: Users, texto: "Grupos privados" },
        { icono: Award, texto: "Guías expertos" }
    ];

    return (
        <section id="arma-exp" className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                    <div
                        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60"
                        style={{ backgroundImage: "url('/imgs/final.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-blue-900/80"></div>

                    <div className="relative flex flex-col md:flex-row items-center z-10">
                        <div className="md:w-1/2 p-12 lg:p-16 text-white">
                            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white mb-6">
                                EXPERIENCIA PERSONALIZADA
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Diseñá tu Expedición a Medida
                            </h2>
                            <p className="text-lg mb-8 text-white/90">
                                ¿Tenés en mente un destino específico? ¿Buscás una experiencia adaptada a tu grupo o empresa?
                                Nuestro equipo puede diseñar una aventura única que se ajuste a tus expectativas, nivel de experiencia y tiempos.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                {caracteristicas.map((caracteristica, index) => (
                                    <CaracteristicaItem
                                        key={index}
                                        icono={caracteristica.icono}
                                        texto={caracteristica.texto}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={onToggleModal}
                                className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-lg transition shadow-lg text-lg font-medium inline-flex items-center group"
                            >
                                Diseñar Mi Expedición
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                                    <ChevronRight size={20} />
                                </span>
                            </button>
                        </div>

                        <div className="md:w-1/2 p-8 flex justify-center items-center">
                            <ExpedicionEjemplo />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DisenarExpedicion;