"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxImgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Aggressive parallax effect
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1, // Smooth interpolation
      animation: gsap.to(parallaxImgRef.current, {
        yPercent: -50, // Intense travel distance
        ease: "none"
      })
    });
  }, { scope: containerRef });

  return (
    <Section
      id="signal"
      index="01"
      title="Home"
      rightContent={
        <>
          <div className="font-mono text-xs text-gray-500 mb-4">
            LOCATION<br />
            <span className="text-foreground text-sm mt-1 block">New Delhi, IN</span>
          </div>
          <div className="font-mono text-xs text-gray-500 mt-8">
            STATUS<br />
            <span className="text-foreground text-sm mt-1 block">ACTIVE</span>
          </div>
        </>
      }
    >
      <div ref={containerRef} className="relative flex flex-col justify-center min-h-[60vh] overflow-hidden">

        {/* Desktop only — absolute parallax behind headline */}
        <div className="hidden md:flex absolute inset-0 items-center justify-end pointer-events-none select-none z-0">
          <img
            ref={parallaxImgRef}
            src="/pfp.png"
            alt=""
            aria-hidden="true"
            style={{ mixBlendMode: "luminosity" }}
            className="w-[460px] h-[460px] lg:w-[540px] lg:h-[540px] object-contain opacity-30 will-change-transform"
          />
        </div>

        {/* Foreground text */}
        <div className="relative z-10">
          <RevealText as="h1" className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-[1.05] mb-8">
            Piyush Thakur.
          </RevealText>

          {/* Mobile only — clean portrait block between headline and description */}
          <div className="block md:hidden mb-8">
            <div className="relative w-full max-w-[260px] aspect-square border border-grid-line overflow-hidden">
              {/* Corner crosshairs */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brand-red z-10" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-red z-10" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-brand-red z-10" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brand-red z-10" />
              <img
                src="/pfp.png"
                alt="Piyush Thakur"
                style={{ mixBlendMode: "luminosity" }}
                className="w-full h-full object-contain opacity-50"
              />
            </div>
          </div>

          <RevealText as="p" delay={0.15} className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed mb-12">
            AI & Data Science undergraduate building AI-integrated mobile applications and end-to-end machine learning pipelines — 
            from RAG architectures to classical ML workflows.
          </RevealText>

          <RevealText delay={0.3}>
            <a href="#contact" className="font-mono text-sm border border-brand-red text-brand-red px-8 py-4 hover:bg-brand-red hover:text-black transition-colors duration-300 inline-block tracking-wider">
              [ Let&apos;s talk ]
            </a>
          </RevealText>
        </div>

      </div>
    </Section>
  );
}
