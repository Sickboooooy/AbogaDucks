import { Question, DuckProfile, Dimension } from "./schema";

export const QUESTIONS: Question[] = [
  // --- SECCIÓN 1: SITUATIONAL (20) ---
  // Bloque 1
  {
    id: 1,
    section: "Situacional",
    text: "Un cliente te consulta porque su vecino construyó invadiendo 50 cm de su terreno. ¿Qué estrategia preferirías explorar primero?",
    type: "multiple_choice",
    options: [
      { text: "Iniciar un juicio reivindicatorio para restablecer el derecho de propiedad", weights: { [DuckProfile.PENAL]: 1, [DuckProfile.CIVIL]: 2, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Proponer una mediación vecinal para acordar una solución práctica", weights: { [DuckProfile.LABORAL]: 1, [Dimension.NEGOCIACION]: 2, [Dimension.EMPATIA]: 1 } },
      { text: "Investigar si existe un convenio previo o servidumbre que aclare los linderos", weights: { [DuckProfile.NOTARIAL]: 2, [Dimension.INVESTIGACION]: 1 } },
      { text: "Analizar si el valor del terreno invadido justifica los costos procesales", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1 } }
    ]
  },
  {
    id: 2,
    section: "Situacional",
    text: "Durante una audiencia, el abogado contrario hace una afirmación que sabes es técnicamente incorrecta pero beneficia a tu cliente. ¿Qué haces?",
    type: "multiple_choice",
    options: [
      { text: "Guardo silencio; no me corresponde corregir errores de la contraparte", weights: { [DuckProfile.PENAL]: 1 } },
      { text: "Solicito al juez que se aclare el punto técnico para evitar vicios procesales", weights: { [DuckProfile.CONSTITUCIONAL]: 2, [Dimension.ETICA]: 1, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Tomo nota para usarlo estratégicamente en alegatos", weights: { [DuckProfile.MERCANTIL]: 1, [Dimension.TOLERANCIA_ESTRES]: 1 } },
      { text: "Después de la audiencia, sugiero a la contraparte revisar su argumento", weights: { [DuckProfile.LABORAL]: 1, [Dimension.EMPATIA]: 1, [Dimension.NEGOCIACION]: 1 } }
    ]
  },
  {
    id: 3,
    section: "Situacional",
    text: "Un empresario te pide redactar un contrato que, aunque legal, claramente desfavorece a la contraparte (un proveedor pequeño). Tu reacción inicial sería:",
    type: "multiple_choice",
    options: [
      { text: "Redactarlo como lo solicita; mi deber es representar los intereses de mi cliente", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1 } },
      { text: "Sugerir cláusulas más equilibradas que protejan la relación comercial a largo plazo", weights: { [DuckProfile.CIVIL]: 1, [Dimension.NEGOCIACION]: 1, [Dimension.EMPATIA]: 1 } },
      { text: "Advertir sobre posibles riesgos de impugnación por lesión o cláusulas abusivas", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.ETICA]: 1, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Proponer que ambas partes tengan asesoría independiente antes de firmar", weights: { [DuckProfile.NOTARIAL]: 2, [Dimension.ETICA]: 1 } }
    ]
  },
  // Bloque 2
  {
    id: 4,
    section: "Situacional",
    text: "Te ofrecen tres casos pro bono. ¿Cuál elegirías?",
    type: "multiple_choice",
    options: [
      { text: "Defensa de un trabajador doméstico que lleva 15 años sin seguridad social", weights: { [DuckProfile.LABORAL]: 2, [Dimension.EMPATIA]: 1, [Dimension.ETICA]: 1 } },
      { text: "Amparo contra una ley que restringe manifestaciones públicas", weights: { [DuckProfile.CONSTITUCIONAL]: 2, [Dimension.LIDERAZGO]: 1 } },
      { text: "Asesoría a una comunidad indígena sobre sus derechos territoriales", weights: { [DuckProfile.AGRARIO]: 2, [DuckProfile.AMBIENTAL]: 1, [Dimension.EMPATIA]: 1 } },
      { text: "Representación de una startup que enfrenta demanda por uso de datos personales", weights: { [DuckProfile.DIGITAL]: 2, [DuckProfile.MERCANTIL]: 1 } }
    ]
  },
  {
    id: 5,
    section: "Situacional",
    text: "En una reunión familiar, tu tío te pregunta sobre una situación legal. Te sientes más cómodo respondiendo sobre:",
    type: "multiple_choice",
    options: [
      { text: "La pensión alimenticia que debe pagar tras su divorcio", weights: { [DuckProfile.CIVIL]: 2, [Dimension.EMPATIA]: 1 } },
      { text: "Si puede deducir fiscalmente la colegiatura de sus hijos", weights: { [DuckProfile.FISCAL]: 2, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Los permisos ambientales que necesita para ampliar su negocio", weights: { [DuckProfile.AMBIENTAL]: 2, [DuckProfile.ADMINISTRATIVO]: 1 } },
      { text: "Qué hacer si recibe mercancía falsificada de un proveedor extranjero", weights: { [DuckProfile.INTERNACIONAL]: 1, [DuckProfile.MERCANTIL]: 1 } }
    ]
  },
  {
    id: 6,
    section: "Situacional",
    text: "Durante tus prácticas profesionales, ¿en qué departamento te gustaría rotar?",
    type: "multiple_choice",
    options: [
      { text: "Ministerio Público o defensoría penal", weights: { [DuckProfile.PENAL]: 2, [Dimension.COMUNICACION_ORAL]: 1, [Dimension.TOLERANCIA_ESTRES]: 1 } },
      { text: "Junta de Conciliación y Arbitraje", weights: { [DuckProfile.LABORAL]: 2, [Dimension.NEGOCIACION]: 1, [Dimension.EMPATIA]: 1 } },
      { text: "Área de cumplimiento regulatorio de una empresa", weights: { [DuckProfile.ADMINISTRATIVO]: 1, [DuckProfile.FISCAL]: 1, [Dimension.INVESTIGACION]: 1 } },
      { text: "Notaría pública", weights: { [DuckProfile.NOTARIAL]: 2, [DuckProfile.CIVIL]: 1, [Dimension.REDACCION]: 1 } }
    ]
  },
  // Bloque 3
  {
    id: 7,
    section: "Situacional",
    text: "Faltan 24 horas para presentar un amparo y descubres un error grave en la demanda. ¿Cómo reaccionas?",
    type: "multiple_choice",
    options: [
      { text: "Trabajo toda la noche; los plazos constitucionales no admiten prórroga", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.TOLERANCIA_ESTRES]: 2, [Dimension.REDACCION]: 1 } },
      { text: "Evalúo si el error realmente afecta la procedencia o puede salvarse en aclaraciones", weights: { [Dimension.ANALISIS_LOGICO]: 2, [Dimension.INVESTIGACION]: 1 } },
      { text: "Contacto al cliente para explicar la situación y explorar opciones", weights: { [Dimension.COMUNICACION_ORAL]: 1, [Dimension.ETICA]: 1 } },
      { text: "Delego tareas al equipo para distribuir la carga y cumplir el plazo", weights: { [Dimension.LIDERAZGO]: 2, [Dimension.TRABAJO_EQUIPO]: 1 } }
    ]
  },
  {
    id: 8,
    section: "Situacional",
    text: "Un cliente importante te exige resultados inmediatos en un caso complejo. Tu respuesta natural sería:",
    type: "multiple_choice",
    options: [
      { text: "Explicarle los tiempos procesales reales para gestionar sus expectativas", weights: { [Dimension.COMUNICACION_ORAL]: 2, [Dimension.ETICA]: 1 } },
      { text: "Buscar medidas cautelares o provisionales que den resultados parciales", weights: { [Dimension.ANALISIS_LOGICO]: 1, [DuckProfile.CONSTITUCIONAL]: 1 } },
      { text: "Derivarlo a un colega si siento que la presión afectará mi desempeño", weights: { [Dimension.ETICA]: 1, [Dimension.EMPATIA]: 1 } },
      { text: "Asumir el reto; trabajo mejor bajo presión", weights: { [Dimension.TOLERANCIA_ESTRES]: 2, [DuckProfile.PENAL]: 1 } }
    ]
  },
  {
    id: 9,
    section: "Situacional",
    text: "En un juicio oral, el testigo clave de tu caso comienza a contradecirse. ¿Qué haces?",
    type: "multiple_choice",
    options: [
      { text: "Solicito un receso para preparar una estrategia de recuperación", weights: { [Dimension.ANALISIS_LOGICO]: 1, [Dimension.TOLERANCIA_ESTRES]: 1 } },
      { text: "Reformulo preguntas para guiar al testigo sin sugerirle respuestas", weights: { [Dimension.COMUNICACION_ORAL]: 2, [DuckProfile.PENAL]: 1 } },
      { text: "Apoyo el caso en otras pruebas y minimizo el daño de este testimonio", weights: { [Dimension.REDACCION]: 1, [Dimension.NEGOCIACION]: 1 } },
      { text: "Enfrento la contradicción directamente para mostrar transparencia al juzgador", weights: { [Dimension.ETICA]: 1, [DuckProfile.CONSTITUCIONAL]: 1 } }
    ]
  },
  // Bloque 4
  {
    id: 10,
    section: "Situacional",
    text: "Te ofrecen dos empleos con el mismo salario. ¿Cuál prefieres?",
    type: "multiple_choice",
    options: [
      { text: "Fiscalía especializada en delitos de alto impacto", weights: { [DuckProfile.PENAL]: 2, [Dimension.TOLERANCIA_ESTRES]: 1, [Dimension.LIDERAZGO]: 1 } },
      { text: "Área jurídica de una ONG ambiental", weights: { [DuckProfile.AMBIENTAL]: 2, [Dimension.EMPATIA]: 1, [Dimension.ETICA]: 1 } },
      { text: "Despacho corporativo internacional", weights: { [DuckProfile.INTERNACIONAL]: 2, [DuckProfile.MERCANTIL]: 1, [Dimension.COMUNICACION_ORAL]: 1 } },
      { text: "Notaría pública", weights: { [DuckProfile.NOTARIAL]: 2, [DuckProfile.CIVIL]: 1, [Dimension.REDACCION]: 1 } }
    ]
  },
  {
    id: 11,
    section: "Situacional",
    text: "¿Qué aspecto de un caso te resulta más satisfactorio?",
    type: "multiple_choice",
    options: [
      { text: "Ganar un argumento complejo ante un tribunal", weights: { [DuckProfile.PENAL]: 1, [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.COMUNICACION_ORAL]: 1 } },
      { text: "Lograr que las partes lleguen a un acuerdo sin juicio", weights: { [DuckProfile.LABORAL]: 1, [DuckProfile.CIVIL]: 1, [Dimension.NEGOCIACION]: 2 } },
      { text: "Estructurar una operación corporativa compleja", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Proteger los derechos de alguien vulnerable", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [DuckProfile.LABORAL]: 1, [Dimension.EMPATIA]: 2 } }
    ]
  },
  {
    id: 12,
    section: "Situacional",
    text: "Un amigo no abogado te pregunta qué hace un abogado. Tu respuesta instintiva sería:",
    type: "multiple_choice",
    options: [
      { text: "Defendemos a personas acusadas y buscamos justicia", weights: { [DuckProfile.PENAL]: 1, [DuckProfile.CONSTITUCIONAL]: 1 } },
      { text: "Ayudamos a resolver conflictos y evitar problemas legales", weights: { [DuckProfile.CIVIL]: 1, [Dimension.NEGOCIACION]: 1 } },
      { text: "Asesoramos a empresas para que operen dentro de la ley", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1, [DuckProfile.ADMINISTRATIVO]: 1 } },
      { text: "Damos certeza jurídica a los actos más importantes de las personas", weights: { [DuckProfile.NOTARIAL]: 2, [DuckProfile.CIVIL]: 1 } }
    ]
  },
  // Bloque 5
  {
    id: 13,
    section: "Situacional",
    text: "Una empresa te consulta: quieren despedir a 200 trabajadores por reestructura. ¿Qué abordaje tomarías?",
    type: "multiple_choice",
    options: [
      { text: "Verificar que se cumplan todos los requisitos de la Ley Federal del Trabajo", weights: { [DuckProfile.LABORAL]: 2, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Negociar un paquete de liquidación superior al mínimo legal", weights: { [DuckProfile.LABORAL]: 1, [Dimension.NEGOCIACION]: 2, [DuckProfile.MERCANTIL]: 1 } },
      { text: "Analizar alternativas como reducción de jornada o reubicaciones", weights: { [DuckProfile.LABORAL]: 1, [Dimension.EMPATIA]: 2, [Dimension.ETICA]: 1 } },
      { text: "Evaluar el impacto fiscal de las diferentes modalidades de terminación", weights: { [DuckProfile.FISCAL]: 2, [DuckProfile.MERCANTIL]: 1 } }
    ]
  },
  {
    id: 14,
    section: "Situacional",
    text: "Descubres que un juez tiene conflicto de interés en tu caso pero nadie más lo ha notado. ¿Qué haces?",
    type: "multiple_choice",
    options: [
      { text: "Presento inmediatamente la recusación con las pruebas correspondientes", weights: { [Dimension.ETICA]: 2, [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Consulto con el cliente si prefiere arriesgarse o cambiar de juzgador", weights: { [Dimension.COMUNICACION_ORAL]: 1, [Dimension.ETICA]: 1 } },
      { text: "Investigo más a fondo para documentar completamente el conflicto", weights: { [Dimension.INVESTIGACION]: 2, [Dimension.REDACCION]: 1 } },
      { text: "Evalúo si el conflicto realmente afectará la imparcialidad del juzgador", weights: { [Dimension.ANALISIS_LOGICO]: 2 } }
    ]
  },
  {
    id: 15,
    section: "Situacional",
    text: "Te piden asesorar la creación de una fintech que operará con criptomonedas en México. ¿Qué área dominas o te interesaría desarrollar?",
    type: "multiple_choice",
    options: [
      { text: "Regulación de la Ley Fintech y autorizaciones de Banxico", weights: { [DuckProfile.DIGITAL]: 1, [DuckProfile.ADMINISTRATIVO]: 1, [DuckProfile.MERCANTIL]: 1 } },
      { text: "Cumplimiento en materia de prevención de lavado de dinero", weights: { [DuckProfile.PENAL]: 1, [DuckProfile.FISCAL]: 1, [DuckProfile.INTERNACIONAL]: 1 } },
      { text: "Protección de datos personales y términos de servicio", weights: { [DuckProfile.DIGITAL]: 2, [DuckProfile.CIVIL]: 1 } },
      { text: "Estructura corporativa y contratos con inversionistas", weights: { [DuckProfile.MERCANTIL]: 2, [DuckProfile.INTERNACIONAL]: 1 } }
    ]
  },
  {
    id: 16,
    section: "Situacional",
    text: "Una comunidad ejidal te consulta porque una minera quiere explotar recursos en sus tierras. ¿Qué enfoque priorizarías?",
    type: "multiple_choice",
    options: [
      { text: "Verificar que se cumpla el derecho a la consulta previa, libre e informada", weights: { [DuckProfile.AGRARIO]: 1, [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.EMPATIA]: 1 } },
      { text: "Negociar las mejores condiciones económicas para la comunidad", weights: { [DuckProfile.AGRARIO]: 1, [Dimension.NEGOCIACION]: 2, [DuckProfile.MERCANTIL]: 1 } },
      { text: "Analizar los impactos ambientales y exigir medidas de mitigación", weights: { [DuckProfile.AMBIENTAL]: 2, [DuckProfile.ADMINISTRATIVO]: 1 } },
      { text: "Documentar los derechos ancestrales sobre el territorio", weights: { [DuckProfile.AGRARIO]: 2, [Dimension.INVESTIGACION]: 1 } }
    ]
  },
  // Bloque 6
  {
    id: 17,
    section: "Situacional",
    text: "En 10 años te visualizas principalmente:",
    type: "multiple_choice",
    options: [
      { text: "Como litigante reconocido en tribunales superiores", weights: { [DuckProfile.PENAL]: 1, [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.COMUNICACION_ORAL]: 1 } },
      { text: "Como socio de un despacho corporativo", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1, [Dimension.LIDERAZGO]: 1 } },
      { text: "Como funcionario público de alto nivel o magistrado", weights: { [DuckProfile.ADMINISTRATIVO]: 1, [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.LIDERAZGO]: 1 } },
      { text: "Con práctica propia especializada, balanceando trabajo y vida personal", weights: { [DuckProfile.CIVIL]: 1, [DuckProfile.NOTARIAL]: 1, [Dimension.TRABAJO_EQUIPO]: 1 } }
    ]
  },
  {
    id: 18,
    section: "Situacional",
    text: "¿Qué tipo de reconocimiento profesional valorarías más?",
    type: "multiple_choice",
    options: [
      { text: "Ganar un caso emblemático que genere jurisprudencia", weights: { [DuckProfile.CONSTITUCIONAL]: 2, [DuckProfile.PENAL]: 1, [Dimension.ANALISIS_LOGICO]: 1 } },
      { text: "Ser conocido por resolver conflictos sin llegar a juicio", weights: { [DuckProfile.LABORAL]: 1, [DuckProfile.CIVIL]: 1, [Dimension.NEGOCIACION]: 2 } },
      { text: "Estructurar operaciones que transformen industrias", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.DIGITAL]: 1, [DuckProfile.INTERNACIONAL]: 1 } },
      { text: "Que tus clientes te recomienden por tu ética y dedicación", weights: { [DuckProfile.NOTARIAL]: 1, [DuckProfile.CIVIL]: 1, [Dimension.ETICA]: 2 } }
    ]
  },
  {
    id: 19,
    section: "Situacional",
    text: "Si pudieras cambiar algo del sistema jurídico mexicano, sería:",
    type: "multiple_choice",
    options: [
      { text: "Mayor celeridad y eficiencia en los procesos judiciales", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [DuckProfile.ADMINISTRATIVO]: 1 } },
      { text: "Mejor acceso a la justicia para personas de bajos recursos", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [DuckProfile.LABORAL]: 1, [Dimension.EMPATIA]: 2 } },
      { text: "Regulación más clara para nuevas tecnologías y modelos de negocio", weights: { [DuckProfile.DIGITAL]: 2, [DuckProfile.MERCANTIL]: 1 } },
      { text: "Fortalecimiento de mecanismos alternativos de solución de controversias", weights: { [DuckProfile.CIVIL]: 1, [DuckProfile.LABORAL]: 1, [Dimension.NEGOCIACION]: 1 } }
    ]
  },
  {
    id: 20,
    section: "Situacional",
    text: "¿Qué te motivó originalmente a estudiar Derecho?",
    type: "multiple_choice",
    options: [
      { text: "Series, películas o casos mediáticos de juicios", weights: { [DuckProfile.PENAL]: 2, [Dimension.COMUNICACION_ORAL]: 1 } },
      { text: "Injusticias que observé y quise poder combatir", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [DuckProfile.LABORAL]: 1, [Dimension.EMPATIA]: 2 } },
      { text: "Interés en el mundo de los negocios y las transacciones", weights: { [DuckProfile.MERCANTIL]: 2, [DuckProfile.FISCAL]: 1, [DuckProfile.INTERNACIONAL]: 1 } },
      { text: "Tradición familiar o admiración por algún abogado conocido", weights: { [DuckProfile.NOTARIAL]: 1, [DuckProfile.CIVIL]: 1 } }
    ]
  },
  // --- SECCIÓN 2: APTITUDES (18) ---
  {
    id: 21,
    section: "Aptitudes",
    text: "Disfruto resolver acertijos, rompecabezas o problemas de lógica.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 2 } }
    ]
  },
  {
    id: 22,
    section: "Aptitudes",
    text: "Cuando leo una ley, identifico rápidamente las excepciones y condiciones que modifican la regla general.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 2 } }
    ]
  },
  {
    id: 23,
    section: "Aptitudes",
    text: "Me resulta natural detectar contradicciones o inconsistencias en un argumento.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 2 } }
    ]
  },
  {
    id: 24,
    section: "Aptitudes",
    text: "Me siento cómodo hablando frente a grupos de personas que no conozco.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 2 } }
    ]
  },
  {
    id: 25,
    section: "Aptitudes",
    text: "En discusiones o debates, logro expresar mis ideas de manera clara y persuasiva.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 2 } }
    ]
  },
  {
    id: 26,
    section: "Aptitudes",
    text: "Puedo adaptar mi lenguaje según mi audiencia (técnico con colegas, sencillo con clientes).",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.COMUNICACION_ORAL]: 2 } }
    ]
  },
  {
    id: 27,
    section: "Aptitudes",
    text: "Prefiero comunicarme por escrito que verbalmente para temas importantes.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.REDACCION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.REDACCION]: 2 } }
    ]
  },
  {
    id: 28,
    section: "Aptitudes",
    text: "Mis textos suelen ser claros y bien estructurados según quienes los leen.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.REDACCION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.REDACCION]: 2 } }
    ]
  },
  {
    id: 29,
    section: "Aptitudes",
    text: "Disfruto el proceso de redactar, editar y perfeccionar un documento.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.REDACCION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.REDACCION]: 2 } }
    ]
  },
  {
    id: 30,
    section: "Aptitudes",
    text: "En conflictos entre amigos o familiares, suelo ser quien busca puntos de acuerdo.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.NEGOCIACION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.NEGOCIACION]: 2 } }
    ]
  },
  {
    id: 31,
    section: "Aptitudes",
    text: "Creo que la mayoría de los conflictos tienen soluciones donde todos ganan algo.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.NEGOCIACION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.NEGOCIACION]: 2 } }
    ]
  },
  {
    id: 32,
    section: "Aptitudes",
    text: "Me resulta fácil entender la perspectiva de alguien con quien no estoy de acuerdo.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.NEGOCIACION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.NEGOCIACION]: 2 } }
    ]
  },
  {
    id: 33,
    section: "Aptitudes",
    text: "Me gusta investigar a fondo un tema antes de formar una opinión.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.INVESTIGACION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.INVESTIGACION]: 2 } }
    ]
  },
  {
    id: 34,
    section: "Aptitudes",
    text: "Sé utilizar bases de datos, buscadores avanzados y fuentes especializadas.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.INVESTIGACION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.INVESTIGACION]: 2 } }
    ]
  },
  {
    id: 35,
    section: "Aptitudes",
    text: "La búsqueda de información me resulta interesante más que tediosa.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.INVESTIGACION]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.INVESTIGACION]: 2 } }
    ]
  },
  {
    id: 36,
    section: "Aptitudes",
    text: "Mantengo la calma cuando enfrento plazos ajustados o situaciones de presión.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.TOLERANCIA_ESTRES]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.TOLERANCIA_ESTRES]: 2 } }
    ]
  },
  {
    id: 37,
    section: "Aptitudes",
    text: "Los problemas inesperados me motivan más que me paralizan.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.TOLERANCIA_ESTRES]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.TOLERANCIA_ESTRES]: 2 } }
    ]
  },
  {
    id: 38,
    section: "Aptitudes",
    text: "Prefiero trabajar en equipo que de manera individual.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.TRABAJO_EQUIPO]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.TRABAJO_EQUIPO]: 2 } }
    ]
  },
  // --- SECCIÓN 3: VALORES (12) ---
  {
    id: 39,
    section: "Valores",
    text: "En mi carrera profesional valoro principalmente:",
    type: "multiple_choice",
    options: [
      { text: "Estabilidad económica y horarios predecibles", weights: { [DuckProfile.NOTARIAL]: 2, [DuckProfile.ADMINISTRATIVO]: 1 } },
      { text: "Prestigio y reconocimiento profesional", weights: { [DuckProfile.PENAL]: 1, [Dimension.LIDERAZGO]: 2 } },
      { text: "Impacto social y ayuda a otros", weights: { [Dimension.EMPATIA]: 2, [DuckProfile.AMBIENTAL]: 1 } },
      { text: "Autonomía e independencia profesional", weights: { [DuckProfile.CIVIL]: 1, [DuckProfile.DIGITAL]: 1 } }
    ]
  },
  {
    id: 40,
    section: "Valores",
    text: "Lo que más me preocuparía de ejercer el derecho:",
    type: "multiple_choice",
    options: [
      { text: "Defender a alguien sabiendo que probablemente es culpable", weights: { [Dimension.ETICA]: 2, [DuckProfile.PENAL]: -1 } },
      { text: "Trabajar en casos donde el resultado parece injusto pero es legal", weights: { [Dimension.ETICA]: 1, [DuckProfile.CONSTITUCIONAL]: 1 } },
      { text: "No poder ayudar a un cliente por falta de recursos o tiempo", weights: { [Dimension.EMPATIA]: 2 } },
      { text: "Sacrificar mi vida personal por demandas del trabajo", weights: { [Dimension.TOLERANCIA_ESTRES]: -1, [DuckProfile.NOTARIAL]: 1 } }
    ]
  },
  {
    id: 41,
    section: "Valores",
    text: "El éxito profesional para mí significa principalmente:",
    type: "multiple_choice",
    options: [
      { text: "Ganar casos importantes y construir reputación", weights: { [DuckProfile.PENAL]: 2, [Dimension.LIDERAZGO]: 1 } },
      { text: "Tener clientes satisfechos que me recomienden", weights: { [DuckProfile.CIVIL]: 1, [DuckProfile.NOTARIAL]: 1 } },
      { text: "Contribuir a cambios positivos en la sociedad", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [DuckProfile.AMBIENTAL]: 2 } },
      { text: "Alcanzar estabilidad económica para mi familia", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.FISCAL]: 1 } }
    ]
  },
  {
    id: 42,
    section: "Valores",
    text: "Un abogado tiene obligación moral de tomar casos pro bono regularmente.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.ETICA]: 1, [Dimension.EMPATIA]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.ETICA]: 2, [Dimension.EMPATIA]: 2 } }
    ]
  },
  {
    id: 43,
    section: "Valores",
    text: "Es aceptable usar argumentos técnico-procesales aunque no se llegue al fondo del asunto.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: { [Dimension.ETICA]: 1 } }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.ANALISIS_LOGICO]: 2 } }
    ]
  },
  {
    id: 44,
    section: "Valores",
    text: "La confidencialidad cliente-abogado debe mantenerse incluso si el cliente planea dañar a terceros.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: { [Dimension.ETICA]: 2 } }, { text: "En desacuerdo", weights: { [Dimension.ETICA]: 1 } }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [DuckProfile.PENAL]: 1 } }, { text: "Muy de acuerdo", weights: { [DuckProfile.PENAL]: 2 } }
    ]
  },
  {
    id: 45,
    section: "Valores",
    text: "Los abogados deberían poder rechazar casos que contradigan sus valores personales.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: {} }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [Dimension.ETICA]: 1 } }, { text: "Muy de acuerdo", weights: { [Dimension.ETICA]: 2 } }
    ]
  },
  {
    id: 46,
    section: "Valores",
    text: "Es más importante que la ley sea predecible a que sea perfectamente justa en cada caso.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: { [Dimension.EMPATIA]: 1 } }, { text: "En desacuerdo", weights: {} }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [DuckProfile.NOTARIAL]: 1 } }, { text: "Muy de acuerdo", weights: { [DuckProfile.NOTARIAL]: 2, [Dimension.ANALISIS_LOGICO]: 1 } }
    ]
  },
  {
    id: 47,
    section: "Valores",
    text: "El sistema adversarial produce mejores resultados que los métodos colaborativos.",
    type: "likert",
    options: [
       { text: "Muy en desacuerdo", weights: { [Dimension.NEGOCIACION]: 2 } }, { text: "En desacuerdo", weights: { [Dimension.NEGOCIACION]: 1 } }, { text: "Neutral", weights: {} },
       { text: "De acuerdo", weights: { [DuckProfile.PENAL]: 1 } }, { text: "Muy de acuerdo", weights: { [DuckProfile.PENAL]: 2 } }
    ]
  },
  {
    id: 48,
    section: "Valores",
    text: "Debes elegir entre dos casos con el mismo honorario. ¿Cuál tomarías?",
    type: "multiple_choice",
    options: [
      { text: "Defender a una empresa en un caso de despido que probablemente ganará", weights: { [DuckProfile.MERCANTIL]: 1 } },
      { text: "Representar al trabajador despedido en un caso difícil de ganar", weights: { [DuckProfile.LABORAL]: 2, [Dimension.EMPATIA]: 1 } }
    ]
  },
  {
    id: 49,
    section: "Valores",
    text: "¿Qué preferirías?",
    type: "multiple_choice",
    options: [
      { text: "Ganar un caso con argumentos técnicos aunque sientas que moralmente la otra parte tenía razón", weights: { [Dimension.ANALISIS_LOGICO]: 2, [Dimension.ETICA]: -1 } },
      { text: "Perder un caso que defendías con convicción ética", weights: { [Dimension.ETICA]: 2, [Dimension.TOLERANCIA_ESTRES]: -1 } }
    ]
  },
  {
    id: 50,
    section: "Valores",
    text: "¿Con cuál afirmación te identificas más?",
    type: "multiple_choice",
    options: [
      { text: "Mi deber es representar los intereses de mi cliente dentro de los límites de la ley", weights: { [DuckProfile.MERCANTIL]: 1, [DuckProfile.PENAL]: 1 } },
      { text: "Mi deber es procurar que se haga justicia en cada caso", weights: { [DuckProfile.CONSTITUCIONAL]: 1, [Dimension.ETICA]: 1 } }
    ]
  }
];
