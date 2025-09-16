import { MapPin } from "lucide-react";

interface LogisticaProps {
    servicio: {
        punto_encuentro?: string;
        comodidades?: string;
        alimentacion_detalle?: {
            desayunos?: string;
            raciones_marcha?: string;
            cenas?: string;
        };
    };
}

const Logistica = ({ servicio }: LogisticaProps) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Logística</h2>

            {servicio.punto_encuentro && (
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center text-amber-600">
                        <MapPin size={18} className="mr-2" />
                        Punto de Encuentro
                    </h3>
                    <p className="text-gray-700">{servicio.punto_encuentro}</p>
                </div>
            )}

            {servicio.comodidades && (
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-amber-600">Alojamiento</h3>
                    <p className="text-gray-700">{servicio.comodidades}</p>
                </div>
            )}

            {servicio.alimentacion_detalle && (
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-amber-600">Alimentación</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {servicio.alimentacion_detalle.desayunos && (
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-1">Desayunos</h4>
                                <p className="text-sm text-gray-600">{servicio.alimentacion_detalle.desayunos}</p>
                            </div>
                        )}
                        {servicio.alimentacion_detalle.raciones_marcha && (
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-1">Raciones de Marcha</h4>
                                <p className="text-sm text-gray-600">{servicio.alimentacion_detalle.raciones_marcha}</p>
                            </div>
                        )}
                        {servicio.alimentacion_detalle.cenas && (
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-1">Cenas</h4>
                                <p className="text-sm text-gray-600">{servicio.alimentacion_detalle.cenas}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Logistica