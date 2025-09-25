import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, DollarSign } from 'lucide-react';
import { SalidaCalendario } from '../../types/calendario';

interface SalidaCardProps {
    salida: SalidaCalendario;
    index: number;
}

const SalidaCard = ({ salida, index }: SalidaCardProps) => {
    const formatDateShort = (date: Date) => {
        return date.toLocaleDateString('es-AR', {
            day: 'numeric',
            month: 'short'
        });
    };

    const getDaysUntil = (date: Date) => {
        const today = new Date();
        const diffTime = date.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Hoy";
        if (diffDays === 1) return "Mañana";
        if (diffDays < 0) return "En curso";
        return `En ${diffDays} días`;
    };

    return (
        <div
            className="border border-[var(--color-naranja-200)] rounded-lg p-4 transition-all duration-300 hover:shadow-lg transform hover:scale-102"
            style={{
                animationDelay: `${index * 200}ms`,
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 200}ms forwards`,
            }}
        >
            {/* Imagen principal */}
            <div className="relative h-24 rounded-lg overflow-hidden mb-3 group">
                <Image
                    src={salida.servicio.fotos[0]}
                    alt={salida.servicio.nombre}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                    <div className="text-xs bg-amber-500 px-2 py-1 rounded-full animate-pulse">
                        {getDaysUntil(salida.fechaInicio)}
                    </div>
                </div>
            </div>

            {/* Información de la salida */}
            <h4 className="font-bold text-[var(--color-white)] mb-2 text-sm">
                {salida.servicio.nombre}
            </h4>
            
            <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-[var(--color-white)]">
                    <div className="flex items-center">
                        <Calendar size={12} className="mr-1 text-[var(--color-naranja-200)]" />
                        <span>Fechas</span>
                    </div>
                    <span className="font-medium">
                        {formatDateShort(salida.fechaInicio)} - {formatDateShort(salida.fechaFin)}
                    </span>
                </div>
                
                <div className="flex items-center justify-between text-[var(--color-white)]">
                    <div className="flex items-center">
                        <Clock size={12} className="mr-1 text-[var(--color-naranja-200)]" />
                        <span>Duración</span>
                    </div>
                    <span className="font-medium">
                        {salida.servicio.duracion_dias} días
                    </span>
                </div>
                
                <div className="flex items-center justify-between text-[var(--color-white)]">
                    <div className="flex items-center">
                        <MapPin size={12} className="mr-1 text-[var(--color-naranja-200)]" />
                        <span>Altura</span>
                    </div>
                    <span className="font-medium">
                        {salida.servicio.altura_maxima}m
                    </span>
                </div>
                
                <div className="flex items-center justify-between text-[var(--color-white)]">
                    <div className="flex items-center">
                        <Users size={12} className="mr-1 text-[var(--color-naranja-200)]" />
                        <span>Cupos</span>
                    </div>
                    <span className="font-medium">
                        {salida.expedicion.cupos_disponibles} disponibles
                    </span>
                </div>
                
                <div className="flex items-center justify-between text-[var(--color-white)]">
                    <div className="flex items-center">
                        <DollarSign size={12} className="mr-1 text-[var(--color-naranja-200)]" />
                        <span>Precio</span>
                    </div>
                    <span className="font-bold text-[var(--color-naranja-200)]">
                        {salida.expedicion.precios[0].moneda} {salida.expedicion.precios[0].precio.toLocaleString()}
                    </span>
                </div>
            </div>
            
            <button 
                className="w-full mt-3 bg-[var(--color-naranja-200)] hover:bg-amber-700 text-white py-2 px-3 rounded-lg transition-all duration-300 font-medium text-xs transform hover:scale-105"
                onClick={() => { window.location.href = `/salidas/${salida.expedicion.id_expedicion}`; }}
            >
                Ver Detalles y Reservar
            </button>
        </div>
    );
};

export default SalidaCard;

// Estilos CSS para las animaciones
const styles = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.scale-102 {
    transform: scale(1.02);
}
`;