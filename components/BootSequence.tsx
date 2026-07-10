'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BootSequence() {
  const [isComplete, setIsComplete] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Sequence
    setTimeout(() => setShowLogo(true), 400); // Wait briefly, reveal logo
    setTimeout(() => setIsComplete(true), 2500); // 2.5 seconds total boot sequence
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-[#070303] z-[10000] flex items-center justify-center pointer-events-none"
        >
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 border border-[#8a0c08] rounded-full flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-[#8a0c08] rounded-full blur-[20px] opacity-40"></div>
                  <div className="w-2 h-2 bg-[#f5f2ed] rounded-full"></div>
                </div>
                <div className="font-serif text-3xl tracking-[0.2em] text-[#f5f2ed] uppercase">
                  Maison Crimson
                </div>
                <div className="mt-4 font-sans text-[10px] tracking-[0.3em] text-[#f5f2ed]/50 uppercase">
                  Director&apos;s Cut
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
