import { Servicio } from "../types/servicio";
import { Expedicion } from "../types/expedicion";
import { ItinerarioDia } from "../types/Itinerario";

export const serviciosMock: Servicio[] = [
    {
        id_servicio: 1,
        nombre: "Cerro Champaquí",
        id_lugar: 1,
        id_actividad: 1, // Trekking
        id_dificultad: 1, // Media
        duracion_dias: 3,
        duracion_noches: 2,
        altura_maxima: 2790,
        desc: "La expedición al Cerro Champaquí es una experiencia inolvidable en las Sierras Grandes de Córdoba, ideal para quienes buscan un desafío físico y una inmersión en la naturaleza.",
        modalidad: "grupo abierto",
        cupos_maximos: 12,
        conocimientos_tecnicos_requeridos: false,
        horas_caminata_diarias: "7-9 horas",
        temporada_recomendada: ["otoño", "invierno", "primavera"],
        temperatura_dia_min: 5,
        temperatura_dia_max: 20,
        temperatura_noche_min: 0,
        punto_encuentro: "Villa Alpina a las 9:00 hs",
        comodidades: "Los puestos cuentan con camas cucheta en habitaciones compartidas, baños y duchas con agua caliente. La energía eléctrica es de baja potencia, para usos básicos.",
        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],
        fotos: ["/champaqui/1.jpg", "/champaqui/2.jpg", "/champaqui/3.jpg"],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01",
        activo: true
    },
    {
        id_servicio: 2,
        nombre: "Penitentes",
        id_lugar: 2,
        id_actividad: 2, // Ascenso de alta montaña
        id_dificultad: 3, // Media-alta  
        duracion_dias: 4,
        duracion_noches: 3,
        altura_maxima: 4350,
        desnivel: 1050,
        desc: "El ascenso al Cerro Penitentes es una expedición de alta montaña en la Cordillera Frontal de Mendoza, ideal para quienes ya tienen experiencia en trekking y desean dar el salto a los 4.000 metros.",
        modalidad: "grupo reducido",
        cupos_maximos: 6,
        ratio_guia_pasajero: "1-3",
        conocimientos_tecnicos_requeridos: false,
        horas_caminata_diarias: "11-13 horas",
        peso_mochila: "15 kg aprox",
        temporada_recomendada: ["octubre", "noviembre", "diciembre", "enero", "febrero", "marzo"],
        temperatura_dia_min: 0,
        temperatura_dia_max: 20,
        temperatura_noche_min: -10,
        punto_encuentro: "Mendoza a las 9:00 hs",
        alimentacion_detalle: {
            desayunos: "Huevos, palta, panificaciones",
            raciones_marcha: "Empanadas, sándwiches con fiambres, huevo, fruta",
            cenas: "Platos regionales en Mendoza; opciones ligeras y altamente nutritivas en campamentos de altura"
        },
        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña", 
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],
        fotos: ["/penitentes/1.jpg", "/penitentes/2.jpg", "/penitentes/3.jpg"],
        fecha_creacion: "2025-01-01", 
        fecha_actualizacion: "2025-01-01",
        activo: true
    },
    {
        id_servicio: 3,
        nombre: "Punta Negra",
        id_lugar: 3,
        id_actividad: 2, // Ascenso de alta montaña
        id_dificultad: 2, // Moderada
        duracion_dias: 3,
        duracion_noches: 2,
        altura_maxima: 4340,
        desnivel: 1170,
        desc: "El ascenso al Cerro Punta Negra es una experiencia de montaña de 3 días que combina caminatas sostenidas, acampe en plena cordillera y un entorno agreste ideal para quienes buscan alejarse de los circuitos más concurridos.",
        modalidad: "grupo reducido",
        cupos_maximos: 6,
        ratio_guia_pasajero: "1-3",
        conocimientos_tecnicos_requeridos: false,
        horas_caminata_diarias: "10 horas",
        temporada_recomendada: ["octubre", "noviembre", "diciembre", "enero", "febrero", "marzo", "abril"],
        temperatura_dia_min: 5,
        temperatura_dia_max: 20,
        temperatura_noche_min: 0,
        punto_encuentro: "Tunuyán 11hs, provincia de Mendoza",
        consideraciones_especiales: [
            "Expedición en zona remota con condiciones de aislamiento",
            "Sin acceso a señal de celular ni asistencia médica cercana",
            "Región limítrofe con Chile - documentación vigente obligatoria"
        ],
        alimentacion_detalle: {
            desayunos: "Huevos, palta, panificaciones",
            raciones_marcha: "Empanadas, sándwiches con fiambres al vacío, huevo, fruta",
            cenas: "Platos regionales en Fiambala; opciones ligeras y altamente nutritivas en campamentos de altura"
        },
        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos", 
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],
        fotos: ["/punta-negra/1.jpg", "/punta-negra/2.jpg", "/punta-negra/3.jpg"],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01", 
        activo: true
    },
    {
        id_servicio: 4,
        nombre: "Vallecitos",
        id_lugar: 4,
        id_actividad: 2, // Ascenso de alta montaña
        id_dificultad: 4, // Media-alta
        duracion_dias: 6,
        duracion_noches: 5,
        altura_maxima: 5470,
        desnivel: 1170,
        desc: "La expedición a Cerro Vallecitos es una experiencia de alta montaña diseñada para quienes buscan superar sus límites y ganar experiencia en terrenos de gran altitud. En seis días, recorreremos senderos exigentes, atravesaremos filos rocosos y ascenderemos hasta la cumbre del Vallecitos (5.470 m).",
        modalidad: "grupo reducido",
        cupos_maximos: 4, // ratio 1-2
        ratio_guia_pasajero: "1-2",
        conocimientos_tecnicos_requeridos: false,
        horas_caminata_diarias: "10-12 horas",
        temporada_recomendada: ["noviembre", "diciembre", "enero", "febrero", "marzo", "abril"],
        temperatura_dia_min: -5,
        temperatura_dia_max: 15,
        temperatura_noche_min: -15,
        punto_encuentro: "Mendoza 8hs",
        alimentacion_detalle: {
            desayunos: "Huevos, palta, panificaciones",
            raciones_marcha: "Empanadas, sándwiches con fiambres al vacío de calidad, huevo, fruta",
            cenas: "Platos frescos y proteicos en campamentos bajos; opciones ligeras y altamente nutritivas en campamentos de altura"
        },
        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña", 
            "Compromiso con el medio ambiente"
        ],
        fotos: ["/vallecitos/1.jpg", "/vallecitos/2.jpg", "/vallecitos/3.jpg"],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01",
        activo: true
    },
    {
        id_servicio: 5,
        nombre: "Volcán Tuzgle",
        id_lugar: 5,
        id_actividad: 2, // Ascenso de alta montaña
        id_dificultad: 4, // Media-alta
        duracion_dias: 5,
        duracion_noches: 5,
        altura_maxima: 5530,
        desc: "El ascenso al volcán Tuzgle es una expedición de alta montaña en plena Puna de Atacama, ideal para quienes buscan desafiar sus límites en altitud y explorar paisajes de belleza extrema.",
        modalidad: "grupo reducido",
        cupos_maximos: 4, // ratio 1-2
        ratio_guia_pasajero: "1-2", 
        conocimientos_tecnicos_requeridos: false,
        temporada_recomendada: ["mayo", "junio", "julio", "agosto", "septiembre", "octubre"],
        temperatura_dia_min: -5,
        temperatura_dia_max: 15,
        temperatura_noche_min: -15,
        punto_encuentro: "San Antonio de los Cobres a las 15:00 h",
        alimentacion_detalle: {
            desayunos: "Huevos, palta, panificaciones",
            raciones_marcha: "Empanadas, sándwiches con fiambres, huevo, fruta",
            cenas: "Platos regionales en San Antonio de los Cobres; opciones ligeras y altamente nutritivas en campamentos de altura"
        },
        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],
        fotos: ["/tuzgle/1.jpg", "/tuzgle/2.jpg", "/tuzgle/3.jpg"],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01", 
        activo: true
    }
];

export const expedicionesMock: Expedicion[] = [
    // Champaquí - Agosto 2025
    {
        id_expedicion: 1,
        id_servicio: 1,
        fecha_salida: "2025-08-15",
        fecha_fin: "2025-08-17", 
        cupos_disponibles: 12,
        cupos_ocupados: 0,
        estado: 'Activa',
        precios: [
            { nombre_paquete: "Full", precio: 377200, moneda: 'ARS' },
            { nombre_paquete: "Básico", precio: 291330, moneda: 'ARS' }
        ],
        presupuesto_valido_hasta: "2025-07-20",
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    },
    // Champaquí - Septiembre 2025
    {
        id_expedicion: 2,
        id_servicio: 1,
        fecha_salida: "2025-09-05",
        fecha_fin: "2025-09-07", 
        cupos_disponibles: 12,
        cupos_ocupados: 0,
        estado: 'Activa',
        precios: [
            { nombre_paquete: "Full", precio: 377200, moneda: 'ARS' },
            { nombre_paquete: "Básico", precio: 291330, moneda: 'ARS' }
        ],
        presupuesto_valido_hasta: "2025-07-20",
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    },
    // Penitentes - Octubre 2025
    {
        id_expedicion: 3,
        id_servicio: 2,
        fecha_salida: "2025-10-09",
        fecha_fin: "2025-10-12",
        cupos_disponibles: 6,
        cupos_ocupados: 0,
        estado: 'Activa',
        precios: [
            { precio: 630, moneda: 'USD' }
        ],
        presupuesto_valido_hasta: "2025-07-30",
        servicios_adicionales: [
            {
                id_servicio_adicional: 1,
                nombre: "Porteo de equipo personal",
                disponible: true
            }
        ],
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    },
    // Punta Negra - Octubre 2025
    {
        id_expedicion: 4,
        id_servicio: 3,
        fecha_salida: "2025-10-17",
        fecha_fin: "2025-10-19",
        cupos_disponibles: 6,
        cupos_ocupados: 0, 
        estado: 'Activa',
        precios: [
            { nombre_paquete: "Full", precio: 556, moneda: 'USD' },
            { nombre_paquete: "Básico", precio: 478, moneda: 'USD' }
        ],
        presupuesto_valido_hasta: "2025-07-30",
        servicios_adicionales: [
            {
                id_servicio_adicional: 2,
                nombre: "Almuerzo de despedida en bodega",
                disponible: true
            }
        ],
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    },
    // Vallecitos - Noviembre 2025
    {
        id_expedicion: 5,
        id_servicio: 4,
        fecha_salida: "2025-11-04",
        fecha_fin: "2025-11-09",
        cupos_disponibles: 4,
        cupos_ocupados: 0,
        estado: 'Activa',
        precios: [
            { precio: 938, moneda: 'USD' }
        ],
        reserva_porcentaje: 30,
        presupuesto_valido_hasta: "2025-08-30",
        servicios_adicionales: [
            {
                id_servicio_adicional: 3,
                nombre: "Porteo: Hasta 20k de equipo porteados",
                disponible: true
            },
            {
                id_servicio_adicional: 4,
                nombre: "Día extra para aclimatación", 
                disponible: true
            },
            {
                id_servicio_adicional: 5,
                nombre: "Combina con otras actividades: Termas, rafting, kayak, escalada/rapel",
                disponible: true
            }
        ],
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    },
    // Volcán Tuzgle - Noviembre 2025
    {
        id_expedicion: 6,
        id_servicio: 5,
        fecha_salida: "2025-11-05", 
        fecha_fin: "2025-11-09",
        cupos_disponibles: 4,
        cupos_ocupados: 0,
        estado: 'Activa',
        precios: [
            { precio: 830, moneda: 'USD' }
        ],
        presupuesto_valido_hasta: "2025-07-30",
        servicios_adicionales: [
            {
                id_servicio_adicional: 6,
                nombre: "Traslados entre Salta y San Antonio de los Cobres",
                disponible: true
            },
            {
                id_servicio_adicional: 7,
                nombre: "Día extra para aclimatación o cuestiones climáticas",
                disponible: true 
            },
            {
                id_servicio_adicional: 8,
                nombre: "Combina con otras actividades: Ascenso al Volcán Quewar 6130 msnm",
                disponible: true
            }
        ],
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    }
];

