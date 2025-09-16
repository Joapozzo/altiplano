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
        desc: "La expedición al Cerro Champaquí es una experiencia inolvidable en las Sierras Grandes de Córdoba, ideal para quienes buscan un desafío físico y una inmersión en la naturaleza. Durante tres días, recorreremos senderos de montaña, cruzaremos arroyos y nos adentraremos en un entorno de gran belleza, hasta alcanzar la cumbre del techo de Córdoba, a 2.790 metros sobre el nivel del mar.",

        sobre_lugar: "Ubicado en el corazón de las Sierras Grandes, el Cerro Champaquí es la cumbre más alta de la provincia de Córdoba y un destino clásico para los amantes del trekking. A lo largo de la travesía, pasaremos por puestos serranos, disfrutaremos de la hospitalidad de los lugareños y seremos testigos de un paisaje cambiante que combina bosque serrano, pastizales de altura y formaciones rocosas imponentes.",

        clima_recomendado: "Las mejores temporadas para realizar esta expedición son otoño, invierno y primavera, cuando las temperaturas son más estables y el clima es más propicio para el trekking. Durante el día, las temperaturas pueden oscilar entre 5°C y 20°C, mientras que por la noche pueden descender hasta los 0°C. Es fundamental contar con indumentaria adecuada para enfrentar las bajas temperaturas nocturnas.",

        descripcion_recorrido: "Iniciaremos nuestro ascenso por la ruta Este, desde la localidad de Villa Alpina. A lo largo del recorrido, nos encontraremos con cruces de arroyos, puestos baqueanos, animales silvestres y de crianza, cuevas y miradores naturales. Durante la expedición, disfrutaremos de la hospitalidad de los lugareños y de su cocina casera, que nos acompañará en las tres jornadas de travesía.",

        experiencia_requerida: "Este trekking tiene una dificultad moderada con exigencia física alta. Se recomienda para personas con experiencia en caminatas de jornada larga y buen estado físico. No se requieren conocimientos técnicos, pero es necesario estar preparado para jornadas de entre 7 y 9 horas de caminata diarias con desniveles pronunciados.",

        modalidad: "grupo abierto",
        cupos_maximos: 12,
        conocimientos_tecnicos_requeridos: false,
        horas_caminata_diarias: "7-9 horas",
        temporada_recomendada: ["otoño", "invierno", "primavera"],
        temperatura_dia_min: 5,
        temperatura_dia_max: 20,
        temperatura_noche_min: 0,
        punto_encuentro: "Villa Alpina a las 9:00 hs",

        comodidades: "Los puestos cuentan con camas cucheta en habitaciones compartidas, baños y duchas con agua caliente. La energía eléctrica es de baja potencia, para usos básicos: carga de celular, iluminación básica, etc...",

        briefing_info: "Cada día realizaremos reuniones para repasar el itinerario, organizar el equipaje y brindar recomendaciones sobre técnicas de marcha y gestión del esfuerzo. Además, recibirás asesoramiento previo sobre el equipo necesario para la expedición.",

        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],

        // Enlace al itinerario
        id_itinerario: 1,

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
        desc: "El ascenso al Cerro Penitentes es una expedición de alta montaña en la Cordillera Frontal de Mendoza, ideal (pero no excluyente) para quienes ya tienen experiencia en trekking y desean dar el salto a los 4.000 metros. En esta propuesta de cuatro días, combinamos caminatas en altura, prácticas formativas, campamento en terreno andino y la posibilidad de alcanzar una cumbre imponente a 4.350 msnm. Una experiencia diseñada para transicionar con seguridad al montañismo de mayor exigencia, en un entorno técnico moderado y de gran valor educativo.",
        sobre_lugar: "El Cerro Penitentes se encuentra frente al imponente macizo del Aconcagua, su cumbre es el mirador por excelencia de la pared sur. Su entorno ofrece un paisaje típico de la cordillera frontal: valles amplios, laderas pedregosas, penitentes de hielo y vistas abiertas hacia la alta montaña. Es un lugar estratégico para entrenar en altitud, con accesos logísticos accesibles desde la ciudad de Mendoza y refugios históricos utilizados por generaciones de montañistas.",
        clima_recomendado: "La mejor temporada para ascender el Penitentes es entre octubre y marzo, cuando las temperaturas son más estables y hay menor probabilidad de nevadas. Durante el día, las temperaturas pueden oscilar entre 0°C y 20°C, aunque en altura y durante la noche pueden descender hasta -10°C. El viento puede ser intenso, especialmente en la cumbre y zonas expuestas.",
        experiencia_requerida: "Esta expedición está clasificada como de dificultad media-alta. Se requiere buen estado físico, experiencia previa en trekking de varios días (no excluyente) y disposición a caminar con mochila en terreno irregular y de altura. No es necesario tener conocimientos técnicos, pero sí capacidad para adaptarse a condiciones de clima cambiante y altitud elevada.",
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
        comodidades: "Alojamiento 1 noche en Hostería, y 2 noches en carpas de alta montaña. Los refugios cuentan con servicios básicos y las carpas son de alta montaña especializadas para condiciones extremas.",
        briefing_info: "Cada día realizaremos una reunión para revisar el plan de ascenso, organizar el equipo y brindar recomendaciones sobre aclimatación, técnicas de marcha y gestión del esfuerzo en altura.",
        alimentacion_detalle: {
            desayunos: "Huevos, palta, panificaciones",
            raciones_marcha: "Empanadas, sándwiches con fiambres, huevo, fruta, etc...",
            cenas: "Platos regionales en Mendoza; opciones ligeras y altamente nutritivas en campamentos de altura"
        },
        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],
        // Información de servicios incluidos/no incluidos
        servicios_incluidos: [
            "Guías profesionales de montaña",
            "Grupos reducidos ratio 1-3 (1 guía cada 3 pasajeros)",
            "Pensión completa en montaña",
            "Alojamiento 1 noche en Hostería, y 2 noches en carpas de alta montaña",
            "Transporte local en Mendoza",
            "Porteo de equipo comunitario (comida, cocina y carpas)",
            "Armado de campamento",
            "Registro audiovisual del ascenso",
            "Seguro contra accidentes personales",
            "Botiquín grupal de primeros auxilios",
            "Comunicación VHF",
            "Listado de elementos para el viaje y asesoramiento individual previo (vía WhatsApp)"
        ],
        servicios_no_incluidos: [
            "Indumentaria personal",
            "Equipo de montaña personal",
            "Bebidas",
            "Snacks de marcha",
            "Transporte hasta Mendoza"
        ],
        servicios_adicionales_disponibles: [
            "Porteo de equipo personal"
        ],
        id_itinerario: 2,
        fotos: ["/penitentes/1.jpg", "/penitentes/2.jpg", "/penitentes/3.jpg"],
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
        desc: "La expedición a Cerro Vallecitos es una experiencia de alta montaña diseñada para quienes buscan superar sus límites y ganar experiencia en terrenos de gran altitud. En seis días, recorreremos senderos exigentes, atravesaremos filos rocosos y ascenderemos hasta la cumbre del Vallecitos (5.470 m), todo mientras trabajamos en nuestra resistencia, aclimatación y técnicas de montañismo.",

        sobre_lugar: "Ubicado en la Cordillera Frontal de Mendoza, Vallecitos es uno de los destinos más emblemáticos para la práctica del montañismo en Argentina. Su entorno privilegiado, con múltiples cumbres accesibles y variados terrenos de ascenso, lo convierte en un escenario ideal para la progresión en altura. Durante la expedición, atravesaremos paisajes espectaculares y experimentaremos la vida en campamentos de montaña a más de 4.000 metros de altitud.",

        clima_recomendado: "La mejor época para ascender el Cerro Vallecitos es de noviembre hasta abril, cuando las condiciones climáticas son más estables. Durante el día, las temperaturas pueden oscilar entre -5°C y 15°C, mientras que en la noche pueden descender hasta -15°C en los campamentos de altura. A partir de allí, avanzaremos de manera progresiva, estableciendo los campamentos de altura en función del proceso de aclimatación bajo el principio de 'camina alto, duerme bajo'.",

        experiencia_requerida: "Esta expedición es de dificultad media-alta, recomendada para personas con experiencia en trekking de altura y buen estado físico. No se requieren conocimientos técnicos avanzados, pero es necesario estar preparado para caminatas prolongadas en altura, desniveles exigentes y condiciones climáticas adversas.",

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

        briefing_info: "Cada día, realizaremos una reunión en la que revisaremos el plan de ascenso, ayudándote a organizar tu equipo, gestionar tu energía y optimizar tu alimentación para cada jornada. Durante las jornadas de aclimatación, optimizaremos el esfuerzo distribuyendo equipo y comida común entre los campamentos. Cada integrante, deberá llevar en su mochila, el equipo personal y raciones de comida.",

        alimentacion_detalle: {
            desayunos: "Huevos, palta, panificaciones",
            raciones_marcha: "Empanadas, sándwiches con fiambres al vacío de calidad, huevo, fruta, etc...",
            cenas: "Platos frescos y proteicos en campamentos bajos; opciones ligeras y altamente nutritivas en campamentos de altura"
        },

        servicios_incluidos: [
            "Guías profesionales de montaña",
            "Grupos reducidos ratio 1-2 (1 guía cada 2 pasajeros)",
            "Pensión completa en la montaña",
            "Alojamiento en tiendas de montaña",
            "Registro audiovisual del ascenso",
            "Almuerzo de despedida",
            "Seguro contra accidentes personales",
            "Botiquín grupal de primeros auxilios",
            "Comunicación VHF",
            "Comunicación satelital",
            "Listado de elementos para el viaje y asesoramiento individual previo (vía WhatsApp)"
        ],

        servicios_adicionales_disponibles: [
            "Porteo: Hasta 20k de equipo porteados en todos o algún tramo del ascenso",
            "Día extra: Adiciona un día extra previo al programa, para mejorar la aclimatación o cuestiones climáticas",
            "Combina con otras actividades: Termas, rafting, kayak, escalada/rapel"
        ],

        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],

        // Enlace al itinerario
        id_itinerario: 4,

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

        // Información del lugar extraída del PDF
        sobre_lugar: "Ubicado en la provincia de Salta, el volcán Tuzgle es un estratovolcán inactivo que se alza imponente en el altiplano andino. Su entorno ofrece vistas panorámicas de los salares y formaciones geológicas milenarias, con un paisaje de contrastes entre la aridez del desierto de altura y la diversidad de suelos volcánicos. San Antonio de los Cobres, punto de partida de la expedición, es una de las localidades más altas de Argentina y un centro clave para la cultura andina.",

        // Condiciones climáticas
        clima_recomendado: "La mejor época para realizar el ascenso al volcán Tuzgle es de mayo a octubre, cuando el clima es más seco y las condiciones de estabilidad atmosférica favorecen la aclimatación y el ascenso.",
        temperatura_dia_min: -5,
        temperatura_dia_max: 15,
        temperatura_noche_min: -15,
        temporada_recomendada: ["mayo", "junio", "julio", "agosto", "septiembre", "octubre"],

        // Experiencia y requisitos
        experiencia_requerida: "Recomendada para personas con experiencia previa en trekking de altura y buen estado físico",
        conocimientos_tecnicos_requeridos: false,

        // Logística
        punto_encuentro: "San Antonio de los Cobres a las 15:00 h",
        comodidades: "Alojamiento 3 noches en hostería y 2 noches en carpas de alta montaña. Las hosterías cuentan con servicios básicos adaptados a la altura.",
        briefing_info: "Cada día realizaremos una reunión para revisar el plan de ascenso, organizar el equipo y brindar recomendaciones sobre aclimatación, técnicas de marcha y gestión del esfuerzo en altura.",

        // Modalidad del grupo
        modalidad: "grupo reducido",
        cupos_maximos: 4, // ratio 1-2
        ratio_guia_pasajero: "1-2",

        // Alimentación detallada
        alimentacion_detalle: {
            desayunos: "Huevos, palta, panificaciones",
            raciones_marcha: "Empanadas, sándwiches con fiambres, huevo, fruta",
            cenas: "Platos regionales en San Antonio de los Cobres; opciones ligeras y altamente nutritivas en campamentos de altura"
        },

        // Servicios incluidos (extraídos del PDF)
        servicios_incluidos: [
            "Guías profesionales de montaña",
            "Grupos reducidos ratio 1-2 (1 guía cada 2 pasajeros)",
            "Pensión completa en montaña",
            "Alojamiento 3 noches en Hostería y 2 noches en carpas de alta montaña",
            "Transporte local en San Antonio de los Cobres",
            "Registro audiovisual del ascenso",
            "Seguro contra accidentes personales",
            "Botiquín grupal de primeros auxilios",
            "Comunicación VHF",
            "Listado de elementos para el viaje",
            "Asesoramiento individual previo (vía WhatsApp)"
        ],

        // Servicios no incluidos
        servicios_no_incluidos: [
            "Indumentaria personal",
            "Equipo de montaña personal",
            "Bebidas",
            "Snacks de marcha",
            "Transporte hasta San Antonio de los Cobres"
        ],

        // Servicios adicionales disponibles
        servicios_adicionales_disponibles: [
            "Traslados entre Salta y San Antonio de los Cobres",
            "Día extra para aclimatación o cuestiones climáticas",
            "Combina con otras actividades: Ascenso al Volcán Quewar 6130 msnm"
        ],

        // Diferenciadores de la empresa
        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],

        // Media
        fotos: ["/tuzgle/1.jpg", "/tuzgle/2.jpg", "/tuzgle/3.jpg"],

        // Metadata
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
        desc: "El ascenso al Cerro Punta Negra es una experiencia de montaña de 3 días que combina caminatas sostenidas, acampe en plena cordillera y un entorno agreste ideal para quienes buscan alejarse de los circuitos más concurridos. Ubicado en el corazón de la zona de Arenales, esta salida permite vivir la montaña en estado puro, en contacto directo con la geografía cordillerana. Una excelente oportunidad para quienes desean adentrarse en la montaña con mochila, dormir en carpa y coronar una cumbre sin dificultad técnica.",

        sobre_lugar: "El cerro Punta Negra se encuentra en las inmediaciones del valle de Arenales, una región de belleza escénica impactante, conocida por sus paredones de granito y su ambiente silvestre. Esta zona forma parte del Cordón del Portillo, en el sector alto del Manzano Histórico, a unas 3 horas de Mendoza capital. El acceso se realiza por caminos de montaña, que nos conducen hasta el inicio del sendero. El entorno ofrece vistas a otros clásicos de la zona como el Cerro Keops y el Punta Blanca.",

        clima_recomendado: "La temporada ideal para ascender al Cerro Punta Negra es de octubre a abril, cuando las condiciones de nieve y temperaturas permiten el acceso seguro y la permanencia en altura. Durante el día, las temperaturas suelen variar entre 5°C y 20°C, mientras que por la noche pueden descender hasta 0°C o menos en el campamento. El clima puede ser variable y es frecuente la presencia de viento fuerte por la tarde.",

        experiencia_requerida: "Expedición de dificultad media, ideal para personas con buena condición física y experiencia en trekking. No es necesario contar con conocimientos técnicos, pero sí estar preparadas/os para caminar con mochila, dormir en carpa y realizar una jornada de ascenso prolongada en altura.",

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

        briefing_info: "Cada día realizaremos encuentros para revisar el itinerario, evaluar la aclimatación y compartir recomendaciones para enfrentar la altura con seguridad. Hablaremos sobre el ritmo, la hidratación, la gestión de la energía en altura, y los síntomas comunes de hipoxia para poder responder a tiempo. También revisaremos el equipo personal antes del ascenso final.",

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

        servicios_adicionales_disponibles: [
            "Almuerzo de despedida en bodega"
        ],

        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],

        // Enlace al itinerario
        id_itinerario: 3,

        fotos: ["/punta-negra/1.jpg", "/punta-negra/2.jpg", "/punta-negra/3.jpg"],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01",
        activo: true
    },
    {
        id_servicio: 6,
        nombre: "Aconcagua",
        id_lugar: 6,
        id_actividad: 2, // Ascenso de alta montaña
        id_dificultad: 5, // Exigente
        duracion_dias: 15, // 13 días de programa + 2 días extra
        duracion_noches: 14,
        altura_maxima: 6969,
        desc: "El Aconcagua es el cerro más alto de América y uno de los seismiles más icónicos del mundo. Su ascenso por la ruta normal no presenta dificultades técnicas, pero es un verdadero desafío físico y mental por la altitud, el clima extremo y la duración de la expedición. Esta propuesta está pensada para montañistas con experiencia previa en altura, que busquen una expedición seria, segura y con una logística sólida.",

        sobre_lugar: "Ubicado dentro del Parque Provincial Aconcagua, en la provincia de Mendoza (Argentina), este coloso se alza en el corazón de los Andes. Sus paisajes, la magnitud de sus glaciares y su entorno agreste lo convierten en un destino de ensueño para los amantes de la alta montaña.",

        clima_recomendado: "La temporada de ascensos se extiende de diciembre a marzo. En esos meses, aunque es el periodo más estable, el clima puede ser extremadamente riguroso, con vientos fuertes, nevadas y temperaturas que descienden por debajo de los -20°C en altura. El itinerario incluye días extra para adaptarnos a estas posibles contingencias.",

        experiencia_requerida: "Expedición de dificultad exigente, diseñada para montañistas con experiencia previa en altura. Requiere excelente estado físico, resistencia mental y preparación técnica para enfrentar condiciones extremas de altitud, clima y duración prolongada.",

        modalidad: "grupo reducido",
        cupos_maximos: 4, // ratio 1-2
        ratio_guia_pasajero: "1-2",
        conocimientos_tecnicos_requeridos: false,
        temporada_recomendada: ["diciembre", "enero", "febrero", "marzo"],
        temperatura_noche_min: -20,
        punto_encuentro: "Mendoza (760 msnm)",

        briefing_info: "Antes de la expedición realizaremos un encuentro en Mendoza, donde revisaremos el equipo personal, ajustaremos los últimos detalles logísticos y gestionaremos los permisos de ascenso. Este momento es clave para asegurar que cada participante cuente con lo necesario para un ascenso seguro. Cada día durante la expedición, realizaremos una reunión para revisar el plan de ascenso, organizar el equipo y brindar recomendaciones sobre aclimatación, técnicas de marcha y gestión del esfuerzo en altura.",

        consideraciones_especiales: [
            "Incluye 2 días extra para contingencias climáticas y aclimatación",
            "Requiere seguro de evacuación obligatorio",
            "Gestión especializada de cargas con sistema de mulas",
            "Servicios gastronómicos de INKA Expediciones en campamentos base"
        ],

        alimentacion_detalle: {
            desayunos: "Huevos, palta, panificaciones, cereales y bebidas calientes",
            raciones_marcha: "Empanadas, sándwiches con fiambres, huevo duro, fáciles de transportar",
            cenas: "Comidas ligeras, fáciles de digerir y con alto valor nutritivo para favorecer la recuperación y la aclimatación"
        },

        servicios_incluidos: [
            "Guías profesionales de montaña",
            "Grupos reducidos ratio 1-2 (1 guía cada 2 pasajeros)",
            "Pensión completa",
            "Alojamiento 3 noches en Hostal: 1 noche en Ciudad de Mendoza previa al encuentro, 1 noche en Puquios/Puente del Inca, 1 noche en Ciudad de Mendoza al finalizar",
            "Alojamiento 12-14 noches en tiendas de alta montaña en Parque Provincial Aconcagua",
            "Transporte local en Mendoza",
            "35kg de equipaje en mulas",
            "Porteo a campamentos de altura según descripción",
            "Registro audiovisual del ascenso",
            "Seguro contra accidentes personales",
            "Botiquín grupal de primeros auxiliios",
            "Comunicación VHF y satelital",
            "Listado de elementos para el viaje y asesoramiento individual previo (vía WhatsApp)",
            "Ticket de ingreso a Parques"
        ],

        servicios_no_incluidos: [
            "Porteos extra",
            "Indumentaria personal",
            "Equipo de montaña personal",
            "Bebidas personales",
            "Snacks de marcha",
            "Transporte desde ciudad de origen a Mendoza",
            "Seguro de evacuación (obligatorio)"
        ],

        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],

        // Información especial del Aconcagua
        gestion_cargas: [
            "Puquios → Confluencia: hasta 10 kg por participante",
            "Confluencia → Plaza de Mulas: hasta 10 kg por participante",
            "Puquios → Plaza de Mulas (directo): hasta 25 kg por participante",
            "Descenso Plaza de Mulas → Puquios: hasta 35 kg por participante",
            "Plaza de Mulas → Nido de Cóndores: 10 kg por participante",
            "Nido de Cóndores → Cólera: 10 kg por participante",
            "Cólera → Plaza de Mulas (descenso): 10 kg por participante"
        ],

        // Enlace al itinerario
        id_itinerario: 6,

        fotos: ["/aconcagua/1.jpg", "/aconcagua/2.jpg", "/aconcagua/3.jpg"],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01",
        activo: true
    },
    {
        id_servicio: 7,
        nombre: "Volcán Quewar",
        id_lugar: 6,
        id_actividad: 2, // Ascenso de alta montaña
        id_dificultad: 5, // Exigente
        duracion_dias: 10,
        duracion_noches: 10,
        altura_maxima: 6140,
        desc: "El ascenso al Volcán Quewar es una expedición de alta montaña en plena Puna de Atacama, ideal para montañistas con experiencia previa que deseen desafiar sus límites en altitud y vivir la inmensidad de un paisaje remoto y sobrecogedor. Con sus 6.140 metros sobre el nivel del mar, el Quewar es un gigante solitario que nos invita a una aventura exigente y profundamente transformadora.",

        // Información del lugar extraída del PDF
        sobre_lugar: "El Volcán Quewar se ubica en el sector sur de la Puna salteña, dentro de un entorno de salares, lagunas altoandinas y pequeños poblados que resguardan una rica historia vinculada a las culturas originarias. El paisaje se caracteriza por su aridez, la amplitud de sus horizontes y la sensación de aislamiento absoluto. San Antonio de los Cobres, base logística de la expedición, es una de las localidades más altas de Argentina y un centro clave para la cultura andina.",

        // Condiciones climáticas
        clima_recomendado: "La mejor época para realizar el ascenso al volcán es de abril a noviembre, cuando el clima es más seco y las condiciones de estabilidad atmosférica favorecen la aclimatación y el ascenso.",
        temperatura_dia_min: -5,
        temperatura_dia_max: 15,
        temperatura_noche_min: -15,
        temporada_recomendada: ["abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre"],

        // Experiencia y requisitos
        experiencia_requerida: "Recomendada para personas con experiencia previa en montañas de altura por encima de los 4500msnm y buen estado físico",
        conocimientos_tecnicos_requeridos: false,

        // Logística
        punto_encuentro: "Encuentro en la ciudad de Salta a las 9:00 h",
        comodidades: "Alojamiento 4 noches en hostería y 6 noches en carpas de alta montaña. Las hosterías en San Antonio de los Cobres cuentan con servicios básicos adaptados a la altura.",
        briefing_info: "Cada día realizaremos una reunión para revisar el plan de ascenso, organizar el equipo y brindar recomendaciones sobre aclimatación, técnicas de marcha y gestión del esfuerzo en altura.",

        // Modalidad del grupo
        modalidad: "grupo reducido",
        cupos_maximos: 4, // ratio 1-2
        ratio_guia_pasajero: "1-2",

        // Alimentación detallada
        alimentacion_detalle: {
            desayunos: "Huevos, palta, panificaciones",
            raciones_marcha: "Empanadas, sándwiches con fiambres, huevo, fruta",
            cenas: "Platos regionales en San Antonio de los Cobres; opciones ligeras y altamente nutritivas en campamentos de altura"
        },

        // Servicios incluidos (extraídos del PDF)
        servicios_incluidos: [
            "Guías profesionales de montaña",
            "Grupos reducidos ratio 1-2 (1 guía cada 2 pasajeros)",
            "Pensión completa",
            "Alojamiento 4 noches en Hostería y 6 noches en carpas de alta montaña",
            "Transporte local en Salta",
            "Traslado de cargas CB-C1 (subida y bajada)",
            "Registro audiovisual del ascenso",
            "Seguro contra accidentes personales",
            "Botiquín grupal de primeros auxilios",
            "Comunicación VHF y satelital",
            "Listado de elementos para el viaje",
            "Asesoramiento individual previo (vía WhatsApp)"
        ],

        // Servicios no incluidos
        servicios_no_incluidos: [
            "Porteo de C1-C2",
            "Indumentaria personal",
            "Equipo de montaña personal",
            "Bebidas personales",
            "Snacks de marcha",
            "Transporte desde ciudad de origen a Salta"
        ],

        // Servicios adicionales disponibles
        servicios_adicionales_disponibles: [
            "Día extra para aclimatación o cuestiones climáticas",
            "Combina con otras actividades: Ascenso al Volcán Tuzgle 5530 msnm"
        ],

        // Diferenciadores de la empresa
        diferenciadores: [
            "Enfoque educativo: autonomía en la montaña",
            "Grupos reducidos",
            "Ritmo ajustado y conexión con la montaña",
            "Compromiso con el medio ambiente"
        ],

        // Media
        fotos: ["/quewar/quewar-1.jpg", "/quewar/quewar-2.jpg", "/quewar/quewar-3.jpg"],

        // Metadata
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01",
        activo: true
    }
];

