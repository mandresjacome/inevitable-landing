'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'plantilla' | 'album' | 'general';
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    // Preguntas sobre Plantilla Digital (B2B) - Prioridad SEO
    {
      category: 'plantilla',
      question: '¿Qué programa necesito para editar la plantilla del álbum del Día del Padre?',
      answer: 'Solo necesitas Canva GRATUITO. No requieres Canva Pro ni ningún programa adicional. La plantilla está diseñada para funcionar perfectamente con la versión gratuita de Canva. Es 100% Drag & Drop: arrastras las fotos y listo.',
    },
    {
      category: 'plantilla',
      question: '¿Puedo vender el álbum físico si compro esta plantilla?',
      answer: '¡Sí! Ese es exactamente el objetivo. Compras la plantilla por $6 USD y puedes vender álbumes físicos impresos a tus clientes a cualquier precio que definas. No hay límite de ventas ni regalías adicionales. Es tuya para usar comercialmente sin restricciones.',
    },
    {
      category: 'plantilla',
      question: '¿Cuántas láminas incluye el archivo editable?',
      answer: 'Recibes el sistema completo: Plantilla del álbum base + 3 plantillas base que generan las 29 láminas personalizables + plantilla del sobre. Además, se incluyen las plantillas de los items del combo físico según se defina (mug, cuadro, fixture, etc.). Todo 100% editable en Canva.',
    },
    {
      category: 'plantilla',
      question: '¿Cómo recibo la plantilla después del pago?',
      answer: 'La entrega es INSTANTÁNEA por enlace de Canva después de confirmar tu pago por WhatsApp. No hay esperas. Recibes el enlace directo, lo abres en tu cuenta de Canva, haces clic en "Usar plantilla" y ya puedes empezar a editar y vender inmediatamente.',
    },
    {
      category: 'plantilla',
      question: '¿La plantilla funciona en cualquier país?',
      answer: 'Sí, la plantilla es 100% digital y funciona en TODO EL MUNDO. No hay restricciones geográficas. Puedes comprarla desde Colombia, México, España, Argentina, USA o cualquier país, y vender tus álbumes localmente sin problema.',
    },
    {
      category: 'plantilla',
      question: '¿Cuánto tiempo tengo para aprovechar esta plantilla?',
      answer: 'El Día del Padre en Colombia es el 21 de junio de 2026, pero la temática del Mundial 2026 está HOY en su pico de demanda. Entre más pronto empieces a ofrecer este producto, más clientes podrás captar. La plantilla es tuya de por vida.',
    },
    // Preguntas sobre Álbum Físico (B2C)
    {
      category: 'album',
      question: '¿Dónde entregan el álbum físico?',
      answer: 'Las entregas del álbum físico son EXCLUSIVAS en Bucaramanga, Piedecuesta, Floridablanca y Girón (Área Metropolitana de Bucaramanga). Si estás fuera de esta zona y quieres vender álbumes en tu ciudad, compra la plantilla digital.',
    },
    {
      category: 'album',
      question: '¿Cuánto tiempo demora la entrega del álbum físico?',
      answer: 'El álbum físico se entrega en 7 días hábiles después de recibir tu pedido por WhatsApp y confirmar las fotos de tu familia. Trabajamos cada álbum con dedicación para garantizar calidad perfecta.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas-frecuentes" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
            <span className="text-gray-700 text-xs sm:text-sm font-bold uppercase tracking-wide">
              Preguntas Frecuentes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            ¿Tienes dudas?{' '}
            <span className="text-brand-teal">Aquí las resolvemos</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Las preguntas más comunes sobre la plantilla digital y el álbum físico
          </p>
        </div>

        {/* Sección Plantilla Digital */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-2xl">💼</span>
            Sobre la Plantilla Digital (Para Emprendedores)
          </h3>
          <div className="space-y-3">
            {faqs
              .filter((faq) => faq.category === 'plantilla')
              .map((faq, index) => {
                const globalIndex = faqs.indexOf(faq);
                return (
                  <div
                    key={globalIndex}
                    className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-100 hover:border-brand-teal transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                    >
                      <span className="font-bold text-gray-900 text-base sm:text-lg">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          openIndex === globalIndex ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openIndex === globalIndex && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Sección Álbum Físico */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            Sobre el Álbum Físico (Para Familias)
          </h3>
          <div className="space-y-3">
            {faqs
              .filter((faq) => faq.category === 'album')
              .map((faq, index) => {
                const globalIndex = faqs.indexOf(faq);
                return (
                  <div
                    key={globalIndex}
                    className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-100 hover:border-brand-pink transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                    >
                      <span className="font-bold text-gray-900 text-base sm:text-lg">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          openIndex === globalIndex ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openIndex === globalIndex && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-br from-brand-teal/10 to-brand-pink/10 rounded-2xl p-8 sm:p-12 border-2 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿Aún tienes preguntas?
            </h3>
            <p className="text-gray-700 mb-6">
              Escríbenos por WhatsApp y te respondemos en minutos
            </p>
            <a
              href={`https://wa.me/573159288237?text=${encodeURIComponent(
                'Hola, tengo una pregunta sobre la plantilla/álbum del Día del Padre'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
