import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MessageCircle, Shield, FileText, X } from 'lucide-react';

export const FooterAndLegal: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-[#1C1C1C] text-stone-300 pt-16 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-stone-800">
            
            {/* Col 1: Brand & Identity (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Logo variant="horizontal" colorTheme="light" />
              
              <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed pt-2">
                Especialistas en soluciones integrales de cortinas técnicas, persianas de madera y aluminio, toldos arquitectónicos y sistemas de motorización inteligente. Control bioclimático y sofisticación para proyectos residenciales y corporativos en Ecuador.
              </p>

              <div className="flex items-center gap-2 text-xs text-stone-400 font-display pt-2">
                <span className="w-2 h-2 rounded-full bg-[#A35C37]" />
                <span>2 Años de Garantía Escrita en Telas y Mecanismos</span>
              </div>
            </div>

            {/* Col 2: Soluciones (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#A35C37] block">
                Portafolio de Soluciones
              </span>
              <ul className="space-y-2 text-xs text-stone-400 font-sans">
                <li><a href="#catalogo" className="hover:text-white transition-colors">Cortinas Celulares Térmicas</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Cortinas Sheer y Sheer Verticales</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Cortinas ZEBRA (Día y Noche)</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Enrollables Técnicas (Screen & Blackout)</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Panel Japonés para Grandes Ventanales</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Persianas de Madera Basswood</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Toldos de Exterior Arquitectónicos</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Toldos Exteriores Claraboya</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Toldos Verticales para Exteriores</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Automatización y Domótica Somfy/Smart</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Mantenimiento, Lavado Técnico y Reparación</a></li>
              </ul>
            </div>

            {/* Col 3: Enlaces y Método (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#A35C37] block">
                Navegación
              </span>
              <ul className="space-y-2 text-xs text-stone-400 font-display">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#pilares" className="hover:text-white transition-colors">Propuesta de Valor</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Catálogo Completo</a></li>
                <li><a href="#metodo" className="hover:text-white transition-colors">El Método MoriSan</a></li>
                <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios de Clientes</a></li>
                <li><a href="#faqs" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Visita Técnica</a></li>
              </ul>
            </div>

            {/* Col 4: Contacto Oficial (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#A35C37] block">
                Atención Directa
              </span>

              <div className="space-y-2 text-xs text-stone-400">
                <a
                  href="https://wa.me/593997777776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors font-display"
                >
                  <MessageCircle className="w-4 h-4 text-[#A35C37] shrink-0" />
                  <span className="tabular-nums">+593 099 777 7776</span>
                </a>

                <a
                  href="mailto:morisandeco@gmail.com"
                  className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors font-display"
                >
                  <Mail className="w-4 h-4 text-[#A35C37] shrink-0" />
                  <span>morisandeco@gmail.com</span>
                </a>

                <div className="pt-2 text-stone-400 text-xs">
                  Horario de Coordinación: <br />
                  <span className="text-stone-300">Lunes a Sábado: 08:30 – 18:30</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/593997777776?text=Hola%20MoriSan,%20deseo%20agendar%20una%20visita%20t%C3%A9cnica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-3 bg-[#A35C37] hover:bg-[#8C4C2B] text-white text-[11px] font-display font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone className="w-3 h-3" />
                  <span>Agendar por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Row: Legal Links & Disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              © {new Date().getFullYear()} <strong className="text-stone-300">MoriSan - Soluciones y Decoración en Cortinas</strong>. Todos los derechos reservados.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-stone-300 transition-colors underline cursor-pointer"
              >
                Políticas de Privacidad de Datos
              </button>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-stone-300 transition-colors underline cursor-pointer"
              >
                Términos y Condiciones (Garantía 2 Años)
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Modal Legal: Políticas de Privacidad */}
      {activeLegalModal === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white text-[#2B2B2B] shadow-2xl border border-stone-200 p-6 md:p-8 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#A35C37]" />
                <h3 className="font-display font-bold text-lg text-[#2B2B2B]">
                  Políticas de Privacidad y Tratamiento de Datos
                </h3>
              </div>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="text-stone-500 hover:text-stone-900 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              <p>
                En <strong>MoriSan - Soluciones y Decoración en Cortinas</strong> valoramos la confianza de nuestros clientes residenciales y corporativos. Esta política establece el compromiso y tratamiento riguroso de la información personal recopilada a través de nuestros canales oficiales, sitio web y formularios de contacto.
              </p>

              <div>
                <strong className="block font-display text-stone-900 mb-1">1. Finalidad Exclusiva de la Información:</strong>
                <p>
                  Los datos solicitados (nombre completo, teléfono, dirección electrónica, dirección del inmueble y detalles del proyecto) son recopilados <strong>única y exclusivamente</strong> para la elaboración de cotizaciones personalizadas, coordinación de visitas técnicas presenciales, toma de medidas e instalación de los productos adquiridos.
                </p>
              </div>

              <div>
                <strong className="block font-display text-stone-900 mb-1">2. No Cesión a Terceros:</strong>
                <p>
                  MoriSan se compromete formalmente a no vender, transferir, ceder ni compartir sus datos personales con empresas de mercadeo, agencias de publicidad masiva o terceros ajenos a la prestación de nuestros servicios de cortinaje y decoración.
                </p>
              </div>

              <div>
                <strong className="block font-display text-stone-900 mb-1">3. Canales Oficiales de Comunicación:</strong>
                <p>
                  Toda interacción oficial se mantendrá a través de nuestras líneas autorizadas: WhatsApp y teléfono <strong>+593 099 777 7776</strong> y correo electrónico corporativo <strong>morisandeco@gmail.com</strong>.
                </p>
              </div>

              <div>
                <strong className="block font-display text-stone-900 mb-1">4. Derechos de Acceso y Cancelación:</strong>
                <p>
                  El titular de los datos podrá solicitar en cualquier momento la actualización o eliminación definitiva de sus registros de nuestras bases de datos comerciales mediante solicitud formal a <em>morisandeco@gmail.com</em>.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="py-2 px-5 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Entendido y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Legal: Términos y Condiciones y Garantía */}
      {activeLegalModal === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white text-[#2B2B2B] shadow-2xl border border-stone-200 p-6 md:p-8 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#A35C37]" />
                <h3 className="font-display font-bold text-lg text-[#2B2B2B]">
                  Términos y Condiciones · Alcance de Garantía (2 Años)
                </h3>
              </div>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="text-stone-500 hover:text-stone-900 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              <div>
                <strong className="block font-display text-stone-900 mb-1">1. Confección a la Medida y Personalización:</strong>
                <p>
                  Todos los productos comercializados por <strong>MoriSan</strong> (cortinas celulares, sheer, romanas, paneles japoneses, enrollables, persianas de madera Basswood, persianas de aluminio y toldos exteriores) son manufacturados a la medida exacta de acuerdo con las especificaciones y toma de medidas acordadas. Por su condición de fabricación a la medida sobre plano técnico, no admiten devolución por cambios de apreciación subjetiva una vez iniciada la fase de corte textil.
                </p>
              </div>

              <div>
                <strong className="block font-display text-stone-900 mb-1">2. Alcance Exacto de la Garantía de Dos (2) Años:</strong>
                <p>
                  MoriSan otorga una garantía de 2 años calendario contados a partir de la fecha de instalación contra:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Defectos de fábrica en tejidos técnicos: deformación de urdimbre, decoloración prematura fuera de la tolerancia estándar del fabricante, y desprendimiento de laminaciones.</li>
                  <li>Fallas en componentes mecánicos: embragues de cadena, poleas, reductores de esfuerzo, frenos de elevación, perfiles de aluminio y cables tensores.</li>
                  <li>Motores y automatismos: fallas internas de motores tubulares, receptores y baterías recargables instalados por personal autorizado MoriSan.</li>
                </ul>
              </div>

              <div>
                <strong className="block font-display text-stone-900 mb-1">3. Exclusiones de la Garantía:</strong>
                <p>
                  La garantía no cubre daños causados por: manipulación indebida, tirones bruscos, corte intencionado, contacto con solventes corrosivos, humedad estructural del inmueble ajena al producto, o intervenciones/reparaciones realizadas por técnicos no autorizados por MoriSan.
                </p>
              </div>

              <div>
                <strong className="block font-display text-stone-900 mb-1">4. Proceso de Asistencia Posventa:</strong>
                <p>
                  Ante cualquier anomalía de funcionamiento, el cliente deberá reportar la incidencia a <em>morisandeco@gmail.com</em> o al WhatsApp <em>+593 099 777 7776</em>. Un técnico programará una visita de revisión y calibración sin costo dentro del plazo de cobertura.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="py-2 px-5 bg-[#A35C37] hover:bg-[#8C4C2B] text-white font-display text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Cerrar Términos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
