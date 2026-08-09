"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyeRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
      animation: gsap.fromTo(eyeRef.current,
        { yPercent: 15 },
        { yPercent: -35, ease: "none" }
      )
    });
  }, { scope: containerRef });

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
          <img
            ref={eyeRef}
            src="/blckeye.png"
            alt=""
            aria-hidden="true"
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
                <a href="https://www.linkedin.com/in/piyushthakur01" target="_blank" rel="noopener noreferrer" className="block text-base md:text-lg hover:text-brand-red transition-colors mb-3">
                  LinkedIn
                </a>
                <a href="https://github.com/Piyush-Fr" target="_blank" rel="noopener noreferrer" className="block text-base md:text-lg hover:text-brand-red transition-colors">
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
