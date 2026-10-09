import React, { useState } from 'react';
import { FAQS_DATA } from '../data/catalogData';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-display font-semibold uppercase tracking-[0.2em] text-[#A35C37]">
            <HelpCircle className="w-4 h-4" />
            <span>Resolución de Dudas & Asesoría</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2B2B2B] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed">
            Claridad total antes de iniciar tu proyecto. Conoce nuestras garantías, tiempos de confección y el funcionamiento de la visita técnica.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#A35C37] bg-white shadow-sm ring-1 ring-[#A35C37]/20'
                    : 'border-stone-200 bg-stone-50/50 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C37]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-[#2B2B2B]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A35C37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Objection Breaker Box */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAF9F6] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-base text-[#2B2B2B]">
              ¿Tienes una inquietud técnica particular sobre tus ventanas?
            </h4>
            <p className="text-xs text-stone-600">
              Conversa directamente con un asesor técnico de MoriSan sin intermediarios ni demoras.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/593984684270?text=Hola%20MoriSan,%20tengo%20una%20pregunta%20espec%C3%ADfica%20sobre%20mi%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-4 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear al +593984684270</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
