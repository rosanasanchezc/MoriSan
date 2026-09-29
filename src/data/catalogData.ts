import catalogCurtainsSheer from '../assets/images/catalog_curtains_sheer_1790378774946.jpg';
import heroLuxuryCurtains from '../assets/images/hero_luxury_curtains_1790378763822.jpg';
import cortinasPlizadas from '../assets/images/cortinas_plizadas_1790382174534.jpg';
import cortinaZebra from '../assets/images/cortina_zebra_1790382526347.jpg';
import rollerShades from '../assets/images/roller_shades_1790382812205.jpg';
import cortinaRomana from '../assets/images/cortina_romana_1790382946079.jpg';
import panelJapones from '../assets/images/panel_japones_1790383165560.jpg';
import catalogBlindsWood from '../assets/images/catalog_blinds_wood_1790378788032.jpg';
import catalogOutdoorAwnings from '../assets/images/catalog_outdoor_awnings_1790378796137.jpg';
import toldoClaraboya from '../assets/images/toldo_claraboya_1790384205600.jpg';
import toldoVerticalExt from '../assets/images/toldo_vertical_ext_1790384420024.jpg';
import motorizacionControl from '../assets/images/motorizacion_control_1790383704781.jpg';
import limpiezaCortinas from '../assets/images/limpieza_cortinas_1790384011997.jpg';

export interface CatalogItem {
  id: string;
  name: string;
  category: 'cortinas' | 'persianas' | 'exteriores' | 'automatizacion' | 'mantenimiento';
  categoryLabel: string;
  tagline: string;
  description: string;
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  keyBenefits: string[];
  idealFor: string;
  warranty: string;
  image?: string;
  fallbackIcon: string;
}

