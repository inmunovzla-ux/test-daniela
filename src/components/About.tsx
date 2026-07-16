import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AboutProps {
  portraitImage: string;
  onNavigateToDetail?: () => void;
}

export const About: React.FC<AboutProps> = ({ portraitImage, onNavigateToDetail }) => {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 120 120" className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
          <defs>
            <linearGradient id="gold-grad-about-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#F3E5AB" />
            </linearGradient>
            <linearGradient id="gold-fill-about-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFECA1" />
              <stop offset="50%" stopColor="#C59B27" />
              <stop offset="100%" stopColor="#966F0C" />
            </linearGradient>
            <radialGradient id="dark-blue-bg-about-1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#152e52" />
              <stop offset="100%" stopColor="#0a1526" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" stroke="url(#gold-grad-about-1)" strokeWidth="4" fill="url(#dark-blue-bg-about-1)" />
          <circle cx="60" cy="60" r="48" stroke="url(#gold-grad-about-1)" strokeWidth="1.5" fill="none" opacity="0.8" />
          <path d="M33 55 A31 31 0 0 1 87 55" fill="none" stroke="url(#gold-fill-about-1)" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
          <path d="M60 41 C57 37, 49 37, 49 44 C49 52, 60 59, 60 59 C60 59, 71 52, 71 44 C71 37, 63 37, 60 41 Z" fill="url(#gold-fill-about-1)" />
          <path d="M32 83 C32 72, 43 68, 48 83 Z" fill="url(#gold-fill-about-1)" />
          <circle cx="41" cy="59" r="6" fill="url(#gold-fill-about-1)" />
          <path d="M88 83 C88 72, 77 68, 72 83 Z" fill="url(#gold-fill-about-1)" />
          <circle cx="79" cy="59" r="6" fill="url(#gold-fill-about-1)" />
        </svg>
      ),
      title: 'Empatía',
      description: 'Escucho tu historia antes de recomendar cualquier alternativa.',
    },
    {
      icon: (
        <svg viewBox="0 0 120 120" className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
          <defs>
            <linearGradient id="gold-grad-about-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#F3E5AB" />
            </linearGradient>
            <linearGradient id="gold-fill-about-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFECA1" />
              <stop offset="50%" stopColor="#C59B27" />
              <stop offset="100%" stopColor="#966F0C" />
            </linearGradient>
            <radialGradient id="dark-blue-bg-about-2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#152e52" />
              <stop offset="100%" stopColor="#0a1526" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" stroke="url(#gold-grad-about-2)" strokeWidth="4" fill="url(#dark-blue-bg-about-2)" />
          <circle cx="60" cy="60" r="48" stroke="url(#gold-grad-about-2)" strokeWidth="1.5" fill="none" opacity="0.8" />
          <path d="M60 32 C47 32, 44 44, 48 53 C51 59, 54 61, 54 67 L66 67 C66 61, 69 59, 72 53 C76 44, 73 32, 60 32 Z" fill="none" stroke="url(#gold-fill-about-2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="53" y1="45" x2="67" y2="45" stroke="url(#gold-fill-about-2)" strokeWidth="3" strokeLinecap="round" />
          <line x1="51" y1="51" x2="69" y2="51" stroke="url(#gold-fill-about-2)" strokeWidth="3" strokeLinecap="round" />
          <line x1="54" y1="57" x2="66" y2="57" stroke="url(#gold-fill-about-2)" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="71" x2="65" y2="71" stroke="url(#gold-fill-about-2)" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="57" y1="76" x2="63" y2="76" stroke="url(#gold-fill-about-2)" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M59 81 L61 81" stroke="url(#gold-fill-about-2)" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="60" y1="20" x2="60" y2="26" stroke="url(#gold-fill-about-2)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="76" y1="27" x2="81" y2="32" stroke="url(#gold-fill-about-2)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="82" y1="42" x2="88" y2="44" stroke="url(#gold-fill-about-2)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="78" y1="58" x2="83" y2="62" stroke="url(#gold-fill-about-2)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="44" y1="27" x2="39" y2="32" stroke="url(#gold-fill-about-2)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="38" y1="42" x2="32" y2="44" stroke="url(#gold-fill-about-2)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="42" y1="58" x2="37" y2="62" stroke="url(#gold-fill-about-2)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'Claridad',
      description: 'Transformo normas y procedimientos migratorios en información sencilla y fácil de comprender.',
    },
    {
      icon: (
        <svg viewBox="0 0 120 120" className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
          <defs>
            <linearGradient id="gold-grad-about-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#F3E5AB" />
            </linearGradient>
            <linearGradient id="gold-fill-about-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFECA1" />
              <stop offset="50%" stopColor="#C59B27" />
              <stop offset="100%" stopColor="#966F0C" />
            </linearGradient>
            <radialGradient id="dark-blue-bg-about-3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#152e52" />
              <stop offset="100%" stopColor="#0a1526" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" stroke="url(#gold-grad-about-3)" strokeWidth="4" fill="url(#dark-blue-bg-about-3)" />
          <circle cx="60" cy="60" r="48" stroke="url(#gold-grad-about-3)" strokeWidth="1.5" fill="none" opacity="0.8" />
          <circle cx="72" cy="56" r="21" stroke="url(#gold-fill-about-3)" strokeWidth="2.5" fill="none" opacity="0.4" />
          <circle cx="72" cy="56" r="14" stroke="url(#gold-fill-about-3)" strokeWidth="2.5" fill="none" opacity="0.7" />
          <circle cx="72" cy="56" r="6" fill="url(#gold-fill-about-3)" />
          <path d="M34 29 H36 V33 H34 Z M32 30 H38 V32 H32 Z" fill="url(#gold-fill-about-3)" />
          <path d="M31 35 L33 39 L35 34 L37 39 L39 35 L37 42 H33 Z" fill="url(#gold-fill-about-3)" />
          <rect x="32" y="43" width="6" height="2" rx="0.5" fill="url(#gold-fill-about-3)" />
          <path d="M31 76 C31 65, 33 50, 33 46 H37 C37 50, 39 65, 39 76 Z" fill="url(#gold-fill-about-3)" />
          <rect x="29" y="77" width="12" height="4" rx="1" fill="url(#gold-fill-about-3)" />
          <rect x="31" y="74" width="8" height="2" rx="0.5" fill="url(#gold-fill-about-3)" />
          <path d="M58 76 C62 82, 78 82, 84 74" fill="none" stroke="url(#gold-fill-about-3)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <line x1="88" y1="40" x2="74" y2="54" stroke="url(#gold-fill-about-3)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M84 38 L90 34 M87 41 L93 37" fill="none" stroke="url(#gold-fill-about-3)" strokeWidth="2" strokeLinecap="round" />
          <polygon points="72,56 78,51 77,57" fill="url(#gold-fill-about-3)" />
          <rect x="19" y="68" width="2" height="10" rx="0.5" fill="url(#gold-fill-about-3)" opacity="0.4" />
          <rect x="15" y="72" width="2" height="6" rx="0.5" fill="url(#gold-fill-about-3)" opacity="0.4" />
        </svg>
      ),
      title: 'Estrategia',
      description: 'Cada recomendación tiene un fundamento jurídico y un plan de acción adaptado a tus objetivos.',
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-brand-bg border-y border-white/5 relative overflow-hidden">
      {/* Soft luxury blue and gold glow effects */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Image Block (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative behind border */}
              <div className="absolute inset-0 border-2 border-brand-accent rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-70 shadow-[0_0_20px_rgba(231,153,35,0.25)]" />
              
              {/* Photo Frame */}
              <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[3/4] bg-white/[0.02] border border-white/10 relative">
                <img
                  src={portraitImage}
                  alt="Daniela Harrington - Abogada de Asesorías al Migrante"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual signature overlay */}
                <div className="absolute bottom-6 left-0 right-0 text-center bg-gradient-to-t from-brand-bg via-brand-bg/55 to-transparent pt-12 pb-4">
                  <span className="font-heading italic text-2xl font-bold tracking-wide text-brand-accent drop-shadow-md">
                    Daniela Harrington
                  </span>
                  <p className="text-[10px] uppercase tracking-widest text-white/80 mt-1 font-semibold">
                    Abogada Migratoria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Block (Right 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
                SOBRE MÍ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white leading-tight">
                Entiendo lo que significa empezar de nuevo
              </h2>
            </div>

            <div className="text-sm sm:text-base text-zinc-300 leading-relaxed space-y-4 font-light">
              <p>
                Soy <strong className="font-bold text-brand-accent">Daniela Harrington</strong>, abogada migratoria.
              </p>
              <p>
                Además de mi formación jurídica, conozco desde la experiencia personal lo que implica emigrar, enfrentar nuevos sistemas legales y tomar decisiones que pueden cambiar el rumbo de una familia.
              </p>
              <p>
                Por eso mi trabajo va más allá de explicar requisitos.
              </p>
              <p>
                Por eso, fundé <strong className="font-bold text-brand-accent">Asesorias al Migrante</strong> mi objetivo es brindarte información jurídica clara, ayudarte a comprender tus opciones y acompañarte para que cada decisión esté respaldada por una estrategia adecuada a tu situación. No trabajo con soluciones generales. Cada caso merece un análisis individual.
              </p>
            </div>

            {/* Core Values Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2.5">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-3 bg-white/[0.03] border border-white/5 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:border-brand-accent/35 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
                      {v.icon}
                    </div>
                    <h4 className="font-heading font-semibold text-white group-hover:text-brand-accent transition-colors duration-200 text-xs sm:text-sm">
                      {v.title}
                    </h4>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-zinc-300 leading-normal font-light">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action button to know more details */}
            {onNavigateToDetail && (
              <div className="pt-4 flex justify-start">
                <button
                  onClick={onNavigateToDetail}
                  className="inline-flex items-center gap-1.5 px-5 py-3 bg-brand-blue text-white hover:bg-brand-blue/90 border border-white/10 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  Conocer más sobre mi historia
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
