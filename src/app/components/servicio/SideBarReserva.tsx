import { Expedicion } from "@/app/types/expedicion";
import {
    Clock,
    Shield,
    CreditCard,
} from 'lucide-react';
import AnimatedButton from "../ui/Button";
import { FaWhatsapp } from "react-icons/fa";
import { useWhatsApp } from "@/app/hooks/useWhatsApp";
import { formatearFecha } from "@/app/lib/utils";
import { Servicio } from "@/app/types/servicio";

interface SideBarReservaProps {
    servicio: Servicio
    expedicion: Expedicion;
    setShowReservaModal: React.Dispatch<React.SetStateAction<boolean>>;
    setPaqueteSeleccionado: React.Dispatch<React.SetStateAction<number>>;
    paqueteSeleccionado: number;
    precioSeleccionado: {
        precio: number;
        moneda: string;
    }
}

const SideBarReserva = ({ expedicion, setShowReservaModal, setPaqueteSeleccionado, paqueteSeleccionado, servicio }: SideBarReservaProps) => {
    const { openWhatsApp } = useWhatsApp()
    const message = `Hola! Quiero reservar la expedición "${servicio.nombre}" para ${formatearFecha(expedicion.fecha_salida || '')}.`;

    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Reserva tu Expedición</h3>

                {/* Selección de Paquete */}
                {/* {expedicion.precios.length > 1 && (
                    <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800">Selecciona tu paquete:</h4>
                        <div className="space-y-2">
                            {expedicion.precios.map((precio, index) => (
                                <label
                                    key={index}
                                    className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                                >
                                    <input
                                        type="radio"
                                        name="paquete"
                                        checked={paqueteSeleccionado === index}
                                        onChange={() => setPaqueteSeleccionado(index)}
                                        className="mr-3"
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-800">
                                            {precio.nombre_paquete || 'Único'}
                                        </div>
                                        <div className="text-lg font-bold text-amber-600">
                                            {precio.moneda} {precio.precio.toLocaleString()}
                                        </div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                )} */}

                {/* Precio Principal */}
                {/* <div className="mb-6 p-4 bg-amber-50 rounded-lg">
                    <div className="text-center">
                        <div className="text-sm text-gray-600">Precio total</div>
                        <div className="text-3xl font-bold text-gray-800">
                            {precioSeleccionado.moneda} {precioSeleccionado.precio.toLocaleString()}
                        </div>
                        {expedicion.reserva_porcentaje && (
                            <div className="text-sm text-amber-600 mt-1">
                                Reserva: {expedicion.reserva_porcentaje}% = {precioSeleccionado.moneda} {Math.round((precioSeleccionado.precio * expedicion.reserva_porcentaje) / 100).toLocaleString()}
                            </div>
                        )}
                        {expedicion.presupuesto_valido_hasta && (
                            <div className="text-xs text-gray-500 mt-2">
                                Válido hasta: {formatearFechaCorta(expedicion.presupuesto_valido_hasta)}
                            </div>
                        )}
                    </div>
                </div> */}

                {/* Botones de Acción */}
                <div className="space-y-3">
                    <AnimatedButton
                        variant="primary"
                        size="md"
                        className="w-full"
                        icon={<CreditCard size={20} />}
                        onClick={() => openWhatsApp(message)}
                        disabled={expedicion.cupos_disponibles === 0}
                    >
                        {expedicion.cupos_disponibles === 0 ? 'Sin Cupos' : 'Reservar Ahora'}
                    </AnimatedButton>

                    {/* <AnimatedButton
                        variant="secondary"
                        size="md"
                        className="w-full"
                        icon={<FaWhatsapp size={20} />}
                        onClick={() => window.open("https://wa.me/5493837498552", "_blank")}
                    >
                        Consultar por WhatsApp
                    </AnimatedButton> */}

                    {/* <AnimatedButton
                        variant="primary"
                        size="md"
                        className="w-full"
                        icon={<Heart size={20} />}
                    >
                        Guardar en Favoritos
                    </AnimatedButton> */}
                </div>

                {/* Información de Contacto */}
                <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-2 text-gray-800">¿Necesitas ayuda?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                        Nuestro equipo está listo para resolver todas tus dudas
                    </p>
                    <div className="text-sm space-y-1">
                        <div className="flex items-center">
                            <FaWhatsapp size={16} className="mr-2 text-amber-600" />
                            <span className="text-gray-600">+54 9 3837 498552</span>
                        </div>
                        <div className="flex items-center">
                            <Clock size={16} className="mr-2 text-amber-600" />
                            <span className="text-gray-600">Lun a Vie 9:00 - 18:00</span>
                        </div>
                    </div>
                </div>

                {/* Garantías */}
                {/* <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800 flex items-center">
                        <Shield size={16} className="mr-2" />
                        Garantías Incluidas
                    </h4>
                    <ul className="text-sm text-green-700 space-y-1">
                        <li>• Guías profesionales certificados</li>
                        <li>• Seguro contra accidentes</li>
                        <li>• Cancelación hasta 48hs antes</li>
                        <li>• Equipamiento de seguridad</li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default SideBarReserva