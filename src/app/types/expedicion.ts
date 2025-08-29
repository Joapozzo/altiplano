import { ItinerarioDia } from "./Itinerario";
import { ServicioAdicional } from "./servicio";

export interface Expedicion {
  id_expedicion: number;
  id_servicio: number;
  
  // Fechas
  fecha_salida: string; // formato ISO
  fecha_fin: string;
  
  // Cupos y estado
  cupos_disponibles: number;
  cupos_ocupados: number;
  estado: 'Activa' | 'Completa' | 'Finalizada' | 'Suspendida' | 'Cancelada';
  
  // Precios por paquete (puede ser uno solo o múltiples)
  precios: {
    id_paquete?: number; // opcional para expediciones de un solo precio
    nombre_paquete?: string; // ej: "Full", "Básico" 
    precio: number;
    moneda: 'USD' | 'ARS';
  }[];
  
  // Para expediciones con reserva anticipada
  reserva_porcentaje?: number; // ej: 30 para Vallecitos
  
  // Itinerario detallado
  itinerario: ItinerarioDia[];
  
  // Validez del presupuesto
  presupuesto_valido_hasta?: string;
  
  // Servicios adicionales disponibles
  servicios_adicionales?: ServicioAdicional[];
  
  // Metadata
  fecha_creacion: string;
  fecha_actualizacion: string;
}