import Image from "next/image";
import { Heart } from 'lucide-react';

// Subcomponente para la tarjeta de ejemplo
const ExpedicionEjemplo = () => {
    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-sm">
            <div className="bg-gray-800 rounded-xl overflow-hidden mb-4">
                <Image
                    src="/imgs/final.jpg"
                    alt="Expedición personalizada"
                    width={768}
                    height={192}
                    className="object-cover w-full h-48"
                />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">
                Expedición Corporativa
            </h3>
            <p className="text-white/80 mb-4 text-sm">
                Team building en la montaña: fortalecé el vínculo entre tu equipo con una experiencia inolvidable en la naturaleza.
            </p>
            <div className="flex items-center text-white/70 text-sm">
                <Heart size={16} className="mr-1 text-red-400" />
                <span>Recomendado por el 98% de nuestros clientes</span>
            </div>
        </div>
    );
};

export default ExpedicionEjemplo;