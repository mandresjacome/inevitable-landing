import Image from 'next/image';
import { CONFIG } from '@/lib/constants';

export default function DigitalTemplate() {
  const includes = [
    {
      icon: '📦',
      title: 'Plantilla completa del álbum (29 láminas)',
      highlight: false,
    },
    {
      icon: '🎨',
      title: 'Diseño del empaque/sobre y la "Extra Sticker"',
      highlight: false,
    },
    {
      icon: '✏️',
      title: '100% editable en Canva gratuito (Drag & Drop)',
      highlight: true,
    },
    {
      icon: '🎁',
      title: 'SÚPER BONO: Plantilla versión 2025 de REGALO',
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
    <section id="plantilla-digital" className="py-20 bg-gradient-to-br from-violet-50 via-pink-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-100 rounded-full px-4 py-2 mb-4">
            <span className="text-violet-600 text-sm font-semibold uppercase tracking-wide">
              Para Emprendedores • Global 🌍
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ¡Factura en grande este <span className="text-violet-600">Día del Padre</span> con el producto
            <span className="text-brand-pink"> estrella de la temporada!</span> 🚀
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            La temática futbolera va a ser <strong>la más pedida</strong>. ¡No pierdas horas diseñando desde cero!
            {' '}Adquiere nuestra plantilla oficial 100% editable en Canva y empieza a vender hoy mismo.
          </p>
        </div>

        {/* Beneficios Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{benefit.emoji}</div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
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
            <div className="bg-gradient-to-r from-brand-teal to-brand-pink p-6 rounded-xl text-white">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">✅</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Garantía Inevitable</h4>
                  <p className="text-white/90">
                    Soporte directo por WhatsApp si tienes dudas usando Canva. No te dejamos sol@.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de imagen (placeholder) */}
          <div className="order-first lg:order-last">
            <div className="relative aspect-square bg-gradient-to-br from-violet-100 to-pink-200 rounded-2xl shadow-2xl overflow-hidden">
              {/* Placeholder - Reemplazar con mockup de la plantilla en Canva */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-gray-600 font-medium">
                    Mockup de Plantilla en Canva
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Reemplaza con screenshot en /public/images/plantilla-digital.webp
                  </p>
                </div>
              </div>
              {/* Cuando tengas la imagen:
              <Image
                src="/images/plantilla-digital.webp"
                alt="Plantilla Digital editable en Canva - Inevitable"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              */}
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
        <div className="text-center">
          <div className="mb-6">
            <p className="text-gray-600 text-lg mb-2">Inversión para tu negocio:</p>
            <p className="text-5xl font-bold text-violet-600">{CONFIG.precioPlantilla}</p>
            <p className="text-sm text-gray-500 mt-2">Pago único • Acceso inmediato</p>
          </div>
          
          <a
            href={CONFIG.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-brand-pink hover:from-violet-700 hover:to-pink-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>💳</span>
            <span>Comprar Plantilla Ahora</span>
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            Pago 100% seguro • Entrega instantánea por correo electrónico
          </p>
        </div>
      </div>
    </section>
  );
}
