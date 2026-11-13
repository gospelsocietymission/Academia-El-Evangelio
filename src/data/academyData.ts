import { AcademicProgram, DoctrinalPoint, ConferenceEvent, FaqItem, PhysicalBranch, MissionaryProject, MinistryPartner, FacultyMember, Testimonial } from '../types';

export const INSTITUTION_INFO = {
  name: "Academia Bíblica El Evangelio",
  domain: "academiabiblica.net",
  officialUrl: "https://academiabiblica.net",
  sourceSite: "https://sites.google.com/view/academiabiblicaelevangelio/home",
  sourceQuienesSomos: "https://sites.google.com/view/academiabiblicaelevangelio/quienes-somos",
  sourceProgramas: "https://sites.google.com/view/academiabiblicaelevangelio/programas",
  motto: "Nuestra misión es educar",
  email: "gospelsocietymission@gmail.com",
  phone: "+505 8934-1763",
  whatsappRaw: "50589341763",
  whatsappText: "Hola, deseo recibir información sobre las inscripciones y programas de la Academia Bíblica El Evangelio.",
  region: "Centroamérica (El Salvador, Nicaragua, Guatemala, Honduras, Costa Rica)",
  accreditation: "Nivel Técnico Universitario con Validez Nacional e Internacional",
  biblicalVerse: {
    text: "Lo que has oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a otros.",
    reference: "2 Timoteo 2:2"
  },
  founder: {
    name: "Pastor Isaías Martínez",
    role: "Fundador de Academia Bíblica El Evangelio",
    startYear: 2004,
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/isaias.jpg",
    quote: "Mientras he viajado por muchos países descubrí la urgente necesidad de llevar educación bíblica de manera profunda, pero con lenguaje local y verdaderamente entendible en sus propios contextos.",
    bio: "Desde el año 2004, el hermano y Pastor Isaías Martínez ha recorrido incansablemente aldeas, cantones, montañas y ciudades de Centroamérica y el continente americano, sembrando la semilla de la educación teológica contextualizada para obreros y pastores que no tienen acceso a seminarios convencionales.",
    mapEmbedUrl: "https://www.google.com/maps/d/embed?mid=1ijD8MLhiJUTGl5WNLDrsPcad2Lxh0T4",
    mapViewerUrl: "https://www.google.com/maps/d/viewer?mid=1ijD8MLhiJUTGl5WNLDrsPcad2Lxh0T4"
  }
};

