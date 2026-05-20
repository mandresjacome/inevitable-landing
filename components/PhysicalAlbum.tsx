import Image from 'next/image';
import { CONFIG, getWhatsAppLink } from '@/lib/constants';

export default function PhysicalAlbum() {
  const features = [
    {
      icon: '👨‍👩‍👧‍👦',
      title: '22 Láminas 100% personalizadas',
      description: 'Con las fotos de tu familia en las canchas más icónicas',
    },
    {
      icon: '⚽',
      title: '6 Láminas históricas',
      description: 'Momentos épicos del fútbol mundial que papá recordará',
    },
    {
      icon: '✨',
      title: '1 Lámina Extra Sticker',
      description: 'Una sorpresa especial que hará brillar el álbum',
    },
    {
      icon: '💎',
      title: 'Láminas Holográficas',
      description: 'Efectos premium que le dan ese toque profesional',
    },
  ];

  return (
    <section id="album-fisico" className="py-20 bg-gradient-to-br from-amber-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">
              Para Familias • Bucaramanga y AMB
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            El Mejor Fichaje de <span className="text-amber-600">Nuestra Familia</span> ⚽
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Este álbum es solo una excusa para recordarle a papá que es el <strong className="text-green-700">campeón de nuestro equipo</strong>.
            {' '}¡Hoy la Copa del Mundo en casa se la lleva él!
          </p>
        </div>

        {/* Grid de Contenido */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Columna de imagen (placeholder) */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-2xl overflow-hidden">
              {/* Placeholder - Reemplazar con imagen real del álbum */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-gray-600 font-medium">
                    Imagen del Álbum Físico
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Reemplaza con foto real en /public/images/album-fisico.webp
                  </p>
                </div>
              </div>
              {/* Cuando tengas la imagen:
              <Image
                src="/images/album-fisico.webp"
                alt="Álbum Físico del Día del Padre - Inevitable"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              */}
            </div>
          </div>

          {/* Columna de Features */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Alineación Titular de 29 Láminas:
            </h3>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zona de entregas */}
        <div className="bg-amber-600 text-white rounded-xl p-6 mb-8 text-center">
          <p className="flex items-center justify-center gap-2 text-lg font-medium">
            <span className="text-2xl">📍</span>
            <span>
              Entregas exclusivas en <strong>{CONFIG.zonasEntrega.join(', ')}</strong>
            </span>
          </p>
        </div>

        {/* Precio y CTA */}
        <div className="text-center">
          <div className="mb-6">
            <p className="text-gray-600 text-lg mb-2">Precio especial:</p>
            <p className="text-5xl font-bold text-amber-600">{CONFIG.precioAlbum}</p>
          </div>
          
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Pedir por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
