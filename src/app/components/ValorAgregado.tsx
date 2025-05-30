import React from 'react';
import { Leaf, BookOpen, Recycle } from 'lucide-react';
import ValorCard from './ValorCard';

// Componente principal
const ValorAgregado = () => {
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

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2">Nuestro Valor Agregado</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Lo que nos hace diferentes y te brinda la mejor experiencia
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {valores.map((valor) => (
                        <ValorCard key={valor.id} valor={valor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValorAgregado;