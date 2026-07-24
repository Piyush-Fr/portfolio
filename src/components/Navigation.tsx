"use client";

import { useState } from "react";

const navItems = [
  { number: "01", label: "Home", href: "#signal" },
  { number: "02", label: "Work", href: "#work" },
  { number: "03", label: "Practice", href: "#practice" },
  { number: "04", label: "Education", href: "#about" },
  { number: "05", label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Transparent Floating Menu Button on Top Right */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-[80] font-mono text-sm uppercase tracking-widest text-brand-red hover:opacity-70 transition-opacity bg-transparent px-2 py-1"
      >
        [ Menu ]
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[90] transition-opacity duration-300"
        />
      )}

      {/* Right-side Drawer Menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[480px] md:w-[540px] bg-black text-white z-[100] flex flex-col border-l border-grid-line transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 flex justify-between items-center border-b border-grid-line">
          <div className="font-mono text-xs uppercase tracking-widest text-brand-red flex items-center gap-2">
            <span>■</span> MENU / 01–05
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-brand-red transition-colors flex items-center gap-1"
          >
            [ Close ✕ ]
          </button>
        </div>
        
        {/* Navigation Items */}
        <nav className="flex-1 p-8 sm:p-12 flex flex-col justify-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-baseline gap-6 border-b border-grid-line/50 pb-4 transition-all"
            >
              <span className="font-mono text-sm text-brand-red group-hover:translate-x-1 transition-transform">
                {item.number}
              </span>
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white group-hover:text-brand-red group-hover:translate-x-2 transition-all">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-grid-line/50 font-mono text-xs text-gray-500 flex justify-between items-center">
          <span>© 2026 PIYUSH THAKUR</span>
          <span>NEW DELHI, IN</span>
        </div>
      </div>
    </>
  );
}
