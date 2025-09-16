import Image from "next/image"
import {
    Calendar,
    Mountain,
    Users,
    Clock,
} from 'lucide-react';
import { Servicio } from "@/app/types/servicio";
import { useState } from "react";
import BackButton from "../ui/ButtonBack";
import { Expedicion } from "@/app/types/expedicion";
import { formatearFechaCorta } from "@/app/lib/utils";

interface HeroServicioProps {
    servicio: Servicio
    expedicion: Expedicion
}

const HeroServicio = ({ servicio, expedicion }: HeroServicioProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const obtenerEstadoExpedicion = () => {
        const diasParaSalida = Math.ceil((new Date(expedicion.fecha_salida).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

        if (expedicion.cupos_disponibles === 0) {
            return { texto: 'Completa', color: 'bg-red-100 text-red-800' };
        }
        if (diasParaSalida <= 30) {
            return { texto: 'Próxima Salida', color: 'bg-orange-100 text-orange-800' };
        }
        if (expedicion.cupos_disponibles <= 3) {
            return { texto: 'Últimos Cupos', color: 'bg-yellow-100 text-yellow-800' };
        }
        return { texto: 'Disponible', color: 'bg-green-100 text-green-800' };
    };

    const obtenerDificultad = () => {
        if (servicio.altura_maxima >= 6000) return { texto: 'Extrema', color: 'text-purple-600', bg: 'bg-purple-100' };
        if (servicio.altura_maxima >= 5000) return { texto: 'Muy Alta', color: 'text-red-600', bg: 'bg-red-100' };
        if (servicio.altura_maxima >= 4000) return { texto: 'Alta', color: 'text-orange-600', bg: 'bg-orange-100' };
        if (servicio.altura_maxima >= 3000) return { texto: 'Media-Alta', color: 'text-yellow-600', bg: 'bg-yellow-100' };
        return { texto: 'Media', color: 'text-green-600', bg: 'bg-green-100' };
    };

    const estadoExpedicion = obtenerEstadoExpedicion();
    const dificultad = obtenerDificultad();

    return (
        <div className="relative min-h-screen bg-cover bg-center">
            <Image
                src={servicio.fotos[currentImageIndex] || "/imgs/final.jpg"}
                alt={servicio.nombre}
                fill
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="absolute inset-0 flex items-start z-20 flex-col justify-center">
                <div className="container mx-auto px-4 py-20 flex flex-col items-start gap-4">
                    <div className='mb-10'>
                        <BackButton />
                    </div>
                    <div className="text-white max-w-4xl">
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${estadoExpedicion.color}`}>
                                {estadoExpedicion.texto}
                            </span>
                            <div className={`flex items-center px-3 py-1 rounded-full ${dificultad.bg} ${dificultad.color}`}>
                                <Mountain className="mr-1" size={14} />
                                <span className="text-xs font-semibold">Dificultad {dificultad.texto}</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                            {servicio.nombre}
                        </h1>

                        <div className="flex flex-wrap gap-4 animate-fade-in-delay mb-6">
                            <div className="flex items-center bg-[var(--color-naranja)] bg-opacity-20 px-4 py-2 rounded-full">
                                <Calendar className="mr-2" size={16} />
                                <span className="text-sm">{formatearFechaCorta(expedicion.fecha_salida)} - {formatearFechaCorta(expedicion.fecha_fin)}</span>
                            </div>
                            <div className="flex items-center bg-[var(--color-naranja)] bg-opacity-20 px-4 py-2 rounded-full">
                                <Clock className="mr-2" size={16} />
                                <span className="text-sm">{servicio.duracion_dias} días / {servicio.duracion_noches} noches</span>
                            </div>
                            <div className="flex items-center bg-[var(--color-naranja)] bg-opacity-20 px-4 py-2 rounded-full">
                                <Users className="mr-2" size={16} />
                                <span className="text-sm">{expedicion.cupos_disponibles} cupos disponibles</span>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl animate-fade-in-delay-2">
                            {servicio.desc.substring(0, 150)}...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroServicio