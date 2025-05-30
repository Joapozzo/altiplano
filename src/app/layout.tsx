import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://altiplano.com'),
  title: {
    default: "Altiplano Experience - Expediciones y Trekking en Argentina",
    template: "%s | Altiplano Experience"
  },
  description: "Descubrí las montañas argentinas con Altiplano Experience. Expediciones de trekking, alta montaña y aventuras únicas. Guías certificados, grupos reducidos y experiencias inolvidables desde 2015.",
  keywords: [
    "trekking argentina",
    "expediciones montaña", 
    "turismo aventura",
    "altiplano experience"
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://altiplano.com',
    title: 'Altiplano Experience - Expediciones y Trekking en Argentina',
    description: 'Descubrí las montañas argentinas con Altiplano Experience.',
    siteName: 'Altiplano Experience',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}