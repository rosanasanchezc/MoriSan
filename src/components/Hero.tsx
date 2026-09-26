import React from 'react';
import { MessageCircle, Calendar, ArrowDown, Shield, Check } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (projectType?: 'residencial' | 'corporativo') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/593997777776?text=${encodeURIComponent(
    'Hola MoriSan, deseo coordinar una visita técnica para asesorarme en cortinas y persianas para mi proyecto.'
  )}`;

  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FFFFFF] overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-stone-100 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Persuasive Headline & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6">
            
            {/* Unboxed Brand Kicker (No Pill) */}
            <div className="flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-[0.25em] text-[#A35C37]">
              <span>MoriSan</span>
              <span aria-hidden="true">·</span>
              <span>Soluciones y Decoración en Cortinas</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-display font-bold text-[#2B2B2B] tracking-tight leading-[1.12] text-balance">
              Transformamos ambientes mediante el control maestro de la luz.
            </h1>

            {/* Value Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans max-w-2xl">
              Diseño, confección a la medida e instalación de cortinas técnicas, persianas arquitectónicas, toldos y automatización inteligente para proyectos residenciales y corporativos. Elevamos el confort térmico, la privacidad y la estética de cada vano.
            </p>

            {/* Trust Markers - Clean inline typography (No pills) */}
            <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-display text-stone-600">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A35C37]" />
                <span className="font-semibold text-stone-800">Confección a Medida Exacta</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A35C37]" />
                <span className="font-semibold text-stone-800">Asesoría Consultiva en Obra</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A35C37]" />
                <span className="font-semibold text-stone-800">2 Años de Garantía Total</span>
              </div>
            </div>

            {/* Conversion CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Highlighted CTA to WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display font-semibold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Agendar por WhatsApp (+593 099 777 7776)</span>
              </a>

              {/* Secondary Lead Consultation CTA */}
              <button
                onClick={() => onOpenBooking('residencial')}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-white border border-[#2B2B2B] hover:bg-stone-50 text-[#2B2B2B] font-display font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-[#A35C37]" />
                <span>Solicitar Visita Técnica</span>
              </button>
            </div>

            {/* Micro-Copy Trust Signal */}
            <p className="text-[11px] text-stone-400 font-sans">
              * Visita técnica sin costo a nivel nacional con muestrarios físicos y toma de medidas láser en sitio. Sin compromiso.
            </p>
          </div>

          {/* Right Column: Hero Architectural Image & Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Architectural Frame Border Motif */}
              <div className="absolute -inset-3 border border-stone-200 pointer-events-none hidden sm:block" />

              {/* Main Visual Asset */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-100 shadow-xl border border-stone-200">
                <img
                  src="/src/assets/images/hero_luxury_curtains_1790378763822.jpg"
                  alt="Salón residencial moderno con cortinas MoriSan filtrando la luz natural"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim for media contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-widest text-[#A35C37] font-semibold block">
                      Espacios Residenciales & Corporativos
                    </span>
                    <span className="text-xs font-display font-bold text-stone-900">
                      Cortinas Wave & Motorización Silenciosa
                    </span>
                  </div>
                  <a
                    href="#catalogo"
                    className="text-xs font-display font-semibold text-[#A35C37] hover:text-[#8C4C2B] underline flex items-center gap-1"
                  >
                    <span>Ver Catálogo</span>
                    <ArrowDown className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
