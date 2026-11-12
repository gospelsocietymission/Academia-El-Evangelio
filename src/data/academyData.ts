import { AcademicProgram, DoctrinalPoint, ConferenceEvent, FaqItem, PhysicalBranch, MissionaryProject } from '../types';

export const INSTITUTION_INFO = {
  name: "Academia Bíblica El Evangelio",
  domain: "academiabiblica.net",
  officialUrl: "https://academiabiblica.net",
  sourceSite: "https://sites.google.com/view/academiabiblicaelevangelio/home",
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
    description: "Punto de encuentro regional para clases presenciales mensuales, laboratorios de predicación y coordinación eclesial."
  },
  {
    id: "chinandega",
    country: "Nicaragua",
    city: "Chinandega",
    fullLocation: "Chinandega, Nicaragua",
    type: "Sede Regional de Estudios",
    description: "Centro de distribución de folletos didácticos y reuniones mensuales de formación teológica para el occidente de Nicaragua."
  },
  {
    id: "tipitapa",
    country: "Nicaragua",
    city: "Tipitapa",
    fullLocation: "Tipitapa, Nicaragua",
    type: "Sede de Capacitación Pastoral",
    description: "Espacio formativo para pastores y obreros locales con talleres prácticos de homilética y hermenéutica."
  },
  {
    id: "cartago",
    country: "Costa Rica",
    city: "Cartago",
    fullLocation: "Cartago, Costa Rica",
    type: "Sede Académica Regional",
    description: "Coordinación de estudiantes por correspondencia y tutorías presenciales para líderes de la zona central de Costa Rica."
  },
  {
    id: "tacana",
    country: "Guatemala",
    city: "Tacaná",
    fullLocation: "Tacaná, San Marcos, Guatemala",
    type: "Centro de Estudios y Biblioteca",
    description: "Sede estratégica en el altiplano que sirve a estudiantes e institutos bíblicos de Guatemala y la frontera con México."
  },
  {
    id: "san-lorenzo",
    country: "Honduras",
    city: "San Lorenzo",
    fullLocation: "San Lorenzo, Valle, Honduras",
    type: "Centro Misionero y Formativo",
    description: "Base de entrenamiento misionero rural donde convergen la teología bíblica y las habilidades prácticas de campo."
  }
];