export const expedicionesMock: Expedicion[] = [
    // Champaquí - Septiembre 2025
    {
        id_expedicion: 1,
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
        presupuesto_valido_hasta: "2025-08-20",
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    },

    // Penitentes - Octubre 2025
    {
        id_expedicion: 2,
        id_servicio: 2,
        fecha_salida: "2025-10-09",
        fecha_fin: "2025-10-12",
        cupos_disponibles: 6,
        cupos_ocupados: 0,
        estado: 'Activa',
        precios: [
            { precio: 630, moneda: 'USD' }
        ],
        presupuesto_valido_hasta: "2025-09-10",
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
        id_expedicion: 3,
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
        presupuesto_valido_hasta: "2025-09-20",
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
        id_expedicion: 4,
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
        presupuesto_valido_hasta: "2025-10-05",
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
        id_expedicion: 5,
        id_servicio: 5,
        fecha_salida: "2025-11-05",
        fecha_fin: "2025-11-10",
        cupos_disponibles: 4,
        cupos_ocupados: 0,
        estado: 'Activa',
        precios: [
            { precio: 830, moneda: 'USD' }
        ],
        presupuesto_valido_hasta: "2025-10-05",
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
                nombre: "Combina con otras actividades: Ascenso al Volcán Quewar 6140 msnm",
                disponible: true
            }
        ],
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    },

    // Volcán Quewar - Noviembre 2025
    {
        id_expedicion: 6,
        id_servicio: 7,
        fecha_salida: "2025-11-11",
        fecha_fin: "2025-11-21",
        cupos_disponibles: 4,
        cupos_ocupados: 0,
        estado: 'Activa',
        precios: [
            { precio: 1750, moneda: 'USD' }
        ],
        presupuesto_valido_hasta: "2025-10-10",
        servicios_adicionales: [
            {
                id_servicio_adicional: 9,
                nombre: "Día extra para aclimatación o cuestiones climáticas",
                disponible: true
            },
            {
                id_servicio_adicional: 10,
                nombre: "Combina con otras actividades: Ascenso al Volcán Tuzgle 5530 msnm",
                disponible: true
            }
        ],
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    },

    // Aconcagua - Febrero 2025-2026
    {
        id_expedicion: 7,
        id_servicio: 6,
        fecha_salida: "2026-02-02",
        fecha_fin: "2026-02-17",
        cupos_disponibles: 4,
        cupos_ocupados: 0,
        estado: 'Activa',
        precios: [
            { precio: 3800, moneda: 'USD' }
        ],
        reserva_porcentaje: 50,
        presupuesto_valido_hasta: "2025-12-01",
        servicios_adicionales: [
            {
                id_servicio_adicional: 11,
                nombre: "Porteos extra",
                disponible: true
            },
            {
                id_servicio_adicional: 12,
                nombre: "Seguro de evacuación (obligatorio)",
                disponible: true
            }
        ],
        itinerario: [],
        fecha_creacion: "2025-01-01",
        fecha_actualizacion: "2025-01-01"
    }
];

