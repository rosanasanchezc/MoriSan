import React from 'react';
import { X, ShieldCheck, Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { CatalogItem } from '../data/catalogData';

interface ProductDetailModalProps {
  item: CatalogItem | null;
  onClose: () => void;
  onScheduleVisit: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onScheduleVisit
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white border border-stone-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#2B2B2B] text-white px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-stone-300 font-display">
            <span>{item.categoryLabel}</span>
            <span className="text-[#A35C37]">·</span>
            <span>MoriSan Signature</span>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1.5 transition-colors cursor-pointer"
            aria-label="Cerrar detalle"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          {/* Main Title & Tagline */}
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A35C37] font-semibold font-display">
              Especificación de Producto
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#2B2B2B] tracking-tight mt-1">
              {item.name}
            </h2>
            <p className="text-sm font-medium text-stone-600 mt-1 italic">
              «{item.tagline}»
            </p>
          </div>

          {/* Image if available */}
          {item.image && (
            <div className="relative aspect-video w-full overflow-hidden bg-stone-100 border border-stone-200">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-[#2B2B2B]/90 backdrop-blur-md text-white text-[11px] font-display px-3 py-1 tracking-wide">
                Confección a Medida Exacta
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2 font-display">
              Descripción Arquitectónica
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Technical Specs Grid */}
          <div className="bg-stone-50 border border-stone-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3 font-display">
              Ficha Técnica y Mecanismos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {item.technicalSpecs.map((spec, i) => (
                <div key={i} className="flex flex-col border-b border-stone-200/80 pb-2">
                  <span className="text-stone-500 font-display font-medium">{spec.label}</span>
                  <span className="text-stone-900 font-semibold mt-0.5">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2.5 font-display">
              Beneficios Funcionales Destacados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {item.keyBenefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A35C37] mt-1.5 shrink-0" />
                  <span className="leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal for & Warranty */}
          <div className="p-4 bg-[#FAF9F6] border-l-2 border-[#A35C37] flex flex-col gap-2 text-xs">
            <div>
              <strong className="text-stone-900 font-display">Recomendado para:</strong>{' '}
              <span className="text-stone-700">{item.idealFor}</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#A35C37] shrink-0" />
              <span>Garantía MoriSan: {item.warranty}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onScheduleVisit(item.name);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display font-semibold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Solicitar Visita Técnica para este Modelo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/593997777776?text=${encodeURIComponent(
                `Hola MoriSan, me interesa recibir asesoría y cotización para el producto: ${item.name}. ¿Podemos coordinar una visita técnica?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 border border-[#2B2B2B] text-[#2B2B2B] hover:bg-stone-50 font-display font-medium text-xs tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#A35C37]" />
              <span>Consultar en WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
