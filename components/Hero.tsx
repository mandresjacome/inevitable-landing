import CountdownTimer from './CountdownTimer';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F3F0]">
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA - Texto y CTAs */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">

            {/* Título con palabras destacadas */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Sorprende a{' '}
              <span className="text-brand-teal">PAPÁ</span>
              {' '}con el álbum que hará{' '}
              <span className="text-brand-pink">INEVITABLE</span>
              {' '}su sonrisa
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Este Día del Padre 2026, celebra con un álbum personalizado temática Copa Mundial.
              22 láminas con tu familia + momentos históricos del fútbol.
            </p>

            {/* Countdown compacto */}
            <div className="py-4">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-3 font-semibold">
                Cuenta regresiva 🏆
              </p>
              <CountdownTimer />
            </div>

            {/* CTAs - Botones orgánicos */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="#album-fisico"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#15803D] hover:bg-[#166534] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-base"
              >
                Quiero el Álbum
              </a>
              
              <a
                href="#plantilla-digital"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-900 text-base"
              >
                Soy Emprendedor
              </a>
            </div>

            {/* Info rápida */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-600">
              <div>
                <div className="font-bold text-2xl text-brand-teal">29</div>
                <div className="text-xs">Láminas incluidas</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-brand-pink">100%</div>
                <div className="text-xs">Personalizado</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-900">7 días</div>
                <div className="text-xs">Entrega hábiles</div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA - Imagen dominante */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder - cuando tengas la foto real */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-green-50 to-amber-50 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-gray-700 font-bold text-xl mb-2">
                    Foto del Álbum Físico
                  </p>
                  <p className="text-sm text-gray-500">
                    Aquí irá la foto real del álbum<br />dominando toda esta sección
                  </p>
                </div>
              </div>
              
              {/* Cuando tengas la imagen real, reemplaza el div de arriba con esto:
              <Image
                src="/images/album-fisico-hero.webp"
                alt="Álbum del Día del Padre - Inevitable"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              */}
            </div>

            {/* Badge circular flotante estilo "With love" */}
            <div className="absolute top-4 right-4 bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg border-2 border-gray-900">
              <div className="text-center">
                <div className="text-xs font-bold text-gray-900">HECHO</div>
                <div className="text-xs font-bold text-gray-900">CON ❤️</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
