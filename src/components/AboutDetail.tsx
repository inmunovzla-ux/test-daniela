import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Award, 
  BookOpen, 
  Heart, 
  CalendarCheck, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Sparkles, 
  User, 
  CheckCircle2,
  Scale
} from 'lucide-react';

interface AboutDetailProps {
  portraitImage: string;
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const AboutDetail: React.FC<AboutDetailProps> = ({
  portraitImage,
  onNavigateHome,
  onOpenBooking,
}) => {
  return (
    <div className="pt-24 bg-brand-bg min-h-screen text-brand-text">
      {/* Back navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-accent hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </button>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-sm"
              >
                <div className="absolute inset-0 border-2 border-brand-accent rounded-3xl translate-x-3 translate-y-3 -z-10 opacity-60 shadow-[0_0_20px_rgba(231,153,35,0.2)]" />
                <div className="overflow-hidden rounded-3xl shadow-xl aspect-[3/4] bg-white/[0.02] border border-white/10">
                  <img
                    src={portraitImage}
                    alt="Daniela Harrington - Abogada Migratoria de Asesorías al Migrante"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Title and Lead */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
                CONOCE A TU ASESORA
              </span>
              <h1 className="font-heading text-2xl sm:text-3.5xl font-normal text-white leading-tight">
                "Desde el inicio de mi carrera he entendido que el Derecho no solo consiste en interpretar normas, sino en acompañar a las personas en momentos que pueden cambiar el rumbo de sus vidas."
              </h1>
              <div className="w-12 h-1 bg-brand-accent rounded" />
              
              <div className="text-sm sm:text-base space-y-4 font-light text-zinc-300 leading-relaxed">
                <p>
                  Soy <strong className="font-semibold text-white">Daniela Harrington</strong>, abogada venezolana especializada en Derecho Penal y fundadora de Asesorías al Migrante.
                </p>
                <p>
                  Esa convicción me llevó a orientar mi experiencia profesional hacia el ámbito migratorio, donde hoy acompaño a personas y familias que desean emigrar o regularizar su situación migratoria de forma segura, informada y estratégica.
                </p>
                <p>
                  Mi objetivo es brindar asesorías claras, honestas y personalizadas, para que cada cliente pueda tomar decisiones con tranquilidad y confianza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formaciones & Ficha Profesional Section */}
      <section className="py-16 bg-white/[0.02] border-y border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Block 1: Formación Académica */}
            <div className="p-6 sm:p-8 bg-[#0c1e36]/30 border border-white/10 rounded-2xl space-y-5 backdrop-blur-md shadow-lg flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent border border-white/5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">Formación Académica</h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-accent text-sm mt-0.5">•</span>
                    <span>Abogada, graduada en Venezuela en el año 2019.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-accent text-sm mt-0.5">•</span>
                    <span>Especialista en Derecho Penal Venezolano.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-accent text-sm mt-0.5">•</span>
                    <span>Diplomado en Derecho Aeronáutico en la UBA.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-accent text-sm mt-0.5">•</span>
                    <span>Especialización en Derecho Penal Internacional, cursada en la ULAC.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-accent text-sm mt-0.5">•</span>
                    <span>Diplomatura en Ciudadanías, Extranjería y Visados, avalada por la Cámara Argentina.</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-zinc-400 font-light italic border-t border-white/5 pt-4 mt-4">
                Mi formación ha estado orientada a fortalecer una visión jurídica integral, combinando conocimientos nacionales e internacionales para brindar un acompañamiento profesional en procesos migratorios.
              </p>
            </div>

            {/* Block 2: Formación Complementaria */}
            <div className="p-6 sm:p-8 bg-[#0c1e36]/30 border border-white/10 rounded-2xl space-y-5 backdrop-blur-md shadow-lg flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent border border-white/5">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Formación Complementaria</h3>
              <div className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed space-y-4 flex-grow">
                <p className="font-medium text-white italic">"Creo firmemente que un buen profesional nunca deja de aprender."</p>
                <p>
                  Por ello, mantengo una formación continua en legislación migratoria, ciudadanía, extranjería, documentación internacional y procedimientos administrativos, con el objetivo de ofrecer información actualizada y estrategias acordes con los cambios constantes de las normas migratorias.
                </p>
                <p>
                  La capacitación permanente forma parte de mi compromiso con cada persona que deposita su confianza en mi trabajo.
                </p>
              </div>
            </div>

            {/* Block 3: Ficha Profesional */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-[#0c1e36]/60 to-[#050d1a]/60 border border-white/15 rounded-2xl space-y-5 backdrop-blur-md shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mt-4">Información Profesional</h3>
              </div>
              <div className="divide-y divide-white/5 text-xs sm:text-sm font-light text-zinc-300">
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-zinc-400">Nombre:</span>
                  <span className="font-medium text-white text-right">Daniela Harrington</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-zinc-400">Profesión:</span>
                  <span className="font-medium text-white text-right">Abogada</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-zinc-400">Matrícula:</span>
                  <span className="font-medium text-brand-accent font-mono text-right">305.815</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-zinc-400">Colegiada en:</span>
                  <span className="font-medium text-white text-right">Colegio de Abogados de Caracas</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-zinc-400">Graduación:</span>
                  <span className="font-medium text-white text-right">2019</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-zinc-400">Especialidad:</span>
                  <span className="font-medium text-white text-right text-xs">D. Migratorio, D. Penal, D. Int. Privado</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-zinc-400">Fundadora:</span>
                  <span className="font-medium text-white text-right">Asesorías al Migrante (2025)</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="text-zinc-400">Residencia:</span>
                  <span className="font-medium text-white text-right">Mar del Plata, Argentina</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience, Migrant Story & Philosophy */}
      <section className="py-16 relative">
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section: Mi Experiencia */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <Briefcase className="w-5 h-5 text-brand-accent" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide">
                Mi Experiencia
              </h2>
            </div>
            <div className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed space-y-4">
              <p>
                Ejercí como abogada <strong className="font-semibold text-white">Penalista en Venezuela</strong> desde mi graduación en 2019 hasta mi proceso migratorio en 2022.
              </p>
              <p>
                Posteriormente, al establecerme en Mar del Plata, Argentina, conocí de primera mano las dificultades que enfrentan miles de migrantes: trámites complejos, desinformación, incertidumbre y la necesidad de encontrar orientación confiable.
              </p>
              <p>
                En el año <strong className="font-semibold text-white">2025 nació Asesorías al Migrante</strong>, un proyecto creado para brindar acompañamiento jurídico y estratégico a quienes desean iniciar o continuar su proceso migratorio con respaldo profesional.
              </p>
              <p>
                Actualmente asesoro personas de distintos países en temas relacionados con migración, ciudadanía, visados y regularización documental, siempre dentro del marco legal correspondiente.
              </p>
            </div>
          </div>

          {/* Section: Mi Experiencia como Migrante */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0C1E36] to-[#050D1A] border border-white/10 rounded-2xl relative overflow-hidden shadow-xl space-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <Globe className="w-5 h-5 text-brand-accent" />
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide">
                Mi Experiencia como Migrante
              </h2>
            </div>
            <div className="text-xs sm:text-sm sm:text-base text-zinc-300 font-light leading-relaxed space-y-4">
              <p className="font-medium text-white italic">"Antes de convertirme en asesora migratoria, fui migrante."</p>
              <p>
                En el año 2022 tomé la decisión de dejar Venezuela para comenzar una nueva etapa en Argentina. Viví las dudas, los miedos, la adaptación a un nuevo país y los desafíos que implica empezar desde cero.
              </p>
              <p>
                Comprendo lo que significa enfrentarse a trámites desconocidos, reunir documentación, cumplir requisitos y tomar decisiones que pueden afectar el futuro de una persona o de toda una familia.
              </p>
              <p>
                Esa experiencia me permite ofrecer una asesoría con una mirada diferente: además del conocimiento jurídico, entiendo el componente humano que existe detrás de cada proceso migratorio.
              </p>
            </div>
          </div>

          {/* Section: Filosofía de Trabajo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <Scale className="w-5 h-5 text-brand-accent" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide">
                Mi Filosofía de Trabajo
              </h2>
            </div>
            <div className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed space-y-4">
              <p className="font-medium text-white italic">"Creo que detrás de cada expediente hay una historia."</p>
              <p>Por eso mi forma de trabajar se basa en tres pilares fundamentales:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
                <h4 className="font-heading font-bold text-brand-accent text-sm sm:text-base">1. Empatía</h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Porque cada proceso es único y merece ser escuchado con atención, comprensión y calidez humana.
                </p>
              </div>
              <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
                <h4 className="font-heading font-bold text-brand-accent text-sm sm:text-base">2. Claridad</h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Porque las personas necesitan comprender realmente sus opciones antes de tomar una decisión trascendental.
                </p>
              </div>
              <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
                <h4 className="font-heading font-bold text-brand-accent text-sm sm:text-base">3. Estrategia</h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Porque un buen proceso migratorio requiere planificación, rigor metódico y acompañamiento profesional.
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-light italic mt-3">
              Mi compromiso es ofrecer información honesta, explicar cada alternativa con transparencia y acompañar a mis clientes durante todo el proceso.
            </p>
          </div>

          {/* Section: ¿Por qué elegir Asesorías al Migrante? */}
          <div className="p-6 sm:p-8 bg-[#0c1e36]/30 border border-white/10 rounded-2xl space-y-6 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <CheckCircle2 className="w-5 h-5 text-brand-accent" />
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide">
                ¿Por qué elegir Asesorías al Migrante?
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-xs sm:text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Porque recibir asesoría jurídica antes de iniciar un trámite puede evitar errores que generan pérdida de tiempo, dinero y oportunidades. En Asesorías al Migrante encontrarás:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300 font-light">
                {[
                  "Atención personalizada según tu caso.",
                  "Análisis jurídico individual.",
                  "Estrategias adaptadas a tu situación migratoria.",
                  "Información clara y actualizada.",
                  "Acompañamiento profesional durante cada etapa del proceso.",
                  "Un trato humano, cercano y respetuoso."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-brand-accent font-bold text-base mt-0.5 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-brand-accent font-semibold italic border-t border-white/5 pt-4">
                Mi objetivo no es vender trámites, sino ayudarte a tomar la mejor decisión para tu proyecto migratorio.
              </p>
            </div>
          </div>

          {/* Section: Más allá del Derecho */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <Sparkles className="w-5 h-5 text-brand-accent" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide">
                Más allá del Derecho
              </h2>
            </div>
            <div className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed space-y-4">
              <p>
                Además de ser abogada, soy una persona que cree profundamente en el poder de comenzar de nuevo.
              </p>
              <p>
                Disfruto aprender constantemente, estudiar nuevas áreas del Derecho, crear contenido educativo y compartir información que ayude a las personas a comprender mejor sus derechos y las opciones disponibles para migrar de forma segura.
              </p>
              <p>
                Creo que el conocimiento debe ser accesible y que una orientación profesional puede cambiar por completo el rumbo de un proyecto de vida. Por eso decidió crear Asesorías al Migrante: para que ninguna persona tenga que enfrentar sola un proceso tan importante como emigrar.
              </p>
              <p className="font-medium text-white border-l-2 border-brand-accent pl-3 italic">
                Mi mayor satisfacción es ver cómo una asesoría se convierte en tranquilidad, confianza y un nuevo comienzo para quienes deciden dar ese paso.
              </p>
            </div>
          </div>

          {/* Final CTA block */}
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-sm">
            <div className="space-y-2 text-left">
              <h4 className="font-heading font-bold text-lg text-white">¿Hablamos sobre tu caso?</h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-light">
                Permíteme ayudarte a descifrar tus opciones y estructurar tu camino migratorio de forma profesional y segura.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-brand-accent hover:bg-[#f1a42b] text-[#0A192F] text-xs font-extrabold rounded-xl shadow-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer hover:scale-[1.02]"
            >
              <CalendarCheck className="w-4 h-4" />
              Agendar Consulta de Asesoría
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