export const CATALOG_ITEMS: CatalogItem[] = [
  // CORTINAS TÉCNICAS Y DECORATIVAS
  {
    id: 'celulares',
    name: 'Cortinas Celulares',
    category: 'cortinas',
    categoryLabel: 'Cortinas Técnicas',
    tagline: 'Aislamiento térmico superior y confort acústico',
    description: 'Diseñadas con una estructura alveolar en forma de panal de abeja que atrapa una cámara de aire interior, actuando como una barrera térmica natural contra el frío y el calor exterior. Su estética pulcra y compacta ofrece máxima privacidad y sofisticación minimalista.',
    technicalSpecs: [
      { label: 'Estructura', value: 'Celdas simples o dobles de 25mm y 38mm' },
      { label: 'Eficiencia Térmica', value: 'Reduce hasta un 45% de transferencia térmica' },
      { label: 'Absorción Acústica', value: 'Coeficiente NRC de hasta 0.70' },
      { label: 'Opciones de Luz', value: 'Translúcidas, Semiopacas y Blackout 100%' },
      { label: 'Accionamiento', value: 'Manual continuo o Motorizado recargable' }
    ],
    keyBenefits: [
      'Ahorro significativo en aire acondicionado y calefacción',
      'Pliegue ultracompacto que despeja casi el 100% del vano de la ventana',
      'Tejidos antiestáticos tratados contra la acumulación de polvo',
      'Sin cordones a la vista con sistemas certificados Child Safety'
    ],
    idealFor: 'Dormitorios máster, salas de TV, oficinas ejecutivas y espacios con alta exposición solar directa.',
    warranty: '2 años en telas de importación y sistemas motrices',
    image: catalogCurtainsSheer,
    fallbackIcon: 'Layers'
  },
  {
    id: 'sheer-elegance',
    name: 'Cortinas Sheer y Sheer Verticales',
    category: 'cortinas',
    categoryLabel: 'Cortinas Técnicas',
    tagline: 'Protección UV del 99% con visibilidad exterior ininterrumpida',
    description: 'La máxima expresión del lujo textil contemporáneo. Combina suaves láminas horizontales o verticales de tela suspendidas entre dos velos transparentes, permitiendo graduar el ingreso de luz natural con una sutileza inigualable mientras protege pisos de madera y mobiliario.',
    technicalSpecs: [
      { label: 'Filtrado Solar', value: 'Bloquea hasta 99% de rayos UV nocivos al cerrarse' },
      { label: 'Formato', value: 'Horizontal para ventanas / Vertical para puertas ventana' },
      { label: 'Lamas', value: 'Textiles importados de 50mm, 65mm y 75mm' },
      { label: 'Mecanismo', value: 'Cofre superior de aluminio termoesmaltado integrado' }
    ],
    keyBenefits: [
      'Graduación suave de la luz sin perder la vista hacia el exterior',
      'Privacidad diurna óptima con entrada de luz difusa y cálida',
      'Preservación de obras de arte, pisos y muebles contra la decoloración',
      'Versión vertical ideal para accesos a balcones y terrazas'
    ],
    idealFor: 'Salas principales, comedores formales, penthouses y áreas sociales de doble altura.',
    warranty: '2 años en velos técnicos, sujeciones y mecanismos',
    image: heroLuxuryCurtains,
    fallbackIcon: 'Sun'
  },
  {
    id: 'plisadas-flotantes',
    name: 'Visillos y Cortinas Tradicionales',
    category: 'cortinas',
    categoryLabel: 'Cortinas Decorativas',
    tagline: 'Elegancia atemporal con pliegues simétricos y caída textil fluida',
    description: 'Confección artesanal de alta sastrería textil con pliegues definidos (pellizco doble o triple francés y sistemas plisados arquitectónicos). Instalables sobre rieles de desplazamiento continuo o barras decorativas con anillas en latón o grafito, creando una caída vaporosa y uniforme que tamiza la luz natural con sutileza y distinción.',
    technicalSpecs: [
      { label: 'Tipo de Pliegue', value: 'Pliegues nítidos franceses (Pinch Pleat) y plisadas continuas' },
      { label: 'Sistemas de Soporte', value: 'Barras arquitectónicas con anillas (latón/acero) o riel oculto' },
      { label: 'Textiles', value: 'Linos importados, velos de gasa y tejidos con caída pesada' },
      { label: 'Ajuste', value: 'Accionamiento manual por varilla oculta o motorización silenciosa' }
    ],
    keyBenefits: [
      'Ondulación perfecta y pliegues simétricos que mantienen su forma intacta con el tiempo',
      'Tamizado cálido y homogéneo de la luz natural diurna en áreas sociales y dormitorios',
      'Compatibilidad total con barras de lujo en tonos bronce, latón cepillado o negro mate',
      'Aporta calidez, volumen y acústica acogedora al ambiente'
    ],
    idealFor: 'Salas principales, comedores de diseño, suites de lujo y ventanales con vista a jardines.',
    warranty: '2 años en confección artesanal, cintas y mecanismos de tracción',
    image: cortinasPlizadas,
    fallbackIcon: 'SlidersHorizontal'
  },
  {
    id: 'doble-tela',
    name: 'ZEBRA (Día y Noche)',
    category: 'cortinas',
    categoryLabel: 'Cortinas Técnicas',
    tagline: 'Graduación milimétrica entre transparencia y privacidad',
    description: 'Diseño vanguardista con franjas alternadas horizontales transparentes y opacas. Al deslizar la tela con un suave movimiento, se alinean las franjas para alternar entre una vista panorámica tamizada o una superficie de privacidad y oscurecimiento total.',
    technicalSpecs: [
      { label: 'Tejido', value: '100% Poliéster técnico de alta tenacidad' },
      { label: 'Franjas', value: 'Bandas opacas de 75mm y velos de 50mm' },
      { label: 'Zócalo', value: 'Contrapeso de aluminio con giro continuo antienredo' },
      { label: 'Casetón', value: 'Protección antipolvo a juego con el color de tela' }
    ],
    keyBenefits: [
      'Dos funciones en una sola cortina: filtro solar de día y privacidad de noche',
      'Líneas horizontales modernas que amplían visualmente el ambiente',
      'Mantenimiento sencillo y gran resistencia al desgaste',
      'Disponible en telas traslúcidas texturizadas y telas oscurantes'
    ],
    idealFor: 'Oficinas corporativas, dormitorios juveniles, salas de estar y departamentos modernos.',
    warranty: '2 años completos en mecanismos y tejidos',
    image: cortinaZebra,
    fallbackIcon: 'Eye'
  },
  {
    id: 'enrollables-tecnicas',
    name: 'Enrollables Técnicas (Screen y Blackout)',
    category: 'cortinas',
    categoryLabel: 'Cortinas Técnicas',
    tagline: 'Telas certificadas libres de PVC y máxima seguridad infantil',
    description: 'Nuestra solución insignia en ingeniería de protección solar. Confeccionadas con tejidos Screen de fibra de vidrio y poliéster técnico de alta estabilidad dimensional. 100% libres de emisiones tóxicas y formaldehído, con certificación Child Safety y telas Blackout de bloqueo lumínico absoluto.',
    technicalSpecs: [
      { label: 'Factor de Apertura', value: '1%, 3%, 5% y 10% de paso de luz visual' },
      { label: 'Seguridad', value: '100% Libres de PVC / Retardantes de llama NFPA 701' },
      { label: 'Mecanismos', value: 'Embragues desmultiplicados de acero inoxidable reforzado' },
      { label: 'Blackout', value: 'Bloqueo solar 100% con guías laterales herméticas opcionales' }
    ],
    keyBenefits: [
      'Visibilidad clara del exterior sin reflejos molestos en pantallas y monitores',
      'Ambientes saludables libres de olores plásticos ni compuestos orgánicos volátiles (COVs)',
      'Resistencia extrema a la deformación por radiación solar continua',
      'Sistemas de fijación seguros para niños y mascotas (Child Safety Compliant)'
    ],
    idealFor: 'Proyectos corporativos, salas de conferencias, clínicas, auditorios y residencias modernas.',
    warranty: '2 años en tubos de enrollamiento, embragues y telas técnicas',
    image: rollerShades,
    fallbackIcon: 'ShieldCheck'
  },
  {
    id: 'romanas',
    name: 'Cortinas Romanas de Vanguardia',
    category: 'cortinas',
    categoryLabel: 'Cortinas Decorativas',
    tagline: 'Diseño minimalista de pliegue horizontal sin costuras a la vista',
    description: 'Una reinterpretación sofisticada de la cortina romana tradicional. Desarrolladas con tecnología de termosellado ultra-plano que elimina agujeros de aguja y costuras visibles por donde suele filtrarse la luz, logrando un pliegue suave y uniforme de estética contemporánea.',
    technicalSpecs: [
      { label: 'Confección', value: 'Sin perforaciones de costura frontal (Seamless Clean Look)' },
      { label: 'Varillas', value: 'Fibra de vidrio oculta antialabeo de alta rigidez' },
      { label: 'Tejidos', value: 'Linos naturales, sedas sintéticas y tejidos opacos' },
      { label: 'Caída', value: 'Pliegues en cascada simétricos de 20cm a 25cm' }
    ],
    keyBenefits: [
      'Limpia silueta arquitectónica que viste con calidez y prestancia',
      'Sin hilos rotos ni desgaste prematuro por fricción de aguja',
      'Perfecta integración en decoraciones clásicas contemporáneas y nórdicas',
      'Manejo suave con sistema de cordón oculto o motorización'
    ],
    idealFor: 'Salas de lectura, suites de invitados, vestidores y comedores elegantes.',
    warranty: '2 años en confección y herrajes de tracción',
    image: cortinaRomana,
    fallbackIcon: 'FoldHorizontal'
  },
  {
    id: 'paneles-deslizantes',
    name: 'Panel Japonés para grandes ventanales',
    category: 'cortinas',
    categoryLabel: 'Cortinas Técnicas',
    tagline: 'La solución óptima para ventanales de suelo a techo y divisiones',
    description: 'Grandes lienzos de tela técnica que se deslizan suavemente a lo largo de un riel de múltiples vías. Diseñados específicamente para cubrir amplias extensiones de cristal panorámicas, ventanales corredizos y como divisores de ambientes con gran ligereza visual.',
    technicalSpecs: [
      { label: 'Rieles', value: 'Aluminio extruido de 2, 3, 4 y 5 vías independientes' },
      { label: 'Ancho de Paneles', value: 'Lienzos a medida de 50cm a 110cm de ancho' },
      { label: 'Apertura', value: 'Lateral, bilateral simétrica o libre' },
      { label: 'Combinación', value: 'Permite alternar paneles translúcidos y opacos en el mismo riel' }
    ],
    keyBenefits: [
      'Operación fluida sin enredos ni atascos sobre aperturas de hasta 6 metros de ancho',
      'Excelente solución para integrar terrazas con áreas sociales',
      'Desmontaje individual de cada panel mediante velcro técnico para fácil limpieza',
      'Estética limpia y vertical de inspiración oriental'
    ],
    idealFor: 'Puertas corredizas a jardines o piscinas, lofts de doble altura y divisiones de oficinas.',
    warranty: '2 años en rielería de aluminio y rodamientos de teflón',
    image: panelJapones,
    fallbackIcon: 'Columns3'
  },

  // PERSIANAS
  {
    id: 'persianas-madera',
    name: 'Persianas de Madera Natural (Basswood)',
    category: 'persianas',
    categoryLabel: 'Persianas Arquitectónicas',
    tagline: 'Calidez orgánica con madera genuina de bosques sostenibles',
    description: 'Fabricadas exclusivamente con madera Basswood (tilo americano) de grano fino y peso ligero, tratada contra la humedad y deformación térmica. Sus lamas basculantes permiten orientar la luz con precisión milimétrica, creando una atmósfera cálida, acogedora y de prestigio atemporal.',
    technicalSpecs: [
      { label: 'Madera', value: '100% Basswood genuino seleccionado de primera clase' },
      { label: 'Ancho de Lama', value: '50mm de grosor robusto con bordes biselados' },
      { label: 'Acabados', value: 'Nogal, Roble, Wengué, Blanco puro y Madera lavada' },
      { label: 'Escalerilla', value: 'Cintas decorativas de algodón o cordones trenzados de alta tensión' }
    ],
    keyBenefits: [
      'Aislante natural tanto del calor estival como del frío invernal',
      'Mayor durabilidad y resistencia al pandeo que las imitaciones sintéticas',
      'Lacas curadas con protección UV que evitan la decoloración prematura',
      'Mecanismos de freno de latón de alta precisión y elevación suave'
    ],
    idealFor: 'Estudios jurídicos, bibliotecas privadas, despachos presidenciales y residencias de lujo.',
    warranty: '2 años en duelas de madera, cintas y cabezal metálico',
    image: catalogBlindsWood,
    fallbackIcon: 'TreePine'
  },

  // SOLUCIONES EXTERIORES
  {
    id: 'toldos-exterior',
    name: 'Toldos de Exterior Arquitectónicos',
    category: 'exteriores',
    categoryLabel: 'Protección Exterior',
    tagline: 'Espacios exteriores habitables con protección solar y térmica',
    description: 'Toldos de brazos invisibles articulados de aleación aeroespacial con lona acrílica 100% tintada en masa. Diseñados para extender el confort del hogar hacia terrazas, jardines y pérgolas con una estética elegante y cofre sellado que protege la lona cuando está recogida.',
    technicalSpecs: [
      { label: 'Lona', value: 'Acrílica náutica 300g/m² con tratamiento Teflón hidrófugo' },
      { label: 'Estructura', value: 'Brazos de aluminio extruido con resortes de tensión interna de acero' },
      { label: 'Cofre', value: 'Cierre hermético total que protege tela y motor de la intemperie' },
      { label: 'Automatización', value: 'Sensor autónomo de viento y sol (pliega el toldo automáticamente)' }
    ],
    keyBenefits: [
      'Expande los metros útiles de tu terraza o jardín durante todo el año',
      'Colores resistentes a los rayos UV sin decoloración durante años',
      'Protección contra lluvias ligeras y sol intenso',
      'Accionamiento por control remoto inalámbrico o comandos de voz'
    ],
    idealFor: 'Terrazas de áticos, restaurantes, porches residenciales, zonas de barbacoa y albercas.',
    warranty: '2 años en lonas técnicas, brazos de tensión y motores Somfy / MoriSan Pro',
    image: catalogOutdoorAwnings,
    fallbackIcon: 'Umbrella'
  },
  {
    id: 'toldos-claraboya',
    name: 'Toldos Exteriores Claraboya',
    category: 'exteriores',
    categoryLabel: 'Protección Exterior',
    tagline: 'Protección solar horizontal y cenital para pérgolas, techos de cristal y claraboyas',
    description: 'Sistema de toldo corredero tensado o tipo palillería de ondas especialmente concebido para instalar bajo o sobre pérgolas de madera, estructuras metálicas, lucernarios y techos acristalados. Permite disfrutar de patios y terrazas mitigando el calor cenital y la radiación solar directa con un diseño textil acogedor.',
    technicalSpecs: [
      { label: 'Tejido', value: 'Lona acrílica resinada 100% tintada en masa o tejido técnico microperforado Soltis' },
      { label: 'Estructura', value: 'Guías de aluminio lacado con poleas y rodamientos de acero inoxidable' },
      { label: 'Tensión / Caída', value: 'Sistema de ondas suspendidas (palillería) o tracción por resortes de gas' },
      { label: 'Accionamiento', value: 'Manual por tiro de cuerda continua o motorización con mando a distancia' }
    ],
    keyBenefits: [
      'Bloquea hasta el 95% de la radiación cenital reduciendo la temperatura bajo la pérgola',
      'Elegante estética de ondas plegables que aporta calidez arquitectónica',
      'Gran resistencia a la decoloración por rayos UV y tratamiento antihumedad',
      'Adaptable a pérgolas existentes de madera, aluminio o hierro forjado'
    ],
    idealFor: 'Pérgolas de jardín, terrazas residenciales, patios interiores, techos de cristal, claraboyas y solariums.',
    warranty: '2 años en tejidos acrílicos, guías de aluminio y accesorios de fijación',
    image: toldoClaraboya,
    fallbackIcon: 'SunMedium'
  },
  {
    id: 'toldos-verticales-exterior',
    name: 'Toldos Verticales para Exteriores',
    category: 'exteriores',
    categoryLabel: 'Protección Exterior',
    tagline: 'Protección solar y cortaviento perimetral para balcones, porches y pérgolas',
    description: 'Sistema vertical enrollable exterior con guías laterales tipo cremallera (Zip) o cables de acero inoxidable. Filtra el calor y los rayos ultravioleta antes de ingresar a la galería o espacio interior, manteniendo las vistas despejadas y actuando como un escudo contra el viento, polvo e insectos.',
    technicalSpecs: [
      { label: 'Sistema de Guiado', value: 'Guías laterales Zip herméticas o cables tensores de acero marino AISI 316' },
      { label: 'Tejidos Técnicos', value: 'Screen microperforado exterior Soltis / Dickson con resistencia al desgarro' },
      { label: 'Cajón Cofre', value: 'Cajón de aluminio extruido que protege totalmente el tejido cuando está recogido' },
      { label: 'Operación', value: 'Motor tubular estanco con control remoto, pulsador o manivela manual' }
    ],
    keyBenefits: [
      'Reduce hasta un 85% la carga térmica del sol de poniente en terrazas y balcones',
      'Excelente resistencia a rachas de viento gracias al bloqueo perimetral',
      'Mantiene la visibilidad hacia el jardín y piscina sin deslumbramiento',
      'Genera nuevos espacios habitables protegidos del sol bajo porches y pérgolas'
    ],
    idealFor: 'Porches exteriores, áreas de piscina, pérgolas bioclimáticas, terrazas de edificios y balcones expuestos.',
    warranty: '2 años en motores estancos, cofres de aluminio y tejidos técnicos de exterior',
    image: toldoVerticalExt,
    fallbackIcon: 'SlidersVertical'
  },

  // AUTOMATIZACIÓN
  {
    id: 'automatizacion-smart',
    name: 'Sistemas de Motorización y Control Inteligente',
    category: 'automatizacion',
    categoryLabel: 'Domótica & Control',
    tagline: 'Control total de la luz natural desde tu smartphone, voz o programación',
    description: 'Transforma cualquier cortina o persiana MoriSan en un dispositivo conectado a la domótica de tu hogar u oficina. Ofrecemos motores silenciosos con tecnología bidireccional, baterías de litio recargables de larga duración (sin cables de obra) o alimentación cableada a 110V/220V.',
    technicalSpecs: [
      { label: 'Nivel de Ruido', value: 'Ultra silencioso (< 35 dB en funcionamiento)' },
      { label: 'Conectividad', value: 'Wi-Fi, Zigbee 3.0, Radiofrecuencia y Matter Ready' },
      { label: 'Alimentación', value: 'Batería interna de litio recargable USB-C (duración 6-9 meses) o 110V' },
      { label: 'Compatibilidad', value: 'Apple Home, Google Home, Amazon Alexa, Control4, Crestron' }
    ],
    keyBenefits: [
      'Programación horaria para abrir con el amanecer y cerrar al atardecer',
      'Simulación de presencia cuando estás de viaje para mayor seguridad',
      'Ideal para ventanales de doble altura donde el accionamiento manual es inviable',
      'Posibilidad de motorizar instalaciones existentes sin necesidad de romper paredes'
    ],
    idealFor: 'Casas inteligentes, ventanales inaccesibles, auditorios corporativos y salas de cine en casa.',
    warranty: '2 años de garantía directa en todos los motores, baterías y pasarelas inteligentes',
    image: motorizacionControl,
    fallbackIcon: 'Cpu'
  },

  // MANTENIMIENTO Y LIMPIEZA
  {
    id: 'mantenimiento-limpieza',
    name: 'Mantenimiento, Lavado Técnico y Reparación',
    category: 'mantenimiento',
    categoryLabel: 'Servicio Técnico',
    tagline: 'Lavado especializado por inmersión ultrasónica y re-calibración de mecanismos',
    description: 'Servicio técnico preventivo y correctivo para prolongar la vida útil de tus cortinas y persianas. Realizamos desmontaje profesional, limpieza profunda no abrasiva que elimina ácaros y polvo acumulado sin deformar pliegues ni deshilachar tejidos técnicos, cambio de cordones, frenos, cadenas y re-sincronización de motores.',
    technicalSpecs: [
      { label: 'Proceso de Lavado', value: 'Ultrasonido y nebulización neutra libre de químicos corrosivos' },
      { label: 'Mantenimiento Mecánico', value: 'Lubricación de piñones, reemplazo de embragues y frenos' },
      { label: 'Ajuste Electrónico', value: 'Programación de límites de carrera y sincronización de mandos' },
      { label: 'Servicio Integral', value: 'Desmontaje en sitio, tratamiento en taller e instalación nivelada' }
    ],
    keyBenefits: [
      'Recupera la prestancia visual y color original sin encoger los tejidos',
      'Elimina hasta el 99.8% de alérgenos, bacterias y partículas en suspensión',
      'Soluciona caídas desniveladas, trabas mecánicas y ruidos molestos',
      'Mucho más económico que reemplazar el sistema completo'
    ],
    idealFor: 'Residencias, oficinas con alto tráfico, clínicas y todo tipo de cortinas o persianas con más de 1 año de uso.',
    warranty: 'Garantía de servicio técnico y repuestos originales MoriSan',
    image: limpiezaCortinas,
    fallbackIcon: 'Sparkles'
  }
];

