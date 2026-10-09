import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (projectType?: 'residencial' | 'corporativo') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Propuesta de Valor', href: '#pilares' },
    { label: 'El Método', href: '#metodo' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Preguntas Frecuentes', href: '#faqs' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-stone-100 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Zone */}
          <a
            href="#inicio"
            className="flex items-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C37]"
            aria-label="MoriSan - Soluciones y Decoración en Cortinas"
          >
            <Logo variant="horizontal" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-display font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-stone-700 hover:text-[#A35C37] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A35C37] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/593984684270?text=Hola%20MoriSan,%20deseo%20solicitar%20asesor%C3%ADa%20y%20agendar%20una%20visita%20t%C3%A9cnica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium text-stone-700 hover:text-[#A35C37] transition-colors whitespace-nowrap"
              title="Llamada o WhatsApp directo"
            >
              <Phone className="w-3.5 h-3.5 text-[#A35C37]" />
              <span className="tabular-nums">+593984684270</span>
            </a>

            <button
              onClick={() => onOpenBooking('residencial')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider text-white bg-[#A35C37] hover:bg-[#8C4C2B] transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Agendar Visita</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-[#A35C37] focus:outline-none cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <Logo variant="compact" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-stone-600 hover:text-[#2B2B2B]"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-display font-medium text-stone-800 hover:text-[#A35C37] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-3">
              <a
                href="https://wa.me/593984684270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-display font-semibold uppercase tracking-wider text-[#A35C37] bg-[#F9F3EE] border border-[#A35C37]/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +593984684270</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('residencial');
                }}
                className="w-full py-3 px-4 text-xs font-display font-semibold uppercase tracking-wider text-white bg-[#A35C37] hover:bg-[#8C4C2B] transition-colors"
              >
                Agendar Visita Técnica
              </button>

              <div className="text-[11px] text-center text-stone-500 pt-1 font-display">
                morisandeco@gmail.com
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
