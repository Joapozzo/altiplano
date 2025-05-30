import { Route, Users, Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';

interface ProximaSalidaCardProps {
    salida: object | any;
}

// Subcomponente para cada salida
const ProximaSalidaCard = ({ salida }: ProximaSalidaCardProps) => {

    const getDuracion = (nombre: string) => {
        if (nombre === "Cerro Champaquí" || nombre === "Quebrada del Condorito") {
            return "3 días";
        }
        return "4 días";
    };

    const getDificultadColor = (dificultad: string) => {
        switch (dificultad.toLowerCase()) {
            case 'baja':
                return 'bg-[var(--color-beige)] text-[var(--color-naranja)]';
            case 'media':
                return 'bg-[var(--color-amarillo)] text-[var(--color-blanco)]';
            case 'media-alta':
                return 'bg-[var(--color-naranja-200)] text-[var(--color-blanco)]';
            case 'alta':
                return 'bg-[var(--color-naranja)] text-[var(--color-blanco)]';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    return (
        <div className="group relative bg-[var(--color-blanco)] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2">

            {/* Header */}
            <div className="bg-[var(--color-naranja)] p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10 flex items-center justify-between">
                    <div>
                        <div className="flex items-center mb-2">
                            <MapPin size={18} className="mr-2" />
                            <span className="text-sm font-medium opacity-90">Próxima Expedición</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{salida.nombre}</h3>
                        <div className="flex items-center">
                            <Clock size={16} className="mr-2" />
                            <span className="text-sm font-medium">{salida.fecha}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span className="text-sm font-semibold">{getDuracion(salida.nombre)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Información de la expedición */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="bg-[var(--color-beige)] p-2 rounded-lg mr-4">
                                <Route size={18} className="text-[var(--color-naranja)]" />
                            </div>
                            <div>
                                <span className="text-gray-600 text-sm block">Dificultad</span>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getDificultadColor(salida.dificultad)}`}>
                                    {salida.dificultad}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="bg-[var(--color-beige)] p-2 rounded-lg mr-4">
                                <Users size={18} className="text-[var(--color-naranja-200)]" />
                            </div>
                            <div>
                                <span className="text-gray-600 text-sm block">Lugares disponibles</span>
                                <span className="text-[var(--color-naranja-200)] font-bold">{salida.cupo}</span>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="bg-[var(--color-beige)] p-2 rounded-lg mr-4">
                                <Calendar size={18} className="text-[var(--color-naranja)]" />
                            </div>
                            <div>
                                <span className="text-gray-600 text-sm block">Duración</span>
                                <span className="text-[var(--color-naranja)] font-bold">{getDuracion(salida.nombre)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="text-center mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-amarillo)] rounded-full mb-3">
                                    <MapPin size={20} className="text-[var(--color-blanco)]" />
                                </div>
                                <p className="text-gray-700 text-sm mb-1 font-medium">
                                    ¡Últimos cupos!
                                </p>
                                <p className="text-gray-500 text-xs">
                                    Información vía WhatsApp
                                </p>
                            </div>

                            <button className="group/btn bg-[var(--color-naranja)] hover:bg-[var(--color-naranja-200)] text-[var(--color-blanco)] px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg w-full flex items-center justify-center">
                                <span>Contactar</span>
                                <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Efecto hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
};

export default ProximaSalidaCard;