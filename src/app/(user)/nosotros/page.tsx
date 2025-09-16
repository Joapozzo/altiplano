"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Mountain, Award, MapPin, Users, Star, ChevronRight } from 'lucide-react';
import BackButton from '@/app/components/ui/ButtonBack';
import { useWhatsApp } from '@/app/hooks/useWhatsApp';
import AnimatedButton from '@/app/components/ui/Button';

// Data de los guías
const guias = [
    {
        id: 1,
        nombre: "Paula",
        apellido: "Pozzo",
        img: "/us/pau.jpg",
        titulo: "GUÍA DE MONTAÑA Y EDUCADORA",
        especialidad: "Trekking y Educación",
        años_experiencia: 8,
        expediciones_guiadas: 150,
        origen: "Córdoba",
        formacion: "Mendoza",
        bio: "Nací en Córdoba, donde el deporte siempre fue parte de mi vida. Sin embargo, fue durante mi formación como docente de educación física cuando descubrí mi pasión por la montaña. Decidí profesionalizarme en Mendoza, donde me formé como guía de trekking y, más adelante, obtuve la titulación de guía de montaña. Acompañar a otros en su crecimiento personal y ayudarlos a descubrir sus capacidades en la naturaleza es una de mis mayores motivaciones. Mi objetivo es que cada experiencia en la montaña sea segura, transformadora y una oportunidad para conectar con uno mismo y el entorno.",
        certificaciones: [
            "Guía de Trekking Certificada",
            "Guía de Montaña Titulada",
            "Profesora de Educación Física",
            "Primeros Auxilios en Montaña"
        ],
        destinos_favoritos: [
            "Cerro Champaquí",
            "Vallecitos",
            "Quebrada del Condorito"
        ],
        filosofia: "Cada montaña es una maestra, cada sendero una lección de vida."
    },
    {
        id: 2,
        nombre: "Pablo",
        apellido: "Chanuar",
        img: "/us/pablo.JPG",
        titulo: "INSTRUCTOR Y MONTAÑISTA",
        especialidad: "Alta Montaña y Rescate",
        años_experiencia: 12,
        expediciones_guiadas: 200,
        origen: "Buenos Aires",
        formacion: "Buenos Aires y Mendoza",
        bio: "Nací en Buenos Aires, pero fue la pasión por la montaña lo que me llevó a elegir Mendoza como mi hogar y el lugar para seguir desarrollándome como montañista. Mi formación en rescate, primeros auxilios y socorrismo la adquirí como bombero, y complementé mi camino en las escuelas de guía de Buenos Aires y Mendoza. Además, disfruto compartiendo mis conocimientos, y es por eso que formo parte del equipo docente en la Escuela de Guías de Buenos Aires. Mi misión es brindar una experiencia segura, educativa y enriquecedora en cada expedición, ayudando a otros a descubrir su propio potencial en la montaña.",
        certificaciones: [
            "Instructor de Montañismo",
            "Técnico en Rescate y Socorrismo",
            "Guía Profesional Certificado",
            "Bombero Voluntario",
            "Docente Escuela de Guías"
        ],
        destinos_favoritos: [
            "Aconcagua",
            "Penitentes",
            "Volcán Tuzgle"
        ],
        filosofia: "La montaña enseña humildad, paciencia y la importancia de cada paso."
    }
];

