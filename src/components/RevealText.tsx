"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType | string;
}

export default function RevealText({ children, delay = 0, className = "", as: Component = "div" }: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Intense starting state: translated down, slightly transparent, and rotated away
    gsap.set(textRef.current, { 
      yPercent: 130, 
      opacity: 0, 
      rotateX: -45, 
      transformOrigin: "0% 50% -50" 
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 90%", // Trigger slightly earlier for better UX
      onEnter: () => {
        gsap.to(textRef.current, {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "expo.out", // Very punchy start, buttery smooth tail
          delay: delay,
          overwrite: "auto"
        });
      },
      once: true
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="overflow-hidden block w-full" style={{ perspective: "1000px" }}>
      <Component ref={textRef} className={`block ${className}`}>
        {children}
      </Component>
    </div>
  );
}
