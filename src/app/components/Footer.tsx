import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

// Subcomponente para la información de la empresa
const EmpresaInfo = () => {
    return (
        <div>
            <Image
                src="/logos/Logo-Completo-Blanco.svg"
                alt="logo"
                width={140}
                height={40}
                className="mb-4"
            />
            <p className="text-gray-400 mb-4">
                Expediciones y aventuras de montaña en Argentina. Conectando personas con la naturaleza desde 2015.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition">
                    <span className="sr-only">Facebook</span>
                    <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition">
                    <span className="sr-only">Instagram</span>
                    <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition">
                    <span className="sr-only">YouTube</span>
                    <Youtube size={20} />
                </a>
            </div>
        </div>
    );
};

// Subcomponente para enlaces rápidos
const EnlacesRapidos = () => {
    const enlaces = [
        { title: "Calendario", href: "#calendario" },
        { title: "Expediciones", href: "#expediciones" },
        { title: "Trekking", href: "#trekking" },
        { title: "Montaña", href: "#montaña" },
        { title: "FAQs", href: "#faqs" },
        { title: "Conocenos", href: "#quienes-somos" },
    ];

    return (
        <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
                {enlaces.map((enlace, index) => (
                    <li key={index}>
                        <a href={enlace.href} className="text-gray-400 hover:text-white transition">
                            {enlace.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Subcomponente para destinos populares
const DestinosPopulares = () => {
    const destinos = [
        "Cerro Champaquí",
        "El Chaltén",
        "Vallecitos",
        "Quebrada del Condorito",
        "Tafí del Valle"
    ];

    return (
        <div>
            <h4 className="font-bold text-lg mb-4">Destinos Populares</h4>
            <ul className="space-y-2">
                {destinos.map((destino, index) => (
                    <li key={index}>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            {destino}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Subcomponente para información de contacto
const ContactoInfo = () => {
    const contactos = [
        { icono: MapPin, texto: "Córdoba, Argentina" },
        { icono: Phone, texto: "+54 9 3837 49-8552" },
        { icono: Mail, texto: "info@altiplano.com" }
    ];

    return (
        <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
                {contactos.map((contacto, index) => (
                    <li key={index} className="flex items-center">
                        <div className="bg-gray-800 p-2 rounded-full mr-4 flex items-center justify-center">
                            {React.createElement(contacto.icono, { size: 18, className: "text-amber-500" })}
                        </div>
                        <span>{contacto.texto}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Componente principal
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8" id='footer'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <EmpresaInfo />
                    <EnlacesRapidos />
                    <DestinosPopulares />
                    <ContactoInfo />
                </div>

            </div>
            <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>&copy; 2025 Altiplano Experience. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;