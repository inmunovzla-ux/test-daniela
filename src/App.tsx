import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Service, Step, Testimonial, FAQItem } from './types';

// Detail subpages
import { AboutDetail } from './components/AboutDetail';
import { ServicesDetail } from './components/ServicesDetail';
import { ProcessDetail } from './components/ProcessDetail';
import { FAQDetail } from './components/FAQDetail';

// Import images so Vite bundles them correctly in the production build
import portraitImage from './assets/images/daniela_portrait_exact_1784203725965.jpg';
import heroImage from './assets/images/daniela_hero_workspace_1784117466914.jpg';
import worldMapDots from './assets/images/world_map_dots.svg';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('quiero-migrar');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceTab, setSelectedServiceTab] = useState<string>('quiero-migrar');
  const [pendingScrollSection, setPendingScrollSection] = useState<string | null>(null);

  // Brand data arrays matching brand kit and landing page screenshots
  const services: Service[] = [
    {
      id: 'quiero-migrar',
      title: 'Quiero migrar',
      shortDescription: 'Te escucho y optimizo tu iniciar un proceso migratorio desde el principio y elegir el camino más adecuado para ti.',
      longDescription: 'Este servicio está diseñado para quienes desean establecerse de forma legal y segura en los Estados Unidos. Te ayudamos a descifrar el laberinto legal y elegir la visa, petición familiar o categoría de ajuste de estatus que realmente se adapta a tu perfil y objetivos de vida.',
      icon: 'plane',
      features: [
        'Análisis de elegibilidad detallado para visas de no-inmigrante e inmigrante',
        'Definición de ruta estratégica personalizada para ti y tu familia',
        'Explicación clara de requisitos, costos y tiempos estimados del gobierno',
        'Checklist completo de la documentación necesaria inicial',
        'Recomendaciones clave para evitar fraudes u ofertas engañosas'
      ],
      duration: '45 minutos',
      price: '$20'
    },
    {
      id: 'proceso-iniciado',
      title: 'Ya inicié un proceso',
      shortDescription: 'Revisamos el estado de tu caso, resolvemos dudas y evitamos errores que puedan poner en riesgo tu proceso.',
      longDescription: 'Ideal para personas que ya han enviado solicitudes o recibido notificaciones (como solicitudes de evidencia - RFE, o citas del NVC/consulado) y necesitan una segunda opinión experta para garantizar que todo marche sin contratiempos.',
      icon: 'folder',
      features: [
        'Auditoría minuciosa del estado actual de tu caso ante USCIS o NVC',
        'Análisis y explicación de notificaciones o solicitudes de evidencia recibidas',
        'Identificación de posibles errores en formularios o documentos ya enviados',
        'Preparación de argumentos aclaratorios y recopilación de pruebas adicionales',
        'Revisión preventiva antes de tu entrevista consular o en oficina'
      ],
      duration: '45 minutos',
      price: '$20'
    },
    {
      id: 'orientacion-especifica',
      title: 'Necesito orientación específica',
      shortDescription: 'Tienes una situación particular y necesitas una guía clara sobre tus derechos y posibles alternativas.',
      longDescription: 'Para casos singulares, dudas complejas o situaciones de urgencia migratoria. Evaluamos escenarios complejos como salidas de EE.UU., perdones migratorios, cambios drásticos de estatus, o consultas de defensa preventiva.',
      icon: 'user',
      features: [
        'Evaluación personalizada de situaciones legales complejas o atípicas',
        'Análisis de antecedentes migratorios previos y su impacto actual',
        'Estudio de viabilidad para solicitudes de perdón (waivers) o extensiones',
        'Asesoría sobre tus derechos ante autoridades migratorias locales',
        'Estrategia de contención para mitigar riesgos legales o denegaciones'
      ],
      duration: '45 minutos',
      price: '$20'
    }
  ];

  const steps: Step[] = [
    {
      number: 1,
      title: 'Cuéntame tu situación',
      description: 'Me compartes tu caso en una consulta inicial para entender tu contexto y necesidades.',
      icon: 'message'
    },
    {
      number: 2,
      title: 'Evaluamos tus opciones',
      description: 'Analizo tu situación y te explico las alternativas disponibles, con sus ventajas y riesgos.',
      icon: 'search'
    },
    {
      number: 3,
      title: 'Creamos tu plan de acción',
      description: 'Diseñamos una estrategia personalizada y te indico los pasos a seguir.',
      icon: 'file'
    },
    {
      number: 4,
      title: 'Te acompaño en el proceso',
      description: 'Estoy contigo en cada etapa para resolver dudas y ayudarte a avanzar con seguridad.',
      icon: 'handshake'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'María G.',
      country: 'México',
      text: 'Daniela me ayudó a entender mis opciones cuando ya no sabía qué hacer. Su claridad y paciencia hicieron toda la diferencia.',
      stars: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250',
      flag: '🇲🇽'
    },
    {
      id: 'test-2',
      name: 'José R.',
      country: 'Colombia',
      text: 'Me acompañó en cada paso de mi proceso y siempre estuvo disponible para mis dudas. Muy profesional y humana.',
      stars: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250&h=250',
      flag: '🇨🇴'
    },
    {
      id: 'test-3',
      name: 'Ana L.',
      country: 'Venezuela',
      text: 'La asesoría fue muy clara y honesta. Me sentí escuchada y con un plan claro para seguir adelante.',
      stars: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250',
      flag: '🇻🇪'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: '¿Qué es exactamente Asesorías al Migrante?',
      answer: 'Asesorías al Migrante es una firma de asesoría jurídica migratoria fundada por la abogada Daniela Harrington. Brindamos orientación personalizada para procesos migratorios de distintos países, ayudando a las personas a comprender sus opciones legales y tomar decisiones informadas.'
    },
    {
      id: 'faq-2',
      question: '¿Daniela Harrington es abogada licenciada?',
      answer: 'Sí. Daniela Harrington es abogada graduada de la Universidad Bicentenaria de Aragua (Maracay, estado Aragua, Venezuela) y cuenta con formación especializada, incluyendo una Especialización en Derecho Internacional Penal en la Universidad Latinoamericana y del Caribe (ULAC).'
    },
    {
      id: 'faq-3',
      question: '¿Qué incluye la asesoría jurídica migratoria?',
      answer: 'Incluye el análisis personalizado de tu caso, revisión de documentos cuando corresponda, explicación de requisitos y una estrategia jurídica adaptada a tus objetivos.'
    },
    {
      id: 'faq-4',
      question: '¿En qué países brindan asesoría migratoria?',
      answer: 'Asesoramos procesos relacionados con Estados Unidos, Canadá, Australia, España, Portugal, Italia, otros países de Europa y diversos países de Latinoamérica.'
    },
    {
      id: 'faq-5',
      question: '¿Qué documentos debo tener preparados?',
      answer: 'Pasaporte o documento de identidad y, si ya existe un trámite, toda la documentación relacionada con tu caso.'
    }
  ];

  const handleOpenBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleOpenBookingGeneral = () => {
    setSelectedServiceId('quiero-migrar');
    setIsBookingOpen(true);
  };

  const handleNavigateToPage = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    if (sectionId) {
      setPendingScrollSection(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToServicesTab = (serviceTabId: string) => {
    setSelectedServiceTab(serviceTabId);
    setCurrentPage('services-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentPage === 'home' && pendingScrollSection) {
      const timer = setTimeout(() => {
        const element = document.querySelector(pendingScrollSection);
        if (element) {
          const offset = 80; // height of the header
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setPendingScrollSection(null);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentPage, pendingScrollSection]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text relative overflow-x-hidden">
      {/* Background World Map Dotted Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.035] flex items-center justify-center select-none overflow-hidden">
        <img
          src={worldMapDots}
          className="w-full h-full max-w-7xl object-contain text-brand-accent transform scale-110 lg:scale-125 translate-y-4"
          alt=""
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Navigation */}
      <Navbar
        onOpenBooking={handleOpenBookingGeneral}
        currentPage={currentPage}
        onNavigateToPage={handleNavigateToPage}
      />

      {/* Main Content Sections */}
      <main>
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero onOpenBooking={handleOpenBookingGeneral} heroImage={heroImage} />

            {/* About Me Section */}
            <About
              portraitImage={portraitImage}
              onNavigateToDetail={() => handleNavigateToPage('about-detail')}
            />

            {/* Services Section */}
            <Services
              services={services}
              onSelectService={handleOpenBookingWithService}
              onNavigateToDetail={handleNavigateToServicesTab}
            />

            {/* Process Section */}
            <Process
              steps={steps}
              onNavigateToDetail={() => handleNavigateToPage('process-detail')}
            />

            {/* Testimonials Section */}
            <Testimonials testimonials={testimonials} />

            {/* FAQ Section */}
            <FAQ
              faqItems={faqItems}
              onNavigateToDetail={() => handleNavigateToPage('faq-detail')}
            />
          </>
        )}

        {currentPage === 'about-detail' && (
          <AboutDetail
            portraitImage={portraitImage}
            onNavigateHome={() => handleNavigateToPage('home')}
            onOpenBooking={handleOpenBookingGeneral}
          />
        )}

        {currentPage === 'services-detail' && (
          <ServicesDetail
            services={services}
            defaultTabId={selectedServiceTab}
            onNavigateHome={() => handleNavigateToPage('home')}
            onOpenBooking={handleOpenBookingWithService}
          />
        )}

        {currentPage === 'process-detail' && (
          <ProcessDetail
            onNavigateHome={() => handleNavigateToPage('home')}
            onOpenBooking={handleOpenBookingGeneral}
          />
        )}

        {currentPage === 'faq-detail' && (
          <FAQDetail
            onNavigateHome={() => handleNavigateToPage('home')}
            onOpenBooking={handleOpenBookingGeneral}
          />
        )}
      </main>

      {/* Footer Section */}
      <Footer onOpenBooking={handleOpenBookingGeneral} />

      {/* Booking Calendar Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        services={services}
        selectedServiceId={selectedServiceId}
      />
    </div>
  );
}
