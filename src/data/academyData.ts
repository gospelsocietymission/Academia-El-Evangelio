import {
  AcademicProgram,
  DoctrinalPoint,
  ConferenceEvent,
  PastConferenceEvent,
  FaqItem,
  PhysicalBranch,
  MissionaryProject,
  MinistryAlliesRegion,
  FacultyMember,
  FieldMentor,
} from '../types';

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
  accreditation: "Programas Pastorales con Validez Nacional e Internacional",
  biblicalVerse: {
    text: "Lo que has oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a otros.",
    reference: "2 Timoteo 2:2"
  },
  founder: {
    name: "Pastor Isaías Martínez",
    role: "Fundador & Misionero Itinerante",
    startYear: 1998,
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/isaias.jpg",
    quote: "Mientras he viajado por muchos países descubrí la urgente necesidad de llevar educación bíblica de manera profunda, pero con lenguaje local y verdaderamente entendible en sus propios contextos.",
    bio1: "Desde el año 1998, el hermano Isaías ha recorrido incansablemente aldeas, cantones, montañas y ciudades de Centroamérica, sembrando la semilla de la educación teológica, entregando biblias Reina Valera, como una oportunidad de evangelizar a otros.",
    bio2: "Por más de dos décadas, hemos visto pastores de zonas montañosas y comunidades rurales servir fielmente sin haber tenido jamás la oportunidad de asistir a un seminario formal. La Academia Bíblica El Evangelio nació para responder a ese clamor: llevar la mejor teología con sencillez, profundidad y calidez al corazón de cada comunidad."
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
    description: "Sede estratégica en el altiplano montañoso indígena cerca de la frontera con México; hogar de estudio y refugio formativo para más de 100 estudiantes.",
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
    description: "Nuestra biblioteca y centro de estudios sirve como un hogar de apoyo para 11 institutos bíblicos en las zonas aledañas de Guatemala y México. Aquí, los estudiantes encuentran un refugio tranquilo para desconectarse del día a día, orar y concentrarse en su formación. Además, este mismo espacio es la sede de nuestra academia, donde cada cuatro meses reunimos a más de 100 personas para sumergirse en un estudio bíblico intensivo.",
    missionaryCall: "Invitamos a misioneros maestros, catalogadores de bibliotecas teológicas y predicadores dispuestos a ministrar en las jornadas intensivas con más de 100 estudiantes reunidos.",
    needs: [
      "Maestros bíblicos itinerantes para módulos intensivos.",
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
    image: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/consejeria.png",
    badge: "Programa Pastoral",
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
      "Entrevista simple con el representante nacional de la Academia.",
      "Compromiso de estudio mensual con folletos y asistencia al encuentro presencial."
    ]
  },
  {
    id: "predicacion-expositiva",
    title: "Predicación Expositiva",
    subtitle: "Desarrollo de habilidades para estudiar, estructurar y comunicar la Palabra de Dios",
    description: "Formación intensiva que prepara al predicador para desentranar el significado original del texto bíblico, construir sermones ordenados y aplicarlos con fidelidad y unción a la vida de la congregación.",
    image: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/expository.png",
    badge: "Programa Pastoral",
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
    subtitle: "Capacitación continua para pastores y líderes en las zonas rurales de Centroamérica",
    description: "Este programa busca profundizar en la teología práctica y en doctrinas básicas. Estudiamos el ABC del evangelio.",
    image: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/estudiandotonala.jpg",
    badge: "Programa Pastoral",
    duration: "Indefinido · 1 encuentro mensual.",
    modality: "Por correspondencia + 1 Encuentro mensual de comunión y cátedra",
    modulesCount: 4,
    highlightObjective: "Profundizar en la teología práctica y doctrinas básicas del ABC del evangelio, contrarrestando falsas enseñanzas en comunidad pastoral.",
    curriculum: [
      {
        code: "AM-01",
        name: "Estudio de los Catecismos y Confesiones Históricas",
        description: "Repaso claro y sistemático del fundamento doctrinal de la fe reformada histórica.",
        hours: "Encuentro Mensual"
      },
      {
        code: "AM-02",
        name: "Temas libres a petición de los pastores",
        description: "Exposición y diálogo abierto sobre atributos y verdades esenciales como la fidelidad de Dios y el Amor de Dios.",
        hours: "Encuentro Mensual"
      },
      {
        code: "AM-03",
        name: "Historia de la Biblia Reina Valera",
        description: "Recorrido histórico por la preservación, traducción y legado de las Sagradas Escrituras en nuestro idioma español.",
        hours: "Encuentro Mensual"
      },
      {
        code: "AM-04",
        name: "Estudio completo del Evangelio de Juan",
        description: "Análisis expositivo verso a verso del Evangelio de Juan con la intención de contrarrestar las falsas enseñanzas.",
        hours: "Encuentro Mensual"
      }
    ],
    profile: [
      "Pastores y obreros",
      "Cuerpo de líderes y ancianos de congregaciones locales."
    ],
    requirements: [
      "Deseo de actualización teológica y disposición para el aprendizaje continuo.",
      "Participación activa en las mesas redondas."
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
    texto: "Dada la naturaleza religiosa de nuestros programas, estos están diseñados específicamente para cumplir con los requisitos ministeriales, basándonos en el principio bíblico: 'Por sus frutos los conoceréis' (Mateo 7:16). Nuestro objetivo principal es formar líderes cuya vida y ministerio reflejen el impacto transformador de su aprendizaje. Contamos con acreditación regional en los países donde operamos, con programas pastorales avalados y reconocidos internacionalmente mediante convenios educativos.",
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
  // NOVIEMBRE 2026
  {
    id: "conf-gotera-escrituras-nov-2026",
    title: "¿Cómo nos Llegaron las Sagradas Escrituras en Español?",
    theme: "¿Cómo nos Llegaron las Sagradas Escrituras en Español?",
    date: "20 de Noviembre, 2026",
    time: "9:00 AM",
    location: "San Francisco Gotera, Morazán, El Salvador",
    country: "El Salvador",
    modality: "Presencial",
    speakers: "Pastor Isaías Martínez",
    description: "Enseñanza histórica sobre el origen, transmisión y traducción de la Biblia al español y la fidelidad textual.",
    availableSpots: "Invitación de la Asociación de Pastores de San Francisco Gotera"
  },
  {
    id: "conf-tacana-liderazgo-nov-2026",
    title: "Liderazgo de Jesús: modelo de servicio, relación y propósito",
    theme: "Modelo de servicio, relación y propósito que Jesús modela con sus discípulos",
    date: "26, 27 y 28 de Noviembre, 2026",
    time: "Jornadas Especiales",
    location: "Cheguate, Tacaná, Guatemala",
    country: "Guatemala",
    modality: "Presencial",
    speakers: "Pastor Isaías Martínez",
    description: "Conferencia especial sobre el liderazgo de Jesús: modelo de servicio, relación y propósito con sus discípulos en la sede de Cheguate, Tacaná, Guatemala.",
    availableSpots: "Pastores, líderes y congregaciones"
  },

  // DICIEMBRE 2026
  {
    id: "conf-tipitapa-economia-dic-2026",
    title: "La economía y \"el presente siglo malo\"",
    theme: "Artículo del Dr. Richard L. Smith (Centro Kyper, Argentina)",
    date: "5 de Diciembre, 2026",
    time: "Jornada de Enseñanza",
    location: "Tipitapa, Nicaragua",
    country: "Nicaragua",
    modality: "Presencial",
    speakers: "Pastor Isaías Martínez",
    description: "Enseñanza en Tipitapa, Nicaragua sobre el artículo del Dr. Richard Smith del Centro Kyper, Argentina.",
    availableSpots: "Entrada libre · Materiales PDF gratuitos"
  },
  {
    id: "conf-honduras-corazon-dic-2026",
    title: "Tal corazón como este",
    theme: "Such a Mind as This — Dr. Richard L. Smith (Centro Kyper, Argentina)",
    date: "6 de Diciembre, 2026",
    time: "Jornada de Enseñanza",
    location: "Centro Misionero \"Heme aquí, envíame a mí\", San Lorenzo, Valle, Honduras",
    country: "Honduras",
    modality: "Presencial",
    speakers: "Pastor Isaías Martínez",
    description: "Enseñanza en Centro Misionero \"Heme aquí, envíame a mí\" sobre la obra del Dr. Richard Smith del Centro Kyper, Argentina.",
    availableSpots: "Entrada libre · Materiales PDF gratuitos"
  },

  // ENERO 2027 (Ordenado cronológicamente)
  {
    id: "conf-nicaragua-reynaldo-enero-2027",
    title: "Gira Catecismo Menor de Westminster — Occidente",
    theme: "Catecismo Menor de Westminster",
    date: "1, 2 y 3 de Enero, 2027",
    time: "01 Ene Corinto · 02 Ene Tonalá · 03 Ene León",
    location: "Puerto Corinto (01 Ene), Tonalá (02 Ene) y León (03 Ene), Nicaragua",
    country: "Nicaragua",
    modality: "Presencial",
    speakers: "Pastor Reynaldo Acuña",
    description: "Serie intensiva por el occidente nicaragüense: 01 de Enero en Puerto Corinto, 02 de Enero en Tonalá y 03 de Enero en León.",
    availableSpots: "Iglesias y obreros de occidente"
  },
  {
    id: "conf-nicaragua-isaias-enero-2027",
    title: "Catecismo Menor de Westminster — Nicaragua",
    theme: "Catecismo Menor de Westminster",
    date: "2 y 3 de Enero, 2027",
    time: "02 Enero Chinandega · 03 Enero Tipitapa",
    location: "Chinandega (02 Ene) y Tipitapa (03 Ene), Nicaragua",
    country: "Nicaragua",
    modality: "Presencial",
    speakers: "Pastor Isaías Martínez",
    description: "Enseñanza expositiva sobre el Catecismo Menor de Westminster: 02 de Enero en Chinandega y 03 de Enero en Tipitapa.",
    availableSpots: "Pastores y congregaciones locales"
  },
  {
    id: "conf-ahuachapan-enero-2027",
    title: "La Tierra de la Biblia",
    theme: "La Tierra de la Biblia (Curso I y Curso II)",
    date: "2 al 20 de Enero, 2027",
    time: "Presencial / Virtual ZOOM Sincrónico / Asincrónico",
    location: "Ahuachapán, El Salvador y Virtual",
    country: "El Salvador",
    modality: "Presencial y Virtual",
    speakers: "Dr. Joe Fitzpatrick",
    description: "Estudio de la Tierra de la Biblia dividido en dos cursos (6 lecciones c/u): fundamentos, geografía bíblica, pacto y pueblo.",
    availableSpots: "Abierto a pastores, estudiantes y líderes"
  },
  {
    id: "conf-honduras-enero-2027",
    title: "Primera Clase Misionera: Entendiendo el Llamado",
    theme: "Entendiendo el llamado",
    date: "9 de Enero, 2027",
    time: "9:00 AM",
    location: "Centro Misionero \"Heme aquí, envíame a mí\", San Lorenzo, Valle",
    country: "Honduras",
    modality: "Presencial",
    speakers: "Pastor Isaías Martínez",
    description: "Apertura oficial y primera clase de los estudiantes misioneros con el tema 'Entendiendo el llamado'.",
    availableSpots: "Estudiantes misioneros y aspirantes"
  },
  {
    id: "conf-cartago-israel-feb-2027",
    title: "La Tierra de Israel — Costa Rica",
    theme: "La Tierra de la Biblia (Curso I Presencial y Curso II Virtual)",
    date: "23 de Enero al 2 de Febrero, 2027",
    time: "Presencial Cartago / Videos Asincrónico",
    location: "Cartago, Costa Rica y Virtual",
    country: "Costa Rica",
    modality: "Presencial y Virtual",
    speakers: "Dr. Joe Fitzpatrick",
    description: "Estudio de la Tierra de la Biblia: Curso I presencial en Cartago y Curso II disponible en videos grabados asincrónicos.",
    availableSpots: "Pastores, líderes y estudiantes"
  },

  // FEBRERO 2027 (Ordenado cronológicamente)
  {
    id: "conf-managua-feb-2027",
    title: "Amando a tu Prójimo como a ti Mismo",
    theme: "Amando a tu prójimo como a ti mismo",
    date: "4 al 7 de Febrero, 2027",
    time: "Jornadas Regionales",
    location: "Managua, Nicaragua",
    country: "Nicaragua",
    modality: "Presencial",
    speakers: "Pastor José Luis Amézquita (Cornerstone Church, Simi Valley CA, USA)",
    description: "Conferencia especial con el Pastor Amézquita, pastor en Cornerstone Church en Simi Valley, California, USA.",
    availableSpots: "Abierto a pastores e iglesias"
  },
  {
    id: "conf-tipitapa-feb-2027",
    title: "Predicación Especial en Tipitapa",
    theme: "Predicación de la Palabra",
    date: "7 de Febrero, 2027",
    time: "9:30 AM",
    location: "Tipitapa, Nicaragua",
    country: "Nicaragua",
    modality: "Presencial",
    speakers: "Pastor Isaías Martínez",
    description: "Jornada de predicación bíblica y edificación congregacional en la sede de Tipitapa.",
    availableSpots: "Entrada libre"
  },
  {
    id: "conf-tacana-guatemala-feb-2027",
    title: "Amando a mi Hermano",
    theme: "Amando a mi hermano",
    date: "12 y 13 de Febrero, 2027",
    time: "Jornadas Especiales",
    location: "Cheguate, Tacaná, Guatemala",
    country: "Guatemala",
    modality: "Presencial",
    speakers: "Hno. Jesús Merino",
    description: "Conferencia especial con el tema 'Amando a mi hermano' en la sede de Cheguate, Tacaná, Guatemala.",
    availableSpots: "Abierto a pastores, estudiantes y congregaciones"
  },
  {
    id: "conf-cartago-escrituras-feb-2027",
    title: "¿Cómo nos Llegaron las Sagradas Escrituras en Español?",
    theme: "¿Cómo nos llegaron las Sagradas Escrituras en Español?",
    date: "14 de Febrero, 2027",
    time: "Sesión Especial de Enseñanza",
    location: "Cartago, Costa Rica",
    country: "Costa Rica",
    modality: "Presencial",
    speakers: "Pastor Isaías Martínez",
    description: "Enseñanza histórica sobre el origen, transmisión y traducción de la Biblia al español y la fidelidad textual.",
    availableSpots: "Estudiantes y pastores de Costa Rica"
  }
];

export const PAST_CONFERENCES_DATA: PastConferenceEvent[] = [
  {
    id: "past-2004",
    year: "2004",
    title: "Inicio de Jornadas de Capacitación Bíblica Rural",
    location: "El Salvador y Occidente de Nicaragua",
    theme: "Fundamentos de la Fe Cristiana y Entrega de Biblias Reina Valera",
    speaker: "Pastor Isaías Martínez"
  },
  {
    id: "past-2008",
    year: "2008",
    title: "Congreso Centroamericano de Obreros en el Campo",
    location: "Ahuachapán, El Salvador",
    theme: "El Ministerio Pastoral en Zonas de Escasos Recursos",
    speaker: "Pastor Isaías Martínez y Pastores Regionales"
  },
  {
    id: "past-2012",
    year: "2012",
    title: "Simposio Fronterizo de Institutos Bíblicos",
    location: "Cheguate, Tacaná, San Marcos, Guatemala",
    theme: "Hermenéutica Sana para Maestros e Institutos Rurales",
    speaker: "Facultad Regional de Guatemala y México"
  },
  {
    id: "past-2016",
    year: "2016",
    title: "Conferencia de Predicación Expositiva y Reforma",
    location: "Chinandega y Tipitapa, Nicaragua",
    theme: "Las Cinco Solas y el Púlpito Fiel",
    speaker: "Pastor Isaías Martínez & Pastor Reynaldo Acuña"
  },
  {
    id: "past-2019",
    year: "2019",
    title: "Encuentro de Plantadores de Iglesias del Sur",
    location: "San Lorenzo, Valle, Honduras",
    theme: "Misiología Práctica y Supervivencia de Campo",
    speaker: "Equipo Misionero de Honduras y Centroamérica"
  },
  {
    id: "past-2023",
    year: "2023",
    title: "Jornada Internacional de Consejería y Cuidado Pastoral",
    location: "Cartago, Costa Rica",
    theme: "Acompañamiento Bíblico en Medio de la Crisis Familiar",
    speaker: "Dr. Joe Fitzpatrick & Facultad Invitada"
  },
  {
    id: "past-2025",
    year: "2025",
    title: "Cumbre de Mentores de Campo y Facultad Invitada",
    location: "Sedes Regionales de Centroamérica",
    theme: "Consolidación del Método 10% Teoría y 90% Práctica",
    speaker: "Facultad Internacional y Mentores Nacionales"
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
    title: "Acreditación Pastoral con Validez Internacional",
    tagline: "Reconocimiento y solidez académica",
    description: "Al culminar satisfactoriamente los 12 meses de estudio por correspondencia y las evaluaciones prácticas, el egresado recibe su diploma acreditado con respaldo nacional e internacional y opción de Apostilla de La Haya.",
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
    answer: "Nuestros programas cuentan con certificación pastoral respaldada por declaraciones de instituciones teológicas, sínodos y presbiterios. Los títulos pueden ser legalizados a través de la Apostilla de La Haya para reconocimiento internacional en cualquier país miembro.",
    category: "Acreditación"
  },
  {
    id: "faq-5",
    question: "¿Cómo contactar a la Academia Bíblica El Evangelio?",
    answer: "Puedes comunicarte directamente por WhatsApp al +505 8934-1763 o escribirnos al correo oficial gospelsocietymission@gmail.com. Todas las consultas e inscripciones desde el sitio web se canalizan directamente a nuestro WhatsApp oficial.",
    category: "Inscripciones"
  }
];

export const MINISTRY_ALLIES_REGIONS: MinistryAlliesRegion[] = [
  {
    region: "El Salvador",
    countryBadge: "🇸🇻 El Salvador",
    allies: [
      { name: "Iglesias Presbiterianas de El Salvador", location: "El Salvador" },
      { name: "Red de Iglesias Cristo Vive", location: "El Salvador" },
      { name: "Asociación de Pastores de la Zona Oriente", location: "Zona Oriente, El Salvador" }
    ]
  },
  {
    region: "Guatemala y México",
    countryBadge: "🇬🇹 🇲🇽 Guatemala y México",
    allies: [
      { name: "Red de Institutos Bíblicos Fronterizos", location: "Guatemala y México" },
      { name: "Iglesias Misión Centroamericana", location: "Guatemala" },
      { name: "Iglesias Presbiterianas de Chiapas", location: "Chiapas, México" }
    ]
  },
  {
    region: "Nicaragua",
    countryBadge: "🇳🇮 Nicaragua",
    allies: [
      { name: "Iglesias Presbiterianas Reformadas de Nicaragua", location: "Nicaragua" },
      { name: "Confraternidad Pastoral Ministerio Oasis", location: "Chinandega, Nicaragua" }
    ]
  },
  {
    region: "Honduras",
    countryBadge: "🇭🇳 Honduras",
    allies: [
      { name: "Iglesia Bíblica Gracia sin Fin", location: "Tegucigalpa, Honduras" },
      { name: "Iglesia Cristiana Reformada de Corinto", location: "San Lorenzo, Valle, Honduras" }
    ]
  },
  {
    region: "Nuestros amigos Internacionales",
    countryBadge: "🌐 Nuestros amigos Internacionales",
    allies: [
      { name: "Gospel Society Mission", location: "El Salvador" },
      { name: "Iglesia \"Por la Gracia de Dios, San Miguel\"", location: "El Salvador" },
      { name: "Trinitarian Bible Society", location: "Londres, Inglaterra" },
      { name: "Centro de Estudios Kuyper", location: "Argentina" },
      { name: "Teaching Missions International - Teaching Biblical Reformed", location: "USA" },
      { name: "Third Millennium Ministries", location: "USA" },
      { name: "Chapel Library", location: "USA" },
      { name: "Iglesia Bíblica Maranatha Lynn", location: "Mass, USA" },
      { name: "Equipping the Church International (ECI) by Pastor José Amézquita", location: "USA" }
    ]
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "dr-javier-dominguez",
    name: "Dr. Javier Domínguez",
    title: "Dr. en Teología",
    institution: "Iglesia Gracia sobre Gracia, El Salvador",
    initials: "JD",
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/pastorjavier.jpeg"
  },
  {
    id: "pastor-jorge-arturo-aranivas",
    name: "Pastor Jorge Arturo Aranivas",
    title: "Pastor",
    institution: "Third Baptist Church de Murfreesboro",
    initials: "JA",
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/pastorarturo.png"
  },
  {
    id: "dr-josias-kim",
    name: "Dr. Josías Kim",
    title: "Dr. en Teología",
    institution: "Iglesia Presbiteriana Nicaragua · Originario de Corea",
    initials: "JK",
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/josias.png"
  },
  {
    id: "dr-noe-acosta",
    name: "Dr. Noé Acosta",
    title: "Dr. en Teología",
    institution: "Fundador de SRL, USA",
    initials: "NA",
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/drnoeacostasrl.png"
  },
  {
    id: "dr-julio-benitez",
    name: "Dr. Julio Benítez",
    title: "Dr. en Teología",
    institution: "Iglesia de la Gracia, Colombia",
    initials: "JB",
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/juliobenitez.png"
  },
  {
    id: "dr-joe-fitzpatrick",
    name: "Dr. Joe Fitzpatrick",
    title: "Dr. en Teología",
    institution: "Misionero de MTW, USA",
    initials: "JF",
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/FITZPATRICK.png"
  },
  {
    id: "dr-richard-smith",
    name: "Dr. Richard Smith",
    title: "Dr. en Teología",
    institution: "Centro Kuyper, Argentina · Originario de USA",
    initials: "RS",
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/richardsmith.jpg"
  },
  {
    id: "pastor-jose-luis-amezquita",
    name: "Pastor José Luis Amézquita",
    title: "Pastor en Cornerstone Church Simi Valley",
    institution: "Equipping the Church International (ECI)",
    initials: "JA",
    photo: "https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/joseluis.png"
  }
];

export const FIELD_MENTORS: FieldMentor[] = [
  {
    id: "m-1",
    name: "Pastor Mario Miranda Astorga",
    role: "Pastor de Iglesia Cristiana Pacto de Vida en Cervantes de Alvarado, Cartago, Costa Rica",
    location: "Mentor en Academia de Cartago, Costa Rica"
  },
  {
    id: "m-2",
    name: "Pastor Reynaldo Acuña",
    role: "Maestro Itinerante de Teología en todo Nicaragua",
    location: "Mentor en Academia de Puerto Corinto y Puerto Morazán"
  },
  {
    id: "m-3",
    name: "Pastor Alexis Núñez",
    role: "Pastor en Iglesia Cristo Vive",
    location: "Mentor en Academia de Ahuachapán, El Salvador"
  },
  {
    id: "m-4",
    name: "Pastor Domingo Flores",
    role: "Pastor de Iglesia Misión CentroAmericana en cantón las Nubes, Cheguate",
    location: "Honorífico Donante de terreno para la Biblioteca y Centro de estudios en Cheguate, Tacaná, Guatemala"
  },
  {
    id: "m-5",
    name: "Pastor Mario Sorto",
    role: "Pastor y Mentor Regional",
    location: "Tegucigalpa, Honduras"
  },
  {
    id: "m-8",
    name: "Pastor Francisco Ávila",
    role: "Pastor de la Iglesia Cristiana Reformada de Aldea Corinto, San Lorenzo, Valle, Honduras",
    location: "Profesor en Centro Misionero \"Heme aquí, envíame a mí\""
  },
  {
    id: "m-6",
    name: "Ing. Jhony Cabrera",
    role: "Músico Iglesia Bíblica Faro de Gracia, Honduras",
    location: "Colaborador en Centro Misionero \"Heme aquí, Envíame a mí\""
  },
  {
    id: "m-7",
    name: "Dra. Nancy Ávila",
    role: "Doctora en Medicina General, Honduras",
    location: "Colaboradora en Salud en Centro Misionero \"Heme aquí, Envíame a mí\""
  },
  {
    id: "m-9",
    name: "Dra. Damaris Núñez",
    role: "Doctora en Odontología / Ortodoncista",
    location: "Coordinadora de Brigadas Odontológicas en Mission of Harmony Honduras"
  },
  {
    id: "m-10",
    name: "Pastor Denis Fernando Ramírez",
    role: "Pastor de Iglesia Bautista Independiente de Somoto, Madriz, Nicaragua",
    location: "Embajador de Academia Bíblica en Norte de Nicaragua"
  },
  {
    id: "m-11",
    name: "Pastor Yesser Gutiérrez",
    role: "Pastor Iglesia Bautista Independiente de Condega, Estelí, Nicaragua",
    location: "Colaborador de Academia"
  },
  {
    id: "m-12",
    name: "Pastor Edwin Guzmán",
    role: "Presidente de la Fraternidad de Pastores Ministerio Oasis, Chinandega, Nicaragua",
    location: "Colaborador de Academia"
  },
  {
    id: "m-13",
    name: "Pastor Fausto Noel Ponce",
    role: "Pastor líder en la comunidad de Francisco Gotera, El Salvador",
    location: "Colaborador de Academia"
  },
  {
    id: "m-14",
    name: "Hno. Daniel Ávila",
    role: "Maestro de Biblia en Honduras",
    location: "Colaborador de Centro Misionero \"Heme aquí, envíame a mí\""
  },
  {
    id: "m-15",
    name: "Hno. Alexander Paz",
    role: "Maestro de Biblia y Consejero Matrimonial",
    details: "Contador Público (Organiza las finanzas de la Academia)",
    location: "Colaborador de Centro Misionero \"Heme aquí, envíame a mí\""
  },
  {
    id: "m-16",
    name: "Pastor Eliezer",
    role: "Pastor de Iglesia Independiente en Niquivil, Chiapas, México",
    location: "Colaborador de Academia"
  },
  {
    id: "m-17",
    name: "Pastor Mardo Flores",
    role: "Pastor en Iglesia Centroamericana de Cheguate, Tacaná, Guatemala",
    location: "Colaborador de Academia"
  },
  {
    id: "m-18",
    name: "Pastor Carlos Márquez",
    role: "Pastor de Iglesia Cristo Vive Central Ahuachapán",
    location: "Colaborador de Academia"
  },
  {
    id: "m-19",
    name: "Pastor Robert Zepeda",
    role: "Iglesia Cristo Vive in Lake Elsinore",
    location: "Colaborador de Academia"
  },
  {
    id: "m-20",
    name: "Pastor Jarol",
    role: "Pastor en Iglesia Presbiteriana de Ahuachapán",
    location: "Colaborador de Academia"
  },
  {
    id: "m-21",
    name: "Pastor Joel Flores",
    role: "Pastor en Iglesia Bíblica Nueva Vida, Lourdes, Colón, El Salvador",
    location: "Colaborador de Academia"
  },
  {
    id: "m-22",
    name: "Pastor Félix Pavón",
    role: "Pastor de la iglesia en Niquinomo, Nicaragua",
    location: "Organizador de Conferencias / Colaborador de Academia"
  },
  {
    id: "m-23",
    name: "Jesús Merino",
    role: "Creador y administrador de Podcast La Palabra Hablada",
    details: "Querétaro, México",
    location: "Colaborador de Academia"
  },
  {
    id: "m-24",
    name: "Pastor Elías Carbajal",
    role: "Pastor Iglesia Reformada Príncipe de Paz",
    details: "Masaya, Nicaragua",
    location: "Colaborador de Academia"
  }
];

export const MISSIONARY_REPORTS: import('../types').MissionaryReport[] = [
  {
    id: "reporte-san-lorenzo-2026",
    title: "Reporte Misionero de Campo: Centro Misionero \"Heme aqui, Enviame a mi\"",
    date: "Octubre 2026",
    location: "San Lorenzo, Valle, Honduras",
    author: "Pastor Isaias Martinez y Equipo Misionero",
    summary: "Resumen de las jornadas de entrenamiento practico rural, alabanza comunitaria y atencion medica primaria desarrolladas junto a colaboradores locales en el sur de Honduras.",
    highlights: [
      "Capacitacion practica de 25 aspirantes misioneros en teologia de campo y vida rural.",
      "Jornadas de salud preventiva y orientacion medica comunitaria en comunidades vecinas.",
      "Apoyo musical y discipulado semanal con la Iglesia Biblica Faro de Gracia."
    ],
    prayerNeeds: "Oramos por provision de literas, insumos medicos basicos y becas de alimentacion para los nuevos estudiantes internos de enero 2027."
  },
  {
    id: "reporte-tacana-guatemala-2026",
    title: "Reporte Trimestral: Centro de Estudios y Biblioteca \"El Evangelio\"",
    date: "Septiembre 2026",
    location: "Cheguate, Tacana, Guatemala",
    author: "Pastor Domingo Flores y Coordinacion Regional",
    summary: "Informe de las actividades de los 11 institutos biblicos beneficiarios en la frontera de Guatemala y Mexico y del retiro intensivo de estudio biblico.",
    highlights: [
      "Mas de 100 estudiantes reunidos en el encuentro intensivo cuatrimestral de estudio biblico.",
      "Entrega de folletos impresos y catalogacion de nuevos volumenes teologicos en la biblioteca.",
      "Consolidacion de la red de pastores en comunidades montañosas de San Marcos y Chiapas."
    ],
    prayerNeeds: "Oramos por sabiduria para los maestros itinerantes y por las rutas de transporte en zonas montañosas durante la temporada de lluvias."
  },
  {
    id: "reporte-el-crucero-nicaragua-2026",
    title: "Reporte de Consejeria: Eco-Well Health El Crucero",
    date: "Agosto 2026",
    location: "El Crucero, Nicaragua",
    author: "Equipo de Consejeria Biblica Pastoral",
    summary: "Balance de los talleres de orientacion familiar, prevencion de adicciones conductuales y restauracion espiritual para jovenes y matrimonios.",
    highlights: [
      "Talleres practicos sobre dominio propio frente a adicciones a videojuegos, redes sociales y compras compulsivas.",
      "Sesiones de acompañamiento pastoral para sanidad de codependencia familiar y conyugal.",
      "Distribucion de guias de estudio biblico practico para padres y lideres juveniles."
    ],
    prayerNeeds: "Oramos por nuevos consejeros voluntarios dispuestos a dedicar fines de semana al cuidado espiritual de jovenes y familias."
  },
  {
    id: "reporte-clinica-cisneros-2026",
    title: "Reporte de Salud Comunitaria: Clinica de Salud Dr. Cisneros",
    date: "Julio 2026",
    location: "El Salvador",
    author: "Equipo Medico y Educativo Cristiano",
    summary: "Sintesis de las orientaciones medicas gratuitas, segundas opiniones educativas y talleres preventivos brindados a familias de escasos recursos.",
    highlights: [
      "Orientacion a pacientes para navegar de forma efectiva la Red Integrada de Servicios de Salud.",
      "Auditoria educativa y segunda opinion sobre tratamientos cronicos para familias rurales.",
      "Talleres de prevencion de riesgos laborales y cuidado integral de la salud."
    ],
    prayerNeeds: "Oramos por medicos, enfermeras y educadores cristianos que deseen donar horas de servicio en futuras brigadas comunitarias."
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
  ]
};
