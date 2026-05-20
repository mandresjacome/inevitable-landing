import Image from 'next/image';
import { CONFIG } from '@/lib/constants';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 rounded-full px-4 py-2 mb-4">
            <span className="text-brand-teal text-sm font-semibold uppercase tracking-wide">
              Nuestra Historia
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Más que plantillas, diseñamos
            <br />
            <span className="text-brand-teal">momentos inevitables</span> ✨
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Llevamos años creando recuerdos reales con nuestras manos.
            <br />
            Hoy, queremos ayudarte a hacer lo mismo.
          </p>
        </div>

        {/* Copy Principal */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-l-4 border-brand-pink">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Durante el último año, decidimos <strong>dejar nuestras redes en pausa</strong> porque hemos estado
              con las manos llenas en el taller en Bucaramanga, diseñando e imprimiendo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ahora, compartimos <span className="font-semibold text-brand-teal">las mismas plantillas que nosotros usamos para facturar</span>.
              No es un archivo digital improvisado, es un <strong className="text-brand-pink">producto probado</strong>.
            </p>
          </div>
        </div>

        {/* Perfiles del Equipo */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Perfil Anny */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-80 bg-gradient-to-br from-brand-pink/20 to-brand-teal/20">
              {/* Placeholder - Reemplazar con foto de Anny */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">👩‍🎨</div>
                  <p className="text-gray-600 font-medium">Foto de Anny</p>
                  <p className="text-sm text-gray-500 mt-1">
                    /public/images/anny.webp
                  </p>
                </div>
              </div>
              {/* Cuando tengas la imagen:
              <Image
                src="/images/anny.webp"
                alt="Anny - Fundadora de Inevitable"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              */}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Anny</h3>
              <p className="text-brand-pink font-semibold mb-3">Fundadora y Mente Creativa</p>
              <p className="text-gray-600 leading-relaxed">
                La perfeccionista detrás de cada diseño y detalle. Si algo no está perfecto, no sale del taller.
              </p>
            </div>
          </div>

          {/* Perfil Mario */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-80 bg-gradient-to-br from-brand-teal/20 to-brand-pink/20">
              {/* Placeholder - Reemplazar con foto de Mario */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">👨‍💼</div>
                  <p className="text-gray-600 font-medium">Foto de Mario</p>
                  <p className="text-sm text-gray-500 mt-1">
                    /public/images/mario.webp
                  </p>
                </div>
              </div>
              {/* Cuando tengas la imagen:
              <Image
                src="/images/mario.webp"
                alt="Mario - Gestión de Inevitable"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              */}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mario</h3>
              <p className="text-brand-teal font-semibold mb-3">Gestión y Soporte al Emprendedor</p>
              <p className="text-gray-600 leading-relaxed">
                El encargado de que todo funcione y de dar soporte a quienes compran las plantillas.
              </p>
            </div>
          </div>
        </div>

        {/* Galería del Taller */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Fotos reales de nuestro taller en Piedecuesta
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Placeholder - Reemplazar con fotos del taller */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📸</div>
                    <p className="text-gray-600 text-sm">
                      Foto {num} del taller
                    </p>
                  </div>
                </div>
                {/* Cuando tengas las imágenes:
                <Image
                  src={`/images/taller-${num}.webp`}
                  alt={`Taller Inevitable ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                */}
              </div>
            ))}
          </div>
        </div>

        {/* CTA a Instagram */}
        <div className="text-center">
          <p className="text-gray-700 mb-4">Síguenos en Instagram para ver más de nuestro trabajo:</p>
          <a
            href={CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>{CONFIG.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
