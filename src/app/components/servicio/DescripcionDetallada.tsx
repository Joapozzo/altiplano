interface DescripcionDetalladaProps {
    servicio: {
        desc: string;
        sobre_lugar?: string;
        experiencia_requerida?: string;
    };
}

const DescripcionDetallada = ({ servicio }: DescripcionDetalladaProps) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Sobre esta Expedición</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{servicio.desc}</p>

            {servicio.sobre_lugar && (
                <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-amber-600">Sobre el Lugar</h3>
                    <p className="text-gray-700 leading-relaxed">{servicio.sobre_lugar}</p>
                </div>
            )}

            {servicio.experiencia_requerida && (
                <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-semibold mb-3 text-amber-600">Experiencia Requerida</h3>
                    <p className="text-gray-700 leading-relaxed">{servicio.experiencia_requerida}</p>
                </div>
            )}
        </div>
    )
}

export default DescripcionDetallada