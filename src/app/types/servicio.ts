export interface Paquete {
  id_paquete: number;
  nombre: string; // ej: "Full", "Básico"
  desc: string;
  incluye: string[]; // array de servicios incluidos
  no_incluye: string[]; // array de servicios no incluidos
}

export interface ExpedicionPaquete {
  id_expedicion: number;
  id_paquete: number;
  precio: number;
  moneda: 'USD' | 'ARS';
  cupos_disponibles: number;
}

export interface Servicio {
  id_servicio: number;
  nombre: string;
  id_lugar: number;
  id_actividad: number;
  id_dificultad: number;

  // Características físicas
  duracion_dias: number;
  duracion_noches: number;
  altura_maxima: number;
  desnivel?: number; // para casos como Penitentes

  // Descripción y detalles
  desc: string;
  descripcion_recorrido?: string;
  sobre_lugar?: string;

  // Condiciones climáticas y época
  clima_recomendado?: string;
  temperatura_dia_min?: number;
  temperatura_dia_max?: number;
  temperatura_noche_min?: number;
  temporada_recomendada?: string[];

  // Exigencias y requisitos
  experiencia_requerida?: string;
  horas_caminata_diarias?: string; // ej: "7-9 horas"
  peso_mochila?: string; // ej: "15 kg aprox"
  conocimientos_tecnicos_requeridos: boolean;

  // Logística
  punto_encuentro?: string;
  comodidades?: string; // descripción de alojamiento/refugios
  briefing_info?: string;
  consideraciones_especiales?: string[];

  // Modalidad del grupo
  modalidad: string; // ej: "grupo abierto"
  cupos_maximos: number;
  ratio_guia_pasajero?: string; // ej: "1-3" para Penitentes

  // Alimentación (para casos como Penitentes que lo detallan)
  alimentacion_detalle?: {
    desayunos?: string;
    raciones_marcha?: string;
    cenas?: string;
  };

  // Diferenciadores de la empresa
  diferenciadores?: string[];

  // Media
  fotos: string[];

  // Metadata
  fecha_creacion: string;
  fecha_actualizacion: string;
  activo: boolean;
}

export interface ServicioAdicional {
  id_servicio_adicional: number;
  nombre: string; // ej: "Porteo de equipo personal"
  descripcion?: string;
  precio?: number;
  moneda?: 'USD' | 'ARS';
  disponible: boolean;
}