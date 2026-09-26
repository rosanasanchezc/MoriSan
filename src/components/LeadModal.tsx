import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, Phone, Mail, Calendar, Shield, ArrowRight } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: 'residencial' | 'corporativo';
  initialProduct?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialProject = 'residencial',
  initialProduct = ''
}) => {
  const [projectType, setProjectType] = useState<'residencial' | 'corporativo'>(initialProject);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [estimatedWindows, setEstimatedWindows] = useState('1 a 3 ventanales');
  const [preferredTime, setPreferredTime] = useState('Mañana (09:00 - 13:00)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const projectLabel = projectType === 'residencial' ? 'Proyecto Residencial' : 'Proyecto Corporativo';
    const message = `*SOLICITUD DE ASESORÍA Y VISITA TÉCNICA - MORISAN*
──────────────────────
• *Nombre:* ${fullName || 'Cliente interesado'}
• *Tipo de Proyecto:* ${projectLabel}
• *Teléfono:* ${phone || 'No especificado'}
• *Email:* ${email || 'No especificado'}
• *Solución de Interés:* ${selectedProduct || 'Asesoría general'}
• *Cantidad estimada:* ${estimatedWindows}
• *Horario de contacto:* ${preferredTime}
${notes ? `• *Detalles:* ${notes}` : ''}
──────────────────────
_Deseo coordinar una visita técnica y revisión de muestrarios en sitio._`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/593997777776?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-none border border-stone-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#2B2B2B] text-white px-6 py-5 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone-300 font-display">
              <span>MoriSan</span>
              <span className="text-[#A35C37]">·</span>
              <span>Venta Consultiva</span>
            </div>
            <h2 className="text-xl md:text-2xl font-display font-semibold text-white tracking-tight mt-0.5">
              Agendar Visita Técnica Especializada
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-stone-600 leading-relaxed">
                Uno de nuestros especialistas técnicos visitará tu espacio con muestrarios reales de tejidos, distanciómetro láser y asesoramiento bioclimático.
              </p>

              {/* Selector de Tipo de Proyecto */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2 font-display">
                  Tipo de Proyecto <span className="text-[#A35C37]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setProjectType('residencial')}
                    className={`py-3 px-4 text-sm font-display font-medium text-left border transition-all cursor-pointer ${
                      projectType === 'residencial'
                        ? 'border-[#A35C37] bg-[#F9F3EE] text-[#A35C37] shadow-sm ring-1 ring-[#A35C37]'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-semibold">Proyecto Residencial</div>
                    <div className="text-xs text-stone-500 font-normal mt-0.5">Departamentos, casas, suites y quintas</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectType('corporativo')}
                    className={`py-3 px-4 text-sm font-display font-medium text-left border transition-all cursor-pointer ${
                      projectType === 'corporativo'
                        ? 'border-[#A35C37] bg-[#F9F3EE] text-[#A35C37] shadow-sm ring-1 ring-[#A35C37]'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-semibold">Proyecto Corporativo</div>
                    <div className="text-xs text-stone-500 font-normal mt-0.5">Oficinas, clínicas, hoteles y constructoras</div>
                  </button>
                </div>
              </div>

              {/* Contact Data */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                    Nombre Completo <span className="text-[#A35C37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Ing. Carlos Andrade"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                    Teléfono / WhatsApp <span className="text-[#A35C37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +593 099 777 7776"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                    Correo Electrónico <span className="text-[#A35C37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="cliente@ejemplo.com"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                    Solución de Interés
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="">-- Seleccionar producto o asesoría general --</option>
                    <option value="Cortinas Celulares (Aislamiento)">Cortinas Celulares (Aislamiento Térmico/Acústico)</option>
                    <option value="Sheer y Sheer Verticales">Cortinas Sheer y Sheer Verticales (Protección UV)</option>
                    <option value="Visillos y Cortinas Tradicionales">Visillos y Cortinas Tradicionales</option>
                    <option value="Cortinas ZEBRA (Día y Noche)">Cortinas ZEBRA (Día y Noche - Graduación de luz)</option>
                    <option value="Enrollables Técnicas (Screen y Blackout)">Enrollables Técnicas (Screen & Blackout sin PVC)</option>
                    <option value="Cortinas Romanas">Cortinas Romanas (Sin costuras visibles)</option>
                    <option value="Panel Japonés para grandes ventanales">Panel Japonés para grandes ventanales</option>
                    <option value="Persianas de Madera Basswood">Persianas de Madera Natural (Basswood)</option>
                    <option value="Toldos de Exterior Arquitectónicos">Toldos de Exterior Arquitectónicos</option>
                    <option value="Toldos Exteriores Claraboya">Toldos Exteriores Claraboya (Pérgolas y Techos)</option>
                    <option value="Toldos Verticales para Exteriores">Toldos Verticales para Exteriores (Cortaviento y Screen)</option>
                    <option value="Automatización / Domótica">Automatización y Motorización Inteligente</option>
                    <option value="Mantenimiento y Limpieza de Cortinas">Mantenimiento, Lavado Técnico y Reparación de Cortinas</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                    Volumen Aproximado
                  </label>
                  <select
                    value={estimatedWindows}
                    onChange={(e) => setEstimatedWindows(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="1 a 3 ventanales">1 a 3 ventanales (Área puntual)</option>
                    <option value="4 a 8 ventanales">4 a 8 ventanales (Residencia completa)</option>
                    <option value="Más de 8 ventanales">Más de 8 ventanales (Proyecto integral)</option>
                    <option value="Proyecto corporativo (>100 m²)">Proyecto corporativo (&gt; 100 m²)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                    Horario Preferido de Contacto
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Mañana (09:00 - 13:00)">Mañana (09:00 - 13:00)</option>
                    <option value="Tarde (14:00 - 18:00)">Tarde (14:00 - 18:00)</option>
                    <option value="Cualquier momento vía WhatsApp">Cualquier momento vía WhatsApp</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                  Observaciones o Detalles del Espacio (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Ventanal de doble altura orientado al poniente, techos altos, o si buscas telas ignífugas..."
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display font-medium text-sm transition-all shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar y Chatear por WhatsApp</span>
                </button>
                <button
                  type="submit"
                  className="py-3 px-5 border border-[#2B2B2B] bg-[#2B2B2B] hover:bg-stone-900 text-white font-display font-medium text-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  Confirmar Solicitud
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-100">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#A35C37]" />
                  Garantía de 2 años en telas y mecanismos
                </span>
                <span>Datos protegidos y confidenciales</span>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 bg-[#F9F3EE] text-[#A35C37] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#F9F3EE]/50">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-[#2B2B2B]">
                  ¡Solicitud Registrada con Éxito!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mt-2">
                  Gracias <strong className="text-[#2B2B2B]">{fullName || 'estimado cliente'}</strong>. Nuestro equipo técnico en <strong className="text-[#A35C37]">MoriSan</strong> se pondrá en contacto contigo en las próximas horas para coordinar la visita técnica y toma de medidas.
                </p>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 text-left max-w-md mx-auto space-y-2 text-xs text-stone-700">
                <div className="font-semibold text-stone-900 border-b border-stone-200 pb-1">
                  Resumen de tu Visita Técnica:
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Modalidad:</span>
                  <span className="font-medium capitalize">{projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Solución:</span>
                  <span className="font-medium">{selectedProduct || 'Asesoría integral'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Canal directo:</span>
                  <span className="font-medium text-[#A35C37]">+593 099 777 7776</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display text-sm transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notificar ahora por WhatsApp</span>
                </button>
                <button
                  onClick={resetForm}
                  className="py-2.5 px-5 border border-stone-300 text-stone-700 hover:bg-stone-50 font-display text-sm transition-colors cursor-pointer"
                >
                  Finalizar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
