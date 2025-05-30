import React from 'react';
import ImagenEquipo from './ImagenEquipo';
import ContenidoPrincipal from './ContenidoPrincipal';

const QuienesSomos = () => {
    return (
        <section id="quienes-somos" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block bg-amber-100 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 mb-4">
                        NUESTRO EQUIPO
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Quiénes Somos</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Un equipo apasionado por la montaña y el turismo de aventura
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <ImagenEquipo />
                    <ContenidoPrincipal />
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;