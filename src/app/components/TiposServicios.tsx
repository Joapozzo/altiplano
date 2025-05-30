import React from 'react';
import { Mountain, Tent, Camera } from 'lucide-react';
import ServicioCard from './ServicioCard';

// Componente principal
const TiposServicios = () => {
    const servicios = [
        {
            id: 1,
            titulo: "Trekking",
            descripcion: "Caminatas por senderos naturales con diferentes niveles de dificultad",
            icono: Mountain
        },
        {
            id: 2,
            titulo: "Alta Montaña",
            descripcion: "Expediciones a cumbres que requieren preparación y equipo especializado",
            icono: Mountain
        },
        {
            id: 3,
            titulo: "Campamentos",
            descripcion: "Experiencias de inmersión en la naturaleza con alojamiento en carpa",
            icono: Tent
        },
        {
            id: 4,
            titulo: "Fotografía",
            descripcion: "Salidas especiales para capturar paisajes inolvidables",
            icono: Camera
        }
    ];

    return (
        <section id="servicios" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2">Nuestros Servicios</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Experiencias diseñadas para cada nivel y objetivo
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicios.map((servicio) => (
                        <ServicioCard key={servicio.id} servicio={servicio} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TiposServicios;