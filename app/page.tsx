"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);
  const biographyRef = useRef(null);
  const bookFeaturesRef = useRef(null);
  const artWorkRef = useRef(null);
  const otherProjectsRef = useRef(null);
  const merchRef = useRef(null);

  const biographyInView = useInView(biographyRef, { once: true, margin: "-100px" });
  const bookFeaturesInView = useInView(bookFeaturesRef, { once: true, margin: "-100px" });
  const artWorkInView = useInView(artWorkRef, { once: true, margin: "-100px" });
  const otherProjectsInView = useInView(otherProjectsRef, { once: true, margin: "-100px" });
  const merchInView = useInView(merchRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const heroSectionHeight = heroSectionRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroSectionHeight) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Verificar posición inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="bg-black text-white">
      {/* Nav Bar */}
      <nav className={`fixed ${isScrolled ? 'top-0' : 'top-4 sm:top-[38px]'} left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 py-4 sm:py-5' : 'bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="relative flex items-center justify-between">
            {/* Logo izquierdo - Neeko Tamashiro */}
            <div className="text-base sm:text-lg md:text-xl font-bold text-white">
              Neeko Tamashiro
            </div>
            
            {/* Logo central */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
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
            </div>
            
            {/* Menú hamburguesa para móviles */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            
            {/* Navegación derecha - Desktop */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12 text-base font-normal text-white">
              <Link href="/tattoo-gallery" className="hover:text-white/80 transition-colors">
                Tattoo Galery
              </Link>
              <Link href="#art-work" className="hover:text-white/80 transition-colors">
                Art Work
              </Link>
            </div>
          </div>
          
          {/* Menú móvil desplegable */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} mt-4`}>
            <div className="flex flex-col gap-4 px-4 py-6">
              <Link 
                href="/tattoo-gallery" 
                className="text-base font-normal text-white hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tattoo Galery
              </Link>
              <Link 
                href="#art-work" 
                className="text-base font-normal text-white hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Art Work
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section ref={heroSectionRef} className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[1012px] flex items-center justify-center pt-20 sm:pt-24">
        <div className="absolute inset-0 z-0">
          {/* Imagen de fondo con opacidad y posicionamiento específico */}
          <div className="absolute inset-0 opacity-[0.35] overflow-hidden pointer-events-none">
            <div 
              className="relative"
              style={{
                height: '155.29%',
                left: '-9.1%',
                top: '-9.03%',
                width: '117.54%',
                position: 'absolute'
              }}
            >
              <Image
                src="/img/hero-background.jpg"
                alt="Japanese tattoos"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </div>
          
          {/* Gradiente inferior */}
          <div className="absolute bg-gradient-to-t from-black to-transparent h-[100px] sm:h-[120px] md:h-[171px] left-0 bottom-0 w-full"></div>
          
          {/* Gradiente superior */}
          <div className="absolute top-0 left-0 w-full h-[80px] sm:h-[100px] md:h-[144px]">
            <div className="bg-gradient-to-b from-black to-transparent h-full w-full"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6">
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-3 sm:mb-4 text-white tracking-[8px] sm:tracking-[10px] md:tracking-[12px]"
          >
            JAPANESE TATTOO BY
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-normal uppercase mb-6 sm:mb-8 md:mb-12 text-white tracking-[6px] sm:tracking-[8px] md:tracking-[9.6px]"
          >
            Neeko Tamashiro
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/tattoo-gallery"
              className="inline-block px-6 sm:px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-sm sm:text-base hover:bg-gray-400 transition-colors rounded-[186px]"
            >
              View Tattoo Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section ref={biographyRef} id="biography" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={biographyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left flex flex-col justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[475px]"
          >
            <h2 className="text-xl sm:text-2xl font-bold uppercase mb-8 sm:mb-10 md:mb-[50px] text-white tracking-[8px] sm:tracking-[10px] md:tracking-[12px] leading-normal">
              BIOGRAPHY
            </h2>
            <div className="text-sm sm:text-base leading-[1.8] text-white font-normal mx-auto md:mx-0 max-w-full md:max-w-[515px]">
              <p className="mb-0">
                My name is Nicolás Tamashiro, a.k.a. Neeko. Born in Buenos Aires, Argentina, I am a Japanese descendant from Higashi-son (Okinawa) and Tosa (Kōchi-ken). I started tattooing in 2006 and, in 2009, joined "Tattoomanía," one of the first tattoo studios in Buenos Aires, where I began studying Japanese tattooing and Ukiyo-e. After working in several studios, I opened my own shop, "Ichō Bunshin," in 2018. I am currently living in Japan.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={biographyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative rounded-[25px] overflow-hidden mx-auto w-full max-w-[406px] aspect-[406/475]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[25px] pointer-events-none">
              <div 
                className="relative"
                style={{
                  height: '121%',
                  left: '-3.03%',
                  top: '-9.84%',
                  width: '106.17%',
                  position: 'absolute'
                }}
              >
                <Image
                  src="/img/neeko-profile.jpg"
                  alt="Neeko Tamashiro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 406px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Features Section */}
      <section ref={bookFeaturesRef} id="book-features" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={bookFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl sm:text-2xl font-bold uppercase text-center mb-8 sm:mb-12 md:mb-16 text-white tracking-[8px] sm:tracking-[10px] md:tracking-[12px]"
        >
          Book Features
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {[
            {
              id: 1,
              name: "Han'nya Brigade Book",
              editorial: "The Golden Flash Collection",
              year: "2016"
            },
            {
              id: 2,
              name: "Eleven Fourteen Volume III: Japanese Edition",
              editorial: "Scorpion Front Publishing",
              year: "2019"
            },
            {
              id: 3,
              name: "Japanese Tattoo Atlas",
              editorial: "Hoaki Books",
              year: "2025"
            }
          ].map((book, index) => (
            <motion.div 
              key={book.id} 
              initial={{ opacity: 0, y: 50 }}
              animate={bookFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="relative w-full aspect-square bg-gray-800 rounded-[25px] overflow-hidden">
                <Image
                  src={`/img/book-${book.id}.jpg`}
                  alt={book.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-1 text-sm sm:text-base text-center leading-[1.8] text-white">
                <p className="mb-0 font-normal">{book.name}</p>
                <p className="mb-0 font-normal">{book.editorial}</p>
                <p className="font-normal">{book.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Art Work Section */}
      <section ref={artWorkRef} id="art-work" className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[960px] flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/img/artwork-background.jpg"
              alt="Japanese artwork"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={artWorkInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={artWorkInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl font-bold uppercase leading-[1.8] mb-8 sm:mb-10 md:mb-12 text-white tracking-[4px] sm:tracking-[5px] md:tracking-[6px]"
          >
            <p className="mb-0">I FIND AND FEEL FREEDOM</p>
            <p>IN PAPER AND PENCIL</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={artWorkInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="#art-work"
              className="inline-block px-6 sm:px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-sm sm:text-base hover:bg-gray-400 transition-colors rounded-[186px]"
            >
              View Art Work Gallery
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Other Projects Section */}
      <section ref={otherProjectsRef} id="other-projects" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={otherProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl sm:text-2xl font-bold uppercase text-center mb-12 sm:mb-16 md:mb-20 text-white tracking-[8px] sm:tracking-[10px] md:tracking-[12px]"
        >
          OTHER PROJECTS
        </motion.h2>
        
        {/* Kabuto Rotary Machines */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={otherProjectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="text-xl sm:text-2xl font-bold uppercase text-white tracking-[8px] sm:tracking-[10px] md:tracking-[12px] text-center md:text-left">
              <p className="mb-0">KABUTO</p>
              <p>Rotary Machines</p>
            </div>
            <div className="text-sm sm:text-base leading-[1.8] text-white">
              <p className="mb-0">By mid-2017 the idea of designing a machine began but the attempts were unsuccessful. When I met my partner J.M. Casco (CNC Operator) this idea came to life at the beginning of 2018. The first prototypes came out in the middle of that same year.</p>
              <p>Today, we continue working and perfecting the design of our Kabuto machines.</p>
            </div>
            <a
              href="https://www.instagram.com/kabuto_tm/"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:inline-block mx-auto md:mx-0 px-6 sm:px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-sm sm:text-base hover:bg-gray-400 transition-colors rounded-[186px] text-center"
            >
              Kabuto Instagram
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={otherProjectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative w-full aspect-[406/422] rounded-[25px] overflow-hidden bg-gray-800"
          >
            <Image
              src="/img/kabuto-project.jpg"
              alt="Kabuto Rotary Machines"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Kamisama */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={otherProjectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="relative w-full aspect-[406/422] order-2 md:order-1 rounded-[25px] overflow-hidden bg-gray-800"
          >
            <Image
              src="/img/kamisama-project.jpg"
              alt="Kamisama"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={otherProjectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 order-1 md:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-[8px] sm:tracking-[10px] md:tracking-[12px] text-center md:text-left">
              KAMISAMA
            </h3>
            <div className="text-sm sm:text-base leading-[1.8] text-white">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <a
              href="https://www.instagram.com/holakamisama/"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:inline-block mx-auto md:mx-0 px-6 sm:px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-sm sm:text-base hover:bg-gray-400 transition-colors rounded-[186px] text-center"
            >
              Kamisama Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Merch Section */}
      <section ref={merchRef} id="merch" className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[710px] flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/img/merch-background.jpg"
              alt="Merchandise"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={merchInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={merchInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl font-normal uppercase mb-6 sm:mb-8 md:mb-12 text-white tracking-[8px] sm:tracking-[10px] md:tracking-[12px]"
          >
            EXPLORE EXCLUSIVE PRODUCTS AND MERCH HERE
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={merchInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="https://www.holakamisama.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-sm sm:text-base hover:bg-gray-400 transition-colors rounded-[186px]"
            >
              KAMISAMA SHOP
            </a>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
