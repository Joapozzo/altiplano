import { User, Mountain, Award } from "lucide-react";

export const categories = {
    principiantes: {
        title: "Nivel inicial",
        subtitle: "Si es tu primera vez en la montaña o tenés poca experiencia",
        icon: User,
        color: "yellow",
        faqs: [
            {
                id: 1,
                pregunta: "¿Necesito tener experiencia previa en montaña para sumarme a una salida?",
                respuesta: "No, muchas de nuestras experiencias están pensadas para personas que se están iniciando. Lo importante es elegir una salida adecuada a tu nivel, y para eso te asesoramos de forma personalizada antes de que te inscribas."
            },
            {
                id: 2,
                pregunta: "¿Cómo saber si esta experiencia es adecuada para mí?",
                respuesta: "Te ofrecemos una charla de orientación gratuita donde conversamos sobre tu experiencia, tu estado físico y tus objetivos. Nuestra misión es ayudarte a elegir la propuesta que mejor se adapte a vos, para que disfrutes de una experiencia con seguridad y confianza."
            },
            {
                id: 3,
                pregunta: "¿Qué pasa si no tengo todo el equipo? ¿Me ayudan a organizar mi mochila?",
                respuesta: "Sí, al momento de reservar te enviamos una lista detallada del equipo necesario. Te acompañamos a revisar lo que tenés, te orientamos sobre qué podés alquilar o conseguir, y te damos recomendaciones para organizarte sin estrés."
            },
            {
                id: 4,
                pregunta: "¿Con cuánta anticipación tengo que reservar?",
                respuesta: "Recomendamos reservar con al menos 3 a 4 meses de anticipación. Ese tiempo te permite ajustar tu entrenamiento, conseguir el equipo necesario y planificar traslados sin apuros y a mejores precios. Trabajamos con grupos reducidos a propósito, porque creemos que una experiencia transformadora requiere atención personalizada."
            },
            {
                id: 5,
                pregunta: "¿Cuál es la diferencia entre trekking y montañismo?",
                respuesta: "El trekking es una caminata en la naturaleza, generalmente por senderos marcados, sin necesidad de equipo técnico. El montañismo implica mayor exigencia física y técnica, y suele desarrollarse en terrenos más agrestes o en altura, incluyendo el uso de equipo específico como crampones, casco o cuerda."
            }
        ]
    },
    intermedio: {
        title: "Nivel medio",
        subtitle: "Si ya hiciste alguna experiencia de trekking o montaña y querés avanzar",
        icon: Mountain,
        color: "amber",
        faqs: [
            {
                id: 6,
                pregunta: "¿Qué pasa si el clima cambia durante la expedición?",
                respuesta: "En montaña, el clima puede ser variable y el 'mal tiempo' forma parte de la experiencia. No solemos suspender la actividad salvo en situaciones de fuerza mayor que pongan en riesgo la seguridad. Nuestro equipo guía monitorea constantemente el pronóstico y las condiciones reales para ajustar el plan si es necesario."
            },
            {
                id: 7,
                pregunta: "¿Qué pasa si no puedo continuar la caminata durante la expedición?",
                respuesta: "Si no podés o no querés continuar el ascenso, organizamos el descenso para acompañarte y garantizar tu seguridad. Si el motivo es un problema médico, activamos el protocolo de evacuación hasta el centro de salud más cercano. Nuestros guías están capacitados para manejar estas situaciones con cuidado y acompañamiento."
            },
            {
                id: 8,
                pregunta: "¿Hacen salidas privadas o a medida?",
                respuesta: "Sí, diseñamos propuestas personalizadas para personas solas, parejas, grupos de amigos o empresas. Se pueden ajustar la dificultad, los días, el nivel de servicio y los objetivos de la salida. Contactanos y armamos juntos tu experiencia."
            },
            {
                id: 9,
                pregunta: "¿Qué pasa si no llego a la cumbre? ¿Cómo manejan la dinámica en expediciones de alta montaña?",
                respuesta: "En montaña, siempre hay variables que pueden impedir llegar a la cumbre: clima, fatiga, malestar físico o decisiones del equipo guía para cuidar la seguridad. En Altiplano trabajamos con un ratio de 1 guía cada 2 personas en alta montaña, lo que nos permite acompañar de forma personalizada y adaptarnos si alguien no puede continuar."
            },
            {
                id: 10,
                pregunta: "¿Hay opciones para personas vegetarianas o con restricciones alimenticias?",
                respuesta: "Sí, ofrecemos menús adaptados. Al momento de reservar, podés informarnos tus preferencias o restricciones (vegetariana, vegana, sin TACC, etc.) y adaptamos la propuesta dentro de lo posible según el tipo de logística de la salida."
            }
        ]
    },
    avanzado: {
        title: "Nivel avanzado",
        subtitle: "Si ya tenés experiencia en montaña y buscás información técnica",
        icon: Award,
        color: "orange",
        faqs: [
            {
                id: 11,
                pregunta: "¿Qué es el MAM (Mal Agudo de Montaña) y cómo prevenirlo?",
                respuesta: "El Mal Agudo de Montaña es una patología asociada a la exposición a gran altitud. Se previene con estrategias de aclimatación: dosificación de la actividad, hidratación constante, descanso adecuado y alimentación apropiada. Mantenemos seguimiento permanente del estado de cada persona y tomamos decisiones a tiempo para cuidar la salud del grupo."
            },
            {
                id: 12,
                pregunta: "¿Puedo hacer alta montaña con botas simples rígidas? ¿Qué calzado recomiendan?",
                respuesta: "Sí, en algunos casos es posible usar botas simples rígidas, pero depende del tipo de salida, la época del año y tu experiencia previa. Siempre evaluamos cada caso para asesorarte la mejor opción según las condiciones y tu nivel."
            },
            {
                id: 13,
                pregunta: "¿Puedo gestionar la alimentación por mi cuenta durante la expedición?",
                respuesta: "En general, recomendamos que la alimentación sea gestionada por nuestro equipo, ya que está planificada cuidadosamente para cubrir todas las necesidades energéticas y logísticas. Si tenés experiencia en este tipo de gestión y sabés cómo planificar y transportar correctamente tu comida, podemos evaluarlo juntos."
            },
            {
                id: 14,
                pregunta: "Tengo vehículo propio, ¿es posible descontar el valor del traslado?",
                respuesta: "En general, no recomendamos utilizar vehículo propio para las experiencias, especialmente en expediciones de alta montaña. Se subestima el estado del camino, las habilidades requeridas para manejo off road, y las condiciones climáticas. Llegar por cuenta propia implica un esfuerzo extra que puede afectar tu rendimiento en la actividad."
            }
        ]
    }
};