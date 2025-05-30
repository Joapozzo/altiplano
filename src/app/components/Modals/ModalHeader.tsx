import { Map } from 'lucide-react';

interface ModalHeaderProps {
    onClose: any;
}

// Subcomponente para el header del modal
const ModalHeader = ({ onClose } : ModalHeaderProps) => {
    return (
        <>
            <div className="absolute -top-3 -right-3">
                <button
                    onClick={onClose}
                    className="bg-gray-800 text-white hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition"
                >
                    ✕
                </button>
            </div>

            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <Map size={28} className="text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold">Diseñá tu Expedición</h3>
                <p className="text-gray-500 mt-2">
                    Completá el formulario y nuestro equipo te contactará en breve
                </p>
            </div>
        </>
    );
};

export default ModalHeader;