import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  currentPage: string;
  onNavigateToPage: (page: string, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, currentPage, onNavigateToPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Preguntas', href: '#preguntas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (currentPage !== 'home') {
      onNavigateToPage('home', href);
    } else {
      const element = document.querySelector(href);
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
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-blue/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3'
          : 'bg-brand-blue border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="flex-shrink-0 flex items-center">
            <Logo variant="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm font-medium tracking-wide text-zinc-200 hover:text-brand-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-brand-accent text-brand-blue hover:bg-[#d9a944] rounded-lg text-xs font-semibold uppercase tracking-widest hover:shadow-[0_4px_20px_rgba(200,154,60,0.25)] hover:translate-y-[-1px] active:translate-y-0 transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              Agendar asesoría
              <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-200 hover:text-brand-accent hover:bg-white/5 transition-all"
            aria-label="Alternar menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-blue border-b border-white/10 shadow-2xl">
          <nav className="px-4 pt-2 pb-6 space-y-3">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-3 py-2.5 rounded-xl text-base font-semibold text-zinc-200 hover:text-brand-accent hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-brand-accent text-brand-blue hover:bg-[#d9a944] rounded-xl text-sm font-bold tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              Agendar asesoría
              <ArrowUpRight className="w-4.5 h-4.5" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
