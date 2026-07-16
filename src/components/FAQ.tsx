import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, Plus, Minus, Globe, Landmark, ShieldAlert, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  faqItems: FAQItem[];
  onNavigateToDetail?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ faqItems, onNavigateToDetail }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="preguntas" className="py-20 bg-brand-bg border-y border-white/5 relative overflow-hidden">
      {/* Soft luxury blue and gold glow effects */}
      <div className="absolute top-0 left-1/3 -translate-y-1/2 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
            ¿TIENES DUDAS?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white leading-tight">
            Preguntas frecuentes
          </h2>
          <div className="w-12 h-1 bg-brand-accent mx-auto rounded mt-4" />
        </div>

        {/* Content Columns (FAQ Left, Info Card Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FAQ Accordions (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white/[0.02] border border-white/5 hover:border-brand-accent/20 rounded-xl overflow-hidden shadow-sm transition-all duration-300 backdrop-blur-sm"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-white/[0.04] transition-colors cursor-pointer group"
                  >
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-white group-hover:text-brand-accent transition-colors duration-200 leading-tight">
                      {item.question}
                    </span>
                    <span className="p-1 rounded-full bg-white/5 text-brand-accent flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light border-t border-white/5 whitespace-pre-line">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            
            {onNavigateToDetail && (
              <div className="pt-4 flex justify-center lg:justify-start">
                <button
                  onClick={onNavigateToDetail}
                  className="inline-flex items-center gap-1.5 px-5 py-3 border border-white/10 text-white hover:bg-white/5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer group shadow-sm"
                >
                  Ver todas las preguntas y respuestas
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-brand-accent" />
                </button>
              </div>
            )}
          </div>

          {/* Info Card (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0C1E36] to-[#050D1A] border border-white/10 text-white rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
              {/* Subtle visual glow backings */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-brand-accent flex-shrink-0 shadow-md">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-lg text-white">
                    Atendemos personas desde distintos países
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    Nuestras consultas son 100% virtuales por videollamada de alta definición. Esto te permite recibir asesoría profesional e inmediata sin importar tu ubicación geográfica actual.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex gap-3 text-xs text-zinc-200">
                  <span className="text-brand-accent font-bold">✔</span>
                  <span>Absoluta confidencialidad legal garantizada</span>
                </div>
                <div className="flex gap-3 text-xs text-zinc-200">
                  <span className="text-brand-accent font-bold">✔</span>
                  <span>Sin necesidad de trasladarte o perder horas de trabajo</span>
                </div>
                <div className="flex gap-3 text-xs text-zinc-200">
                  <span className="text-brand-accent font-bold">✔</span>
                  <span>Asesoría en español, comprensible y clara</span>
                </div>
              </div>

              {/* Secure stamp check */}
              <div className="pt-2 flex items-center gap-2 text-[10px] text-zinc-400">
                <ShieldAlert className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Asesoría regulada bajo la normativa de confidencialidad profesional.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
