'use client';

import { useState } from 'react';
import { CONFIG, getWhatsAppLink } from '@/lib/constants';

export default function DigitalTemplate() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/laminabase1.png',
      title: 'Plantilla Base de 22 Láminas Personalizadas',
      description: 'Sistema completo para personalizar con fotos de familias',
    },
    {
      image: '/images/laminabase2.png',
      title: 'Plantilla Extra Sticker',
      description: 'Lámina especial para sorprender',
    },
    {
      image: '/images/laminabase3.png',
      title: 'Plantillas Especiales',
      description: 'Láminas holográficas y momentos históricos',
    },
    {
      image: '/images/albumbase4.png',
      title: 'Plantilla Base del Álbum en Canva',
      description: 'Screenshot del proyecto completo editable',
    },
    {
      image: '/images/sobre.png',
      title: 'Plantilla del Sobre',
      description: 'Diseño del sobre para entregar las láminas',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const includes = [
    {
      icon: '📦',
      title: 'Sistema de plantillas completo del álbum (plantilla álbum + 3 plantillas base para 29 láminas + plantilla de sobre)',
      highlight: false,
    },
    {
      icon: '✏️',
      title: '100% editable en Canva gratuito (Drag & Drop)',
      highlight: false,
    },
    {
      icon: '🎁',
      title: 'Plantilla versión 2025 de REGALO',
      highlight: false,
    },
    {
      icon: '✨',
      title: 'SÚPER BONO: Diseños del combo completo (ej: mug, cuadro, fixture, etc.) según se defina',
      highlight: true,
    },
  ];

  const benefits = [
    {
      emoji: '⚡',
      title: 'Listo para vender HOY',
      description: 'No pierdas tiempo diseñando desde cero',
    },
    {
      emoji: '🌍',
      title: 'Vende en todo el mundo',
      description: 'Sin restricciones geográficas',
    },
    {
      emoji: '💰',
      title: 'Alta demanda garantizada',
      description: 'La temática futbolera será la más pedida',
    },
    {
      emoji: '🛠️',
      title: 'Fácil de personalizar',
      description: 'Canva gratuito, sin experiencia requerida',
    },
  ];

  return (
    <section id="plantilla-digital" className="py-16 sm:py-24 bg-[#F5F3F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header limpio */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-gray-700 text-xs sm:text-sm font-bold uppercase tracking-wide">
              Para Emprendedores • Global 🌍
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Factura en grande este{' '}
            <span className="text-brand-pink">Día del Padre</span>
            {' '}con el producto{' '}
            <span className="text-brand-teal">estrella de la temporada</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            La temática futbolera va a ser <strong className="text-gray-900">la más pedida</strong>. ¡No pierdas horas diseñando desde cero!
            {' '}Adquiere nuestra plantilla oficial 100% editable en Canva y empieza a vender hoy mismo.
          </p>
        </div>

        {/* Beneficios Grid - Más limpio */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl"
            >
              <div className="text-4xl mb-3">{benefit.emoji}</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{benefit.title}</h3>
              <p className="text-xs text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Grid de Contenido */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Columna de Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Lo que obtienes al comprar:
            </h3>
            {includes.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 p-5 rounded-lg shadow-md transition-all duration-300 ${
                  item.highlight
                    ? 'bg-gradient-to-r from-violet-100 to-pink-100 border-2 border-violet-300'
                    : 'bg-white hover:shadow-lg'
                }`}
              >
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div className="flex items-center">
                  <p className={`font-medium ${item.highlight ? 'text-violet-900' : 'text-gray-800'}`}>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

            {/* Garantía */}
            <div className="bg-gray-50 border-2 border-gray-900 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">✅</div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900">Garantía Inevitable</h4>
                  <p className="text-gray-700">
                    Soporte directo por WhatsApp si tienes dudas usando Canva. No te dejamos sol@.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Carrusel */}
          <div className="order-first lg:order-last">
            <div className="relative aspect-square bg-gradient-to-br from-violet-100 to-pink-200 rounded-2xl shadow-2xl overflow-hidden">
              {/* Imagen del carrusel */}
              <div className="relative w-full h-full">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-contain p-2 sm:p-4"
                />
                
                {/* Logo de Inevitable como marca de agua centrada */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src="/images/inevitable-logo.png"
                    alt="Inevitable"
                    className="w-48 h-48 sm:w-64 sm:h-64 object-contain opacity-20"
                  />
                </div>
              </div>

              {/* Botones de navegación */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Anterior"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Siguiente"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicadores de puntos */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Descripción de la imagen actual */}
            <div className="mt-6 text-center">
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                {slides[currentSlide].title}
              </h4>
              <p className="text-sm text-gray-600">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>

        {/* Alcance Global */}
        <div className="bg-violet-600 text-white rounded-xl p-6 mb-8 text-center">
          <p className="flex items-center justify-center gap-2 text-lg font-medium">
            <span className="text-2xl">🌍</span>
            <span>
              <strong>Sin restricciones geográficas.</strong> Vende en tu ciudad, país o en todo el mundo.
            </span>
          </p>
        </div>

        {/* Precio y CTA */}
        <div className="text-center px-4">
          <div className="mb-8">
            <p className="text-gray-600 text-sm sm:text-base mb-2 font-medium">Inversión para tu negocio:</p>
            <p className="text-4xl sm:text-5xl font-bold text-gray-900">{CONFIG.precioPlantilla}</p>
            <p className="text-sm text-gray-500 mt-2">Pago único • Acceso inmediato por Canva</p>
          </div>
          
          <a
            href={getWhatsAppLink(CONFIG.whatsappMessagePlantilla)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <span className="text-xl">📱</span>
            <span>Comprar por WhatsApp</span>
          </a>
          
          <p className="text-xs text-gray-500 mt-4 max-w-md mx-auto">
            🇨🇴 Colombia: Pago por llave bre-b • 🌎 Internacional: PayPal
          </p>
        </div>
      </div>
    </section>
  );
}