const GuiasPage = () => {
    const [guiaSeleccionado, setGuiaSeleccionado] = useState(guias[0]);
    const { openWhatsApp } = useWhatsApp()

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-screen bg-cover bg-center">
                <Image
                    src="/imgs/champaqui.jpg"
                    alt="Nuestros Guías"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>


                <div className="absolute inset-0 flex items-center z-10">
                    <div className="container mx-auto px-4 py-20 w-full">
                        <div className="text-white w-full mx-auto text-left flex flex-col items-start gap-5">
                            <div className='mb-10'>
                                <BackButton />
                            </div>

                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-[var(--color-naranja-200)] p-3 rounded-full mr-4">
                                    <Mountain size={24} className="text-[var(--color-negro)]" />
                                </div>
                                <span className="text-[var(--color-amarillo)] font-semibold uppercase tracking-wider text-sm">
                                    Nuestro Equipo
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                                Conocé a Nuestros Guías
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-6 animate-fade-in-delay mx-auto">
                                Profesionales apasionados que te acompañarán en cada paso de tu aventura,
                                con la experiencia y dedicación que merecés.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Principal */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Selector de Guías */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                            <h3 className="text-xl font-bold text-[var(--color-negro)] mb-6 text-center">
                                Seleccionar Guía
                            </h3>

                            <div className="space-y-4">
                                {guias.map((guia) => (
                                    <button
                                        key={guia.id}
                                        onClick={() => setGuiaSeleccionado(guia)}
                                        className={`
                                            w-full p-4 rounded-xl transition-all duration-300 text-left
                                            ${guiaSeleccionado.id === guia.id
                                                ? 'bg-[var(--color-naranja)] text-white shadow-lg scale-105'
                                                : 'bg-gray-100 hover:bg-gray-200 text-[var(--color-negro)]'
                                            }
                                        `}
                                    >
                                        <div className="flex items-center space-x-4">
                                            {/* Placeholder para foto */}
                                            <div className={`
                                                w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                                                ${guiaSeleccionado.id === guia.id
                                                    ? 'bg-white text-[var(--color-naranja)]'
                                                    : 'bg-[var(--color-naranja)] text-white'
                                                }
                                            `}>
                                                {guia.nombre.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold">{guia.nombre} {guia.apellido}</h4>
                                                <p className={`text-sm ${guiaSeleccionado.id === guia.id ? 'text-white/80' : 'text-gray-600'}`}>
                                                    {guia.especialidad}
                                                </p>
                                            </div>
                                            <ChevronRight size={20} className={`
                                                transform transition-transform duration-300
                                                ${guiaSeleccionado.id === guia.id ? 'rotate-90' : ''}
                                            `} />
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Stats del equipo */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h4 className="font-bold text-[var(--color-negro)] mb-4 text-center">
                                    Experiencia Conjunta
                                </h4>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="bg-[var(--color-beige)]/40 p-3 rounded-lg">
                                        <div className="text-2xl font-bold text-[var(--color-naranja)]">
                                            {guias.reduce((sum, guia) => sum + guia.años_experiencia, 0)}
                                        </div>
                                        <div className="text-xs text-gray-600">Años de Experiencia</div>
                                    </div>
                                    <div className="bg-[var(--color-beige)]/40 p-3 rounded-lg">
                                        <div className="text-2xl font-bold text-[var(--color-naranja)]">
                                            {guias.reduce((sum, guia) => sum + guia.expediciones_guiadas, 0)}+
                                        </div>
                                        <div className="text-xs text-gray-600">Expediciones</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Perfil del Guía Seleccionado */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            {/* Header del perfil */}
                            <div className="bg-gradient-to-r from-[var(--color-naranja)] to-[var(--color-naranja-200)] p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                                    {/* Placeholder para foto del guía */}
                                    <div className="w-32 h-32 bg-white rounded-full overflow-hidden shadow-lg">
                                        <img
                                            src={guiaSeleccionado.img}
                                            alt="Guia 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center md:text-left flex-1">
                                        <h2 className="text-4xl font-bold mb-2">
                                            {guiaSeleccionado.nombre} {guiaSeleccionado.apellido}
                                        </h2>
                                        <p className="text-xl text-white/90 mb-4">
                                            {guiaSeleccionado.titulo}
                                        </p>

                                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                                                <span className="text-sm font-medium">{guiaSeleccionado.años_experiencia} años de experiencia</span>
                                            </div>
                                            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                                                <span className="text-sm font-medium">{guiaSeleccionado.expediciones_guiadas}+ expediciones</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contenido del perfil */}
                            <div className="p-8">
                                {/* Biografía */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-[var(--color-negro)] mb-4 flex items-center">
                                        <Users size={24} className="mr-3 text-[var(--color-naranja)]" />
                                        Sobre {guiaSeleccionado.nombre}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {guiaSeleccionado.bio}
                                    </p>

                                    {/* Frase filosofía */}
                                    <div className="mt-6 p-4 bg-[var(--color-beige)]/30 rounded-lg border-l-4 border-[var(--color-amarillo)]">
                                        <p className="text-[var(--color-negro)] italic font-medium">
                                            "{guiaSeleccionado.filosofia}"
                                        </p>
                                    </div>
                                </div>

                                {/* Grid de información */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Formación y Origen */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[var(--color-negro)] mb-4 flex items-center">
                                            <MapPin size={20} className="mr-2 text-[var(--color-naranja)]" />
                                            Origen y Formación
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                <span className="font-medium text-gray-700">Origen:</span>
                                                <span className="text-[var(--color-naranja)] font-bold">{guiaSeleccionado.origen}</span>
                                            </div>
                                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                <span className="font-medium text-gray-700">Formación:</span>
                                                <span className="text-[var(--color-naranja)] font-bold">{guiaSeleccionado.formacion}</span>
                                            </div>
                                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                <span className="font-medium text-gray-700">Especialidad:</span>
                                                <span className="text-[var(--color-naranja)] font-bold">{guiaSeleccionado.especialidad}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Certificaciones */}
                                    <div>
                                        <h4 className="text-xl font-bold text-[var(--color-negro)] mb-4 flex items-center">
                                            <Award size={20} className="mr-2 text-[var(--color-naranja)]" />
                                            Certificaciones
                                        </h4>
                                        <ul className="space-y-2">
                                            {guiaSeleccionado.certificaciones.map((cert, index) => (
                                                <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                                    <Star size={16} className="mr-3 text-[var(--color-amarillo)] fill-current" />
                                                    <span className="text-gray-700">{cert}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Destinos Favoritos */}
                                <div className="mt-8">
                                    <h4 className="text-xl font-bold text-[var(--color-negro)] mb-4 flex items-center">
                                        <Mountain size={20} className="mr-2 text-[var(--color-naranja)]" />
                                        Destinos Favoritos
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {guiaSeleccionado.destinos_favoritos.map((destino, index) => (
                                            <span
                                                key={index}
                                                className="bg-[var(--color-naranja)] text-white px-4 py-2 rounded-full font-medium hover:bg-[var(--color-naranja-200)] transition-colors cursor-pointer"
                                            >
                                                {destino}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-[var(--color-negro)] to-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            ¿Listo para tu próxima aventura?
                        </h3>
                        <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                            Nuestros guías están preparados para acompañarte en una experiencia única e inolvidable.
                            Cada expedición es diseñada con el mayor cuidado para tu seguridad y disfrute.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <AnimatedButton variant='primary' size='lg' icon={<Award size={20} />} onClick={() => {
                                openWhatsApp();
                            }}>
                                Contactar Equipo
                            </AnimatedButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuiasPage;