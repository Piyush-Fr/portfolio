"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import RevealText from "./RevealText";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const castleY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <Section
      id="about"
      index="04"
      title="Education & Background"
      rightContent={
        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
          ACADEMICS &<br />
          BACKGROUND
        </div>
      }
    >
      <div ref={containerRef} className="relative flex flex-col justify-center min-h-[50vh]">

        {/* Dithered Castle — parallax layer behind education content */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none z-0 overflow-hidden">
          <motion.img
            src="/castle.png"
            alt=""
            aria-hidden="true"
            style={{ y: castleY }}
            className="w-[500px] h-[500px] md:w-[640px] md:h-[640px] lg:w-[780px] lg:h-[780px] object-contain opacity-20 will-change-transform"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <RevealText as="h2" className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-16">
            One continuous line from<br />
            data & code to impact.
          </RevealText>

          <div className="flex flex-col w-full space-y-8">
            <RevealText delay={0.1}>
              <div className="py-6 border-b border-grid-line flex flex-col md:flex-row justify-between md:items-baseline gap-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">B.Tech in AI & Data Science</h3>
                  <p className="text-sm text-gray-400 mt-1 font-mono">Guru Gobind Singh Indraprastha University (GGSIPU)</p>
                </div>
                <div className="font-mono text-sm text-brand-red shrink-0">
                  CGPA: 8.25 · 2022–2026
                </div>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="py-6 border-b border-grid-line flex flex-col md:flex-row justify-between md:items-baseline gap-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">Arunodaya Public School</h3>
                  <p className="text-sm text-gray-400 mt-1 font-mono">Senior Secondary & High School Education</p>
                </div>
                <div className="font-mono text-sm text-brand-red shrink-0">
                  12th: 74.5% | 10th: 75%
                </div>
              </div>
            </RevealText>

            <RevealText delay={0.3}>
              <div className="mt-8 p-6 border border-grid-line bg-zinc-950/50">
                <span className="font-mono text-xs text-brand-red uppercase tracking-widest block mb-2">Focus & Ambition</span>
                <p className="text-base text-gray-300 leading-relaxed font-sans">
                  Expanding into deep learning, natural language processing (NLP), and production-grade LLM systems while maintaining clean mobile software standards.
                </p>
              </div>
            </RevealText>
          </div>
        </div>

      </div>
    </Section>
  );
}