/**
 * Builds a direct WhatsApp link with prefilled text
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${INSTITUTION_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const PHYSICAL_BRANCHES: PhysicalBranch[] = [
  {
    id: "ahuachapan",
    country: "El Salvador",
    city: "Ahuachapán",
    fullLocation: "Ahuachapán, El Salvador",
    type: "Sede Central y Formación Ministerial",
    description: "Punto de encuentro regional en las estribaciones cafetaleras del occidente salvadoreño para clases presenciales mensuales, laboratorios de predicación y coordinación eclesial.",
    ruralImage: "https://cdn.getyourguide.com/img/tour/ccbc355802600e9bb2d86c6e9d843032cc3c81c0808e42627a2c56981846d37f.jpeg/68.jpg"
  },
  {
    id: "chinandega",
    country: "Nicaragua",
    city: "Chinandega",
    fullLocation: "Chinandega, Nicaragua",
    type: "Sede Regional de Estudios",
    description: "Centro de distribución de folletos didácticos y reuniones mensuales de formación teológica en las fértiles llanuras agrícolas y faldas del volcán San Cristóbal.",
    ruralImage: "https://www.mapanicaragua.com/wp-content/uploads/2020/05/volcan-san-cristobal-1.jpg"
  },
  {
    id: "tipitapa",
    country: "Nicaragua",
    city: "Tipitapa",
    fullLocation: "Tipitapa, Nicaragua",
    type: "Sede de Capacitación Pastoral",
    description: "Espacio formativo para pastores de comunidades rurales del valle lacustre y zonas periféricas, con talleres prácticos de homilética y hermenéutica.",
    ruralImage: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/tipitapa.jpeg"
  },
  {
    id: "cartago",
    country: "Costa Rica",
    city: "Cartago",
    fullLocation: "Cartago, Costa Rica",
    type: "Sede Académica Regional",
    description: "Coordinación de estudiantes por correspondencia y tutorías presenciales en los valles verdes y montañosos de la meseta central costarricense.",
    ruralImage: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/Cartago.png"
  },
  {
    id: "tacana",
    country: "Guatemala",
    city: "Tacaná",
    fullLocation: "Tacaná, San Marcos, Guatemala",
    type: "Centro de Estudios y Biblioteca",
    description: "Sede estratégica en el altiplano montañoso indígena cerca de la frontera con México; hogar de estudio y refugio formativo para más de 100 estudiantes cada mes.",
    ruralImage: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/tacana.jpeg"
  },
  {
    id: "san-lorenzo",
    country: "Honduras",
    city: "San Lorenzo",
    fullLocation: "San Lorenzo, Valle, Honduras",
    type: "Centro Misionero y Formativo",
    description: "Base de entrenamiento misionero rural en el sur hondureño cerca del Golfo de Fonseca, combinando teología práctica con supervivencia diaria en el campo.",
    ruralImage: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/san%20lorenzo.jpeg"
  }
];

export const MISSIONARY_PROJECTS: MissionaryProject[] = [
  {
    id: "el-crucero-nicaragua",
    title: "Eco-Well Health El Crucero",
    location: "El Crucero",
    country: "Nicaragua",
    category: "Salud Integral y Adicciones Conductuales",
    image: "https://images.trvl-media.com/place/553248635974587720/625f08fd-7bb9-47d9-87fa-1c2d6deca7b9.jpg",
    description: "En Eco-Well Health somos un espacio dedicado al aprendizaje y acompañamiento especializado en adicciones conductuales. Brindamos herramientas prácticas para ayudar a las personas a retomar el control frente a las adicciones a los videojuegos, las redes sociales y las compras impulsivas en internet. Además, contamos con un programa premium enfocado en sanar y superar la codependencia maternal, paternal o conyugal.",
    missionaryCall: "Buscamos misioneros y consejeros con vocación de acompañamiento espiritual y psicológico-pastoral para apoyar talleres de recuperación, prevención y mentoría a jóvenes y familias afectadas.",
    needs: [
      "Consejeros bíblicos y acompañantes espirituales.",
      "Líderes de talleres para jóvenes y adolescentes.",
      "Facilitadores en sanidad de relaciones y codependencia."
    ]
  },
  {
    id: "cheguate-tacana-guatemala",
    title: "Centro de Estudios y Biblioteca \"El Evangelio\"",
    location: "Cheguate, Tacaná",
    country: "Guatemala",
    category: "Educación Teológica y Biblioteca Fronteriza",
    image: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/tacana.jpeg",
    description: "Nuestra biblioteca y centro de estudios sirve como un hogar de apoyo para 11 institutos bíblicos en las zonas aledañas de Guatemala y México. Aquí, los estudiantes encuentran un refugio tranquilo para desconectarse del día a día, orar y concentrarse en su formación. Además, este mismo espacio es la sede de nuestra academia, donde cada mes reunimos a más de 100 personas para sumergirse en un estudio bíblico intensivo de 20 horas continuas.",
    missionaryCall: "Invitamos a misioneros maestros, catalogadores de bibliotecas teológicas y predicadores dispuestos a ministrar en las jornadas intensivas de 20 horas con más de 100 estudiantes reunidos.",
    needs: [
      "Maestros bíblicos itinerantes para módulos intensivos de 20 horas.",
      "Voluntarios para organización y cuidado de la biblioteca teológica.",
      "Apoyo logístico y pastoral para los 11 institutos bíblicos beneficiarios."
    ]
  },
  {
    id: "san-lorenzo-honduras",
    title: "Centro Misionero \"Heme aquí, envíame a mí\"",
    location: "San Lorenzo, Valle",
    country: "Honduras",
    category: "Entrenamiento Misionero Rural y Práctico",
    image: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/centromisionero.png",
    description: "El centro de misiones 'Heme aquí, envíame a mí' es el lugar perfecto para dar tus primeros pasos en el mundo misionero rural. Aquí, los estudiantes se internan durante varios días para vivir una experiencia transformadora que va mucho más allá de los libros. Aprenderás desde teología práctica hasta habilidades esenciales de supervivencia diaria, asegurando una preparación real y completa para el campo misionero.",
    missionaryCall: "Convocamos a misioneros veteranos, instructores de campo y colaboradores que deseen discipular a nuevas generaciones de obreros que irán a las aldeas más remotas de Centroamérica.",
    needs: [
      "Misioneros de campo para talleres de supervivencia y teología práctica.",
      "Capacitadores en primeros auxilios y autosostenimiento rural.",
      "Padrinos de becas y provisiones para estudiantes internos."
    ]
  },
  {
    id: "clinica-cisneros-el-salvador",
    title: "Clínica de Salud Dr. Cisneros",
    location: "El Salvador",
    country: "El Salvador",
    category: "Consejería en Salud, Segunda Opinión y Educación Médica",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    description: "Es un centro de consejería, educación en Salud donde le ayudamos a los usuarios a entender su diagnóstico, guiarles sobre a qué especialista acudir o cómo moverse dentro de la Red Integrada de Servicios de Salud (pública o privada). Les ayudamos a obtener una Segunda Opinión y Auditoría Médica/Educativa: Orientar a familias sobre la validez de tratamientos complejos o cómo sobrellevar enfermedades crónicas. Además de nuestro constante trabajo en Talleres educativos, evaluación de riesgos laborales o comunitarios, y conexión con redes de apoyo social.",
    missionaryCall: "Invitamos a profesionales de la salud, médicos, enfermeros(as) y educadores comunitarios con vocación de servicio cristiano a sumarse a nuestras brigadas y talleres de orientación médica preventiva.",
    needs: [
      "Médicos y especialistas voluntarios para segundas opiniones y orientación.",
      "Educadores en salud comunitaria y prevención de enfermedades crónicas.",
      "Colaboradores para talleres comunitarios y canalización social."
    ]
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "consejeria-biblica",
    title: "Consejería Bíblica",
    subtitle: "Un Llamado a la Formación Espiritual y Acompañamiento en Crisis",
    description: "Vivimos en un mundo que, como describe el apóstol Santiago, es 'animal y diabólico'. Los sistemas visibles están influenciados por mentes controladas por el mal. Sin embargo, los creyentes sabemos que somos extranjeros en este mundo y que nuestro destino final es el cielo. Este programa capacita a pastores y líderes para manejar casos complejos, guiando a la congregación en cómo Dios actúa en cada situación.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
    badge: "Técnico Universitario",
    duration: "12 Meses (4 Ciclos Trimestrales)",
    modality: "Por correspondencia + 1 Encuentro mensual práctico",
    modulesCount: 6,
    highlightObjective: "Capacitar a pastores y líderes para identificar y resolver conflictos, brindar consejería en momentos de crisis personal y familiar, discernimiento espiritual y fortalecimiento de la fe en la prueba.",
    curriculum: [
      {
        code: "CB-101",
        name: "Identificación y Resolución de Conflictos en la Congregación",
        description: "Diagnóstico bíblico de disputas, pacificación pastoral y aplicación de la gracia en la iglesia local.",
        hours: "40 horas"
      },
      {
        code: "CB-102",
        name: "Consejería Pastoral para Momentos de Crisis Personal y Familiar",
        description: "Contención bíblica ante pérdidas repentinas, rupturas conyugales y restauración de hogares.",
        hours: "40 horas"
      },
      {
        code: "CB-103",
        name: "Discernimiento Espiritual frente a Desafíos y Decisiones",
        description: "Herramientas para guiar a los creyentes a descubrir la soberana voluntad de Dios sin caer en misticismos.",
        hours: "40 horas"
      },
      {
        code: "CB-104",
        name: "Fortalecimiento de la Fe y Perseverancia en Tiempos de Prueba",
        description: "Cómo sobrellevar el sufrimiento agudo, la aflicción y las pruebas prolongadas con esperanza firme en Cristo.",
        hours: "40 horas"
      },
      {
        code: "CB-105",
        name: "El Papel del Pastor y Líder en el Acompañamiento Espiritual",
        description: "Límites pastorales, confidencialidad, ética del consejero y cuidado de la salud emocional del siervo de Dios.",
        hours: "40 horas"
      },
      {
        code: "CB-106",
        name: "Cómo Enseñar a los Creyentes a Ver la Mano de Dios en la Dificultad",
        description: "Laboratorio clínico de consejería, estudio de casos reales en comunidades rurales y aplicación práctica.",
        hours: "40 horas"
      }
    ],
    profile: [
      "Pastores, ancianos y líderes con vocación de pastoreo y consejería.",
      "Líderes de matrimonios, jóvenes y ministerios femeniles.",
      "Obreros llamados a la visitación y cuidado personal de creyentes en crisis."
    ],
    requirements: [
      "Carta de recomendación de su pastor local.",
      "Entrevista simple con el representante nacional de la Academia.",
      "Compromiso de estudio mensual con folletos y asistencia al encuentro presencial."
    ]
  },
  {
    id: "predicacion-expositiva",
    title: "Predicación Expositiva",
    subtitle: "Desarrollo de habilidades para estudiar, estructurar y comunicar la Palabra de Dios",
    description: "Formación intensiva que prepara al predicador para desentrañar el significado original del texto bíblico, construir sermones ordenados y aplicarlos con fidelidad y unción a la vida de la congregación.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
    badge: "Técnico Universitario",
    duration: "12 Meses (4 Ciclos Trimestrales)",
    modality: "Por correspondencia + Talleres y Laboratorios de Púlpito",
    modulesCount: 6,
    highlightObjective: "Garantizar que el mensaje del púlpito sea el mensaje del texto bíblico, proclamado con convicción pastoral y relevancia comunitaria.",
    curriculum: [
      {
        code: "PE-201",
        name: "Hermenéutica Bíblica Práctica",
        description: "Principios sanos de interpretación gramático-histórica; evitando alegorizaciones y errores comunes de lectura.",
        hours: "40 horas"
      },
      {
        code: "PE-202",
        name: "Exégesis del Texto al Bosquejo",
        description: "Método inductivo de estudio: observación del texto, contexto literario e histórico, y formulación de la Idea Central.",
        hours: "40 horas"
      },
      {
        code: "PE-203",
        name: "Homilética y Arquitectura del Sermón",
        description: "Estructuración de introducciones cautivantes, divisiones lógicas, transiciones, ilustraciones y conclusiones de llamado.",
        hours: "40 horas"
      },
      {
        code: "PE-204",
        name: "Teología Bíblica: Predicando a Cristo en Toda la Biblia",
        description: "Cómo predicar el Antiguo Testamento y las Epístolas desde una perspectiva cristocéntrica y redentora.",
        hours: "40 horas"
      },
      {
        code: "PE-205",
        name: "Comunicación Efectiva, Voz y Pasión Pastoral",
        description: "Manejo de la voz, lenguaje corporal, conexión con oyentes de diversos niveles educativos y fervor espiritual.",
        hours: "40 horas"
      },
      {
        code: "PE-206",
        name: "Laboratorio de Predicación en Vivo",
        description: "Entrega de sermones ante el panel de profesores y compañeros de estudio, con evaluación constructiva en 360°.",
        hours: "40 horas"
      }
    ],
    profile: [
      "Pastores titulares y predicadores laicos de iglesias urbanas y rurales.",
      "Maestros de Escuela Dominical y líderes de células o misiones.",
      "Jóvenes y adultos con vocación docente y ministerial en la proclamación bíblica."
    ],
    requirements: [
      "Compromiso de lectura y estudio diario con la Biblia abierta.",
      "Disponibilidad para practicar sermones en su congregación o misión.",
      "Cumplimiento puntual de las tareas y cuestionarios de los folletos."
    ]
  },
  {
    id: "actualizacion-ministerial",
    title: "Actualización Ministerial",
    subtitle: "Capacitación continua para pastores y líderes con experiencia en el ministerio",
    description: "Un programa de vanguardia teológica y pastoral diseñado para renovar la visión, profundizar en la teología sistemática y equipar en la administración sabia de la grey a pastores en ejercicio.",
    // VERIFIED WORKING 200 OK IMAGE:
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    badge: "Técnico Universitario",
    duration: "12 Meses (4 Ciclos Trimestrales)",
    modality: "Por correspondencia + 1 Encuentro mensual de comunión y cátedra",
    modulesCount: 6,
    highlightObjective: "Renovar espiritualmente al siervo de Dios, brindándole sólidas defensas teológicas ante corrientes contemporáneas y herramientas de gestión eclesial.",
    curriculum: [
      {
        code: "AM-301",
        name: "Teología Sistemática y Doctrinas de la Gracia",
        description: "Repaso profundo de la soberanía de Dios, la soteriología bíblica y las grandes doctrinas históricas de la Reforma.",
        hours: "40 horas"
      },
      {
        code: "AM-302",
        name: "Cuidado Personal del Pastor y Prevención del Agotamiento",
        description: "Salud emocional, tiempo devocional personal, descanso sabático bíblico y protección de la familia pastoral.",
        hours: "40 horas"
      },
      {
        code: "AM-303",
        name: "Administración Eclesiástica y Mayordomía",
        description: "Gobierno de la iglesia, mayordomía financiera transparente, resolución de conflictos y orden institucional.",
        hours: "40 horas"
      },
      {
        code: "AM-304",
        name: "Apologética Contemporánea y Defensa de la Fe",
        description: "Cómo responder a herejías locales, falsas teologías de la prosperidad y el relativismo moral en la juventud.",
        hours: "40 horas"
      },
      {
        code: "AM-305",
        name: "Misiología y Plantación de Iglesias Rurales",
        description: "Estrategias de evangelismo personal, desarrollo de misiones y sostenimiento propio en comunidades con bajos recursos.",
        hours: "40 horas"
      },
      {
        code: "AM-306",
        name: "Discipulado Multiplicador y Mentoría de Sucesores",
        description: "Desarrollo de ancianos y diáconos idóneos según el modelo apostólico de 2 Timoteo 2:2.",
        hours: "40 horas"
      }
    ],
    profile: [
      "Pastores y obreros con 2 o más años de ministerio activo.",
      "Misioneros y plantadores de iglesias en el interior del país.",
      "Cuerpo de líderes y ancianos de congregaciones locales."
    ],
    requirements: [
      "Acreditar ejercicio pastoral o liderazgo activo en una iglesia local.",
      "Deseo de actualización teológica y disposición para el aprendizaje continuo.",
      "Participación activa en las mesas redondas mensuales."
    ]
  }
];

export const PROGRAMAS_PAGE_DATA = {
  metodoEstudio: {
    title: "Nuestro Método de Estudio por Correspondencia",
    descripcion: "Usamos el método de estudio por correspondencia diseñado para la autogestión del aprendizaje a su propio ritmo. El estudiante recibirá por cada materia 30 horas de video clases, y un folleto impreso con espacios en blanco donde podrá llevar control de su aprendizaje. El estudiante presentará un resumen de lo aprendido y pasando 4 semanas regresará para recibir otra materia. El estudiante deberá exponer lo que va aprendiendo al resto del grupo en nuestra Reunión mensual.",
    puntosClave: [
      "10% Teoría (30 horas de video previamente grabadas)",
      "90% Práctica (Encuentros mensuales con exposiciones y laboratorios)",
      "Folletos con espacios en blanco para escribir y reflexionar",
      "Extractos de libros para análisis y redacción teológica"
    ]
  },
  costos: {
    title: "Costos y Aportes Accesibles",
    resumen: "En nuestra institución no cobramos matrícula anual. Como organización sin fines de lucro, y gracias al apoyo de nuestros donantes, hemos logrado mantener los costos de estudio muy bajos.",
    rurales: {
      titulo: "Estudiantes que viven en Zonas Rurales",
      detalle: "Los estudiantes que viven en áreas rurales forman grupos de estudio y determinan un aporte significativo basado en sus necesidades específicas, como café, agua, papel, entre otros. Este aporte es flexible y nunca será un obstáculo para que alguien pueda acceder a la educación bíblica que ofrecemos."
    },
    urbanos: {
      titulo: "Estudiantes que no viven en zonas remotas",
      detalle: "Aquellos que residen en las ciudades o cuentan con mayores posibilidades económicas aportan algo significativo por cada materia inscrita. Estos pagos permiten cubrir los costos operativos de la Academia, contribuyendo a sostener el proyecto."
    },
    notaDonaciones: "Todos los pagos realizados no son reembolsables. Cualquier monto enviado a la Academia Bíblica se considera una donación voluntaria para apoyar nuestra misión como entidad sin fines de lucro."
  },
  admision: {
    title: "Proceso de Admisión Simple",
    descripcion: "Para ser admitido requerimos procesos simples; funcionamos a través de la iglesia local con representantes nacionales que acompañan todo el proceso:",
    pasos: [
      "Entrevista simple con el representante nacional de la Academia.",
      "Llenar el formulario en línea (si no sabe cómo hacerlo, el representante le ayudará).",
      "Carta de recomendación de un pastor que conozca bien al candidato y responda cuando se realice una breve entrevista pastoral."
    ]
  }
};

export const QUIENES_SOMOS_DATA = {
  titulo: "Quiénes Somos — Academia Bíblica El Evangelio",
  subtitulo: "Nuestra misión es educar y servir como recurso para la iglesia local",
  historia: "Conscientes de la urgente necesidad de impartir educación bíblica a hombres y mujeres apasionados por el Evangelio, pero que carecen de oportunidades de estudio debido a diversas limitaciones, un grupo destacado de líderes y pastores se ha unido en colaboración. Este esfuerzo busca alcanzar a estudiantes, pastores y líderes en zonas rurales de diversos países, lugares donde la enseñanza bíblica es más que un lujo: es una necesidad urgente y vital.",
  acreditacion: {
    titulo: "Acreditación de la Academia Bíblica El Evangelio",
    texto: "Dada la naturaleza religiosa de nuestros programas, estos están diseñados específicamente para cumplir con los requisitos ministeriales, basándonos en el principio bíblico: 'Por sus frutos los conoceréis' (Mateo 7:16). Nuestro objetivo principal es formar líderes cuya vida y ministerio reflejen el impacto transformador de su aprendizaje. Contamos con acreditación regional en los países donde operamos, con programas de calidad de técnico universitario avalados y reconocidos internacionalmente mediante convenios educativos.",
    apostilla: "Para facilitar el reconocimiento global, nuestros títulos pueden ser legalizados a través de la Apostilla de La Haya. Este proceso, que consiste en la estampación de un sello único, permite que los documentos emitidos por nuestra Academia sean válidos y aceptados en cualquier país que forme parte de este convenio internacional."
  },
  credenciales: {
    titulo: "Credenciales: Quienes Hablan por Nosotros",
    texto: "Nuestra mejor carta de presentación son las declaraciones documentadas que respaldan los programas de la Academia Bíblica El Evangelio. Estas declaraciones, expedidas por diversas instituciones educativas, iglesias y pastores, dan testimonio de la calidad y el impacto de nuestra labor. Avalan que somos una academia bíblica independiente, comprometida como un recurso valioso para la iglesia local, sin fines de lucro y con un enfoque educativo dedicado al sector religioso."
  },
  avales: {
    titulo: "Reconocimiento: Nuestros Avales Académicos",
    texto: "La Academia Bíblica El Evangelio es una institución teológica reconocida por diversas iglesias, pastores, asociaciones, convenciones, sínodos y presbiterios. Nuestros profesores y mentores son destacados por su trayectoria ministerial y su experiencia en las áreas de estudio que imparten. Con un espíritu de amor y servicio, participan sin recibir remuneración económica (ad-honorem), contribuyendo generosamente al desarrollo colegiado de nuestra academia."
  },
  filosofia: {
    titulo: "Nuestra Filosofía: Principios Eclesiológicos",
    texto: "Creemos firmemente que la Iglesia es la institución ordenada por Dios para educar y equipar a sus miembros. Aunque los seminarios han desempeñado un papel valioso en apoyar esta función, nuestra convicción es adherirnos al principio bíblico de una educación centrada en la Iglesia y basada en mentores (Efesios 4:11-12). Los pastores tienen el llamado y la responsabilidad de discipular a los futuros pastores.",
    doctrina: "Si bien ofrecemos estudios abiertos a todas las denominaciones evangélicas, nuestro estándar doctrinal está fundamentado en las enseñanzas de los reformadores del siglo XVI, un tiempo en que aún no existían las denominaciones que conocemos hoy. Promovemos la unidad en torno al mensaje central del Evangelio."
  },
  legal: {
    titulo: "Administración y Operatividad Legal",
    texto: "Nuestra administración y operatividad en cada país donde estamos presentes se rigen bajo un marco legal formal, cumpliendo con los requisitos establecidos por los respectivos gobiernos. Este compromiso con la legalidad nos permite funcionar de manera transparente y estar plenamente habilitados para impartir educación y compartir enseñanzas sin restricciones."
  },
  facultad: {
    titulo: "¿Quiénes son Nuestros Colaboradores Educativos o Facultad Invitada?",
    texto: "Nuestros colaboradores educativos son pastores y líderes comprometidos con el llamado de enseñar la Palabra de Dios. A través de un permiso especial y firmado, nos permiten utilizar sus recursos educativos para integrarlos en nuestro programa. Son colaboradores honoríficos que participan sin remuneración económica, movidos únicamente por amor al Evangelio y pasión por equipar a otros."
  }
};

export const DOCTRINAL_POINTS: DoctrinalPoint[] = [
  {
    id: "escrituras",
    number: "01",
    title: "Las Sagradas Escrituras",
    summary: "Inspiración verbal y plenaria de los 66 libros del Antiguo y Nuevo Testamento, inerrantes en sus manuscritos originales y única regla suficiente e infalible de fe y conducta.",
    scriptureRef: "2 Timoteo 3:16-17; 2 Pedro 1:20-21",
    fullExplanation: "Creemos que la Biblia es la Palabra misma de Dios dada por inspiración divina a través de hombres santos guiados por el Espíritu Santo. Posee autoridad absoluta sobre la conciencia, la doctrina y la vida de la Iglesia, siendo enteramente digna de confianza en todo lo que afirma."
  },
  {
    id: "trinidad",
    number: "02",
    title: "El Dios Trino y Soberano",
    summary: "Un solo Dios vivo, eterno, omnisciente, omnipresente y omnipotente, que subsiste coesencialmente en tres personas distintas: el Padre, el Hijo y el Espíritu Santo.",
    scriptureRef: "Deuteronomio 6:4; Mateo 28:19; 2 Corintios 13:14",
    fullExplanation: "Dios es el Creador, Sustentador y Gobernador Soberano del universo visible e invisible. Cada una de las tres personas de la Divinidad comparte la misma naturaleza divina, atributos y gloria infinita, ejecutando roles armoniosos en la redención del hombre."
  },
  {
    id: "jesucristo",
    number: "03",
    title: "La Persona y Obra de Jesucristo",
    summary: "El Señor Jesucristo, unigénito Hijo de Dios, concebido por el Espíritu Santo y nacido de la virgen María; verdaderamente Dios y verdaderamente hombre.",
    scriptureRef: "Juan 1:1,14; Filipenses 2:5-8; Hebreos 4:15",
    fullExplanation: "Afirmamos su vida sin pecado, sus milagros, su muerte expiatoria y sustitutiva en la cruz por nuestros pecados, su resurrección corporal de entre los muertos, su ascensión a la diestra del Padre como nuestro Sumo Sacerdote y su segunda venida visible en poder y gran gloria."
  },
  {
    id: "gracia",
    number: "04",
    title: "La Salvación Solo por Gracia (Sola Gratia)",
    summary: "El hombre, caído en el pecado de Adán, está espiritualmente muerto e incapaz de justificarse a sí mismo. La salvación es un don inmerecido de la soberana gracia divina.",
    scriptureRef: "Efesios 2:8-9; Romanos 3:24; Tito 3:5",
    fullExplanation: "La justificación del pecador es únicamente por la fe en la persona y obra perfecta de Jesucristo, sin añadidura de méritos humanos, buenas obras o ritos sacramentales. Las buenas obras son el fruto gozoso e ineludible de la regeneración y de la fe viva."
  },
  {
    id: "espiritu-santo",
    number: "05",
    title: "La Obra del Espíritu Santo",
    summary: "El Espíritu Santo convence al mundo de pecado, de justicia y de juicio; regenera los corazones, mora permanentemente en el creyente y capacita con poder para el ministerio.",
    scriptureRef: "Juan 16:8-11; Romanos 8:9; 1 Corintios 12:7",
    fullExplanation: "En el momento de la conversión, el Espíritu Santo sella al creyente para el día de la redención, produciendo santificación progresiva, fruto espiritual y otorgando dones para la edificación mutua del cuerpo de Cristo."
  },
  {
    id: "iglesia-mision",
    number: "06",
    title: "La Iglesia y la Gran Comisión",
    summary: "La Iglesia es el cuerpo y la esposa de Cristo, compuesta por todos los redimidos de toda tribu, lengua y nación, con la encomienda suprema de hacer discípulos hasta lo último de la tierra.",
    scriptureRef: "Mateo 28:18-20; Efesios 1:22-23; Hechos 1:8",
    fullExplanation: "Nuestra pasión es capacitar a la Iglesia local en cada rincón, especialmente en las zonas rurales donde faltan recursos teológicos, para que los pastores y obreros prediquen la verdad del Evangelio con pureza y poder."
  }
];

export const CONFERENCES_DATA: ConferenceEvent[] = [
  {
    id: "conf-anual-2026",
    title: "Conferencia Anual de Pastores y Líderes 2026",
    theme: "Fieles a la Palabra en Tiempos de Desafío",
    date: "14 al 16 de Agosto, 2026",
    time: "8:30 AM - 5:00 PM",
    location: "Sede Regional Ahuachapán, El Salvador (y transmisión satelital)",
    modality: "Presencial y Virtual",
    speakers: "Pastores invitados de Centroamérica y Profesores de la Academia",
    description: "Tres días de profunda exposición bíblica, renovación pastoral, tiempos de oración compartida y talleres prácticos sobre el ministerio en zonas rurales.",
    availableSpots: "Cupos presenciales limitados · Registro gratuito para estudiantes activos"
  },
  {
    id: "taller-hermeneutica-rural",
    title: "Taller Intensivo de Hermenéutica y Bosquejo Bíblico",
    theme: "Del Texto Sagrado al Púlpito Rural",
    date: "26 de Septiembre, 2026",
    time: "9:00 AM - 3:30 PM",
    location: "Centro de Capacitación Bíblica, San Salvador / Sonsonate",
    modality: "Presencial",
    speakers: "Facultad de Predicación Expositiva",
    description: "Taller 100% práctico con Biblia en mano y hojas de trabajo guiadas. Aprenderás a extraer la idea exegética principal y armar sermones claros para tu congregación.",
    availableSpots: "45 pastores y obreros"
  },
  {
    id: "simposio-consejeria-2026",
    title: "Simposio Centroamericano de Consejería Bíblica",
    theme: "Esperanza y Gracia en Medio del Sufrimiento y la Familia",
    date: "17 de Octubre, 2026",
    time: "8:00 AM - 4:00 PM",
    location: "Modalidad Híbrida (Sede Ahuachapán + Enlaces regionales)",
    modality: "Presencial y Virtual",
    speakers: "Pastores consejeros y docentes del Área de Cuidado Pastoral",
    description: "Herramientas teológicas y casos prácticos para atender matrimonios en crisis, prevención del abuso, duelo y acompañamiento a jóvenes en riesgo.",
    availableSpots: "Abierto a líderes, directores de grupos y maestros"
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Recepción de Folletos y Material Escrito",
    tagline: "Didáctica estructurada y autoaprendizaje",
    description: "Cada estudiante recibe folletos impresos especialmente diseñados con espacios guiados para rellenar, preguntas de reflexión profunda, análisis de pasajes y aplicación a su iglesia local. No depende de conexión a internet para estudiar.",
    metric: "Guías con espacios para notas",
    accent: "Material Didáctico"
  },
  {
    step: "02",
    title: "10% Teoría: 30 Horas de Video Didáctico",
    tagline: "Clases claras adaptadas a nuestro contexto",
    description: "Videos pregrabados impartidos por pastores y maestros experimentados. El contenido está adaptado al lenguaje y la realidad pastoral centroamericana, entregado en memorias USB, enlaces de descarga ligera o plataformas locales.",
    metric: "30 Horas de Video por Ciclo",
    accent: "10% Teoría"
  },
  {
    step: "03",
    title: "90% Práctica: Encuentros Mensuales de Formación",
    tagline: "Resolución de dudas, comunión y laboratorios",
    description: "Una vez al mes, profesores y estudiantes se reúnen en sedes regionales estratégicas durante un día intensivo de trabajo: se despejan dudas, se realizan laboratorios de predicación y se comparte un almuerzo fraterno en comunión pastoral.",
    metric: "1 Sábado Mensual Intensivo",
    accent: "90% Práctica"
  },
  {
    step: "04",
    title: "Acreditación Técnica de Nivel Universitario",
    tagline: "Reconocimiento y solidez académica",
    description: "Al culminar satisfactoriamente los 12 meses de estudio por correspondencia y las evaluaciones prácticas, el egresado recibe su diploma acreditado de Nivel Técnico Universitario con respaldo nacional e internacional y opción de Apostilla de La Haya.",
    metric: "Validez Nacional e Internacional",
    accent: "Acreditación Oficial"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿En qué consiste el sistema de estudio por correspondencia?",
    answer: "Nuestro sistema está diseñado especialmente para personas que viven en zonas rurales o apartadas. Recibes tus folletos de estudio físicos y los videos de las clases (en memoria USB o descarga). Estudias a tu propio ritmo durante 4 semanas respondiendo las preguntas y actividades del folleto, y una vez al mes asistes al encuentro presencial de práctica y evaluación en nuestras sedes.",
    category: "Metodología"
  },
  {
    id: "faq-2",
    question: "¿En qué países y ciudades tienen sedes físicas oficiales?",
    answer: "Contamos con sedes físicas operativas en: Ahuachapán (El Salvador), Chinandega y Tipitapa (Nicaragua), Cartago (Costa Rica), Tacaná (Guatemala) y San Lorenzo, Valle (Honduras).",
    category: "Metodología"
  },
  {
    id: "faq-3",
    question: "¿Necesito tener internet permanente en mi casa para estudiar?",
    answer: "¡No! Entendemos la realidad de muchas comunidades rurales de Centroamérica. Los folletos son 100% físicos y los videos pueden verse sin internet una vez descargados o copiados a tu teléfono, computadora o televisor mediante memoria USB.",
    category: "Metodología"
  },
  {
    id: "faq-4",
    question: "¿Qué validez y acreditación tienen los programas?",
    answer: "Nuestros programas otorgan certificación de Nivel Técnico Universitario, respaldada por declaraciones de instituciones teológicas, sínodos y presbiterios. Los títulos pueden ser legalizados a través de la Apostilla de La Haya para reconocimiento internacional en cualquier país miembro.",
    category: "Acreditación"
  },
  {
    id: "faq-5",
    question: "¿Cómo contactar a la Academia Bíblica El Evangelio?",
    answer: "Puedes comunicarte directamente por WhatsApp al +505 8934-1763 o escribirnos al correo oficial gospelsocietymission@gmail.com. Todas las consultas e inscripciones desde el sitio web se canalizan directamente a nuestro WhatsApp oficial.",
    category: "Inscripciones"
  }
];

export const MINISTRY_PARTNERS: MinistryPartner[] = [
  {
    id: "partner-1",
    name: "Iglesias Presbiterianas de El Salvador",
    country: "El Salvador",
    role: "Aval Doctrinal y Sede Ahuachapán",
    description: "Comunión de iglesias reformadas históricas que respaldan y facilitan sedes presenciales y laboratorios de púlpito para pastores rurales."
  },
  {
    id: "partner-2",
    name: "Red de Institutos Bíblicos Fronterizos",
    country: "Guatemala y México",
    role: "11 Institutos Bíblicos Afiliados",
    description: "Alianza formativa en el altiplano de San Marcos (Tacaná y Chiapas) donde la Academia provee materiales y jornadas intensivas de estudio."
  },
  {
    id: "partner-3",
    name: "Confraternidad Pastoral de Occidente",
    country: "Nicaragua",
    role: "Sedes Chinandega y Tipitapa",
    description: "Pastores de diversas denominaciones evangélicas unidos para el discipulado y entrega de folletos por correspondencia en comunidades agrícolas."
  },
  {
    id: "partner-4",
    name: "Misión Evangélica del Valle y Sur",
    country: "Honduras",
    role: "Sede y Centro Misionero San Lorenzo",
    description: "Obreros y directores ministeriales comprometidos con la formación de misioneros rurales de campo y apoyo social a pescadores y campesinos."
  },
  {
    id: "partner-5",
    name: "Asociación Bíblica de la Meseta Central",
    country: "Costa Rica",
    role: "Sede Cartago y Tutorías",
    description: "Pastores y maestros que coordinan el avance modular de líderes locales en valles y cantones costarricenses."
  }
];

export const MINISTRY_ALLIES_REGIONS = [
  {
    region: "El Salvador",
    countryBadge: "🇸🇻 El Salvador",
    allies: [
      { name: "Iglesias Presbiterianas de El Salvador", location: "Ahuachapán y San Salvador" },
      { name: "Red de Iglesias Cristo Vive", location: "El Salvador" },
      { name: "Asociación de Pastores de la Zona Oriente", location: "San Miguel y Oriente" }
    ]
  },
  {
    region: "Guatemala y México",
    countryBadge: "🇬🇹 🇲🇽 Guatemala y México",
    allies: [
      { name: "Red de Institutos Bíblicos Fronterizos", location: "Tacaná y Altiplano San Marcos" },
      { name: "Iglesias Misión Centroamericana", location: "Guatemala" },
      { name: "Iglesias Presbiterianas de Chiapas", location: "Chiapas, México" }
    ]
  },
  {
    region: "Nicaragua",
    countryBadge: "🇳🇮 Nicaragua",
    allies: [
      { name: "Confraternidad Pastoral de Occidente", location: "Chinandega y León" },
      { name: "Iglesias Presbiterianas Reformadas de Nicaragua", location: "Managua y Tipitapa" }
    ]
  },
  {
    region: "Honduras",
    countryBadge: "🇭🇳 Honduras",
    allies: [
      { name: "Misión Evangélica del Valle y Sur", location: "San Lorenzo y Choluteca" },
      { name: "Iglesia Cristiana Reformada de Corinto", location: "San Lorenzo, Valle" }
    ]
  },
  {
    region: "Internacional",
    countryBadge: "🌐 Internacional",
    allies: [
      { name: "Gospel Society Mission", location: "El Salvador" },
      { name: "Iglesia \"Por la Gracia de Dios, San Miguel\"", location: "El Salvador" },
      { name: "Trinitarian Bible Society", location: "Londres, Inglaterra" },
      { name: "Centro de Estudios Kuyper", location: "Argentina" },
      { name: "Teaching Missions International - Teaching Biblical Reformed", location: "USA" },
      { name: "Third Millennium Ministries", location: "USA" },
      { name: "Chapel Library", location: "USA" },
      { name: "Iglesia Bíblica Maranatha Lynn", location: "Massachusetts, USA" }
    ]
  }
];

export const FACULTY_MEMBERS = [
  {
    id: "javier-dominguez",
    name: "Javier Domínguez",
    title: "Maestro y Exégeta Bíblico",
    initials: "JD",
    focus: "Teología Bíblica e Interpretación Gramático-Histórica",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "juan-manuel-vaz",
    name: "Juan Manuel Vaz",
    title: "Pastor y Predicador Expositivo",
    initials: "JV",
    focus: "Homilética Práctica y Defensa de la Sana Doctrina",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "josias-kim",
    name: "Josías Kim",
    title: "Pastor y Misionero",
    initials: "JK",
    focus: "Plantación de Iglesias Rurales y Discipulado Bíblico",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-noe-acosta",
    name: "Dr. Noé Acosta",
    title: "Teólogo y Docente Seminario",
    initials: "NA",
    focus: "Hermenéutica Exegética e Historia Eclesiástica",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-julio-benitez",
    name: "Dr. Julio Benítez",
    title: "Pastor y Doctor en Teología",
    initials: "JB",
    focus: "Teología Sistemática y Cuidado del Rebaño",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-paul-kim",
    name: "Dr. Paul Kim",
    title: "Doctor en Ministerio y Misionero",
    initials: "PK",
    focus: "Misiología Global y Liderazgo Transformacional",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-joe-fitzpatrick",
    name: "Dr. Joe Fitzpatrick",
    title: "Profesor y Autor Bíblico",
    initials: "JF",
    focus: "Consejería Bíblica Pastoral y Gracia Cristocéntrica",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "dr-richard-smith",
    name: "Dr. Richard Smith",
    title: "Erudito Bíblico y Maestro de Campo",
    initials: "RS",
    focus: "Exégesis del Antiguo y Nuevo Testamento",
    photo: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=400&q=80"
  }
];

export const STUDENT_TESTIMONIALS = [
  {
    id: "test-1",
    author: "Pr. Marcos Sandoval",
    role: "Pastor Rural y Egresado de Predicación Expositiva",
    church: "Iglesia Evangélica El Buen Pastor",
    location: "Ahuachapán",
    country: "El Salvador",
    quote: "Por años prediqué con muchas limitaciones en mi comunidad cafetalera. El método de correspondencia y los encuentros mensuales me enseñaron a desglosar versículo por versículo la Escritura sin tener que abandonar a mi congregación.",
    program: "Predicación Expositiva"
  },
  {
    id: "test-2",
    author: "Hno. Carlos Espinoza",
    role: "Líder Comunitario y Consejero",
    church: "Misión Evangélica Fronteriza",
    location: "Cheguate, Tacaná",
    country: "Guatemala",
    quote: "Los folletos didácticos son un tesoro en nuestra montaña. Las 20 horas intensivas de estudio cada mes en la biblioteca han transformado la manera en que aconsejamos matrimonios y formamos a los jóvenes.",
    program: "Consejería Bíblica"
  },
  {
    id: "test-3",
    author: "Pastora Elena Martínez",
    role: "Líder de Educación y Discipulado",
    church: "Comunidad Cristiana de Corinto",
    location: "San Lorenzo, Valle",
    country: "Honduras",
    quote: "La preparación técnica universitaria nos dio herramientas formales que antes creíamos inalcanzables para los obreros del campo. La Academia es una verdadera bendición para el sur de Honduras.",
    program: "Actualización Ministerial"
  },
  {
    id: "test-4",
    author: "Pr. David Rivas",
    role: "Pastor y Misionero Rural",
    church: "Confraternidad de Occidente",
    location: "Chinandega",
    country: "Nicaragua",
    quote: "Estudiar con materiales de teólogos y pastores de tan alto nivel, pero explicados en nuestro propio lenguaje y realidad de campo, nos dio un renuevo espiritual a todo el ministerio.",
    program: "Predicación Expositiva"
  }
];

export const FACULTY_DATA = {
  titulo: "¿Quiénes son Nuestros Colaboradores Educativos o Facultad Invitada?",
  lema: "Servicio Ad-Honorem Movidos por Amor al Evangelio",
  descripcion: "Nuestros colaboradores educativos son pastores y líderes comprometidos con el llamado de enseñar la Palabra de Dios. A través de un permiso especial y firmado, nos permiten utilizar sus recursos educativos disponibles en la red para integrarlos en nuestro programa de clases. Aunque no forman parte directa de la estructura administrativa de la Academia, estos colaboradores se suman como una facultad independiente, contribuyendo de manera significativa al desarrollo académico y espiritual de nuestros estudiantes.",
  caracteristicas: [
    {
      titulo: "Colaboradores Honoríficos (Ad-Honorem)",
      detalle: "Participan sin recibir remuneración económica alguna, movidos únicamente por amor al Evangelio y pasión por equipar a otros en el conocimiento de las Escrituras."
    },
    {
      titulo: "Permisos Formales y Recursos Autorizados",
      detalle: "Cada curso incorpora material estructurado con consentimiento expreso de pastores y teólogos de reconocida solvencia bíblica en Iberoamérica."
    },
    {
      titulo: "Foco en el Contexto Rural Centroamericano",
      detalle: "Los contenidos son dosificados y contextualizados por nuestros mentores de campo para que los pastores de aldeas y cantones puedan aplicarlos de inmediato."
    },
    {
      titulo: "Evaluación y Mentoría Colegiada",
      detalle: "En cada encuentro presencial mensual, pastores locales con experiencia ministerial evalúan las exposiciones y laboratorios prácticos de los estudiantes."
    }
  ],
  areas: [
    {
      area: "Hermenéutica Bíblica y Teología Exegética",
      enfoque: "Capacitación en interpretación sana gramático-histórica, alejándose de alegorías y falsas doctrinas."
    },
    {
      area: "Homilética y Predicación Expositiva",
      enfoque: "Arquitectura del sermón bíblico verso a verso, oratoria pastoral y comunicación cristocéntrica."
    },
    {
      area: "Consejería Bíblica Pastoral",
      enfoque: "Atención al corazón humano, resolución de conflictos matrimoniales, duelo y restauración bajo la Gracia."
    },
    {
      area: "Misiología Práctica y Plantación Rural",
      enfoque: "Estrategias de supervivencia de campo, discipulado multiplicador y mayordomía en comunidades de bajos recursos."
    }
  ]
};

