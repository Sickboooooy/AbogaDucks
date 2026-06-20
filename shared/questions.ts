import { Question, DuckProfile, Dimension } from "./schema";

export const QUESTIONS: Question[] = [
  // --- SECCIÓN 1: SITUACIONAL (12) ---
  {
    id: 1,
    section: "Situacional",
    text: "Tu vecino acaba de levantar una barda que se comió 50 cm de tu terreno. Llega un cliente con exactamente ese problema. ¿Por dónde te late empezar?",
    type: "multiple_choice",
    options: [
      { text: "Directo al juzgado: un juicio reivindicatorio para recuperar cada centímetro", weights: { [DuckProfile.PENAL]: 1, [DuckProfile.CIVIL]: 2, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Sentar a los vecinos a negociar antes de que esto escale a una guerra", weights: { [DuckProfile.LABORAL]: 1, [Dimension.NEGOCIACION]: 2, [Dimension.EMPATIA]: 1 } },
      { text: "Primero a los archivos: ¿habrá escrituras o servidumbres que aclaren el lindero?", weights: { [DuckProfile.NOTARIAL]: 2, [Dimension.INVESTIGACION]: 1 } },
      { text: "Sacar la calculadora: ¿el terreno invadido vale lo que cuesta el pleito?", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1 } }
    ]
  },
  {
    id: 2,
    section: "Situacional",
    text: "Plena audiencia. El abogado contrario suelta un dato técnico que sabes que está mal... pero que juega a favor de tu cliente. ¿Qué haces?",
    type: "multiple_choice",
    options: [
      { text: "Nada. No es mi chamba corregir los errores del rival", weights: { [DuckProfile.PENAL]: 1 } },
      { text: "Le pido al juez que aclare el punto: prefiero un proceso sin vicios", weights: { [DuckProfile.CONSTITUCIONAL]: 2, [Dimension.ETICA]: 1, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Lo anoto en silencio y lo guardo como as bajo la manga para los alegatos", weights: { [DuckProfile.MERCANTIL]: 1, [Dimension.TOLERANCIA_ESTRES]: 1 } },
      { text: "Al salir de la audiencia, le comento discretamente que revise su argumento", weights: { [DuckProfile.LABORAL]: 1, [Dimension.EMPATIA]: 1, [Dimension.NEGOCIACION]: 1 } }
    ]
  },
  {
    id: 3,
    section: "Situacional",
    text: "Tienes tiempo para UN solo caso pro bono. Tu corazón se va por:",
    type: "multiple_choice",
    options: [
      { text: "Una trabajadora del hogar: 15 años sin seguridad social ni quien la defienda", weights: { [DuckProfile.LABORAL]: 2, [Dimension.EMPATIA]: 1, [Dimension.ETICA]: 1 } },
      { text: "Un amparo contra una ley que quiere callar las protestas en la calle", weights: { [DuckProfile.CONSTITUCIONAL]: 2, [Dimension.LIDERAZGO]: 1 } },
      { text: "Una comunidad indígena defendiendo su territorio ancestral", weights: { [DuckProfile.AGRARIO]: 2, [DuckProfile.AMBIENTAL]: 1, [Dimension.EMPATIA]: 1 } },
      { text: "Una startup demandada por cómo maneja los datos personales de sus usuarios", weights: { [DuckProfile.DIGITAL]: 2, [DuckProfile.MERCANTIL]: 1 } }
    ]
  },
  {
    id: 4,
    section: "Situacional",
    text: "Arrancan tus prácticas profesionales. Si pudieras elegir dónde rotar, te irías a:",
    type: "multiple_choice",
    options: [
      { text: "Ministerio Público o defensoría penal: donde se cuece la acción", weights: { [DuckProfile.PENAL]: 2, [Dimension.COMUNICACION_ORAL]: 1, [Dimension.TOLERANCIA_ESTRES]: 1 } },
      { text: "Junta de Conciliación y Arbitraje", weights: { [DuckProfile.LABORAL]: 2, [Dimension.NEGOCIACION]: 1, [Dimension.EMPATIA]: 1 } },
      { text: "El área de cumplimiento regulatorio de una empresa", weights: { [DuckProfile.ADMINISTRATIVO]: 1, [DuckProfile.FISCAL]: 1, [Dimension.INVESTIGACION]: 1 } },
      { text: "Una notaría pública", weights: { [DuckProfile.NOTARIAL]: 2, [DuckProfile.CIVIL]: 1, [Dimension.REDACCION]: 1 } }
    ]
  },
  {
    id: 5,
    section: "Situacional",
    text: "Faltan 24 horas para presentar un amparo y descubres un error grave en la demanda. El reloj corre. ¿Cómo reaccionas?",
    type: "multiple_choice",
    options: [
      { text: "Café cargado y noche en vela: los plazos constitucionales no perdonan", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.TOLERANCIA_ESTRES]: 2, [Dimension.REDACCION]: 1 } },
      { text: "Respiro y evalúo: ¿el error de verdad mata el caso o se puede salvar?", weights: { [Dimension.ANALISIS_LOGICO]: 2, [Dimension.INVESTIGACION]: 1 } },
      { text: "Llamo al cliente, le explico de frente y vemos las opciones juntos", weights: { [Dimension.COMUNICACION_ORAL]: 1, [Dimension.ETICA]: 1 } },
      { text: "Reparto tareas con el equipo para llegar a tiempo sin morir en el intento", weights: { [Dimension.LIDERAZGO]: 2, [Dimension.TRABAJO_EQUIPO]: 1 } }
    ]
  },
  {
    id: 6,
    section: "Situacional",
    text: "Dos ofertas de trabajo, exactamente el mismo sueldo. ¿Cuál firmas?",
    type: "multiple_choice",
    options: [
      { text: "Fiscalía especializada en delitos de alto impacto", weights: { [DuckProfile.PENAL]: 2, [Dimension.TOLERANCIA_ESTRES]: 1, [Dimension.LIDERAZGO]: 1 } },
      { text: "El área jurídica de una ONG ambiental", weights: { [DuckProfile.AMBIENTAL]: 2, [Dimension.EMPATIA]: 1, [Dimension.ETICA]: 1 } },
      { text: "Un despacho corporativo internacional", weights: { [DuckProfile.INTERNACIONAL]: 2, [DuckProfile.MERCANTIL]: 1, [Dimension.COMUNICACION_ORAL]: 1 } },
      { text: "Una notaría pública", weights: { [DuckProfile.NOTARIAL]: 2, [DuckProfile.CIVIL]: 1, [Dimension.REDACCION]: 1 } }
    ]
  },
  {
    id: 7,
    section: "Situacional",
    text: "Imagina el final feliz de un caso. ¿Qué momento te haría sentir más realizado?",
    type: "multiple_choice",
    options: [
      { text: "Ganar un argumento complejo frente al tribunal", weights: { [DuckProfile.PENAL]: 1, [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.COMUNICACION_ORAL]: 1 } },
      { text: "Lograr que las partes cierren el trato sin pisar un juzgado", weights: { [DuckProfile.LABORAL]: 1, [DuckProfile.CIVIL]: 1, [Dimension.NEGOCIACION]: 2 } },
      { text: "Armar una operación corporativa de alto nivel pieza por pieza", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Proteger los derechos de alguien que no podía defenderse solo", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [DuckProfile.LABORAL]: 1, [Dimension.EMPATIA]: 2 } }
    ]
  },
  {
    id: 8,
    section: "Situacional",
    text: "Una empresa quiere despedir a 200 personas por reestructura y te pide guía. ¿Cómo lo abordas?",
    type: "multiple_choice",
    options: [
      { text: "Asegurar que cada paso cumpla al pie de la letra la Ley Federal del Trabajo", weights: { [DuckProfile.LABORAL]: 2, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Negociar liquidaciones por encima del mínimo legal", weights: { [DuckProfile.LABORAL]: 1, [Dimension.NEGOCIACION]: 2, [DuckProfile.MERCANTIL]: 1 } },
      { text: "Buscar salidas: reducir jornadas o reubicar gente antes de despedir", weights: { [DuckProfile.LABORAL]: 1, [Dimension.EMPATIA]: 2, [Dimension.ETICA]: 1 } },
      { text: "Calcular el impacto fiscal de cada forma de terminación", weights: { [DuckProfile.FISCAL]: 2, [DuckProfile.MERCANTIL]: 1 } }
    ]
  },
  {
    id: 9,
    section: "Situacional",
    text: "Te buscan para asesorar una fintech de criptomonedas que operará en México. ¿Qué frente te emocionaría dominar?",
    type: "multiple_choice",
    options: [
      { text: "La Ley Fintech y los permisos ante Banxico", weights: { [DuckProfile.DIGITAL]: 1, [DuckProfile.ADMINISTRATIVO]: 1, [DuckProfile.MERCANTIL]: 1 } },
      { text: "El blindaje contra el lavado de dinero", weights: { [DuckProfile.PENAL]: 1, [DuckProfile.FISCAL]: 1, [DuckProfile.INTERNACIONAL]: 1 } },
      { text: "La protección de datos personales y los términos de servicio", weights: { [DuckProfile.DIGITAL]: 2, [DuckProfile.CIVIL]: 1 } },
      { text: "La estructura corporativa y los contratos con inversionistas", weights: { [DuckProfile.MERCANTIL]: 2, [DuckProfile.INTERNACIONAL]: 1 } }
    ]
  },
  {
    id: 10,
    section: "Situacional",
    text: "Una comunidad ejidal te busca: una minera quiere explotar sus tierras. ¿Qué pones primero sobre la mesa?",
    type: "multiple_choice",
    options: [
      { text: "Que se respete su derecho a la consulta previa, libre e informada", weights: { [DuckProfile.AGRARIO]: 1, [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.EMPATIA]: 1 } },
      { text: "Negociar las mejores condiciones económicas para la comunidad", weights: { [DuckProfile.AGRARIO]: 1, [Dimension.NEGOCIACION]: 2, [DuckProfile.MERCANTIL]: 1 } },
      { text: "Medir el daño ambiental y exigir medidas de mitigación", weights: { [DuckProfile.AMBIENTAL]: 2, [DuckProfile.ADMINISTRATIVO]: 1 } },
      { text: "Documentar sus derechos ancestrales sobre el territorio", weights: { [DuckProfile.AGRARIO]: 2, [Dimension.INVESTIGACION]: 1 } }
    ]
  },
  {
    id: 11,
    section: "Situacional",
    text: "Avanza el reloj 10 años. ¿Dónde te ves principalmente?",
    type: "multiple_choice",
    options: [
      { text: "Como litigante temido y respetado en los tribunales más altos", weights: { [DuckProfile.PENAL]: 1, [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.COMUNICACION_ORAL]: 1 } },
      { text: "Como socio de un despacho corporativo", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1, [Dimension.LIDERAZGO]: 1 } },
      { text: "Como funcionario público de alto nivel o magistrado", weights: { [DuckProfile.ADMINISTRATIVO]: 1, [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.LIDERAZGO]: 1 } },
      { text: "Con despacho propio especializado y, sobre todo, con vida personal", weights: { [DuckProfile.CIVIL]: 1, [DuckProfile.NOTARIAL]: 1, [Dimension.TRABAJO_EQUIPO]: 1 } }
    ]
  },
  {
    id: 12,
    section: "Situacional",
    text: "Seamos sinceros: ¿qué te llevó realmente a estudiar Derecho?",
    type: "multiple_choice",
    options: [
      { text: "Series, películas y juicios mediáticos que me atraparon", weights: { [DuckProfile.PENAL]: 2, [Dimension.COMUNICACION_ORAL]: 1 } },
      { text: "Injusticias que vi de cerca y quise poder combatir", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [DuckProfile.LABORAL]: 1, [Dimension.EMPATIA]: 2 } },
      { text: "El mundo de los negocios y las grandes transacciones", weights: { [DuckProfile.MERCANTIL]: 2, [DuckProfile.FISCAL]: 1, [DuckProfile.INTERNACIONAL]: 1 } },
      { text: "Tradición familiar o la admiración por algún abogado que conozco", weights: { [DuckProfile.NOTARIAL]: 1, [DuckProfile.CIVIL]: 1 } }
    ]
  },
  // --- SECCIÓN 2: APTITUDES (11) ---
  {
    id: 13,
    section: "Aptitudes",
    text: "Los acertijos, rompecabezas y problemas de lógica son mi pasatiempo, no mi pesadilla.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 2 } }
    ]
  },
  {
    id: 14,
    section: "Aptitudes",
    text: "Tengo un radar para detectar contradicciones e incoherencias en cualquier argumento.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 2 } }
    ]
  },
  {
    id: 15,
    section: "Aptitudes",
    text: "Hablar frente a un montón de desconocidos no me intimida; me prende.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 2 } }
    ]
  },
  {
    id: 16,
    section: "Aptitudes",
    text: "En un debate acalorado, sé poner mis ideas claras y convencer.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 2 } }
    ]
  },
  {
    id: 17,
    section: "Aptitudes",
    text: "Mis textos salen claros y bien ordenados, pensados para quien los va a leer.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.REDACCION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.REDACCION]: 2 } }
    ]
  },
  {
    id: 18,
    section: "Aptitudes",
    text: "Redactar, editar y pulir un documento me relaja en lugar de aburrirme.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.REDACCION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.REDACCION]: 2 } }
    ]
  },
  {
    id: 19,
    section: "Aptitudes",
    text: "En los pleitos de amigos o familia, siempre termino siendo quien busca el punto medio.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.NEGOCIACION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.NEGOCIACION]: 2 } }
    ]
  },
  {
    id: 20,
    section: "Aptitudes",
    text: "Estoy convencido: casi todo conflicto tiene una salida donde todos ganan algo.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.NEGOCIACION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.NEGOCIACION]: 2 } }
    ]
  },
  {
    id: 21,
    section: "Aptitudes",
    text: "Buscar información me parece una aventura, no una lata.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.INVESTIGACION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.INVESTIGACION]: 2 } }
    ]
  },
  {
    id: 22,
    section: "Aptitudes",
    text: "Bajo plazos imposibles y presión a tope, mantengo la cabeza fría.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.TOLERANCIA_ESTRES]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.TOLERANCIA_ESTRES]: 2 } }
    ]
  },
  {
    id: 23,
    section: "Aptitudes",
    text: "Rindo mucho mejor en equipo que trabajando en solitario.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.TRABAJO_EQUIPO]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.TRABAJO_EQUIPO]: 2 } }
    ]
  },
  // --- SECCIÓN 3: VALORES (7) ---
  {
    id: 24,
    section: "Valores",
    text: "En el fondo, lo que más quiero de mi carrera profesional es:",
    type: "multiple_choice",
    options: [
      { text: "Estabilidad económica y horarios que pueda predecir", weights: { [DuckProfile.NOTARIAL]: 2, [DuckProfile.ADMINISTRATIVO]: 1 } },
      { text: "Prestigio y que mi nombre suene en el medio", weights: { [DuckProfile.PENAL]: 1, [Dimension.LIDERAZGO]: 2 } },
      { text: "Dejar huella ayudando a otros", weights: { [Dimension.EMPATIA]: 2, [DuckProfile.AMBIENTAL]: 1 } },
      { text: "Ser mi propio jefe, con total independencia", weights: { [DuckProfile.CIVIL]: 1, [DuckProfile.DIGITAL]: 1 } }
    ]
  },
  {
    id: 25,
    section: "Valores",
    text: "De ejercer el derecho, lo que de verdad me quitaría el sueño sería:",
    type: "multiple_choice",
    options: [
      { text: "Defender a alguien sabiendo que probablemente es culpable", weights: { [Dimension.ETICA]: 2, [DuckProfile.PENAL]: -1 } },
      { text: "Trabajar casos donde el resultado es legal... pero se siente injusto", weights: { [Dimension.ETICA]: 1, [DuckProfile.CONSTITUCIONAL]: 1 } },
      { text: "No poder ayudar a alguien por falta de recursos o de tiempo", weights: { [Dimension.EMPATIA]: 2 } },
      { text: "Que el trabajo se trague por completo mi vida personal", weights: { [Dimension.TOLERANCIA_ESTRES]: -1, [DuckProfile.NOTARIAL]: 1 } }
    ]
  },
  {
    id: 26,
    section: "Valores",
    text: "Para ti, «éxito profesional» se traduce sobre todo en:",
    type: "multiple_choice",
    options: [
      { text: "Ganar casos grandes y construir una reputación sólida", weights: { [DuckProfile.PENAL]: 2, [Dimension.LIDERAZGO]: 1 } },
      { text: "Tener clientes contentos que te recomiendan con todos", weights: { [DuckProfile.CIVIL]: 1, [DuckProfile.NOTARIAL]: 1 } },
      { text: "Aportar a un cambio real y positivo en la sociedad", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [DuckProfile.AMBIENTAL]: 2 } },
      { text: "Lograr estabilidad económica para los tuyos", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1 } }
    ]
  },
  {
    id: 27,
    section: "Valores",
    text: "El secreto profesional cliente-abogado debe respetarse incluso si el cliente planea dañar a un tercero.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: { [Dimension.ETICA]: 2 } }, { text: "En desacuerdo", weights: { [Dimension.ETICA]: 1 } }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [DuckProfile.PENAL]: 1 } }, { text: "Muy de acuerdo", weights: { [DuckProfile.PENAL]: 2 } }
    ]
  },
  {
    id: 28,
    section: "Valores",
    text: "Mismo honorario, dos casos sobre la mesa. ¿Cuál tomas?",
    type: "multiple_choice",
    options: [
      { text: "Defender a una empresa en un despido que casi seguro va a ganar", weights: { [DuckProfile.MERCANTIL]: 1 } },
      { text: "Representar al trabajador despedido, aunque sea cuesta arriba", weights: { [DuckProfile.LABORAL]: 2, [Dimension.EMPATIA]: 1 } }
    ]
  },
  {
    id: 29,
    section: "Valores",
    text: "Si tuvieras que elegir un sabor de victoria... o de derrota:",
    type: "multiple_choice",
    options: [
      { text: "Ganar con argumentos técnicos, aunque en el fondo el otro tenía la razón", weights: { [Dimension.ANALISIS_LOGICO]: 2, [Dimension.ETICA]: -1 } },
      { text: "Perder un caso que defendías con todas tus convicciones éticas", weights: { [Dimension.ETICA]: 2, [Dimension.TOLERANCIA_ESTRES]: -1 } }
    ]
  },
  {
    id: 30,
    section: "Valores",
    text: "Última y la más importante: ¿con qué frase te identificas más?",
    type: "multiple_choice",
    options: [
      { text: "Mi deber es defender los intereses de mi cliente hasta donde la ley lo permita", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.PENAL]: 1 } },
      { text: "Mi deber es procurar que se haga justicia en cada caso", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.ETICA]: 1 } }
    ]
  }
];
