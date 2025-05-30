import Image from 'next/image';
import { Instagram, Facebook, } from 'lucide-react';

// Subcomponente para la imagen del equipo
const ImagenEquipo = () => {
    return (
        <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-100 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-lg -z-10"></div>
            <div className="relative overflow-hidden rounded-xl shadow-xl h-96 md:h-[500px]"> {/* ← Altura definida */}
                <Image
                    src="/imgs/champaqui.jpg"
                    alt="Equipo CumbreAndina"
                    fill
                    className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-8">
                    <div className="flex justify-between items-end">
                        <div>
                            <h4 className="text-white text-xl font-bold">Equipo CumbreAndina</h4>
                            <p className="text-white/80 text-sm">Guías certificados y apasionados</p>
                        </div>
                        <div className="flex space-x-2">
                            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition">
                                <Instagram size={20} className="text-white" />
                            </a>
                            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition">
                                <Facebook size={20} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagenEquipo;