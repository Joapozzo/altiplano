'use client';

import React from 'react';
import Hero from './components/Hero';
import SalidasDestacadas from './components/SalidaDestacadas'; 
import TiposServicios from './components/TiposServicios';
import Galeria from './components/Galeria';
import ValorAgregado from './components/ValorAgregado';
import QuienesSomos from './components/QuienesSomos';
import CalendarioSalidas from './components/CalendarioSalidas';
// import TipsAventura from './components/TipsAventura';
import FAQsSection from './components/FAQsSection';
// import DisenarExpedicion from './components/DisenarExpedicion';
// import ProximasSalidas from './components/ProximasSalidas';
// import ModalExpedicion from './components/Modals/ModalExpedicionComponent';

export default function TrekkingWebsite() {

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Hero />
      <SalidasDestacadas />
      <CalendarioSalidas/>
      <TiposServicios />
      <Galeria />
      <ValorAgregado />
      <FAQsSection/>
      {/* <TipsAventura/> */}
      <QuienesSomos />
    </div>
  );
}