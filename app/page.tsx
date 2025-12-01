import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Nav Bar */}
      <nav className="fixed top-[38px] left-0 right-0 z-50 bg-transparent">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">
          <div className="relative flex items-center justify-between">
            {/* Logo izquierdo - Neeko Tamashiro */}
            <div className="text-xl font-bold text-white" style={{ fontSize: '20px' }}>
              Neeko Tamashiro
            </div>
            
            {/* Logo central */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 relative">
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
            
            {/* Navegación derecha */}
            <div className="flex items-center gap-8 md:gap-12 text-base font-normal text-white" style={{ fontSize: '16px' }}>
              <Link href="#tattoo-gallery" className="hover:text-white/80 transition-colors">
                Tattoo Galery
              </Link>
              <Link href="#art-work" className="hover:text-white/80 transition-colors">
                Art Work
              </Link>
              <Link href="#contact" className="hover:text-white/80 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full h-screen min-h-[1012px] flex items-center justify-center">
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
          <div className="absolute bg-gradient-to-t from-black to-transparent h-[171px] left-0 bottom-0 w-full"></div>
          
          {/* Gradiente superior */}
          <div className="absolute top-0 left-0 w-full h-[144px]">
            <div className="bg-gradient-to-b from-black to-transparent h-[144px] w-full"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <p className="text-2xl font-bold uppercase mb-4 text-white tracking-[12px]" style={{ fontSize: '24px' }}>
            JAPANESE TATTOO BY
          </p>
          <h1 className="text-6xl font-normal uppercase mb-8 md:mb-12 text-white tracking-[9.6px]" style={{ fontSize: '64px' }}>
            Neeko Tamashiro
          </h1>
          <Link
            href="#tattoo-gallery"
            className="inline-block px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-base hover:bg-gray-400 transition-colors rounded-[186px]"
          >
            View Tattoo Gallery
          </Link>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start w-full">
          <div className="text-center md:text-left flex flex-col justify-center" style={{ minHeight: '475px' }}>
            <h2 className="text-2xl font-bold uppercase mb-[50px] text-white tracking-[12px]" style={{ fontSize: '24px', lineHeight: 'normal' }}>
              BIOGRAPHY
            </h2>
            <div className="text-base leading-[1.8] text-white font-normal mx-auto md:mx-0" style={{ fontSize: '16px', width: '515px', maxWidth: '100%' }}>
              <p className="mb-0">
                My name is Nicolás Tamashiro, a.k.a. Neeko. I was born in Buenos Aires, Argentina.
                <br aria-hidden="true" />I am a Japanese descendant from Higashi-son, Okinawa, and Tosa, Kōchi-ken.
              </p>
              <p>
                Started tattooing in 2006.
                <br aria-hidden="true" />
                In 2009, I began working at "Tattoomanía", one of the first tattoo studios in Buenos Aires, where I started studying Japanese tattooing and Ukiyo-e.
                <br aria-hidden="true" />
                After working in several studios, I opened my own shop, "Ichō Bunshin", in 2018.
                <br aria-hidden="true" />I am currently living in Japan.
              </p>
            </div>
          </div>
          
          <div className="relative rounded-[25px] overflow-hidden mx-auto md:mx-0" style={{ height: '475px', width: '406px', maxWidth: '100%' }}>
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Features Section */}
      <section id="book-features" className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 md:py-24">
        <h2 className="text-2xl font-bold uppercase text-center mb-12 md:mb-16 text-white tracking-[12px]">
          Book Features
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[1, 2, 3].map((num) => (
            <div key={num} className="space-y-4">
              <div className="relative w-full aspect-square bg-gray-800 rounded-[25px] overflow-hidden">
                <Image
                  src={`/img/book-${num}.jpg`}
                  alt={`Book ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 text-base text-center leading-[1.8] text-white">
                <p className="mb-0 font-normal">BOOK NAME</p>
                <p className="mb-0 font-normal">Editorial Name</p>
                <p className="font-normal">Year of Publication</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Art Work Section */}
      <section id="art-work" className="relative w-full min-h-[960px] flex items-center justify-center py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/img/artwork-background.jpg"
              alt="Japanese artwork"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="text-2xl font-bold uppercase leading-[1.8] mb-12 text-white tracking-[6px]">
            <p className="mb-0">"I BELIEVE IN THE POWER OF</p>
            <p className="mb-0">PAPER AND INK AS A FORM</p>
            <p>OF LEARNING"</p>
          </div>
          <Link
            href="#art-work"
            className="inline-block px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-base hover:bg-gray-400 transition-colors rounded-[186px]"
          >
            View Art Work Gallery
          </Link>
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="other-projects" className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 md:py-24">
        <h2 className="text-2xl font-bold uppercase text-center mb-16 md:mb-20 text-white tracking-[12px]">
          OTHER PROJECTS
        </h2>
        
        {/* Kabuto Rotary Machines */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-24 md:mb-32">
          <div className="space-y-6">
            <div className="text-2xl font-bold uppercase text-white tracking-[12px]">
              <p className="mb-0">KABUTO</p>
              <p>Rotary Machines</p>
            </div>
            <div className="text-base leading-[1.8] text-white">
              <p className="mb-0">By mid-2017 the idea of designing a machine began but the attempts were unsuccessful. When I met my partner J.M. Casco (CNC Operator) this idea came to life at the beginning of 2018. The first prototypes came out in the middle of that same year.</p>
              <p>Today, we continue working and perfecting the design of our Kabuto machines.</p>
            </div>
            <a
              href="https://instagram.com/kabuto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-base hover:bg-gray-400 transition-colors rounded-[186px]"
            >
              Kabuto Instagram
            </a>
          </div>
          
          <div className="relative w-full aspect-[406/422] rounded-[25px] overflow-hidden bg-gray-800">
            <Image
              src="/img/kabuto-project.jpg"
              alt="Kabuto Rotary Machines"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Kamisama */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full aspect-[406/422] order-2 md:order-1 rounded-[25px] overflow-hidden bg-gray-800">
            <Image
              src="/img/kamisama-project.jpg"
              alt="Kamisama"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl font-bold uppercase text-white tracking-[12px]">
              KAMISAMA
            </h3>
            <div className="text-base leading-[1.8] text-white">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <a
              href="https://instagram.com/kamisama"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-base hover:bg-gray-400 transition-colors rounded-[186px]"
            >
              Kamisama Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="relative w-full min-h-[710px] flex items-center justify-center py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/img/merch-background.jpg"
              alt="Merchandise"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase mb-12 leading-relaxed text-white">
            EXPLORE EXCLUSIVE PRODUCTS AND MERCH HERE
          </p>
          <a
            href="https://kamisama.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-2 bg-[#d9d9d9] text-black uppercase font-bold text-base hover:bg-gray-400 transition-colors rounded-[186px]"
          >
            KAMISAMA SHOP
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
          Contact
        </h2>
        <p className="text-white/80 mb-4">
          For inquiries and bookings, please reach out through:
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="https://instagram.com/neekotamashiro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors"
          >
            Instagram: @neekotamashiro
          </a>
        </div>
      </section>
    </main>
  );
}
