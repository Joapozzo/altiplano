export interface ItinerarioDia {
  id_itinerario: number;
  dia: number;
  titulo: string; // ej: "Encuentro en Villa Alpina"
  descripcion: string;
  hora_inicio?: string;
  hora_fin?: string;
  distancia_km?: number;
  desnivel_metros?: number;
  duracion_horas?: string;
  alojamiento?: string;
  comidas?: string[];
  actividades_especiales?: string[]; // ej: ["Revisión de equipo", "Ascenso a cumbre"]
  altitud?: number;
  peso_mochila?: string;
  intensidad?: string;
}