export const VALUE_PILLARS = [
  {
    number: '01',
    title: 'Confección a la Medida Exacta',
    summary: 'Cada vano tiene sus particularidades. Fabricamos cada pieza al milímetro con telas de importación certificadas.',
    details: [
      'Tolerancia milimétrica en corte por ultrasonido para evitar hilachas',
      'Pliegues y caídas uniformes sin arrugas ni tensiones indeseadas',
      'Componentes de acero y aluminio que no se doblan con el tiempo',
      'Adaptación a ventanales rectos, curvos, inclinados y de doble altura'
    ]
  },
  {
    number: '02',
    title: 'Asesoría Consultiva Experta',
    summary: 'No despachamos productos al azar. Analizamos la arquitectura, la orientación solar y el confort acústico.',
    details: [
      'Estudio in situ de la radiación UV y transferencia térmica de cada ventana',
      'Presentación de muestrarios físicos reales bajo la luz natural de tu espacio',
      'Soluciones específicas para cada ambiente (privacidad, oscuridad, trabajo o descanso)',
      'Acompañamiento a arquitectos, interioristas y constructores en obra'
    ]
  },
  {
    number: '03',
    title: '2 Años de Garantía Integral',
    summary: 'Tranquilidad absoluta respaldada por escrito en todos nuestros componentes, mecanismos y confección.',
    details: [
      'Cobertura total en telas contra decoloración prematura y fallas de urdimbre',
      'Garantía en sistemas motrices, embragues, frenos y rodamientos',
      'Soporte técnico preferencial y repuestos originales garantizados',
      'Servicio de mantenimiento posventa y recalibración de sistemas'
    ]
  }
];

