"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import RevealText from "./RevealText";

const works = [
  {
    title: "GrindFlow",
    year: "2026",
    tags: "Flutter · RAG · Gemini AI · Supabase",
    type: "AI STUDY COMPANION",
    desc: "Cross-platform AI study companion with native PDF reader, full RAG pipeline, and dynamic summarization."
  },
  {
    title: "ML Pricing Engine",
    year: "2026",
    tags: "Python · scikit-learn · Random Forest",
    type: "MACHINE LEARNING",
    desc: "End-to-end ML pipeline for automotive pricing, engineering features that dropped MAE by 75%."
  },
  {
    title: "ProoV",
    year: "2026",
    tags: "Feature Engineering · Data Science",
    type: "DATA SCIENCE",
    desc: "Predictive feature engineering and model evaluation for CPO team financial impact analysis."
  },
  {
    title: "Smart India Hackathon",
    year: "2025",
    tags: "Flutter · Firebase · Google Maps",
    type: "NATIONAL HACKATHON",
    desc: "Cross-platform Flutter application with intelligent AI chatbot and Firebase backend."
  },
  {
    title: "Criv Media",
    year: "2025",
    tags: "UI/UX · Framer · Web Dev",
    type: "DESIGN STUDIO",
    desc: "User-centric UI/UX designs and high-conversion responsive websites using Framer."
  },
  {
    title: "Sikkim Tourism",
    year: "2025",
    tags: "Flutter · Firebase · AI Chatbot",
    type: "TOURISM APP",
    desc: "Tourism application with Google Maps SDK and in-app conversational AI chatbot."
  }
];

export default function SelectedWork() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [expandedMobileIdx, setExpandedMobileIdx] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const dragonY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  const toggleMobileExpand = (idx: number) => {
    setExpandedMobileIdx(prev => prev === idx ? null : idx);
  };

  return (
    <Section
      id="work"
      index="02"
      title="Selected Work"
      rightContent={
        <div className="flex flex-col h-full">
          <div className="font-mono text-xs uppercase tracking-widest mb-8 text-brand-red">
            {activeIdx !== null ? "ACTIVE" : "RESOLVED"}{" "}
            <span className="font-bold">
              {activeIdx !== null ? `0${activeIdx + 1}` : `0${works.length}`} / 0{works.length}
            </span>
          </div>

          {/* Desktop Detail panel */}
          <div className={`transition-all duration-300 ${activeIdx !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {activeIdx !== null && (
              <>
                <p className="text-sm opacity-80 mb-4 font-sans leading-relaxed">
                  {works[activeIdx].desc}
                </p>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                  {works[activeIdx].tags}
                </span>
              </>
            )}
          </div>
        </div>
      }
    >
      <div ref={containerRef} className="relative flex flex-col justify-center min-h-[60vh]">

        {/* Dithered Dragon — parallax layer behind the work list */}
        <div className="absolute inset-0 flex items-end justify-end pointer-events-none select-none z-0 overflow-hidden">
          <motion.img
            src="/dragon.png"
            alt=""
            aria-hidden="true"
            style={{ y: dragonY }}
            className="w-[500px] h-[500px] md:w-[640px] md:h-[640px] lg:w-[780px] lg:h-[780px] object-contain opacity-30 will-change-transform"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <RevealText as="h2" className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-16">
            Selected work,<br />
            shaped as systems.
          </RevealText>

          <div className="flex flex-col w-full">
            {works.map((work, idx) => (
              <div
                key={idx}
                data-cursor="exp"
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                onClick={() => toggleMobileExpand(idx)}
                className="group py-5 md:py-6 border-b border-grid-line last:border-0 cursor-pointer flex flex-col justify-center"
              >
                <div className="flex items-center justify-between gap-4 w-full">
                  <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold transition-all duration-400 ease-out ${activeIdx === idx ? 'translate-x-4' : ''} ${activeIdx !== null && activeIdx !== idx ? 'opacity-30' : 'opacity-100'}`}>
                    {work.title}
                  </h3>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-xs border border-grid-line px-2 py-1 rounded opacity-70">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider opacity-60 hidden lg:block">
                      {work.type}
                    </span>
                  </div>
                </div>

                {/* Strict Mobile-Only Inline Expand under the heading (md:hidden) */}
                <div 
                  className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                    expandedMobileIdx === idx ? 'max-h-60 opacity-100 mt-4 pt-3 border-t border-grid-line/40' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm opacity-90 leading-relaxed font-sans mb-3">
                    {work.desc}
                  </p>
                  <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                    {work.tags}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
