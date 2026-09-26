export interface Testimonial {
  id: string;
  clientName: string;
  projectType: string; // ej. 'Residencial - Departamento en Cumbayá'
  category: 'residencial' | 'corporativo';
  location: string;
  solutionInstalled: string;
  rating: number;
  review: string;
  highlight: string;
  date: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Arq. Valeria Montalvo',
    projectType: 'Residencial - Departamento en Cumbayá',
    category: 'residencial',
    location: 'Valle de Cumbayá, Pichincha',
    solutionInstalled: 'Cortinas Celulares Doble Panal & Sheer Elegance Motorizadas',
    rating: 5,
    highlight: 'El aislamiento térmico y la precisión de instalación superaron toda expectativa.',
    review: '«Como arquitecta, soy sumamente exigente con las tolerancias y el comportamiento de la luz. En el departamento de Cumbayá teníamos ventanales de 3 metros con radiación de tarde muy fuerte. El equipo de MoriSan nos visitó con muestrarios reales y nos recomendó cortinas celulares con motorización silenciosa. La temperatura interior se estabilizó de inmediato y los acabados son impecables. Cumplieron con el cronograma prometido.»',
    date: 'Febrero 2026'
  },
  {
    id: 'test-2',
    clientName: 'Ing. Rodrigo Echeverría',
    projectType: 'Corporativo - Torre Empresarial Av. 12 de Octubre',
    category: 'corporativo',
    location: 'Quito Norte, Pichincha',
    solutionInstalled: 'Enrollables Técnicas Screen 3% Ignífugas & Automatización BMS',
    rating: 5,
    highlight: 'Cero reflejos en monitores y una estética corporativa de primer nivel internacional.',
    review: '«Equipar tres pisos corporativos con más de 80 ventanales requería un socio que entendiera de certificaciones contra incendio y confort lumínico laboral. MoriSan presentó las fichas técnicas, coordinó la visita técnica sin alterar las jornadas de trabajo y entregó antes del plazo pactado. El sistema de accionamiento coordinado funciona con suavidad total y el respaldo de los 2 años de garantía nos dio absoluta tranquilidad.»',
    date: 'Enero 2026'
  },
  {
    id: 'test-3',
    clientName: 'Dra. María Elena Carrión',
    projectType: 'Residencial - Penthouse en González Suárez',
    category: 'residencial',
    location: 'González Suárez, Quito',
    solutionInstalled: 'Sheer Verticales & Paneles Deslizantes para Ventanales Corredizos',
    rating: 5,
    highlight: 'Lograron preservar la vista panorámica de la ciudad protegiendo nuestros muebles.',
    review: '«Teníamos mucho temor de que las cortinas bloquearan la vista hacia el cañón del Guayllabamba o que el sol decolorara nuestros pisos de madera de tablón fino. La recomendación de Sheer Verticales fue un acierto extraordinario: filtran los rayos UV con una elegancia que parece de revista internacional. La atención consultiva y el trato educado del instalador marcaron una gran diferencia.»',
    date: 'Noviembre 2025'
  },
  {
    id: 'test-4',
    clientName: 'Esteban Falconí',
    projectType: 'Residencial - Residencia en Puembo',
    category: 'residencial',
    location: 'Puembo, Pichincha',
    solutionInstalled: 'Toldos de Exterior Arquitectónicos & Persianas Basswood de 50mm',
    rating: 5,
    highlight: 'La terraza ahora se disfruta todo el día gracias al sensor de viento inteligente.',
    review: '«Buscábamos una solución que integrara el porche exterior con la sala sin perder la calidez de la madera. MoriSan instaló toldos con lona náutica y sensor de retracción automático si hay vientos fuertes, además de persianas de madera Basswood en el estudio. La calidez visual y la calidad de las duelas son de otro nivel. Cien por ciento recomendados por su puntualidad y seriedad.»',
    date: 'Diciembre 2025'
  },
  {
    id: 'test-5',
    clientName: 'Lic. Sebastián Peñaherrera',
    projectType: 'Corporativo - Estudio Jurídico & Sala de Directorio',
    category: 'corporativo',
    location: 'Edificio Platinum, Guayaquil',
    solutionInstalled: 'Persianas de Madera Natural Basswood Nogal & Doble Tela Blackout',
    rating: 5,
    highlight: 'Sobriedad, confidencialidad acústica y un acabado artesanal de alta categoría.',
    review: '«Nuestra sala de directorio requería un control lumínico estricto para videoconferencias y proyecciones sin perder la sobriedad ejecutiva. Las persianas Basswood en tono nogal aportan un empaque señorial y elegante. Destaco especialmente la puntualidad en la toma de medidas láser y el servicio posventa: resolvieron una duda de calibración en menos de 24 horas.»',
    date: 'Octubre 2025'
  },
  {
    id: 'test-6',
    clientName: 'Camila & Fernando Serrano',
    projectType: 'Residencial - Casa Moderna en Tumbaco',
    category: 'residencial',
    location: 'Intervalles, Tumbaco',
    solutionInstalled: 'Cortinas Romanas Sin Costuras Visibles & Persianas de Exterior 80mm',
    rating: 5,
    highlight: 'Redujimos el calor de la tarde en las habitaciones en más de 6 grados centígrados.',
    review: '«Las ventanas de nuestros dormitorios recibían sol directo todo el poniente y el calor era asfixiante al llegar la noche. Las persianas exteriores de 80mm de aluminio detienen el calor antes del vidrio y las romanas interiores visten el dormitorio con una delicadeza sublime. MoriSan no te vende por vender; evalúan la orientación solar de tu casa como verdaderos ingenieros de luz.»',
    date: 'Septiembre 2025'
  }
];
