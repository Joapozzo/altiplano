import {
    CheckCircle,
    X,
} from 'lucide-react';

interface ServiciosIncluidosProps {
    servicio: {
        servicios_incluidos?: string[];
        servicios_no_incluidos?: string[];
    };
}

const ServiciosIncluidos = ({ servicio }: ServiciosIncluidosProps) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Servicios</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicio.servicios_incluidos && (
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-green-600 flex items-center">
                            <CheckCircle size={18} className="mr-2" />
                            Incluido
                        </h3>
                        <ul className="space-y-2">
                            {servicio.servicios_incluidos.map((servicio_incluido, index) => (
                                <li key={index} className="flex items-start text-sm">
                                    <CheckCircle size={14} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-700">{servicio_incluido}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {servicio.servicios_no_incluidos && (
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-red-600 flex items-center">
                            <X size={18} className="mr-2" />
                            No Incluido
                        </h3>
                        <ul className="space-y-2">
                            {servicio.servicios_no_incluidos.map((servicio_no_incluido, index) => (
                                <li key={index} className="flex items-start text-sm">
                                    <X size={14} className="mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                                    <span className="text-gray-700">{servicio_no_incluido}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ServiciosIncluidos