import React from 'react';
import { METHOD_STEPS } from '../data/catalogData';
import { Check, ClipboardList, Sliders, Ruler, ArrowRight } from 'lucide-react';

interface ProcessMethodProps {
  onOpenBooking: () => void;
}

export const ProcessMethod: React.FC<ProcessMethodProps> = ({ onOpenBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ClipboardList className="w-5 h-5 text-[#A35C37]" />;
      case 1:
        return <Sliders className="w-5 h-5 text-[#A35C37]" />;
      case 2:
      default:
        return <Ruler className="w-5 h-5 text-[#A35C37]" />;
    }
  };

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-[#FAF9F6] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-[0.2em] text-[#A35C37]">
            <span>Metodología de Trabajo</span>
            <span aria-hidden="true">·</span>
            <span>Venta Consultiva MoriSan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2B2B2B] tracking-tight">
            El Método MoriSan: Precisión y acompañamiento en 3 pasos.
          </h2>
          <p className="text-base text-stone-600 font-sans leading-relaxed">
            Comprar cortinas de alta gama no es una transacción de catálogo; es un proyecto arquitectónico de control solar. Nuestro proceso garantiza que el resultado final encaje con exactitud milimétrica en tu vida cotidiana.
          </p>
        </div>

        {/* Steps Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {METHOD_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white p-8 border border-stone-200 shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:border-[#A35C37]/50"
            >
              {/* Step indicator header */}
              <div className="flex items-center justify-between pb-6 border-b border-stone-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#FAF9F6] border border-stone-200">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-xs font-display font-semibold uppercase tracking-wider text-stone-500">
                    {step.phase}
                  </span>
                </div>
                <span className="font-display font-bold text-2xl text-[#A35C37]">
                  {step.step}.
                </span>
              </div>

              {/* Step Content */}
              <div>
                <h3 className="text-lg font-display font-bold text-[#2B2B2B] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6 font-sans">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Box */}
              <div className="pt-4 border-t border-stone-100 mt-auto">
                <div className="bg-stone-50 p-3.5 border-l-2 border-[#A35C37] text-xs">
                  <span className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#A35C37] block mb-0.5">
                    Entregable Clave:
                  </span>
                  <span className="text-stone-700 font-medium leading-relaxed">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Visit Focus Box */}
        <div className="mt-16 bg-[#2B2B2B] text-white p-8 md:p-12 border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-display uppercase tracking-widest text-[#A35C37] font-semibold block">
              Paso Fundamental del Proceso
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              ¿Por qué es indispensable la visita técnica en sitio?
            </h3>
            <p className="text-sm text-stone-300 font-sans leading-relaxed">
              Porque los muros nunca son 100% nivelados, los dinteles varían y la luz del sol cambia radicalmente según la hora del día. Durante la visita técnica examinamos los materiales de fijación (ladrillo, drywall, hormigón o estructura metálica), asegurando que el mecanismo funcione con total suavidad durante años.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenBooking}
              className="py-3 px-6 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display font-semibold text-xs tracking-wider uppercase transition-colors text-center cursor-pointer whitespace-nowrap"
            >
              Agendar Visita Técnica Ahora
            </button>
            <a
              href="https://wa.me/593984684270?text=Hola%20MoriSan,%20quisiera%20agendar%20una%20visita%20t%C3%A9cnica%20con%20toma%20de%20medidas."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 border border-stone-700 hover:border-stone-500 text-stone-200 hover:text-white font-display font-medium text-xs tracking-wider uppercase transition-colors text-center cursor-pointer whitespace-nowrap"
            >
              Coordinar por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
