"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="border-b border-grid-line p-6 flex justify-between items-center sticky top-0 bg-background/90 backdrop-blur z-50">
        <div className="font-mono text-sm uppercase tracking-widest text-brand-red">Piyush Thakur</div>
        <button 
          onClick={() => setIsOpen(true)}
          className="font-mono text-sm uppercase tracking-widest hover:text-brand-red transition-colors"
        >
          [ Menu ]
        </button>
      </header>

      {/* Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-black z-[100] flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="p-6 flex justify-between items-center border-b border-grid-line">
          <div className="font-mono text-sm uppercase tracking-widest text-brand-red">Navigation</div>
          <button 
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm uppercase tracking-widest hover:text-brand-red transition-colors"
          >
            [ Close ]
          </button>
        </div>
        
        <nav className="flex-1 flex flex-col items-center justify-center gap-8">
          <a href="#signal" onClick={() => setIsOpen(false)} className="text-4xl md:text-7xl font-bold hover:text-brand-red transition-colors">01 / SIGNAL</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="text-4xl md:text-7xl font-bold hover:text-brand-red transition-colors">02 / WORK</a>
          <a href="#practice" onClick={() => setIsOpen(false)} className="text-4xl md:text-7xl font-bold hover:text-brand-red transition-colors">03 / PRACTICE</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl md:text-7xl font-bold hover:text-brand-red transition-colors">05 / CONTACT</a>
        </nav>
      </div>
    </>
  );
}