export const itinerariosMock: ItinerarioDia[] = [
    // Champaquí (Servicios 1)
    { 
        dia: 0, 
        titulo: "Revisión de equipo",
        descripcion: "Revisión de equipo e indumentaria solicitada por medios virtuales. Asesoramiento con elementos faltantes para su compra o alquiler.",
        actividades_especiales: ["Revisión de equipo", "Asesoramiento"]
    },
    { 
        dia: 1, 
        titulo: "Encuentro en Villa Alpina",
        descripcion: "Encuentro en Villa Alpina a las 9:00 hs. Presentación del equipo, distribución de equipaje y comienzo del trekking. Caminata de aproximadamente 14 km con almuerzo itinerante. Arribo al refugio serrano alrededor de las 17:00 hs.",
        hora_inicio: "09:00",
        hora_fin: "17:00",
        distancia_km: 14,
        alojamiento: "refugio serrano",
        comidas: ["almuerzo itinerante", "cena", "pernocte"]
    },
    { 
        dia: 2, 
        titulo: "Ascenso a la cumbre del Cerro Champaquí",
        descripcion: "Ascenso a la cumbre del Cerro Champaquí y visita al Balcón de las Sierras. Caminata de aproximadamente 14 km (ida y vuelta), con almuerzo itinerante en el camino. Retorno al refugio alrededor de las 18:00 hs.",
        hora_fin: "18:00",
        distancia_km: 14,
        altitud: 2790,
        alojamiento: "refugio serrano",
        comidas: ["almuerzo itinerante", "cena", "descanso"],
        actividades_especiales: ["Cumbre", "Balcón de las Sierras"]
    },
    { 
        dia: 3, 
        titulo: "Trekking de regreso a Villa Alpina",
        descripcion: "Desayuno y trekking de regreso a Villa Alpina. Almuerzo itinerante durante la bajada. Finalización de la actividad alrededor de las 16:00 hs.",
        hora_fin: "16:00",
        comidas: ["desayuno", "almuerzo itinerante"]
    },

    // Penitentes (Servicio 2)
    { 
        dia: 1, 
        titulo: "Encuentro en Mendoza",
        descripcion: "Encuentro en Mendoza a las 9:00 hs. Revisión de equipo. Traslado al Refugio de Penitentes (2.800 m). Caminata de aclimatación en las inmediaciones.",
        hora_inicio: "09:00",
        altitud: 2800,
        alojamiento: "refugio",
        comidas: ["cena", "pernocte"],
        actividades_especiales: ["Revisión de equipo", "Aclimatación"]
    },
    { 
        dia: 2, 
        titulo: "Trekking al campamento de altura",
        descripcion: "Traslado en vehículo a la quebrada de Vargas 2650 msnm. Trekking de aproximacion al campamento de altura (3.300 m). Armado de carpas y tarde libre para descanso y aclimatación.",
        duracion_horas: "4-5hs",
        peso_mochila: "15 kg aprox",
        desnivel_metros: 650,
        altitud: 3300,
        alojamiento: "campamento",
        comidas: ["cena caliente"],
        intensidad: "exigente"
    },
    { 
        dia: 3, 
        titulo: "Ascenso a la cumbre del Cerro Penitentes",
        descripcion: "Ascenso a la cumbre del Cerro Penitentes 4.350 msnm. Regreso al campamento de altura.",
        duracion_horas: "11-13hs aprox",
        desnivel_metros: 1050,
        altitud: 4350,
        alojamiento: "campamento",
        comidas: ["cena", "pernocte"],
        intensidad: "exigente",
        actividades_especiales: ["Cumbre"]
    },
    { 
        dia: 4, 
        titulo: "Regreso a Mendoza",
        descripcion: "Desarme de campamento y descenso al inicio de la quebrada donde estan los vehículos. Regreso al refugio, almuerzo de despedida y cierre del programa. Traslado a Mendoza.",
        hora_fin: "18:00",
        comidas: ["almuerzo de despedida"]
    },

    // Punta Negra (Servicio 3)
    { 
        dia: 1, 
        titulo: "Encuentro en Tunuyán",
        descripcion: "Encuentro en Tunuyán 11hs, provincia de Mendoza. Traslado hasta la zona de Arenales en vehículo 4x4. Si el camino esta en condiciones, se llega al campamento. En caso contrario, trekking de aproximación y porteo de equipo (3-4 h) hasta el campamento base, en zona de refugio Scaravelli 3170 msnm.",
        hora_inicio: "11:00",
        duracion_horas: "3-4h",
        altitud: 3170,
        alojamiento: "campamento base",
        comidas: ["armado de carpas", "cena", "descanso"]
    },
    { 
        dia: 2, 
        titulo: "Ascenso al Cerro Punta Negra",
        descripcion: "Ascenso al Cerro Punta Negra (4340 m). Almuerzo tipo marcha, cumbre y regreso al campamento. Jornada exigente 10hs, sin pasos técnicos.",
        duracion_horas: "10hs",
        desnivel_metros: 1170,
        altitud: 4340,
        alojamiento: "campamento",
        comidas: ["almuerzo tipo marcha", "cena", "pernocte"],
        intensidad: "exigente",
        actividades_especiales: ["Cumbre"]
    },
    { 
        dia: 3, 
        titulo: "Regreso y visita al Manzano Histórico",
        descripcion: "Desayuno, desarme de campamento y caminata de regreso al punto de inicio. Paseo por el 'Monumento Retorno a la Patria' en el Manzano Histórico, almuerzo de despedida. Traslado a Mendoza.",
        comidas: ["desayuno", "almuerzo de despedida"],
        actividades_especiales: ["Monumento Retorno a la Patria"]
    },

    // Vallecitos (Servicio 4)
    { 
        dia: 0, 
        titulo: "Revisión de equipo virtual",
        descripcion: "Revisión de equipo solicitado por medios virtuales, asesoramiento en caso de faltantes para compra o alquiler.",
        actividades_especiales: ["Revisión de equipo"]
    },
    { 
        dia: 1, 
        titulo: "Encuentro en Mendoza",
        descripcion: "Encuentro en la ciudad de Mendoza 8hs. Traslado en vehículo privado hasta Vallecitos. Inicio del trekking-porteo a Veguitas superior (C1-3450 msnm), armado de campamento y pernocte.",
        hora_inicio: "08:00",
        distancia_km: 2.5,
        desnivel_metros: 500,
        duracion_horas: "2-3hs",
        altitud: 3450,
        alojamiento: "campamento C1",
        intensidad: "moderada-exigente"
    },
    { 
        dia: 2, 
        titulo: "Porteo al Salto de agua",
        descripcion: "Porteo de equipo al 'Salto de agua' (C2-4300 msnm), descenso y pernocte en C1.",
        distancia_km: 11,
        desnivel_metros: 650,
        duracion_horas: "6-8hs",
        altitud: 4300,
        alojamiento: "C1",
        intensidad: "moderada-exigente"
    },
    { 
        dia: 3, 
        titulo: "Trekking al Salto de agua",
        descripcion: "Trekking al 'Salto de agua' (C2), armado de campamento y pernocte.",
        distancia_km: 5.5,
        desnivel_metros: 650,
        duracion_horas: "4-5hs",
        altitud: 4300,
        alojamiento: "campamento C2",
        intensidad: "moderada-exigente"
    },
    { 
        dia: 4, 
        titulo: "Descanso activo",
        descripcion: "Descanso activo en C2.",
        altitud: 4300,
        alojamiento: "campamento C2"
    },
    { 
        dia: 5, 
        titulo: "Intento de cumbre al Vallecitos",
        descripcion: "Intento de cumbre al cerro Vallecitos 5450msnm, descenso y pernocte en C2.",
        distancia_km: 12,
        desnivel_metros: 1170,
        duracion_horas: "10-12hs",
        altitud: 5470,
        alojamiento: "campamento C2",
        intensidad: "exigente-muy exigente",
        actividades_especiales: ["Cumbre"]
    },
    { 
        dia: 6, 
        titulo: "Descenso a Mendoza",
        descripcion: "Descenso a la zona de refugios, almuerzo en Potrerillos y retorno en vehículo privado a Mendoza a las 17hs aprox.",
        hora_fin: "17:00",
        comidas: ["almuerzo en Potrerillos"]
    },

    // Volcán Tuzgle (Servicio 5)
    { 
        dia: 1, 
        titulo: "Encuentro en San Antonio de los Cobres",
        descripcion: "Encuentro en San Antonio de los Cobres a las 15:00 h. Bienvenida, briefing, revisión de equipo y tiempo libre para recorrer el lugar.",
        hora_inicio: "15:00",
        altitud: 3760,
        alojamiento: "hostería",
        comidas: ["cena", "pernocte"],
        actividades_especiales: ["Briefing", "Revisión de equipo"]
    },
    { 
        dia: 2, 
        titulo: "Trekking de aclimatación",
        descripcion: "Trekking de aclimatación al mirador del Cerro Terciopelo y ascenso al Cerro Pompeya (4.050 m).",
        altitud: 4050,
        alojamiento: "hostería",
        comidas: ["cena", "pernocte"],
        actividades_especiales: ["Aclimatación", "Cerro Pompeya"]
    },
    { 
        dia: 3, 
        titulo: "Traslado a base del volcán",
        descripcion: "Traslado en vehículos hasta la base del volcán Tuzgle (4.500 m). Armado de campamento y pernocte en tiendas de montaña.",
        altitud: 4500,
        alojamiento: "campamento base",
        actividades_especiales: ["Armado de campamento"]
    },
    { 
        dia: 4, 
        titulo: "Descanso y aclimatación",
        descripcion: "Descanso y aclimatación en el campamento base. Opcion de mover a C1/visita a termas según clima.",
        altitud: 4500,
        alojamiento: "campamento base",
        actividades_especiales: ["Aclimatación"]
    },
    { 
        dia: 5, 
        titulo: "Ascenso a la cumbre del Tuzgle",
        descripcion: "Ascenso a la cumbre del volcán Tuzgle (5.530 m) y descenso a San Antonio de los Cobres.",
        altitud: 5530,
        alojamiento: "hostería",
        comidas: ["cena de despedida", "pernocte"],
        actividades_especiales: ["Cumbre"]
    },
    { 
        dia: 6, 
        titulo: "Regreso a Salta",
        descripcion: "Regreso a Salta"
    }
];