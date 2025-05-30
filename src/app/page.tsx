'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SalidasDestacadas from './components/SalidaDestacadas'; 
import TiposServicios from './components/TiposServicios';
import ProximasSalidas from './components/ProximasSalidas';
import Galeria from './components/Galeria';
import ValorAgregado from './components/ValorAgregado';
import DisenarExpedicion from './components/DisenarExpedicion';
import QuienesSomos from './components/QuienesSomos';
import Footer from './components/Footer';
import ModalExpedicion from './components/Modals/ModalExpedicionComponent';

// Componente principal de la página
export default function TrekkingWebsite() {
  // Estados para el modal y formulario
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  // Manejadores de eventos
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Formulario enviado correctamente');
    setShowModal(false);
    // Resetear formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Componentes principales de la página */}
      <Navbar />
      <Hero />
      <SalidasDestacadas />
      <TiposServicios />
      <ProximasSalidas />
      <Galeria />
      <ValorAgregado />
      <DisenarExpedicion onToggleModal={toggleModal} />
      <QuienesSomos />
      <Footer />

      {/* Modal para diseñar expedición */}
      <ModalExpedicion
        showModal={showModal}
        onClose={toggleModal}
        formData={formData}
        onFormChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}