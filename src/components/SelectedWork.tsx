"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";
import RevealText from "./RevealText";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [expandedMobileIdx, setExpandedMobileIdx] = useState<number | null>(null);

  const toggleMobileExpand = (idx: number) => {
    setExpandedMobileIdx(prev => prev === idx ? null : idx);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const dragonRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Dynamic dragon parallax
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5, // Even smoother scrub for the large background element
      animation: gsap.fromTo(dragonRef.current, 
        { yPercent: 15 },
        { yPercent: -35, ease: "none" }
      )
    });
  }, { scope: containerRef });

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
              {activeIdx !== null ? `0${activeIdx + 1}` : `0${projects.length}`} / 0{projects.length}
            </span>
          </div>

          {/* Desktop Detail panel */}
          <div className={`transition-all duration-300 ${activeIdx !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {activeIdx !== null && (
              <>
                <p className="text-sm opacity-80 mb-4 font-sans leading-relaxed">
                  {projects[activeIdx].desc}
                </p>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                  {projects[activeIdx].tags}
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
          <img
            ref={dragonRef}
            src="/dragon.png"
            alt=""
            aria-hidden="true"
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
            {projects.map((work, idx) => (
              <div
                key={idx}
                data-cursor="exp"
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                onClick={() => toggleMobileExpand(idx)}
                className="group py-5 md:py-6 border-b border-grid-line last:border-0 cursor-pointer flex flex-col justify-center"
              >
                <div className="flex items-center justify-between gap-4 w-full">
                  <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold transition-all duration-400 ease-out ${activeIdx === idx ? 'translate-x-4 text-brand-red' : ''} ${activeIdx !== null && activeIdx !== idx ? 'opacity-30' : 'opacity-100'}`}>
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

                {/* Inline Expand for Details & Actions */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out flex flex-col ${
                    expandedMobileIdx === idx ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-grid-line/40' : 'max-h-0 opacity-0 border-t-0'
                  }`}
                >
                  <p className="text-sm md:text-base opacity-90 leading-relaxed font-sans mb-6 max-w-3xl">
                    {work.desc}
                  </p>
                  <div className="flex flex-col md:flex-row gap-6 md:justify-between md:items-center mt-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                      {work.tags}
                    </span>
                    
                    <div className={`flex flex-wrap items-center gap-3 transition-all duration-500 delay-150 ${expandedMobileIdx === idx ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      {work.demo && (
                        <a href={work.demo} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest px-6 py-3 bg-transparent text-white border border-brand-red hover:bg-brand-red transition-colors">
                          Demo
                        </a>
                      )}
                      {work.github && (
                        <a href={work.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors">
                          GitHub
                        </a>
                      )}
                      {work.link && (
                        <a href={work.link} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest px-6 py-3 bg-black text-white border border-grid-line hover:border-brand-red hover:text-brand-red transition-colors">
                          Link
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