export const MISSIONARY_PROJECTS: MissionaryProject[] = [
  {
    id: "el-crucero-nicaragua",
    title: "Eco-Well Health El Crucero",
    location: "El Crucero",
    country: "Nicaragua",
    category: "Salud Integral y Adicciones Conductuales",
    image: "/src/assets/images/program_biblical_counseling_1794497820362.jpg",
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
    image: "/src/assets/images/project_library_tacana_1794500093309.jpg",
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
    image: "/src/assets/images/project_mission_honduras_1794500093062.jpg",
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
    image: "/src/assets/images/methodology_study_materials_1794497818833.jpg",
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
    subtitle: "Acompañamiento pastoral y sanidad del alma conforme a las Escrituras",
    description: "Brinda herramientas prácticas y espirituales fundamentadas en la suficiencia de la Palabra de Dios para pastorear personas y familias en situaciones de dolor, crisis, matrimonios vulnerables y restauración espiritual.",
    image: "/src/assets/images/program_biblical_counseling_1794497820362.jpg",
    badge: "Técnico Universitario",
    duration: "12 Meses (4 Ciclos Trimestrales)",
    modality: "Por correspondencia + 1 Encuentro mensual práctico",
    modulesCount: 6,
    highlightObjective: "Capacitar al consejero para diagnosticar las necesidades del corazón a la luz de las Escrituras y guiar con gracia, discernimiento y amor compasivo.",
    curriculum: [
      {
        code: "CB-101",
        name: "Fundamentos Teológicos de la Consejería Bíblica",
        description: "La suficiencia de las Escrituras para la vida y la piedad; antropología bíblica y el propósito del corazón humano.",
        hours: "40 horas"
      },
      {
        code: "CB-102",
        name: "El Corazón Humano, los Ídolos y la Gracia Transformadora",
        description: "Identificación de motivaciones profundas, dinámicas de cambio espiritual y el perdón en Cristo.",
        hours: "40 horas"
      },
      {
        code: "CB-103",
        name: "Consejería Matrimonial y Familiar en el Contexto Rural",
        description: "Resolución de conflictos conyugales, crianza de los hijos y restauración de hogares en comunidades vulnerables.",
        hours: "40 horas"
      },
      {
        code: "CB-104",
        name: "Acompañamiento en Duelo, Trauma, Depresión y Crisis",
        description: "Cómo brindar contención bíblica ante la pérdida, la enfermedad terminal y el sufrimiento agudo sin caer en legalismo.",
        hours: "40 horas"
      },
      {
        code: "CB-105",
        name: "Ética Pastoral, Confidencialidad y Restauración",
        description: "Límites legales y morales, prevención del abuso, confidencialidad pastoral y protocolos de derivación médica.",
        hours: "40 horas"
      },
      {
        code: "CB-106",
        name: "Laboratorio y Casos Prácticos de Consejería",
        description: "Simulaciones clínicas supervisadas, estudios de casos reales y retroalimentación pastoral personalizada.",
        hours: "40 horas"
      }
    ],
    profile: [
      "Pastores, ancianos y líderes de grupos familiares.",
      "Líderes de ministerios femeniles, juveniles o de matrimonios.",
      "Creyentes con llamado a la visitación de enfermos y consejería personal."
    ],
    requirements: [
      "Carta de respaldo del pastor o liderazgo de su iglesia local.",
      "Compromiso de estudio individual mediante los folletos de trabajo.",
      "Asistencia puntual al encuentro mensual presencial o regional."
    ]
  },
  {
    id: "predicacion-expositiva",
    title: "Predicación Expositiva",
    subtitle: "Desarrollo de habilidades para estudiar, estructurar y comunicar la Palabra de Dios",
    description: "Formación intensiva que prepara al predicador para desentrañar el significado original del texto bíblico, construir sermones ordenados y aplicarlos con fidelidad y unción a la vida de la congregación.",
    image: "/src/assets/images/program_expository_preaching_1794497819442.jpg",
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
    image: "/src/assets/images/conferences_fellowship_1794497819929.jpg",
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
    description: "Al culminar satisfactoriamente los 12 meses de estudio por correspondencia y las evaluaciones prácticas, el egresado recibe su diploma acreditado de Nivel Técnico Universitario con respaldo nacional e internacional.",
    metric: "Validez Nacional e Internacional",
    accent: "Acreditación Oficial"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿En qué consiste el sistema de estudio por correspondencia?",
    answer: "Nuestro sistema está diseñado especialmente para personas que viven en zonas rurales o apartadas. Recibes tus folletos de estudio físicos y los videos de las clases (en memoria USB o descarga). Estudias a tu propio ritmo durante el mes respondiendo las preguntas y actividades del folleto, y una vez al mes asistes al encuentro presencial de práctica y evaluación en nuestras sedes.",
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
    answer: "Nuestros programas otorgan una certificación de Nivel Técnico Universitario, respaldada por una red de líderes, pastores e instituciones teológicas con validez nacional e internacional. Este título capacita y acredita formalmente para el ejercicio pastoral, ministerial y docente en iglesias y misiones.",
    category: "Acreditación"
  },
  {
    id: "faq-5",
    question: "¿Cómo contactar a la Academia Bíblica El Evangelio?",
    answer: "Puedes comunicarte directamente por WhatsApp al +505 8934-1763 o escribirnos al correo oficial gospelsocietymission@gmail.com. Todas las consultas e inscripciones desde el sitio web se canalizan directamente a nuestro WhatsApp oficial.",
    category: "Inscripciones"
  }
];