export const METHOD_STEPS = [
  {
    step: '01',
    phase: 'Indagación y Diagnóstico',
    title: 'Entendemos tu espacio y tus prioridades',
    description: 'Ya sea un proyecto residencial íntimo o una sede corporativa de alta exigencia, dialogamos sobre tus necesidades funcionales: ¿Buscas aislamiento térmico, oscurecimiento para descanso, visibilidad al exterior o protección UV para tu mobiliario?',
    deliverable: 'Perfil preliminar de requerimientos y tipos de telas recomendadas'
  },
  {
    step: '02',
    phase: 'Propuesta Técnica Personalizada',
    title: 'Recomendación experta de sistemas y acabados',
    description: 'Presentamos una solución a la medida con las mejores combinaciones técnicas (cortinas celulares, persianas de madera Basswood, toldos exteriores o motorización domótica), con especificaciones claras de factores de apertura y acabados.',
    deliverable: 'Presupuesto transparente y desglosado sin sorpresas'
  },
  {
    step: '03',
    phase: 'Visita Técnica y Toma de Medidas',
    title: 'Precisión milimétrica en tu domicilio u obra',
    description: 'Nuestro especialista se desplaza a tu ubicación con distanciómetro láser y muestrarios físicos de telas y texturas. Se evalúa el tipo de muro, dintel, profundidad de cajón y puntos eléctricos, asegurando una instalación perfecta y sin imprevistos.',
    deliverable: 'Medidas certificadas para corte y confección inmediata'
  }
];

