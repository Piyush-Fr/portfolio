"use client";

import { useEffect, useState, useRef } from "react";

export default function SectionScrollLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [thumbY, setThumbY] = useState(0);

  useEffect(() => {
    let rafId: number;

    const updateScrollThumb = () => {
      if (lineRef.current) {
        const parent = lineRef.current.parentElement;
        if (parent) {
          const parentRect = parent.getBoundingClientRect();
          const viewportH = window.innerHeight;
          const sectionHeight = parentRect.height;
          const thumbHeight = 80; // 80px (h-20)
          const maxThumbTravel = sectionHeight - thumbHeight;

          // Calculate how far section has scrolled relative to viewport
          const scrolled = -parentRect.top;
          const maxScroll = sectionHeight - viewportH;

          let ratio = 0;
          if (maxScroll > 0) {
            ratio = Math.max(0, Math.min(1, scrolled / maxScroll));
          } else {
            // For sections smaller than viewport height
            const totalTravel = sectionHeight + viewportH;
            const currentPos = viewportH - parentRect.top;
            ratio = Math.max(0, Math.min(1, currentPos / totalTravel));
          }

          setThumbY(ratio * maxThumbTravel);
        }
      }
      rafId = requestAnimationFrame(updateScrollThumb);
    };

    rafId = requestAnimationFrame(updateScrollThumb);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={lineRef}
      className="hidden md:block absolute top-0 bottom-0 -right-[1.5px] w-[3px] pointer-events-none z-30"
    >
      {/* Traveling scroll thumb indicator pill along the right border line */}
      <div
        className="w-full h-20 bg-brand-red rounded-full shadow-sm"
        style={{ 
          transform: `translate3d(0, ${thumbY}px, 0)`,
          willChange: "transform"
        }}
      />
    </div>
  );
}
