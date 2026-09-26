/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { CatalogSection } from './components/CatalogSection';
import { ProcessMethod } from './components/ProcessMethod';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FooterAndLegal } from './components/FooterAndLegal';
import { LeadModal } from './components/LeadModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CatalogItem } from './data/catalogData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingProject, setBookingProject] = useState<'residencial' | 'corporativo'>('residencial');
  const [bookingProduct, setBookingProduct] = useState('');
  const [selectedCatalogItem, setSelectedCatalogItem] = useState<CatalogItem | null>(null);

  const handleOpenBooking = (
    projectType: 'residencial' | 'corporativo' = 'residencial',
    productName: string = ''
  ) => {
    setBookingProject(projectType);
    setBookingProduct(productName);
    setBookingModalOpen(true);
  };

  const handleScheduleFromCatalog = (productName: string) => {
    handleOpenBooking('residencial', productName);
  };

  return (
    <div className="min-h-screen bg-white text-[#2B2B2B] flex flex-col font-sans selection:bg-[#A35C37]/20 selection:text-[#A35C37]">
      {/* 1-Row, 3-Zone Top Bar */}
      <Navbar onOpenBooking={(type) => handleOpenBooking(type || 'residencial')} />

      {/* Main Page Flow: Proposition -> Mechanism -> Proof -> Action */}
      <main className="flex-1">
        {/* A. Hero Section */}
        <Hero onOpenBooking={(type) => handleOpenBooking(type || 'residencial')} />

        {/* B. Propuesta de Valor (3 Pilares) */}
        <ValueProps onOpenBooking={() => handleOpenBooking('residencial')} />

        {/* C. Catálogo Completo de Soluciones y Fichas Técnicas */}
        <CatalogSection
          onSelectItem={(item) => setSelectedCatalogItem(item)}
          onScheduleVisit={handleScheduleFromCatalog}
        />

        {/* D. Proceso de Venta (El Método MoriSan en 3 Pasos) */}
        <ProcessMethod onOpenBooking={() => handleOpenBooking('residencial')} />

        {/* E. Testimonios de Clientes (Carrusel de Prueba Social) */}
        <TestimonialsSection onOpenBooking={(type) => handleOpenBooking(type || 'residencial')} />

        {/* F. Preguntas Frecuentes (Rompiendo Objeciones) */}
        <FaqSection onOpenBooking={() => handleOpenBooking('residencial')} />

        {/* F. Contacto & Formulario de Lead Generation */}
        <ContactSection />
      </main>

      {/* G. Legales, Confianza y Footer */}
      <FooterAndLegal />

      {/* Interactive Booking Modal */}
      <LeadModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialProject={bookingProject}
        initialProduct={bookingProduct}
      />

      {/* Product Technical Specs Drawer Modal */}
      <ProductDetailModal
        item={selectedCatalogItem}
        onClose={() => setSelectedCatalogItem(null)}
        onScheduleVisit={(prod) => handleOpenBooking('residencial', prod)}
      />

      {/* Floating WhatsApp Quick Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
