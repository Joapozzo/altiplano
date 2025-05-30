import React from 'react';
import ProximaSalidaCard from './ProximaSalidaCard';

// Componente principal
const ProximasSalidas = () => {
    const proximasSalidas = [
        { id: 1, nombre: "Cerro Champaquí", fecha: "17-19 Mayo", dificultad: "Media", cupo: "6 lugares" },
        { id: 2, nombre: "Laguna de los Tres", fecha: "25-28 Mayo", dificultad: "Media-Alta", cupo: "4 lugares" },
        { id: 3, nombre: "Vallecitos", fecha: "2-5 Junio", dificultad: "Alta", cupo: "5 lugares" },
        { id: 4, nombre: "Quebrada del Condorito", fecha: "10-12 Junio", dificultad: "Baja", cupo: "8 lugares" }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2">Próximas Salidas</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Reservá tu lugar en nuestras expediciones programadas
                    </p>
                </div>

                {/* Grid responsive: 1 en móvil, 2 en tablet, 3 en desktop grande */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {proximasSalidas.map((salida) => (
                        <ProximaSalidaCard key={salida.id} salida={salida} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProximasSalidas;