import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Check, CalendarCheck } from 'lucide-react';

// Import beautifully generated circular 3D gold-embossed icons for Process Steps
import methodSituacion from '../assets/images/method_situacion_1784210872122.jpg';
import methodOpciones from '../assets/images/method_opciones_1784210885858.jpg';
import methodEstrategia from '../assets/images/method_estrategia_1784210898730.jpg';
import methodAcompanamiento from '../assets/images/method_acompanamiento_1784210912530.jpg';

interface ProcessDetailProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const ProcessDetail: React.FC<ProcessDetailProps> = ({
  onNavigateHome,
  onOpenBooking,
}) => {
  const stepsDetail = [
    {
      number: 1,
      title: "Diagnóstico Inicial y Cuestionario Previo",
      icon: (
        <img
          src={methodSituacion}
          alt="Cuéntame tu situación"
          className="w-full h-full object-cover scale-[1.45]"
          referrerPolicy="no-referrer"
        />
      ),
      subtitle: "La recopilación inicial de datos clave",
      description: "Antes de nuestra primera sesión por videollamada, te enviaremos un formulario seguro con preguntas directas acerca de tu historial migratorio, estatus actual y metas. Esto nos permite optimizar la llamada al máximo, analizando tu perfil con antelación para que entremos directo a la materia legal desde el primer minuto.",
      bullets: [
        "Cuestionario estructurado y seguro de 5 minutos",
        "Ahorro de tiempo en la llamada en vivo",
        "Identificación temprana de posibles vías legales"
      ]
    },
    {
      number: 2,
      title: "Consulta Estratégica en Vivo",
      icon: (
        <img
          src={methodOpciones}
          alt="Evaluamos tus opciones"
          className="w-full h-full object-cover scale-[1.45]"
          referrerPolicy="no-referrer"
        />
      ),
      subtitle: "Videollamada privada e interactiva",
      description: "Nos reunimos de manera virtual por Google Meet en un espacio privado de 45 minutos. Aquí evaluamos detenidamente tus opciones, resolvemos tus dudas e inquietudes cara a cara, y sopesamos las ventajas, costos oficiales y posibles riesgos de cada camino legal para tu tranquilidad.",
      bullets: [
        "Espacio 100% interactivo en español",
        "Revisión en vivo de notificaciones oficiales o cartas de inmigración",
        "Análisis de viabilidad económica y familiar"
      ]
    },
    {
      number: 3,
      title: "Entrega de Tu Plan de Acción Escrito",
      icon: (
        <img
          src={methodEstrategia}
          alt="Creamos tu plan de acción"
          className="w-full h-full object-cover scale-[1.45]"
          referrerPolicy="no-referrer"
        />
      ),
      subtitle: "Tu mapa de ruta sin tecnicismos",
      description: "En las siguientes 48 horas laborables posteriores a la reunión, recibirás un documento ejecutivo PDF con el resumen de la estrategia acordada, el checklist de documentos iniciales a recolectar y el cronograma de fechas sugeridas de presentación para evitar demoras.",
      bullets: [
        "Resumen ejecutivo estructurado y entendible",
        "Checklist personalizado de documentos requeridos",
        "Cronograma and estimación de tiempos de procesamiento oficiales"
      ]
    },
    {
      number: 4,
      title: "Acompañamiento y Consultas de Seguimiento",
      icon: (
        <img
          src={methodAcompanamiento}
          alt="Te acompaño en el proceso"
          className="w-full h-full object-cover scale-[1.45]"
          referrerPolicy="no-referrer"
        />
      ),
      subtitle: "Respaldo continuo durante todo tu viaje",
      description: "La migración es un camino dinámico. No te dejamos solo tras la consulta inicial; contarás con canales ágiles de contacto por correo electrónico para resolver dudas puntuales sobre la recolección de tus pruebas o para agendar sesiones rápidas de auditoría de tus documentos finales antes de su envío.",
      bullets: [
        "Soporte prioritario vía correo electrónico",
        "Opciones de revisión y auditoría final de tus solicitudes civiles",
        "Monitoreo continuo de cambios legislativos que afecten tu caso"
      ]
    }
  ];

  return (
    <div className="pt-24 bg-brand-bg min-h-screen text-brand-text relative overflow-hidden">
      {/* Soft luxury glow backdrops */}
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

      {/* Hero Header */}
      <section className="relative overflow-hidden py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
            NUESTRA METODOLOGÍA
          </span>
          <h1 className="font-heading text-3xl sm:text-4.5xl font-normal text-white leading-tight">
            ¿Cómo trabajamos tu caso paso a paso?
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Un proceso migratorio exitoso depende de un método ordenado, minucioso y transparente. Conoce los detalles de nuestro sistema de acompañamiento acompañamiento jurídico.
          </p>
          <div className="w-12 h-1 bg-brand-accent mx-auto rounded mt-4" />
        </div>
      </section>

      {/* Main Steps Detail Block */}
      <section className="py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {stepsDetail.map((step, index) => {
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm hover:border-brand-accent/30 transition-all duration-300 relative"
              >
                {/* Step circle absolute badge */}
                <div className="absolute -top-3.5 left-6 sm:left-8 w-24 h-7 bg-brand-accent text-[#030814] rounded-full flex items-center justify-center text-xs font-extrabold shadow-md border-2 border-[#030814]">
                  Paso {step.number}
                </div>

                {/* Left col: Icon and Title info side-by-side */}
                <div className="lg:col-span-4 flex items-center gap-4 pt-2 lg:pt-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-lg shadow-black/40 border border-white/10">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent leading-none block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Right col: Extensive description & bullets */}
                <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {step.description}
                  </p>
                  
                  {/* Checklist of deliverables in this step */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">Garantía de este paso:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                      {step.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-light">
                          <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust and safety highlights */}
      <section className="py-16 bg-white/[0.02] border-t border-white/5 mt-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 p-3 bg-[#0C1E36]/40 border border-white/10 rounded-2xl text-white">
            <Shield className="w-5 h-5 text-brand-accent animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">Tu Información Está Segura Conmigo</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-normal text-white leading-snug">
            Toda la metodología se rige bajo confidencialidad profesional
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl mx-auto font-light">
            Al ser abogada y consultora regulada, toda la correspondencia, cuestionarios previos, archivos adjuntos y notas tomadas durante nuestras videollamadas están protegidos por el secreto profesional legal de estricto cumplimiento.
          </p>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 bg-brand-accent hover:bg-[#f1a42b] text-[#0A192F] text-xs font-extrabold uppercase tracking-widest rounded-xl shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <CalendarCheck className="w-4.5 h-4.5" />
            Iniciar Mi Proceso de Asesoría
          </button>
        </div>
      </section>
    </div>
  );
};
