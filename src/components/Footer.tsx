import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Instagram, Calendar, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-brand-blue text-white overflow-hidden">

      {/* 1. PRE-FOOTER BANNER */}
      <div className="border-b border-white/10 py-16 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-blue relative">
        {/* Subtle decorative vector lines in the background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Tu proceso no tiene que sentirse confuso.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-light font-heading">
                Agendemos una consulta y construyamos juntos el camino que te acerque a tus metas.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-brand-accent text-brand-blue hover:bg-brand-accent/90 rounded-xl text-sm font-extrabold tracking-wide hover:shadow-lg hover:translate-y-[-1.5px] active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4.5 h-4.5" />
                Agendar asesoría
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE FOOTER COLUMNS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" />
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light max-w-sm">
              Asesoría migratoria personalizada para ayudarte a tomar decisiones informadas, evitar costosos errores legales y avanzar con seguridad en tu proceso.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://wa.me/542235173127"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all text-zinc-300 hover:text-[#25D366]"
                title="Escríbenos por WhatsApp"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.488 5.352 1.489 5.568 0 10.099-4.52 10.1-10.082.001-2.695-1.047-5.227-2.951-7.134C17.244 1.519 14.717.472 12.015.472 6.445.472 1.917 5 1.914 10.563c-.001 1.956.505 3.868 1.468 5.516L2.318 21.5l5.485-1.439z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/asesoriasalmigrante"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/10 hover:border-pink-500 transition-all text-zinc-300 hover:text-pink-500"
                title="Síguenos en Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>

              <a
                href="mailto:asesoriasalmigrante@gmail.com"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent/10 hover:border-brand-accent transition-all text-zinc-300 hover:text-brand-accent"
                title="Envíanos un correo"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 lg:pl-4 space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-brand-accent">
              SERVICIOS
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 font-light">
              <li>
                <a href="#servicios" className="hover:text-brand-accent transition-colors">
                  Quiero migrar
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-brand-accent transition-colors">
                  Revisión de proceso iniciado
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-brand-accent transition-colors">
                  Orientación de casos complejos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-brand-accent transition-colors">
                  Evaluación inicial legal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-brand-accent">
              RECURSOS
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 font-light">
              <li>
                <a href="#preguntas" className="hover:text-brand-accent transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#inicio" className="hover:text-brand-accent transition-colors">
                  Guía digital migratoria
                </a>
              </li>
              <li>
                <a href="#inicio" className="hover:text-brand-accent transition-colors">
                  Blog informativo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-brand-accent">
              CONTACTO
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 font-light">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+542235173127" className="hover:text-brand-accent transition-colors">
                  +54 223 517 3127
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4.5 h-4.5 text-brand-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:asesoriasalmigrante@gmail.com" className="hover:text-brand-accent transition-colors break-all">
                  asesoriasalmigrante@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Atención virtual desde Argentina para todo el mundo</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Floating scroll to top button */}
        <button
          onClick={handleScrollToTop}
          className="absolute right-4 bottom-16 p-2.5 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 rounded-xl transition-all shadow-md cursor-pointer"
          aria-label="Subir al inicio"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="bg-brand-blue/95 py-6 border-t border-white/10 text-center text-[11px] text-zinc-400 font-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} Asesorías al Migrante. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#contacto" className="hover:text-brand-accent hover:underline transition-colors">
              Aviso de privacidad
            </a>
            <span>|</span>
            <a href="#contacto" className="hover:text-brand-accent hover:underline transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};
