import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, CheckCircle, Clock, Shield } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [projectType, setProjectType] = useState<'residencial' | 'corporativo'>('residencial');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [solution, setSolution] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const projectLabel = projectType === 'residencial' ? 'Proyecto Residencial' : 'Proyecto Corporativo';
    const text = `*CONTACTO DIRECTO MORISAN - SITIO OFICIAL*
──────────────────────
• *Nombre:* ${name || 'Cliente interesado'}
• *Tipo:* ${projectLabel}
• *Teléfono:* ${phone || 'No especificado'}
• *Email:* ${email || 'No especificado'}
• *Interés:* ${solution || 'Asesoría general'}
${message ? `• *Mensaje:* ${message}` : ''}
──────────────────────
_Deseo agendar una visita técnica y cotización formal._`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/593984684270?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Context & Direct Contact Data (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-[0.2em] text-[#A35C37]">
                <span>Atención Personalizada</span>
                <span aria-hidden="true">·</span>
                <span>Venta Consultiva</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2B2B2B] tracking-tight">
                Inicia la transformación de tus espacios.
              </h2>
              <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed">
                Agenda hoy mismo tu visita técnica en sitio. Llevamos muestrarios físicos con telas importadas, tomamos medidas milimétricas y diseñamos la solución de control lumínico perfecta para tu arquitectura.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/593984684270"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white border border-stone-200 hover:border-[#A35C37] transition-all flex items-start gap-4 group shadow-sm block"
              >
                <div className="p-3 bg-[#F9F3EE] text-[#A35C37] shrink-0 border border-[#A35C37]/20 group-hover:bg-[#A35C37] group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-stone-500 block">
                    WhatsApp & Asesoría Inmediata
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-[#2B2B2B] group-hover:text-[#A35C37] transition-colors tabular-nums">
                    +593984684270
                  </span>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Respuesta ágil de lunes a sábado para coordinar visitas técnicas
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:morisandeco@gmail.com"
                className="p-5 bg-white border border-stone-200 hover:border-[#A35C37] transition-all flex items-start gap-4 group shadow-sm block"
              >
                <div className="p-3 bg-[#F9F3EE] text-[#A35C37] shrink-0 border border-[#A35C37]/20 group-hover:bg-[#A35C37] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-stone-500 block">
                    Correo Corporativo y Cotizaciones
                  </span>
                  <span className="font-display font-bold text-base text-[#2B2B2B] group-hover:text-[#A35C37] transition-colors">
                    morisandeco@gmail.com
                  </span>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Envío de planos arquitectónicos, fichas técnicas y licitaciones
                  </p>
                </div>
              </a>

              {/* Location / Coverage */}
              <div className="p-5 bg-white border border-stone-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 bg-[#F9F3EE] text-[#A35C37] shrink-0 border border-[#A35C37]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-stone-500 block">
                    Cobertura de Instalación
                  </span>
                  <span className="font-display font-bold text-base text-[#2B2B2B]">
                    Ecuador · Proyectos Nacionales
                  </span>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Visitas técnicas a domicilio y proyectos corporativos en todo el país
                  </p>
                </div>
              </div>

            </div>

            {/* Reassurance points */}
            <div className="p-5 bg-white/70 border border-stone-200 space-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#A35C37] shrink-0" />
                <span>Garantía formal de 2 años en componentes, telas y motores</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A35C37] shrink-0" />
                <span>Fabricación a medida y entrega ágil en <strong>48 a 72 horas laborables</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-stone-200 shadow-md">
            
            <div className="border-b border-stone-100 pb-5 mb-6">
              <span className="text-[11px] font-display font-semibold uppercase tracking-widest text-[#A35C37] block">
                Formulario de Cotización Consultiva
              </span>
              <h3 className="text-2xl font-display font-bold text-[#2B2B2B] mt-1">
                Solicitar Visita Técnica en Sitio
              </h3>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Selector Residencial vs Corporativo */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2 font-display">
                    Tipo de Proyecto <span className="text-[#A35C37]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setProjectType('residencial')}
                      className={`py-3 px-4 text-xs sm:text-sm font-display font-medium text-left border transition-all cursor-pointer ${
                        projectType === 'residencial'
                          ? 'border-[#A35C37] bg-[#F9F3EE] text-[#A35C37] ring-1 ring-[#A35C37]'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-white'
                      }`}
                    >
                      <div className="font-bold">Proyecto Residencial</div>
                      <div className="text-[11px] text-stone-500 font-normal">Hogares, villas y suites</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setProjectType('corporativo')}
                      className={`py-3 px-4 text-xs sm:text-sm font-display font-medium text-left border transition-all cursor-pointer ${
                        projectType === 'corporativo'
                          ? 'border-[#A35C37] bg-[#F9F3EE] text-[#A35C37] ring-1 ring-[#A35C37]'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-white'
                      }`}
                    >
                      <div className="font-bold">Proyecto Corporativo</div>
                      <div className="text-[11px] text-stone-500 font-normal">Oficinas, clínicas y constructoras</div>
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                    Nombre y Apellido <span className="text-[#A35C37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Arq. Fernando Morales"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                      Correo Electrónico <span className="text-[#A35C37]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="fernando@ejemplo.com"
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors"
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
                      placeholder="+593984684270"
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Solution Interest */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                    Solución o Producto de Interés
                  </label>
                  <select
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="">-- Seleccionar categoría o asesoría integral --</option>
                    <option value="Cortinas Celulares">Cortinas Celulares (Aislamiento Térmico)</option>
                    <option value="Cortinas Sheer y Sheer Verticales">Cortinas Sheer y Sheer Verticales (Protección UV)</option>
                    <option value="Visillos y Cortinas Tradicionales">Visillos y Cortinas Tradicionales</option>
                    <option value="Cortinas ZEBRA (Día y Noche)">Cortinas ZEBRA (Día y Noche)</option>
                    <option value="Enrollables Técnicas (Screen y Blackout)">Enrollables Técnicas (Screen y Blackout libres de PVC)</option>
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

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-display">
                    Detalles del Espacio o Mensaje
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntanos sobre tu espacio: ubicación, número de ventanales aproximado o requerimientos de privacidad..."
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#A35C37] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar a WhatsApp (+593984684270)</span>
                  </button>

                  <button
                    type="submit"
                    className="py-3.5 px-6 bg-[#2B2B2B] hover:bg-stone-900 text-white font-display font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Registrar Solicitud
                  </button>
                </div>

                <div className="text-[11px] text-stone-500 pt-1">
                  * Sus datos se utilizarán de manera confidencial exclusivamente para la cotización y coordinación de la visita técnica solicitada.
                </div>

              </form>
            ) : (
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 bg-[#F9F3EE] text-[#A35C37] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#F9F3EE]/50">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-bold text-[#2B2B2B]">
                  ¡Solicitud Enviada con Éxito!
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Gracias por tu confianza, <strong className="text-[#2B2B2B]">{name || 'estimado cliente'}</strong>. Tu solicitud para <strong>{projectType === 'residencial' ? 'Proyecto Residencial' : 'Proyecto Corporativo'}</strong> ha sido registrada en nuestro sistema de atención técnica.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Iniciar Chat por WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-5 border border-stone-300 text-stone-700 hover:bg-stone-50 font-display text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Enviar Otra Solicitud
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
