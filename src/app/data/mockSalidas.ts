import { Servicio } from "../types/servicio";
import { Expedicion } from "../types/expedicion";
import { ItinerarioDia } from "../types/Itinerario";

export const serviciosMock: Servicio[] = [
    {
        id_servicio: 1,
        nombre: "Expedición Aconcagua Febrero 2025",
        id_lugar: 1,
        id_actividad: 1,
        id_dificultad: 1,
        duracion_dias: 15,
        altura_maxima: 6969,
        desc: "Ascenso al Aconcagua por ruta normal. Incluye guías profesionales, logística completa, alimentación y gestión de cargas.",
        fotos: ["/aconcagua/1.jpg", "/aconcagua/2.jpg", "/aconcagua/3.jpg"]
    },
    {
        id_servicio: 2,
        nombre: "Travesía Champaquí Agosto 2025",
        id_lugar: 2,
        id_actividad: 2,
        id_dificultad: 2,
        duracion_dias: 3,
        altura_maxima: 2790,
        desc: "Ascenso al Cerro Champaquí, Córdoba. Ideal para iniciación en trekking de montaña con pernocte en refugio.",
        fotos: ["/champaqui/1.jpg", "/champaqui/2.jpg", "/champaqui/3.jpg"]
    },
    {
        id_servicio: 3,
        nombre: "Vallecitos Septiembre 2025",
        id_lugar: 3,
        id_actividad: 1,
        id_dificultad: 3,
        duracion_dias: 4,
        altura_maxima: 5432,
        desc: "Ascenso a cerros Franke y Vallecitos en Mendoza. Actividad de aclimatación con técnicas básicas de progresión en altura.",
        fotos: ["/vallecitos/1.jpg", "/vallecitos/2.jpg", "/vallecitos/3.jpg"]
    }
];

export const expedicionesMock: Expedicion[] = [
    {
        id_expedicion: 1,
        id_servicio: 1,
        fecha_salida: "2025-08-15",
        fecha_fin: "2025-08-30",
        cupos: 8,
        estado: "Activa",
        precio: 6472,
        itinerario: "Encuentro en Mendoza, trekking a Confluencia, Plaza de Mulas, Nido de Cóndores, Campo Cólera, intento de cumbre y descenso."
    },
    {
        id_expedicion: 2,
        id_servicio: 2,
        fecha_salida: "2025-08-22",
        fecha_fin: "2025-08-24",
        cupos: 15,
        estado: "Activa",
        precio: 250,
        itinerario: "Encuentro en Villa Alpina, trekking al refugio, ascenso al Champaquí, regreso al refugio y descenso a Villa Alpina."
    },
    {
        id_expedicion: 3,
        id_servicio: 3,
        fecha_salida: "2025-09-05",
        fecha_fin: "2025-09-08",
        cupos: 10,
        estado: "Activa",
        precio: 450,
        itinerario: "Encuentro en Mendoza, trekking a Veguitas, ascenso al Cerro Franke, ascenso al Vallecitos y regreso a Mendoza."
    }
];

export const itinerariosMock: ItinerarioDia[] = [
    // Aconcagua
    { dia: 1, descripcion: "Encuentro en Mendoza, revisión de equipo y traslado a Puquios", altura: 760 },
    { dia: 2, descripcion: "Ingreso al Parque Aconcagua, trekking a Confluencia", altura: 3390 },
    { dia: 3, descripcion: "Aclimatación hasta Plaza Francia, regreso a Confluencia", altura: 4100 },
    { dia: 4, descripcion: "Trekking a Plaza de Mulas", altura: 4350 },
    { dia: 5, descripcion: "Día de descanso en Plaza de Mulas", altura: 4350 },
    { dia: 6, descripcion: "Porteo al Nido de Cóndores y regreso", altura: 5550 },
    { dia: 8, descripcion: "Ascenso y pernocte en Nido de Cóndores", altura: 5550 },
    { dia: 10, descripcion: "Ascenso al Campo Cólera", altura: 5970 },
    { dia: 11, descripcion: "Intento de cumbre y regreso a Cólera", altura: 6969 },
    { dia: 13, descripcion: "Descenso a Mendoza", altura: 760 },

    // Champaquí
    { dia: 1, descripcion: "Encuentro en Villa Alpina, trekking hasta el refugio", altura: 2100 },
    { dia: 2, descripcion: "Ascenso a la cumbre del Champaquí y regreso al refugio", altura: 2790 },
    { dia: 3, descripcion: "Descenso a Villa Alpina", altura: 1200 },

    // Vallecitos
    { dia: 1, descripcion: "Encuentro en Mendoza, traslado al Refugio de Vallecitos", altura: 2850 },
    { dia: 2, descripcion: "Ascenso al Cerro Franke", altura: 4850 },
    { dia: 3, descripcion: "Ascenso al Cerro Vallecitos", altura: 5432 },
    { dia: 4, descripcion: "Descenso a Mendoza", altura: 760 }
];
