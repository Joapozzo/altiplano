export interface Actividad {
  id_actividad: number;
  nombre: string; // ej: "Ascenso de alta montaña"
}

export interface Dificultad {
  id_dificultad: number;
  nivel: string; // ej: "Exigente"
  desc: string;  // explicación o requisitos
}
