import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-30 flex items-center gap-3">
      {/* Discreet tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#2B2B2B] text-white text-xs py-2 px-3.5 shadow-xl border border-stone-700 animate-in fade-in slide-in-from-right-4 duration-300">
          <span>¿Deseas agendar visita técnica?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white p-0.5"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href="https://wa.me/593984684270?text=Hola%20MoriSan,%20deseo%20asesor%C3%ADa%20y%20conocer%20m%C3%A1s%20sobre%20sus%20cortinas%20y%20persianas."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a MoriSan por WhatsApp al +593984684270"
        className="w-13 h-13 rounded-full bg-[#A35C37] hover:bg-[#8C4C2B] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C37] focus-visible:ring-offset-2"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};
