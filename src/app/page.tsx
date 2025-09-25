'use client';

import React from 'react';
import Hero from './components/Hero';
import SalidasDestacadas from './components/SalidaDestacadas'; 
import TiposServicios from './components/TiposServicios';
import Galeria from './components/Galeria';
import ValorAgregado from './components/ValorAgregado';
import QuienesSomos from './components/QuienesSomos';
import CalendarioSalidas from './components/CalendarioSalidas';
import FAQsSection from './components/FAQsSection';

export default function TrekkingWebsite() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Hero />
      
      <main className="w-full">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <SalidasDestacadas />
          <CalendarioSalidas />
          <TiposServicios />
        </div>
        
        <Galeria />
        
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <ValorAgregado />
          <FAQsSection />
          <QuienesSomos />
        </div>
        
      </main>
    </div>
  );
}