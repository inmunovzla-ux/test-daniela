import React from 'react';
import { motion } from 'motion/react';
import { Shield, MonitorPlay, MessageCircle, FileHeart, Calendar, Heart } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  heroImage: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, heroImage }) => {
  const luxuryMedallions = [
    {
      title: 'Atención personalizada',
      icon: (
        <svg viewBox="0 0 120 120" className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          <defs>
            <linearGradient id="gold-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#FFF2B2" />
            </linearGradient>
            <linearGradient id="gold-rim-1" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#9E782F" />
              <stop offset="25%" stopColor="#FCE181" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="75%" stopColor="#FFF2B2" />
              <stop offset="100%" stopColor="#8A6421" />
            </linearGradient>
            <radialGradient id="navy-mesh-1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#122A4A" />
              <stop offset="100%" stopColor="#051424" />
            </radialGradient>
          </defs>
          
          {/* Outer gold thick 3D border/rim */}
          <circle cx="60" cy="60" r="54" fill="url(#navy-mesh-1)" stroke="url(#gold-rim-1)" strokeWidth="4.5" />
          
          {/* Inner gold thin accent circle */}
          <circle cx="60" cy="60" r="46" fill="none" stroke="url(#gold-grad-1)" strokeWidth="1" strokeOpacity="0.6" />
          
          {/* Headset (atencion personalizada) */}
          <g transform="translate(26, 26)">
            {/* Person Silhouette */}
            <path 
              d="M 34 32 C 34 22, 14 22, 14 32 C 14 36, 17 40, 24 40 C 31 40, 34 36, 34 32 Z" 
              fill="url(#gold-grad-1)" 
            />
            <circle cx="24" cy="20" r="8" fill="url(#gold-grad-1)" />
            
            {/* Headset arc */}
            <path 
              d="M 12 24 A 13 13 0 0 1 36 24" 
              fill="none" 
              stroke="url(#gold-rim-1)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
            {/* Headset ear cups */}
            <rect x="9" y="21" width="4" height="7" rx="1.5" fill="url(#gold-grad-1)" />
            <rect x="35" y="21" width="4" height="7" rx="1.5" fill="url(#gold-grad-1)" />
            {/* Mic boom */}
            <path d="M 11 26 L 15 32" stroke="url(#gold-grad-1)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="33" r="1.5" fill="url(#gold-grad-1)" />
            
            {/* Speech bubble on upper right */}
            <path 
              d="M 38 10 C 38 6, 48 6, 48 10 C 48 13, 44 14, 43 17 L 41 14 C 38 14, 38 12, 38 10 Z" 
              fill="url(#gold-grad-1)" 
            />
            {/* Speech bubble dots */}
            <circle cx="41.5" cy="10" r="0.7" fill="#051424" />
            <circle cx="43.5" cy="10" r="0.7" fill="#051424" />
            <circle cx="45.5" cy="10" r="0.7" fill="#051424" />
          </g>
        </svg>
      )
    },
    {
      title: 'Asesoría 100 % virtual',
      icon: (
        <svg viewBox="0 0 120 120" className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          <defs>
            <linearGradient id="gold-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#FFF2B2" />
            </linearGradient>
            <linearGradient id="gold-rim-2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#9E782F" />
              <stop offset="25%" stopColor="#FCE181" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="75%" stopColor="#FFF2B2" />
              <stop offset="100%" stopColor="#8A6421" />
            </linearGradient>
            <radialGradient id="navy-mesh-2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#122A4A" />
              <stop offset="100%" stopColor="#051424" />
            </radialGradient>
          </defs>
          
          {/* Outer gold thick 3D border/rim */}
          <circle cx="60" cy="60" r="54" fill="url(#navy-mesh-2)" stroke="url(#gold-rim-2)" strokeWidth="4.5" />
          
          {/* Inner gold thin accent circle */}
          <circle cx="60" cy="60" r="46" fill="none" stroke="url(#gold-grad-2)" strokeWidth="1" strokeOpacity="0.6" />
          
          {/* Laptop and Map (asesoria 100% virtual) */}
          <g transform="translate(28, 28)">
            {/* Laptop Screen */}
            <rect x="8" y="10" width="48" height="30" rx="3" fill="none" stroke="url(#gold-grad-2)" strokeWidth="2.5" />
            <rect x="10" y="12" width="44" height="26" fill="#051424" />
            
            {/* World Map representation inside screen */}
            {/* North America */}
            <circle cx="16" cy="18" r="2" fill="url(#gold-grad-2)" opacity="0.8" />
            <circle cx="19" cy="19" r="1.5" fill="url(#gold-grad-2)" opacity="0.8" />
            <circle cx="21" cy="22" r="1" fill="url(#gold-grad-2)" opacity="0.8" />
            {/* South America */}
            <circle cx="22" cy="27" r="2" fill="url(#gold-grad-2)" opacity="0.8" />
            <circle cx="24" cy="31" r="1.5" fill="url(#gold-grad-2)" opacity="0.8" />
            <circle cx="23" cy="34" r="1" fill="url(#gold-grad-2)" opacity="0.8" />
            {/* Europe / Africa */}
            <circle cx="34" cy="19" r="2.2" fill="url(#gold-grad-2)" opacity="0.8" />
            <circle cx="36" cy="24" r="2" fill="url(#gold-grad-2)" opacity="0.8" />
            <circle cx="37" cy="28" r="1.5" fill="url(#gold-grad-2)" opacity="0.8" />
            {/* Asia / Australia */}
            <circle cx="44" cy="17" r="2.5" fill="url(#gold-grad-2)" opacity="0.8" />
            <circle cx="48" cy="20" r="2" fill="url(#gold-grad-2)" opacity="0.8" />
            <circle cx="49" cy="30" r="1.5" fill="url(#gold-grad-2)" opacity="0.8" />
            
            {/* Laptop Base */}
            <path d="M 4 40 L 60 40 L 62 44 L 2 44 Z" fill="url(#gold-grad-2)" />
            {/* Trackpad notch */}
            <rect x="28" y="40.5" width="8" height="1.5" rx="0.5" fill="#051424" />
          </g>
        </svg>
      )
    },
    {
      title: 'Estrategias migratorias adaptadas a tu caso',
      icon: (
        <svg viewBox="0 0 120 120" className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          <defs>
            <linearGradient id="gold-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#FFF2B2" />
            </linearGradient>
            <linearGradient id="gold-rim-3" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#9E782F" />
              <stop offset="25%" stopColor="#FCE181" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="75%" stopColor="#FFF2B2" />
              <stop offset="100%" stopColor="#8A6421" />
            </linearGradient>
            <radialGradient id="navy-mesh-3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#122A4A" />
              <stop offset="100%" stopColor="#051424" />
            </radialGradient>
          </defs>
          
          {/* Outer gold thick 3D border/rim */}
          <circle cx="60" cy="60" r="54" fill="url(#navy-mesh-3)" stroke="url(#gold-rim-3)" strokeWidth="4.5" />
          
          {/* Inner gold thin accent circle */}
          <circle cx="60" cy="60" r="46" fill="none" stroke="url(#gold-grad-3)" strokeWidth="1" strokeOpacity="0.6" />
          
          {/* Globe & Flight loop (estrategias migratorias) */}
          <g transform="translate(28, 28)">
            {/* Globe Outer Outline */}
            <circle cx="32" cy="32" r="22" fill="none" stroke="url(#gold-grad-3)" strokeWidth="2" />
            {/* Globe Meridians */}
            <ellipse cx="32" cy="32" rx="10" ry="22" fill="none" stroke="url(#gold-grad-3)" strokeWidth="1.2" strokeOpacity="0.7" />
            <line x1="10" y1="32" x2="54" y2="32" stroke="url(#gold-grad-3)" strokeWidth="1.2" strokeOpacity="0.7" />
            <line x1="32" y1="10" x2="32" y2="54" stroke="url(#gold-grad-3)" strokeWidth="1.2" strokeOpacity="0.7" />
            {/* Globe Parallels */}
            <path d="M 14 21 C 20 25, 44 25, 50 21" fill="none" stroke="url(#gold-grad-3)" strokeWidth="1" strokeOpacity="0.6" />
            <path d="M 14 43 C 20 39, 44 39, 50 43" fill="none" stroke="url(#gold-grad-3)" strokeWidth="1" strokeOpacity="0.6" />
            
            {/* Two Golden Pins */}
            {/* Pin 1 (Left-ish) */}
            <path d="M 18 20 C 18 16, 24 16, 24 20 C 24 24, 21 27, 21 27 C 21 27, 18 24, 18 20 Z" fill="url(#gold-rim-3)" />
            <circle cx="21" cy="20" r="1.2" fill="#051424" />
            
            {/* Pin 2 (Right-ish) */}
            <path d="M 40 38 C 40 34, 46 34, 46 38 C 46 42, 43 45, 43 45 C 43 45, 40 42, 40 38 Z" fill="url(#gold-rim-3)" />
            <circle cx="43" cy="38" r="1.2" fill="#051424" />
            
            {/* Sweeping Flight Arc */}
            <path 
              d="M 10 46 C 15 36, 44 14, 58 14" 
              fill="none" 
              stroke="url(#gold-grad-3)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
            {/* Stylized Airplane on top-right of arc */}
            <path 
              d="M 54 10 L 61 14 L 56 16 L 55 19 L 53 14 Z" 
              fill="url(#gold-grad-3)" 
            />
          </g>
        </svg>
      )
    },
    {
      title: 'Acompañamiento jurídico profesional',
      icon: (
        <svg viewBox="0 0 120 120" className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          <defs>
            <linearGradient id="gold-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#FFF2B2" />
            </linearGradient>
            <linearGradient id="gold-rim-4" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#9E782F" />
              <stop offset="25%" stopColor="#FCE181" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="75%" stopColor="#FFF2B2" />
              <stop offset="100%" stopColor="#8A6421" />
            </linearGradient>
            <radialGradient id="navy-mesh-4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#122A4A" />
              <stop offset="100%" stopColor="#051424" />
            </radialGradient>
          </defs>
          
          {/* Outer gold thick 3D border/rim */}
          <circle cx="60" cy="60" r="54" fill="url(#navy-mesh-4)" stroke="url(#gold-rim-4)" strokeWidth="4.5" />
          
          {/* Inner gold thin accent circle */}
          <circle cx="60" cy="60" r="46" fill="none" stroke="url(#gold-grad-4)" strokeWidth="1" strokeOpacity="0.6" />
          
          {/* Law scale & Law book background (acompañamiento juridico) */}
          <g transform="translate(28, 28)">
            {/* Law Book Outline (background overlay) */}
            <rect x="18" y="10" width="30" height="42" rx="2" fill="none" stroke="url(#gold-grad-4)" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="22" y1="14" x2="44" y2="14" stroke="url(#gold-grad-4)" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="22" y1="18" x2="44" y2="18" stroke="url(#gold-grad-4)" strokeWidth="1" strokeOpacity="0.4" />
            
            {/* Scales of Justice (foreground) */}
            {/* Pillar */}
            <line x1="32" y1="15" x2="32" y2="47" stroke="url(#gold-grad-4)" strokeWidth="3" strokeLinecap="round" />
            <path d="M 26 47 L 38 47" stroke="url(#gold-grad-4)" strokeWidth="3.5" strokeLinecap="round" />
            {/* Top ornament */}
            <circle cx="32" cy="14" r="2" fill="url(#gold-grad-4)" />
            
            {/* Horizontal beam */}
            <line x1="18" y1="21" x2="46" y2="21" stroke="url(#gold-grad-4)" strokeWidth="2.2" strokeLinecap="round" />
            
            {/* Left pan */}
            <line x1="18" y1="21" x2="13" y2="34" stroke="url(#gold-grad-4)" strokeWidth="0.8" />
            <line x1="18" y1="21" x2="23" y2="34" stroke="url(#gold-grad-4)" strokeWidth="0.8" />
            <path d="M 11 34 C 11 39, 25 39, 25 34 Z" fill="url(#gold-rim-4)" />
            
            {/* Right pan */}
            <line x1="46" y1="21" x2="41" y2="34" stroke="url(#gold-grad-4)" strokeWidth="0.8" />
            <line x1="46" y1="21" x2="51" y2="34" stroke="url(#gold-grad-4)" strokeWidth="0.8" />
            <path d="M 39 34 C 39 39, 53 39, 53 34 Z" fill="url(#gold-rim-4)" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <section
      id="inicio"
      className="relative bg-brand-blue text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Decorative background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero text (Left 7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6">
            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide leading-[1.15] text-zinc-100"
            >
              Asesoría Jurídica{' '}
              <span className="text-brand-accent font-normal">
                Migratoria
              </span>{' '}
              para tomar decisiones con{' '}
              <span className="text-brand-accent font-normal">
                seguridad
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl space-y-4 sm:space-y-5"
            >
              <p className="text-base sm:text-lg lg:text-xl text-zinc-200 leading-relaxed font-normal">
                Cada proceso migratorio tiene implicaciones legales diferentes.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                Analizo tu caso de manera personalizada para ayudarte a elegir la alternativa más conveniente, prevenir errores y avanzar con una estrategia clara, sin importar el país donde te encuentres.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-brand-accent text-brand-blue hover:bg-[#f1a42b] rounded-lg text-xs font-semibold uppercase tracking-widest hover:shadow-[0_8px_30px_rgb(231,153,35,0.15)] hover:translate-y-[-1px] active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Agendar asesoría
              </button>

              <a
                href="https://wa.me/542235173127?text=Hola%20Daniela%2C%20quisiera%20agendar%20una%20asesor%C3%ADa%20migratoria.%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-white/15 hover:border-white/40 text-white rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-white/5 hover:translate-y-[-1px] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current text-white/90 group-hover:text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.488 5.352 1.489 5.568 0 10.099-4.52 10.1-10.082.001-2.695-1.047-5.227-2.951-7.134C17.244 1.519 14.717.472 12.015.472 6.445.472 1.917 5 1.914 10.563c-.001 1.956.505 3.868 1.468 5.516L2.318 21.5l5.485-1.439z" />
                </svg>
                Hablar por WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Hero image (Right 5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background elements overlaying image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/40 via-transparent to-transparent rounded-2xl z-10 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent/20 rounded-tl-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-accent/20 rounded-br-2xl -z-10" />

            <div className="overflow-hidden rounded-2xl shadow-2xl bg-white/5 border border-white/10 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] flex items-center justify-center">
              <img
                src={heroImage}
                alt="Abogada Daniela Harrington en su despacho legal"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Trust badges footer row (Under columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto w-full"
        >
          {luxuryMedallions.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-2.5 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] hover:border-brand-accent/20 hover:shadow-[0_6px_15px_rgba(212,175,55,0.04)] transition-all duration-300 group"
            >
              <div className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
                {badge.icon}
              </div>
              
              <div className="flex-grow min-w-0">
                <h3 className="font-heading text-[10px] sm:text-[11px] font-medium text-zinc-200 tracking-wide leading-snug">
                  {badge.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
