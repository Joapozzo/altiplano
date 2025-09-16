'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AnimatedButton from './ui/Button';
import { useWhatsApp } from '../hooks/useWhatsApp';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Calendario", href: "/#calendario" },
    { title: "Expediciones", href: "/salidas" },
    // { title: "Trekking", href: "/#trekking" },
    // { title: "Montaña", href: "/#montaña" },
    { title: "FAQs", href: "/#faqs" },
    { title: "Conocenos", href: "/#quienes-somos" },

    // { title: "Políticas", href: "#politicas" },
    // { title: "Arma tu Exp", href: "#arma-exp" },
    // { title: "Inscripción", href: "#inscripcion" }
  ];

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Opcionalmente determinar qué sección está activa basado en scroll
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          const id = section.getAttribute('id');
          if (id) setActiveLink(`#${id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
      setActiveLink(href);
    }
  };

  const goToHome = () => {
    router.push("/");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (link: any, e: React.MouseEvent) => {
    // Si el href es una ruta (empieza con "/"), navegar normalmente
    if (link.href.startsWith('/')) {
      router.push(link.href);
      setMobileMenuOpen(false);
      return;
    }

    // Si es un ancla (empieza con "#"), hacer scroll
    e.preventDefault();
    scrollToSection(link.href);
    setMobileMenuOpen(false);
  };

  const { openWhatsApp } = useWhatsApp()

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50 ${scrolled ? 'bg-[var(--color-naranja)] shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 sm:px-8 md:px-15 lg:px-15 py-3">

        {/* Logo Container */}
        <div className="flex-shrink-0">
          <Image
            src="/logos/Logo-Completo-Blanco.svg"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
            onClick={() => goToHome()}
          />
        </div>

        {/* Links Container */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                onClick={(e) => handleNavigation(link, e)}
                className={`text-white font-medium transition-all duration-200 ease-in-out ${activeLink === link.href ? 'text-[var(--color-amarillo)]' : 'hover:text-[var(--color-amarillo)]'}`}
              >
                {link.title}
              </Link>
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-[var(--color-amarillo)] transition-all duration-300 ease-out 
        ${activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></div>
            </div>
          ))}
        </div>

        {/* Botón Contáctanos */}
        <div className="flex-shrink-0 hidden md:block">
          <AnimatedButton size='sm' className='px-7 py-3' hasIcon={false} onClick={() => {
            openWhatsApp();
          }}>
            Contáctanos
          </AnimatedButton>
        </div>

        {/* Mobile Menu Button - con estado */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none z-50 relative"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu Sidebar */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-[var(--color-naranja)] z-40 transition-transform duration-300 ease-in-out shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full pt-20 px-8">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className={`transform transition-all duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className="text-white font-medium text-lg py-3 border-b border-white/20 block transition-all duration-200 hover:text-[var(--color-amarillo)] hover:pl-2"
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
            <div
              className={`mt-8 transform transition-all duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
              style={{ transitionDelay: '600ms' }}
            >
              <button
                className="w-full px-6 py-3 bg-white text-[var(--color-naranja)] rounded-full font-medium hover:bg-[var(--color-amarillo)] hover:text-white transition-all duration-300 shadow-lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;