export const itinerarioPenitentes: ItinerarioDia[] = [
    {
        id_itinerario: 2,
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
        id_itinerario: 2,
        dia: 2,
        titulo: "Trekking al campamento de altura",
        descripcion: "Traslado en vehículo a la quebrada de Vargas 2650 msnm. Trekking de aproximación al campamento de altura (3.300 m). Armado de carpas y tarde libre para descanso y aclimatación. Cena caliente en campamento.",
        duracion_horas: "4-5hs",
        peso_mochila: "15 kg aprox",
        desnivel_metros: 650,
        altitud: 3300,
        alojamiento: "campamento",
        comidas: ["cena caliente"],
        intensidad: "exigente"
    },
    {
        id_itinerario: 2,
        dia: 3,
        titulo: "Ascenso a la cumbre del Cerro Penitentes",
        descripcion: "Ascenso a la cumbre del Cerro Penitentes 4.350 msnm. Regreso al campamento de altura. Cena y pernocte.",
        duracion_horas: "11-13hs aprox",
        desnivel_metros: 1050,
        altitud: 4350,
        alojamiento: "campamento",
        comidas: ["cena", "pernocte"],
        intensidad: "exigente",
        actividades_especiales: ["Cumbre"]
    },
    {
        id_itinerario: 2,
        dia: 4,
        titulo: "Regreso a Mendoza",
        descripcion: "Desarme de campamento y descenso al inicio de la quebrada donde están los vehículos. Regreso al refugio, almuerzo de despedida y cierre del programa. Traslado a Mendoza.",
        hora_fin: "18:00",
        comidas: ["almuerzo de despedida"]
    }
];

