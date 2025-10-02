import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FloatingTipsWidget from "./components/TipsAventura";
import NavigationWrapper from "./components/NavigationWrapper";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.altiplanoexperience.com'),

  // Títulos optimizados
  title: {
    default: "Altiplano Experience - Expediciones y Trekking en Argentina | Montañismo",
    template: "%s | Altiplano Experience - Trekking Argentina"
  },

  // Descripción optimizada para SEO
  description: "🏔️ Expediciones de trekking y alta montaña en Argentina. Aconcagua, Champaquí, Vallecitos. Guías certificados, grupos reducidos. +10 años de experiencia. ¡Viví tu aventura!",

  // Keywords estratégicas
  keywords: [
    "trekking argentina",
    "expediciones montaña argentina",
    "aconcagua expedicion",
    "champaqui trekking",
    "vallecitos mendoza",
    "turismo aventura argentina",
    "altiplano experience",
    "guias montaña certificados",
    "alta montaña argentina",
    "turismo activo cordoba",
    "expediciones mendoza",
    "trekking cordoba",
    "montañismo argentina",
    "aventura outdoor"
  ],

  // Autor y clasificación
  authors: [{ name: "Altiplano Experience" }],
  creator: "Altiplano Experience",
  publisher: "Altiplano Experience",
  category: "turismo, aventura, trekking, montañismo",

  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph optimizado
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.altiplanoexperience.com/',
    title: 'Altiplano Experience - Expediciones y Trekking en Argentina',
    description: '🏔️ Expediciones de trekking y alta montaña en Argentina. Aconcagua, Champaquí, Vallecitos. Guías certificados, grupos reducidos. ¡Viví tu aventura!',
    siteName: 'Altiplano Experience',
    images: [
      {
        url: '/logos/Logo-Reducido-Naranja.png',
        width: 1200,
        height: 630,
        alt: 'Altiplano Experience - Expediciones de Trekking',
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Altiplano Experience - Expediciones y Trekking en Argentina',
    description: '🏔️ Expediciones de trekking y alta montaña. Aconcagua, Champaquí, Vallecitos. Guías certificados ¡Viví tu aventura!',
    images: ['/logos/Logo-Reducido-Naranja.png'],
    creator: '@altiplanoxp',
    site: '@altiplanoxp',
  },

  icons: {
    icon: '/favicon.ico',
  },

  // Configuración adicional
  manifest: '/manifest.json',

  // Verificación de sitios
  verification: {
    google: 'tu-codigo-google-search-console',
    // yandex: 'tu-codigo-yandex',
    // bing: 'tu-codigo-bing',
  },

  // Configuración de alternates para idiomas (si planeas expandir)
  alternates: {
    canonical: 'https://www.altiplanoexperience.com/',
    languages: {
      'es-AR': 'https://www.altiplanoexperience.com/',
      'es': 'https://www.altiplanoexperience.com//es',
    },
  },

  // Información adicional
  other: {
    'theme-color': '#f59e0b', // Color amber de tu marca
    'color-scheme': 'light',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <head>
        {/* Viewport mejorado */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Theme color para móviles */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />

        {/* Preconnect para optimizar fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Altiplano Experience",
              "description": "Expediciones de trekking y alta montaña en Argentina",
              "url": "https://www.altiplanoexperience.com/",
              "logo": "https://www.altiplanoexperience.com/logos/Logo-Reducido-Naranja.png",
              "telephone": "+549383749-8552",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AR",
                "addressRegion": "Córdoba"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-31.4201",
                "longitude": "-64.1888"
              },
              "sameAs": [
                "https://www.instagram.com/altiplanoxp",
                "https://www.facebook.com/altiplanoxp"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Expediciones de Trekking y Montañismo",
                "areaServed": "Argentina"
              }
            })
          }}
        />
      </head>
      <body className={`${raleway.variable} font-sans antialiased`}>
        <NavigationWrapper>
          <Navbar />
          {children}
          <Footer />
          <FloatingTipsWidget />
          <WhatsAppButton />
        </NavigationWrapper>
      </body>
    </html>
  );
}