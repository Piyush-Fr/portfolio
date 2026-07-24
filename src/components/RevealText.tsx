"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function RevealText({ children, delay = 0, className = "", as = "div" }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const Component = motion[as as keyof typeof motion] as any;

  return (
    <div ref={ref} className="overflow-hidden block w-full">
      <Component
        className={`block ${className}`}
        initial={{ y: "110%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // smooth ease-out
          delay: delay,
        }}
      >
        {children}
      </Component>
    </div>
  );
}
