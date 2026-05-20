import CountdownTimer from './CountdownTimer';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Degradado de fondo con colores de marca */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('/images/soccer-pattern.svg')] opacity-5" />
      </div>
      
      {/* Overlay con efectos de luz */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl" />
      
      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge del Mundial 2026 */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="text-2xl">⚽</span>
          <span className="text-white text-sm font-medium">FIFA World Cup 2026 Edition</span>
        </div>
        
        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          ¡El Mundial 2026 se respira en el aire
          <br />
          y <span className="text-brand-teal">Papá es el capitán</span> del equipo!
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto">
          Este Día del Padre, sorpréndelo con el <span className="font-semibold text-brand-pink">Álbum Oficial de tu Familia</span>
          {' '}o <span className="font-semibold text-brand-teal">factura en grande</span> vendiéndolo en tu emprendimiento.
        </p>
        
        {/* Countdown Timer */}
        <div className="mb-12">
          <p className="text-white text-sm uppercase tracking-wider mb-4 font-medium">
            Cuenta regresiva al Día del Padre 🏆
          </p>
          <CountdownTimer />
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
          {/* CTA B2C */}
          <a
            href="#album-fisico"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              <span>🏠</span>
              <span>Quiero el Álbum Físico</span>
            </span>
            <span className="block text-xs text-white/90 mt-1">
              (Bucaramanga y Área Metropolitana)
            </span>
          </a>
          
          {/* CTA B2B */}
          <a
            href="#plantilla-digital"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-brand-pink text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              <span>💼</span>
              <span>Soy Emprendedor: Quiero la Plantilla</span>
            </span>
            <span className="block text-xs text-white/90 mt-1">
              (Vende en todo el mundo)
            </span>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-white/60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
