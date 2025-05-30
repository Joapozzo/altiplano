import { Clock, Route, ChevronRight } from 'lucide-react';

interface SalidaCardProps {
  salida: object | any;
}

// Subcomponente para cada tarjeta de salida
const SalidaCard = ({ salida }: SalidaCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('${salida.imagen}')` }}
      ></div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${salida.etiqueta.color}`}>
            {salida.etiqueta.texto}
          </span>
          <span className="text-gray-600 text-sm">{salida.fecha}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{salida.titulo}</h3>
        <p className="text-gray-600 mb-4">{salida.descripcion}</p>
        <div className="flex items-center">
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center mr-3">
              <Clock size={16} className="mr-1 text-amber-600" />
              <span>{salida.duracion}</span>
            </div>
            <div className="flex items-center">
              <Route size={16} className="mr-1 text-amber-600" />
              <span>{salida.dificultad}</span>
            </div>
          </div>
          <button className="text-amber-600 hover:text-amber-800 font-medium flex items-center ml-auto">
            Ver detalles <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalidaCard;