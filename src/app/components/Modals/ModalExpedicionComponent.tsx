import React from 'react';
import { ChevronRight } from 'lucide-react';
import ModalHeader from './ModalHeader';
import FormField from './FormField';
import ModalFooter from './ModalFooter';

interface ModalExpedicionProps {
    showModal: boolean;
    onClose: any;
    formData: object | any;
    onFormChange: any;
    onSubmit: any;
}

// Componente principal del modal
const ModalExpedicion = ({
    showModal,
    onClose,
    formData,
    onFormChange,
    onSubmit,
}: ModalExpedicionProps) => {
    if (!showModal) return null;

    const campos = [
        { label: "Nombre", name: "nombre", placeholder: "Tu nombre" },
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "tu@email.com",
        },
        {
            label: "Teléfono (WhatsApp)",
            name: "telefono",
            type: "tel",
            placeholder: "+54 9...",
        },
        {
            label: "Detalles de tu Expedición",
            name: "mensaje",
            placeholder:
                "Cuéntanos qué tipo de expedición te gustaría, destino, fechas aproximadas, cantidad de personas, etc.",
            rows: 4,
        },
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative">
                <ModalHeader onClose={onClose} />

                <div className="space-y-6">
                    {campos.map((campo) => (
                        <FormField
                            key={campo.name}
                            label={campo.label}
                            type={campo.type}
                            name={campo.name}
                            value={formData[campo.name]}
                            onChange={onFormChange}
                            placeholder={campo.placeholder}
                            rows={campo.rows}
                        />
                    ))}

                    <button
                        onClick={onSubmit}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition shadow-md flex items-center justify-center font-medium"
                    >
                        Enviar Consulta
                        <ChevronRight size={20} className="ml-2" />
                    </button>

                    <ModalFooter />
                </div>
            </div>
        </div>
    );
};

export default ModalExpedicion;