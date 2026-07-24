"use client";

import { useState } from "react";
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
  const [mobileModalItem, setMobileModalItem] = useState<typeof works[0] | null>(null);

  const handleItemClick = (work: typeof works[0]) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setMobileModalItem(work);
    }
  };

  return (
    <>
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
                  <span className="font-mono text-xs uppercase tracking-widest text-brand-red">
                    {works[activeIdx].tags}
                  </span>
                </>
              )}
            </div>
          </div>
        }
      >
        <div className="flex flex-col justify-center min-h-[60vh]">
          <RevealText as="h2" className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-16">
            Selected work,<br />
            shaped as systems.
          </RevealText>

          <div className="flex flex-col w-full">
            {works.map((work, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                onClick={() => handleItemClick(work)}
                className="group py-5 md:py-6 border-b border-grid-line last:border-0 cursor-pointer flex items-center justify-between gap-4"
              >
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
            ))}
          </div>
        </div>
      </Section>

      {/* Strict Mobile-Only Modal for Project Details */}
      {mobileModalItem && (
        <div 
          className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center p-4 md:hidden bg-black/70 backdrop-blur-md transition-opacity"
          onClick={() => setMobileModalItem(null)}
        >
          <div 
            className="w-full max-w-lg bg-zinc-950 border border-grid-line p-6 sm:p-8 rounded-none text-white shadow-2xl relative animate-in fade-in slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4 border-b border-grid-line pb-4">
              <div>
                <span className="font-mono text-xs text-brand-red uppercase tracking-widest block mb-1">
                  {mobileModalItem.type} · {mobileModalItem.year}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {mobileModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setMobileModalItem(null)}
                className="font-mono text-xs text-gray-400 hover:text-brand-red px-2 py-1 border border-grid-line"
                aria-label="Close modal"
              >
                [ Close ✕ ]
              </button>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-6 font-sans">
              {mobileModalItem.desc}
            </p>

            <div className="pt-4 border-t border-grid-line/50">
              <span className="font-mono text-xs text-brand-red uppercase tracking-widest block">
                {mobileModalItem.tags}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
