import React, { useState } from 'react';
import { CATALOG_ITEMS, CatalogItem } from '../data/catalogData';
import {
  Layers,
  Sun,
  SlidersHorizontal,
  Eye,
  ShieldCheck,
  FoldHorizontal,
  Columns3,
  TreePine,
  Sparkles,
  Wind,
  Umbrella,
  Cpu,
  ArrowRight,
  Maximize2,
  CheckCircle2
} from 'lucide-react';

interface CatalogSectionProps {
  onSelectItem: (item: CatalogItem) => void;
  onScheduleVisit: (productName: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectItem,
  onScheduleVisit
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const categories = [
    { id: 'todas', label: 'Todas las Soluciones' },
    { id: 'cortinas', label: 'Cortinas Técnicas & Decorativas' },
    { id: 'persianas', label: 'Persianas' },
    { id: 'exteriores', label: 'Soluciones Exteriores' },
    { id: 'automatizacion', label: 'Automatización' },
    { id: 'mantenimiento', label: 'Mantenimiento & Limpieza' },
  ];

  const filteredItems = activeCategory === 'todas'
    ? CATALOG_ITEMS
    : CATALOG_ITEMS.filter((item) => item.category === activeCategory);

  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#A35C37]" };
    switch (iconName) {
      case 'Layers': return <Layers {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'SlidersHorizontal': return <SlidersHorizontal {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'FoldHorizontal': return <FoldHorizontal {...props} />;
      case 'Columns3': return <Columns3 {...props} />;
      case 'TreePine': return <TreePine {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Umbrella': return <Umbrella {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      default: return <Sun {...props} />;
    }
  };

  return (
    <section id="catalogo" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-[0.2em] text-[#A35C37]">
              <span>Portafolio MoriSan</span>
              <span aria-hidden="true">·</span>
              <span>Protección Solar & Diseño Textil</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2B2B2B] tracking-tight">
              Catálogo de Soluciones a la Medida
            </h2>
            <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed">
              Cada espacio exige un grado específico de opacidad, filtrado solar y prestancia decorativa. Explora nuestras familias de producto y agenda una visita para evaluar muestrarios físicos en tus ventanales.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-display">
            Mostrando <span className="font-semibold text-stone-900">{filteredItems.length}</span> soluciones especializadas
          </div>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-stone-200 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 text-xs font-display font-semibold tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                activeCategory === cat.id
                  ? 'border-[#A35C37] bg-[#A35C37] text-white shadow-sm'
                  : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 hover:border-stone-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 flex flex-col justify-between transition-all duration-300 hover:border-[#A35C37]/50 hover:shadow-lg group"
            >
              {/* Product Visual Area */}
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-[#FAF9F6] border-b border-stone-200 cursor-pointer"
                onClick={() => onSelectItem(item)}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-stone-50 to-stone-100">
                    <div className="p-3 bg-white border border-stone-200 shadow-sm mb-2">
                      {renderIcon(item.fallbackIcon)}
                    </div>
                    <span className="text-xs font-display font-medium text-stone-500 uppercase tracking-widest">
                      Confección de Precisión
                    </span>
                  </div>
                )}

                {/* Category kicker overlay */}
                <div className="absolute top-3 left-3 bg-[#2B2B2B]/85 backdrop-blur-sm text-white text-[10px] font-display font-semibold uppercase tracking-wider px-2.5 py-1">
                  {item.categoryLabel}
                </div>

                {/* Inspect button overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-1.5 py-2 px-4 bg-white text-stone-900 font-display font-semibold text-xs uppercase tracking-wider shadow">
                    <Maximize2 className="w-3.5 h-3.5 text-[#A35C37]" />
                    Ver Ficha Técnica
                  </span>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => onSelectItem(item)}
                    className="text-lg font-display font-bold text-[#2B2B2B] hover:text-[#A35C37] transition-colors cursor-pointer mb-1 leading-snug"
                  >
                    {item.name}
                  </h3>

                  <p className="text-xs font-medium text-[#A35C37] mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-stone-100 mb-4">
                    {item.technicalSpecs.slice(0, 2).map((spec, i) => (
                      <div key={i} className="flex justify-between text-[11px]">
                        <span className="text-stone-500 font-display">{spec.label}:</span>
                        <span className="font-semibold text-stone-800 text-right truncate max-w-[60%]">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action bar */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectItem(item)}
                    className="text-xs font-display font-semibold text-stone-700 hover:text-[#A35C37] transition-colors cursor-pointer py-1"
                  >
                    Detalles y Telas
                  </button>

                  <button
                    onClick={() => onScheduleVisit(item.name)}
                    className="inline-flex items-center gap-1 py-1.5 px-3 bg-[#A35C37] hover:bg-[#8C4C2B] text-white text-[11px] font-display font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Cotizar en Sitio</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Catalog Footer Notice */}
        <div className="mt-14 p-6 bg-[#FAF9F6] border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white border border-stone-200 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#A35C37]" />
            </div>
            <p className="text-xs sm:text-sm text-stone-700">
              ¿Requieres un muestrario textil específico o una tela con certificación ignífuga? Nuestro técnico la lleva a tu obra.
            </p>
          </div>
          <button
            onClick={() => onScheduleVisit('Consulta de Muestrarios Físicos')}
            className="text-xs font-display font-semibold uppercase tracking-wider text-[#A35C37] hover:text-[#8C4C2B] underline whitespace-nowrap cursor-pointer"
          >
            Solicitar Muestrarios en Sitio →
          </button>
        </div>

      </div>
    </section>
  );
};
