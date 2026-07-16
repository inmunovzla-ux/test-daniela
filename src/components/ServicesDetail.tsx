import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, HelpCircle, AlertTriangle, FileCheck, Landmark, CalendarCheck, FileText } from 'lucide-react';
import { Service } from '../types';

interface ServicesDetailProps {
  services: Service[];
  defaultTabId?: string;
  onNavigateHome: () => void;
  onOpenBooking: (serviceId: string) => void;
}

export const ServicesDetail: React.FC<ServicesDetailProps> = ({
  services,
  defaultTabId = 'quiero-migrar',
  onNavigateHome,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTabId);

  // Sync state if defaultTabId changes (e.g. if navigated from home page clicking a specific card)
  useEffect(() => {
    if (defaultTabId) {
      setActiveTab(defaultTabId);
    }
  }, [defaultTabId]);

  return (
    <div className="pt-24 bg-brand-bg min-h-screen text-brand-text relative overflow-hidden">
      {/* Decorative luxury glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Back navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-accent hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
            SERVICIOS DETALLADOS
          </span>
          <h1 className="font-heading text-3xl sm:text-4.5xl font-normal text-white leading-tight">
            Nuestros Caminos de Asesoría Migratoria
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Elegir la estrategia adecuada determina el éxito de tu proceso. Te ofrezco un acompañamiento jurídico riguroso y transparente según tu situación actual.
          </p>
          <div className="w-12 h-1 bg-brand-accent mx-auto rounded mt-4" />
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center border-b border-white/10 mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 w-full gap-2 pb-px">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`py-3.5 px-2 text-center border-b-2 font-heading transition-all duration-300 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase cursor-pointer ${
                  activeTab === service.id
                    ? 'border-brand-accent text-brand-accent font-extrabold bg-white/5 rounded-t-lg shadow-inner'
                    : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panels with animations */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'quiero-migrar' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-10 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm"
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 rounded-full text-brand-accent text-xs font-bold border border-brand-accent/20">
                  <Landmark className="w-3.5 h-3.5" />
                  Estrategia desde el Inicio
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-normal text-white">
                  Quiero migrar de forma legal y planificada
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  Este servicio está diseñado específicamente para quienes desean establecerse de forma legal y segura en los Estados Unidos, pero se encuentran confundidos por la gran cantidad de requisitos y opciones disponibles. El primer paso consiste en trazar un mapa de ruta personalizado para ti y tu grupo familiar.
                </p>
              </div>

              {/* Grid with Deep Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <ShieldCheck className="w-4.5 h-4.5 text-brand-accent" />
                    Categorías que evaluamos:
                  </h3>
                  <div className="text-xs sm:text-sm text-zinc-300 space-y-3 font-light">
                    <p>
                      <strong className="font-semibold text-white">Peticiones de Reunificación Familiar:</strong> Petición de cónyuges, hijos, padres o hermanos de ciudadanos estadounidenses o residentes legales (Formularios I-130).
                    </p>
                    <p>
                      <strong className="font-semibold text-white">Visas de No-Inmigrante:</strong> Visas de estudio (F-1), turismo o negocios (B1/B2), y visas de trabajo temporal o intercambio que permitan una estancia segura.
                    </p>
                    <p>
                      <strong className="font-semibold text-white">Estatus de Ajuste (Ajuste de Estatus):</strong> Procesar tu residencia (Green Card) sin necesidad de salir de los Estados Unidos en caso de cumplir con los requisitos del gobierno (I-485).
                    </p>
                  </div>
                </div>

                <div className="space-y-4 bg-[#0C1E36]/30 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <FileText className="w-4.5 h-4.5 text-brand-accent" />
                    ¿Qué recibirás en esta asesoría?
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-light text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span><strong className="font-semibold text-white">Análisis de elegibilidad:</strong> Evaluación rigurosa de tus antecedentes personales para evitar denegaciones directas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span><strong className="font-semibold text-white">Ruta migratoria personalizada:</strong> La elección exacta de la visa o beneficio ideal de acuerdo a tus metas financieras y de vida.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span><strong className="font-semibold text-white">Presupuesto real de costos:</strong> Detalle completo de aranceles de USCIS, traducciones, exámenes médicos y tasas adicionales.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <Clock className="w-4.5 h-4.5 text-brand-accent" />
                  <span>Duración: 45 minutos — Asesoría Virtual por Google Meet</span>
                </div>
                <button
                  onClick={() => onOpenBooking('quiero-migrar')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-accent hover:bg-[#f1a42b] text-[#0A192F] text-xs font-extrabold uppercase tracking-widest rounded-xl shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Agendar Esta Ruta de Asesoría
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'proceso-iniciado' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-10 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm"
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 rounded-full text-brand-accent text-xs font-bold border border-brand-accent/20">
                  <FileCheck className="w-3.5 h-3.5" />
                  Auditoría de Casos Activos
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-normal text-white">
                  Ya inicié un proceso y necesito revisión experta
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  Si ya enviaste tus solicitudes a USCIS, estás en pleno proceso en el Centro Nacional de Visas (NVC), o tienes dudas sobre correspondencia oficial recibida, esta es tu ruta recomendada. Muchos procesos se retrasan años o son rechazados por no contestar correctamente las solicitudes de evidencia (RFE) o por errores de traducción.
                </p>
              </div>

              {/* Grid with Deep Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                <div className="space-y-4 bg-[#0C1E36]/30 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <AlertTriangle className="w-4.5 h-4.5 text-brand-accent" />
                    Cuándo solicitar esta revisión:
                  </h3>
                  <div className="text-xs sm:text-sm text-zinc-300 space-y-3 font-light">
                    <p>
                      <strong className="font-semibold text-white">Solicitudes de Evidencia (RFE):</strong> Recibiste una carta oficial exigiendo más pruebas de relación, solvencia económica o estatus legal en un plazo máximo.
                    </p>
                    <p>
                      <strong className="font-semibold text-white">Fase del Centro Nacional de Visas:</strong> Estás atascado en el envío de documentos civiles o la declaración de patrocinio económico (Affidavit of Support).
                    </p>
                    <p>
                      <strong className="font-semibold text-white">Preparación de Entrevista:</strong> Quieres realizar un simulacro real de entrevista consular para responder con seguridad y orden frente al oficial.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <HelpCircle className="w-4.5 h-4.5 text-brand-accent" />
                    ¿Qué analizamos minuciosamente?
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-light text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span><strong className="font-semibold text-white">Auditoría de Formularios:</strong> Verificación de datos, casillas marcadas incorrectamente o contradicciones biográficas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span><strong className="font-semibold text-white">Evaluación de Patrocinio:</strong> Cálculo de solvencia del sponsor según las guías federales de pobreza actuales (I-864).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span><strong className="font-semibold text-white">Plan de subsanación de errores:</strong> Estrategias legales para enmendar envíos defectuosos sin cancelar la petición.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <Clock className="w-4.5 h-4.5 text-brand-accent" />
                  <span>Duración: 45 minutos — Asesoría Virtual por Google Meet</span>
                </div>
                <button
                  onClick={() => onOpenBooking('proceso-iniciado')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-accent hover:bg-[#f1a42b] text-[#0A192F] text-xs font-extrabold uppercase tracking-widest rounded-xl shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Agendar Revisión de Proceso
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'orientacion-especifica' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-10 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm"
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 rounded-full text-brand-accent text-xs font-bold border border-brand-accent/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Asesoría Legal Singular
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-normal text-white">
                  Casos de orientación o situaciones específicas
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  Para situaciones atípicas, antecedentes de reingreso, consultas sobre cómo mantener tu estatus en casos de despido laboral o rupturas matrimoniales, o la viabilidad de solicitar perdones migratorios (Waivers I-601, I-601A). Te ofrezco un espacio seguro, confidencial y regido bajo un estricto criterio legal profesional.
                </p>
              </div>

              {/* Grid with Deep Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-accent" />
                    Escenarios complejos que resolvemos:
                  </h3>
                  <div className="text-xs sm:text-sm text-zinc-300 space-y-3 font-light">
                    <p>
                      <strong className="font-semibold text-white">Pérdida de estatus o sobreestadía:</strong> Evaluación de penalizaciones de los 3 y 10 años, consecuencias de acumular presencia ilegal y opciones de remedio.
                    </p>
                    <p>
                      <strong className="font-semibold text-white">Estudio de Viabilidad de Perdones:</strong> Análisis de "Dificultad Extrema" (Extreme Hardship) requerida para la aprobación de waivers civiles.
                    </p>
                    <p>
                      <strong className="font-semibold text-white">Cambios bruscos de estatus:</strong> Planificación de transiciones entre estatus de estudiante, turista o trabajador para mitigar sospechas de fraude de intención.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 bg-[#0C1E36]/30 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <ShieldCheck className="w-4.5 h-4.5 text-brand-accent" />
                    Garantía del Espacio Asesoría:
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-light text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span><strong className="font-semibold text-white">Cero Juicios:</strong> Hablas con una abogada en español que comprende la realidad del migrante sin tapujos ni señalamientos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span><strong className="font-semibold text-white">Estrategias de Mitigación:</strong> Planes concretos para reducir al mínimo riesgos de deportación o denegación en frontera.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span><strong className="font-semibold text-white">Criterio Técnico:</strong> Análisis fundado en las leyes de inmigración vigentes (INA) y memorandos ejecutivos actuales.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <Clock className="w-4.5 h-4.5 text-brand-accent" />
                  <span>Duración: 45 minutos — Asesoría Virtual por Google Meet</span>
                </div>
                <button
                  onClick={() => onOpenBooking('orientacion-especifica')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-accent hover:bg-[#f1a42b] text-[#0A192F] text-xs font-extrabold uppercase tracking-widest rounded-xl shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Agendar Orientación Específica
                </button>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
};
