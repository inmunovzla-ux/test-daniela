import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Plus, Minus, Search, CalendarCheck, HelpCircle, ShieldCheck, HelpCircle as HelpIcon, Landmark, Mail } from 'lucide-react';

interface FAQDetailProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const FAQDetail: React.FC<FAQDetailProps> = ({
  onNavigateHome,
  onOpenBooking,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'visas' | 'costos' | 'videollamadas'>('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const faqCategories = [
    { id: 'all', name: 'Todas las preguntas' },
    { id: 'general', name: 'General' },
    { id: 'visas', name: 'Visas y Peticiones' },
    { id: 'costos', name: 'Costos y Tiempos' },
    { id: 'videollamadas', name: 'Videollamadas' },
  ];

  const faqs = [
    // General
    {
      id: 'faq-g1',
      category: 'general',
      question: '¿Qué es exactamente Asesorías al Migrante?',
      answer: 'Asesorías al Migrante es una firma de asesoría jurídica migratoria fundada por la abogada Daniela Harrington. Brindamos orientación personalizada para procesos migratorios de distintos países, ayudando a las personas a comprender sus opciones legales y tomar decisiones informadas.',
    },
    {
      id: 'faq-g2',
      category: 'general',
      question: '¿Daniela Harrington es abogada licenciada?',
      answer: 'Sí. Daniela Harrington es abogada graduada de la Universidad Bicentenaria de Aragua (Maracay, estado Aragua, Venezuela) y cuenta con formación especializada, incluyendo una Especialización en Derecho Internacional Penal en la Universidad Latinoamericana y del Caribe (ULAC).',
    },
    {
      id: 'faq-g3',
      category: 'general',
      question: '¿Qué incluye la asesoría jurídica migratoria?',
      answer: 'Incluye el análisis personalizado de tu caso, revisión de documentos cuando corresponda, explicación de requisitos y una estrategia jurídica adaptada a tus objetivos.',
    },
    {
      id: 'faq-g4',
      category: 'general',
      question: '¿En qué países brindan asesoría migratoria?',
      answer: 'Asesoramos procesos relacionados con Estados Unidos, Canadá, Australia, España, Portugal, Italia, otros países de Europa y diversos países de Latinoamérica.',
    },
    {
      id: 'faq-g5',
      category: 'general',
      question: '¿Puedo recibir una asesoría si me encuentro en otro país?',
      answer: 'Sí. Todas las asesorías son 100 % virtuales y atendemos clientes desde cualquier parte del mundo.',
    },
    {
      id: 'faq-g6',
      category: 'general',
      question: '¿Qué documentos debo tener preparados?',
      answer: 'Pasaporte o documento de identidad y, si ya existe un trámite, toda la documentación relacionada con tu caso.',
    },
    // Visas
    {
      id: 'faq-v1',
      category: 'visas',
      question: '¿Qué tipo de procesos migratorios asesoran?',
      answer: 'Visas, residencias, reunificación familiar, nacionalidad, ciudadanía, regularización migratoria, permisos y otros procedimientos migratorios.',
    },
    {
      id: 'faq-v2',
      category: 'visas',
      question: '¿Garantizan la aprobación de una visa?',
      answer: 'No. Ningún profesional puede garantizar el resultado de un trámite. Ofrecemos análisis jurídico y estrategia personalizada.',
    },
    // Costos
    {
      id: 'faq-c1',
      category: 'costos',
      question: '¿Cuánto dura la asesoría?',
      answer: 'Entre 45 y 60 minutos.',
    },
    {
      id: 'faq-c2',
      category: 'costos',
      question: '¿Cómo puedo agendar?',
      answer: 'A través del calendario de reservas o nuestros canales de contacto.',
    },
    {
      id: 'faq-c3',
      category: 'costos',
      question: '¿Cómo se realiza el pago?',
      answer: 'El pago es anticipado para confirmar la cita.',
    },
    // Videollamadas
    {
      id: 'faq-d1',
      category: 'videollamadas',
      question: '¿Cómo se realizan las asesorías?',
      answer: 'Se realizan por Google Meet o Zoom. Tras confirmar la cita recibirás el enlace y las instrucciones.',
    },
    {
      id: 'faq-d2',
      category: 'videollamadas',
      question: '¿La información es confidencial?',
      answer: 'Sí. Toda la información se maneja con estricta confidencialidad y ética profesional.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

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

      {/* Hero Header */}
      <section className="relative overflow-hidden py-10 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
            CENTRO DE CONSULTAS Y RESOLUCIONES
          </span>
          <h1 className="font-heading text-3xl sm:text-4.5xl font-normal text-white leading-tight">
            ¿Tienes dudas sobre tu futuro migratorio?
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Encuentra respuestas claras y profesionales a las preguntas más comunes sobre visados, peticiones de familia, trámites consulares y metodologías de consulta.
          </p>
          <div className="w-12 h-1 bg-brand-accent mx-auto rounded mt-3" />
        </div>
      </section>

      {/* Search and Categories Block */}
      <section className="py-6 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar por palabra clave (ej. visa, RFE, cónyuge, costo...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-2xl shadow-inner text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/45 placeholder-zinc-400 transition-all font-light"
            />
          </div>

          {/* Categories Tab Pill Rows */}
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  setOpenId(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-accent text-[#030814] shadow-md shadow-brand-accent/20'
                    : 'bg-white/[0.03] text-zinc-300 border border-white/5 hover:border-brand-accent/30 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordions Grid */}
      <section className="py-10 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_20px_rgba(231,153,35,0.15)] hover:border-brand-accent/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 hover:bg-white/[0.04] transition-colors cursor-pointer group"
                    >
                      <span className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-brand-accent transition-colors leading-snug">
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
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light border-t border-white/5 whitespace-pre-line">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white/[0.02] rounded-2xl border border-white/10 shadow-lg space-y-3">
                <HelpCircle className="w-10 h-10 text-brand-accent/50 mx-auto animate-pulse" />
                <h3 className="font-heading font-semibold text-white text-sm sm:text-base">No encontramos resultados</h3>
                <p className="text-xs text-zinc-400 font-light max-w-sm mx-auto">
                  Prueba buscando con palabras clave más generales o selecciona otra categoría temática.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Políticas Section */}
      <section className="py-12 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0c1e36]/30 to-brand-bg border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <ShieldCheck className="w-5 h-5 text-brand-accent" />
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide">
                Políticas de Asesorías al Migrante
              </h2>
            </div>
            
            <ul className="space-y-3.5">
              {[
                'Las citas se confirman una vez verificado el pago.',
                'Las reprogramaciones deben solicitarse con antelación y están sujetas a disponibilidad.',
                'La inasistencia sin aviso puede implicar la pérdida de la cita conforme a las políticas vigentes.',
                'Las asesorías son personalizadas y se limitan al alcance contratado.',
                'No se garantiza la aprobación de visas, residencias o cualquier beneficio migratorio.',
                'Toda la información y documentación recibida es tratada de forma confidencial.',
                'Las recomendaciones se basan en la normativa vigente al momento de la consulta.'
              ].map((policy, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  <span className="text-brand-accent font-bold text-base select-none mt-0.5">•</span>
                  <span>{policy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Secondary FAQ footer consultation trust claim */}
      <section className="py-16 bg-gradient-to-r from-[#0C1E36] to-[#050D1A] border-t border-white/5 text-white mt-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 p-2 px-4 bg-white/5 border border-white/10 rounded-full text-brand-accent">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">¿Tu duda es sumamente particular?</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-normal leading-snug text-white">
            Cada caso tiene matices legales únicos. Evaluemos el tuyo.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl mx-auto font-light">
            Las leyes de inmigración norteamericanas se interpretan de forma individualizada. Agenda una consulta privada para analizar tus antecedentes con total reserva legal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3.5 bg-brand-accent hover:bg-[#f1a42b] text-[#0A192F] text-xs font-extrabold uppercase tracking-widest rounded-xl shadow-lg hover:shadow-brand-accent/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4.5 h-4.5" />
              Agendar Mi Sesión Virtual
            </button>
            <a
              href="mailto:asesoriasalmigrante@gmail.com"
              className="w-full sm:w-auto px-6 py-3.5 border border-white/15 text-white hover:bg-white/5 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-brand-accent" />
              asesoriasalmigrante@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
