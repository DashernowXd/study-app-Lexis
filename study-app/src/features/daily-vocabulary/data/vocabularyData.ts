import type { DailyVocabularyWord } from '../types';

export const DAILY_VOCABULARY: DailyVocabularyWord[] = [
  // --- B1 LEVEL VERBS ---
  {
    id: 'b1-v1',
    verb: 'implement',
    phonetic: '/ˈɪm.plɪ.ment/',
    partOfSpeech: 'Transitive Verb',
    level: 'B1',
    category: 'Tech & Engineering',
    definitionEn: 'To put a decision, plan, or system into practical effect.',
    definitionEs: 'Implementar, poner en práctica.',
    collocations: ['implement a feature', 'implement changes', 'implement security protocols'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'implements',
        sentence: 'Our development team implements new user interface components every sprint.',
        sentenceEs: 'Nuestro equipo de desarrollo implementa nuevos componentes de interfaz cada sprint.',
        contextNote: 'Daily or routine workflow action.'
      },
      {
        tense: 'Present Continuous',
        form: 'is implementing',
        sentence: 'The backend engineer is currently implementing the OAuth authentication flow.',
        sentenceEs: 'El ingeniero backend está implementando actualmente el flujo de autenticación OAuth.',
        contextNote: 'Action currently in progress.'
      },
      {
        tense: 'Past Simple',
        form: 'implemented',
        sentence: 'Yesterday, we implemented a caching layer that reduced query latency by 40%.',
        sentenceEs: 'Ayer implementamos una capa de caché que redujo la latencia de consultas en un 40%.',
        contextNote: 'Completed action in the past with a specific time marker.'
      },
      {
        tense: 'Present Perfect',
        form: 'has implemented',
        sentence: 'The company has implemented automated testing across all client projects.',
        sentenceEs: 'La empresa ha implementado pruebas automatizadas en todos los proyectos de clientes.',
        contextNote: 'Action completed with present relevance or impact.'
      },
      {
        tense: 'Modal / Passive',
        form: 'must be implemented',
        sentence: 'Critical vulnerability patches must be implemented before the next release.',
        sentenceEs: 'Los parches de vulnerabilidades críticas deben implementarse antes del próximo lanzamiento.',
        contextNote: 'Obligation / passive structure.'
      }
    ]
  },
  {
    id: 'b1-v2',
    verb: 'rejuvenate',
    phonetic: '/rɪˈdʒuː.vən.eɪt/',
    partOfSpeech: 'Transitive Verb',
    level: 'B1',
    category: 'Everyday Fluency',
    definitionEn: 'To make someone feel or look fresher, more energetic, or younger; to revitalize.',
    definitionEs: 'Rejuvenecer, revitalizar, recargar energías.',
    collocations: ['rejuvenate the mind', 'feel rejuvenated', 'rejuvenate the city center'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'rejuvenates',
        sentence: 'A quiet weekend away from screens always rejuvenates my creativity.',
        sentenceEs: 'Un fin de semana tranquilo lejos de las pantallas siempre revitaliza mi creatividad.',
        contextNote: 'General truth or habit.'
      },
      {
        tense: 'Present Continuous',
        form: 'is rejuvenating',
        sentence: 'The local municipality is rejuvenating historical plazas to attract more cultural visitors.',
        sentenceEs: 'El municipio local está revitalizando plazas históricas para atraer más visitantes culturales.',
        contextNote: 'Ongoing project or process.'
      },
      {
        tense: 'Past Simple',
        form: 'rejuvenated',
        sentence: 'Taking a 20-minute walk through the park rejuvenated our focus after hours of coding.',
        sentenceEs: 'Dar un paseo de 20 minutos por el parque revitalizó nuestra concentración tras horas programando.',
        contextNote: 'Past completed event.'
      },
      {
        tense: 'Present Perfect',
        form: 'has rejuvenated',
        sentence: 'The new leadership team has rejuvenated the product roadmap and team morale.',
        sentenceEs: 'El nuevo equipo de liderazgo ha revitalizado la hoja de ruta del producto y la moral del equipo.',
        contextNote: 'Past action with visible current results.'
      },
      {
        tense: 'Modal / Passive',
        form: 'can be rejuvenated',
        sentence: 'Exhausted work routines can be rejuvenated by introducing structured break cycles.',
        sentenceEs: 'Las rutinas de trabajo agotadoras pueden revitalizarse introduciendo ciclos estructurados de descanso.',
        contextNote: 'Ability / passive possibility.'
      }
    ]
  },
  {
    id: 'b1-v3',
    verb: 'persist',
    phonetic: '/pəˈsɪst/',
    partOfSpeech: 'Intransitive Verb',
    level: 'B1',
    category: 'Tech & Engineering',
    definitionEn: 'To continue firmly or obstinately in a course of action; or for an issue to continue to exist.',
    definitionEs: 'Persistir, continuar existiendo a pesar de las dificultades.',
    collocations: ['errors persist', 'persist in doing something', 'persisted state'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'persists',
        sentence: 'If the database connection timeout persists, our alert system notifies on-call engineers.',
        sentenceEs: 'Si el tiempo de espera de conexión a la base de datos persiste, nuestro sistema de alertas notifica a los ingenieros de guardia.',
        contextNote: 'Conditional / regular behavior.'
      },
      {
        tense: 'Present Continuous',
        form: 'is persisting',
        sentence: 'The network packet loss is persisting despite rebooting the primary router.',
        sentenceEs: 'La pérdida de paquetes de red sigue persistiendo a pesar de reiniciar el router principal.',
        contextNote: 'Unwanted continuous situation right now.'
      },
      {
        tense: 'Past Simple',
        form: 'persisted',
        sentence: 'The bug persisted throughout the morning until we reverted the breaking commit.',
        sentenceEs: 'El error persistió durante toda la mañana hasta que revertimos el commit que causó la falla.',
        contextNote: 'Completed duration in the past.'
      },
      {
        tense: 'Present Perfect',
        form: 'has persisted',
        sentence: 'This performance bottleneck has persisted for two weeks without an obvious culprit.',
        sentenceEs: 'Este cuello de botella de rendimiento ha persistido durante dos semanas sin un culpable evidente.',
        contextNote: 'Duration starting in past and continuing to present.'
      },
      {
        tense: 'Modal / Passive',
        form: 'will not persist',
        sentence: 'Temporary session cookies will not persist once the browser tab is closed.',
        sentenceEs: 'Las cookies de sesión temporal no persistirán una vez cerrada la pestaña del navegador.',
        contextNote: 'Future certainty / technical rule.'
      }
    ]
  },
  {
    id: 'b1-v4',
    verb: 'coordinate',
    phonetic: '/koʊˈɔːr.dɪ.neɪt/',
    partOfSpeech: 'Transitive Verb',
    level: 'B1',
    category: 'Business & Leadership',
    definitionEn: 'To bring the different elements of a complex activity or organization into a harmonious relationship.',
    definitionEs: 'Coordinar, organizar tareas de forma conjunta.',
    collocations: ['coordinate efforts', 'coordinate with the team', 'closely coordinated'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'coordinates',
        sentence: 'The Scrum Master coordinates daily stand-ups and ensures blockers are promptly cleared.',
        sentenceEs: 'El Scrum Master coordina las reuniones diarias y se asegura de que los bloqueos se resuelvan con prontitud.',
        contextNote: 'Standard role responsibility.'
      },
      {
        tense: 'Present Continuous',
        form: 'is coordinating',
        sentence: 'Elena is coordinating with the DevOps team to prepare tomorrow’s cloud migration.',
        sentenceEs: 'Elena está coordinando con el equipo de DevOps para preparar la migración a la nube de mañana.',
        contextNote: 'Immediate ongoing coordination.'
      },
      {
        tense: 'Past Simple',
        form: 'coordinated',
        sentence: 'We coordinated the multi-region release without a single second of service downtime.',
        sentenceEs: 'Coordinamos el lanzamiento multirregión sin un solo segundo de inactividad del servicio.',
        contextNote: 'Completed successful milestone.'
      },
      {
        tense: 'Present Perfect',
        form: 'have coordinated',
        sentence: 'Both departments have coordinated their targets for the upcoming quarter.',
        sentenceEs: 'Ambos departamentos han coordinado sus objetivos para el próximo trimestre.',
        contextNote: 'Recent alignment ready for action.'
      },
      {
        tense: 'Modal / Passive',
        form: 'should be coordinated',
        sentence: 'Code deployments should be coordinated across all time zones to avoid customer disruptions.',
        sentenceEs: 'Los despliegues de código deben coordinarse en todas las zonas horarias para evitar molestias a los clientes.',
        contextNote: 'Best practice recommendation.'
      }
    ]
  },

  // --- B2 LEVEL VERBS ---
  {
    id: 'b2-v1',
    verb: 'streamline',
    phonetic: '/ˈstriːm.laɪn/',
    partOfSpeech: 'Transitive Verb',
    level: 'B2',
    category: 'Tech & Engineering',
    definitionEn: 'To make a system, organization, or process more efficient and effective by simplifying it.',
    definitionEs: 'Optimizar, agilizar, simplificar procesos.',
    collocations: ['streamline operations', 'streamline the checkout flow', 'streamline communication'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'streamlines',
        sentence: 'Our automated CI/CD pipeline streamlines code review and delivers builds in minutes.',
        sentenceEs: 'Nuestra canalización CI/CD automatizada agiliza la revisión de código y entrega compilaciones en minutos.',
        contextNote: 'Consistent operational benefit.'
      },
      {
        tense: 'Present Continuous',
        form: 'is streamlining',
        sentence: 'Product engineering is streamlining the onboarding checklist for international hires.',
        sentenceEs: 'Ingeniería de producto está simplificando la lista de verificación de incorporación para contrataciones internacionales.',
        contextNote: 'Active ongoing restructuring.'
      },
      {
        tense: 'Past Simple',
        form: 'streamlined',
        sentence: 'They streamlined the database schema, cutting average query response times in half.',
        sentenceEs: 'Simplificaron el esquema de la base de datos, reduciendo a la mitad los tiempos de respuesta de consultas.',
        contextNote: 'Past achievement.'
      },
      {
        tense: 'Present Perfect',
        form: 'has streamlined',
        sentence: 'The new API Gateway has streamlined how frontend clients communicate with services.',
        sentenceEs: 'El nuevo API Gateway ha optimizado la forma en que los clientes frontend se comunican con los servicios.',
        contextNote: 'Present ongoing impact from architectural upgrade.'
      },
      {
        tense: 'Modal / Passive',
        form: 'can be streamlined',
        sentence: 'Lengthy approval chains can be streamlined using smart approval workflows.',
        sentenceEs: 'Las largas cadenas de aprobación pueden agilizarse utilizando flujos inteligentes de aprobación.',
        contextNote: 'Potential optimization.'
      }
    ]
  },
  {
    id: 'b2-v2',
    verb: 'foster',
    phonetic: '/ˈfɑː.stɚ/',
    partOfSpeech: 'Transitive Verb',
    level: 'B2',
    category: 'Business & Leadership',
    definitionEn: 'To encourage the development or growth of ideas, relationships, or innovation.',
    definitionEs: 'Fomentar, propiciar, cultivar.',
    collocations: ['foster collaboration', 'foster an inclusive culture', 'foster innovation'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'fosters',
        sentence: 'Blameless post-mortem retrospectives foster an environment of psychological safety.',
        sentenceEs: 'Las retrospectivas sin culpables fomentan un entorno de seguridad psicológica.',
        contextNote: 'Habitual cultural principle.'
      },
      {
        tense: 'Present Continuous',
        form: 'is fostering',
        sentence: 'The mentorship initiative is fostering stronger ties between junior and staff engineers.',
        sentenceEs: 'La iniciativa de mentoría está fomentando lazos más estrechos entre ingenieros junior y staff.',
        contextNote: 'Current evolving trend.'
      },
      {
        tense: 'Past Simple',
        form: 'fostered',
        sentence: 'Open-source contributions fostered transparent community feedback and rapid adoption.',
        sentenceEs: 'Las contribuciones de código abierto fomentaron una retroalimentación comunitaria transparente y una rápida adopción.',
        contextNote: 'Past historical outcome.'
      },
      {
        tense: 'Present Perfect',
        form: 'has fostered',
        sentence: 'Our remote-first strategy has fostered deeper autonomy and personal responsibility.',
        sentenceEs: 'Nuestra estrategia de trabajo remoto ha fomentado una mayor autonomía y responsabilidad personal.',
        contextNote: 'Cumulative cultural result.'
      },
      {
        tense: 'Modal / Passive',
        form: 'must be fostered',
        sentence: 'Creative experimentation must be fostered if we wish to stay competitive in the market.',
        sentenceEs: 'La experimentación creativa debe fomentarse si deseamos mantenernos competitivos en el mercado.',
        contextNote: 'Strategic imperative.'
      }
    ]
  },
  {
    id: 'b2-v3',
    verb: 'tackle',
    phonetic: '/ˈtæk.əl/',
    partOfSpeech: 'Transitive Verb',
    level: 'B2',
    category: 'Everyday Fluency',
    definitionEn: 'To make determined efforts to deal with a difficult problem or challenge.',
    definitionEs: 'Abordar, afrontar resueltamente un problema.',
    collocations: ['tackle a challenge', 'tackle technical debt', 'tackle head-on'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'tackles',
        sentence: 'The architecture guild tackles cross-cutting concerns every Thursday morning.',
        sentenceEs: 'El gremio de arquitectura aborda problemáticas transversales todos los jueves por la mañana.',
        contextNote: 'Routine problem-solving session.'
      },
      {
        tense: 'Present Continuous',
        form: 'are tackling',
        sentence: 'We are tackling the memory leak issue by profiling heap snapshots in real time.',
        sentenceEs: 'Estamos abordando el problema de fuga de memoria analizando instantáneas del heap en tiempo real.',
        contextNote: 'Active troubleshooting.'
      },
      {
        tense: 'Past Simple',
        form: 'tackled',
        sentence: 'The security squad tackled the zero-day vulnerability within three hours of disclosure.',
        sentenceEs: 'El escuadrón de seguridad abordó la vulnerabilidad de día cero dentro de las tres horas posteriores a su divulgación.',
        contextNote: 'Decisive past accomplishment.'
      },
      {
        tense: 'Present Perfect',
        form: 'have tackled',
        sentence: 'Over the last two quarters, our squad has tackled several legacy codebases.',
        sentenceEs: 'Durante los dos últimos trimestres, nuestro equipo ha abordado varias bases de código heredadas.',
        contextNote: 'Retrospective achievement.'
      },
      {
        tense: 'Modal / Passive',
        form: 'should be tackled',
        sentence: 'High-priority security tickets should be tackled before embarking on brand-new features.',
        sentenceEs: 'Los tickets de seguridad de alta prioridad deben abordarse antes de iniciar funciones completamente nuevas.',
        contextNote: 'Prioritization guideline.'
      }
    ]
  },

  // --- C1 LEVEL VERBS ---
  {
    id: 'c1-v1',
    verb: 'leverage',
    phonetic: '/ˈlev.ɚ.ɪdʒ/',
    partOfSpeech: 'Transitive Verb',
    level: 'C1',
    category: 'Business & Leadership',
    definitionEn: 'To use something to maximum advantage; to strategically exploit existing resources.',
    definitionEs: 'Apalancar, aprovechar estratégicamente una ventaja o recurso.',
    collocations: ['leverage data insights', 'leverage synergies', 'leverage existing infrastructure'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'leverages',
        sentence: 'Our intelligent analytics engine leverages machine learning models to detect subtle fraud patterns.',
        sentenceEs: 'Nuestro motor analítico inteligente aprovecha modelos de aprendizaje automático para detectar patrones sutiles de fraude.',
        contextNote: 'Core system capability.'
      },
      {
        tense: 'Present Continuous',
        form: 'is leveraging',
        sentence: 'The startup is leveraging edge computing nodes to reduce round-trip latency for global users.',
        sentenceEs: 'La startup está aprovechando nodos de computación en el borde para reducir la latencia de ida y vuelta para usuarios globales.',
        contextNote: 'Current strategic shift.'
      },
      {
        tense: 'Past Simple',
        form: 'leveraged',
        sentence: 'They leveraged their existing customer base to bootstrap their new enterprise SaaS offering.',
        sentenceEs: 'Aprovecharon su base de clientes existente para impulsar su nueva oferta de SaaS empresarial.',
        contextNote: 'Successful historical strategy.'
      },
      {
        tense: 'Present Perfect',
        form: 'has leveraged',
        sentence: 'Our organization has leveraged open-source frameworks to accelerate product delivery by 60%.',
        sentenceEs: 'Nuestra organización ha aprovechado marcos de trabajo de código abierto para acelerar la entrega de productos en un 60%.',
        contextNote: 'Significant cumulative advantage.'
      },
      {
        tense: 'Modal / Passive',
        form: 'could be leveraged',
        sentence: 'Underutilized server capacity could be leveraged during off-peak hours for intensive batch jobs.',
        sentenceEs: 'La capacidad de servidores infrautilizada podría aprovecharse durante las horas de menor actividad para trabajos pesados por lotes.',
        contextNote: 'Hypothetical strategic optimization.'
      }
    ]
  },
  {
    id: 'c1-v2',
    verb: 'spearhead',
    phonetic: '/ˈspɪr.hed/',
    partOfSpeech: 'Transitive Verb',
    level: 'C1',
    category: 'Business & Leadership',
    definitionEn: 'To lead an attack or be the leader of a major campaign, initiative, or movement.',
    definitionEs: 'Liderar, encabezar, ser la punta de lanza de una iniciativa.',
    collocations: ['spearhead an initiative', 'spearhead digital transformation', 'spearhead the effort'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'spearheads',
        sentence: 'The Vice President of Engineering spearheads our architectural evolution toward zero-trust security.',
        sentenceEs: 'El Vicepresidente de Ingeniería encabeza nuestra evolución arquitectónica hacia la seguridad de confianza cero.',
        contextNote: 'Executive responsibility.'
      },
      {
        tense: 'Present Continuous',
        form: 'is spearheading',
        sentence: 'Marcus is spearheading the migration from monolithic architecture to autonomous event-driven microservices.',
        sentenceEs: 'Marcus está liderando la migración desde la arquitectura monolítica hacia microservicios autónomos basados en eventos.',
        contextNote: 'Major current technical leadership.'
      },
      {
        tense: 'Past Simple',
        form: 'spearheaded',
        sentence: 'She spearheaded the company’s expansion into European markets ahead of schedule.',
        sentenceEs: 'Ella encabezó la expansión de la empresa en los mercados europeos antes de lo previsto.',
        contextNote: 'Definitive career triumph.'
      },
      {
        tense: 'Present Perfect',
        form: 'has spearheaded',
        sentence: 'The lead research scientist has spearheaded three patent-worthy breakthroughs this fiscal year.',
        sentenceEs: 'El científico principal de investigación ha liderado tres avances patentables durante este año fiscal.',
        contextNote: 'Impactful track record.'
      },
      {
        tense: 'Modal / Passive',
        form: 'was spearheaded',
        sentence: 'The modern design revamp was spearheaded by our cross-functional UX and accessibility taskforce.',
        sentenceEs: 'La modernización del diseño fue encabezada por nuestro equipo multidisciplinario de experiencia de usuario y accesibilidad.',
        contextNote: 'Passive credit attribution.'
      }
    ]
  },
  {
    id: 'c1-v3',
    verb: 'scrutinize',
    phonetic: '/ˈskruː.t̬ən.aɪz/',
    partOfSpeech: 'Transitive Verb',
    level: 'C1',
    category: 'Tech & Engineering',
    definitionEn: 'To examine or inspect closely and thoroughly with critical attention.',
    definitionEs: 'Examinar minuciosamente, escudriñar, auditar con lupa.',
    collocations: ['scrutinize the source code', 'scrutinize contractual terms', 'scrutinize metrics'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'scrutinizes',
        sentence: 'Our automated compliance scanner scrutinizes every pull request for exposed credentials or secrets.',
        sentenceEs: 'Nuestro analizador automatizado de cumplimiento examina minuciosamente cada pull request en busca de credenciales o secretos expuestos.',
        contextNote: 'Continuous security automation.'
      },
      {
        tense: 'Present Continuous',
        form: 'are scrutinizing',
        sentence: 'Senior architects are scrutinizing the third-party dependencies for licensing discrepancies.',
        sentenceEs: 'Los arquitectos senior están escudriñando las dependencias de terceros para detectar discrepancias en las licencias.',
        contextNote: 'Active in-depth review.'
      },
      {
        tense: 'Past Simple',
        form: 'scrutinized',
        sentence: 'External auditors scrutinized our financial records and gave our security controls top marks.',
        sentenceEs: 'Los auditores externos examinaron minuciosamente nuestros registros financieros y otorgaron la máxima calificación a nuestros controles de seguridad.',
        contextNote: 'Rigorous past audit.'
      },
      {
        tense: 'Present Perfect',
        form: 'have scrutinized',
        sentence: 'We have scrutinized the error logs for three consecutive days without discovering memory leaks.',
        sentenceEs: 'Hemos examinado exhaustivamente los registros de errores durante tres días consecutivos sin descubrir fugas de memoria.',
        contextNote: 'Thorough past endeavor with current conclusion.'
      },
      {
        tense: 'Modal / Passive',
        form: 'must be scrutinized',
        sentence: 'Any alterations to high-frequency payment gateways must be scrutinized with rigorous regression tests.',
        sentenceEs: 'Cualquier modificación en las pasarelas de pago de alta frecuencia debe examinarse con rigurosas pruebas de regresión.',
        contextNote: 'Strict quality governance rule.'
      }
    ]
  },
  {
    id: 'c1-v4',
    verb: 'articulate',
    phonetic: '/ɑːrˈtɪk.jə.leɪt/',
    partOfSpeech: 'Transitive / Intransitive Verb',
    level: 'C1',
    category: 'Business & Leadership',
    definitionEn: 'To express an idea or feeling fluently, precisely, and coherently in words.',
    definitionEs: 'Articular, expresar con claridad y precisión conceptual.',
    collocations: ['articulate a clear vision', 'articulate complex ideas', 'eloquently articulate'],
    tenses: [
      {
        tense: 'Present Simple',
        form: 'articulates',
        sentence: 'A skilled staff engineer articulates complex technical trade-offs with brevity and clarity.',
        sentenceEs: 'Un ingeniero staff capacitado expresa con claridad y brevedad los balances técnicos complejos.',
        contextNote: 'Characteristic executive competency.'
      },
      {
        tense: 'Present Continuous',
        form: 'is articulating',
        sentence: 'The project director is currently articulating the roadmap deliverables to our executive sponsors.',
        sentenceEs: 'El director del proyecto está exponiendo actualmente los entregables de la hoja de ruta a los patrocinadores ejecutivos.',
        contextNote: 'Present high-stakes presentation.'
      },
      {
        tense: 'Past Simple',
        form: 'articulated',
        sentence: 'During the stakeholder keynote, she articulated the long-term ROI of migrating to Kubernetes.',
        sentenceEs: 'Durante la conferencia magistral para partes interesadas, ella expuso con claridad el retorno de inversión a largo plazo de migrar a Kubernetes.',
        contextNote: 'Successful past pitch.'
      },
      {
        tense: 'Present Perfect',
        form: 'has articulated',
        sentence: 'The architect has articulated a comprehensive zero-trust blueprint that aligns all departments.',
        sentenceEs: 'El arquitecto ha articulado un plan integral de confianza cero que alinea a todos los departamentos.',
        contextNote: 'Present shared vision established.'
      },
      {
        tense: 'Modal / Passive',
        form: 'needs to be articulated',
        sentence: 'The underlying business motivation needs to be clearly articulated before coding begins.',
        sentenceEs: 'La motivación comercial subyacente debe articularse con total claridad antes de que comience la programación.',
        contextNote: 'Essential foundational requirement.'
      }
    ]
  }
];
