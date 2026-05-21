import { CONFIG, hasPlaceholders } from '@/lib/constants';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Principal */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          {/* Columna 1: Marca */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/inevitable-logo.png"
              alt="Inevitable - Papelería Creativa"
              width={280}
              height={168}
              className="mb-6 w-full max-w-[180px] sm:max-w-[220px] h-auto brightness-0 invert"
              priority={false}
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Papelería Creativa desde Piedecuesta, Colombia. Diseñamos momentos inevitables.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#album-fisico" className="text-gray-400 hover:text-brand-teal transition-colors duration-300">
                  Álbum Físico
                </a>
              </li>
              <li>
                <a href="#plantilla-digital" className="text-gray-400 hover:text-brand-teal transition-colors duration-300">
                  Plantilla Digital
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-brand-teal transition-colors duration-300">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <strong className="text-white">Entregas físicas:</strong>
                <br />
                Solo en Bucaramanga y área metropolitana.
              </li>
              <li className="mt-4">
                <strong className="text-white">Plantillas digitales:</strong>
                <br />
                Entrega instantánea por enlace de Canva.
              </li>
              <li className="mt-4">
                <strong className="text-white">Soporte:</strong>
                <br />
                WhatsApp para consultas sobre las plantillas.
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Inevitable. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Nota para desarrolladores */}
        {hasPlaceholders() && (
          <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <p className="text-yellow-500 text-sm text-center">
              ⚠️ <strong>DEV MODE:</strong> Algunos placeholders aún no han sido reemplazados. 
              Revisa <code className="bg-black/30 px-2 py-1 rounded">lib/constants.ts</code> antes del deploy.
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
