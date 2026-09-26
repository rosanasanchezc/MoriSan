import React from 'react';
import { VALUE_PILLARS } from '../data/catalogData';
import { Scissors, Compass, ShieldCheck, Check } from 'lucide-react';

interface ValuePropsProps {
  onOpenBooking: () => void;
}

export const ValueProps: React.FC<ValuePropsProps> = ({ onOpenBooking }) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Scissors className="w-6 h-6 text-[#A35C37]" />;
      case 1:
        return <Compass className="w-6 h-6 text-[#A35C37]" />;
      case 2:
      default:
        return <ShieldCheck className="w-6 h-6 text-[#A35C37]" />;
    }
  };

  return (
    <section id="pilares" className="py-20 lg:py-28 bg-[#FAF9F6] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-[0.2em] text-[#A35C37]">
            <span>Nuestra Propuesta de Valor</span>
            <span aria-hidden="true">·</span>
            <span>Estándares de Excelencia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2B2B2B] tracking-tight">
            Tres pilares innegociables que definen cada proyecto MoriSan.
          </h2>
          <p className="text-base text-stone-600 font-sans leading-relaxed">
            Eliminamos la incertidumbre de comprar cortinas estandarizadas. Confeccionamos exclusivamente sobre plano y medidas tomadas en sitio, combinando estética de diseño con ingeniería de protección solar.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="bg-white p-8 border border-stone-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#A35C37]/40 relative group"
            >
              {/* Pillar Number as Clean Human Editorial Index */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-[#FAF9F6] border border-stone-200">
                  {getIcon(idx)}
                </div>
                <span className="font-display font-bold text-3xl text-stone-200 group-hover:text-[#A35C37]/30 transition-colors">
                  {pillar.number}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-[#2B2B2B] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                  {pillar.summary}
                </p>

                {/* Sub-features list */}
                <div className="space-y-2.5 pt-4 border-t border-stone-100 text-xs text-stone-700">
                  {pillar.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#A35C37] shrink-0 mt-0.5" />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-auto">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-display font-semibold uppercase tracking-wider text-[#A35C37] group-hover:text-[#8C4C2B] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Conocer cómo lo aplicamos</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Adjacency Banner: Technical Precision Quote */}
        <div className="mt-12 bg-white p-6 md:p-8 border-l-4 border-[#A35C37] border border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-display font-bold text-base text-[#2B2B2B]">
              ¿Tienes un requerimiento de obra con especificaciones técnicas o telas ignífugas?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Atendemos arquitectos, diseñadores de interiores y administradores corporativos con fichas técnicas, cotizaciones formales y visitas en sitio.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="py-2.5 px-5 bg-[#2B2B2B] hover:bg-stone-900 text-white font-display text-xs font-semibold uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors"
          >
            Contactar Asesor Técnico
          </button>
        </div>

      </div>
    </section>
  );
};
