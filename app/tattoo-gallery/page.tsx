"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Configuración de las filas de imágenes
const galleryRows = [
  {
    images: [
      { name: "TATUAJES NEKO-11", span: 1 },
      { name: "TATUAJES NEKO-72", span: 1 },
      { name: "TATUAJES NEKO-54", span: 1 },
      { name: "TATUAJES NEKO-56", span: 1 },
    ],
  },
  {
    images: [
      { name: "TATUAJES NEKO-51", span: 1 },
      { name: "TATUAJES NEKO-55", span: 1 },
      { name: "TATUAJES NEKO-45", span: 1 },
      { name: "TATUAJES NEKO-52", span: 1 },
      { name: "TATUAJES NEKO-53", span: 1 },
    ],
  },
  {
    images: [
      { name: "TATUAJES NEKO-18", span: 1 },
      { name: "TATUAJES NEKO-46", span: 1 },
      { name: "TATUAJES NEKO-14", span: 1 },
      { name: "TATUAJES NEKO-19", span: 1 },
      { name: "TATUAJES NEKO-50", span: 1 },
    ],
  },
  {
    images: [
      { name: "TATUAJES NEKO-13", span: 2 }, // Ocupa 2 espacios
      { name: "TATUAJES NEKO-94", span: 1 },
      { name: "TATUAJES NEKO-39", span: 1 },
    ],
  },
  {
    images: [
      { name: "TATUAJES NEKO-17", span: 1 },
      { name: "TATUAJES NEKO-62", span: 1 },
      { name: "TATUAJES NEKO-67", span: 1 },
    ],
  },
  {
    images: [
      { name: "TATUAJES NEKO-66", span: 1 },
      { name: "TATUAJES NEKO-48", span: 1 },
      { name: "TATUAJES NEKO-57", span: 1 },
      { name: "TATUAJES NEKO-15", span: 1 },
    ],
  },
  {
    images: [
      { name: "TATUAJES NEKO-61", span: 1 },
      { name: "TATUAJES NEKO-5", span: 1 },
    ],
  },
  {
    images: [
      { name: "TATUAJES NEKO-6", span: 2 }, // Ocupa 2 espacios
      { name: "TATUAJES NEKO-36", span: 1 },
      { name: "TATUAJES NEKO-3", span: 1 },
    ],
  },
  {
    images: [
      { name: "TATUAJES NEKO-35", span: 1 },
      { name: "TATUAJES NEKO-34", span: 1 },
      { name: "TATUAJES NEKO-33", span: 1 },
      { name: "TATUAJES NEKO-4", span: 1 },
      { name: "TATUAJES NEKO-9", span: 1 },
    ],
  },
  {
    images: [
      { name: "TATUAJES NEKO-22", span: 1 },
      { name: "TATUAJES NEKO-2", span: 1 },
      { name: "TATUAJES NEKO-24", span: 1 },
    ],
  },
];

export default function TattooGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Función para manejar extensiones de archivo
  const getImageSrc = (name: string): string => {
    // Lista de archivos que tienen extensión .JPG (mayúsculas) según la lista de archivos
    const uppercaseJPG = [
      "TATUAJES NEKO-13",
      "TATUAJES NEKO-14",
      "TATUAJES NEKO-2",
      "TATUAJES NEKO-22",
      "TATUAJES NEKO-24",
      "TATUAJES NEKO-33",
      "TATUAJES NEKO-34",
      "TATUAJES NEKO-46",
      "TATUAJES NEKO-48",
      "TATUAJES NEKO-5",
      "TATUAJES NEKO-52",
      "TATUAJES NEKO-53",
      "TATUAJES NEKO-55",
      "TATUAJES NEKO-56",
      "TATUAJES NEKO-57",
      "TATUAJES NEKO-6",
      "TATUAJES NEKO-61",
      "TATUAJES NEKO-66",
      "TATUAJES NEKO-67",
      "TATUAJES NEKO-9",
    ];
    
    const extension = uppercaseJPG.includes(name) ? "JPG" : "jpg";
    return `/img/Tattoo/${name}.${extension}`;
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Nav Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 py-4 sm:py-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="relative flex items-center justify-between">
            {/* Logo izquierdo - Neeko Tamashiro */}
            <Link href="/" className="text-base sm:text-lg md:text-xl font-bold text-white hover:text-white/80 transition-colors">
              Neeko Tamashiro
            </Link>
            
            {/* Logo central */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 relative">
                <Image
                  src="/img/logo-icon.png"
                  alt="Neeko Tamashiro Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            {/* Botón de regreso */}
            <Link 
              href="/" 
              className="text-base font-normal text-white hover:text-white/80 transition-colors"
            >
              ← Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Galería */}
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-24">
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-white tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[12px]">
            Tattoo Gallery
          </h1>
          
          {/* Grid Masonry */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8">
            {galleryRows.map((row, rowIndex) => {
              // Calcular el número de columnas según las imágenes en la fila
              // Considerando que algunas imágenes ocupan 2 espacios
              const totalSpans = row.images.reduce((sum, img) => sum + img.span, 0);
              
              // Mapear el número de espacios a clases de Tailwind responsive
              const getGridCols = (spans: number) => {
                if (spans === 2) return "grid-cols-1 sm:grid-cols-2";
                if (spans === 3) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
                if (spans === 4) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
                if (spans === 5) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
                return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
              };
              
              return (
                <div
                  key={rowIndex}
                  className={`grid ${getGridCols(totalSpans)} gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6`}
                >
                  {row.images.map((image, imageIndex) => {
                    const imageSrc = getImageSrc(image.name);
                    // Las imágenes que ocupan 2 espacios deben usar col-span-2 en breakpoints apropiados
                    const colSpan = image.span === 2 
                      ? "col-span-1 sm:col-span-2" 
                      : "";
                    
                    return (
                      <div
                        key={`${rowIndex}-${imageIndex}`}
                        className={`relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl bg-black/20 ${colSpan}`}
                        onClick={() => setSelectedImage(imageSrc)}
                      >
                        <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[5/6] lg:aspect-[3/4] flex items-center justify-center">
                          <Image
                            src={imageSrc}
                            alt={image.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes={image.span === 2 
                              ? "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 40vw, 33vw"
                              : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                            }
                            onError={(e) => {
                              // Si falla con .jpg, intentar con .JPG o viceversa
                              const target = e.target as HTMLImageElement;
                              const currentSrc = target.src;
                              const newExtension = currentSrc.endsWith('.jpg') ? '.JPG' : '.jpg';
                              const newSrc = currentSrc.replace(/\.(jpg|JPG)$/, newExtension);
                              target.src = newSrc;
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4 md:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-3xl sm:text-4xl md:text-5xl font-bold hover:text-white/80 transition-colors z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Cerrar"
          >
            ×
          </button>
          <div className="relative max-w-full max-h-[95vh] sm:max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              fill
              className="object-contain p-2 sm:p-4"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
