import { Clock, Map, Users, ChevronRight } from 'lucide-react';
import EstadisticaCard from './EstadisticasCard';

// Subcomponente para el contenido principal
const ContenidoPrincipal = () => {
    const estadisticas = [
        { icono: Clock, numero: "10+", descripcion: "Años de experiencia" },
        { icono: Map, numero: "50+", descripcion: "Destinos explorados" },
        { icono: Users, numero: "3k+", descripcion: "Aventureros guiados" }
    ];

    return (
        <div className="lg:col-span-7 lg:pl-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Nuestra Historia</h3>

                <div className="mb-8 border-l-4 border-amber-500 pl-6 py-2 bg-amber-50 rounded-r-lg">
                    <p className="text-amber-800 italic">
                        "Creemos que la montaña es más que un destino, es una experiencia transformadora
                        que conecta a las personas con la naturaleza y consigo mismas."
                    </p>
                </div>

                <p className="text-gray-600 mb-6">
                    Nacimos en 2015 con la misión de acercar la experiencia de montaña a personas de todos los niveles.
                    Desde entonces, hemos guiado a más de 3000 aventureros a través de los paisajes más impresionantes de Argentina.
                </p>

                <p className="text-gray-600 mb-8">
                    Nuestro equipo está formado por guías profesionales certificados, con amplia experiencia en montañismo
                    y primeros auxilios, apasionados por compartir la magia de nuestras montañas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {estadisticas.map((estadistica, index) => (
                        <EstadisticaCard
                            key={index}
                            icono={estadistica.icono}
                            numero={estadistica.numero}
                            descripcion={estadistica.descripcion}
                        />
                    ))}
                </div>

                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition shadow-md text-lg inline-flex items-center">
                    Conocer al Equipo
                    <ChevronRight size={20} className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default ContenidoPrincipal;