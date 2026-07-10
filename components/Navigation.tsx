'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-20, 0]);
  
  const [time, setTime] = useState('');
  
  useEffect(() => {
    setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false, hour: '2-digit', minute: '2-digit' }) + ' EST');
  }, []);

  return (
    <>
      {/* Top Absolute Nav for Hero */}
      <header className="absolute top-0 left-0 w-full flex items-start justify-between px-8 py-10 z-[8000] mix-blend-screen">
        <nav className="flex gap-12 items-center">
          <div className="flex flex-col">
            <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#cba1a1] mb-1">Archive</span>
            <Link href="/" className="cursor-hover text-[11px] font-sans tracking-[0.14em] uppercase text-[#fdfbf7] hover:text-[#cba1a1] transition-colors">
              Collections
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#cba1a1] mb-1">Media</span>
            <Link href="/campaigns" className="cursor-hover text-[11px] font-sans tracking-[0.14em] uppercase text-[#fdfbf7] hover:text-[#cba1a1] transition-colors">
              Campaigns
            </Link>
          </div>
        </nav>

        <div className="flex flex-col items-end">
          <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#cba1a1] mb-1">Vault Status</span>
          <div className="text-[11px] font-sans tracking-[0.14em] uppercase text-[#fdfbf7] flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8a0c08] animate-pulse" />
            {time || 'SYS_ACTIVE'}
          </div>
        </div>
      </header>

      {/* Floating Dynamic Island Nav (appears on scroll) */}
      <motion.div 
        style={{ opacity, y }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-[9000] pointer-events-none"
      >
        <div className="ruby-glass rounded-full px-8 py-4 flex items-center gap-12 pointer-events-auto">
          <Link href="/" className="cursor-hover text-[10px] font-sans tracking-[0.2em] uppercase text-[#fdfbf7]/80 hover:text-white transition-colors">
            Index
          </Link>
          <Link href="/" className="cursor-hover font-serif text-xl tracking-[0.15em] text-[#fdfbf7] uppercase mx-4">
            Maison
          </Link>
          <button className="cursor-hover text-[10px] font-sans tracking-[0.2em] uppercase text-[#fdfbf7]/80 hover:text-white transition-colors flex items-center gap-2">
            Cart <span className="text-[#cba1a1]">(0)</span>
          </button>
        </div>
      </motion.div>
    </>
  );
}
