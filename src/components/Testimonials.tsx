import React, { useState, useEffect, useRef } from 'react';
import { Testimonial } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play interval helper
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection('right');
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds per testimonial
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      startTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testimonials, activeIndex]); // restarts/resets timer whenever index changes to avoid double-triggers

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > activeIndex ? 'right' : 'left');
    setActiveIndex(idx);
  };

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[activeIndex];

  // Motion variants for smooth transitions
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 30 : -30,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -30 : 30,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section className="py-20 bg-brand-blue relative overflow-hidden border-b border-white/5">
      {/* Soft luxury ambient glows inside dark testimonials block */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0B2447]/40 rounded-full blur-[150px] pointer-events-none" />

      {/* Globe Background Watermark (Right Side) */}
      <div className="absolute right-[-100px] bottom-[-50px] w-96 h-96 opacity-[0.03] text-brand-accent pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="42" />
          <path d="M10 50 H90" />
          <path d="M15 30 Q50 38 85 30" />
          <path d="M15 70 Q50 62 85 70" />
          <path d="M30 15 Q42 50 30 85" />
          <path d="M70 15 Q58 50 70 85" />
          <path d="M50 8 V92" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
            TESTIMONIOS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white leading-tight">
            Historias reales, decisiones informadas
          </h2>
          <div className="w-12 h-1 bg-brand-accent mx-auto rounded mt-4" />
        </div>

        {/* Carousel Outer Container */}
        <div className="max-w-3xl mx-auto relative px-4 sm:px-12">
          
          {/* Arrow Buttons - Desktop */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white items-center justify-center transition-all duration-200 cursor-pointer hover:border-brand-accent/40 hover:scale-105"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5 text-brand-accent" />
          </button>

          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white items-center justify-center transition-all duration-200 cursor-pointer hover:border-brand-accent/40 hover:scale-105"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="w-5 h-5 text-brand-accent" />
          </button>

          {/* Testimonial Active Slide Frame */}
          <div className="min-h-[280px] sm:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-white/[0.04] border border-white/10 hover:border-brand-accent/50 rounded-3xl p-6 sm:p-10 shadow-xl hover:shadow-[0_0_40px_rgba(231,153,35,0.3)] relative backdrop-blur-md flex flex-col justify-between transition-all duration-500 overflow-hidden group cursor-pointer"
              >
                {/* Golden ambient background aura visible on hover */}
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(231,153,35,0.18)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl" />

                {/* Luxury gold reflection gradient swipe overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/0 via-brand-accent/[0.01] to-brand-accent/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                {/* Left golden edge highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-accent/0 via-brand-accent/40 to-brand-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Quote decoration */}
                <div className="absolute top-6 right-6 text-white/[0.04] group-hover:text-brand-accent/[0.06] group-hover:scale-105 transition-all duration-500 pointer-events-none">
                  <Quote className="w-12 h-12 rotate-180 flex-shrink-0" />
                </div>

                <div className="space-y-4">
                  {/* Stars Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(current.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                    ))}
                  </div>

                  {/* Testimonial Description Quote */}
                  <p className="text-sm sm:text-base text-zinc-200 italic leading-relaxed font-light">
                    "{current.text}"
                  </p>
                </div>

                {/* Author Information */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-brand-accent bg-brand-accent/15 flex-shrink-0 shadow-lg shadow-black/30 group-hover:scale-105 group-hover:border-brand-accent/90 transition-all duration-500">
                      {current.image ? (
                        <img 
                          src={current.image} 
                          alt={current.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full text-brand-accent font-extrabold flex items-center justify-center text-xs">
                          {current.name[0]}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-white leading-tight">
                        {current.name}
                      </h4>
                      <span className="text-[10px] text-zinc-300 font-semibold uppercase tracking-wider flex items-center gap-1.5 mt-1">
                        {current.flag && (
                          <span className="inline-flex items-center justify-center bg-white/10 text-xs px-1.5 py-0.5 rounded border border-white/10 shadow-sm leading-none group-hover:bg-brand-accent/20 group-hover:border-brand-accent/30 transition-colors duration-500">
                            {current.flag}
                          </span>
                        )}
                        <span>{current.country}</span>
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-xs text-brand-accent font-bold px-3 py-1 bg-brand-accent/10 border border-brand-accent/10 rounded-full relative z-10 shadow-sm group-hover:bg-brand-accent/25 group-hover:border-brand-accent/30 transition-all duration-500">
                    Caso de Éxito
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls (Mobile Arrows + Dots) */}
          <div className="mt-6 flex items-center justify-center gap-4">
            {/* Left arrow on mobile */}
            <button
              onClick={handlePrev}
              className="flex sm:hidden w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-brand-accent" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-6 bg-brand-accent'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right arrow on mobile */}
            <button
              onClick={handleNext}
              className="flex sm:hidden w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 text-brand-accent" />
            </button>
          </div>

        </div>

        {/* Call-to-action quote block */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 rounded-2xl p-6 border border-white/10">
          <p className="text-xs text-zinc-300 font-light max-w-xl text-center sm:text-left">
            * Cada testimonio refleja una historia real. Por razones de confidencialidad y respeto a su privacidad, hemos abreviado los apellidos de nuestros clientes.
          </p>
          <div className="flex items-center gap-2 flex-shrink-0 text-zinc-300">
            <span className="text-xs font-bold uppercase tracking-wider">Satisfacción:</span>
            <div className="flex items-center gap-0.5">
              <Star className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
              <Star className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
              <Star className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
              <Star className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
              <Star className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
            </div>
            <span className="text-xs font-extrabold text-white">5.0 / 5</span>
          </div>
        </div>

      </div>
    </section>
  );
};

