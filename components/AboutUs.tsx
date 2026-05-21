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

        {/* Perfiles del Equipo - Con links a Instagram */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Perfil Anny */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="relative h-80 bg-gradient-to-br from-brand-pink/20 to-brand-teal/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👩‍🎨</div>
                <div className="text-brand-pink text-5xl font-bold mb-2">Anny</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Anny Barajas</h3>
              <p className="text-brand-pink font-semibold mb-3">Soñadora, Fundadora y Creadora</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                El corazón de Inevitable. La perfeccionista detrás de cada diseño y detalle. Si algo no está perfecto, no sale del taller.
              </p>
              <a
                href="https://www.instagram.com/annybarajas05/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 w-full justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@annybarajas05</span>
              </a>
            </div>
          </div>

          {/* Perfil Mario */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="relative h-80 bg-gradient-to-br from-brand-teal/20 to-brand-pink/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍💼</div>
                <div className="text-brand-teal text-5xl font-bold mb-2">Mario</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mario Jácome</h3>
              <p className="text-brand-teal font-semibold mb-3">Marketing y Soporte al Emprendedor</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Llegó a la vida de Inevitable y se enamoró del proyecto. Se encarga del marketing y de dar soporte a quienes compran las plantillas.
              </p>
              <a
                href="https://www.instagram.com/mjacomeoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 w-full justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
