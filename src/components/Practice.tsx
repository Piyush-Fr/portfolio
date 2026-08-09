"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  title: string;
  num: string;
  category: string;
  desc: string;
}

const leftSkills: SkillItem[] = [
  { title: "Python & ML", num: "01", category: "Languages & Frameworks", desc: "scikit-learn, Pandas, NumPy — end-to-end machine learning pipelines from data preprocessing to model evaluation." },
  { title: "Flutter & Mobile", num: "02", category: "Languages & Frameworks", desc: "Cross-platform mobile apps using Flutter with BLoC, Provider, and Riverpod state management architecture." },
  { title: "LLM Integration", num: "03", category: "Languages & Frameworks", desc: "Gemini API, document chunking, text embeddings, and vector retrieval pipelines for intelligent assistants." },
];

const rightSkills: SkillItem[] = [
  { title: "Backend & APIs", num: "04", category: "AI & Backend", desc: "Supabase, Firebase, PostgreSQL, and RESTful API backend integrations for production web/mobile apps." },
  { title: "Feature Engineering", num: "05", category: "AI & Backend", desc: "EDA, feature selection, hyperparameter tuning, and Random Forest regression/classification models." },
  { title: "UI/UX & Web", num: "06", category: "AI & Backend", desc: "Framer, modern responsive design systems, typographic hierarchy, and system architecture." },
];

export default function Practice() {
  const [expandedMobileSkill, setExpandedMobileSkill] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const sisyRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
      animation: gsap.fromTo(sisyRef.current,
        { yPercent: 15 },
        { yPercent: -35, ease: "none" }
      )
    });
  }, { scope: containerRef });

  const toggleMobileSkill = (num: string) => {
    setExpandedMobileSkill(prev => prev === num ? null : num);
  };

  return (
    <Section
      id="practice"
      index="03"
      title="Practice / System"
      rightContent={
        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
          IN FOCUS{" "}
          <span className="text-foreground font-bold">01 / 06</span>
        </div>
      }
    >
      <div ref={containerRef} className="relative flex flex-col justify-center min-h-[60vh]">
        {/* Dithered Sisyphus — parallax layer behind the skills grid */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none z-0 overflow-hidden">
          <img
            ref={sisyRef}
            src="/sisy.png"
            alt=""
            aria-hidden="true"
            className="w-[500px] h-[500px] md:w-[640px] md:h-[640px] lg:w-[780px] lg:h-[780px] object-contain opacity-20 will-change-transform"
          />
        </div>

        <div className="relative z-10">
        <RevealText as="h2" className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-16">
          Surface is what<br />
          people see. System is<br />
          what makes it work.
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {/* Left list */}
          <div className="flex flex-col">
            {leftSkills.map((item) => (
              <RevealText key={item.num} delay={Number(item.num) * 0.08}>
                <div 
                  data-cursor="tech"
                  onClick={() => toggleMobileSkill(item.num)}
                  className="py-5 border-b border-grid-line flex flex-col justify-center cursor-pointer group hover:border-brand-red transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 w-full">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold group-hover:text-brand-red transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs border border-brand-red px-2 py-1 rounded text-brand-red">{item.num}</span>
                      {/* Desktop inline subtitle (hidden on mobile, visible on lg) */}
                      <span className="font-mono text-xs text-gray-500 hidden lg:block max-w-[200px]">{item.desc}</span>
                    </div>
                  </div>

                  {/* Strict Mobile-Only Inline Expand under skill heading (md:hidden) */}
                  <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                      expandedMobileSkill === item.num ? 'max-h-40 opacity-100 mt-3 pt-3 border-t border-grid-line/40' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-xs text-gray-400 leading-relaxed font-mono">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>

          {/* Right list */}
          <div className="flex flex-col">
            {rightSkills.map((item) => (
              <RevealText key={item.num} delay={Number(item.num) * 0.08}>
                <div 
                  data-cursor="tech"
                  onClick={() => toggleMobileSkill(item.num)}
                  className="py-5 border-b border-grid-line flex flex-col justify-center cursor-pointer group hover:border-brand-red transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 w-full">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold group-hover:text-brand-red transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs border border-brand-red px-2 py-1 rounded text-brand-red">{item.num}</span>
                      {/* Desktop inline subtitle (hidden on mobile, visible on lg) */}
                      <span className="font-mono text-xs text-gray-500 hidden lg:block max-w-[200px]">{item.desc}</span>
                    </div>
                  </div>

                  {/* Strict Mobile-Only Inline Expand under skill heading (md:hidden) */}
                  <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                      expandedMobileSkill === item.num ? 'max-h-40 opacity-100 mt-3 pt-3 border-t border-grid-line/40' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-xs text-gray-400 leading-relaxed font-mono">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>

        {/* Bottom Surface / System Split */}
        <div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-grid-line">
          <RevealText delay={0.5}>
            <div>
              <h4 className="font-mono text-sm text-brand-red uppercase tracking-widest mb-3">Surface</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Interfaces, rhythm, hierarchy and interaction that make the product clear.
              </p>
            </div>
          </RevealText>
          <RevealText delay={0.6}>
            <div>
              <h4 className="font-mono text-sm text-brand-red uppercase tracking-widest mb-3">System</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Logic, architecture, performance and structure that keep it usable, stable and fast.
              </p>
            </div>
          </RevealText>
        </div>
        </div>
      </div>
    </Section>
  );
}
