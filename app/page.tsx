import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        {/* Fondo de fallback oscuro */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        {/* Imagen de fondo - se superpone si existe */}
        <div className="absolute inset-0">
          <Image
            src="/image.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Site under Construction
        </h1>

        {/* Subtítulo */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 font-light">
          New website coming soon.
        </p>

        {/* Sección de Instagram */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-2">
            Follow my Instagram for updates:
          </p>
          
          {/* CTA de Instagram */}
          <a
            href="https://instagram.com/neekotamashiro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
          >
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg sm:text-xl md:text-2xl font-semibold">
              @Neekotamashiro
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}