export const itinerarioChampaqui: ItinerarioDia[] = [
    {
        id_itinerario: 1,
        dia: 0,
        titulo: "Revisión de equipo",
        descripcion: "Revisión de equipo e indumentaria solicitada por medios virtuales. Asesoramiento con elementos faltantes para su compra o alquiler.",
        actividades_especiales: ["Revisión de equipo", "Asesoramiento"]
    },
    {
        id_itinerario: 1,
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
        id_itinerario: 1,
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
        id_itinerario: 1,
        dia: 3,
        titulo: "Trekking de regreso a Villa Alpina",
        descripcion: "Desayuno y trekking de regreso a Villa Alpina. Almuerzo itinerante durante la bajada. Finalización de la actividad alrededor de las 16:00 hs.",
        hora_fin: "16:00",
        comidas: ["desayuno", "almuerzo itinerante"]
    }
];

export const itinerarioVallecitos: ItinerarioDia[] = [
    {
        id_itinerario: 4,
        dia: 0,
        titulo: "Revisión de equipo virtual",
        descripcion: "Revisión de equipo solicitado por medios virtuales, asesoramiento en caso de faltantes para compra o alquiler.",
        actividades_especiales: ["Revisión de equipo"]
    },
    {
        id_itinerario: 4,
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
        id_itinerario: 4,
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
        id_itinerario: 4,
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
        id_itinerario: 4,
        dia: 4,
        titulo: "Descanso activo",
        descripcion: "Descanso activo en C2.",
        altitud: 4300,
        alojamiento: "campamento C2"
    },
    {
        id_itinerario: 4,
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
        id_itinerario: 4,
        dia: 6,
        titulo: "Descenso a Mendoza",
        descripcion: "Descenso a la zona de refugios, almuerzo en Potrerillos y retorno en vehículo privado a Mendoza a las 17hs aprox.",
        hora_fin: "17:00",
        comidas: ["almuerzo en Potrerillos"]
    }
];

