import { Star } from "lucide-react";

interface DiferenciadoresProps {
    servicio: {
        diferenciadores?: string[];
    };
}

const Diferenciadores = ({ servicio }: DiferenciadoresProps) => {
    return (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <Star className="mr-2 text-amber-600" size={20} />
                ¿Por qué elegir Altiplano Experience?
            </h2>
            <ul className="space-y-2">
                {servicio.diferenciadores?.map((diferenciador, index) => (
                    <li key={index} className="flex items-start">
                        <Star className="mr-2 mt-0.5 text-amber-600 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{diferenciador}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Diferenciadores