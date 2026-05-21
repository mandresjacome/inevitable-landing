import Image from 'next/image';
import { CONFIG } from '@/lib/constants';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header limpio */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
            <span className="text-gray-700 text-xs sm:text-sm font-bold uppercase tracking-wide">
              Nuestra Historia
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Más que plantillas, diseñamos{' '}
            <span className="text-brand-teal">momentos inevitables</span> ✨
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Llevamos años creando recuerdos reales con nuestras manos.
            {' '}Hoy, queremos ayudarte a hacer lo mismo.
          </p>
        </div>

        {/* Copy Principal - Más limpio */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 border-l-4 border-brand-pink">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Este último año ha sido intenso. La vida nos llevó por caminos inesperados, pero <strong>la papelería creativa nunca paró</strong>. Cada pedido, cada detalle, cada sonrisa de nuestros clientes nos recordaba por qué hacemos esto.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Trabajamos desde casa, <span className="font-semibold text-brand-teal">con pasión y dedicación en cada diseño</span>. No tenemos un gran taller, pero tenemos algo mejor: el amor por lo que hacemos. Ahora queremos compartir las plantillas que nos han funcionado, para que tú también puedas <strong className="text-brand-pink">crear momentos inevitables</strong>.
            </p>
          </div>
        </div>

        {/* Perfiles del Equipo - Con foto de pareja */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">
          {/* Foto de la Pareja */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/pareja.jpg"
              alt="Anny y Mario - Fundadores de Inevitable"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Descripciones Individuales */}
          <div className="flex flex-col gap-6 justify-center">
            {/* Anny */}
            <div className="bg-gradient-to-br from-brand-pink/10 to-brand-pink/5 rounded-xl p-6 border-l-4 border-brand-pink">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">👩‍🎨</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Anny Barajas</h3>
                  <p className="text-brand-pink font-semibold">Soñadora, Fundadora y Creadora</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                El corazón absoluto de Inevitable. Anny es la perfeccionista detrás de cada linea, corte y detalle. Tiene una regla de oro inquebrantable: si el diseño no la enamora a ella primero, simplemente no sale del taller.
              </p>
              <a
                href="https://www.instagram.com/annybarajas05/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@annybarajas05</span>
              </a>
            </div>

            {/* Mario */}
            <div className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/5 rounded-xl p-6 border-l-4 border-brand-teal">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">👨‍💼</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mario Jácome</h3>
                  <p className="text-brand-teal font-semibold">Marketing y Soporte al Emprendedor</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Llegó a la vida de Inevitable, se enamoró por del proyecto y decidió quedarse para hacer equipo. Él es quien está detrás de la pantalla apoyando en las redes sociales, la tecnología y asegurándose de que todo funcione perfecto en el mundo digital.
              </p>
              <a
                href="https://www.instagram.com/mjacomeoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@mjacomeoficial</span>
              </a>
            </div>
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