export const itinerarioPuntaNegra: ItinerarioDia[] = [
    {
        id_itinerario: 3,
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
        id_itinerario: 3,
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
        id_itinerario: 3,
        dia: 3,
        titulo: "Regreso y visita al Manzano Histórico",
        descripcion: "Desayuno, desarme de campamento y caminata de regreso al punto de inicio. Paseo por el 'Monumento Retorno a la Patria' en el Manzano Histórico, almuerzo de despedida. Traslado a Mendoza.",
        comidas: ["desayuno", "almuerzo de despedida"],
        actividades_especiales: ["Monumento Retorno a la Patria"]
    }
];

export const itinerarioAconcagua: ItinerarioDia[] = [
    {
        id_itinerario: 6,
        dia: 1,
        titulo: "Encuentro en Mendoza",
        descripcion: "Encuentro en Mendoza (760 msnm). Revisión de equipo personal, asesoramiento final y acompañamiento al rental en caso de ser necesario. Traslado en vehículo privado hasta Puquios (2.800 msnm), donde funciona el centro logístico de INKA Expediciones para el despacho de equipo. Pernocte en hostel de montaña.",
        altitud: 2800,
        alojamiento: "hostel de montaña",
        actividades_especiales: ["Revisión de equipo", "Gestión de permisos", "Centro logístico INKA"]
    },
    {
        id_itinerario: 6,
        dia: 2,
        titulo: "Ingreso al Parque Aconcagua",
        descripcion: "Ingreso al Parque Provincial Aconcagua por el sector de Horcones. Inicio del trekking de aproximación hacia Confluencia (3.390 msnm). Armado de campamento, cena y pernocte en carpas.",
        altitud: 3390,
        alojamiento: "carpas",
        comidas: ["cena", "pernocte"],
        actividades_especiales: ["Ingreso al Parque"]
    },
    {
        id_itinerario: 6,
        dia: 3,
        titulo: "Trekking de aclimatación",
        descripcion: "Trekking de aclimatación hasta el mirador de Plaza Francia (4.100 msnm), con vista a la imponente cara sur del Aconcagua. Retorno al campamento en Confluencia. Noche en carpas.",
        altitud: 4100,
        alojamiento: "carpas en Confluencia",
        comidas: ["noche en carpas"],
        actividades_especiales: ["Aclimatación", "Mirador Plaza Francia", "Vista cara sur Aconcagua"]
    },
    {
        id_itinerario: 6,
        dia: 4,
        titulo: "Ascenso a Plaza de Mulas",
        descripcion: "Trekking de aproximación hasta Plaza de Mulas (4.350 msnm), el campamento base más grande de Sudamérica. Instalación del campamento, cena y pernocte en carpas.",
        altitud: 4350,
        alojamiento: "carpas",
        comidas: ["cena", "pernocte"],
        actividades_especiales: ["Campamento base más grande de Sudamérica"]
    },
    {
        id_itinerario: 6,
        dia: 5,
        titulo: "Día de descanso en Plaza de Mulas",
        descripcion: "Día de descanso en Plaza de Mulas. Tiempo para hidratación, recuperación y adaptación progresiva a la altitud. Breves caminatas por la zona.",
        altitud: 4350,
        alojamiento: "carpas",
        actividades_especiales: ["Descanso", "Aclimatación", "Hidratación"]
    },
    {
        id_itinerario: 6,
        dia: 6,
        titulo: "Porteo al Campo 2",
        descripcion: "Jornada de porteo de equipo al Campo 2 - Nido de Cóndores (5.550 msnm). Descenso al final del día nuevamente a Plaza de Mulas. Noche en carpas.",
        altitud: 5550,
        alojamiento: "carpas en Plaza de Mulas",
        comidas: ["noche en carpas"],
        actividades_especiales: ["Porteo", "Nido de Cóndores"]
    },
    {
        id_itinerario: 6,
        dia: 7,
        titulo: "Día de descanso",
        descripcion: "Día de descanso en Plaza de Mulas, para favorecer la aclimatación y recuperación antes de continuar el ascenso.",
        altitud: 4350,
        alojamiento: "carpas",
        actividades_especiales: ["Descanso", "Recuperación", "Aclimatación"]
    },
    {
        id_itinerario: 6,
        dia: 8,
        titulo: "Ascenso al Campo 2",
        descripcion: "Ascenso al Campo 2 - Nido de Cóndores (5.550 msnm). Instalación del campamento, cena y pernocte en carpas de altura.",
        altitud: 5550,
        alojamiento: "carpas de altura",
        comidas: ["cena", "pernocte"]
    },
    {
        id_itinerario: 6,
        dia: 9,
        titulo: "Descanso en Nido de Cóndores",
        descripcion: "Día de descanso en Nido de Cóndores. Momento clave para adaptarse mejor al ambiente de altura extrema.",
        altitud: 5550,
        alojamiento: "carpas de altura",
        actividades_especiales: ["Adaptación altura extrema"]
    },
    {
        id_itinerario: 6,
        dia: 10,
        titulo: "Ascenso al Campo 3",
        descripcion: "Ascenso al Campo 3 - Cólera (5.970 msnm), último campamento de altura antes del intento de cumbre. Instalación de campamento y pernocte.",
        altitud: 5970,
        alojamiento: "campamento",
        actividades_especiales: ["Último campamento antes de cumbre"]
    },
    {
        id_itinerario: 6,
        dia: 11,
        titulo: "Intento de cumbre",
        descripcion: "Intento de cumbre: ascenso al Aconcagua (6.960 msnm). Jornada larga y exigente. Regreso al Campo 3 para pernoctar.",
        altitud: 6969,
        alojamiento: "Campo 3",
        intensidad: "muy exigente",
        actividades_especiales: ["Cumbre Aconcagua", "Cerro más alto de América"]
    },
    {
        id_itinerario: 6,
        dia: 12,
        titulo: "Descenso a Plaza de Mulas",
        descripcion: "Descenso hasta Plaza de Mulas (4.350 msnm). Pernocte en campamento base.",
        altitud: 4350,
        alojamiento: "campamento base"
    },
    {
        id_itinerario: 6,
        dia: 13,
        titulo: "Descenso final",
        descripcion: "Descenso final hacia Puquios (2.800 msnm), donde finalizamos la expedición en el centro logístico. Traslado en vehículo a Mendoza (opcional según logística y horario).",
        altitud: 2800,
        comidas: ["traslado a Mendoza"]
    },
    {
        id_itinerario: 6,
        dia: 14,
        titulo: "Día extra 1",
        descripcion: "El programa contempla 2 días extra que podrán ser utilizados en cualquier punto estratégico del itinerario, generalmente en los campamentos de altura, para absorber eventuales retrasos por cuestiones climáticas o para mejorar la aclimatación del equipo.",
        actividades_especiales: ["Día de contingencia", "Flexibilidad climática"]
    },
    {
        id_itinerario: 6,
        dia: 15,
        titulo: "Día extra 2",
        descripcion: "Estos días son clave para optimizar las chances de éxito y garantizar la seguridad de todos los integrantes.",
        actividades_especiales: ["Día de contingencia", "Optimización de éxito"]
    }
];

