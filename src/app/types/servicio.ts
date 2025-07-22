export interface Servicio {
  id_servicio: number;
  nombre: string;
  id_lugar: number;
  id_actividad: number;
  id_dificultad: number;
  duracion_dias: number;
  altura_maxima: number;
  desc: string;
  fotos: string[]; // array de imágenes
}