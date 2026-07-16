import React from 'react';
import { Step } from '../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

// Import beautifully generated circular 3D gold-embossed icons for Process Steps
import methodSituacion from '../assets/images/method_situacion_1784210872122.jpg';
import methodOpciones from '../assets/images/method_opciones_1784210885858.jpg';
import methodEstrategia from '../assets/images/method_estrategia_1784210898730.jpg';
import methodAcompanamiento from '../assets/images/method_acompanamiento_1784210912530.jpg';

interface ProcessProps {
  steps: Step[];
  onNavigateToDetail?: () => void;
}

export const Process: React.FC<ProcessProps> = ({ steps, onNavigateToDetail }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'message':
        return (
          <img
            src={methodSituacion}
            alt="Cuéntame tu situación"
            className="w-full h-full object-cover scale-[1.45]"
            referrerPolicy="no-referrer"
          />
        );
      case 'search':
        return (
          <img
            src={methodOpciones}
            alt="Evaluamos tus opciones"
            className="w-full h-full object-cover scale-[1.45]"
            referrerPolicy="no-referrer"
          />
        );
      case 'file':
        return (
          <img
            src={methodEstrategia}
            alt="Creamos tu plan de acción"
            className="w-full h-full object-cover scale-[1.45]"
            referrerPolicy="no-referrer"
          />
        );
      case 'handshake':
        return (
          <img
            src={methodAcompanamiento}
            alt="Te acompaño en el proceso"
            className="w-full h-full object-cover scale-[1.45]"
            referrerPolicy="no-referrer"
          />
        );
      default:
        return (
          <img
            src={methodSituacion}
            alt="Cuéntame tu situación"
            className="w-full h-full object-cover scale-[1.45]"
            referrerPolicy="no-referrer"
          />
        );
    }
  };

  const phases = [
    'FASE DE ANÁLISIS',
    'FASE TÉCNICA',
    'FASE LEGAL',
    'FASE DE INTEGRACIÓN'
  ];

  return (
    <section id="proceso" className="py-24 bg-brand-bg border-y border-white/5 relative overflow-hidden">
      {/* Soft luxury blue and gold glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Styled after the video example */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
            METODOLOGÍA DE TRABAJO
          </span>
          <h2 className="font-heading text-3xl sm:text-4.5xl font-normal text-white leading-tight">
            El método paso a paso que garantiza tranquilidad
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
            Aplicamos un sistema claro de preparación, revisión y acompañamiento para reducir el riesgo y avanzar con seguridad.
          </p>
          <div className="w-12 h-1 bg-brand-accent mx-auto rounded mt-4" />
        </div>

        {/* Vertical timeline flow */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent/20 via-brand-accent/70 to-brand-accent/20 -translate-x-1/2 pointer-events-none" />

          {/* Steps list */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const phaseLabel = phases[idx] || 'FASE DE PROCESO';

              return (
                <div key={step.number} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Step Circle centered on the vertical timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
                      className="w-10 h-10 rounded-full bg-[#0C1E36] border-2 border-brand-accent flex items-center justify-center font-heading text-sm font-extrabold text-white shadow-[0_0_15px_rgba(231,153,35,0.35)] hover:scale-110 transition-transform duration-200"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Card Container - Alternates left or right of timeline on desktop, stays right on mobile */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0 ${isEven ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                      className="bg-white/[0.03] border border-white/5 hover:border-brand-accent/30 hover:shadow-[0_0_35px_rgba(231,153,35,0.12)] p-6 rounded-2xl shadow-md transition-all duration-300 backdrop-blur-md group text-left"
                    >
                      {/* Title and Icon side-by-side */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-lg shadow-black/40 border border-white/10 group-hover:scale-105 transition-transform duration-250">
                          {getIcon(step.icon)}
                        </div>
                        <h3 className="font-heading font-extrabold text-base sm:text-lg text-white group-hover:text-brand-accent transition-colors duration-200 leading-snug">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed font-light">
                        {step.description}
                      </p>
                      
                      {/* Footer Phase Badge */}
                      <div className="pt-3 border-t border-white/10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#030814]/40 border border-white/5 rounded-md text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                          {phaseLabel}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Pre-footer trust claim */}
        <div className="mt-20 text-center space-y-6">
          <p className="text-xs sm:text-sm text-brand-accent font-semibold italic">
            "Mi meta es que salgas de cada reunión sintiendo alivio, orden y seguridad sobre tu futuro legal."
          </p>
          {onNavigateToDetail && (
            <div className="flex justify-center">
              <button
                onClick={onNavigateToDetail}
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#0C1E36] text-white hover:bg-[#142d50] border border-white/10 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all cursor-pointer group animate-fade-in"
              >
                Conocer detalles de metodología
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