export const itinerarioTuzgle: ItinerarioDia[] = [
    {
        id_itinerario: 7,
        dia: 1,
        titulo: "Encuentro en San Antonio de los Cobres",
        descripcion: "Encuentro en San Antonio de los Cobres a las 15:00 h. Bienvenida, briefing, revisión de equipo y tiempo libre para recorrer el lugar. Cena y pernocte en hostería (según disponibilidad). San Antonio de los Cobres es una de las localidades más altas de Argentina y un centro clave para la cultura andina.",
        hora_inicio: "15:00",
        altitud: 3760,
        alojamiento: "hostería",
        comidas: ["cena", "pernocte"],
        actividades_especiales: ["Briefing", "Revisión de equipo", "Tiempo libre para recorrer el lugar", "Cultura andina"]
    },
    {
        id_itinerario: 7,
        dia: 2,
        titulo: "Trekking de aclimatación",
        descripcion: "Trekking de aclimatación al mirador del Cerro Terciopelo y ascenso al Cerro Pompeya (4.050 m). Día fundamental para la adaptación progresiva a la altitud. Vista panorámica de los salares y formaciones geológicas milenarias. Cena y pernocte en hostería.",
        altitud: 4050,
        alojamiento: "hostería",
        comidas: ["cena", "pernocte"],
        actividades_especiales: ["Aclimatación", "Mirador Cerro Terciopelo", "Ascenso Cerro Pompeya", "Vista panorámica de salares"]
    },
    {
        id_itinerario: 7,
        dia: 3,
        titulo: "Traslado a base del volcán Tuzgle",
        descripcion: "Traslado en vehículos 4x4 hasta la base del volcán Tuzgle (4.500 m). Ingreso al entorno del estratovolcán inactivo con vistas de los paisajes de contrastes entre la aridez del desierto de altura y la diversidad de suelos volcánicos. Armado de campamento y pernocte en tiendas de montaña.",
        altitud: 4500,
        alojamiento: "campamento base",
        comidas: ["pernocte"],
        actividades_especiales: ["Traslado en vehículos 4x4", "Armado de campamento", "Estratovolcán inactivo", "Paisajes volcánicos"]
    },
    {
        id_itinerario: 7,
        dia: 4,
        titulo: "Descanso y aclimatación en campamento base",
        descripcion: "Día de descanso y aclimatación en el campamento base (4.500 m). Momento clave para adaptarse al ambiente de altura extrema y condiciones de la Puna de Atacama. Opción de mover equipo al Campo 1 o visita a termas según condiciones climáticas. Pernocte en tiendas de montaña.",
        altitud: 4500,
        alojamiento: "campamento base",
        comidas: ["pernocte"],
        actividades_especiales: ["Aclimatación", "Adaptación altura extrema", "Opción C1 o termas según clima", "Puna de Atacama"]
    },
    {
        id_itinerario: 7,
        dia: 5,
        titulo: "Ascenso a la cumbre del volcán Tuzgle",
        descripcion: "Intento de cumbre: ascenso al volcán Tuzgle (5.530 m), punto más alto de la expedición. Jornada larga y exigente en condiciones de altura extrema, con temperaturas que pueden descender hasta -15°C. Vista panorámica única del altiplano andino. Descenso a San Antonio de los Cobres. Cena de despedida y pernocte en hostería. Fin del programa.",
        altitud: 5530,
        alojamiento: "hostería",
        comidas: ["cena de despedida", "pernocte"],
        intensidad: "muy exigente",
        actividades_especiales: ["Cumbre", "Volcán Tuzgle", "Vista altiplano andino", "Descenso", "Fin del programa", "Cena de despedida"]
    },
    {
        id_itinerario: 7,
        dia: 6,
        titulo: "Regreso a Salta",
        descripcion: "Traslado de regreso a la ciudad de Salta. Finalización de la expedición al volcán Tuzgle en la Puna de Atacama.",
        actividades_especiales: ["Traslado de regreso", "Finalización expedición"]
    }
];

