import { Info } from "lucide-react";

interface ConsideracionesProps {
    servicio: {
        consideraciones_especiales?: string[];
    };
}

const Consideraciones = ({ servicio }: ConsideracionesProps) => {
    return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <Info className="mr-2 text-yellow-600" size={20} />
                Consideraciones Especiales
            </h2>
            <ul className="space-y-2">
                {servicio.consideraciones_especiales.map((consideracion, index) => (
                    <li key={index} className="flex items-start">
                        <Info className="mr-2 mt-0.5 text-yellow-600 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{consideracion}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Consideraciones