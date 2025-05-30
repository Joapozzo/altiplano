import React from 'react';
import GaleriaItem from './GaleriaItem';

// Componente principal
const Galeria = () => {
    const galeriaItems = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2">Galería de Imágenes</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Capturamos los momentos más impresionantes de nuestras expediciones
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galeriaItems.map((item) => (
                        <GaleriaItem key={item} item={item} />
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button className="bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg transition shadow-md text-lg">
                        Ver Galería Completa
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Galeria;