export const itinerarioQuewar: ItinerarioDia[] = [
    {
        id_itinerario: 8,
        dia: 1,
        titulo: "Encuentro en Salta",
        descripcion: "Encuentro en la ciudad de Salta a las 9:00 h. Bienvenida, briefing general, revisión de equipo. Traslado en vehículo privado a San Antonio de los Cobres (3.775 m), tarde libre para recorrer el lugar. Cena regional y pernocte en hostería en San Antonio de los Cobres (SAC).",
        hora_inicio: "09:00",
        altitud: 3775,
        alojamiento: "hostería",
        comidas: ["cena regional", "pernocte"],
        actividades_especiales: ["Briefing general", "Revisión de equipo", "Traslado privado", "Tarde libre"]
    },
    {
        id_itinerario: 8,
        dia: 2,
        titulo: "Trekking de aclimatación al Cerro Pompeya",
        descripcion: "Trekking de aclimatación al Cerro Pompeya (4.050 m). Primera jornada de adaptación a la altitud en la Puna de Atacama. Regreso, cena regional y pernocte en hostería en SAC.",
        duracion_horas: "4hs",
        altitud: 4050,
        alojamiento: "hostería",
        comidas: ["cena regional", "pernocte"],
        actividades_especiales: ["Aclimatación", "Cerro Pompeya", "Adaptación Puna de Atacama"]
    },
    {
        id_itinerario: 8,
        dia: 3,
        titulo: "Trekking de aclimatación al Cerro Negro",
        descripcion: "Trekking de aclimatación al Cerro Negro (5.050 m). Jornada clave de aclimatación a los 5.000 metros, preparando el cuerpo para las altitudes extremas del Quewar. Regreso, cena y pernocte en hostería en SAC.",
        duracion_horas: "6-8hs",
        distancia_km: 10,
        desnivel_metros: 1100,
        altitud: 5050,
        alojamiento: "hostería",
        comidas: ["cena", "pernocte"],
        intensidad: "moderada-exigente",
        actividades_especiales: ["Aclimatación 5000m", "Cerro Negro", "Preparación para altura extrema"]
    },
    {
        id_itinerario: 8,
        dia: 4,
        titulo: "Traslado a Santa Rosa de los Pastos Grandes",
        descripcion: "Traslado en vehículo a Santa Rosa de los Pastos Grandes (4.000 m), punto de partida hacia el Volcán Quewar. Armado de campamento base en entorno de salares y lagunas altoandinas. Tiempo libre para descanso y últimas preparaciones. Pernocte en tiendas de montaña.",
        altitud: 4000,
        alojamiento: "campamento base",
        comidas: ["pernocte"],
        actividades_especiales: ["Traslado en vehículo", "Armado campamento base", "Entorno de salares", "Últimas preparaciones"]
    },
    {
        id_itinerario: 8,
        dia: 5,
        titulo: "Trekking al Campo 1",
        descripcion: "Trekking hasta el Campo 1 (4.830 m). Primera jornada de aproximación al gigante Quewar, adentrándose en el paisaje remoto y sobrecogedor del volcán. Armado del campamento y pernocte en tiendas de montaña.",
        duracion_horas: "6-8hs",
        distancia_km: 12,
        desnivel_metros: 830,
        altitud: 4830,
        alojamiento: "campamento",
        comidas: ["pernocte"],
        intensidad: "moderada-exigente",
        actividades_especiales: ["Aproximación al Quewar", "Paisaje remoto", "Primer campamento de altura"]
    },
    {
        id_itinerario: 8,
        dia: 6,
        titulo: "Porteo de equipo al Campo 2",
        descripcion: "Porteo de equipo al Campo 2 (5.350 m). Jornada intensa de carga de equipamiento hacia mayor altitud, estrategia clave para la aclimatación. Retorno al Campo 1. Pernocte en tiendas de montaña.",
        duracion_horas: "6-8hs",
        distancia_km: 8,
        desnivel_metros: 520,
        altitud: 5350,
        alojamiento: "Campo 1",
        comidas: ["pernocte"],
        intensidad: "exigente",
        actividades_especiales: ["Porteo", "Estrategia de aclimatación", "Retorno al C1"]
    },
    {
        id_itinerario: 8,
        dia: 7,
        titulo: "Día de descanso y recuperación",
        descripcion: "Día de descanso y recuperación en Campo 1. Momento fundamental para que el organismo se adapte a la altura extrema y recupere energías antes de continuar el ascenso hacia el Quewar. Pernocte en tiendas de montaña.",
        altitud: 4830,
        alojamiento: "Campo 1",
        comidas: ["pernocte"],
        actividades_especiales: ["Descanso", "Recuperación", "Adaptación altura extrema"]
    },
    {
        id_itinerario: 8,
        dia: 8,
        titulo: "Ascenso al Campo 2",
        descripcion: "Ascenso al Campo 2 (5.350 m). Instalación de campamento en altura extrema, último punto antes del intento de cumbre. Vista panorámica de la inmensidad de la Puna. Instalación de campamento y pernocte en tiendas de montaña.",
        duracion_horas: "4hs",
        distancia_km: 4,
        desnivel_metros: 520,
        altitud: 5350,
        alojamiento: "campamento",
        comidas: ["pernocte"],
        actividades_especiales: ["Campamento altura extrema", "Vista panorámica Puna", "Último punto antes cumbre"]
    },
    {
        id_itinerario: 8,
        dia: 9,
        titulo: "Intento de cumbre del Volcán Quewar",
        descripcion: "Intento de cumbre del Volcán Quewar (6.140 m). Jornada culminante y más exigente de la expedición. Ascenso al gigante solitario que domina la Puna de Atacama, experiencia profundamente transformadora en paisaje de aislamiento absoluto. Regreso al Campo 2. Pernocte en tiendas de montaña.",
        duracion_horas: "10-12hs",
        distancia_km: 6,
        desnivel_metros: 790,
        altitud: 6140,
        alojamiento: "Campo 2",
        comidas: ["pernocte"],
        intensidad: "muy exigente",
        actividades_especiales: ["Cumbre", "Volcán Quewar", "Gigante solitario", "Experiencia transformadora", "Aislamiento absoluto"]
    },
    {
        id_itinerario: 8,
        dia: 10,
        titulo: "Descenso a Santa Rosa y traslado",
        descripcion: "Descenso hasta Santa Rosa de los Pastos Grandes. Jornada larga de descenso atravesando todos los ambientes de la expedición. Traslado a San Antonio de los Cobres. Cena de despedida y pernocte en hostería.",
        duracion_horas: "6hs",
        distancia_km: 16,
        desnivel_metros: 1350,
        altitud: 3775,
        alojamiento: "hostería",
        comidas: ["cena de despedida", "pernocte"],
        actividades_especiales: ["Descenso completo", "Travesía ambientes", "Cena de despedida"]
    },
    {
        id_itinerario: 8,
        dia: 11,
        titulo: "Regreso a Salta",
        descripcion: "Regreso a la ciudad de Salta. Fin del programa de expedición al Volcán Quewar en la Puna de Atacama.",
        actividades_especiales: ["Traslado de regreso", "Fin del programa", "Finalización expedición Quewar"]
    }
];