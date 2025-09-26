import { obtenerCuposDisponiblesSlash } from "@/app/lib/salidas.utils";
import { Expedicion } from "@/app/types/expedicion"
import { Servicio } from "@/app/types/servicio"
import {
    Mountain,
    Users,
    Clock,
    Thermometer,
} from 'lucide-react';

interface InfoGeneralProps {
    servicio: Servicio
    expedicion: Expedicion
}

const InfoGeneral = ({ servicio, expedicion }: InfoGeneralProps) => {
    const cuposDisponibles = obtenerCuposDisponiblesSlash(expedicion);
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Información General</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="mx-auto mb-2 text-amber-600" size={24} />
                    <div className="font-semibold text-gray-800">{servicio.duracion_dias} días</div>
                    <div className="text-sm text-gray-600">{servicio.duracion_noches} noches</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Mountain className="mx-auto mb-2 text-amber-600" size={24} />
                    <div className="font-semibold text-gray-800">{servicio.altura_maxima.toLocaleString()}m</div>
                    <div className="text-sm text-gray-600">Altura máxima</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="mx-auto mb-2 text-amber-600" size={24} />
                    <div className="font-semibold text-gray-800">{cuposDisponibles}/{expedicion.cupos_disponibles}</div>
                    <div className="text-sm text-gray-600">Cupos disponibles</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Thermometer className="mx-auto mb-2 text-amber-600" size={24} />
                    <div className="font-semibold text-gray-800">
                        {servicio.temperatura_dia_min}° a {servicio.temperatura_dia_max}°
                    </div>
                    <div className="text-sm text-gray-600">Temperatura día</div>
                </div>
            </div>

            {/* Información adicional */}
            {(servicio.horas_caminata_diarias || servicio.peso_mochila || servicio.ratio_guia_pasajero) && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Detalles Técnicos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        {servicio.horas_caminata_diarias && (
                            <div className="flex items-center">
                                <Clock size={16} className="mr-2 text-amber-600" />
                                <span className="text-[var(--color-naranja)]"><strong>Caminata:</strong> {servicio.horas_caminata_diarias}</span>
                            </div>
                        )}
                        {servicio.peso_mochila && (
                            <div className="flex items-center">
                                <Mountain size={16} className="mr-2 text-amber-600" />
                                <span className="text-[var(--color-naranja)]"><strong>Peso mochila:</strong> {servicio.peso_mochila}</span>
                            </div>
                        )}
                        {servicio.ratio_guia_pasajero && (
                            <div className="flex items-center">
                                <Users size={16} className="mr-2 text-amber-600" />
                                <span className="text-[var(--color-naranja)]"><strong>Ratio guía:</strong> {servicio.ratio_guia_pasajero}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default InfoGeneral