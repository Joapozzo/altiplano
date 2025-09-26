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
import { obtenerCuposDisponibles, obtenerDificultad, obtenerEstadoExpedicion } from "@/app/lib/salidas.utils";

interface HeroServicioProps {
    servicio: Servicio
    expedicion: Expedicion
}

const HeroServicio = ({ servicio, expedicion }: HeroServicioProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const estadoExpedicion = obtenerEstadoExpedicion(expedicion);
    const dificultad = obtenerDificultad(servicio);
    const cuposDisponibles = obtenerCuposDisponibles(expedicion);

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
                <div className="container mx-auto px-4 py-20 flex flex-col items-start gap-4 max-w-[1400px] lg:px-8">
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
                                <span className="text-sm">{formatearFechaCorta(expedicion.fecha_salida || '')} - {formatearFechaCorta(expedicion.fecha_fin || '')}</span>
                            </div>
                            <div className="flex items-center bg-[var(--color-naranja)] bg-opacity-20 px-4 py-2 rounded-full">
                                <Clock className="mr-2" size={16} />
                                <span className="text-sm">{servicio.duracion_dias} días / {servicio.duracion_noches} noches</span>
                            </div>
                            <div className="flex items-center bg-[var(--color-naranja)] bg-opacity-20 px-4 py-2 rounded-full">
                                <Users className="mr-2" size={16} />
                                <span className="text-sm">{cuposDisponibles}</span>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl animate-fade-in-delay-2">
                            {servicio.desc_resumen}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroServicio