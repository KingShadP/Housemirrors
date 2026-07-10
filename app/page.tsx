'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const products = [
  { id: 1, title: 'The Silk Silhouette', price: '$420', category: 'Evening', src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop', ratio: 'col-span-1 row-span-1' },
  { id: 2, title: 'Crimson Velvet Coat', price: '$1,200', category: 'Outerwear', src: 'https://images.unsplash.com/photo-1550614000-4b95d4ed1dc7?q=80&w=1600&auto=format&fit=crop', ratio: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 3, title: 'Onyx Leather Attaché', price: '$850', category: 'Accessories', src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop', ratio: 'col-span-1 row-span-1' },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[var(--color-bg)] min-h-screen">
      {/* 
        SECTION: Cinematic Hero
        Mood: Editorial / Magazine Hero 
      */}
      <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Edge-to-edge luxury image */}
          <Image 
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2400&auto=format&fit=crop"
            fill
            priority
            alt="Maison Crimson Editorial"
            className="object-cover object-center opacity-40 brightness-75 animate-subtleZoom"
            unoptimized
          />
          {/* Subtle vignette/gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070303]/30 via-transparent to-[#070303]" />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center justify-center mt-20 px-4">
          <div className="overflow-hidden flex flex-col items-center">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[12vw] sm:text-[14vw] md:text-[180px] leading-[0.8] tracking-[-0.04em] font-serif font-light text-center"
            >
              CRIMSON
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 flex flex-col items-center text-center max-w-sm"
          >
            <p className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-white/60 mb-6 leading-relaxed">
              Exhibition 03 / Fall Winter Col. <br/>
              A study in severe elegance and structural romance.
            </p>
            <Link href="#store" className="cursor-hover group relative flex items-center justify-center w-32 h-10 overflow-hidden border border-white/20">
              <span className="absolute inset-0 w-full h-full bg-[#8a0c08] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 text-[10px] font-sans tracking-[0.15em] uppercase transition-colors duration-500 group-hover:text-white">
                Enter Store
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 
        SECTION: Typographic Marquee 
        Mood: Brutalist / Prestige
      */}
      <section className="py-8 md:py-12 border-y border-white/5 bg-[#120909] overflow-hidden whitespace-nowrap flex items-center">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-16 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-[10px] font-sans tracking-[0.3em] text-[#8a0c08] uppercase">Maison Crimson</span>
              <span className="text-2xl font-serif italic text-white/50">Director&apos;s Cut</span>
              <span className="text-[10px] font-sans tracking-[0.3em] text-[#8a0c08] uppercase">FW26</span>
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 
        SECTION: Featured Artifact 
        Mood: Museum-grade Showcase
      */}
      <section id="store" className="py-32 px-6 md:px-16 container mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <div className="text-[10px] font-sans tracking-[0.2em] text-[#8a0c08] uppercase mb-4">
              Featured Artifact 001
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-light mb-8 leading-[1.1] tracking-tight">
              The <br/> Structural <br/> <i className="text-white/60">Trench</i>
            </h2>
            <div className="w-full h-[1px] bg-white/10 mb-8" />
            <div className="flex justify-between items-end mb-8">
              <p className="font-sans text-sm text-white/50 leading-relaxed max-w-[280px]">
                Cut from heavy duchesse satin. Architected for movement. A severe silhouette softened by hidden crimson lining.
              </p>
              <div className="font-sans text-sm tracking-wider">$1,850</div>
            </div>
            <button className="cursor-hover group relative w-full border border-white/20 h-14 flex items-center justify-between px-6 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-[#8a0c08] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 cubic-bezier([0.16,1,0.3,1])" />
              <span className="relative z-10 text-[11px] font-sans tracking-[0.15em] uppercase text-white/80 group-hover:text-white transition-colors duration-500">
                Add to Cart
              </span>
              <span className="relative z-10 text-[11px] font-sans tracking-[0.1em] text-white/50 group-hover:text-white transition-colors duration-500">
                +
              </span>
            </button>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden oval-mask">
              <Image 
                src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1600&auto=format&fit=crop"
                fill
                alt="The Structural Trench"
                className="object-cover cinematic-hover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION: The Archive Gallery 
        Mood: Dark Luxury / Grid Navigation
      */}
      <section className="py-24 border-t border-white/5 bg-[#050202]">
        <div className="px-6 md:px-16 container mx-auto max-w-[1600px] mb-16 flex justify-between items-end">
          <h2 className="font-serif text-4xl font-light">The Archive</h2>
          <Link href="/shop" className="cursor-hover text-[10px] font-sans tracking-[0.15em] uppercase border-b border-white/30 pb-1 hover:border-white transition-colors">
            View All Artifacts
          </Link>
        </div>

        <div className="px-6 md:px-16 container mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-16">
            {products.map((product) => (
              <div key={product.id} className={`group cursor-pointer shop-item relative ${product.ratio}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#120909] mb-4">
                  <Image 
                    src={product.src}
                    fill
                    alt={product.title}
                    unoptimized
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  {/* Shop Add overlay */}
                  <div className="shop-item-overlay absolute inset-0 bg-[#070303]/40 flex flex-col items-center justify-center backdrop-blur-sm">
                    <button className="cursor-hover w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-xl font-light hover:bg-[#8a0c08] hover:border-[#8a0c08] transition-colors duration-300">
                      +
                    </button>
                    <span className="mt-4 text-[9px] font-sans uppercase tracking-[0.2em] text-white/80">Quick Add</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-lg tracking-wide mb-1 text-white/90">{product.title}</h3>
                    <p className="text-[10px] font-sans tracking-[0.1em] text-white/40 uppercase">{product.category}</p>
                  </div>
                  <span className="font-sans text-xs tracking-wider text-white/60">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#070303] pt-24 pb-12 px-6 md:px-16">
        <div className="container mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl mb-8">Maison Crimson</h2>
            <p className="text-xs font-sans text-white/40 max-w-sm leading-relaxed tracking-wide">
              An independent design house exploring the intersection of severe architecture and romantic silhouette. Operates globally.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[9px] font-sans tracking-[0.2em] uppercase text-white/30 mb-2">The House</h4>
            {['Manifesto', 'Archive', 'Campaigns', 'Stockists'].map(link => (
              <Link key={link} href="#" className="cursor-hover text-xs font-sans tracking-wide text-white/70 hover:text-white transition-colors">{link}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[9px] font-sans tracking-[0.2em] uppercase text-white/30 mb-2">Client Services</h4>
            {['Account', 'Shipping', 'Returns', 'Contact'].map(link => (
              <Link key={link} href="#" className="cursor-hover text-xs font-sans tracking-wide text-white/70 hover:text-white transition-colors">{link}</Link>
            ))}
          </div>
        </div>
        <div className="container mx-auto max-w-[1600px] pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-sans tracking-[0.1em] uppercase text-white/30">
          <div>&copy; {new Date().getFullYear()} Maison Crimson. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="cursor-hover hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="cursor-hover hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