export const FAQS_DATA = [
  {
    q: '¿Cómo funciona la visita técnica y qué costo tiene?',
    a: 'La visita técnica es el pilar de nuestro compromiso de calidad y NO tiene costo a nivel nacional. Un especialista de MoriSan acude directamente a tu residencia, oficina o proyecto en cualquier punto del país con distanciómetro láser de alta precisión, verifica las medidas al milímetro, examina los muros y estructuras de fijación, y presenta muestrarios físicos completos para que aprecies los tejidos, texturas y colores bajo la iluminación real de tu ambiente, sin costo ni compromiso.'
  },
  {
    q: '¿Cuál es el tiempo estimado de confección y entrega de los pedidos?',
    a: 'Gracias a nuestros procesos de corte sistematizado por ultrasonido y stock permanente de telas técnicas y perfilería, nuestro tiempo récord de confección, entrega e instalación es de 48 a 72 horas laborables para pedidos residenciales y corporativos estándar. Para requerimientos de gran escala o persianas con especificaciones especiales de importación, coordinamos un cronograma ágil de entregas parciales previamente acordado.'
  },
  {
    q: '¿Qué cubre exactamente la garantía de 2 años de MoriSan?',
    a: 'Nuestra garantía por escrito de 2 años cubre cualquier defecto de fabricación en telas técnicas (decoloración anormal, desprendimiento de capas, deformación estructural), rotura de mecanismos internos de accionamiento (embragues, reductores, frenos de persiana), motores y componentes de fijación. No cubre daños provocados por mal uso evidente, manipulación violenta o desastres naturales.'
  },
  {
    q: '¿Qué cortina me recomiendan si quiero aislar el calor y reducir el ruido de la calle?',
    a: 'Para aislamiento térmico y confort acústico, nuestra recomendación número uno son las Cortinas Celulares en estructura panal de abeja (celda doble o simple). Su cámara de aire interna frena la conductividad térmica del cristal hasta en un 45% y absorbe ecos y ruidos de baja frecuencia. Si buscas también oscurecimiento para dormir, la versión Celular Blackout con rieles laterales es insuperable.'
  },
  {
    q: '¿Es posible motorizar mis cortinas si mi casa no tiene puntos eléctricos preparados en la pared?',
    a: '¡Sí, absolutamente! Contamos con motores inteligentes a batería de litio integrada de última generación. No requieren ningún cableado en la pared ni obras de albañilería. Se recargan cómodamente cada 6 a 9 meses mediante un cable USB-C magnético (similar a cargar un teléfono celular) y se controlan por control remoto, app de celular o con la voz.'
  },
  {
    q: '¿Cómo atienden proyectos corporativos y licitaciones de oficinas?',
    a: 'Disponemos de un departamento corporativo especializado que asiste a arquitectos, interioristas y gerencias de compras. Ofrecemos telas con certificación internacional ignífuga (retardante de llama NFPA 701), tejidos Screen con factor de apertura 1% o 3% para erradicar reflejos en pantallas de computadoras, facturación con desglose de IVA y cronogramas de instalación nocturna o de fines de semana para no interrumpir la operativa laboral.'
  }
];
