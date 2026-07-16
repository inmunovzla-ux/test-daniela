import React, { useState } from 'react';
import { Service } from '../types';
import { ArrowRight, CheckCircle2, Clock, DollarSign, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import the beautifully generated circular 3D gold-embossed icons
import serviceMigrar from '../assets/images/service_migrar_1784210830190.jpg';
import serviceProceso from '../assets/images/service_proceso_1784210845041.jpg';
import serviceOrientacion from '../assets/images/service_orientacion_1784210859253.jpg';

interface ServicesProps {
  services: Service[];
  onSelectService: (id: string) => void;
  onNavigateToDetail?: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onSelectService, onNavigateToDetail }) => {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'plane':
        return (
          <img
            src={serviceMigrar}
            alt="Quiero migrar"
            className="w-full h-full object-cover scale-[1.45]"
            referrerPolicy="no-referrer"
          />
        );
      case 'folder':
        return (
          <img
            src={serviceProceso}
            alt="Ya inicié un proceso"
            className="w-full h-full object-cover scale-[1.45]"
            referrerPolicy="no-referrer"
          />
        );
      case 'user':
        return (
          <img
            src={serviceOrientacion}
            alt="Necesito orientación específica"
            className="w-full h-full object-cover scale-[1.45]"
            referrerPolicy="no-referrer"
          />
        );
      default:
        return (
          <img
            src={serviceMigrar}
            alt="Quiero migrar"
            className="w-full h-full object-cover scale-[1.45]"
            referrerPolicy="no-referrer"
          />
        );
    }
  };

  const currentService = services.find(s => s.id === activeModalId);

  return (
    <section id="servicios" className="py-20 bg-brand-bg border-b border-white/5 relative overflow-hidden">
      {/* Soft luxury blue glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
            ¿EN QUÉ PUEDO AYUDARTE?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white leading-tight">
            Servicios según tu necesidad
          </h2>
          <div className="w-12 h-1 bg-brand-accent mx-auto rounded mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/[0.03] border border-white/5 rounded-2xl p-6 shadow-md hover:shadow-[0_0_35px_rgba(37,99,235,0.18)] hover:border-brand-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                {/* Title and Icon side-by-side */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-black/40 border border-white/10 group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-white group-hover:text-brand-accent transition-colors duration-200 leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed font-light">
                  {service.shortDescription}
                </p>

                {/* Quick key items checklist */}
                <ul className="mt-5 space-y-2">
                  {service.features.slice(0, 3).map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 animate-fade-in">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action and pricing row */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">Costo aproximado</span>
                  <span className="font-extrabold text-brand-accent text-sm">{service.price}</span>
                </div>
                
                <button
                  onClick={() => {
                    if (onNavigateToDetail) {
                      onNavigateToDetail(service.id);
                    } else {
                      setActiveModalId(service.id);
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Conocer más
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Confidenciality trust block */}
        <div className="mt-16 bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-accent border border-white/10 flex-shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">¿No estás seguro de cuál es tu servicio ideal?</h4>
              <p className="text-xs text-zinc-300 font-light mt-0.5">Agenda cualquier opción. Evaluaremos tu situación particular durante los primeros minutos de la llamada.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService(services[0]?.id)}
            className="px-5 py-2.5 bg-brand-accent hover:bg-[#f1a42b] text-[#0A192F] text-xs font-extrabold rounded-xl shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.02] transition-all whitespace-nowrap cursor-pointer"
          >
            Consulta Inicial Rápida
          </button>
        </div>
      </div>

      {/* SERVICE DETAILS MODAL */}
      <AnimatePresence>
        {activeModalId && currentService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalId(null)}
              className="absolute inset-0 bg-[#030814]/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative bg-[#0C1E36] border border-white/10 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl z-10 overflow-hidden text-zinc-200"
            >
              {/* Icon / Close */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-black/40 border border-white/10 flex-shrink-0">
                  {getIcon(currentService.icon)}
                </div>
                <button
                  onClick={() => setActiveModalId(null)}
                  className="p-1.5 hover:bg-white/5 rounded-lg text-zinc-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-bold text-white">
                  {currentService.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {currentService.longDescription}
                </p>
              </div>

              {/* Scope Features Checklist */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <h4 className="text-xs uppercase font-bold text-brand-accent tracking-wider mb-3">
                  ¿Qué incluye esta asesoría?
                </h4>
                <ul className="space-y-2.5">
                  {currentService.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Duration info */}
              <div className="mt-6 p-4 bg-[#030814]/40 border border-white/10 rounded-xl grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-accent" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block leading-tight">Duración</span>
                    <span className="text-xs font-bold text-white">{currentService.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-brand-accent" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block leading-tight">Costo</span>
                    <span className="text-xs font-bold text-brand-accent">{currentService.price}</span>
                  </div>
                </div>
              </div>

              {/* Booking Action */}
              <div className="mt-6 pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setActiveModalId(null);
                  }}
                  className="w-1/3 py-2.5 border border-white/10 text-xs font-bold text-zinc-300 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Regresar
                </button>
                <button
                  onClick={() => {
                    const id = currentService.id;
                    setActiveModalId(null);
                    onSelectService(id);
                  }}
                  className="w-2/3 py-2.5 bg-brand-accent hover:bg-[#f1a42b] text-[#0A192F] font-extrabold text-xs rounded-xl shadow-lg hover:shadow-brand-accent/15 hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Agendar este servicio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
