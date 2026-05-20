import { CONFIG, hasPlaceholders } from '@/lib/constants';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Principal */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Marca */}
          <div>
            <Image
              src="/images/inevitable-logo.svg"
              alt="Inevitable - Papelería Creativa"
              width={250}
              height={100}
              className="mb-4"
              priority={false}
            />
            <p className="text-gray-400 mb-4">
              Papelería Creativa desde Piedecuesta, Colombia. Diseñamos momentos inevitables.
            </p>
            <a
              href={CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-pink hover:text-brand-teal transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{CONFIG.instagramHandle}</span>
            </a>
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

          {/* Columna 3: Políticas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <strong className="text-white">Entregas físicas:</strong>
                <br />
                Solo en {CONFIG.zonasEntrega.slice(0, 2).join(', ')}, {CONFIG.zonasEntrega.slice(2).join(' y ')}.
              </li>
              <li className="mt-4">
                <strong className="text-white">Plantillas digitales:</strong>
                <br />
                Envío instantáneo por correo electrónico tras el pago.
              </li>
              <li className="mt-4">
                <strong className="text-white">Soporte:</strong>
                <br />
                WhatsApp disponible para consultas sobre las plantillas.
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Inevitable. Todos los derechos reservados.
            </p>

            {/* Links Legales (opcional para futuro) */}
            <div className="flex gap-4 text-sm text-gray-400">
              <span>Términos y Condiciones</span>
              <span>•</span>
              <span>Política de Privacidad</span>
            </div>
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
