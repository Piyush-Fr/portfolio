"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import RevealText from "./RevealText";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const eyeY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <Section
      id="contact"
      index="05"
      title="Contact"
      rightContent={
        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
          END OF<br />DOCUMENT
        </div>
      }
    >
      <div ref={containerRef} className="relative flex flex-col justify-center min-h-[50vh]">

        {/* Dithered Black Eye — parallax layer behind contact content */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none z-0 overflow-hidden">
          <motion.img
            src="/blckeye.png"
            alt=""
            aria-hidden="true"
            style={{ y: eyeY }}
            className="w-[501px] h-[501px] md:w-[641px] md:h-[641px] lg:w-[781px] lg:h-[781px] object-contain opacity-20 will-change-transform"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <RevealText as="h2" className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-16">
            Start a<br />conversation.
          </RevealText>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-24">
            <RevealText delay={0.15}>
              <div>
                <h3 className="font-mono text-brand-red text-sm mb-6 uppercase tracking-widest">Digital</h3>
                <a href="mailto:thakurpiyush3112005@gmail.com" className="block text-base md:text-lg hover:text-brand-red transition-colors mb-3 break-words">
                  thakurpiyush3112005@gmail.com
                </a>
                <a href="#" className="block text-base md:text-lg hover:text-brand-red transition-colors mb-3">
                  LinkedIn
                </a>
                <a href="#" className="block text-base md:text-lg hover:text-brand-red transition-colors">
                  GitHub
                </a>
              </div>
            </RevealText>

            <RevealText delay={0.25}>
              <div>
                <h3 className="font-mono text-brand-red text-sm mb-6 uppercase tracking-widest">Location</h3>
                <p className="text-base md:text-lg text-gray-400">
                  New Delhi<br />India
                </p>
              </div>
            </RevealText>
          </div>

          <RevealText delay={0.35} className="w-full">
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-grid-line font-mono text-xs text-gray-600 gap-4">
              <span>© 2026 PIYUSH THAKUR</span>
              <span>B.TECH (AI & DATA SCIENCE)</span>
            </div>
          </RevealText>
        </div>

      </div>
    </Section>
  );
}
