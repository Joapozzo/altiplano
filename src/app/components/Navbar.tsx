'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Servicios", href: "#servicios" },
    { title: "Salidas", href: "#salidas" },
    { title: "Arma tu Exp", href: "#arma-exp" },
    { title: "Quiénes Somos", href: "#quienes-somos" },
    { title: "Políticas", href: "#politicas" },
    { title: "Inscripción", href: "#inscripcion" }
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-[var(--color-naranja)] shadow-lg py-3' : 'bg-transparent py-4'
        }`}
    >
      {/* Logo Container */}
      <div className="flex-shrink-0">
        <Image
          src="/logos/Logo-Completo-Blanco.svg"
          alt="Logo"
          width={120}
          height={40} // Ajustá según el alto real del logo
          className="object-contain"
        />
      </div>

      {/* Links Container */}
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <div key={link.href} className="relative group">
            <Link
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`text-white font-medium transition-all duration-200 ease-in-out ${activeLink === link.href ? 'text-[var(--color-amarillo)]' : 'hover:text-[var(--color-amarillo)]'
                }`}
            >
              {link.title}
            </Link>
            {/* Línea de hover/active que se hace más gruesa */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-[var(--color-amarillo)] transition-all duration-300 ease-out 
              ${activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
            ></div>
          </div>
        ))}
      </div>

      {/* Botón Contáctanos */}
      <div className="flex-shrink-0 hidden md:block">
        <button
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105 
    ${scrolled ?
              'bg-white text-[var(--color-naranja)] hover:bg-[var(--color-amarillo)] hover:text-white' :
              'bg-[var(--color-naranja)] text-white hover:bg-[var(--color-naranja-200)]'
            }`}
        >
          Contáctanos
        </button>
      </div>

      {/* Mobile Menu Button - con estado */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (hidden por defecto) */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[var(--color-naranja)] py-4 shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
      >
        <div className="flex flex-col space-y-4 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
                setMobileMenuOpen(false);
              }}
              className="text-white font-medium py-2 transition-all duration-200 hover:text-[var(--color-amarillo)]"
            >
              {link.title}
            </Link>
          ))}
          <button className="w-full mt-4 px-6 py-2 bg-white text-[var(--color-naranja)] rounded-full font-medium hover:bg-[var(--color-amarillo)] hover:text-white transition-all duration-300">
            Contáctanos
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;