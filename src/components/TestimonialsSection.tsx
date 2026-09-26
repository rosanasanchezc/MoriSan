import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS_DATA, Testimonial } from '../data/testimonialsData';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Building2,
  Home,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: (projectType?: 'residencial' | 'corporativo') => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'todos' | 'residencial' | 'corporativo'>('todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const filteredItems = filter === 'todos'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((item) => item.category === filter);

  // Keep index within bounds if filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Autoplay functionality with smooth pause on hover
  useEffect(() => {
    if (isPaused || filteredItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, filteredItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-[#FFFFFF] overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-[0.2em] text-[#A35C37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prueba Social & Confianza</span>
              <span aria-hidden="true">·</span>
              <span>Testimonios Reales</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2B2B2B] tracking-tight">
              La satisfacción de transformar la luz en hogares y corporaciones.
            </h2>
            <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed">
              Descubre las experiencias de propietarios, arquitectos y directores de proyectos que confiaron en la ingeniería textil y el acompañamiento consultivo de MoriSan.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => setFilter('todos')}
              className={`px-3.5 py-1.5 text-xs font-display font-semibold tracking-wider uppercase transition-all border cursor-pointer ${
                filter === 'todos'
                  ? 'border-[#A35C37] bg-[#A35C37] text-white shadow-sm'
                  : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              Todos ({TESTIMONIALS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('residencial')}
              className={`px-3.5 py-1.5 text-xs font-display font-semibold tracking-wider uppercase transition-all border cursor-pointer ${
                filter === 'residencial'
                  ? 'border-[#A35C37] bg-[#A35C37] text-white shadow-sm'
                  : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              Residencial
            </button>
            <button
              onClick={() => setFilter('corporativo')}
              className={`px-3.5 py-1.5 text-xs font-display font-semibold tracking-wider uppercase transition-all border cursor-pointer ${
                filter === 'corporativo'
                  ? 'border-[#A35C37] bg-[#A35C37] text-white shadow-sm'
                  : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              Corporativo
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Visual Carousel Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 px-1 sm:px-2"
                >
                  <div className="bg-[#FAF9F6] border border-stone-200 p-8 sm:p-10 md:p-12 relative shadow-sm hover:shadow-md transition-shadow">
                    
                    {/* Architectural framing accent */}
                    <div className="absolute top-0 left-0 w-24 h-1 bg-[#A35C37]" />
                    <div className="absolute top-6 right-6 text-stone-200 pointer-events-none">
                      <Quote className="w-16 h-16 opacity-30 stroke-[1.2]" />
                    </div>

                    <div className="relative z-10 max-w-4xl space-y-6">
                      
                      {/* Meta header: Rating, Badge & Project Type */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
                        <div className="flex items-center gap-3">
                          {/* 5 Stars */}
                          <div className="flex items-center gap-1">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-[#A35C37] text-[#A35C37]" />
                            ))}
                          </div>
                          <span className="text-xs font-display font-semibold uppercase tracking-wider text-stone-500">
                            5.0 Excelente
                          </span>
                        </div>

                        {/* Project Type Tag prominently featured */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-200 text-xs font-display font-medium text-stone-800 shadow-2xs">
                          {item.category === 'residencial' ? (
                            <Home className="w-3.5 h-3.5 text-[#A35C37]" />
                          ) : (
                            <Building2 className="w-3.5 h-3.5 text-[#A35C37]" />
                          )}
                          <span className="font-semibold text-stone-900">{item.projectType}</span>
                        </div>
                      </div>

                      {/* Highlight summary */}
                      <p className="text-lg sm:text-xl font-display font-semibold text-[#2B2B2B] leading-snug">
                        «{item.highlight}»
                      </p>

                      {/* Full Client Review */}
                      <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans font-normal italic">
                        {item.review}
                      </p>

                      {/* Solution Installed Tag */}
                      <div className="pt-2">
                        <div className="p-3 bg-white border border-stone-200 inline-flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-display font-semibold text-stone-500 uppercase tracking-wider">
                            Solución Confeccionada:
                          </span>
                          <span className="font-semibold text-[#A35C37]">
                            {item.solutionInstalled}
                          </span>
                        </div>
                      </div>

                      {/* Author Info & Verified Installation */}
                      <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-display font-bold text-base sm:text-lg text-[#2B2B2B]">
                            {item.clientName}
                          </h4>
                          <p className="text-xs text-stone-500 font-sans mt-0.5">
                            {item.location} · {item.date}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-stone-600 bg-white px-3 py-1.5 border border-stone-200">
                          <ShieldCheck className="w-4 h-4 text-[#A35C37]" />
                          <span className="font-display font-medium">Instalación Certificada MoriSan</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls (Arrows and Indicator Dots) */}
          <div className="flex items-center justify-between mt-8 pt-2">
            
            {/* Dots navigation */}
            <div className="flex items-center gap-2">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 h-2 bg-[#A35C37]'
                      : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Ver testimonio ${idx + 1}`}
                />
              ))}
              <span className="text-xs text-stone-500 font-display ml-2">
                {currentIndex + 1} de {filteredItems.length}
              </span>
            </div>

            {/* Prev / Next Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C37]"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-[#2B2B2B] bg-[#2B2B2B] hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C37]"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* Callout action banner below carousel */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-base sm:text-lg text-[#2B2B2B]">
              ¿Deseas una evaluación técnica similar para tu proyecto?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 font-sans">
              Coordinamos una visita técnica con distanciómetro láser y muestrarios físicos en tu domicilio u oficina.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('residencial')}
            className="inline-flex items-center gap-2 py-3 px-6 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Agendar Visita Técnica</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
